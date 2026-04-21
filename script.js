/* ===== CONFIG ===== */
const WHATSAPP_NUMBER = '77003038483';
const INSTAGRAM_URL = 'https://instagram.com/babun.kz';

/* ===== TRANSLATIONS ===== */
const translations = {
  ru: {
    'nav.catalog': 'Каталог',
    'nav.about': 'О нас',
    'nav.address': 'Контакты',
    'hero.tagline': '10 лет на рынке',
    'hero.headline': 'Двери. Лестницы.<br>Шпон панели.',
    'hero.sub': 'Качественные изделия из натурального дерева для вашего дома',
    'hero.ctaCatalog': 'Смотреть каталог',
    'hero.ctaWhatsApp': 'Написать в WhatsApp',
    'hero.years': 'лет опыта',
    'about.label': 'Наша компания',
    'about.title': 'О компании Babun.kz',
    'about.stat1': 'лет на рынке',
    'about.stat2': 'выполненных проектов',
    'about.stat3': 'категории продукции',
    'about.stat4': 'производство Казахстан',
    'about.body': 'Компания Babun.kz специализируется на производстве дверей, лестниц и шпоновых панелей из натурального дерева. Мы работаем на рынке более 10 лет и за это время выполнили тысячи проектов для частных домов, квартир и коммерческих объектов.',
    'about.body2': 'Каждое изделие изготавливается вручную с особым вниманием к деталям. Мы используем только качественное сырьё и современное оборудование.',
    'about.igBtn': 'Наши работы в Instagram',
    'catalog.label': 'Наша продукция',
    'catalog.title': 'Каталог',
    'catalog.subtitle': 'Выберите интересующие товары и отправьте запрос через WhatsApp',
    'catalog.tabs.doors': 'Двери',
    'catalog.tabs.stairs': 'Лестницы',
    'catalog.tabs.veneer': 'Шпон панели',
    'catalog.selected': ' товар(а) выбрано',
    'catalog.send': 'Отправить в WhatsApp',
    'instagram.title': 'Наши работы',
    'instagram.cta': 'Смотреть все работы',
    'address.label': 'Найдите нас',
    'address.title': 'Контакты',
    'address.addressLabel': 'Адрес',
    'address.address': 'г. Шымкент, ул. Шаяхметова, 73/2',
    'address.phoneLabel': 'Телефон',
    'address.hoursLabel': 'Режим работы',
    'address.hours': 'Пн–Сб: 9:00 – 18:00',
    'address.mapBtn': '2GIS-те ашу',
    'footer.tagline': 'Качество из натурального дерева',
    'footer.rights': '© 2024 Babun.kz. Все права защищены.',
  },
  kz: {
    'nav.catalog': 'Каталог',
    'nav.about': 'Біз туралы',
    'nav.address': 'Байланыс',
    'hero.tagline': 'Нарықта 10 жыл',
    'hero.headline': 'Есіктер. Баспалдақтар.<br>Шпон панельдері.',
    'hero.sub': 'Үйіңіз үшін табиғи ағаштан жасалған сапалы бұйымдар',
    'hero.ctaCatalog': 'Каталогты қарау',
    'hero.ctaWhatsApp': 'WhatsApp-қа жазу',
    'hero.years': 'жыл тәжірибе',
    'about.label': 'Біздің компания',
    'about.title': 'Babun.kz компаниясы туралы',
    'about.stat1': 'жыл нарықта',
    'about.stat2': 'орындалған жобалар',
    'about.stat3': 'өнім санаты',
    'about.stat4': 'Қазақстан өндірісі',
    'about.body': 'Babun.kz компаниясы табиғи ағаштан есіктер, баспалдақтар және шпон панельдерін өндіруге маманданған. Біз нарықта 10 жылдан астам жұмыс жасаймыз және осы уақыт ішінде жеке үйлер, пәтерлер мен коммерциялық нысандар үшін мыңдаған жобаларды орындадық.',
    'about.body2': 'Әр бұйым қолмен жасалады, бөлшектерге ерекше назар аударылады. Біз тек сапалы шикізат пен заманауи жабдықты қолданамыз.',
    'about.igBtn': 'Instagram-дағы жұмыстарымыз',
    'catalog.label': 'Біздің өнімдер',
    'catalog.title': 'Каталог',
    'catalog.subtitle': 'Қызықты тауарларды таңдап, WhatsApp арқылы сұрау жіберіңіз',
    'catalog.tabs.doors': 'Есіктер',
    'catalog.tabs.stairs': 'Баспалдақтар',
    'catalog.tabs.veneer': 'Шпон панельдері',
    'catalog.selected': ' тауар таңдалды',
    'catalog.send': 'WhatsApp-қа жіберу',
    'instagram.title': 'Біздің жұмыстар',
    'instagram.cta': 'Барлық жұмыстарды қарау',
    'address.label': 'Бізді табыңыз',
    'address.title': 'Байланыс',
    'address.addressLabel': 'Мекенжай',
    'address.address': 'Шымкент қ., Шаяхметова к., 73/2',
    'address.phoneLabel': 'Телефон',
    'address.hoursLabel': 'Жұмыс уақыты',
    'address.hours': 'Дс–Сб: 9:00 – 18:00',
    'address.mapBtn': '2GIS-те ашу',
    'footer.tagline': 'Табиғи ағаштан жасалған сапа',
    'footer.rights': '© 2024 Babun.kz. Барлық құқықтар қорғалған.',
  }
};

/* ===== CATALOG DATA ===== */
const products = [
  // DOORS
  { id: 'door-01', cat: 'doors', nameRu: 'Дверь чёрная классика', nameKz: 'Қара классикалық есік', img: 'images/catalog/doors/door-01.jpg' },
  { id: 'door-02', cat: 'doors', nameRu: 'Дверь шпон елочка',     nameKz: 'Шпон "балёчка" есік',  img: 'images/catalog/doors/door-02.jpg' },
  { id: 'door-03', cat: 'doors', nameRu: 'Раздвижная + белая',    nameKz: 'Сырғымалы + ақ есік',  img: 'images/catalog/doors/door-03.jpg' },
  { id: 'door-04', cat: 'doors', nameRu: 'Белая высокая классика', nameKz: 'Ақ биік классика',     img: 'images/catalog/doors/door-04.jpg' },
  { id: 'door-05', cat: 'doors', nameRu: 'Серая с подсветкой',    nameKz: 'Жарықтандырылған сұр', img: 'images/catalog/doors/door-05.jpg' },
  { id: 'door-06', cat: 'doors', nameRu: 'Серая с декором',       nameKz: 'Сәндік сұр есік',      img: 'images/catalog/doors/door-06.jpg' },
  { id: 'door-07', cat: 'doors', nameRu: 'Арочная со стеклом',    nameKz: 'Доғал шынылы есік',    img: 'images/catalog/doors/door-07.jpg' },
  { id: 'door-08', cat: 'doors', nameRu: 'Дверь чёрно-золотая',   nameKz: 'Қара-алтын есік',      img: 'images/catalog/doors/door-08.jpg' },
  { id: 'door-09', cat: 'doors', nameRu: 'Белая с лепниной',      nameKz: 'Ою-өрнекті ақ есік',   img: 'images/catalog/doors/door-09.jpg' },
  { id: 'door-10', cat: 'doors', nameRu: 'Белая со стеклом',      nameKz: 'Шынылы ақ есік',       img: 'images/catalog/doors/door-10.jpg' },
  { id: 'door-11', cat: 'doors', nameRu: 'Белая двустворчатая',   nameKz: 'Ақ қос қанатты есік',  img: 'images/catalog/doors/door-11.jpg' },
  { id: 'door-12', cat: 'doors', nameRu: 'Белая с витражом',      nameKz: 'Витражды ақ есік',     img: 'images/catalog/doors/door-12.jpg' },
  { id: 'door-13', cat: 'doors', nameRu: 'Шпон со стеклом',       nameKz: 'Шпон шынылы есік',     img: 'images/catalog/doors/door-13.jpg' },
  { id: 'door-14', cat: 'doors', nameRu: 'Шпон минимализм',       nameKz: 'Шпон минимализм есік', img: 'images/catalog/doors/door-14.jpg' },
  { id: 'door-15', cat: 'doors', nameRu: 'Шпон с панелью',        nameKz: 'Панельді шпон есік',   img: 'images/catalog/doors/door-15.jpg' },
  { id: 'door-16', cat: 'doors', nameRu: 'Шпон золотые вставки',  nameKz: 'Алтын жолақты шпон',   img: 'images/catalog/doors/door-16.jpg' },
  { id: 'door-17', cat: 'doors', nameRu: 'Шпон со стеклом №2',   nameKz: 'Шпон шынылы есік №2',  img: 'images/catalog/doors/door-17.jpg' },
  // STAIRS
  { id: 'stair-01', cat: 'stairs', nameRu: 'Лестница №1',  nameKz: 'Баспалдақ №1',  img: 'images/catalog/stairs/stair-01.jpg' },
  { id: 'stair-02', cat: 'stairs', nameRu: 'Лестница №2',  nameKz: 'Баспалдақ №2',  img: 'images/catalog/stairs/stair-02.jpg' },
  { id: 'stair-03', cat: 'stairs', nameRu: 'Лестница №3',  nameKz: 'Баспалдақ №3',  img: 'images/catalog/stairs/stair-03.jpg' },
  { id: 'stair-04', cat: 'stairs', nameRu: 'Лестница №4',  nameKz: 'Баспалдақ №4',  img: 'images/catalog/stairs/stair-04.jpg' },
  { id: 'stair-05', cat: 'stairs', nameRu: 'Лестница №5',  nameKz: 'Баспалдақ №5',  img: 'images/catalog/stairs/stair-05.jpg' },
  { id: 'stair-06', cat: 'stairs', nameRu: 'Лестница №6',  nameKz: 'Баспалдақ №6',  img: 'images/catalog/stairs/stair-06.jpg' },
  { id: 'stair-07', cat: 'stairs', nameRu: 'Лестница №7',  nameKz: 'Баспалдақ №7',  img: 'images/catalog/stairs/stair-07.jpg' },
  { id: 'stair-08', cat: 'stairs', nameRu: 'Лестница №8',  nameKz: 'Баспалдақ №8',  img: 'images/catalog/stairs/stair-08.jpg' },
  { id: 'stair-09', cat: 'stairs', nameRu: 'Лестница №9',  nameKz: 'Баспалдақ №9',  img: 'images/catalog/stairs/stair-09.jpg' },
  { id: 'stair-10', cat: 'stairs', nameRu: 'Лестница №10', nameKz: 'Баспалдақ №10', img: 'images/catalog/stairs/stair-10.jpg' },
  { id: 'stair-11', cat: 'stairs', nameRu: 'Лестница №11', nameKz: 'Баспалдақ №11', img: 'images/catalog/stairs/stair-11.jpg' },
  // VENEER
  { id: 'ven-01',  cat: 'veneer', nameRu: 'Шпон панель №1',  nameKz: 'Шпон панелі №1',  img: 'images/catalog/veneer/veneer-01.jpg' },
  { id: 'ven-02',  cat: 'veneer', nameRu: 'Шпон панель №2',  nameKz: 'Шпон панелі №2',  img: 'images/catalog/veneer/veneer-02.jpg' },
  { id: 'ven-03',  cat: 'veneer', nameRu: 'Шпон панель №3',  nameKz: 'Шпон панелі №3',  img: 'images/catalog/veneer/veneer-03.jpg' },
  { id: 'ven-04',  cat: 'veneer', nameRu: 'Шпон панель №4',  nameKz: 'Шпон панелі №4',  img: 'images/catalog/veneer/veneer-04.jpg' },
  { id: 'ven-05',  cat: 'veneer', nameRu: 'Шпон панель №5',  nameKz: 'Шпон панелі №5',  img: 'images/catalog/veneer/veneer-05.jpg' },
  { id: 'ven-06',  cat: 'veneer', nameRu: 'Шпон панель №6',  nameKz: 'Шпон панелі №6',  img: 'images/catalog/veneer/veneer-06.jpg' },
  { id: 'ven-07',  cat: 'veneer', nameRu: 'Шпон панель №7',  nameKz: 'Шпон панелі №7',  img: 'images/catalog/veneer/veneer-07.jpg' },
  { id: 'ven-08',  cat: 'veneer', nameRu: 'Шпон панель №8',  nameKz: 'Шпон панелі №8',  img: 'images/catalog/veneer/veneer-08.jpg' },
  { id: 'ven-09',  cat: 'veneer', nameRu: 'Шпон панель №9',  nameKz: 'Шпон панелі №9',  img: 'images/catalog/veneer/veneer-09.jpg' },
  { id: 'ven-10',  cat: 'veneer', nameRu: 'Шпон панель №10', nameKz: 'Шпон панелі №10', img: 'images/catalog/veneer/veneer-10.jpg' },
  { id: 'ven-11',  cat: 'veneer', nameRu: 'Шпон панель №11', nameKz: 'Шпон панелі №11', img: 'images/catalog/veneer/veneer-11.jpg' },
  { id: 'ven-12',  cat: 'veneer', nameRu: 'Шпон панель №12', nameKz: 'Шпон панелі №12', img: 'images/catalog/veneer/veneer-12.jpg' },
];

/* ===== STATE ===== */
let currentLang = localStorage.getItem('babun_lang') || 'kz';
let currentCat = 'doors';
const selectedIds = new Set();

/* ===== LANGUAGE ===== */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('babun_lang', lang);
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text !== undefined) el.innerHTML = text;
  });
  renderProducts();
}

/* ===== HEADER SCROLL ===== */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

/* ===== CATALOG ===== */
function switchTab(cat) {
  currentCat = cat;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const filtered = products.filter(p => p.cat === currentCat);
  grid.innerHTML = filtered.map(p => {
    const name = currentLang === 'kz' ? p.nameKz : p.nameRu;
    const catLabel = {
      doors:  currentLang === 'kz' ? 'Есік' : 'Дверь',
      stairs: currentLang === 'kz' ? 'Баспалдақ' : 'Лестница',
      veneer: currentLang === 'kz' ? 'Шпон панелі' : 'Шпон панель',
    }[p.cat];
    const isSelected = selectedIds.has(p.id);
    const imgContent = p.img
      ? `<img src="${p.img}" alt="${name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease">`
      : `<div class="product-card__placeholder" style="background:linear-gradient(135deg,${p.color||'#d4a96a'}33,${p.color||'#d4a96a'}66)"><span style="font-size:2.5rem">${p.emoji||'🚪'}</span><span>${catLabel}</span></div>`;
    return `
      <div class="product-card ${isSelected ? 'selected' : ''}" onclick="toggleProduct('${p.id}')">
        <div class="product-card__img">
          ${imgContent}
          <div class="product-card__overlay">
            <div class="product-card__check">${isSelected ? '✓' : '+'}</div>
          </div>
        </div>
        <div class="product-card__info">
          <p class="product-card__name">${name}</p>
          <p class="product-card__cat">${catLabel}</p>
        </div>
      </div>
    `;
  }).join('');
}

function toggleProduct(id) {
  if (selectedIds.has(id)) {
    selectedIds.delete(id);
  } else {
    selectedIds.add(id);
  }
  updateSelectionBar();
  renderProducts();
}

function updateSelectionBar() {
  const bar = document.getElementById('selectionBar');
  const countEl = document.getElementById('selectionCount');
  const count = selectedIds.size;
  countEl.textContent = count;
  bar.classList.toggle('visible', count > 0);
}

function clearSelection() {
  selectedIds.clear();
  updateSelectionBar();
  renderProducts();
}

function sendToWhatsApp() {
  const t = translations[currentLang];
  const selected = products.filter(p => selectedIds.has(p.id));
  const lines = selected.map(p => `• ${currentLang === 'kz' ? p.nameKz : p.nameRu}`);
  const greeting = currentLang === 'kz'
    ? 'Сәлеметсіз бе! Babun.kz каталогынан мына тауарлар қызықтырды:\n'
    : 'Здравствуйте! Меня интересуют следующие позиции из каталога Babun.kz:\n';
  const message = greeting + lines.join('\n') + '\n\nПрошу связаться со мной.';
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

/* ===== INIT ===== */
/* ===== HERO SLIDER ===== */
let currentSlide = 0;
const SLIDE_COUNT = 3;
let sliderTimer = null;

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.slider-dot');
  slides[currentSlide].classList.remove('hero__slide--active');
  dots[currentSlide].classList.remove('slider-dot--active');
  currentSlide = (index + SLIDE_COUNT) % SLIDE_COUNT;
  slides[currentSlide].classList.add('hero__slide--active');
  dots[currentSlide].classList.add('slider-dot--active');
}

function startSlider() {
  sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  renderProducts();

  // Init slider
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length) {
    slides[0].classList.add('hero__slide--active');
    startSlider();
  }
});
