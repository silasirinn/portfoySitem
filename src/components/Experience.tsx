import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Matrix Teknoloji A.Ş',
      position: 'Mobil Uygulama Geliştirici',
      location: 'İstanbul, Türkiye',
      period: '01/02/2025 – 01/05/2025',
      responsibilities: [
        'Bir anaokulu projesinin arayüz kısmını Flutter ile geliştirdim. Bu projede responsive yapısından ve çoklu dil desteğinden de yararlandım.',
        'Şirketin kendi geliştirdiği Digigarson adlı projenin Garson El Terminali uygulamasını tamamlamada rol aldım. Önce tasarımını FlutterFlow\'dan oluşturdum. Daha sonra projenin arayüz ve backendini Flutter ile tamamladım.',
        'GitHub kullanma yetkinliğine sahip oldum.',
        'Çalışma ortamını daha iyi anlama ve deneyimleme fırsatı edindim.',
        'Gerçek bir projede görev alarak Flutter alanında kendimi daha iyi geliştirdim.',
      ],
      technologies: ['Flutter', 'Dart', 'FlutterFlow', 'GitHub', 'Responsive Design', 'Çoklu Dil Desteği'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 mb-4">İş Deneyimi</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Header Gradient */}
                <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600" />

                <div className="p-8">
                  {/* Company Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-3 rounded-xl shadow-lg"
                        >
                          <Briefcase size={28} />
                        </motion.div>
                        <div>
                          <h3 className="text-gray-900 mb-1">{exp.position}</h3>
                          <p className="text-purple-600 mb-2">{exp.company}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 gap-2">
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-1" />
                              <span>{exp.location}</span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-1" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 mb-4">Sorumluluklar & Başarılar</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          className="flex items-start"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="bg-purple-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0"
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                          <p className="text-gray-700">{responsibility}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-gray-900 mb-3">Kullanılan Teknolojiler</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full shadow-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-40 -z-10"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-40 -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
