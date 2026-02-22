import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

const Faculty = () => {
  const teachers = [
    {
      name: "Prof. R.K. Singh",
      role: "Founder & Physics Expert",
      qualification: "M.Sc. (Physics), B.Ed",
      exp: "18+ Years",
      img: "https://picsum.photos/seed/teacher1/400/500",
      bio: "Former HOD at a leading institute, dedicated to making Physics intuitive and accessible for all students."
    },
    {
      name: "Dr. Anjali Verma",
      role: "Chemistry Specialist",
      qualification: "Ph.D. (Organic Chemistry)",
      exp: "12+ Years",
      img: "https://picsum.photos/seed/teacher2/400/500",
      bio: "Expert in Organic Chemistry with a focus on competitive exam patterns and memory-enhancing techniques."
    },
    {
      name: "Mr. Amit Kumar",
      role: "Mathematics Mentor",
      qualification: "B.Tech (IIT Kanpur)",
      exp: "15+ Years",
      img: "https://picsum.photos/seed/teacher3/400/500",
      bio: "Specializes in advanced calculus and algebra, helping students crack top-tier engineering entrance exams."
    },
    {
      name: "Ms. Priya Sahay",
      role: "Biology Educator",
      qualification: "M.Sc. (Zoology), NEET Expert",
      exp: "10+ Years",
      img: "https://picsum.photos/seed/teacher4/400/500",
      bio: "Passionate about life sciences, providing deep insights into medical entrance foundation and board exams."
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Faculty Showcase</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Expert Mentors with Proven Credentials
          </h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Our teachers bring decades of collective experience and top-tier academic qualifications to help you succeed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-sm">
                  {teacher.exp} Experience
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{teacher.name}</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">{teacher.role}</p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <GraduationCap size={14} className="text-secondary" />
                    <span>{teacher.qualification}</span>
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                  "{teacher.bio}"
                </p>

                <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center">
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                      <Linkedin size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                      <Mail size={14} />
                    </button>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Profile</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
