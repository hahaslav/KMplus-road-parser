# Отримання коорднат дороги за допомогою KMplus API
## Використання
У сервісі [Google Apps Script](https://script.google.com/home) створіть новий проект, потім вставте код із файла *[parser.gs](https://github.com/hahaslav/KMplus-road-parser/blob/main/parser.gs)*. У стрічки 3 - 7 внесіть параметри, збережіть та запустіть код. При першому використанні надайте необхідні дозволи. Коли виконання коду завершиться, вам на електронну пошту прийде лист із координатами дороги.
## Прочитання отриманих даних
1. Почніть запускати [JOSM](https://josm.openstreetmap.de).
2. Скопіюйте координати із листа.
3. У JOSM виберіть *Файл>Новий шар* (*Ctrl+N*).
4. Виберіть *Ще...>Створити за координатами* (*Ctrl+Shift+L*):
    * У полі *Координати:* вставте координати.
    * Нижче виберіть *Way*.
5. Натисніть *Ctrl+A* та *3*.
6. Готово!
