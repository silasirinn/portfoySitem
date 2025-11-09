import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Market Stok Takip Paneli',
      date: '30/05/2025 – 15/06/2025',
      description:
        'Kasiyer ürünleri okutur, satış yapılır, stok otomatik güncellenir. Ürün ekleme/güncelleme/silme, satış ekranı, günlük/haftalık raporları ve iade işlemlerini destekler.',
      technologies: ['Spring Boot', 'JPA', 'MySQL', 'HTML-CSS', 'JavaScript', 'Postman'],
      github: 'https://github.com/silasirinn/marketapp.git',
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'ToDoApp',
      date: '25/05/2025 – 28/05/2025',
      description:
        'Flutter ile geliştirilen mobil uygulama, kullanıcıların günlük görevlerini çevrimdışı olarak yönetmelerini sağlar. Görev CRUD işlemleri, kalıcı veri saklama (offline destek) ve modern UI tasarımı sunar.',
      technologies: ['Flutter', 'Dart', 'Hive', 'Provider'],
      color: 'from-pink-400 to-purple-500',
    },
    {
      title: 'Garson El Terminali',
      date: '10/03/2025 – 20/04/2025',
      description:
        'Restoranlarda garsonların masa, sandalye ve ürün siparişlerini kolayca yönetebilmesi için geliştirildi. BLoC mimarisi, gerçek RESTful API entegrasyonu ve çoklu dil desteği ile tam işlevsel POS çözümü.',
      technologies: ['Flutter', 'Dart', 'BLoC', 'REST API', 'Dio', 'SharedPreferences', 'Easy Localization'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Kalp Yetmezliği Tahmin Sistemi',
      date: '07/10/2024 – 20/01/2025',
      description:
        'UCI kaynaklı üç veri seti birleştirilerek, veri temizleme ve öznitelik seçimi sonrası 12 farklı makine öğrenmesi algoritması test edildi. Random Forest ve SVM birleşimiyle özgün S1LA modeli geliştirildi. %98.97 doğruluk ve 1.00 AUC skoru.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      link: 'https://www.linkedin.com/posts/sıla-şirin-8b8865323_yapay-zeka-ar-ge-çalışması-activity-7298069104144310273-EiHt',
      color: 'from-purple-600 to-pink-400',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 mb-4">Projeler</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{project.date}</span>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white px-3 py-1 rounded-full text-purple-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
