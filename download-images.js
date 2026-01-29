const fs = require('fs');
const path = require('path');
const https = require('https');

// Настройки
const PAGE_URL = 'https://www.izenimplant.com/about/manufacture.php';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images', 'manufacturing');

// Создаем папку
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Заголовки как у настоящего браузера (чтобы не заблокировали)
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Referer': 'https://www.izenimplant.com/'
};

const downloadFile = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(OUTPUT_DIR, filename));
    https.get(url, { headers: HEADERS }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Статус ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Сохранено: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(OUTPUT_DIR, filename), () => {});
      reject(err);
    });
  });
};

console.log('🕵️‍♂️  Притворяемся браузером и заходим на сайт...');

https.get(PAGE_URL, { headers: HEADERS }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  
  res.on('end', async () => {
    // Улучшенный поиск картинок (ищет в папке img/about или img/sub)
    const imgRegex = /src="([^"]+\.(?:jpg|png|gif))"/g;
    let match;
    const foundImages = [];

    while ((match = imgRegex.exec(data)) !== null) {
      let src = match[1];
      // Фильтруем именно картинки производства (обычно в папке about или sub)
      if (!src.startsWith('http')) {
        src = 'https://www.izenimplant.com' + (src.startsWith('/') ? '' : '/about/') + src;
      }
      
      // Исключаем логотипы и мелкие иконки
      if (!foundImages.includes(src) && !src.includes('logo') && !src.includes('icon')) {
        foundImages.push(src);
      }
    }

    console.log(`🔎 Найдено картинок: ${foundImages.length}`);
    
    // Скачиваем первые 9 подходящих
    let count = 0;
    for (const imgUrl of foundImages) {
      if (count >= 9) break;
      console.log(`⬇️  Качаем: ${imgUrl}`);
      try {
        await downloadFile(imgUrl, `step-${count + 1}.jpg`);
        count++;
      } catch (e) {
        console.log(`❌ Ошибка: ${e.message}`);
      }
    }
    console.log('🏁 Готово! Проверяй папку.');
  });
}).on('error', (e) => console.log(`Ошибка: ${e.message}`));