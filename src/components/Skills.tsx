import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Mobil Geliştirme',
      skills: ['Flutter', 'Dart', 'Swift', 'iOS', 'FlutterFlow'],
    },
    {
      title: 'Web Teknolojileri',
      skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
    },
    {
      title: 'Veri & Yapay Zeka',
      skills: ['Python', 'SQL', 'MySQL', 'Machine Learning'],
    },
    {
      title: 'Araçlar & Diğer',
      skills: ['Postman', 'Figma', 'Git', 'REST API', 'BLoC'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 mb-4">Beceriler</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
            >
              <h3 className="text-purple-600 mb-6 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3 text-center text-gray-700 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills as Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {['JPA', 'Hive', 'Provider', 'Dio', 'SharedPreferences', 'Easy Localization', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-full text-purple-600 shadow-md cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
