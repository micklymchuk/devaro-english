import type { Locale, SiteCopy } from '@/types/site'

const images = {
  hero: '/hero-teacher-sticker.png',
  olena:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=560&q=80',
  marta:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=560&q=80',
  danylo:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=560&q=80',
}

export const heroImage = images.hero

export const siteContent = {
  uk: {
    nav: [
      { label: 'Програми', href: '#programs' },
      { label: 'Викладачі', href: '#teachers' },
      { label: 'Ціни', href: '#prices' },
      { label: 'Контакти', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Онлайн-школа англійської для українців',
      title: 'Розмовляйте англійською впевнено вже через кілька тижнів',
      text: 'Індивідуальні Zoom-заняття з персональним підходом і реальним результатом. Менеджер допоможе підібрати викладача, формат і темп саме для вас.',
      primaryCta: 'Записатися на пробне заняття',
      secondaryCta: 'Звʼязатися з менеджером',
      trustItems: ['Індивідуальні Zoom-уроки', 'Підбір викладача', 'Підтримка українською та англійською'],
      imageAlt: 'Стікер привітної викладачки Devaro English',
      lessonLabel: 'Онлайн',
      lessonValue: '1:1',
      lessonNote: 'гнучкий графік',
      videoTitle: 'Дивись відео про школу',
      videoDuration: '0:55 хв',
      proofText: 'починають говорити впевненіше після першого тижня',
      proofEmphasis: '98% студентів',
      scheduleBadge: 'гнучкий графік',
      greetingBadge: 'Hey!',
      testTitle: 'Не впевнені, з чого почати? Пройдіть безкоштовне тестування',
      testCta: 'Пройти тест',
    },
    stats: [
      { value: '7+', label: 'тестових викладачів' },
      { value: '25 хв', label: 'консультація з менеджером' },
      { value: '5 напрямів', label: 'для різних цілей' },
    ],
    programs: {
      eyebrow: 'Програми',
      title: 'Оберіть напрям для учня, а менеджер допоможе підібрати викладача та ритм занять.',
      items: [
        { title: 'Дорослі', text: 'Практична англійська для роботи, подорожей, впевненості та щоденного спілкування.' },
        { title: 'Підлітки', text: 'Структуровані заняття для школи, розмовної практики та міцнішої граматики.' },
        { title: 'Діти', text: 'Спокійні онлайн-уроки з іграми, ритуалами та зрозумілим прогресом для батьків.' },
        { title: 'Іспити', text: 'Фокусна підготовка до тестів, співбесід та вступних цілей.' },
        { title: 'Релокація', text: 'Англійська для записів, документів, школи, роботи та життя за кордоном.' },
      ],
    },
    lessonFlow: {
      eyebrow: 'Як проходять заняття',
      title: 'Менеджер підбирає викладача та темп під вашу ціль.',
      text: 'Враховуємо мету, рівень, графік і побажання, щоб заняття одразу були зрозумілими та комфортними.',
      steps: [
        {
          label: 'Швидка консультація',
          text: 'Уточнюємо мету, рівень, графік і комфортний формат занять.',
        },
        {
          label: 'Підбір викладача',
          text: 'Рекомендуємо викладача за стилем спілкування, досвідом і задачами учня.',
        },
        {
          label: 'Персональний план',
          text: 'Фіксуємо темп, фокус уроків і перші орієнтири прогресу.',
        },
        {
          label: 'Zoom-уроки',
          text: 'Починаєте індивідуальні заняття з регулярним зворотним звʼязком.',
        },
      ],
      ctaText: 'Готові підібрати викладача без здогадок?',
      ctaLabel: 'Звʼязатися з менеджером',
      ctaHref: '#contact',
    },
    teachers: {
      eyebrow: 'Викладачі',
      title: 'Поки це тестові профілі, які пізніше можна замінити реальним контентом.',
      items: [
        {
          name: 'Олена',
          role: 'Англійська для дорослих та релокації',
          text: 'Спокійні заняття для впевненого мовлення та реальних життєвих задач.',
          image: images.olena,
        },
        {
          name: 'Марта',
          role: 'Діти та підлітки',
          text: 'Тепла, структурована практика зі зрозумілим прогресом для батьків.',
          image: images.marta,
        },
        {
          name: 'Данило',
          role: 'Підготовка до іспитів',
          text: 'Фокусні плани для тестів, співбесід, граматики та письма.',
          image: images.danylo,
        },
      ],
    },
    pricing: {
      eyebrow: 'Тестові пакети',
      title: 'Замініть ці ціни на реальні перед публікацією школи.',
      items: [
        { name: 'Старт', count: '4 уроки', text: 'Щоб спробувати формат і викладача', price: '2 800 грн' },
        { name: 'Ріст', count: '8 уроків', text: 'Для стабільного щотижневого прогресу', price: '5 200 грн' },
        { name: 'Фокус', count: '12 уроків', text: 'Для іспитів або релокаційних цілей', price: '7 200 грн' },
      ],
    },
    social: {
      eyebrow: 'Instagram',
      title: 'Тепла школа з персональною увагою',
      text: 'Instagram-блок пізніше може показувати відео викладачів, відгуки учнів, моменти з уроків та корисні поради з англійської.',
      testimonial: 'Менеджер допоміг підібрати викладача для доньки, і заняття нарешті стали персональними.',
    },
    contact: {
      eyebrow: 'Контакти',
      title: 'Розкажіть про свою мету',
      text: 'Залиште заявку або напишіть Devaro English у зручному каналі. Менеджер допоможе обрати викладача та формат.',
      fields: ['Імʼя', 'Мета навчання', 'Зручний контакт'],
      submitLabel: 'Надіслати заявку',
      channels: ['Telegram', 'Instagram', 'Телефон', 'Email'],
    },
  },
  en: {
    nav: [
      { label: 'Programs', href: '#programs' },
      { label: 'Teachers', href: '#teachers' },
      { label: 'Prices', href: '#prices' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Online English school for Ukrainian learners',
      title: 'Speak English with confidence in just a few weeks',
      text: 'Individual Zoom lessons with a personal approach and visible progress. A manager helps match you with the right teacher, format, and pace.',
      primaryCta: 'Book a trial lesson',
      secondaryCta: 'Contact manager',
      trustItems: ['Individual Zoom lessons', 'Teacher matching', 'Ukrainian and English support'],
      imageAlt: 'Friendly Devaro English teacher sticker',
      lessonLabel: 'Online',
      lessonValue: '1:1',
      lessonNote: 'flexible schedule',
      videoTitle: 'Watch school video',
      videoDuration: '0:55 min',
      proofText: 'start speaking more confidently after the first week',
      proofEmphasis: '98% of students',
      scheduleBadge: 'flexible schedule',
      greetingBadge: 'Hey!',
      testTitle: 'Not sure where to start? Take a free level test',
      testCta: 'Take the test',
    },
    stats: [
      { value: '7+', label: 'mock teachers' },
      { value: '25 min', label: 'manager consultation' },
      { value: '5 paths', label: 'for different goals' },
    ],
    programs: {
      eyebrow: 'Programs',
      title: 'Choose the path that matches the learner, then the manager helps select a teacher and lesson rhythm.',
      items: [
        { title: 'Adults', text: 'Practical English for work, travel, confidence, and everyday communication.' },
        { title: 'Teenagers', text: 'Structured lessons for school progress, speaking practice, and stronger grammar.' },
        { title: 'Children', text: 'Patient online lessons with games, routines, and parent-friendly updates.' },
        { title: 'Exam Prep', text: 'Focused preparation for English tests, interviews, and admissions goals.' },
        { title: 'Relocation', text: 'English for appointments, documents, school, work, and daily life abroad.' },
      ],
    },
    lessonFlow: {
      eyebrow: 'How lessons work',
      title: 'The manager matches the teacher and pace to your goal.',
      text: 'We factor in the learnerʼs goal, level, schedule, and preferences so lessons feel focused from the start.',
      steps: [
        {
          label: 'Quick consultation',
          text: 'We clarify the goal, current level, schedule, and lesson format that feels comfortable.',
        },
        {
          label: 'Teacher match',
          text: 'We recommend a teacher by communication style, experience, and the learnerʼs tasks.',
        },
        {
          label: 'Personal plan',
          text: 'We set the rhythm, lesson focus, and first progress markers.',
        },
        {
          label: 'Zoom lessons',
          text: 'You start individual lessons with regular feedback and adjustment.',
        },
      ],
      ctaText: 'Ready to choose a teacher without guessing?',
      ctaLabel: 'Contact manager',
      ctaHref: '#contact',
    },
    teachers: {
      eyebrow: 'Meet the teachers',
      title: 'Mock profiles for now, structured so real teacher content can replace them later.',
      items: [
        {
          name: 'Olena',
          role: 'Adults and relocation English',
          text: 'Calm lessons for speaking confidence and real-life tasks.',
          image: images.olena,
        },
        {
          name: 'Marta',
          role: 'Kids and teenagers',
          text: 'Warm, structured practice with clear progress for parents.',
          image: images.marta,
        },
        {
          name: 'Danylo',
          role: 'Exam preparation',
          text: 'Focused plans for tests, interviews, grammar, and writing.',
          image: images.danylo,
        },
      ],
    },
    pricing: {
      eyebrow: 'Mock packages',
      title: 'Replace these with real pricing when the school is ready to publish.',
      items: [
        { name: 'Start', count: '4 lessons', text: 'For trying the teacher fit', price: 'UAH 2,800' },
        { name: 'Grow', count: '8 lessons', text: 'For steady weekly progress', price: 'UAH 5,200' },
        { name: 'Focus', count: '12 lessons', text: 'For exams or relocation goals', price: 'UAH 7,200' },
      ],
    },
    social: {
      eyebrow: 'Instagram',
      title: 'Warm school feel, personal attention',
      text: 'The Instagram section can later show teacher reels, student feedback, lesson moments, and useful English tips.',
      testimonial: 'The manager helped us choose a teacher for our daughter, and the lessons finally felt personal.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us your goal',
      text: 'Leave a request or message Devaro English in the channel that is easiest for you. The manager will help choose the teacher and format.',
      fields: ['Name', 'Learner goal', 'Preferred contact'],
      submitLabel: 'Send request',
      channels: ['Telegram', 'Instagram', 'Phone', 'Email'],
    },
  },
} satisfies Record<Locale, SiteCopy>
