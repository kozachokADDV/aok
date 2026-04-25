export const languages = {
  uk: 'Українська',
  en: 'English',
} as const;

export const defaultLang = 'uk' as const;
export type Lang = keyof typeof languages;

type Direction = { number: string; title: string; body: string };
type Member = { name: string; meta: string };
type Criterion = string;

type Dict = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    about: string;
    directions: string;
    members: string;
    role: string;
    join: string;
    contacts: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    intro: string;
    body: string[];
    pillars: { label: string; text: string }[];
  };
  directions: {
    eyebrow: string;
    headline: string;
    lead: string;
    items: Direction[];
  };
  members: {
    eyebrow: string;
    headline: string;
    lead: string;
    list: Member[];
    note: string;
  };
  role: {
    eyebrow: string;
    headline: string;
    lead: string;
    threats: { title: string; items: string[] };
    integration: { title: string; items: string[] };
    closing: string;
  };
  join: {
    eyebrow: string;
    headline: string;
    lead: string;
    criteriaTitle: string;
    criteria: Criterion[];
    benefitsTitle: string;
    benefits: Criterion[];
    cta: string;
    mailSubject: string;
    mailBody: string;
  };
  contacts: {
    eyebrow: string;
    headline: string;
    email: string;
    phone: string;
    address: string;
    addressLine: string;
    cta: string;
  };
  footer: {
    rights: string;
    tagline: string;
    builtWith: string;
  };
  langSwitch: {
    label: string;
    uk: string;
    en: string;
  };
};

export const ui: Record<Lang, Dict> = {
  uk: {
    meta: {
      title: 'АОК — Асоціація Охоронних Компаній',
      description:
        'Галузеве обʼєднання, що формує сучасний ринок охоронних послуг України: прозорі правила, стандарти якості, професійна спільнота.',
      ogAlt: 'Логотип Асоціації Охоронних Компаній',
    },
    nav: {
      about: 'Про асоціацію',
      directions: 'Напрями',
      members: 'Учасники',
      role: 'Роль безпеки',
      join: 'Вступ',
      contacts: 'Контакти',
      cta: 'Приєднатись',
    },
    hero: {
      eyebrow: 'Асоціація Охоронних Компаній України',
      title: 'Формуємо сучасний ринок',
      titleAccent: 'безпеки та охоронних послуг',
      lead:
        'Ринок охоронних послуг в Україні перебуває у фазі системної трансформації. Зростання ризиків, виклики воєнного часу та підвищені вимоги бізнесу змінюють підходи до безпеки.',
      bullets: [
        'Управління ризиками',
        'Технічні рішення безпеки',
        'Професійний персонал',
        'Чіткі стандарти відповідальності',
      ],
      primaryCta: 'Приєднатись до АОК',
      secondaryCta: 'Дізнатись більше',
      scroll: 'Гортайте',
    },
    about: {
      eyebrow: '01 — Про асоціацію',
      headline: 'Професійне обʼєднання ринку безпеки',
      intro:
        'АОК — це галузеве обʼєднання, створене для розвитку ринку охоронних послуг в Україні та підвищення рівня безпеки бізнесу.',
      body: [
        'Ми обʼєднуємо охоронні компанії, які працюють відповідно до законодавства України, дотримуються професійних стандартів та несуть відповідальність за якість своїх послуг.',
        'АОК виступає платформою взаємодії між бізнесом, державними органами та експертним середовищем у сфері безпеки. Ми беремо участь у формуванні державної політики, розробці нормативно-правових змін та впровадженні сучасних стандартів.',
      ],
      pillars: [
        { label: 'Системна функція', text: 'Безпека як стратегічна частина бізнесу, а не формальна присутність' },
        { label: 'Якість понад демпінг', text: 'Конкуренція базується на стандартах, а не на ціновій гонці донизу' },
        { label: 'Реальний захист', text: 'Клієнт отримує системний результат, підкріплений відповідальністю' },
      ],
    },
    directions: {
      eyebrow: '02 — Напрями діяльності',
      headline: 'Пʼять напрямів роботи',
      lead:
        'АОК системно розвиває ринок безпеки України за пʼятьма ключовими векторами — від законодавства до підготовки кадрів.',
      items: [
        {
          number: '01',
          title: 'Розвиток ринку охоронних послуг',
          body: 'Формування прозорого та конкурентного середовища для охоронних компаній. Боротьба з демпінгом, нелегальною зайнятістю та тіньовими схемами.',
        },
        {
          number: '02',
          title: 'Законодавче регулювання',
          body: 'Участь у підготовці змін до законодавства України у сфері охоронної діяльності, публічних закупівель та оподаткування. Захист інтересів добросовісного бізнесу.',
        },
        {
          number: '03',
          title: 'Стандарти якості та безпеки',
          body: 'Розробка та впровадження вимог до надання охоронних послуг: фізична охорона, технічна безпека, підготовка персоналу, відповідальність перед клієнтом.',
        },
        {
          number: '04',
          title: 'Взаємодія з державою',
          body: 'Побудова системного діалогу з органами державної влади, регуляторами та правоохоронними органами для розвитку сектора.',
        },
        {
          number: '05',
          title: 'Освіта та професійний розвиток',
          body: 'Підвищення кваліфікації фахівців у сфері безпеки, розвиток професійних компетенцій та обмін досвідом між учасниками ринку.',
        },
      ],
    },
    members: {
      eyebrow: '03 — Учасники',
      headline: 'Хто з нами',
      lead:
        'АОК обʼєднує компанії, що працюють легально, дотримуються стандартів та несуть відповідальність перед клієнтами. Це бізнес, який формує нову якість безпеки в Україні.',
      list: [
        { name: 'Венбест', meta: 'Учасник асоціації' },
        { name: 'Шериф', meta: 'Учасник асоціації' },
        { name: 'Альфа-Щит', meta: 'Учасник асоціації' },
        { name: 'Тайтан', meta: 'Учасник асоціації' },
        { name: 'А1 Безпека', meta: 'Учасник асоціації' },
      ],
      note: 'Перелік учасників оновлюється. Список наведено орієнтовно.',
    },
    role: {
      eyebrow: '04 — Роль безпеки',
      headline: 'Безпека як стратегічна функція бізнесу',
      lead:
        'В умовах воєнних ризиків та економічної нестабільності безпека бізнесу стала критично важливою. Сучасні компанії стикаються з комплексними загрозами.',
      threats: {
        title: 'Комплексні загрози',
        items: [
          'Фізичні ризики — крадіжки, пошкодження майна',
          'Кіберзагрози',
          'Порушення логістики та ланцюгів постачання',
          'Ризики для персоналу',
        ],
      },
      integration: {
        title: 'Інтегрована система',
        items: [
          'Фізична охорона обʼєктів',
          'Технічні системи безпеки',
          'Аналітика та управління ризиками',
        ],
      },
      closing:
        'АОК сприяє впровадженню саме такого комплексного підходу — там, де фізична охорона, технічна інфраструктура та аналітика працюють як єдина система.',
    },
    join: {
      eyebrow: '05 — Вступ до АОК',
      headline: 'Стати частиною професійної спільноти',
      lead:
        'АОК відкрита для охоронних компаній, які готові працювати відповідно до сучасних стандартів безпеки.',
      criteriaTitle: 'Критерії вступу',
      criteria: [
        'Наявність ліцензії на охоронну діяльність',
        'Дотримання законодавства України',
        'Прозора структура бізнесу',
        'Відсутність тіньових практик',
        'Готовність до впровадження стандартів якості',
      ],
      benefitsTitle: 'Можливості членства',
      benefits: [
        'Підвищення конкурентоспроможності',
        'Зміцнення репутації на ринку',
        'Вплив на розвиток ринку охоронних послуг',
        'Експертна та правова підтримка',
      ],
      cta: 'Подати заявку на вступ',
      mailSubject: 'Заявка на вступ до АОК',
      mailBody:
        'Доброго дня!%0D%0A%0D%0AЦікавимось вступом до Асоціації Охоронних Компаній.%0D%0A%0D%0AНазва компанії: %0D%0AЛіцензія на охоронну діяльність №: %0D%0АКонтактна особа: %0D%0AТелефон: %0D%0A%0D%0AДякую.',
    },
    contacts: {
      eyebrow: '06 — Контакти',
      headline: 'Звʼязатися з нами',
      email: 'pubAGC@ukr.net',
      phone: '+38 (075) 629 07 87',
      address: 'Україна, 01021',
      addressLine: 'м. Київ, вул. Шовковична, 5, оф. 2',
      cta: 'Написати листа',
    },
    footer: {
      rights: 'Усі права захищено',
      tagline: 'Асоціація Охоронних Компаній · Київ · Україна',
      builtWith: 'Сайт АОК',
    },
    langSwitch: {
      label: 'Мова',
      uk: 'Укр',
      en: 'Eng',
    },
  },
  en: {
    meta: {
      title: 'SCAU — Security Companies Association of Ukraine',
      description:
        'An industry association shaping the modern Ukrainian security services market: transparent rules, quality standards, and a professional community.',
      ogAlt: 'Logo of the Security Companies Association of Ukraine',
    },
    nav: {
      about: 'About',
      directions: 'Focus areas',
      members: 'Members',
      role: 'Why security',
      join: 'Membership',
      contacts: 'Contact',
      cta: 'Join us',
    },
    hero: {
      eyebrow: 'Security Companies Association of Ukraine',
      title: 'Shaping the modern market',
      titleAccent: 'of security and protection services',
      lead:
        'Ukraine’s security services market is undergoing a systemic transformation. Rising risks, the realities of wartime and elevated business expectations are reshaping how protection is delivered.',
      bullets: [
        'Risk management',
        'Technical security systems',
        'Trained professional staff',
        'Clear standards of accountability',
      ],
      primaryCta: 'Apply for membership',
      secondaryCta: 'Learn more',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: '01 — About the association',
      headline: 'A professional alliance for the security sector',
      intro:
        'SCAU is an industry body created to develop Ukraine’s security services market and raise the bar for business protection.',
      body: [
        'We bring together security firms that operate within Ukrainian law, adhere to professional standards and stand behind the quality of their services.',
        'The association is a platform for dialogue between business, public authorities and the expert community. We contribute to public policy, regulatory reform and the rollout of contemporary standards.',
      ],
      pillars: [
        { label: 'A systemic function', text: 'Security as a strategic part of the business, not a formal presence' },
        { label: 'Quality over price wars', text: 'Competition built on standards rather than a race to the bottom' },
        { label: 'Real protection', text: 'Clients receive a measurable outcome, backed by accountability' },
      ],
    },
    directions: {
      eyebrow: '02 — Focus areas',
      headline: 'Five lines of work',
      lead:
        'SCAU advances the Ukrainian security market across five strategic vectors — from legislation to workforce development.',
      items: [
        {
          number: '01',
          title: 'Market development',
          body: 'Building a transparent and competitive environment for security companies. Pushing back against price dumping, undeclared employment and shadow practices.',
        },
        {
          number: '02',
          title: 'Legislation & regulation',
          body: 'Contributing to amendments in Ukrainian law on security activity, public procurement and taxation. Defending the interests of bona fide operators.',
        },
        {
          number: '03',
          title: 'Quality & safety standards',
          body: 'Developing and rolling out requirements for security services: physical protection, technical systems, staff training and client accountability.',
        },
        {
          number: '04',
          title: 'Engagement with the state',
          body: 'Establishing structured dialogue with public authorities, regulators and law-enforcement bodies to advance the sector.',
        },
        {
          number: '05',
          title: 'Education & professional growth',
          body: 'Upskilling security professionals, developing competencies and exchanging expertise between members of the market.',
        },
      ],
    },
    members: {
      eyebrow: '03 — Members',
      headline: 'Who is with us',
      lead:
        'SCAU brings together companies that operate legally, follow industry standards and stand behind their clients. These are the businesses defining a new quality of security in Ukraine.',
      list: [
        { name: 'Venbest', meta: 'Association member' },
        { name: 'Sheriff', meta: 'Association member' },
        { name: 'Alpha-Shchyt', meta: 'Association member' },
        { name: 'Titan', meta: 'Association member' },
        { name: 'A1 Security', meta: 'Association member' },
      ],
      note: 'The member list is updated periodically. Names shown are illustrative.',
    },
    role: {
      eyebrow: '04 — Why security',
      headline: 'Security as a strategic business function',
      lead:
        'Wartime risks and economic volatility have made business security mission-critical. Modern companies face threats that span the physical and digital alike.',
      threats: {
        title: 'A landscape of compound threats',
        items: [
          'Physical risks — theft, damage to property',
          'Cyber threats',
          'Disruption of logistics and supply chains',
          'Risks to personnel',
        ],
      },
      integration: {
        title: 'An integrated system',
        items: [
          'Physical protection of premises',
          'Technical security systems',
          'Analytics and risk management',
        ],
      },
      closing:
        'SCAU advocates exactly this kind of integrated approach — where physical protection, technical infrastructure and analytics function as one coherent system.',
    },
    join: {
      eyebrow: '05 — Membership',
      headline: 'Become part of the professional community',
      lead:
        'SCAU welcomes security companies ready to operate to contemporary security standards.',
      criteriaTitle: 'Eligibility',
      criteria: [
        'A valid licence for security activity',
        'Compliance with Ukrainian legislation',
        'A transparent corporate structure',
        'No shadow practices',
        'Readiness to adopt quality standards',
      ],
      benefitsTitle: 'What membership offers',
      benefits: [
        'Stronger competitive position',
        'Reinforced market reputation',
        'A voice in shaping the industry',
        'Expert and legal support',
      ],
      cta: 'Submit a membership enquiry',
      mailSubject: 'SCAU membership enquiry',
      mailBody:
        'Hello,%0D%0A%0D%0AWe are interested in joining the Security Companies Association of Ukraine.%0D%0A%0D%0ACompany name: %0D%0ASecurity activity licence no.: %0D%0AContact person: %0D%0APhone: %0D%0A%0D%0AThank you.',
    },
    contacts: {
      eyebrow: '06 — Contact',
      headline: 'Get in touch',
      email: 'pubAGC@ukr.net',
      phone: '+38 (075) 629 07 87',
      address: 'Ukraine, 01021',
      addressLine: '5 Shovkovychna St., office 2, Kyiv',
      cta: 'Send an email',
    },
    footer: {
      rights: 'All rights reserved',
      tagline: 'Security Companies Association of Ukraine · Kyiv · Ukraine',
      builtWith: 'SCAU site',
    },
    langSwitch: {
      label: 'Language',
      uk: 'Укр',
      en: 'Eng',
    },
  },
};

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean);
  // strip site base if present
  const langCandidate = seg.find((s) => s === 'en' || s === 'uk');
  if (langCandidate === 'en') return 'en';
  return defaultLang;
}

export function pathFor(lang: Lang, base: string): string {
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return lang === defaultLang ? `${trimmed}/` : `${trimmed}/en/`;
}
