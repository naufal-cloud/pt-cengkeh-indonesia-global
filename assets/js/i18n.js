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

    const homepageTranslations = {
    id: {
      'demo.title': 'Situs demonstrasi.',
      'demo.text':
        'Konten, alamat, kontak, sertifikasi, dan data supplier harus diverifikasi sebelum produksi.',

      'brand.tagline': 'Dari Indonesia untuk pasar global',

      'home.heroEyebrow':
        'Komoditas Indonesia · Kemitraan Global',
      'home.heroTitleOne': 'Cengkeh Indonesia,',
      'home.heroTitleTwo': 'nilai untuk dunia.',
      'home.heroDescription':
        'Website demonstrasi PT Cengkeh Indonesia Global untuk memperkenalkan perusahaan, produk, artikel, portofolio, serta jaringan supplier dengan tampilan profesional dan responsif.',

      'home.statProfileTitle': 'Profil Korporat',
      'home.statProfileText':
        'Informasi perusahaan terstruktur',
      'home.statCatalogTitle': 'Katalog Dinamis',
      'home.statCatalogText':
        'Produk dan spesifikasi terkelola',
      'home.statSupplierTitle': 'Supplier Map',
      'home.statSupplierText':
        'Lokasi perkiraan yang menjaga privasi',

      'home.valueEyebrow': 'Nilai Utama',
      'home.valueTitle':
        'Fondasi layanan yang jelas dan bertanggung jawab',
      'home.valueDescription':
        'Contoh pesan korporat yang dapat diperbarui melalui CMS produksi setelah mendapat persetujuan perusahaan.',

      'home.featureOneTitle': 'Informasi Produk Jelas',
      'home.featureOneText':
        'Katalog mendukung deskripsi, spesifikasi, galeri, brosur, dan konteks pertanyaan WhatsApp.',

      'home.featureTwoTitle': 'Kemitraan Terjaga',
      'home.featureTwoText':
        'Data supplier dapat ditampilkan sebagai lokasi perkiraan untuk melindungi privasi dan keamanan.',

      'home.featureThreeTitle': 'Komunikasi Cepat',
      'home.featureThreeText':
        'Form kontak dan kanal WhatsApp membantu calon mitra menghubungi perusahaan dengan konteks yang tepat.',

      'home.catalogEyebrow': 'Katalog Produk',
      'home.catalogTitle': 'Produk pilihan',
      'home.catalogDescription':
        'Semua data berikut adalah contoh untuk mendemonstrasikan struktur katalog.',
      'home.allProducts': 'Lihat semua produk →',

      'home.portfolioEyebrow': 'Portofolio',
      'home.portfolioTitle':
        'Contoh fokus pengembangan',

      'home.articleEyebrow': 'Artikel',
      'home.articleTitle': 'Informasi dan edukasi',
      'home.articleDescription':
        'Artikel mendukung pencarian, kategori, tag, metadata, dan halaman detail.',
      'home.allArticles': 'Semua artikel →',

      'home.ctaEyebrow': 'Mulai Percakapan',
      'home.ctaTitle':
        'Diskusikan kebutuhan produk dan kemitraan.',
      'home.ctaDescription':
        'Formulir demo dapat menyimpan pesan ke CMS prototype pada browser yang sama. Pada Netlify, formulir dapat diaktifkan sebagai Netlify Forms.',

      'footer.description':
        'Prototype website profil perusahaan, katalog, artikel, jaringan supplier, kontak, dan CMS sesuai baseline SRS versi 1.2.',
      'footer.navigation': 'Navigasi',
      'footer.information': 'Informasi',
      'footer.contactDemo': 'Kontak Demo',
      'footer.supplier': 'Supplier',
      'footer.privacy': 'Kebijakan Privasi',
      'footer.cms': 'CMS Prototype',
      'footer.notFound': 'Halaman 404',
      'footer.rights': 'Seluruh hak cipta.',
      'footer.version': 'Demo SRS-CIG-WEB-001 · Versi 1.2'
    },

    en: {
      'demo.title': 'Demonstration website.',
      'demo.text':
        'Content, addresses, contacts, certifications, and supplier data must be verified before production.',

      'brand.tagline': 'From Indonesia to the global market',

      'home.heroEyebrow':
        'Indonesian Commodities · Global Partnerships',
      'home.heroTitleOne': 'Indonesian cloves,',
      'home.heroTitleTwo': 'value for the world.',
      'home.heroDescription':
        'A demonstration website for PT Cengkeh Indonesia Global introducing the company, products, articles, portfolio, and supplier network through a professional and responsive interface.',

      'home.statProfileTitle': 'Corporate Profile',
      'home.statProfileText':
        'Structured company information',
      'home.statCatalogTitle': 'Dynamic Catalogue',
      'home.statCatalogText':
        'Managed products and specifications',
      'home.statSupplierTitle': 'Supplier Map',
      'home.statSupplierText':
        'Approximate locations that protect privacy',

      'home.valueEyebrow': 'Core Values',
      'home.valueTitle':
        'A clear and responsible service foundation',
      'home.valueDescription':
        'Examples of corporate messages that can be updated through the production CMS after company approval.',

      'home.featureOneTitle': 'Clear Product Information',
      'home.featureOneText':
        'The catalogue supports descriptions, specifications, galleries, brochures, and contextual WhatsApp enquiries.',

      'home.featureTwoTitle': 'Responsible Partnerships',
      'home.featureTwoText':
        'Supplier data can be displayed as approximate locations to protect privacy and security.',

      'home.featureThreeTitle': 'Fast Communication',
      'home.featureThreeText':
        'The contact form and WhatsApp channel help prospective partners contact the company with the right context.',

      'home.catalogEyebrow': 'Product Catalogue',
      'home.catalogTitle': 'Featured products',
      'home.catalogDescription':
        'The following information is sample data demonstrating the catalogue structure.',
      'home.allProducts': 'View all products →',

      'home.portfolioEyebrow': 'Portfolio',
      'home.portfolioTitle':
        'Examples of development priorities',

      'home.articleEyebrow': 'Articles',
      'home.articleTitle': 'Information and education',
      'home.articleDescription':
        'Articles support search, categories, tags, metadata, and detailed pages.',
      'home.allArticles': 'All articles →',

      'home.ctaEyebrow': 'Start a Conversation',
      'home.ctaTitle':
        'Discuss product and partnership requirements.',
      'home.ctaDescription':
        'The demonstration form can store messages in the prototype CMS on the same browser. On Netlify, it can be enabled as a Netlify Form.',

      'footer.description':
        'A prototype company-profile website featuring a catalogue, articles, supplier network, contact page, and CMS based on SRS version 1.2.',
      'footer.navigation': 'Navigation',
      'footer.information': 'Information',
      'footer.contactDemo': 'Demo Contact',
      'footer.supplier': 'Suppliers',
      'footer.privacy': 'Privacy Policy',
      'footer.cms': 'CMS Prototype',
      'footer.notFound': '404 Page',
      'footer.rights': 'All rights reserved.',
      'footer.version': 'Demo SRS-CIG-WEB-001 · Version 1.2'
    },

    hi: {
      'demo.title': 'प्रदर्शन वेबसाइट।',
      'demo.text':
        'सामग्री, पता, संपर्क, प्रमाणन और आपूर्तिकर्ता डेटा को उत्पादन से पहले सत्यापित किया जाना चाहिए।',

      'brand.tagline':
        'इंडोनेशिया से वैश्विक बाज़ार के लिए',

      'home.heroEyebrow':
        'इंडोनेशियाई कमोडिटी · वैश्विक साझेदारी',
      'home.heroTitleOne': 'इंडोनेशियाई लौंग,',
      'home.heroTitleTwo': 'दुनिया के लिए मूल्य।',
      'home.heroDescription':
        'PT Cengkeh Indonesia Global की यह प्रदर्शन वेबसाइट कंपनी, उत्पादों, लेखों, पोर्टफोलियो और आपूर्तिकर्ता नेटवर्क को पेशेवर और उत्तरदायी रूप में प्रस्तुत करती है।',

      'home.statProfileTitle': 'कॉर्पोरेट प्रोफ़ाइल',
      'home.statProfileText':
        'व्यवस्थित कंपनी जानकारी',
      'home.statCatalogTitle': 'गतिशील उत्पाद सूची',
      'home.statCatalogText':
        'प्रबंधित उत्पाद और विशेष विवरण',
      'home.statSupplierTitle': 'आपूर्तिकर्ता मानचित्र',
      'home.statSupplierText':
        'गोपनीयता सुरक्षित रखने वाले अनुमानित स्थान',

      'home.valueEyebrow': 'मुख्य मूल्य',
      'home.valueTitle':
        'स्पष्ट और जिम्मेदार सेवा की नींव',
      'home.valueDescription':
        'कंपनी की स्वीकृति के बाद उत्पादन CMS के माध्यम से कॉर्पोरेट संदेशों को अपडेट किया जा सकता है।',

      'home.featureOneTitle': 'स्पष्ट उत्पाद जानकारी',
      'home.featureOneText':
        'उत्पाद सूची विवरण, विशेषताएँ, गैलरी, ब्रोशर और WhatsApp पूछताछ का समर्थन करती है।',

      'home.featureTwoTitle': 'जिम्मेदार साझेदारी',
      'home.featureTwoText':
        'गोपनीयता और सुरक्षा की रक्षा के लिए आपूर्तिकर्ता डेटा को अनुमानित स्थान के रूप में प्रदर्शित किया जा सकता है।',

      'home.featureThreeTitle': 'तेज़ संचार',
      'home.featureThreeText':
        'संपर्क फ़ॉर्म और WhatsApp संभावित भागीदारों को सही जानकारी के साथ कंपनी से संपर्क करने में सहायता करते हैं।',

      'home.catalogEyebrow': 'उत्पाद सूची',
      'home.catalogTitle': 'चुनिंदा उत्पाद',
      'home.catalogDescription':
        'निम्न जानकारी उत्पाद सूची की संरचना दिखाने के लिए नमूना डेटा है।',
      'home.allProducts': 'सभी उत्पाद देखें →',

      'home.portfolioEyebrow': 'पोर्टफोलियो',
      'home.portfolioTitle':
        'विकास प्राथमिकताओं के उदाहरण',

      'home.articleEyebrow': 'लेख',
      'home.articleTitle': 'जानकारी और शिक्षा',
      'home.articleDescription':
        'लेख खोज, श्रेणी, टैग, मेटाडेटा और विस्तृत पृष्ठों का समर्थन करते हैं।',
      'home.allArticles': 'सभी लेख →',

      'home.ctaEyebrow': 'बातचीत शुरू करें',
      'home.ctaTitle':
        'उत्पाद और साझेदारी आवश्यकताओं पर चर्चा करें।',
      'home.ctaDescription':
        'प्रदर्शन फ़ॉर्म उसी ब्राउज़र में prototype CMS पर संदेश सहेज सकता है। Netlify पर इसे Netlify Forms के रूप में सक्रिय किया जा सकता है।',

      'footer.description':
        'SRS संस्करण 1.2 के आधार पर कंपनी प्रोफ़ाइल, उत्पाद सूची, लेख, आपूर्तिकर्ता नेटवर्क, संपर्क और CMS वेबसाइट का प्रोटोटाइप।',
      'footer.navigation': 'नेविगेशन',
      'footer.information': 'जानकारी',
      'footer.contactDemo': 'डेमो संपर्क',
      'footer.supplier': 'आपूर्तिकर्ता',
      'footer.privacy': 'गोपनीयता नीति',
      'footer.cms': 'CMS प्रोटोटाइप',
      'footer.notFound': '404 पृष्ठ',
      'footer.rights': 'सर्वाधिकार सुरक्षित।',
      'footer.version': 'डेमो SRS-CIG-WEB-001 · संस्करण 1.2'
    },

    zh: {
      'demo.title': '演示网站。',
      'demo.text':
        '网站内容、地址、联系方式、认证信息和供应商数据在正式上线前必须经过验证。',

      'brand.tagline': '从印度尼西亚走向全球市场',

      'home.heroEyebrow':
        '印度尼西亚商品 · 全球合作伙伴关系',
      'home.heroTitleOne': '印度尼西亚丁香，',
      'home.heroTitleTwo': '为世界创造价值。',
      'home.heroDescription':
        'PT Cengkeh Indonesia Global 演示网站以专业、响应式的方式介绍公司、产品、文章、项目组合以及供应商网络。',

      'home.statProfileTitle': '公司简介',
      'home.statProfileText': '结构化的公司信息',
      'home.statCatalogTitle': '动态产品目录',
      'home.statCatalogText': '可管理的产品和规格',
      'home.statSupplierTitle': '供应商地图',
      'home.statSupplierText':
        '保护隐私的大致位置',

      'home.valueEyebrow': '核心价值',
      'home.valueTitle':
        '清晰且负责任的服务基础',
      'home.valueDescription':
        '获得公司批准后，可通过正式 CMS 更新企业信息。',

      'home.featureOneTitle': '清晰的产品信息',
      'home.featureOneText':
        '产品目录支持描述、规格、图片、宣传册以及 WhatsApp 咨询。',

      'home.featureTwoTitle': '负责任的合作伙伴关系',
      'home.featureTwoText':
        '供应商数据可显示为大致位置，以保护隐私和安全。',

      'home.featureThreeTitle': '快速沟通',
      'home.featureThreeText':
        '联系表单和 WhatsApp 渠道帮助潜在合作伙伴准确联系公司。',

      'home.catalogEyebrow': '产品目录',
      'home.catalogTitle': '精选产品',
      'home.catalogDescription':
        '以下信息为用于展示产品目录结构的示例数据。',
      'home.allProducts': '查看所有产品 →',

      'home.portfolioEyebrow': '项目组合',
      'home.portfolioTitle': '发展重点示例',

      'home.articleEyebrow': '文章',
      'home.articleTitle': '信息与教育',
      'home.articleDescription':
        '文章支持搜索、分类、标签、元数据和详情页面。',
      'home.allArticles': '所有文章 →',

      'home.ctaEyebrow': '开始沟通',
      'home.ctaTitle':
        '讨论产品和合作需求。',
      'home.ctaDescription':
        '演示表单可将信息保存在同一浏览器的 prototype CMS 中。在 Netlify 上可启用 Netlify Forms。',

      'footer.description':
        '基于 SRS 1.2 版本制作的公司简介、产品目录、文章、供应商网络、联系页面和 CMS 原型网站。',
      'footer.navigation': '导航',
      'footer.information': '信息',
      'footer.contactDemo': '演示联系方式',
      'footer.supplier': '供应商',
      'footer.privacy': '隐私政策',
      'footer.cms': 'CMS 原型',
      'footer.notFound': '404 页面',
      'footer.rights': '版权所有。',
      'footer.version': '演示 SRS-CIG-WEB-001 · 版本 1.2'
    },

    ar: {
      'demo.title': 'موقع تجريبي.',
      'demo.text':
        'يجب التحقق من المحتوى والعنوان وبيانات الاتصال والشهادات وبيانات الموردين قبل الإطلاق الرسمي.',

      'brand.tagline':
        'من إندونيسيا إلى السوق العالمية',

      'home.heroEyebrow':
        'سلع إندونيسية · شراكات عالمية',
      'home.heroTitleOne': 'القرنفل الإندونيسي،',
      'home.heroTitleTwo': 'قيمة للعالم.',
      'home.heroDescription':
        'موقع تجريبي لشركة PT Cengkeh Indonesia Global يعرض الشركة والمنتجات والمقالات والأعمال وشبكة الموردين بتصميم احترافي ومتجاوب.',

      'home.statProfileTitle': 'الملف التعريفي للشركة',
      'home.statProfileText':
        'معلومات منظمة عن الشركة',
      'home.statCatalogTitle': 'كتالوج ديناميكي',
      'home.statCatalogText':
        'منتجات ومواصفات قابلة للإدارة',
      'home.statSupplierTitle': 'خريطة الموردين',
      'home.statSupplierText':
        'مواقع تقريبية تحمي الخصوصية',

      'home.valueEyebrow': 'القيم الأساسية',
      'home.valueTitle':
        'أساس واضح ومسؤول للخدمات',
      'home.valueDescription':
        'يمكن تحديث الرسائل المؤسسية من خلال نظام إدارة المحتوى بعد اعتمادها من الشركة.',

      'home.featureOneTitle': 'معلومات واضحة عن المنتجات',
      'home.featureOneText':
        'يدعم الكتالوج الأوصاف والمواصفات والصور والكتيبات والاستفسارات عبر واتساب.',

      'home.featureTwoTitle': 'شراكات مسؤولة',
      'home.featureTwoText':
        'يمكن عرض بيانات الموردين كمواقع تقريبية لحماية الخصوصية والأمان.',

      'home.featureThreeTitle': 'تواصل سريع',
      'home.featureThreeText':
        'يساعد نموذج الاتصال وقناة واتساب الشركاء المحتملين على التواصل مع الشركة بالسياق المناسب.',

      'home.catalogEyebrow': 'كتالوج المنتجات',
      'home.catalogTitle': 'منتجات مختارة',
      'home.catalogDescription':
        'المعلومات التالية بيانات تجريبية لعرض بنية كتالوج المنتجات.',
      'home.allProducts': 'عرض جميع المنتجات ←',

      'home.portfolioEyebrow': 'الأعمال',
      'home.portfolioTitle':
        'أمثلة على أولويات التطوير',

      'home.articleEyebrow': 'المقالات',
      'home.articleTitle': 'المعلومات والتوعية',
      'home.articleDescription':
        'تدعم المقالات البحث والفئات والوسوم والبيانات الوصفية وصفحات التفاصيل.',
      'home.allArticles': 'جميع المقالات ←',

      'home.ctaEyebrow': 'ابدأ المحادثة',
      'home.ctaTitle':
        'ناقش متطلبات المنتجات والشراكات.',
      'home.ctaDescription':
        'يمكن للنموذج التجريبي حفظ الرسائل في نظام CMS على المتصفح نفسه. ويمكن تفعيله كنموذج Netlify Forms عند استخدام Netlify.',

      'footer.description':
        'نموذج أولي لموقع تعريفي بالشركة يتضمن الكتالوج والمقالات وشبكة الموردين والتواصل ونظام CMS وفق الإصدار 1.2 من وثيقة SRS.',
      'footer.navigation': 'التنقل',
      'footer.information': 'المعلومات',
      'footer.contactDemo': 'بيانات اتصال تجريبية',
      'footer.supplier': 'الموردون',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.cms': 'نموذج CMS',
      'footer.notFound': 'صفحة 404',
      'footer.rights': 'جميع الحقوق محفوظة.',
      'footer.version': 'عرض SRS-CIG-WEB-001 · الإصدار 1.2'
    }
  };

  Object.keys(homepageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      homepageTranslations[language]
    );
  });

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

