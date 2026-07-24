(() => {
  'use strict';

  const STORAGE_KEY = 'cig_language';
  const DEFAULT_LANGUAGE = 'id';

  const languages = {
    id: {
      name: 'Bahasa Indonesia',
      shortName: 'ID',
      locale: 'id-ID',
      direction: 'ltr'
    },
    en: {
      name: 'English',
      shortName: 'EN',
      locale: 'en-US',
      direction: 'ltr'
    },
    hi: {
      name: 'हिन्दी',
      shortName: 'HI',
      locale: 'hi-IN',
      direction: 'ltr'
    },
    zh: {
      name: '简体中文',
      shortName: '中文',
      locale: 'zh-CN',
      direction: 'ltr'
    },
    ar: {
      name: 'العربية',
      shortName: 'AR',
      locale: 'ar-SA',
      direction: 'rtl'
    }
  };

  const translations = {
    id: {
      'language.label': 'Pilih bahasa',

      'nav.home': 'Beranda',
      'nav.about': 'Tentang Kami',
      'nav.products': 'Produk',
      'nav.articles': 'Artikel',
      'nav.suppliers': 'Jaringan Supplier',
      'nav.contact': 'Kontak',

      'common.viewDetail': 'Lihat detail',
      'common.readArticle': 'Baca artikel',
      'common.allProducts': 'Lihat semua produk',
      'common.allArticles': 'Semua artikel',
      'common.allCategories': 'Semua kategori',
      'common.specifications': 'Spesifikasi',
      'common.share': 'Bagikan',
      'common.backToCatalog': 'Kembali ke katalog',
      'common.backToArticles': 'Kembali ke artikel',
      'common.askWhatsApp': 'Tanyakan via WhatsApp',
      'common.downloadBrochure': 'Unduh brosur',
      'common.exploreProducts': 'Jelajahi Produk',
      'common.contactWhatsApp': 'Hubungi via WhatsApp',
      'common.contactUs': 'Hubungi Kami',

      'search.productPlaceholder': 'Cari produk...',
      'search.articlePlaceholder': 'Cari artikel...',

      'empty.productTitle': 'Produk tidak ditemukan',
      'empty.productText': 'Ubah kata kunci atau kategori pencarian.',
      'empty.articleTitle': 'Artikel tidak ditemukan',
      'empty.articleText': 'Coba kata kunci atau kategori lain.',

      'toast.whatsappUnavailable':
        'Nomor WhatsApp resmi belum dikonfigurasi pada situs demo.',
      'toast.brochureUnavailable':
        'Brosur PDF demo belum tersedia.',
      'toast.messageSaved':
        'Pesan demo tersimpan di browser dan dapat dilihat pada CMS prototype.'
    },

    en: {
      'language.label': 'Select language',

      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.products': 'Products',
      'nav.articles': 'Articles',
      'nav.suppliers': 'Supplier Network',
      'nav.contact': 'Contact',

      'common.viewDetail': 'View details',
      'common.readArticle': 'Read article',
      'common.allProducts': 'View all products',
      'common.allArticles': 'All articles',
      'common.allCategories': 'All categories',
      'common.specifications': 'Specifications',
      'common.share': 'Share',
      'common.backToCatalog': 'Back to catalogue',
      'common.backToArticles': 'Back to articles',
      'common.askWhatsApp': 'Ask via WhatsApp',
      'common.downloadBrochure': 'Download brochure',
      'common.exploreProducts': 'Explore Products',
      'common.contactWhatsApp': 'Contact via WhatsApp',
      'common.contactUs': 'Contact Us',

      'search.productPlaceholder': 'Search products...',
      'search.articlePlaceholder': 'Search articles...',

      'empty.productTitle': 'Product not found',
      'empty.productText': 'Change the search keyword or category.',
      'empty.articleTitle': 'Article not found',
      'empty.articleText': 'Try another keyword or category.',

      'toast.whatsappUnavailable':
        'The official WhatsApp number has not been configured.',
      'toast.brochureUnavailable':
        'The demonstration PDF brochure is not available yet.',
      'toast.messageSaved':
        'The demonstration message has been saved in this browser.'
    },

    hi: {
      'language.label': 'भाषा चुनें',

      'nav.home': 'मुखपृष्ठ',
      'nav.about': 'हमारे बारे में',
      'nav.products': 'उत्पाद',
      'nav.articles': 'लेख',
      'nav.suppliers': 'आपूर्तिकर्ता नेटवर्क',
      'nav.contact': 'संपर्क',

      'common.viewDetail': 'विवरण देखें',
      'common.readArticle': 'लेख पढ़ें',
      'common.allProducts': 'सभी उत्पाद देखें',
      'common.allArticles': 'सभी लेख',
      'common.allCategories': 'सभी श्रेणियाँ',
      'common.specifications': 'विशेष विवरण',
      'common.share': 'साझा करें',
      'common.backToCatalog': 'उत्पाद सूची पर वापस जाएँ',
      'common.backToArticles': 'लेखों पर वापस जाएँ',
      'common.askWhatsApp': 'व्हाट्सऐप पर पूछें',
      'common.downloadBrochure': 'ब्रोशर डाउनलोड करें',
      'common.exploreProducts': 'उत्पाद देखें',
      'common.contactWhatsApp': 'व्हाट्सऐप से संपर्क करें',
      'common.contactUs': 'हमसे संपर्क करें',

      'search.productPlaceholder': 'उत्पाद खोजें...',
      'search.articlePlaceholder': 'लेख खोजें...',

      'empty.productTitle': 'उत्पाद नहीं मिला',
      'empty.productText': 'खोज शब्द या श्रेणी बदलें।',
      'empty.articleTitle': 'लेख नहीं मिला',
      'empty.articleText': 'किसी अन्य शब्द या श्रेणी का प्रयास करें।',

      'toast.whatsappUnavailable':
        'आधिकारिक व्हाट्सऐप नंबर अभी कॉन्फ़िगर नहीं किया गया है।',
      'toast.brochureUnavailable':
        'पीडीएफ ब्रोशर अभी उपलब्ध नहीं है।',
      'toast.messageSaved':
        'संदेश इस ब्राउज़र में सहेजा गया है।'
    },

    zh: {
      'language.label': '选择语言',

      'nav.home': '首页',
      'nav.about': '关于我们',
      'nav.products': '产品',
      'nav.articles': '文章',
      'nav.suppliers': '供应商网络',
      'nav.contact': '联系我们',

      'common.viewDetail': '查看详情',
      'common.readArticle': '阅读文章',
      'common.allProducts': '查看所有产品',
      'common.allArticles': '所有文章',
      'common.allCategories': '所有类别',
      'common.specifications': '产品规格',
      'common.share': '分享',
      'common.backToCatalog': '返回产品目录',
      'common.backToArticles': '返回文章列表',
      'common.askWhatsApp': '通过 WhatsApp 咨询',
      'common.downloadBrochure': '下载宣传册',
      'common.exploreProducts': '浏览产品',
      'common.contactWhatsApp': '通过 WhatsApp 联系',
      'common.contactUs': '联系我们',

      'search.productPlaceholder': '搜索产品...',
      'search.articlePlaceholder': '搜索文章...',

      'empty.productTitle': '未找到产品',
      'empty.productText': '请更改搜索关键词或类别。',
      'empty.articleTitle': '未找到文章',
      'empty.articleText': '请尝试其他关键词或类别。',

      'toast.whatsappUnavailable':
        '官方网站尚未配置 WhatsApp 号码。',
      'toast.brochureUnavailable':
        'PDF 宣传册暂未提供。',
      'toast.messageSaved':
        '留言已保存在此浏览器中。'
    },

    ar: {
      'language.label': 'اختر اللغة',

      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.products': 'المنتجات',
      'nav.articles': 'المقالات',
      'nav.suppliers': 'شبكة الموردين',
      'nav.contact': 'اتصل بنا',

      'common.viewDetail': 'عرض التفاصيل',
      'common.readArticle': 'قراءة المقال',
      'common.allProducts': 'عرض جميع المنتجات',
      'common.allArticles': 'جميع المقالات',
      'common.allCategories': 'جميع الفئات',
      'common.specifications': 'المواصفات',
      'common.share': 'مشاركة',
      'common.backToCatalog': 'العودة إلى قائمة المنتجات',
      'common.backToArticles': 'العودة إلى المقالات',
      'common.askWhatsApp': 'الاستفسار عبر واتساب',
      'common.downloadBrochure': 'تحميل الكتيب',
      'common.exploreProducts': 'استكشف المنتجات',
      'common.contactWhatsApp': 'تواصل عبر واتساب',
      'common.contactUs': 'اتصل بنا',

      'search.productPlaceholder': 'ابحث عن منتج...',
      'search.articlePlaceholder': 'ابحث عن مقال...',

      'empty.productTitle': 'لم يتم العثور على المنتج',
      'empty.productText': 'غيّر كلمة البحث أو الفئة.',
      'empty.articleTitle': 'لم يتم العثور على المقال',
      'empty.articleText': 'جرّب كلمة أو فئة أخرى.',

      'toast.whatsappUnavailable':
        'لم يتم إعداد رقم واتساب الرسمي بعد.',
      'toast.brochureUnavailable':
        'الكتيب بصيغة PDF غير متوفر حاليًا.',
      'toast.messageSaved':
        'تم حفظ الرسالة في هذا المتصفح.'
    }
  };

    function normalizeText(value = '') {
    return String(value)
      .replace(/\s+/g, ' ')
      .trim();
  }

  function findTranslationKey(value) {
    const normalizedValue = normalizeText(value);

    if (!normalizedValue) return null;

    const translationKeys = Object.keys(
      translations[DEFAULT_LANGUAGE] || {}
    );

    for (const key of translationKeys) {
      for (const language of Object.keys(languages)) {
        const translatedValue = translations[language]?.[key];

        if (
          translatedValue &&
          normalizeText(translatedValue) === normalizedValue
        ) {
          return key;
        }
      }
    }

    return null;
  }

  function translateTextNodes(root = document.body) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;

          if (!parent || !normalizeText(node.nodeValue)) {
            return NodeFilter.FILTER_REJECT;
          }

          if (
            ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'OPTION']
              .includes(parent.tagName)
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {
      const originalValue = node.nodeValue;
      const trimmedValue = originalValue.trim();
      const translationKey = findTranslationKey(trimmedValue);

      if (!translationKey) return;

      node.nodeValue = originalValue.replace(
        trimmedValue,
        translate(translationKey)
      );
    });
  }

  function translateElementAttributes(root = document) {
    const selector =
      '[placeholder], [title], [aria-label], [data-i18n-placeholder]';

    const elements = [];

    if (
      root.nodeType === Node.ELEMENT_NODE &&
      root.matches(selector)
    ) {
      elements.push(root);
    }

    root.querySelectorAll?.(selector).forEach(element => {
      elements.push(element);
    });

    elements.forEach(element => {
      ['placeholder', 'title', 'aria-label'].forEach(attribute => {
        const value = element.getAttribute(attribute);

        if (!value) return;

        const translationKey = findTranslationKey(value);

        if (translationKey) {
          element.setAttribute(
            attribute,
            translate(translationKey)
          );
        }
      });
    });
  }

  function initAutomaticTranslation() {
    if (!document.body) return;

    translateTextNodes(document.body);
    translateElementAttributes(document);

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateTextNodes(node);
            translateElementAttributes(node);
          }

          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNodes(
              node.parentElement || document.body
            );
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function getLanguage() {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    return languages[savedLanguage]
      ? savedLanguage
      : DEFAULT_LANGUAGE;
  }

  function getLanguageData(language = getLanguage()) {
    return languages[language] || languages[DEFAULT_LANGUAGE];
  }

  function translate(key, replacements = {}) {
    const language = getLanguage();

    let text =
      translations[language]?.[key] ??
      translations[DEFAULT_LANGUAGE]?.[key] ??
      key;

    Object.entries(replacements).forEach(([name, value]) => {
      text = text.replaceAll(`{${name}}`, value);
    });

    return text;
  }

  function applyDirection(language = getLanguage()) {
    const languageData = getLanguageData(language);

    document.documentElement.lang = language;
    document.documentElement.dir = languageData.direction;

    if (document.body) {
      document.body.classList.toggle(
        'is-rtl',
        languageData.direction === 'rtl'
      );
    }
  }

  function applyTranslations(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = translate(element.dataset.i18n);
    });

    root.querySelectorAll('[data-i18n-html]').forEach(element => {
      element.innerHTML = translate(element.dataset.i18nHtml);
    });

    root.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      element.placeholder = translate(
        element.dataset.i18nPlaceholder
      );
    });

    root.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
      element.setAttribute(
        'aria-label',
        translate(element.dataset.i18nAriaLabel)
      );
    });

    root.querySelectorAll('[data-language-select]').forEach(select => {
      select.value = getLanguage();
    });

    applyDirection();
  }

  function setLanguage(language) {
    if (!languages[language]) return;

    localStorage.setItem(STORAGE_KEY, language);
    applyTranslations();
    translateTextNodes(document.body);
    translateElementAttributes(document);

    document.dispatchEvent(
      new CustomEvent('cig:languagechange', {
        detail: {
          language,
          locale: languages[language].locale,
          direction: languages[language].direction
        }
      })
    );
  }

  function formatDate(dateValue, options = {}) {
    const languageData = getLanguageData();

    const defaultOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return new Intl.DateTimeFormat(
      languageData.locale,
      {...defaultOptions, ...options}
    ).format(new Date(dateValue));
  }

  function initLanguageSelector() {
    document.querySelectorAll('[data-language-select]').forEach(select => {
      select.value = getLanguage();

      select.addEventListener('change', event => {
        setLanguage(event.target.value);
      });
    });
  }

  applyDirection();

  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    applyTranslations();
    initAutomaticTranslation();
  });

  window.CIG_I18N = {
    languages,
    translations,
    getLanguage,
    getLanguageData,
    setLanguage,
    translate,
    formatDate,
    applyTranslations
  };
})();

