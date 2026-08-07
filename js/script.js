// ===== Меню (одинаковое на всех страницах) =====
const NAV_LINKS = [
  { href: 'index.html',            title: 'Главная' },
  { href: 'pages/programs.html',   title: 'Программы' },
  { href: 'pages/admissions.html', title: 'Абитуриентам' },
  { href: 'pages/about.html',      title: 'О школе' },
  { href: 'pages/workshops.html',  title: 'Мастерские' },
  { href: 'pages/employment.html', title: 'Трудоустройство' },
  { href: 'pages/news.html',       title: 'Новости' },
  { href: 'pages/contacts.html',   title: 'Контакты' },
];

// Определяем, в подпапке pages/ мы или в корне
const inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');

// Правильный относительный путь с учётом вложенности
function resolveHref(href){
  if (href === 'index.html') return inPages ? '../index.html' : 'index.html';
  const page = href.replace('pages/', '');
  return inPages ? page : 'pages/' + page;
}

// Текущая страница (для подсветки активной кнопки)
const current = window.location.pathname.split('/').pop() || 'index.html';
const activeKey = inPages ? 'pages/' + current : current;

const LOGO_SVG = `
<svg viewBox="0 0 24 24" width="42" height="42" fill="none" aria-hidden="true">
  <path d="M3 21h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M5 21V9l7-5 7 5v12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 21v-6h6v6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>`;

function renderHeader(){
  const slot = document.getElementById('header-placeholder');
  if (!slot) return;

  const links = NAV_LINKS.map(l => {
    const active = l.href === activeKey ? ' active' : '';
    return `<a href="${resolveHref(l.href)}" class="nav-link${active}">${l.title}</a>`;
  }).join('');

  slot.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${resolveHref('index.html')}" class="logo">
        ${LOGO_SVG}
        <span class="logo-text">
          <strong>Школа строительных профессий</strong>
          <small>общетехнических и строительных дисциплин</small>
        </span>
      </a>
      <nav class="main-nav" id="main-nav">${links}</nav>
      <button class="burger" id="burger" aria-label="Открыть меню">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('open');
  });
}

function renderFooter(){
  const slot = document.getElementById('footer-placeholder');
  if (!slot) return;

  const navLinks = NAV_LINKS.slice(1).map(l =>
    `<a href="${resolveHref(l.href)}">${l.title}</a>`).join('');

  slot.innerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="logo-footer">${LOGO_SVG}<span>Школа строительных профессий</span></div>
        <p>Готовим квалифицированных специалистов для строительной отрасли: от сварщика до мастера отделочных работ.</p>
      </div>
      <div>
        <h4>Разделы</h4>
        ${navLinks}
      </div>
      <div>
        <h4>Контакты</h4>
        <p>г. Ваш город, ул. Строителей, 1</p>
        <p>+7 (000) 000-00-00</p>
        <p>info@school.example</p>
      </div>
    </div>
    <div class="footer-bottom">© 2026 Школа общетехнических и строительных профессий</div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
