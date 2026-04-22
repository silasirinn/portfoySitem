# ✨ Sıla Şirin — Kişisel Portföy

Premium, büyülü ve modern bir kişisel portföy sitesi. Mor & lavanta tonları, cam efektleri, imleç peri tozları ve yıldız parçacıklarıyla tasarlandı.

## 🚀 Hızlı Başlangıç

```bash
# 1. Paketleri yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. Üretim build'i
npm run build
npm run preview
```

Sunucu genellikle `http://localhost:5173` adresinde açılır.

## 📂 Proje Yapısı

```
portfolio/
├── index.html                    # HTML giriş noktası, Google Fonts
├── package.json                  # React + Vite + Tailwind + lucide-react
├── vite.config.js
├── tailwind.config.js            # Özel renkler, animasyonlar, fontlar
├── postcss.config.js
├── public/
│   └── sila-portrait.png         # Pixel art portre
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Ana uygulama - tüm bölümleri birleştirir
    ├── index.css                 # Tailwind + özel stiller (sparkle, glass, orb)
    └── components/
        ├── effects.jsx           # Sparkle cursor, atmosfer BG, scroll reveal
        ├── Navbar.jsx            # Yapışkan nav + mobil menü
        ├── Hero.jsx              # Pixel art portre + parallax
        ├── SectionHeader.jsx     # Ortak bölüm başlığı
        ├── About.jsx             # Hakkımda + 3 öne çıkan kart
        ├── Skills.jsx            # 4 kategorili beceri ızgarası
        ├── EducationExperience.jsx  # Eğitim zaman çizelgesi + deneyim
        ├── Projects.jsx          # 2 kategoride 8 proje kartı
        └── ContactFooter.jsx     # İletişim formu + footer
```

## 🎨 Tasarım Sistemi

- **Ana renk:** Lavanta / Mor gradyanlar (`#7c54ff` → `#bca6ff` → `#86b5ff`)
- **Fontlar:** Playfair Display (başlık), Outfit (gövde), JetBrains Mono (aksan)
- **Efektler:** Glassmorphism, parıltı, parallax, peri tozu imleç izi
- **Animasyonlar:** Scroll reveal, yüzen orblar, dönen halo, parıltı yıldızlar

## ♿ Erişilebilirlik

- `prefers-reduced-motion` desteklenir — tüm animasyonlar otomatik kapanır.
- Dokunmatik cihazlarda imleç efekti otomatik devre dışı.
- Semantik HTML (`<header>`, `<main>`, `<section>`, `<footer>`).

## 📱 Responsive

Mobil (320px+), tablet (768px+), masaüstü (1024px+) için optimize edildi.

## 🛠 Düzenleme İpuçları

- İçerik metinleri ilgili bileşen dosyalarında sabit olarak duruyor.
- Renk paleti `tailwind.config.js` içinde `lavender` ve `midnight` altında.
- İmleç efektleri `src/components/effects.jsx` → `SparkleCursor` içinde.

---

💜 React + Tailwind CSS ile yapıldı.
