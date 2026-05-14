# Берем легкую версию Node.js
FROM node:20-alpine

# Создаем рабочую папку
WORKDIR /app

# Копируем сначала файлы с зависимостями
COPY package.json package-lock.json* ./

# Устанавливаем пакеты
RUN npm install

# Копируем ВЕСЬ остальной проект
COPY . .

# Собираем ту самую злосчастную папку .next прямо внутри контейнера
RUN npm run build

# Открываем 3000 порт
EXPOSE 3000

# Запускаем сайт
CMD ["npm", "start"]