const fs = require('fs');
const https = require('https');

// Ссылка на оригинальное видео
const url = 'https://ext.same-assets.com/3537791040/2334686913.mp4';
// Сохраняем сразу как my-hero.mp4, так как в коде Hero.tsx мы прописали именно это имя
const dest = 'public/my-hero.mp4';

const file = fs.createWriteStream(dest);

console.log('⏳ Качаю главное видео...');

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('✅ Видео скачано! Теперь обнови сайт.');
  });
}).on('error', (err) => {
  console.error('Ошибка:', err.message);
});