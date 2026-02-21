import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, BookOpen, Check } from 'lucide-react';

const Courses = () => {
  const batches = [
    {
      title: "Junior Foundation",
      classes: "Classes 4 - 7",
      subjects: ["Maths", "Science", "English", "SST"],
      timing: "4:00 PM - 6:00 PM",
      fee: "₹1,500/month",
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      title: "Middle School Mastery",
      classes: "Classes 8 - 9",
      subjects: ["Physics", "Chemistry", "Maths", "Bio", "SST"],
      timing: "3:30 PM - 6:30 PM",
      fee: "₹2,200/month",
      color: "bg-orange-500",
      lightColor: "bg-orange-50"
    },
    {
      title: "Board Exam Special",
      classes: "Class 10 (CBSE/BSEB)",
      subjects: ["All Main Subjects", "Test Series", "Revision"],
      timing: "7:00 AM - 10:00 AM",
      fee: "₹3,000/month",
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50"
    },
    {
      title: "Senior Secondary",
      classes: "Class 11 - 12 (PCM/PCB)",
      subjects: ["Physics", "Chemistry", "Maths/Bio"],
      timing: "10:00 AM - 2:00 PM",
      fee: "₹4,500/month",
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Programs</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Batches Tailored for Every Student
          </h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We offer specialized batches for different classes and boards to ensure every student gets the attention they need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {batches.map((batch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
            >
              <div className={`${batch.color} p-6 text-white`}>
                <h4 className="text-xl font-bold mb-1">{batch.title}</h4>
                <p className="text-white/80 text-sm font-medium">{batch.classes}</p>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock size={18} className="text-slate-400" />
                    <span className="text-sm">{batch.timing}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <BookOpen size={18} className="text-slate-400 mt-1" />
                    <div className="flex flex-wrap gap-1">
                      {batch.subjects.map((s, i) => (
                        <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded-md">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {['Personalized Notes', 'Weekly Test Series', 'Doubt Sessions'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                      <Check size={14} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-sm">Fee:</span>
                  <span className="text-2xl font-bold text-slate-900">{batch.fee}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-bold text-white transition-all ${batch.color} hover:brightness-110 shadow-lg`}>
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
