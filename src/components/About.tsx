import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="text-primary" />,
      title: "Goal Oriented",
      desc: "Focused on board exams and competitive entrance preparation."
    },
    {
      icon: <Users className="text-secondary" />,
      title: "Expert Mentors",
      desc: "Learn from teachers with 15+ years of experience in Patna."
    },
    {
      icon: <Award className="text-orange-500" />,
      title: "Proven Results",
      desc: "Consistently producing toppers in CBSE & BSEB exams."
    },
    {
      icon: <BookOpen className="text-blue-500" />,
      title: "Modern Pedagogy",
      desc: "Interactive classes with digital aids and regular assessments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Transforming Education in Patna Since 2024
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Revolution Classes was founded with a single mission: to provide high-quality, affordable education to students in Bihar. We believe that every student has the potential to excel if given the right guidance and environment.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From a small classroom with 10 students to one of Patna's most trusted coaching institutes, our journey has been fueled by the success of our students and the trust of their parents.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{f.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/classroom-patna/800/800"
                alt="Revolution Classes Classroom"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Founder Message Card */}
            <div className="relative mt-8 lg:mt-0 lg:absolute lg:-bottom-10 lg:right-10 bg-primary text-white p-6 md:p-8 rounded-3xl shadow-2xl lg:max-w-sm">
              <p className="italic text-base md:text-lg mb-4">
                "Our goal is not just to teach subjects, but to ignite a passion for learning that lasts a lifetime."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 overflow-hidden">
                  <img src="https://picsum.photos/seed/rk-singh/100/100" alt="RK Singh" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base">Prof. R.K. Singh</p>
                  <p className="text-[10px] md:text-xs opacity-80">Founder, Revolution Classes</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
