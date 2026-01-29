const fs = require('fs');
const https = require('https');
const path = require('path');

// Список всех файлов, которые нужно скачать
const assets = [
  // --- ЛОГОТИПЫ И ИКОНКИ ---
  { url: 'https://ext.same-assets.com/3537791040/3631543996.png', dest: 'public/icons/logo.png' },
  { url: 'https://ext.same-assets.com/3537791040/4079131857.png', dest: 'public/icons/logo-footer.png' },
  { url: 'https://ext.same-assets.com/3537791040/2586660105.png', dest: 'public/icons/cart.png' },
  { url: 'https://ext.same-assets.com/3537791040/2675781333.png', dest: 'public/icons/menu.png' },
  { url: 'https://ext.same-assets.com/3537791040/2511742489.png', dest: 'public/icons/close.png' },
  { url: 'https://ext.same-assets.com/3537791040/477656590.png',  dest: 'public/icons/arrow-up.png' },
  { url: 'https://ext.same-assets.com/3537791040/3702541881.png', dest: 'public/icons/arrow-right.png' },
  { url: 'https://ext.same-assets.com/3537791040/3332898589.png', dest: 'public/icons/arrow-small.png' },
  { url: 'https://ext.same-assets.com/3537791040/1817013190.png', dest: 'public/images/menu-bg.png' },

  // --- СОЦСЕТИ ---
  { url: 'https://ext.same-assets.com/3537791040/1976147198.png', dest: 'public/icons/instagram.png' },
  { url: 'https://ext.same-assets.com/3537791040/897615109.png',  dest: 'public/icons/youtube.png' },
  { url: 'https://ext.same-assets.com/3537791040/1118654025.png', dest: 'public/icons/facebook.png' },
  { url: 'https://ext.same-assets.com/3537791040/3360554540.png', dest: 'public/icons/linkedin.png' },

  // --- КАРТИНКИ (Обучение и Новости) ---
  { url: 'https://ext.same-assets.com/3537791040/4185421862.jpeg', dest: 'public/images/content-1.jpg' },
  { url: 'https://ext.same-assets.com/3537791040/264524728.jpeg',  dest: 'public/images/content-2.jpg' },
  { url: 'https://ext.same-assets.com/3537791040/2383290178.png',  dest: 'public/images/content-3.png' },
  
  // --- ВИДЕО (На всякий случай, если твое не сработает) ---
  { url: 'https://ext.same-assets.com/3537791040/4216499459.mp4', dest: 'public/videos/product-video.mp4' },
];

const download = (url, dest) => {
  const file = fs.createWriteStream(dest);
  const dir = path.dirname(dest);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`❌ Ошибка загрузки: ${url}`);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`✅ Скачано: ${dest}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`❌ Ошибка сети: ${err.message}`);
  });
};

console.log('🚀 Начинаю скачивание файлов...');
assets.forEach(asset => download(asset.url, asset.dest));