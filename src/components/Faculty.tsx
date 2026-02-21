import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

const Faculty = () => {
  const teachers = [
    {
      name: "Prof. R.K. Singh",
      role: "Founder & Physics Expert",
      exp: "18+ Years",
      img: "https://picsum.photos/seed/teacher1/400/500",
      bio: "Former HOD at a leading institute, dedicated to making Physics intuitive."
    },
    {
      name: "Dr. Anjali Verma",
      role: "Chemistry Specialist",
      exp: "12+ Years",
      img: "https://picsum.photos/seed/teacher2/400/500",
      bio: "PhD in Organic Chemistry, known for her unique memory techniques."
    },
    {
      name: "Mr. Amit Kumar",
      role: "Mathematics Mentor",
      exp: "15+ Years",
      img: "https://picsum.photos/seed/teacher3/400/500",
      bio: "Expert in competitive Math and board exam strategies."
    },
    {
      name: "Ms. Priya Sahay",
      role: "Biology Educator",
      exp: "10+ Years",
      img: "https://picsum.photos/seed/teacher4/400/500",
      bio: "Passionate about life sciences and medical entrance foundation."
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Meet Our Experts</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Learn from the Best Minds in Patna
          </h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Our faculty members are not just teachers, but mentors who guide students towards academic excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5] shadow-lg group-hover:shadow-2xl transition-all">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{teacher.name}</h4>
                <p className="text-primary font-semibold text-sm mb-3">{teacher.role}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mb-4">
                  <GraduationCap size={14} />
                  <span>{teacher.exp} Exp.</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  {teacher.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
