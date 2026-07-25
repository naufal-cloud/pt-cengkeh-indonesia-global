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

    const dynamicHomepageTranslations = {
    id: {
      'category.driedCloves': 'Cengkeh Kering',
      'category.cloveOil': 'Minyak Cengkeh',
      'category.cloveStems': 'Tangkai Cengkeh',
      'category.education': 'Edukasi',
      'category.quality': 'Kualitas',
      'category.partnership': 'Kemitraan',
      'category.trade': 'Perdagangan',

      'product.premium.name': 'Cengkeh Kering Premium',
      'product.premium.summary':
        'Cengkeh kering pilihan dengan proses sortasi bertahap untuk kebutuhan industri dan perdagangan.',

      'product.oil.name': 'Minyak Cengkeh',
      'product.oil.summary':
        'Produk turunan cengkeh untuk kebutuhan bahan baku industri dengan dokumentasi mutu yang dapat disesuaikan.',

      'product.stem.name': 'Tangkai Cengkeh',
      'product.stem.summary':
        'Tangkai cengkeh yang dipersiapkan untuk pemanfaatan lanjutan dan kebutuhan mitra industri.',

      'article.supplyChain.title':
        'Mengenal Rantai Pasok Cengkeh Indonesia',
      'article.supplyChain.excerpt':
        'Gambaran singkat proses komoditas cengkeh dari mitra kebun, sortasi, pengemasan, hingga komunikasi dengan calon pembeli.',

      'article.sorting.title':
        'Pentingnya Sortasi dalam Perdagangan Komoditas',
      'article.sorting.excerpt':
        'Sortasi membantu membangun konsistensi informasi produk dan mengurangi ketidakjelasan spesifikasi pada komunikasi B2B.',

      'article.partnership.title':
        'Kemitraan Supplier yang Bertanggung Jawab',
      'article.partnership.excerpt':
        'Peta supplier sebaiknya memberikan gambaran wilayah tanpa membuka informasi sensitif yang tidak disetujui.',

      'portfolio.network.title':
        'Pengembangan Jaringan Kemitraan',
      'portfolio.network.summary':
        'Contoh portofolio kemitraan yang perlu diganti dengan proyek resmi dan data terverifikasi.',

      'portfolio.quality.title':
        'Penguatan Informasi Mutu Produk',
      'portfolio.quality.summary':
        'Contoh dokumentasi upaya penyajian spesifikasi dan informasi kualitas secara konsisten.',

      'portfolio.global.title':
        'Persiapan Kanal Pasar Global',
      'portfolio.global.summary':
        'Contoh portofolio pengembangan materi dan kanal komunikasi untuk calon mitra global.'
    },

    en: {
      'category.driedCloves': 'Dried Cloves',
      'category.cloveOil': 'Clove Oil',
      'category.cloveStems': 'Clove Stems',
      'category.education': 'Education',
      'category.quality': 'Quality',
      'category.partnership': 'Partnership',
      'category.trade': 'Trade',

      'product.premium.name': 'Premium Dried Cloves',
      'product.premium.summary':
        'Selected dried cloves processed through staged sorting for industrial and trading requirements.',

      'product.oil.name': 'Clove Oil',
      'product.oil.summary':
        'A clove-derived product for industrial raw materials with adaptable quality documentation.',

      'product.stem.name': 'Clove Stems',
      'product.stem.summary':
        'Clove stems prepared for further utilization and the requirements of industrial partners.',

      'article.supplyChain.title':
        'Understanding Indonesia’s Clove Supply Chain',
      'article.supplyChain.excerpt':
        'A brief overview of the clove commodity process, from partner farms and sorting to packaging and communication with prospective buyers.',

      'article.sorting.title':
        'The Importance of Sorting in Commodity Trade',
      'article.sorting.excerpt':
        'Sorting helps maintain consistent product information and reduces specification ambiguity in B2B communication.',

      'article.partnership.title':
        'Responsible Supplier Partnerships',
      'article.partnership.excerpt':
        'Supplier maps should provide a regional overview without revealing sensitive information that has not been approved.',

      'portfolio.network.title':
        'Partnership Network Development',
      'portfolio.network.summary':
        'A sample partnership portfolio that must be replaced with official projects and verified data.',

      'portfolio.quality.title':
        'Strengthening Product Quality Information',
      'portfolio.quality.summary':
        'Sample documentation of efforts to present specifications and quality information consistently.',

      'portfolio.global.title':
        'Preparing Global Market Channels',
      'portfolio.global.summary':
        'A sample portfolio for developing materials and communication channels for prospective global partners.'
    },

    hi: {
      'category.driedCloves': 'सूखी लौंग',
      'category.cloveOil': 'लौंग का तेल',
      'category.cloveStems': 'लौंग की डंठलें',
      'category.education': 'शिक्षा',
      'category.quality': 'गुणवत्ता',
      'category.partnership': 'साझेदारी',
      'category.trade': 'व्यापार',

      'product.premium.name': 'प्रीमियम सूखी लौंग',
      'product.premium.summary':
        'औद्योगिक और व्यापारिक आवश्यकताओं के लिए चरणबद्ध छंटाई से तैयार चुनी हुई सूखी लौंग।',

      'product.oil.name': 'लौंग का तेल',
      'product.oil.summary':
        'औद्योगिक कच्चे माल की आवश्यकताओं के लिए अनुकूलित गुणवत्ता दस्तावेज़ों वाला लौंग से बना उत्पाद।',

      'product.stem.name': 'लौंग की डंठलें',
      'product.stem.summary':
        'आगे उपयोग और औद्योगिक साझेदारों की आवश्यकताओं के लिए तैयार की गई लौंग की डंठलें।',

      'article.supplyChain.title':
        'इंडोनेशिया की लौंग आपूर्ति श्रृंखला को समझना',
      'article.supplyChain.excerpt':
        'साझेदार बागानों, छंटाई और पैकेजिंग से लेकर संभावित खरीदारों से संपर्क तक लौंग की प्रक्रिया का संक्षिप्त विवरण।',

      'article.sorting.title':
        'कमोडिटी व्यापार में छंटाई का महत्व',
      'article.sorting.excerpt':
        'छंटाई उत्पाद जानकारी की निरंतरता बनाए रखने और B2B संचार में विनिर्देशों की अस्पष्टता कम करने में सहायता करती है।',

      'article.partnership.title':
        'जिम्मेदार आपूर्तिकर्ता साझेदारी',
      'article.partnership.excerpt':
        'आपूर्तिकर्ता मानचित्र को बिना स्वीकृति वाली संवेदनशील जानकारी दिखाए क्षेत्रीय जानकारी प्रदान करनी चाहिए।',

      'portfolio.network.title':
        'साझेदारी नेटवर्क का विकास',
      'portfolio.network.summary':
        'साझेदारी पोर्टफोलियो का नमूना जिसे आधिकारिक परियोजनाओं और सत्यापित डेटा से बदला जाना चाहिए।',

      'portfolio.quality.title':
        'उत्पाद गुणवत्ता जानकारी को मजबूत करना',
      'portfolio.quality.summary':
        'विनिर्देशों और गुणवत्ता जानकारी को लगातार प्रस्तुत करने के प्रयासों का नमूना दस्तावेज़।',

      'portfolio.global.title':
        'वैश्विक बाज़ार चैनलों की तैयारी',
      'portfolio.global.summary':
        'संभावित वैश्विक साझेदारों के लिए सामग्री और संचार चैनल विकसित करने का नमूना पोर्टफोलियो।'
    },

    zh: {
      'category.driedCloves': '干丁香',
      'category.cloveOil': '丁香油',
      'category.cloveStems': '丁香梗',
      'category.education': '教育',
      'category.quality': '质量',
      'category.partnership': '合作伙伴关系',
      'category.trade': '贸易',

      'product.premium.name': '优质干丁香',
      'product.premium.summary':
        '经过分阶段筛选的精选干丁香，适用于工业和贸易需求。',

      'product.oil.name': '丁香油',
      'product.oil.summary':
        '适用于工业原材料需求的丁香衍生产品，并可提供相应的质量文件。',

      'product.stem.name': '丁香梗',
      'product.stem.summary':
        '为进一步利用以及工业合作伙伴需求而准备的丁香梗。',

      'article.supplyChain.title':
        '了解印度尼西亚丁香供应链',
      'article.supplyChain.excerpt':
        '简要介绍丁香从合作种植园、筛选和包装，到与潜在买家沟通的整个流程。',

      'article.sorting.title':
        '筛选在商品贸易中的重要性',
      'article.sorting.excerpt':
        '筛选有助于保持产品信息的一致性，并减少 B2B 沟通中规格不明确的问题。',

      'article.partnership.title':
        '负责任的供应商合作伙伴关系',
      'article.partnership.excerpt':
        '供应商地图应提供区域概况，同时避免公开未经批准的敏感信息。',

      'portfolio.network.title':
        '合作伙伴网络发展',
      'portfolio.network.summary':
        '合作伙伴项目组合示例，正式使用前应替换为官方项目和已验证数据。',

      'portfolio.quality.title':
        '加强产品质量信息',
      'portfolio.quality.summary':
        '持续展示产品规格和质量信息相关工作的示例记录。',

      'portfolio.global.title':
        '全球市场渠道准备',
      'portfolio.global.summary':
        '为潜在全球合作伙伴开发资料和沟通渠道的示例项目组合。'
    },

    ar: {
      'category.driedCloves': 'القرنفل المجفف',
      'category.cloveOil': 'زيت القرنفل',
      'category.cloveStems': 'سيقان القرنفل',
      'category.education': 'التوعية',
      'category.quality': 'الجودة',
      'category.partnership': 'الشراكة',
      'category.trade': 'التجارة',

      'product.premium.name': 'قرنفل مجفف ممتاز',
      'product.premium.summary':
        'قرنفل مجفف مختار يخضع لفرز تدريجي لتلبية احتياجات الصناعة والتجارة.',

      'product.oil.name': 'زيت القرنفل',
      'product.oil.summary':
        'منتج مشتق من القرنفل لاستخدامه مادة خام صناعية مع وثائق جودة قابلة للتخصيص.',

      'product.stem.name': 'سيقان القرنفل',
      'product.stem.summary':
        'سيقان قرنفل معدة للاستخدام اللاحق ولتلبية احتياجات الشركاء الصناعيين.',

      'article.supplyChain.title':
        'التعرف على سلسلة توريد القرنفل في إندونيسيا',
      'article.supplyChain.excerpt':
        'نظرة موجزة على مراحل القرنفل من المزارع الشريكة والفرز والتعبئة إلى التواصل مع المشترين المحتملين.',

      'article.sorting.title':
        'أهمية الفرز في تجارة السلع',
      'article.sorting.excerpt':
        'يساعد الفرز على توحيد معلومات المنتجات وتقليل غموض المواصفات في التواصل بين الشركات.',

      'article.partnership.title':
        'شراكات مسؤولة مع الموردين',
      'article.partnership.excerpt':
        'ينبغي أن تقدم خريطة الموردين نظرة عامة على المناطق دون كشف معلومات حساسة غير معتمدة.',

      'portfolio.network.title':
        'تطوير شبكة الشراكات',
      'portfolio.network.summary':
        'نموذج لمحفظة شراكات يجب استبداله بمشروعات رسمية وبيانات موثقة.',

      'portfolio.quality.title':
        'تعزيز معلومات جودة المنتجات',
      'portfolio.quality.summary':
        'نموذج لتوثيق جهود عرض المواصفات ومعلومات الجودة بصورة متسقة.',

      'portfolio.global.title':
        'إعداد قنوات السوق العالمية',
      'portfolio.global.summary':
        'نموذج لمحفظة تطوير المواد وقنوات التواصل مع الشركاء العالميين المحتملين.'
    }
  };

  Object.keys(dynamicHomepageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      dynamicHomepageTranslations[language]
    );
  });

    const aboutPageTranslations = {
    id: {
      'about.companyProfile': 'Profil Perusahaan',
      'about.pageTitle':
        'Tentang PT Cengkeh Indonesia Global',
      'about.pageDescription':
        'Halaman profil yang menampung sejarah, visi, misi, nilai, legalitas, manajemen, serta informasi kontak sesuai kebutuhan SRS.',

      'about.demoProfile': 'Profil Demonstrasi',
      'about.professionalChannel':
        'Membangun kanal informasi komoditas yang profesional.',
      'about.introduction':
        'PT Cengkeh Indonesia Global diperkenalkan melalui narasi demo yang menekankan kualitas informasi, kemitraan, dan komunikasi bisnis.',
      'about.unverifiedInformation':
        'Riwayat pendirian, struktur perusahaan, dokumen legalitas, sertifikasi, kapasitas pasokan, serta klaim operasional belum tercantum karena harus disediakan dan disetujui oleh pihak perusahaan.',

      'about.checkCms':
        'Konten profil dapat diperbarui tanpa mengubah kode pada implementasi CMS produksi.',
      'about.checkLegal':
        'Informasi legalitas dan sertifikasi hanya dipublikasikan setelah diverifikasi.',
      'about.checkPrivacy':
        'Data sensitif mitra dan transaksi tidak ditampilkan tanpa persetujuan tertulis.',

      'about.corporateIdentity': 'Identitas korporat',
      'about.corporateIdentityText':
        'Palet hijau, emas, dan bronze diturunkan dari logo resmi dan diterapkan secara konsisten pada antarmuka.',

      'about.companyDirection': 'Arah Perusahaan',
      'about.visionMissionValues':
        'Visi, misi, dan nilai',
      'about.officialStatement':
        'Isi berikut bersifat contoh dan harus diganti dengan pernyataan resmi.',

      'about.demoVision': 'Visi Demo',
      'about.demoVisionText':
        'Menjadi penghubung informasi dan kemitraan komoditas cengkeh Indonesia yang terpercaya di pasar global.',

      'about.demoMission': 'Misi Demo',
      'about.demoMissionText':
        'Menyajikan informasi produk yang jelas, membangun komunikasi bisnis yang cepat, dan menjaga tanggung jawab publikasi data.',

      'about.demoValues': 'Nilai Demo',
      'about.demoValuesText':
        'Integritas, kualitas informasi, kemitraan, kehati-hatian, dan perbaikan berkelanjutan.',

      'about.demoPortfolio': 'Portofolio demonstrasi'
    },

    en: {
      'about.companyProfile': 'Company Profile',
      'about.pageTitle':
        'About PT Cengkeh Indonesia Global',
      'about.pageDescription':
        'A company profile page containing its history, vision, mission, values, legal information, management, and contact details based on the SRS requirements.',

      'about.demoProfile': 'Demonstration Profile',
      'about.professionalChannel':
        'Building a professional commodity information channel.',
      'about.introduction':
        'PT Cengkeh Indonesia Global is introduced through demonstration content emphasizing information quality, partnerships, and business communication.',
      'about.unverifiedInformation':
        'The company history, organizational structure, legal documents, certifications, supply capacity, and operational claims are not yet presented because they must be provided and approved by the company.',

      'about.checkCms':
        'Company profile content can be updated through the production CMS without changing the website code.',
      'about.checkLegal':
        'Legal and certification information will only be published after verification.',
      'about.checkPrivacy':
        'Sensitive partner and transaction data will not be displayed without written consent.',

      'about.corporateIdentity': 'Corporate Identity',
      'about.corporateIdentityText':
        'The green, gold, and bronze palette is derived from the official logo and applied consistently throughout the interface.',

      'about.companyDirection': 'Company Direction',
      'about.visionMissionValues':
        'Vision, mission, and values',
      'about.officialStatement':
        'The following content is an example and must be replaced with official statements.',

      'about.demoVision': 'Demonstration Vision',
      'about.demoVisionText':
        'To become a trusted information and partnership link for Indonesian clove commodities in the global market.',

      'about.demoMission': 'Demonstration Mission',
      'about.demoMissionText':
        'To provide clear product information, establish fast business communication, and maintain responsible data publication.',

      'about.demoValues': 'Demonstration Values',
      'about.demoValuesText':
        'Integrity, information quality, partnership, prudence, and continuous improvement.',

      'about.demoPortfolio': 'Demonstration portfolio'
    },

    hi: {
      'about.companyProfile': 'कंपनी प्रोफ़ाइल',
      'about.pageTitle':
        'PT Cengkeh Indonesia Global के बारे में',
      'about.pageDescription':
        'SRS आवश्यकताओं के अनुसार इतिहास, दृष्टि, मिशन, मूल्य, कानूनी जानकारी, प्रबंधन और संपर्क विवरण वाला कंपनी प्रोफ़ाइल पृष्ठ।',

      'about.demoProfile': 'प्रदर्शन प्रोफ़ाइल',
      'about.professionalChannel':
        'एक पेशेवर कमोडिटी सूचना चैनल का निर्माण।',
      'about.introduction':
        'PT Cengkeh Indonesia Global को सूचना की गुणवत्ता, साझेदारी और व्यावसायिक संचार पर आधारित प्रदर्शन सामग्री के माध्यम से प्रस्तुत किया गया है।',
      'about.unverifiedInformation':
        'कंपनी का इतिहास, संगठनात्मक संरचना, कानूनी दस्तावेज़, प्रमाणन, आपूर्ति क्षमता और परिचालन दावे अभी प्रदर्शित नहीं किए गए हैं क्योंकि उन्हें कंपनी द्वारा उपलब्ध और स्वीकृत किया जाना आवश्यक है।',

      'about.checkCms':
        'उत्पादन CMS के माध्यम से वेबसाइट कोड बदले बिना कंपनी प्रोफ़ाइल की सामग्री अपडेट की जा सकती है।',
      'about.checkLegal':
        'कानूनी और प्रमाणन जानकारी सत्यापन के बाद ही प्रकाशित की जाएगी।',
      'about.checkPrivacy':
        'लिखित सहमति के बिना साझेदारों और लेनदेन का संवेदनशील डेटा प्रदर्शित नहीं किया जाएगा।',

      'about.corporateIdentity': 'कॉर्पोरेट पहचान',
      'about.corporateIdentityText':
        'हरे, सुनहरे और कांस्य रंगों का संयोजन आधिकारिक लोगो से लिया गया है और पूरे इंटरफ़ेस में समान रूप से लागू किया गया है।',

      'about.companyDirection': 'कंपनी की दिशा',
      'about.visionMissionValues':
        'दृष्टि, मिशन और मूल्य',
      'about.officialStatement':
        'निम्न सामग्री केवल उदाहरण है और इसे आधिकारिक वक्तव्य से बदला जाना चाहिए।',

      'about.demoVision': 'प्रदर्शन दृष्टि',
      'about.demoVisionText':
        'वैश्विक बाज़ार में इंडोनेशियाई लौंग कमोडिटी के लिए एक विश्वसनीय सूचना और साझेदारी संपर्क बनना।',

      'about.demoMission': 'प्रदर्शन मिशन',
      'about.demoMissionText':
        'स्पष्ट उत्पाद जानकारी प्रस्तुत करना, तेज़ व्यावसायिक संचार स्थापित करना और डेटा प्रकाशन की जिम्मेदारी बनाए रखना।',

      'about.demoValues': 'प्रदर्शन मूल्य',
      'about.demoValuesText':
        'ईमानदारी, सूचना गुणवत्ता, साझेदारी, सावधानी और निरंतर सुधार।',

      'about.demoPortfolio': 'प्रदर्शन पोर्टफोलियो'
    },

    zh: {
      'about.companyProfile': '公司简介',
      'about.pageTitle':
        '关于 PT Cengkeh Indonesia Global',
      'about.pageDescription':
        '根据 SRS 要求展示公司历史、愿景、使命、价值观、法律信息、管理层和联系方式的公司简介页面。',

      'about.demoProfile': '演示公司简介',
      'about.professionalChannel':
        '建立专业的商品信息渠道。',
      'about.introduction':
        'PT Cengkeh Indonesia Global 通过演示内容进行介绍，重点体现信息质量、合作伙伴关系和商业沟通。',
      'about.unverifiedInformation':
        '公司历史、组织结构、法律文件、认证、供应能力和运营声明尚未展示，因为这些信息必须由公司提供并批准。',

      'about.checkCms':
        '通过正式 CMS，无需修改网站代码即可更新公司简介内容。',
      'about.checkLegal':
        '法律和认证信息仅在核实后发布。',
      'about.checkPrivacy':
        '未经书面同意，不会展示合作伙伴和交易的敏感数据。',

      'about.corporateIdentity': '企业形象',
      'about.corporateIdentityText':
        '绿色、金色和青铜色的配色源自官方标志，并统一应用于整个界面。',

      'about.companyDirection': '公司发展方向',
      'about.visionMissionValues':
        '愿景、使命和价值观',
      'about.officialStatement':
        '以下内容仅为示例，正式使用时必须替换为官方声明。',

      'about.demoVision': '演示愿景',
      'about.demoVisionText':
        '成为印度尼西亚丁香商品进入全球市场时值得信赖的信息和合作桥梁。',

      'about.demoMission': '演示使命',
      'about.demoMissionText':
        '提供清晰的产品信息，建立快速的商业沟通，并负责任地发布数据。',

      'about.demoValues': '演示价值观',
      'about.demoValuesText':
        '诚信、信息质量、合作伙伴关系、审慎和持续改进。',

      'about.demoPortfolio': '演示项目组合'
    },

    ar: {
      'about.companyProfile': 'الملف التعريفي للشركة',
      'about.pageTitle':
        'عن PT Cengkeh Indonesia Global',
      'about.pageDescription':
        'صفحة تعريفية تعرض تاريخ الشركة ورؤيتها ورسالتها وقيمها ومعلوماتها القانونية وإدارتها وبيانات الاتصال وفق متطلبات وثيقة SRS.',

      'about.demoProfile': 'ملف تعريفي تجريبي',
      'about.professionalChannel':
        'بناء قناة احترافية لمعلومات السلع.',
      'about.introduction':
        'يتم تقديم PT Cengkeh Indonesia Global من خلال محتوى تجريبي يركز على جودة المعلومات والشراكات والتواصل التجاري.',
      'about.unverifiedInformation':
        'لم يتم عرض تاريخ الشركة وهيكلها التنظيمي ووثائقها القانونية وشهاداتها وقدرتها على التوريد وادعاءاتها التشغيلية بعد، لأنها يجب أن تقدم وتعتمد من الشركة.',

      'about.checkCms':
        'يمكن تحديث محتوى الملف التعريفي للشركة من خلال نظام CMS دون تعديل كود الموقع.',
      'about.checkLegal':
        'لن تنشر المعلومات القانونية والشهادات إلا بعد التحقق منها.',
      'about.checkPrivacy':
        'لن تعرض بيانات الشركاء والمعاملات الحساسة دون موافقة مكتوبة.',

      'about.corporateIdentity': 'الهوية المؤسسية',
      'about.corporateIdentityText':
        'تم اشتقاق الألوان الخضراء والذهبية والبرونزية من الشعار الرسمي وتطبيقها بصورة متناسقة في جميع أجزاء الواجهة.',

      'about.companyDirection': 'اتجاه الشركة',
      'about.visionMissionValues':
        'الرؤية والرسالة والقيم',
      'about.officialStatement':
        'المحتوى التالي مجرد مثال ويجب استبداله بالبيانات الرسمية.',

      'about.demoVision': 'رؤية تجريبية',
      'about.demoVisionText':
        'أن تصبح الشركة حلقة موثوقة للمعلومات والشراكات المتعلقة بسلعة القرنفل الإندونيسي في السوق العالمية.',

      'about.demoMission': 'رسالة تجريبية',
      'about.demoMissionText':
        'تقديم معلومات واضحة عن المنتجات، وبناء تواصل تجاري سريع، والمحافظة على مسؤولية نشر البيانات.',

      'about.demoValues': 'قيم تجريبية',
      'about.demoValuesText':
        'النزاهة وجودة المعلومات والشراكة والحذر والتحسين المستمر.',

      'about.demoPortfolio': 'محفظة أعمال تجريبية'
    }
  };

  Object.keys(aboutPageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      aboutPageTranslations[language]
    );
  });


    const productPageTranslations = {
    id: {
      'product.catalog': 'Katalog',
      'product.pageTitle': 'Produk Cengkeh',
      'product.pageDescription':
        'Katalog demonstrasi dengan filter kategori, pencarian, halaman detail, spesifikasi, dan tombol komunikasi.',
      'product.searchLabel': 'Cari produk',
      'product.searchPlaceholder':
        'Masukkan nama atau deskripsi produk',
      'product.category': 'Kategori',
      'product.allCategories': 'Semua kategori',
      'product.notFound': 'Produk tidak ditemukan',
      'product.changeSearch':
        'Ubah kata kunci atau kategori pencarian.'
    },

    en: {
      'product.catalog': 'Catalog',
      'product.pageTitle': 'Clove Products',
      'product.pageDescription':
        'A demonstration catalog featuring category filters, search, detail pages, specifications, and communication buttons.',
      'product.searchLabel': 'Search products',
      'product.searchPlaceholder':
        'Enter a product name or description',
      'product.category': 'Category',
      'product.allCategories': 'All categories',
      'product.notFound': 'No products found',
      'product.changeSearch':
        'Change the search keyword or category.'
    },

    hi: {
      'product.catalog': 'कैटलॉग',
      'product.pageTitle': 'लौंग उत्पाद',
      'product.pageDescription':
        'श्रेणी फ़िल्टर, खोज, विवरण पृष्ठ, विशिष्टताओं और संपर्क बटन वाला प्रदर्शन कैटलॉग।',
      'product.searchLabel': 'उत्पाद खोजें',
      'product.searchPlaceholder':
        'उत्पाद का नाम या विवरण दर्ज करें',
      'product.category': 'श्रेणी',
      'product.allCategories': 'सभी श्रेणियाँ',
      'product.notFound': 'कोई उत्पाद नहीं मिला',
      'product.changeSearch':
        'खोज शब्द या श्रेणी बदलें।'
    },

    zh: {
      'product.catalog': '产品目录',
      'product.pageTitle': '丁香产品',
      'product.pageDescription':
        '包含分类筛选、搜索、详情页面、产品规格和沟通按钮的演示目录。',
      'product.searchLabel': '搜索产品',
      'product.searchPlaceholder':
        '输入产品名称或说明',
      'product.category': '分类',
      'product.allCategories': '所有分类',
      'product.notFound': '未找到产品',
      'product.changeSearch':
        '请更改搜索关键词或产品分类。'
    },

    ar: {
      'product.catalog': 'الكتالوج',
      'product.pageTitle': 'منتجات القرنفل',
      'product.pageDescription':
        'كتالوج تجريبي يتضمن تصفية حسب الفئة والبحث وصفحات التفاصيل والمواصفات وأزرار التواصل.',
      'product.searchLabel': 'البحث عن منتج',
      'product.searchPlaceholder':
        'أدخل اسم المنتج أو وصفه',
      'product.category': 'الفئة',
      'product.allCategories': 'جميع الفئات',
      'product.notFound': 'لم يتم العثور على منتجات',
      'product.changeSearch':
        'غيّر كلمة البحث أو فئة المنتج.'
    }
  };

  Object.keys(productPageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      productPageTranslations[language]
    );
  });


    const articlePageTranslations = {
    id: {
      'article.publication': 'Publikasi',
      'article.pageTitle': 'Artikel dan Edukasi',
      'article.pageDescription':
        'Konten demonstrasi tentang cengkeh, kualitas, kemitraan, dan pengelolaan informasi supplier.',
      'article.searchLabel': 'Cari artikel',
      'article.searchPlaceholder':
        'Cari judul, ringkasan, atau tag',
      'article.category': 'Kategori',
      'article.allCategories': 'Semua kategori',
      'article.notFound': 'Artikel tidak ditemukan',
      'article.changeSearch':
        'Coba kata kunci atau kategori lain.'
    },

    en: {
      'article.publication': 'Publications',
      'article.pageTitle': 'Articles and Education',
      'article.pageDescription':
        'Demonstration content about cloves, quality, partnerships, and supplier information management.',
      'article.searchLabel': 'Search articles',
      'article.searchPlaceholder':
        'Search by title, summary, or tag',
      'article.category': 'Category',
      'article.allCategories': 'All categories',
      'article.notFound': 'No articles found',
      'article.changeSearch':
        'Try another keyword or category.'
    },

    hi: {
      'article.publication': 'प्रकाशन',
      'article.pageTitle': 'लेख और शिक्षा',
      'article.pageDescription':
        'लौंग, गुणवत्ता, साझेदारी और आपूर्तिकर्ता सूचना प्रबंधन से संबंधित प्रदर्शन सामग्री।',
      'article.searchLabel': 'लेख खोजें',
      'article.searchPlaceholder':
        'शीर्षक, सारांश या टैग से खोजें',
      'article.category': 'श्रेणी',
      'article.allCategories': 'सभी श्रेणियाँ',
      'article.notFound': 'कोई लेख नहीं मिला',
      'article.changeSearch':
        'किसी अन्य शब्द या श्रेणी का प्रयास करें।'
    },

    zh: {
      'article.publication': '出版内容',
      'article.pageTitle': '文章与知识',
      'article.pageDescription':
        '有关丁香、质量、合作伙伴关系和供应商信息管理的演示内容。',
      'article.searchLabel': '搜索文章',
      'article.searchPlaceholder':
        '按标题、摘要或标签搜索',
      'article.category': '分类',
      'article.allCategories': '所有分类',
      'article.notFound': '未找到文章',
      'article.changeSearch':
        '请尝试其他关键词或分类。'
    },

    ar: {
      'article.publication': 'المنشورات',
      'article.pageTitle': 'المقالات والمحتوى التعليمي',
      'article.pageDescription':
        'محتوى تجريبي عن القرنفل والجودة والشراكات وإدارة معلومات الموردين.',
      'article.searchLabel': 'البحث في المقالات',
      'article.searchPlaceholder':
        'ابحث بالعنوان أو الملخص أو الوسم',
      'article.category': 'الفئة',
      'article.allCategories': 'جميع الفئات',
      'article.notFound': 'لم يتم العثور على مقالات',
      'article.changeSearch':
        'جرّب كلمة بحث أو فئة أخرى.'
    }
  };

  Object.keys(articlePageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      articlePageTranslations[language]
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
            ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA']
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

