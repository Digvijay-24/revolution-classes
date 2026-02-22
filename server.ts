import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for enquiry form
  app.post("/api/enquiry", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone are required" });
    }

    try {
      // 1. Save to Google Sheets
      if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
        const serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0]; // Assuming first sheet
        await sheet.addRow({
          Timestamp: new Date().toLocaleString(),
          Name: name,
          Email: email || "N/A",
          Phone: phone,
          Message: message || "N/A",
        });
      }

      // 2. Send Email Notification
      const notificationEmail = process.env.NOTIFICATION_EMAIL || "monu24641@gmail.com";
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Revolution Classes <onboarding@resend.dev>",
          to: notificationEmail,
          subject: `New Student Enquiry: ${name}`,
          html: `
            <h2>New Enquiry Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || "N/A"}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message || "N/A"}</p>
            <hr />
            <p>This enquiry has also been saved to your Google Sheet.</p>
          `,
        });
      }

      res.json({ success: true, message: "Enquiry submitted successfully" });
    } catch (error: any) {
      console.error("Enquiry submission error:", error);
      res.status(500).json({ error: "Failed to submit enquiry. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
