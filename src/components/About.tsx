import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Sparkles, Heart } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code2,
      title: 'Mobil Geliştirme',
      description: 'Flutter ve iOS ile modern mobil uygulamalar geliştiriyorum.',
    },
    {
      icon: Sparkles,
      title: 'Web Teknolojileri',
      description: 'HTML, CSS, JavaScript ve modern framework\'lerle web projeleri üretiyorum.',
    },
    {
      icon: Heart,
      title: 'Yapay Zeka',
      description: 'Makine öğrenmesi ve veri bilimi alanında projeler geliştiriyorum.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 mb-4">Hakkımda</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-lg opacity-30" />
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8">
                <p className="text-gray-700 leading-relaxed">
                  Beykent Üniversitesi Yazılım Mühendisliği bölümünde 4. sınıf öğrencisiyim. 
                  Kendimi mobil, web ve yapay zeka alanlarında geliştirmekteyim. Şu an Flutter 
                  ve iOS mobil geliştirme yapmaktayım. Bunun yanı sıra öğrenmeye ve kendimi 
                  daha çok geliştirmeye açık biriyim.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors duration-300"
              >
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
