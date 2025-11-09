import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Yazılım Mühendisliği',
      school: 'İstanbul Beykent Üniversitesi',
      period: '2022 - 2026',
      current: true,
      description: '4. Sınıf Öğrencisi',
    },
    {
      degree: 'Lise Diploması',
      school: 'Dede Korkut Anadolu Lisesi',
      period: '2017 - 2021',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 mb-4">Eğitim</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-600 md:left-1/2 md:transform md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                <div className="ml-16 md:ml-0">
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`absolute left-8 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg md:left-1/2 md:transform md:-translate-x-1/2 ${
                      edu.current ? 'animate-pulse' : ''
                    }`}
                  />

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <div className="bg-purple-600 text-white p-2 rounded-lg">
                          <GraduationCap size={24} />
                        </div>
                        {edu.current && (
                          <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
                            Devam Ediyor
                          </span>
                        )}
                      </div>

                      <h3 className="text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-purple-600 mb-3">{edu.school}</p>

                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>

                      {edu.description && (
                        <p className="text-gray-600">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
