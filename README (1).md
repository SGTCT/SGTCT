# Папка images

Сюда нужно положить реальные фотографии. Сейчас на сайте вместо картинок — текстовые заглушки
(блоки с пунктирной рамкой и подписью), чтобы структуру страницы было видно уже сейчас.

Когда появятся фото, замените в `index.html` блоки `<div class="img-placeholder">...</div>`
на `<img src="images/имя-файла.jpg" alt="...">` с соответствующим описанием.

Рекомендуемый список файлов (можно называть иначе — главное потом поправить пути в HTML):

- hero-workshop.jpg — мастерская с оборудованием (хиро-блок)
- hero-student.jpg — студент на практике на объекте
- program-finishing.jpg — отделка
- program-facade.jpg — фасад
- program-masonry.jpg — камень
- program-concrete.jpg — ЖБК
- program-electrical.jpg — электрика
- program-plumbing.jpg — сантехника
- facilities-overview.jpg — общий план мастерских
- facilities-safety.jpg — зона безопасности
- facilities-electrical-lab.jpg — электрощитовая лаборатория
- gallery-1.jpg … gallery-6.jpg — фото и видео для галереи
- partner-1.png … partner-4.png — логотипы партнёров
- map.jpg (или встроенная карта) — блок с картой в разделе «Контакты»

Логотип школы сейчас нарисован CSS (не картинка) — отдельный файл не нужен, если не захотите заменить его на svg/png.
