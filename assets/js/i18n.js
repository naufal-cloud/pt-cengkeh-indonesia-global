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
      'nav.shipping': 'Pengiriman',
      'nav.contact': 'Kontak',
      'nav.privacy': 'Kebijakan Privasi',


      'shipping.eyebrow':
        'Pilihan Logistik',

      'shipping.title':
        'Pilihan Jasa Pengiriman',

      'shipping.description':
        'Pengiriman produk dapat dilakukan melalui berbagai penyedia jasa pengiriman sesuai tujuan, jenis barang, dan kesepakatan transaksi.',

      'shipping.options':
        'Opsi Pengiriman',

      'shipping.available':
        'Jasa pengiriman yang tersedia',

      'shipping.availableDescription':
        'Pilihan jasa pengiriman disesuaikan dengan tujuan, jenis barang, kebutuhan logistik, serta kesepakatan transaksi dengan pelanggan.',


      'footer.description':
        'Perusahaan komoditas cengkeh Indonesia yang membangun kemitraan untuk pasar nasional dan global.',

      'footer.navigation':
        'Navigasi',

      'footer.information':
        'Informasi',

      'footer.contact':
        'Kontak',


      'common.viewDetail':
        'Lihat detail',

      'common.readArticle':
        'Baca artikel',

      'common.allProducts':
        'Lihat semua produk',

      'common.allArticles':
        'Semua artikel',

      'common.allCategories':
        'Semua kategori',

      'common.specifications':
        'Spesifikasi',

      'common.share':
        'Bagikan',

      'common.backToCatalog':
        'Kembali ke katalog',

      'common.backToArticles':
        'Kembali ke artikel',

      'common.askWhatsApp':
        'Tanyakan via WhatsApp',

      'common.downloadBrochure':
        'Unduh brosur',

      'common.exploreProducts':
        'Jelajahi Produk',

      'common.contactWhatsApp':
        'Hubungi via WhatsApp',

      'common.contactUs':
        'Hubungi Kami',

      'common.contactEmail':
        'Hubungi via Email',


      'search.productPlaceholder':
        'Cari produk...',

      'search.articlePlaceholder':
        'Cari artikel...',


      'empty.productTitle':
        'Produk tidak ditemukan',

      'empty.productText':
        'Ubah kata kunci atau kategori pencarian.',

      'empty.articleTitle':
        'Artikel tidak ditemukan',

      'empty.articleText':
        'Coba kata kunci atau kategori lain.',


      'toast.whatsappUnavailable':
        'Nomor WhatsApp resmi belum dikonfigurasi pada situs demo.',

      'toast.brochureUnavailable':
        'Brosur PDF demo belum tersedia.',

      'toast.messageSaved':
        'Pesan demo tersimpan di browser dan dapat dilihat pada CMS prototype.',


      'whatsapp.productMessage':
        'Halo PT Cengkeh Indonesia Global, saya ingin menanyakan produk {product}. {url}',

      'whatsapp.generalMessage':
        'Halo PT Cengkeh Indonesia Global, saya ingin memperoleh informasi lebih lanjut.'
    },


    en: {

      'language.label':
        'Select language',

      'nav.home':
        'Home',

      'nav.about':
        'About Us',

      'nav.products':
        'Products',

      'nav.articles':
        'Articles',

      'nav.suppliers':
        'Supplier Network',

      'nav.shipping':
        'Shipping',

      'nav.contact':
        'Contact',

      'nav.privacy':
        'Privacy Policy',


      'shipping.eyebrow':
        'Logistics Options',

      'shipping.title':
        'Shipping Service Options',

      'shipping.description':
        'Product delivery can be carried out through various shipping providers according to destination, product type, and transaction agreement.',

      'shipping.options':
        'Shipping Options',

      'shipping.available':
        'Available Shipping Services',

      'shipping.availableDescription':
        'Shipping services are selected based on destination, product type, logistics requirements, and transaction agreements with customers.',


      'footer.description':
        'An Indonesian clove commodity company building partnerships for national and global markets.',

      'footer.navigation':
        'Navigation',

      'footer.information':
        'Information',

      'footer.contact':
        'Contact',


      'common.viewDetail':
        'View details',

      'common.readArticle':
        'Read article',

      'common.allProducts':
        'View all products',

      'common.allArticles':
        'All articles',

      'common.allCategories':
        'All categories',

      'common.specifications':
        'Specifications',

      'common.share':
        'Share',

      'common.backToCatalog':
        'Back to catalogue',

      'common.backToArticles':
        'Back to articles',

      'common.askWhatsApp':
        'Ask via WhatsApp',

      'common.downloadBrochure':
        'Download brochure',

      'common.exploreProducts':
        'Explore Products',

      'common.contactWhatsApp':
        'Contact via WhatsApp',

      'common.contactUs':
        'Contact Us',

      'common.contactEmail':
        'Contact via Email',

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
        'The demonstration message has been saved in this browser.',

      'whatsapp.productMessage':
  'Hello PT Cengkeh Indonesia Global, I would like to ask about the product {product}. {url}',
'whatsapp.generalMessage':
  'Hello PT Cengkeh Indonesia Global, I would like to request further information.'
    },

    hi: {
        'language.label':
        'भाषा चुनें',

      'nav.home':
        'होम',

      'nav.about':
        'हमारे बारे में',

      'nav.products':
        'उत्पाद',

      'nav.articles':
        'लेख',

      'nav.suppliers':
        'सप्लायर नेटवर्क',

      'nav.shipping':
        'शिपिंग',

      'nav.contact':
        'संपर्क',

       'about.heroLabel':
        'कंपनी प्रोफ़ाइल',

      'about.heroTitle':
        'PT Cengkeh Indonesia Global के बारे में',

      'about.heroDescription':
        'कंपनी प्रोफ़ाइल, विज़न, मिशन, मूल्य, कानूनी जानकारी, संगठन संरचना और पोर्टफोलियो के बारे में अधिक जानें।',


      'about.companyProfile':
        'कंपनी प्रोफ़ाइल',

      'about.companyName':
        'PT Cengkeh Indonesia Global',

      'about.companyDescription':
        'इंडोनेशियाई मसालों के स्वाद और समृद्धि को दुनिया तक पहुंचाते हुए, PT Cengkeh Indonesia Global अंतरराष्ट्रीय मानकों के साथ उच्च गुणवत्ता वाली लौंग उपलब्ध कराने वाला एक विश्वसनीय भागीदार है। गुणवत्ता, विश्वसनीयता और स्थिरता को प्राथमिकता देते हुए हम एक मजबूत आपूर्ति श्रृंखला विकसित करते हैं।',

      'about.companyDetail':
        'PT Cengkeh Indonesia Global ने इंडोनेशिया के प्रमुख क्षेत्रों में मजबूत और विश्वसनीय लौंग आपूर्ति नेटवर्क विकसित किया है, जिसकी क्षमता प्रति माह 100 टन से अधिक है। किसानों, प्रमाणन प्रदाताओं और अनुभवी लॉजिस्टिक भागीदारों के साथ रणनीतिक सहयोग के माध्यम से हम खरीद से लेकर वितरण तक प्रत्येक प्रक्रिया को सुरक्षित और समय पर सुनिश्चित करते हैं।',

      'about.identityTitle': 'कॉर्पोरेट पहचान',

      'about.valueTitle': 'कंपनी के मूल्य',

'about.valueText': 'उत्कृष्ट सेवा और अंतरराष्ट्रीय मानकों के प्रति प्रतिबद्धता के माध्यम से गुणवत्ता, विश्वास, स्थिरता और दीर्घकालिक संबंधों को बनाए रखना।',

'about.identityDescription': 'PT Cengkeh Indonesia Global का लोगो लौंग के फूल, ग्लोब, पत्तियों और सुनहरे-हरे रंगों को जोड़ता है, जो एक गुणवत्तापूर्ण इंडोनेशियाई लौंग आपूर्तिकर्ता के रूप में हमारी पहचान, टिकाऊ उत्पादों और वैश्विक बाजार से जुड़ाव को दर्शाता है।',
      
      'about.check1':
        'उत्पाद जानकारी स्पष्ट और व्यवस्थित रूप से प्रस्तुत की जाती है।',

      'about.check2':
        'कानूनी जानकारी प्रबंधन द्वारा प्रकाशित आधिकारिक डेटा के आधार पर प्रस्तुत की जाती है।',

      'about.check3':
        'संवेदनशील भागीदार और लेनदेन डेटा सार्वजनिक रूप से प्रदर्शित नहीं किया जाता।',


      'about.directionLabel':
        'कंपनी दिशा',

      'about.directionTitle':
        'कंपनी का विज़न, मिशन और मूल्य',

      'about.directionDescription':
        'गुणवत्ता, विश्वास और व्यावसायिक संबंधों के निर्माण में कंपनी के विकास का मार्गदर्शन करने वाले सिद्धांत।',


      'about.visionTitle':
        'विज़न',

      'about.visionText':
        'विश्वसनीयता, व्यावसायिकता और स्थिरता के साथ बेहतरीन इंडोनेशियाई लौंग को दुनिया तक पहुंचाना।',

      'about.missionTitle':
        'मिशन',

      'about.missionText':
        'विश्वसनीय और लगातार गुणवत्ता मानकों के साथ अंतरराष्ट्रीय बाजार में उच्च गुणवत्ता वाली इंडोनेशियाई लौंग उपलब्ध कराना।',
      
      'nav.privacy': 'गोपनीयता नीति',

      'shipping.eyebrow': 'लॉजिस्टिक्स विकल्प',
      'shipping.options': 'शिपिंग विकल्प',
'shipping.title': 'शिपिंग सेवा विकल्प',
'shipping.description': 'उत्पादों की डिलीवरी गंतव्य, उत्पाद के प्रकार और लेनदेन समझौते के अनुसार विभिन्न शिपिंग प्रदाताओं के माध्यम से की जा सकती है।',
'shipping.options': 'शिपिंग विकल्प',
'shipping.available': 'उपलब्ध शिपिंग सेवाएं',
'shipping.availableDescription': 'शिपिंग सेवाओं का चयन गंतव्य, उत्पाद के प्रकार, लॉजिस्टिक आवश्यकताओं और ग्राहकों के साथ लेनदेन समझौते के आधार पर किया जाता है।',
'footer.description': 'एक इंडोनेशियाई लौंग कमोडिटी कंपनी जो राष्ट्रीय और वैश्विक बाजारों के लिए साझेदारी विकसित करती है।',
'footer.navigation': 'नेविगेशन',
'footer.information': 'जानकारी',
'footer.contact': 'संपर्क',

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
      'common.contactEmail': 'ईमेल द्वारा संपर्क करें',

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
        'संदेश इस ब्राउज़र में सहेजा गया है।',

      'whatsapp.productMessage':
  'नमस्ते PT Cengkeh Indonesia Global, मैं उत्पाद {product} के बारे में जानकारी चाहता हूँ। {url}',
'whatsapp.generalMessage':
  'नमस्ते PT Cengkeh Indonesia Global, मैं अधिक जानकारी प्राप्त करना चाहता हूँ।'
    },

    zh: {
      'language.label':
        '选择语言',

      'nav.home':
        '首页',

      'nav.about':
        '关于我们',

      'nav.products':
        '产品',

      'nav.articles':
        '文章',

      'nav.suppliers':
        '供应商网络',

      'nav.shipping':
        '运输',

      'nav.contact':
        '联系我们',

      'about.heroLabel':
        '公司简介',

      'about.heroTitle':
        '关于 PT Cengkeh Indonesia Global',

      'about.heroDescription':
        '了解公司的简介、愿景、使命、价值观、法律信息、组织结构以及企业作品集。',


      'about.companyProfile':
        '公司简介',

      'about.companyName':
        'PT Cengkeh Indonesia Global',

      'about.companyDescription':
        'PT Cengkeh Indonesia Global 致力于将印度尼西亚香料的丰富价值带向世界，作为一家按照国际标准提供高品质丁香的可信赖合作伙伴。我们重视品质、可靠性和可持续发展，建立稳定的供应链体系，确保优质产品能够交付给客户。',

      'about.companyDetail':
        'PT Cengkeh Indonesia Global 已在印度尼西亚主要地区建立稳定可靠的丁香供应网络，每月供应能力超过100吨。通过与农民、认证机构以及经验丰富的物流伙伴合作，我们确保从采购到运输的每个环节都专业、安全并准时完成。',

      'about.identityTitle': '企业标识',

      'about.valueTitle': '企业价值',

'about.valueText': '通过优质服务以及对国际标准的承诺，维护质量、信任、可持续发展和长期合作关系。',

'about.identityDescription': 'PT Cengkeh Indonesia Global 的标志融合了丁香花、地球、叶子以及金绿色元素，象征着我们作为优质印尼丁香供应商的身份、可持续发展的产品理念，以及连接全球市场的贸易愿景。',

      'about.check1':
        '产品信息以清晰和系统化方式展示。',

      'about.check2':
        '法律信息根据公司管理方发布的数据展示。',

      'about.check3':
        '合作伙伴和交易敏感数据不会公开展示。',


      'about.directionLabel':
        '企业方向',

      'about.directionTitle':
        '公司愿景、使命与价值观',

      'about.directionDescription':
        '指导企业发展、建立质量、信任和商业关系的重要原则。',


      'about.visionTitle':
        '愿景',

      'about.visionText':
        '以可靠、专业和可持续的方式，将优质印度尼西亚丁香带向全球。',

      'about.missionTitle':
        '使命',

      'about.missionText':
        '以稳定可靠的质量标准，为国际市场提供高品质印度尼西亚丁香。',
      
      'nav.privacy': '隐私政策',

      'shipping.eyebrow': '物流选择',
      'shipping.options': '运输选项',
'shipping.title': '运输服务选择',
'shipping.description': '产品可根据目的地、商品类型以及交易协议，通过不同的运输服务商进行配送。',
'shipping.options': '运输选项',
'shipping.available': '可用的运输服务',
'shipping.availableDescription': '运输服务根据目的地、产品类型、物流需求以及与客户的交易协议进行选择。',
'footer.description': '一家印度尼西亚丁香商品公司，致力于建立面向国内和全球市场的合作伙伴关系。',
'footer.navigation': '导航',
'footer.information': '信息',
'footer.contact': '联系方式',

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
      'common.contactEmail': '通过邮件联系',

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
        '留言已保存在此浏览器中。',

      'whatsapp.productMessage':
  '您好，PT Cengkeh Indonesia Global，我想咨询产品 {product}。{url}',
'whatsapp.generalMessage':
  '您好，PT Cengkeh Indonesia Global，我想了解更多信息。'
    },

    ar: {
       'language.label':
    'اختر اللغة',

  'nav.home':
    'الرئيسية',

  'nav.about':
    'من نحن',

  'nav.products':
    'المنتجات',

  'nav.articles':
    'المقالات',

  'nav.suppliers':
    'شبكة الموردين',

  'nav.shipping':
    'الشحن',

  'nav.contact':
    'اتصل بنا',

'about.title': '...',
'about.vision': '...',
'about.mission': '...',

        'about.heroLabel':
    'ملف الشركة',

  'about.heroTitle':
    'عن PT Cengkeh Indonesia Global',

  'about.heroDescription':
    'تعرف على ملف الشركة والرؤية والرسالة والقيم والمعلومات القانونية والهيكل التنظيمي ومحفظة الأعمال الخاصة بـ PT Cengkeh Indonesia Global.',


  'about.companyProfile':
    'ملف الشركة',

  'about.companyName':
    'PT Cengkeh Indonesia Global',

  'about.companyDescription':
    'من خلال نقل نكهة وثروة التوابل الإندونيسية إلى العالم، تقدم PT Cengkeh Indonesia Global نفسها كشريك موثوق في توفير القرنفل عالي الجودة وفق المعايير الدولية. نحن نركز على الجودة والدقة والاستدامة من خلال بناء سلسلة توريد قوية لضمان وصول أفضل المنتجات إلى العملاء.',


  'about.companyDetail':
    'قامت PT Cengkeh Indonesia Global ببناء شبكة توريد قوية وموثوقة للقرنفل في المناطق الرئيسية بإندونيسيا، بطاقة توريد تتجاوز 100 طن شهريًا. ومن خلال التعاون الاستراتيجي مع المزارعين ومزودي الشهادات وشركاء الخدمات اللوجستية ذوي الخبرة، نضمن تنفيذ كل مرحلة من مراحل الشراء حتى الشحن بطريقة احترافية وآمنة وفي الوقت المحدد.',

      'about.identityTitle': 'الهوية المؤسسية',

      'about.valueTitle': 'قيم الشركة',

'about.valueText': 'الحفاظ على الجودة والثقة والاستدامة والعلاقات طويلة الأمد من خلال أفضل الخدمات والالتزام بالمعايير الدولية.',

'about.identityDescription': 'يجمع شعار PT Cengkeh Indonesia Global بين عناصر زهرة القرنفل، والكرة الأرضية، والأوراق، والألوان الذهبية والخضراء التي تعكس هويتنا كمورد موثوق للقرنفل الإندونيسي عالي الجودة، ومنتجات مستدامة، ورؤية للتجارة والاتصال بالأسواق العالمية.',
      
  'about.check1':
    'يتم تقديم معلومات المنتجات بشكل واضح ومنظم.',

  'about.check2':
    'يتم عرض المعلومات القانونية بناءً على البيانات المنشورة من قبل إدارة الشركة.',

  'about.check3':
    'لا يتم عرض بيانات الشركاء والمعاملات الحساسة للعامة.',


  'about.directionLabel':
    'اتجاه الشركة',

  'about.directionTitle':
    'رؤية ورسالة وقيم الشركة',

  'about.directionDescription':
    'المبادئ التي توجه تطوير الشركة في بناء الجودة والثقة والعلاقات التجارية.',


  'about.visionTitle':
    'الرؤية',

  'about.visionText':
    'تقديم أفضل قرنفل إندونيسي إلى العالم من خلال الموثوقية والاحترافية والاستدامة.',


  'about.missionTitle':
    'الرسالة',

  'about.missionText':
    'توفير القرنفل الإندونيسي عالي الجودة للسوق العالمي بمعايير جودة موثوقة ومتسقة.',


  'about.managementLabel':
    'إدارة الشركة',

  'about.structureTitle':
    'الهيكل التنظيمي',

  'about.structureDescription':
    'يتم عرض هيكل الإدارة والتنظيم بناءً على البيانات الرسمية التي تتم إدارتها من خلال النظام الإداري.',


  'about.legalityLabel':
    'القانونية',

  'about.legalityTitle':
    'القانونية والجهات المصدرة',

  'about.legalityDescription':
    'يتم عرض معلومات قانونية الشركة بناءً على البيانات التي تتم إدارتها من خلال النظام الإداري.',


  'about.portfolioLabel':
    'محفظة الأعمال',

  'about.portfolioTitle':
    'محفظة أعمال الشركة',

  'about.portfolioDescription':
    'سيتم عرض توثيق أنشطة وإنجازات الشركة بناءً على البيانات التي تتم إدارتها من خلال النظام الإداري.',
      
      'nav.privacy': 'سياسة الخصوصية',

      'shipping.eyebrow': 'خيارات الخدمات اللوجستية',
      'shipping.options': 'خيارات الشحن',
'shipping.title': 'خيارات خدمات الشحن',
'shipping.description': 'يمكن إرسال المنتجات من خلال مختلف مزودي خدمات الشحن وفقًا للوجهة ونوع المنتج واتفاقية المعاملة.',
'shipping.options': 'خيارات الشحن',
'shipping.available': 'خدمات الشحن المتاحة',
'shipping.availableDescription': 'يتم اختيار خدمات الشحن بناءً على الوجهة ونوع المنتج واحتياجات الخدمات اللوجستية واتفاقيات المعاملات مع العملاء.',
'footer.description': 'شركة إندونيسية للسلع الأساسية من القرنفل تبني شراكات للأسواق المحلية والعالمية.',
'footer.navigation': 'التنقل',
'footer.information': 'المعلومات',
'footer.contact': 'اتصال',

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
      'common.contactEmail': 'تواصل عبر البريد الإلكتروني',

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
        'تم حفظ الرسالة في هذا المتصفح.',

      'whatsapp.productMessage':
  'مرحبًا PT Cengkeh Indonesia Global، أود الاستفسار عن المنتج {product}. {url}',
'whatsapp.generalMessage':
  'مرحبًا PT Cengkeh Indonesia Global، أود الحصول على مزيد من المعلومات.'
    }
  };

    const homepageTranslations = {
    id: {
      
      'brand.tagline': 'Dari Indonesia untuk pasar global',

      'home.heroEyebrow': 'Komoditas Rempah Indonesia · Kemitraan Global',
      'home.heroTitleOne': 'Eksportir Cengkeh Premium',
      'home.heroTitleTwo': '& Supplier B2B Indonesia',
      'home.heroDescription': 'PT Cengkeh Indonesia Global memasok cengkeh kering kelas atas, Lal Pari, dan AB6 langsung dari perkebunan terbaik Indonesia untuk pembeli B2B global.',

      'home.statProfileTitle': 'Profil Korporat',
      'home.statProfileText': 'Informasi perusahaan terstruktur',
      'home.statCatalogTitle': 'Katalog Dinamis',
      'home.statCatalogText': 'Produk dan spesifikasi terkelola',
      'home.statSupplierTitle': 'Supplier Map',
      'home.statSupplierText': 'Lokasi perkiraan yang menjaga privasi',

      'home.valueEyebrow': 'Nilai Utama',
      'home.valueTitle': 'Mengapa Memilih PT Cengkeh Indonesia Global',
      'home.valueDescription': 'Kami memberikan kepastian pasokan rempah, spesifikasi produk yang transparan, dan komunikasi B2B internasional secara profesional.',

     'home.featureOneTitle': 'Kualitas Standar Ekspor',
      'home.featureOneText': 'Spesifikasi produk detail mencakup kadar air, benda asing, dan rasio tangkai untuk pembeli global.',

      'home.featureTwoTitle': 'Jaringan Perkebunan Terpercaya',
      'home.featureTwoText': 'Pasokan langsung dari perkebunan utama di Maluku, Sulawesi, dan Jawa untuk menjamin volume pasokan yang stabil.',

      'home.featureThreeTitle': 'Pengiriman Global Cepat',
      'home.featureThreeText': 'Dukungan penuh dokumen ekspor (Phytosanitary, COO, B/L) dan skema pengiriman (FOB & CIF).',

      'home.catalogEyebrow': 'Katalog Produk',
      'home.catalogTitle': 'Produk Cengkeh Pilihan Ekspor',
      'home.catalogDescription': 'Produk cengkeh kering pilihan yang siap dikirim dalam jumlah besar untuk kebutuhan industri global.',
      'home.allProducts': 'Lihat semua produk →',

      'home.portfolioEyebrow': 'Portofolio',
      'home.portfolioTitle': 'Portofolio & Pengiriman Perusahaan',

      'home.articleEyebrow': 'Artikel',
      'home.articleTitle': 'Informasi Industri & Edukasi Pasar',
      'home.articleDescription': 'Wawasan mendalam mengenai tingkatan mutu cengkeh, spesifikasi ekspor, dan pembaruan perdagangan rempah global.',
      'home.allArticles': 'Semua artikel →',

      'home.ctaEyebrow': 'Mulai Percakapan',
      'home.ctaTitle': 'Diskusikan Kebutuhan Produk dan Kemitraan',
      'home.ctaDescription': 'Hubungi tim PT Cengkeh Indonesia Global untuk mendapatkan sampel produk, harga FOB/CIF terbaru, dan syarat pengiriman.',

     'footer.description': 'Perusahaan komoditas cengkeh Indonesia yang membangun kemitraan untuk pasar nasional dan global.',
      'footer.navigation': 'Navigasi',
      'footer.information': 'Informasi',
      'footer.contactDemo': 'Kontak Tim',
      'footer.supplier': 'Supplier',
      'footer.privacy': 'Kebijakan Privasi',
      'footer.cms': 'Sistem CMS',
      'footer.notFound': 'Halaman 404',
      'footer.rights': 'Seluruh hak cipta dilindungi.',
      'footer.version': 'PT Cengkeh Indonesia Global'
    },

    en: {
      'brand.tagline': 'From Indonesia to the global market',

      'home.heroEyebrow': 'Indonesian Spice Commodity · Global Partner',
      'home.heroTitleOne': 'Premium Indonesian Clove Exporter',
      'home.heroTitleTwo': '& B2B Supplier',
      'home.heroDescription': 'PT Cengkeh Indonesia Global supplies high-grade Lal Pari, AB6, and dried cloves directly from Indonesia\'s top plantations for global B2B buyers.',

      'home.statProfileTitle': 'Corporate Profile',
      'home.statProfileText': 'Structured company information',
      'home.statCatalogTitle': 'Dynamic Catalogue',
      'home.statCatalogText': 'Managed products and specifications',
      'home.statSupplierTitle': 'Supplier Map',
      'home.statSupplierText': 'Approximate locations that protect privacy',

      'home.valueEyebrow': 'Core Values',
      'home.valueTitle': 'Why Choose PT Cengkeh Indonesia Global',
      'home.valueDescription': 'We deliver reliable spice supply, transparent product specifications, and professional international B2B communication.',

      'home.featureOneTitle': 'Export-Grade Quality',
      'home.featureOneText': 'Detailed product specifications covering moisture level, foreign matter, and stem ratio for global buyers.',

      'home.featureTwoTitle': 'Trusted Plantation Network',
      'home.featureTwoText': 'Direct sourcing from top plantations in Maluku, Sulawesi, and Java to ensure steady supply volume.',

      'home.featureThreeTitle': 'Fast Global Shipping',
      'home.featureThreeText': 'Full support for export documents (Phytosanitary, COO, B/L) and shipping terms (FOB & CIF).',

      'home.catalogEyebrow': 'Product Catalogue',
      'home.catalogTitle': 'Featured Export Cloves',
      'home.catalogDescription': 'Premium Indonesian dried cloves, Lal Pari, AB6, and clove stems ready for bulk shipment.',
      'home.allProducts': 'View all products →',

      'home.portfolioEyebrow': 'Export Track Record',
      'home.portfolioTitle': 'Company Portfolios & Shipments',

      'home.articleEyebrow': 'Trade Insights',
      'home.articleTitle': 'Industry Articles & Market Education',
      'home.articleDescription': 'In-depth insights on clove grading, export specifications, and global spice trade updates.',
      'home.allArticles': 'All articles →',

      'home.ctaEyebrow': 'Start a Conversation',
      'home.ctaTitle': 'Discuss Your Bulk Clove Requirements',
      'home.ctaDescription': 'Get in touch with PT Cengkeh Indonesia Global for product samples, updated FOB/CIF pricing, and customized shipping terms.',

      'footer.description': 'An Indonesian clove commodity company building partnerships for national and global markets.',
      'footer.navigation': 'Navigation',
      'footer.information': 'Information',
      'footer.contactDemo': 'Export Team',
      'footer.supplier': 'Suppliers',
      'footer.privacy': 'Privacy Policy',
      'footer.cms': 'CMS Portal',
      'footer.notFound': '404 Page',
      'footer.rights': 'All rights reserved.',
      'footer.version': 'PT Cengkeh Indonesia Global'
    },

    hi: {
      
     'brand.tagline': 'इंडोनेशिया से वैश्विक बाज़ार के लिए',
      'home.heroEyebrow': 'इंडोनेशियाई कमोडिटी · वैश्विक साझेदारी',
      'home.heroTitleOne': 'प्रीमियम इंडोनेशियाई लौंग निर्यातक',
      'home.heroTitleTwo': 'और B2B आपूर्तिकर्ता',
      'home.heroDescription': 'PT Cengkeh Indonesia Global वैश्विक B2B खरीदारों के लिए उच्च गुणवत्ता वाले लाल परी, AB6 और सूखी लौंग की आपूर्ति करता है।',
      'home.statProfileTitle': 'कॉर्पोरेट प्रोफ़ाइल',
      'home.statProfileText': 'व्यवस्थित कंपनी जानकारी',
      'home.statCatalogTitle': 'उत्पाद सूची',
      'home.statCatalogText': 'प्रबंधित उत्पाद और विवरण',
      'home.statSupplierTitle': 'आपूर्तिकर्ता मानचित्र',
      'home.statSupplierText': 'गोपनीयता सुरक्षित स्थान',
      'home.valueEyebrow': 'मुख्य मूल्य',
      'home.valueTitle': 'PT Cengkeh Indonesia Global क्यों चुनें',
      'home.valueDescription': 'हम विश्वसनीय मसाला आपूर्ति और पारदर्शी उत्पाद विनिर्देश प्रदान करते हैं।',
      'home.featureOneTitle': 'निर्यात-ग्रेड गुणवत्ता',
      'home.featureOneText': 'वैश्विक खरीदारों के लिए विस्तृत उत्पाद विनिर्देश।',
      'home.featureTwoTitle': 'विश्वसनीय नेटवर्क',
      'home.featureTwoText': 'स्थिर आपूर्ति सुनिश्चित करने के लिए प्रत्यक्ष स्रोत।',
      'home.featureThreeTitle': 'तेज़ शिपिंग',
      'home.featureThreeText': 'निर्यात दस्तावेजों का पूर्ण समर्थन।',
      'home.catalogEyebrow': 'उत्पाद सूची',
      'home.catalogTitle': 'विशेष रुप से प्रदर्शित लौंग',
      'home.catalogDescription': 'थोक शिपमेंट के लिए तैयार प्रीमियम इंडोनेशियाई लौंग।',
      'home.allProducts': 'सभी उत्पाद देखें →',
      'home.portfolioEyebrow': 'निर्यात रिकॉर्ड',
      'home.portfolioTitle': 'कंपनी पोर्टफोलियो और शिपमेंट',
      'home.articleEyebrow': 'व्यापार अंतर्दृष्टि',
      'home.articleTitle': 'उद्योग लेख और शिक्षा',
      'home.articleDescription': 'लौंग ग्रेडिंग और निर्यात विनिर्देशों पर अंतर्दृष्टि।',
      'home.allArticles': 'सभी लेख →',
      'home.ctaEyebrow': 'बातचीत शुरू करें',
      'home.ctaTitle': 'अपनी लौंग की आवश्यकताओं पर चर्चा करें',
      'home.ctaDescription': 'उत्पाद नमूनों और कीमतों के लिए संपर्क करें।',
      'footer.description': 'एक इंडोनेशियाई लौंग कमोडिटी कंपनी।',
      'footer.navigation': 'नेविगेशन',
      'footer.information': 'जानकारी',
      'footer.contactDemo': 'संपर्क',
      'footer.supplier': 'आपूर्तिकर्ता',
      'footer.privacy': 'गोपनीयता नीति',
      'footer.cms': 'CMS',
      'footer.notFound': '404 पृष्ठ',
      'footer.rights': 'सर्वाधिकार सुरक्षित।',
      'footer.version': 'PT Cengkeh Indonesia Global'
    },

    zh: {
     'brand.tagline': '从印度尼西亚走向全球市场',
      'home.heroEyebrow': '印度尼西亚香料 · 全球合作伙伴',
      'home.heroTitleOne': '优质印尼丁香出口商',
      'home.heroTitleTwo': '& B2B 供应商',
      'home.heroDescription': 'PT Cengkeh Indonesia Global 直接从印尼优质种植园为全球 B2B 买家提供高品质的 Lal Pari、AB6 和干丁香。',
      'home.statProfileTitle': '公司简介',
      'home.statProfileText': '结构化的公司信息',
      'home.statCatalogTitle': '动态产品目录',
      'home.statCatalogText': '可管理的产品和规格',
      'home.statSupplierTitle': '供应商地图',
      'home.statSupplierText': '保护隐私的大致位置',
      'home.valueEyebrow': '核心价值',
      'home.valueTitle': '为什么选择 PT Cengkeh Indonesia Global',
      'home.valueDescription': '我们提供可靠的香料供应、透明的产品规格和专业的国际 B2B 沟通。',
      'home.featureOneTitle': '出口级品质',
      'home.featureOneText': '涵盖水分含量、杂质和花梗比例的详细规格。',
      'home.featureTwoTitle': '值得信赖的种植园网络',
      'home.featureTwoText': '从主要种植园直接采购，确保稳定的供应量。',
      'home.featureThreeTitle': '快速全球运输',
      'home.featureThreeText': '全面支持出口文件（植物检疫、原产地证、提单）及 FOB/CIF 条款。',
      'home.catalogEyebrow': '产品目录',
      'home.catalogTitle': '精选出口丁香',
      'home.catalogDescription': '优质印尼干丁香、Lal Pari、AB6 和丁香梗，随时可大批量发货。',
      'home.allProducts': '查看所有产品 →',
      'home.portfolioEyebrow': '出口业绩',
      'home.portfolioTitle': '公司业绩与运输记录',
      'home.articleEyebrow': '行业洞察',
      'home.articleTitle': '行业文章与市场教育',
      'home.articleDescription': '深入了解丁香分级、出口规格和全球香料贸易动态。',
      'home.allArticles': '所有文章 →',
      'home.ctaEyebrow': '开始对话',
      'home.ctaTitle': '讨论您的批量丁香需求',
      'home.ctaDescription': '联系我们获取产品样品、最新 FOB/CIF 报价及定制运输条款。',
      'footer.description': '一家印度尼西亚丁香商品公司。',
      'footer.navigation': '导航',
      'footer.information': '信息',
      'footer.contactDemo': '联系方式',
      'footer.supplier': '供应商',
      'footer.privacy': '隐私政策',
      'footer.cms': 'CMS',
      'footer.notFound': '404 页',
      'footer.rights': '保留所有权利。',
      'footer.version': 'PT Cengkeh Indonesia Global'
    },

    ar: {
      
     'brand.tagline': 'من إندونيسيا إلى السوق العالمية',
      'home.heroEyebrow': 'توابل إندونيسية · شريك عالمي',
      'home.heroTitleOne': 'مصدر قرنفل إندونيسي ممتاز',
      'home.heroTitleTwo': 'ومورد B2B',
      'home.heroDescription': 'تقدم PT Cengkeh Indonesia Global قرنفل جاف عالي الجودة من طراز Lal Pari و AB6 مباشرة من إندونيسيا.',
      'home.statProfileTitle': 'الملف المؤسسي',
      'home.statProfileText': 'نظرة عامة عن الشركة',
      'home.statCatalogTitle': 'كتالوج ديناميكي',
      'home.statCatalogText': 'منتجات ومواصفات مُدارة',
      'home.statSupplierTitle': 'خريطة الموردين',
      'home.statSupplierText': 'مواقع محمية الخصوصية',
      'home.valueEyebrow': 'قيمنا الأساسية',
      'home.valueTitle': 'لماذا تختار PT Cengkeh Indonesia Global',
      'home.valueDescription': 'نقدم إمدادات توابل موثوقة ومواصفات شفافة وتواصل تجاري محترف.',
      'home.featureOneTitle': 'جودة مخصصة للتصدير',
      'home.featureOneText': 'مواصفات تفصيلية تشمل نسبة الرطوبة والمواد الغريبة.',
      'home.featureTwoTitle': 'شبكة مزارع موثوقة',
      'home.featureTwoText': 'توريد مباشر لضمان حجم إمدادات ثابت.',
      'home.featureThreeTitle': 'شحن عالمي سريع',
      'home.featureThreeText': 'دعم كامل لوثائق التصدير وشروط الشحن (FOB & CIF).',
      'home.catalogEyebrow': 'كتالوج المنتجات',
      'home.catalogTitle': 'قرنفل للتصدير',
      'home.catalogDescription': 'قرنفل إندونيسي ممتاز جاهز للشحن بكميات كبيرة.',
      'home.allProducts': 'عرض جميع المنتجات ←',
      'home.portfolioEyebrow': 'سجل التصدير',
      'home.portfolioTitle': 'معرض الأعمال والشحنات',
      'home.articleEyebrow': 'رؤى تجارية',
      'home.articleTitle': 'مقالات الصناعة والتثقيف',
      'home.articleDescription': 'رؤى عميقة حول تصنيف القرنفل ومواصفات التصدير.',
      'home.allArticles': 'جميع المقالات ←',
      'home.ctaEyebrow': 'ابدأ المحادثة',
      'home.ctaTitle': 'ناقش متطلبات القرنفل بالجملة',
      'home.ctaDescription': 'تواصل معنا للحصول على عينات وأسعار FOB/CIF تحديثة.',
      'footer.description': 'شركة إندونيسية للسلع الأساسية من القرنفل.',
      'footer.navigation': 'التنقل',
      'footer.information': 'المعلومات',
      'footer.contactDemo': 'اتصال',
      'footer.supplier': 'الموردين',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.cms': 'CMS',
      'footer.notFound': 'صفحة 404',
      'footer.rights': 'جميع الحقوق محفوظة.',
      'footer.version': 'PT Cengkeh Indonesia Global'
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

      'about.portfolioDescription':
      'Dokumentasi kegiatan dan pencapaian perusahaan akan ditampilkan berdasarkan data yang dikelola melalui sistem administrasi.',

      'about.portfolioTitle':
      'Portofolio Perusahaan',

      'about.portfolioLabel':
      'Portofolio',

      'about.legalTitle':
      'Legalitas dan lembaga penerbit',

      'about.legalLabel': 'Legalitas Perusahaan',

      'about.legalDescription': 'Legalitas dan perizinan perusahaan terdaftar pada instansi pemerintah yang berwenang sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.',

      'about.structureTitle': 'Struktur Organisasi',

      'about.managementLabel':
      'Manajemen Perusahaan',

      'about.directionDescription':
      'Prinsip yang menjadi arah pengembangan perusahaan dalam membangun kualitas, kepercayaan, dan hubungan bisnis.',

      'about.directionTitle':
      'Visi, misi, dan nilai perusahaan',

      'about.directionLabel':
      'Arah Perusahaan',

      'about.check3':
      'Data mitra dan transaksi yang bersifat sensitif tidak ditampilkan secara publik.',

      'about.check2':
      'Informasi legalitas ditampilkan berdasarkan data yang dipublikasikan oleh pengelola perusahaan.',

      'about.check1':
      'Informasi produk disajikan secara jelas dan terstruktur.',

      'about.companyDetail':
      'PT. Cengkeh Indonesia Global telah membangun jaringan pasokan cengkeh yang kuat dan andal di berbagai wilayah utama Indonesia, dengan kapasitas pasokan lebih dari 100 ton per bulan. Didukung oleh kemitraan strategis dengan para petani, penyedia sertifikasi dan kepatuhan profesional, serta mitra logistik yang berpengalaman, kami memastikan setiap tahapan dari pengadaan hingga pengiriman dilakukan secara profesional, aman, dan tepat waktu.',

      'about.companyDescription':
      'Membawa cita rasa dan kekayaan rempah Indonesia ke dunia, PT Cengkeh Indonesia Global hadir sebagai mitra terpercaya dalam menyediakan cengkeh berkualitas dengan standar internasional. Dengan mengutamakan kualitas, ketepatan, dan keberlanjutan, kami membangun rantai pasok yang kuat untuk memastikan setiap produk terbaik sampai ke tangan pelanggan.',

      'about.companyName':
      'PT Cengkeh Indonesia Global',

      'about.identityTitle': 'Identitas Korporat',

      'about.valueTitle': 'Nilai Perusahaan',

'about.valueText': 'Menjaga kualitas, kepercayaan, keberlanjutan, dan hubungan jangka panjang melalui pelayanan terbaik serta komitmen terhadap standar internasional.',

'about.identityDescription': 'Logo PT Cengkeh Indonesia Global menggabungkan elemen bunga cengkeh, globe, daun, dan warna emas-hijau yang melambangkan identitas sebagai pemasok cengkeh Indonesia berkualitas, produk alami berkelanjutan, serta visi perdagangan dan koneksi pasar global.',

      'about.companyProfile':
      'Profil Perusahaan',

      'about.heroDescription':
      'Mengenal lebih dekat profil perusahaan, visi, misi, nilai, legalitas, struktur organisasi, serta portofolio PT Cengkeh Indonesia Global.',

      'about.heroTitle':
      'Tentang PT Cengkeh Indonesia Global',

      'about.heroLabel': 
      'Profil Perusahaan',

      'about.companyDescription':
  'Membawa cita rasa dan kekayaan rempah Indonesia ke dunia, PT Cengkeh Indonesia Global hadir sebagai mitra terpercaya dalam menyediakan cengkeh berkualitas dengan standar internasional. Dengan mengutamakan kualitas, ketepatan, dan keberlanjutan, kami membangun rantai pasok yang kuat untuk memastikan setiap produk terbaik sampai ke tangan pelanggan.',

      'about.visionTitle': 'Visi',
'about.visionText':
'Menghadirkan Cengkeh Terbaik Indonesia ke Dunia dengan Keandalan, Profesionalisme, dan Keberlanjutan.',

'about.missionTitle': 'Misi',
'about.missionText':
'Menghadirkan cengkeh Indonesia berkualitas tinggi ke pasar internasional dengan standar kualitas yang andal dan konsisten.',

'about.valuesTitle': 'Nilai',
'about.valuesText':
'Integritas, kualitas informasi, kemitraan, kehati-hatian, dan perbaikan berkelanjutan.',
      
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

      'about.portfolioDescription':
      'Company activities and achievements will be displayed based on data managed through the administration system.',

      'about.portfolioTitle':
      'Company Portfolio',

      'about.portfolioLabel':
      'Portfolio',

      'about.legalTitle':
      'Legality and Issuing Institutions',

      'about.legalLabel':
      'Company Legality',

      'about.structureTitle':
      'Organizational Structure',

      'about.managementLabel':
      'Company Management',

      'about.directionDescription':
      'Principles that guide company development in building quality, trust, and business relationships.',

      'about.directionTitle':
      'Company Vision, Mission, and Values',

      'about.directionLabel':
      'Company Direction',

      'about.check3':
      'Sensitive partner and transaction data are not publicly displayed.',

      'about.check2':
      'Legal information is displayed based on data published by company management.',

      'about.check1':
      'Product information is presented clearly and systematically.',

      'about.companyDetail':
      'PT. Cengkeh Indonesia Global has established a strong and reliable clove supply network across major regions of Indonesia, with a supply capacity of more than 100 tons per month. Supported by strategic partnerships with farmers, professional certification providers, and experienced logistics partners, we ensure every stage from procurement to delivery is carried out professionally, safely, and on time.',

      'about.companyDescription':
      'Bringing the taste and richness of Indonesian spices to the world, PT Cengkeh Indonesia Global is a trusted partner providing quality cloves with international standards. By prioritizing quality, reliability, and sustainability, we build a strong supply chain to ensure the best products reach our customers.',

      'about.companyName':
      'PT Cengkeh Indonesia Global',

      'about.identityTitle': 'Corporate Identity',

      'about.valueTitle': 'Company Values',

'about.valueText': 'Maintaining quality, trust, sustainability, and long-term relationships through excellent service and commitment to international standards.',

'about.identityDescription': 'The logo of PT Cengkeh Indonesia Global combines clove flowers, globe, leaves, and gold-green colors that represent our identity as a trusted Indonesian clove supplier with sustainable products and global market connections.',

      'about.companyProfile':
      'Company Profile',

      'about.heroDescription':
      'Learn more about the company profile, vision, mission, values, legality, organizational structure, and portfolio of PT Cengkeh Indonesia Global.',

      'about.heroTitle':
      'About PT Cengkeh Indonesia Global',

      'about.heroLabel':
      'Corporate Profile',

      'about.companyDescription':
  'Bringing the taste and richness of Indonesian spices to the world, PT Cengkeh Indonesia Global is a trusted partner providing quality cloves with international standards. By prioritizing quality, reliability, and sustainability, we build a strong supply chain to ensure the best products reach our customers.',

      'about.visionTitle': 'Vision',
'about.visionText': 'Delivering the finest Indonesian cloves to the world with reliability, professionalism, and sustainability.',

'about.missionTitle': 'Mission',
'about.missionText': 'Providing high-quality Indonesian cloves to international markets with reliable and consistent quality standards.',

'about.valuesTitle': 'Values',
'about.valuesText': 'Integrity, information quality, partnership, prudence, and continuous improvement.',
      
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

      'about.portfolioDescription':
      'कंपनी की गतिविधियों और उपलब्धियों को प्रशासनिक प्रणाली के माध्यम से प्रबंधित डेटा के आधार पर प्रदर्शित किया जाएगा।',

      'about.portfolioTitle':
      'कंपनी पोर्टफोलियो',

      'about.portfolioLabel':
      'पोर्टफोलियो',

      'about.legalTitle':
      'कानूनी जानकारी और जारी करने वाली संस्थाएं',

      'about.legalLabel':
      'कंपनी की कानूनी जानकारी',

      'about.structureTitle':
      'संगठनात्मक संरचना',

      'about.managementLabel':
      'कंपनी प्रबंधन',

      'about.directionDescription':
      'गुणवत्ता, विश्वास और व्यावसायिक संबंधों के निर्माण में कंपनी के विकास का मार्गदर्शन करने वाले सिद्धांत।',

      'about.directionTitle':
      'कंपनी की दृष्टि, मिशन और मूल्य',

      'about.directionLabel':
      'कंपनी की दिशा',

      'about.check3':
      'संवेदनशील साझेदार और लेनदेन डेटा सार्वजनिक रूप से प्रदर्शित नहीं किया जाता।',

      'about.check2':
      'कानूनी जानकारी कंपनी प्रबंधन द्वारा प्रकाशित आंकड़ों के आधार पर प्रदर्शित की जाती है।',

      'about.check1':
      'उत्पाद जानकारी स्पष्ट और व्यवस्थित रूप से प्रस्तुत की जाती है।',

      'about.companyDetail':
      'PT. Cengkeh Indonesia Global ने इंडोनेशिया के प्रमुख क्षेत्रों में एक मजबूत और विश्वसनीय लौंग आपूर्ति नेटवर्क बनाया है, जिसकी क्षमता प्रति माह 100 टन से अधिक है। किसानों, प्रमाणन प्रदाताओं और अनुभवी लॉजिस्टिक भागीदारों के साथ रणनीतिक साझेदारी के माध्यम से हम खरीद से लेकर वितरण तक हर चरण को सुरक्षित और समय पर पूरा करते हैं।',

      'about.companyDescription':
      'इंडोनेशियाई मसालों के स्वाद और समृद्धि को दुनिया तक पहुंचाते हुए, PT Cengkeh Indonesia Global अंतरराष्ट्रीय मानकों के साथ उच्च गुणवत्ता वाली लौंग उपलब्ध कराने वाला एक विश्वसनीय भागीदार है। गुणवत्ता, विश्वसनीयता और स्थिरता को प्राथमिकता देते हुए हम एक मजबूत आपूर्ति श्रृंखला का निर्माण करते हैं।',

      'about.companyName':
      'PT Cengkeh Indonesia Global',

      'about.companyProfile':
      'कंपनी प्रोफ़ाइल',

      'about.heroDescription':
      'PT Cengkeh Indonesia Global की कंपनी प्रोफ़ाइल, दृष्टि, मिशन, मूल्य, कानूनी जानकारी, संगठनात्मक संरचना और पोर्टफोलियो के बारे में अधिक जानें।',

      'about.heroTitle':
      'PT Cengkeh Indonesia Global के बारे में',

      'about.heroLabel':
      'कंपनी प्रोफ़ाइल',

      'about.companyDescription':
  'इंडोनेशियाई मसालों की समृद्धि और स्वाद को दुनिया तक पहुँचाते हुए, PT Cengkeh Indonesia Global अंतरराष्ट्रीय मानकों के साथ उच्च गुणवत्ता वाली लौंग उपलब्ध कराने वाला विश्वसनीय भागीदार है।',

      'about.visionTitle': 'दृष्टि',
'about.visionText': 'विश्व बाजार में विश्वसनीयता, व्यावसायिकता और स्थिरता के साथ सर्वोत्तम इंडोनेशियाई लौंग प्रस्तुत करना।',

'about.missionTitle': 'मिशन',
'about.missionText': 'विश्वसनीय और निरंतर गुणवत्ता मानकों के साथ अंतरराष्ट्रीय बाजार में उच्च गुणवत्ता वाली इंडोनेशियाई लौंग उपलब्ध कराना।',

'about.valuesTitle': 'मूल्य',
'about.valuesText': 'ईमानदारी, सूचना की गुणवत्ता, साझेदारी, सावधानी और निरंतर सुधार।',
      
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

      'about.portfolioDescription':
      '公司活动和成就将根据管理系统中的数据进行展示。',

      'about.portfolioTitle':
      '公司作品集',

      'about.portfolioLabel':
      '企业作品集',

      'about.legalTitle':
      '法律信息及发布机构',

      'about.legalLabel':
      '公司法律信息',

      'about.structureTitle':
      '组织结构',

      'about.managementLabel':
      '公司管理',

      'about.directionDescription':
      '指导公司发展并建立质量、信任和商业关系的原则。',

      'about.directionTitle':
      '公司的愿景、使命与价值观',

      'about.directionLabel':
      '公司方向',

      'about.check3':
      '敏感的合作伙伴和交易数据不会公开展示。',

      'about.check2':
      '法律信息根据公司管理方发布的数据进行展示。',

      'about.check1':
      '产品信息以清晰和系统化的方式呈现。',

      'about.companyDetail':
      'PT. Cengkeh Indonesia Global 已在印度尼西亚主要地区建立稳定可靠的丁香供应网络，每月供应能力超过100吨。通过与农户、专业认证机构以及经验丰富的物流伙伴建立战略合作，我们确保从采购到运输的每个环节都以专业、安全和准时的方式完成。',

      'about.companyDescription':
      'PT Cengkeh Indonesia Global 将印度尼西亚香料的风味与价值带向世界，作为值得信赖的合作伙伴，我们提供符合国际标准的优质丁香。我们注重质量、可靠性和可持续发展，建立强大的供应链体系，确保优质产品能够送达客户手中。',

      'about.companyName':
      'PT Cengkeh Indonesia Global',

      'about.companyProfile':
      '公司简介',

      'about.heroDescription':
      '深入了解 PT Cengkeh Indonesia Global 的公司简介、愿景、使命、价值观、法律信息、组织结构以及企业作品集。',

      'about.heroTitle':
      '关于 PT Cengkeh Indonesia Global',

      'about.heroLabel':
      '公司简介',

      'about.companyDescription':
  'PT Cengkeh Indonesia Global 将印度尼西亚香料的风味与价值带向世界，作为值得信赖的合作伙伴，提供符合国际标准的优质丁香产品。',

      'about.visionTitle': '愿景',
'about.visionText': '以可靠性、专业性和可持续发展理念，将优质印尼丁香带向全球市场。',

'about.missionTitle': '使命',
'about.missionText': '以可靠且稳定的质量标准，为国际市场提供高品质的印尼丁香产品。',

'about.valuesTitle': '价值观',
'about.valuesText': '诚信、信息质量、合作伙伴关系、谨慎管理以及持续改进。',
      
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

      'about.portfolioDescription':
      'سيتم عرض أنشطة الشركة وإنجازاتها بناءً على البيانات التي تتم إدارتها من خلال النظام الإداري.',

      'about.portfolioTitle':
      'محفظة الشركة',

      'about.portfolioLabel':
      'المحفظة',

      'about.legalTitle':
      'البيانات القانونية والجهات المصدرة',

      'about.legalLabel':
      'البيانات القانونية للشركة',

      'about.structureTitle':
      'الهيكل التنظيمي',

      'about.managementLabel':
      'إدارة الشركة',

      'about.directionDescription':
      'المبادئ التي توجه تطوير الشركة في بناء الجودة والثقة والعلاقات التجارية.',

      'about.directionTitle':
      'رؤية ورسالة وقيم الشركة',

      'about.directionLabel':
      'اتجاه الشركة',

      'about.check3':
      'لا يتم عرض بيانات الشركاء والمعاملات الحساسة بشكل علني.',

      'about.check2':
      'يتم عرض المعلومات القانونية بناءً على البيانات المنشورة من إدارة الشركة.',

      'about.check1':
      'يتم عرض معلومات المنتجات بشكل واضح ومنظم.',

      'about.companyDetail':
      'قامت PT. Cengkeh Indonesia Global ببناء شبكة توريد قوية وموثوقة للقرنفل في مختلف المناطق الرئيسية بإندونيسيا، بطاقة توريد تتجاوز 100 طن شهريًا. ومن خلال الشراكات الاستراتيجية مع المزارعين وجهات الاعتماد وشركاء الخدمات اللوجستية ذوي الخبرة، نضمن تنفيذ كل مرحلة من التوريد حتى الشحن بشكل احترافي وآمن وفي الوقت المحدد.',

      'about.companyDescription':
      'تنقل PT Cengkeh Indonesia Global نكهة وثروة التوابل الإندونيسية إلى العالم، حيث تعمل كشريك موثوق في توفير القرنفل عالي الجودة وفق المعايير الدولية. ومن خلال التركيز على الجودة والموثوقية والاستدامة، نبني سلسلة توريد قوية لضمان وصول أفضل المنتجات إلى العملاء.',

      'about.companyName':
      'PT Cengkeh Indonesia Global',

      'about.companyProfile':
      'ملف الشركة',

      'about.heroDescription':
      'تعرف بشكل أعمق على ملف الشركة، والرؤية، والرسالة، والقيم، والجوانب القانونية، والهيكل التنظيمي، ومحفظة PT Cengkeh Indonesia Global.',

      'about.heroTitle':
      'حول PT Cengkeh Indonesia Global',

      'about.heroLabel':
      'الملف التعريفي للشركة',
      
      'about.companyDescription':
  'تنقل PT Cengkeh Indonesia Global نكهة وثروة التوابل الإندونيسية إلى العالم، باعتبارها شريكًا موثوقًا في توفير القرنفل عالي الجودة وفق المعايير الدولية.',

      'about.visionTitle': 'الرؤية',
'about.visionText': 'تقديم أفضل أنواع القرنفل الإندونيسي إلى العالم من خلال الموثوقية والاحترافية والاستدامة.',

'about.missionTitle': 'الرسالة',
'about.missionText': 'توفير القرنفل الإندونيسي عالي الجودة للأسواق الدولية وفق معايير جودة موثوقة ومتسقة.',

'about.valuesTitle': 'القيم',
'about.valuesText': 'النزاهة، جودة المعلومات، الشراكة، الحذر، والتحسين المستمر.',
      
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


    const supplierPageTranslations = {
    id: {
      'supplier.mapLabel': 'Peta Jaringan',
      'supplier.pageTitle': 'Wilayah Jaringan Supplier',
      'supplier.pageDescription':
        'Peta menggunakan titik perkiraan tingkat wilayah untuk mendemonstrasikan privasi supplier sesuai SRS.',
      'supplier.regionFilter': 'Filter wilayah',
      'supplier.allRegions': 'Semua wilayah',
      'supplier.noRegion': 'Tidak ada wilayah',
      'supplier.mapUnavailable': 'Peta tidak tersedia',
      'supplier.mapFallback':
        'Daftar wilayah tetap dapat dilihat di sebelah peta.',
      'supplier.noScript':
        'JavaScript diperlukan untuk peta interaktif. Daftar wilayah: Sulawesi, Maluku, dan Jawa.',
      'supplier.sulawesi': 'Sulawesi',
      'supplier.maluku': 'Maluku',
      'supplier.java': 'Jawa',
      'supplier.sulawesiNetwork': 'Jaringan Mitra Sulawesi',
      'supplier.malukuNetwork': 'Jaringan Mitra Maluku',
      'supplier.javaNetwork': 'Jaringan Mitra Jawa',
      'supplier.demoLocation':
        'Lokasi perkiraan tingkat wilayah untuk keperluan demonstrasi.'
    },

    en: {
      'supplier.mapLabel': 'Network Map',
      'supplier.pageTitle': 'Supplier Network Regions',
      'supplier.pageDescription':
        'The map uses approximate regional locations to demonstrate supplier privacy in accordance with the SRS.',
      'supplier.regionFilter': 'Filter by region',
      'supplier.allRegions': 'All regions',
      'supplier.noRegion': 'No regions found',
      'supplier.mapUnavailable': 'Map unavailable',
      'supplier.mapFallback':
        'The list of regions can still be viewed beside the map.',
      'supplier.noScript':
        'JavaScript is required for the interactive map. Regions listed: Sulawesi, Maluku, and Java.',
      'supplier.sulawesi': 'Sulawesi',
      'supplier.maluku': 'Maluku',
      'supplier.java': 'Java',
      'supplier.sulawesiNetwork': 'Sulawesi Partner Network',
      'supplier.malukuNetwork': 'Maluku Partner Network',
      'supplier.javaNetwork': 'Java Partner Network',
      'supplier.demoLocation':
        'Approximate regional location for demonstration purposes.'
    },

    hi: {
      'supplier.mapLabel': 'नेटवर्क मानचित्र',
      'supplier.pageTitle': 'आपूर्तिकर्ता नेटवर्क क्षेत्र',
      'supplier.pageDescription':
        'यह मानचित्र SRS के अनुसार आपूर्तिकर्ताओं की गोपनीयता प्रदर्शित करने के लिए अनुमानित क्षेत्रीय स्थानों का उपयोग करता है।',
      'supplier.regionFilter': 'क्षेत्र के अनुसार फ़िल्टर करें',
      'supplier.allRegions': 'सभी क्षेत्र',
      'supplier.noRegion': 'कोई क्षेत्र नहीं मिला',
      'supplier.mapUnavailable': 'मानचित्र उपलब्ध नहीं है',
      'supplier.mapFallback':
        'क्षेत्रों की सूची मानचित्र के पास अभी भी देखी जा सकती है।',
      'supplier.noScript':
        'इंटरैक्टिव मानचित्र के लिए JavaScript आवश्यक है। सूचीबद्ध क्षेत्र: सुलावेसी, मालुकु और जावा।',
      'supplier.sulawesi': 'सुलावेसी',
      'supplier.maluku': 'मालुकु',
      'supplier.java': 'जावा',
      'supplier.sulawesiNetwork': 'सुलावेसी भागीदार नेटवर्क',
      'supplier.malukuNetwork': 'मालुकु भागीदार नेटवर्क',
      'supplier.javaNetwork': 'जावा भागीदार नेटवर्क',
      'supplier.demoLocation':
        'प्रदर्शन के उद्देश्य से अनुमानित क्षेत्रीय स्थान।'
    },

    zh: {
      'supplier.mapLabel': '网络地图',
      'supplier.pageTitle': '供应商网络区域',
      'supplier.pageDescription':
        '该地图使用区域级别的近似位置，以按照 SRS 演示供应商隐私保护。',
      'supplier.regionFilter': '按区域筛选',
      'supplier.allRegions': '所有区域',
      'supplier.noRegion': '未找到区域',
      'supplier.mapUnavailable': '地图不可用',
      'supplier.mapFallback':
        '仍可在地图旁查看区域列表。',
      'supplier.noScript':
        '交互式地图需要启用 JavaScript。区域包括：苏拉威西、马鲁古和爪哇。',
      'supplier.sulawesi': '苏拉威西',
      'supplier.maluku': '马鲁古',
      'supplier.java': '爪哇',
      'supplier.sulawesiNetwork': '苏拉威西合作伙伴网络',
      'supplier.malukuNetwork': '马鲁古合作伙伴网络',
      'supplier.javaNetwork': '爪哇合作伙伴网络',
      'supplier.demoLocation':
        '用于演示的区域级别近似位置。'
    },

    ar: {
      'supplier.mapLabel': 'خريطة الشبكة',
      'supplier.pageTitle': 'مناطق شبكة الموردين',
      'supplier.pageDescription':
        'تستخدم الخريطة مواقع تقريبية على مستوى المناطق لتوضيح خصوصية الموردين وفقاً لوثيقة SRS.',
      'supplier.regionFilter': 'التصفية حسب المنطقة',
      'supplier.allRegions': 'جميع المناطق',
      'supplier.noRegion': 'لم يتم العثور على مناطق',
      'supplier.mapUnavailable': 'الخريطة غير متاحة',
      'supplier.mapFallback':
        'لا يزال من الممكن عرض قائمة المناطق بجانب الخريطة.',
      'supplier.noScript':
        'يلزم تفعيل JavaScript للخريطة التفاعلية. المناطق المدرجة: سولاويسي ومالوكو وجاوة.',
      'supplier.sulawesi': 'سولاويسي',
      'supplier.maluku': 'مالوكو',
      'supplier.java': 'جاوة',
      'supplier.sulawesiNetwork': 'شبكة شركاء سولاويسي',
      'supplier.malukuNetwork': 'شبكة شركاء مالوكو',
      'supplier.javaNetwork': 'شبكة شركاء جاوة',
      'supplier.demoLocation':
        'موقع تقريبي على مستوى المنطقة لأغراض العرض التجريبي.'
    }
  };

  Object.keys(supplierPageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      supplierPageTranslations[language]
    );
  });


    const contactPageTranslations = {
    id: {
      'contact.eyebrow': 'Lead Capture',
      'contact.pageTitle': 'Hubungi Kami',
      'contact.pageDescription':
        'Kirim pertanyaan produk, kemitraan, atau informasi perusahaan melalui formulir berikut.',
      'contact.infoTitle': 'Informasi Kontak Demo',
      'contact.infoDescription':
        'Ganti alamat, nomor WhatsApp, email penerima, dan media sosial melalui pengaturan CMS produksi.',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',
      'contact.whatsappButton': 'Hubungi WhatsApp',
      'contact.address': 'Alamat',
      'contact.addressValue':
        'Indonesia — alamat resmi belum dikonfigurasi',
      'contact.honeypot': 'Jangan isi:',
      'contact.name': 'Nama *',
      'contact.company': 'Perusahaan',
      'contact.phone': 'Telepon/WhatsApp',
      'contact.subject': 'Subjek *',
      'contact.message': 'Pesan *',
      'contact.consent':
        'Saya menyetujui pemrosesan data untuk menanggapi pesan ini sesuai',
      'contact.privacy': 'kebijakan privasi',
      'contact.send': 'Kirim Pesan'
    },

    en: {
      'contact.eyebrow': 'Lead Capture',
      'contact.pageTitle': 'Contact Us',
      'contact.pageDescription':
        'Send product, partnership, or company information inquiries through the following form.',
      'contact.infoTitle': 'Demonstration Contact Information',
      'contact.infoDescription':
        'Replace the address, WhatsApp number, recipient email, and social media through the production CMS settings.',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',
      'contact.whatsappButton': 'Contact via WhatsApp',
      'contact.address': 'Address',
      'contact.addressValue':
        'Indonesia — official address has not been configured',
      'contact.honeypot': 'Do not fill in:',
      'contact.name': 'Name *',
      'contact.company': 'Company',
      'contact.phone': 'Phone/WhatsApp',
      'contact.subject': 'Subject *',
      'contact.message': 'Message *',
      'contact.consent':
        'I consent to the processing of my data to respond to this message in accordance with the',
      'contact.privacy': 'privacy policy',
      'contact.send': 'Send Message'
    },

    hi: {
      'contact.eyebrow': 'संपर्क अनुरोध',
      'contact.pageTitle': 'हमसे संपर्क करें',
      'contact.pageDescription':
        'निम्नलिखित फ़ॉर्म के माध्यम से उत्पाद, साझेदारी या कंपनी संबंधी प्रश्न भेजें।',
      'contact.infoTitle': 'प्रदर्शन संपर्क जानकारी',
      'contact.infoDescription':
        'उत्पादन CMS की सेटिंग में पता, WhatsApp नंबर, प्राप्तकर्ता ईमेल और सोशल मीडिया बदलें।',
      'contact.email': 'ईमेल',
      'contact.whatsapp': 'व्हाट्सऐप',
      'contact.whatsappButton': 'व्हाट्सऐप से संपर्क करें',
      'contact.address': 'पता',
      'contact.addressValue':
        'इंडोनेशिया — आधिकारिक पता अभी कॉन्फ़िगर नहीं किया गया है',
      'contact.honeypot': 'इसे न भरें:',
      'contact.name': 'नाम *',
      'contact.company': 'कंपनी',
      'contact.phone': 'फ़ोन/व्हाट्सऐप',
      'contact.subject': 'विषय *',
      'contact.message': 'संदेश *',
      'contact.consent':
        'मैं इस संदेश का उत्तर देने के लिए अपने डेटा के प्रसंस्करण से सहमत हूँ, जो',
      'contact.privacy': 'गोपनीयता नीति',
      'contact.send': 'संदेश भेजें'
    },

    zh: {
      'contact.eyebrow': '客户咨询',
      'contact.pageTitle': '联系我们',
      'contact.pageDescription':
        '请通过以下表单发送产品、合作伙伴关系或公司信息方面的咨询。',
      'contact.infoTitle': '演示联系信息',
      'contact.infoDescription':
        '请通过正式版 CMS 设置更改地址、WhatsApp 号码、收件邮箱和社交媒体信息。',
      'contact.email': '电子邮箱',
      'contact.whatsapp': 'WhatsApp',
      'contact.whatsappButton': '通过 WhatsApp 联系',
      'contact.address': '地址',
      'contact.addressValue':
        '印度尼西亚 — 官方地址尚未配置',
      'contact.honeypot': '请勿填写：',
      'contact.name': '姓名 *',
      'contact.company': '公司',
      'contact.phone': '电话/WhatsApp',
      'contact.subject': '主题 *',
      'contact.message': '留言 *',
      'contact.consent':
        '我同意根据以下政策处理我的数据，以便回复此留言：',
      'contact.privacy': '隐私政策',
      'contact.send': '发送留言'
    },

    ar: {
      'contact.eyebrow': 'استقبال الاستفسارات',
      'contact.pageTitle': 'اتصل بنا',
      'contact.pageDescription':
        'أرسل استفسارات المنتجات أو الشراكات أو معلومات الشركة من خلال النموذج التالي.',
      'contact.infoTitle': 'معلومات الاتصال التجريبية',
      'contact.infoDescription':
        'استبدل العنوان ورقم واتساب والبريد الإلكتروني للمستلم ووسائل التواصل الاجتماعي من إعدادات نظام إدارة المحتوى للإنتاج.',
      'contact.email': 'البريد الإلكتروني',
      'contact.whatsapp': 'واتساب',
      'contact.whatsappButton': 'تواصل عبر واتساب',
      'contact.address': 'العنوان',
      'contact.addressValue':
        'إندونيسيا — لم تتم تهيئة العنوان الرسمي بعد',
      'contact.honeypot': 'لا تملأ هذا الحقل:',
      'contact.name': 'الاسم *',
      'contact.company': 'الشركة',
      'contact.phone': 'الهاتف/واتساب',
      'contact.subject': 'الموضوع *',
      'contact.message': 'الرسالة *',
      'contact.consent':
        'أوافق على معالجة بياناتي للرد على هذه الرسالة وفقاً لـ',
      'contact.privacy': 'سياسة الخصوصية',
      'contact.send': 'إرسال الرسالة'
    }
  };

  Object.keys(contactPageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      contactPageTranslations[language]
    );
  });


    const productDetailTranslations = {
    id: {
      'productDetail.detail': 'Detail',
      'productDetail.title': 'Detail Produk',
      'productDetail.description':
        'Informasi produk, spesifikasi, brosur, dan kanal pertanyaan.',
      'productDetail.notPublished':
        'Produk mungkin belum dipublikasikan.',

      'productDetail.premiumDescription':
        'Produk demonstrasi yang menampilkan struktur informasi katalog sesuai SRS. Spesifikasi final, standar mutu, sertifikasi, harga, dan kapasitas pasokan harus diverifikasi oleh perusahaan sebelum publikasi produksi.',
      'productDetail.oilDescription':
        'Contoh halaman produk minyak cengkeh. Detail kadar eugenol, metode ekstraksi, ukuran kemasan, dan dokumen pengujian harus diisi melalui CMS setelah mendapat persetujuan resmi.',
      'productDetail.stemDescription':
        'Contoh katalog tangkai cengkeh yang dapat dikelola dari CMS. Seluruh klaim mutu dan penggunaan akhir harus diverifikasi sebelum ditampilkan sebagai informasi resmi.',

      'productDetail.origin': 'Asal',
      'productDetail.indonesia': 'Indonesia',
      'productDetail.condition': 'Kondisi',
      'productDetail.drySorted': 'Kering dan tersortir',
      'productDetail.packaging': 'Kemasan',
      'productDetail.customB2B':
        'Menyesuaikan kebutuhan B2B',
      'productDetail.status': 'Status',
      'productDetail.demoVerification':
        'Konten demo — perlu verifikasi',

      'productDetail.form': 'Bentuk',
      'productDetail.liquid': 'Cair',
      'productDetail.usage': 'Penggunaan',
      'productDetail.industrialRawMaterial':
        'Bahan baku industri',
      'productDetail.documents': 'Dokumen',
      'productDetail.onRequest':
        'Sesuai permintaan dan ketersediaan',

      'productDetail.sorting': 'Sortasi',
      'productDetail.asRequired':
        'Berdasarkan kebutuhan',
      'productDetail.sackPackaging':
        'Karung atau kemasan B2B'
    },

    en: {
      'productDetail.detail': 'Detail',
      'productDetail.title': 'Product Details',
      'productDetail.description':
        'Product information, specifications, brochure, and inquiry channels.',
      'productDetail.notPublished':
        'The product may not have been published yet.',

      'productDetail.premiumDescription':
        'This demonstration product presents a catalogue information structure based on the SRS. Final specifications, quality standards, certifications, prices, and supply capacity must be verified by the company before production publication.',
      'productDetail.oilDescription':
        'This is a demonstration clove oil product page. Eugenol content, extraction method, packaging size, and testing documents must be entered through the CMS after official approval.',
      'productDetail.stemDescription':
        'This is a demonstration clove stem catalogue that can be managed through the CMS. All quality claims and intended uses must be verified before being displayed as official information.',

      'productDetail.origin': 'Origin',
      'productDetail.indonesia': 'Indonesia',
      'productDetail.condition': 'Condition',
      'productDetail.drySorted': 'Dried and sorted',
      'productDetail.packaging': 'Packaging',
      'productDetail.customB2B':
        'Adapted to B2B requirements',
      'productDetail.status': 'Status',
      'productDetail.demoVerification':
        'Demonstration content — verification required',

      'productDetail.form': 'Form',
      'productDetail.liquid': 'Liquid',
      'productDetail.usage': 'Usage',
      'productDetail.industrialRawMaterial':
        'Industrial raw material',
      'productDetail.documents': 'Documents',
      'productDetail.onRequest':
        'Subject to request and availability',

      'productDetail.sorting': 'Sorting',
      'productDetail.asRequired':
        'Based on requirements',
      'productDetail.sackPackaging':
        'Sacks or B2B packaging'
    },

    hi: {
      'productDetail.detail': 'विवरण',
      'productDetail.title': 'उत्पाद विवरण',
      'productDetail.description':
        'उत्पाद की जानकारी, विनिर्देश, ब्रोशर और पूछताछ के माध्यम।',
      'productDetail.notPublished':
        'उत्पाद अभी प्रकाशित नहीं किया गया हो सकता है।',

      'productDetail.premiumDescription':
        'यह प्रदर्शन उत्पाद SRS के अनुसार कैटलॉग जानकारी की संरचना प्रस्तुत करता है। अंतिम विनिर्देशों, गुणवत्ता मानकों, प्रमाणपत्रों, कीमतों और आपूर्ति क्षमता को आधिकारिक प्रकाशन से पहले कंपनी द्वारा सत्यापित किया जाना चाहिए।',
      'productDetail.oilDescription':
        'यह लौंग तेल उत्पाद पृष्ठ का एक उदाहरण है। यूजेनॉल की मात्रा, निष्कर्षण विधि, पैकेजिंग आकार और परीक्षण दस्तावेज आधिकारिक स्वीकृति के बाद CMS के माध्यम से भरे जाने चाहिए।',
      'productDetail.stemDescription':
        'यह लौंग के डंठल की एक उदाहरण कैटलॉग सामग्री है जिसे CMS से प्रबंधित किया जा सकता है। सभी गुणवत्ता दावों और अंतिम उपयोगों को आधिकारिक जानकारी के रूप में दिखाने से पहले सत्यापित किया जाना चाहिए।',

      'productDetail.origin': 'उत्पत्ति',
      'productDetail.indonesia': 'इंडोनेशिया',
      'productDetail.condition': 'स्थिति',
      'productDetail.drySorted': 'सूखा और छांटा हुआ',
      'productDetail.packaging': 'पैकेजिंग',
      'productDetail.customB2B':
        'B2B आवश्यकताओं के अनुसार',
      'productDetail.status': 'स्थिति',
      'productDetail.demoVerification':
        'प्रदर्शन सामग्री — सत्यापन आवश्यक',

      'productDetail.form': 'रूप',
      'productDetail.liquid': 'तरल',
      'productDetail.usage': 'उपयोग',
      'productDetail.industrialRawMaterial':
        'औद्योगिक कच्चा माल',
      'productDetail.documents': 'दस्तावेज',
      'productDetail.onRequest':
        'अनुरोध और उपलब्धता के अनुसार',

      'productDetail.sorting': 'छंटाई',
      'productDetail.asRequired':
        'आवश्यकता के अनुसार',
      'productDetail.sackPackaging':
        'बोरी या B2B पैकेजिंग'
    },

    zh: {
      'productDetail.detail': '详情',
      'productDetail.title': '产品详情',
      'productDetail.description':
        '产品信息、规格、宣传册和咨询渠道。',
      'productDetail.notPublished':
        '该产品可能尚未发布。',

      'productDetail.premiumDescription':
        '该演示产品按照 SRS 展示产品目录信息结构。最终规格、质量标准、认证、价格和供应能力必须在正式发布前由公司核实。',
      'productDetail.oilDescription':
        '这是丁香油产品页面的演示示例。丁香酚含量、提取方法、包装规格和检测文件必须在获得正式批准后通过 CMS 填写。',
      'productDetail.stemDescription':
        '这是可通过 CMS 管理的丁香梗产品目录示例。所有质量声明和最终用途必须在作为官方信息发布前进行核实。',

      'productDetail.origin': '原产地',
      'productDetail.indonesia': '印度尼西亚',
      'productDetail.condition': '状态',
      'productDetail.drySorted': '干燥并完成分选',
      'productDetail.packaging': '包装',
      'productDetail.customB2B':
        '根据 B2B 需求调整',
      'productDetail.status': '发布状态',
      'productDetail.demoVerification':
        '演示内容 — 需要核实',

      'productDetail.form': '形态',
      'productDetail.liquid': '液体',
      'productDetail.usage': '用途',
      'productDetail.industrialRawMaterial':
        '工业原料',
      'productDetail.documents': '文件',
      'productDetail.onRequest':
        '根据请求和实际供应情况提供',

      'productDetail.sorting': '分选',
      'productDetail.asRequired':
        '根据需求处理',
      'productDetail.sackPackaging':
        '麻袋或 B2B 包装'
    },

    ar: {
      'productDetail.detail': 'التفاصيل',
      'productDetail.title': 'تفاصيل المنتج',
      'productDetail.description':
        'معلومات المنتج والمواصفات والكتيب وقنوات الاستفسار.',
      'productDetail.notPublished':
        'قد لا يكون المنتج منشوراً بعد.',

      'productDetail.premiumDescription':
        'يعرض هذا المنتج التجريبي هيكل معلومات الكتالوج وفقاً لوثيقة SRS. يجب على الشركة التحقق من المواصفات النهائية ومعايير الجودة والشهادات والأسعار والقدرة على التوريد قبل النشر الرسمي.',
      'productDetail.oilDescription':
        'هذه صفحة تجريبية لمنتج زيت القرنفل. يجب إدخال نسبة الأوجينول وطريقة الاستخلاص وحجم العبوة ووثائق الاختبار من خلال نظام إدارة المحتوى بعد الحصول على الموافقة الرسمية.',
      'productDetail.stemDescription':
        'هذا نموذج لكتالوج سيقان القرنفل يمكن إدارته من خلال نظام إدارة المحتوى. يجب التحقق من جميع ادعاءات الجودة والاستخدامات النهائية قبل عرضها كمعلومات رسمية.',

      'productDetail.origin': 'المنشأ',
      'productDetail.indonesia': 'إندونيسيا',
      'productDetail.condition': 'الحالة',
      'productDetail.drySorted': 'مجفف ومفرز',
      'productDetail.packaging': 'التعبئة',
      'productDetail.customB2B':
        'حسب متطلبات الأعمال',
      'productDetail.status': 'الحالة',
      'productDetail.demoVerification':
        'محتوى تجريبي — يحتاج إلى التحقق',

      'productDetail.form': 'الشكل',
      'productDetail.liquid': 'سائل',
      'productDetail.usage': 'الاستخدام',
      'productDetail.industrialRawMaterial':
        'مادة خام صناعية',
      'productDetail.documents': 'الوثائق',
      'productDetail.onRequest':
        'حسب الطلب والتوفر',

      'productDetail.sorting': 'الفرز',
      'productDetail.asRequired':
        'حسب المتطلبات',
      'productDetail.sackPackaging':
        'أكياس أو عبوات للأعمال'
    }
  };

  Object.keys(productDetailTranslations).forEach(language => {
    Object.assign(
      translations[language],
      productDetailTranslations[language]
    );
  });

    const articleDetailTranslations = {
    id: {
      'articleDetail.pageDescription':
        'Halaman detail publikasi dengan metadata, tag, dan tombol bagikan.',
      'articleDetail.share': 'Bagikan:',

      'articleDetail.supplyParagraphOne':
        'Rantai pasok cengkeh melibatkan sejumlah tahapan penting, mulai dari budidaya dan panen, pengeringan, sortasi, penyimpanan, hingga distribusi.',
      'articleDetail.supplyParagraphTwo':
        'Dalam versi produksi, artikel ini perlu ditinjau oleh pihak yang berwenang agar setiap informasi teknis, wilayah, dan klaim proses sesuai kondisi operasional PT Cengkeh Indonesia Global.',
      'articleDetail.transparencyTitle':
        'Transparansi informasi',
      'articleDetail.supplyParagraphThree':
        'Website dapat membantu perusahaan menyajikan informasi produk, dokumentasi, wilayah jaringan supplier, dan kanal komunikasi secara konsisten.',

      'articleDetail.sortingParagraphOne':
        'Sortasi merupakan bagian penting dalam penanganan komoditas karena membantu memisahkan produk berdasarkan kriteria yang disepakati.',
      'articleDetail.sortingParagraphTwo':
        'Untuk publikasi produksi, perusahaan perlu menetapkan parameter, metode pemeriksaan, dan dokumen pendukung yang benar-benar digunakan.',

      'articleDetail.partnershipParagraphOne':
        'Publikasi jaringan supplier harus mempertimbangkan persetujuan, privasi, keamanan, dan ketentuan kontraktual.',
      'articleDetail.partnershipParagraphTwo':
        'Karena itu, situs demo ini hanya menampilkan lokasi perkiraan pada tingkat wilayah dan tidak memuat alamat rinci.',

      'articleDetail.tagClove': '#cengkeh',
      'articleDetail.tagSupplyChain': '#rantai pasok',
      'articleDetail.tagQuality': '#kualitas',
      'articleDetail.tagSorting': '#sortasi',
      'articleDetail.tagSupplier': '#supplier',
      'articleDetail.tagPrivacy': '#privasi'
    },

    en: {
      'articleDetail.pageDescription':
        'A publication detail page featuring metadata, tags, and sharing buttons.',
      'articleDetail.share': 'Share:',

      'articleDetail.supplyParagraphOne':
        'The clove supply chain involves several important stages, including cultivation and harvesting, drying, sorting, storage, and distribution.',
      'articleDetail.supplyParagraphTwo':
        'For the production version, this article must be reviewed by an authorised party to ensure that all technical information, regional details, and process claims reflect the operating conditions of PT Cengkeh Indonesia Global.',
      'articleDetail.transparencyTitle':
        'Information transparency',
      'articleDetail.supplyParagraphThree':
        'The website can help the company present product information, documentation, supplier-network regions, and communication channels consistently.',

      'articleDetail.sortingParagraphOne':
        'Sorting is an important part of commodity handling because it helps separate products according to agreed criteria.',
      'articleDetail.sortingParagraphTwo':
        'Before production publication, the company must establish the parameters, inspection methods, and supporting documents that are actually used.',

      'articleDetail.partnershipParagraphOne':
        'Publishing supplier-network information must take consent, privacy, security, and contractual requirements into account.',
      'articleDetail.partnershipParagraphTwo':
        'Therefore, this demonstration website only displays approximate regional locations and does not provide detailed addresses.',

      'articleDetail.tagClove': '#cloves',
      'articleDetail.tagSupplyChain': '#supply chain',
      'articleDetail.tagQuality': '#quality',
      'articleDetail.tagSorting': '#sorting',
      'articleDetail.tagSupplier': '#supplier',
      'articleDetail.tagPrivacy': '#privacy'
    },

    hi: {
      'articleDetail.pageDescription':
        'मेटाडेटा, टैग और साझा करने के बटन वाला विस्तृत प्रकाशन पृष्ठ।',
      'articleDetail.share': 'साझा करें:',

      'articleDetail.supplyParagraphOne':
        'लौंग की आपूर्ति श्रृंखला में खेती और कटाई, सुखाने, छंटाई, भंडारण और वितरण सहित कई महत्वपूर्ण चरण शामिल होते हैं।',
      'articleDetail.supplyParagraphTwo':
        'उत्पादन संस्करण में इस लेख की अधिकृत पक्ष द्वारा समीक्षा की जानी चाहिए, ताकि सभी तकनीकी जानकारी, क्षेत्रीय विवरण और प्रक्रिया संबंधी दावे PT Cengkeh Indonesia Global की वास्तविक संचालन परिस्थितियों के अनुरूप हों।',
      'articleDetail.transparencyTitle':
        'जानकारी में पारदर्शिता',
      'articleDetail.supplyParagraphThree':
        'वेबसाइट कंपनी को उत्पाद जानकारी, दस्तावेज़, आपूर्तिकर्ता नेटवर्क के क्षेत्र और संचार माध्यमों को लगातार प्रस्तुत करने में सहायता कर सकती है।',

      'articleDetail.sortingParagraphOne':
        'छंटाई कमोडिटी प्रबंधन का एक महत्वपूर्ण भाग है, क्योंकि इससे सहमत मानदंडों के अनुसार उत्पादों को अलग करने में सहायता मिलती है।',
      'articleDetail.sortingParagraphTwo':
        'आधिकारिक प्रकाशन से पहले कंपनी को वास्तव में उपयोग किए जाने वाले मापदंड, निरीक्षण विधियाँ और सहायक दस्तावेज़ निर्धारित करने चाहिए।',

      'articleDetail.partnershipParagraphOne':
        'आपूर्तिकर्ता नेटवर्क की जानकारी प्रकाशित करते समय सहमति, गोपनीयता, सुरक्षा और अनुबंध संबंधी शर्तों पर विचार किया जाना चाहिए।',
      'articleDetail.partnershipParagraphTwo':
        'इसलिए यह प्रदर्शन वेबसाइट केवल क्षेत्र स्तर के अनुमानित स्थान दिखाती है और विस्तृत पते प्रकाशित नहीं करती।',

      'articleDetail.tagClove': '#लौंग',
      'articleDetail.tagSupplyChain': '#आपूर्ति श्रृंखला',
      'articleDetail.tagQuality': '#गुणवत्ता',
      'articleDetail.tagSorting': '#छंटाई',
      'articleDetail.tagSupplier': '#आपूर्तिकर्ता',
      'articleDetail.tagPrivacy': '#गोपनीयता'
    },

    zh: {
      'articleDetail.pageDescription':
        '包含元数据、标签和分享按钮的文章详情页面。',
      'articleDetail.share': '分享：',

      'articleDetail.supplyParagraphOne':
        '丁香供应链包含多个重要阶段，包括种植与采收、干燥、分选、储存以及配送。',
      'articleDetail.supplyParagraphTwo':
        '在正式上线前，本文必须由授权人员审核，以确保所有技术信息、区域资料和流程说明符合 PT Cengkeh Indonesia Global 的实际运营情况。',
      'articleDetail.transparencyTitle':
        '信息透明度',
      'articleDetail.supplyParagraphThree':
        '网站可以帮助公司持续、统一地展示产品信息、相关文件、供应商网络区域以及沟通渠道。',

      'articleDetail.sortingParagraphOne':
        '分选是商品处理的重要环节，因为它有助于按照约定标准对产品进行分类。',
      'articleDetail.sortingParagraphTwo':
        '正式发布前，公司必须确定实际采用的参数、检验方法和配套文件。',

      'articleDetail.partnershipParagraphOne':
        '发布供应商网络信息时，必须考虑授权、隐私、安全以及合同条款。',
      'articleDetail.partnershipParagraphTwo':
        '因此，该演示网站仅显示区域级别的大致位置，不公开详细地址。',

      'articleDetail.tagClove': '#丁香',
      'articleDetail.tagSupplyChain': '#供应链',
      'articleDetail.tagQuality': '#质量',
      'articleDetail.tagSorting': '#分选',
      'articleDetail.tagSupplier': '#供应商',
      'articleDetail.tagPrivacy': '#隐私'
    },

    ar: {
      'articleDetail.pageDescription':
        'صفحة تفصيلية للمنشور تتضمن البيانات الوصفية والوسوم وأزرار المشاركة.',
      'articleDetail.share': 'مشاركة:',

      'articleDetail.supplyParagraphOne':
        'تتضمن سلسلة توريد القرنفل عدة مراحل مهمة، منها الزراعة والحصاد والتجفيف والفرز والتخزين والتوزيع.',
      'articleDetail.supplyParagraphTwo':
        'في النسخة الرسمية، يجب مراجعة هذا المقال من جهة مخولة لضمان توافق المعلومات الفنية والتفاصيل الإقليمية وادعاءات العمليات مع ظروف تشغيل PT Cengkeh Indonesia Global.',
      'articleDetail.transparencyTitle':
        'شفافية المعلومات',
      'articleDetail.supplyParagraphThree':
        'يمكن للموقع مساعدة الشركة على عرض معلومات المنتجات والوثائق ومناطق شبكة الموردين وقنوات التواصل بصورة متسقة.',

      'articleDetail.sortingParagraphOne':
        'يعد الفرز جزءاً مهماً من التعامل مع السلع، لأنه يساعد على فصل المنتجات وفق المعايير المتفق عليها.',
      'articleDetail.sortingParagraphTwo':
        'قبل النشر الرسمي، يجب على الشركة تحديد المعايير وطرق الفحص والوثائق الداعمة المستخدمة فعلياً.',

      'articleDetail.partnershipParagraphOne':
        'يجب أن يراعي نشر معلومات شبكة الموردين الموافقة والخصوصية والأمان والشروط التعاقدية.',
      'articleDetail.partnershipParagraphTwo':
        'لذلك، يعرض هذا الموقع التجريبي مواقع تقريبية على مستوى المناطق فقط، ولا ينشر العناوين التفصيلية.',

      'articleDetail.tagClove': '#القرنفل',
      'articleDetail.tagSupplyChain': '#سلسلة التوريد',
      'articleDetail.tagQuality': '#الجودة',
      'articleDetail.tagSorting': '#الفرز',
      'articleDetail.tagSupplier': '#الموردون',
      'articleDetail.tagPrivacy': '#الخصوصية'
    }
  };

  Object.keys(articleDetailTranslations).forEach(language => {
    Object.assign(
      translations[language],
      articleDetailTranslations[language]
    );
  });

    const privacyPageTranslations = {
    id: {
      'privacy.eyebrow': 'Privasi',
      'privacy.pageTitle': 'Kebijakan Privasi Demo',
      'privacy.pageDescription':
        'Ringkasan pengelolaan data formulir kontak dan publikasi informasi supplier.',

      'privacy.collectedDataTitle':
        'Data yang dikumpulkan',
      'privacy.collectedDataText':
        'Formulir kontak dapat mengumpulkan nama, email, perusahaan, nomor telepon opsional, subjek, pesan, persetujuan, dan waktu pengiriman.',

      'privacy.processingPurposeTitle':
        'Tujuan pemrosesan',
      'privacy.processingPurposeText':
        'Data digunakan untuk menanggapi pertanyaan, mendokumentasikan komunikasi, dan menindaklanjuti kebutuhan calon mitra.',

      'privacy.retentionTitle': 'Retensi',
      'privacy.retentionText':
        'Sesuai baseline SRS, pesan kontak disimpan maksimal 12 bulan atau mengikuti kebijakan perusahaan, kemudian dihapus atau dianonimkan.',

      'privacy.supplierText':
        'Lokasi, alamat, dan kontak supplier hanya dipublikasikan setelah memperoleh persetujuan. Situs demo menggunakan lokasi perkiraan tingkat wilayah.',

      'privacy.noteLabel': 'Catatan:',
      'privacy.noteText':
        'teks ini adalah contoh dan harus ditinjau secara legal sebelum digunakan pada sistem produksi.'
    },

    en: {
      'privacy.eyebrow': 'Privacy',
      'privacy.pageTitle': 'Demonstration Privacy Policy',
      'privacy.pageDescription':
        'A summary of contact-form data management and the publication of supplier information.',

      'privacy.collectedDataTitle':
        'Data collected',
      'privacy.collectedDataText':
        'The contact form may collect names, email addresses, company names, optional telephone numbers, subjects, messages, consent records, and submission times.',

      'privacy.processingPurposeTitle':
        'Purpose of processing',
      'privacy.processingPurposeText':
        'The data is used to respond to inquiries, document communications, and follow up on the requirements of prospective partners.',

      'privacy.retentionTitle': 'Retention',
      'privacy.retentionText':
        'Based on the SRS baseline, contact messages are retained for a maximum of 12 months or according to company policy, after which they are deleted or anonymised.',

      'privacy.supplierText':
        'Supplier locations, addresses, and contact details are only published after consent has been obtained. The demonstration website uses approximate regional locations.',

      'privacy.noteLabel': 'Note:',
      'privacy.noteText':
        'this text is an example and must undergo legal review before being used in the production system.'
    },

    hi: {
      'privacy.eyebrow': 'गोपनीयता',
      'privacy.pageTitle': 'प्रदर्शन गोपनीयता नीति',
      'privacy.pageDescription':
        'संपर्क फ़ॉर्म के डेटा प्रबंधन और आपूर्तिकर्ता जानकारी के प्रकाशन का सारांश।',

      'privacy.collectedDataTitle':
        'एकत्र किया जाने वाला डेटा',
      'privacy.collectedDataText':
        'संपर्क फ़ॉर्म नाम, ईमेल, कंपनी, वैकल्पिक फ़ोन नंबर, विषय, संदेश, सहमति और भेजने का समय एकत्र कर सकता है।',

      'privacy.processingPurposeTitle':
        'प्रसंस्करण का उद्देश्य',
      'privacy.processingPurposeText':
        'डेटा का उपयोग प्रश्नों का उत्तर देने, संचार का रिकॉर्ड रखने और संभावित साझेदारों की आवश्यकताओं पर आगे की कार्रवाई करने के लिए किया जाता है।',

      'privacy.retentionTitle': 'डेटा प्रतिधारण',
      'privacy.retentionText':
        'SRS आधाररेखा के अनुसार संपर्क संदेश अधिकतम 12 महीनों तक या कंपनी की नीति के अनुसार रखे जाते हैं, जिसके बाद उन्हें हटा दिया जाता है या गुमनाम कर दिया जाता है।',

      'privacy.supplierText':
        'आपूर्तिकर्ताओं के स्थान, पते और संपर्क विवरण सहमति प्राप्त होने के बाद ही प्रकाशित किए जाते हैं। प्रदर्शन वेबसाइट क्षेत्र स्तर के अनुमानित स्थानों का उपयोग करती है।',

      'privacy.noteLabel': 'टिप्पणी:',
      'privacy.noteText':
        'यह पाठ केवल एक उदाहरण है और उत्पादन प्रणाली में उपयोग से पहले इसकी कानूनी समीक्षा की जानी चाहिए।'
    },

    zh: {
      'privacy.eyebrow': '隐私',
      'privacy.pageTitle': '演示隐私政策',
      'privacy.pageDescription':
        '联系表单数据管理和供应商信息发布的概要。',

      'privacy.collectedDataTitle':
        '收集的数据',
      'privacy.collectedDataText':
        '联系表单可能会收集姓名、电子邮箱、公司名称、可选电话号码、主题、留言、同意记录以及提交时间。',

      'privacy.processingPurposeTitle':
        '数据处理目的',
      'privacy.processingPurposeText':
        '相关数据用于回复咨询、记录沟通内容以及跟进潜在合作伙伴的需求。',

      'privacy.retentionTitle': '数据保留',
      'privacy.retentionText':
        '根据 SRS 基准要求，联系留言最多保存 12 个月，或按照公司政策保存，之后将被删除或匿名化处理。',

      'privacy.supplierText':
        '供应商的位置、地址和联系方式只有在获得同意后才会发布。演示网站仅使用区域级别的大致位置。',

      'privacy.noteLabel': '注意：',
      'privacy.noteText':
        '本文仅为示例，正式用于生产系统前必须经过法律审核。'
    },

    ar: {
      'privacy.eyebrow': 'الخصوصية',
      'privacy.pageTitle': 'سياسة الخصوصية التجريبية',
      'privacy.pageDescription':
        'ملخص لإدارة بيانات نموذج الاتصال ونشر معلومات الموردين.',

      'privacy.collectedDataTitle':
        'البيانات التي يتم جمعها',
      'privacy.collectedDataText':
        'قد يجمع نموذج الاتصال الاسم والبريد الإلكتروني واسم الشركة ورقم الهاتف الاختياري والموضوع والرسالة والموافقة ووقت الإرسال.',

      'privacy.processingPurposeTitle':
        'غرض المعالجة',
      'privacy.processingPurposeText':
        'تستخدم البيانات للرد على الاستفسارات وتوثيق التواصل ومتابعة احتياجات الشركاء المحتملين.',

      'privacy.retentionTitle': 'الاحتفاظ بالبيانات',
      'privacy.retentionText':
        'وفقاً لخط الأساس في وثيقة SRS، يتم الاحتفاظ برسائل الاتصال لمدة أقصاها 12 شهراً أو وفقاً لسياسة الشركة، ثم تحذف أو تزال منها البيانات التعريفية.',

      'privacy.supplierText':
        'لا تنشر مواقع الموردين وعناوينهم وبيانات الاتصال بهم إلا بعد الحصول على الموافقة. يستخدم الموقع التجريبي مواقع تقريبية على مستوى المناطق.',

      'privacy.noteLabel': 'ملاحظة:',
      'privacy.noteText':
        'هذا النص مجرد مثال ويجب مراجعته قانونياً قبل استخدامه في نظام الإنتاج.'
    }
  };

  Object.keys(privacyPageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      privacyPageTranslations[language]
    );
  });

    const metadataTranslations = {
    id: {
      'meta.homeTitle':
        'PT Cengkeh Indonesia Global | Profil, Produk, dan Supplier',
      'meta.homeDescription':
        'Website demonstrasi PT Cengkeh Indonesia Global untuk profil perusahaan, katalog produk, artikel, jaringan supplier, dan kontak.',

      'meta.aboutTitle':
        'Tentang Kami | PT Cengkeh Indonesia Global',
      'meta.aboutDescription':
        'Profil, visi, misi, nilai, dan portofolio demonstrasi PT Cengkeh Indonesia Global.',

      'meta.productsTitle':
        'Produk | PT Cengkeh Indonesia Global',
      'meta.productsDescription':
        'Katalog produk cengkeh demonstrasi dengan filter dan halaman detail.',

      'meta.articlesTitle':
        'Artikel | PT Cengkeh Indonesia Global',
      'meta.articlesDescription':
        'Artikel dan publikasi demonstrasi mengenai cengkeh, kualitas, dan kemitraan.',

      'meta.suppliersTitle':
        'Jaringan Supplier | PT Cengkeh Indonesia Global',
      'meta.suppliersDescription':
        'Peta interaktif wilayah jaringan supplier dengan lokasi perkiraan untuk menjaga privasi.',

      'meta.contactTitle':
        'Kontak | PT Cengkeh Indonesia Global',
      'meta.contactDescription':
        'Hubungi PT Cengkeh Indonesia Global melalui formulir kontak atau WhatsApp.',

      'meta.productDetailTitle':
        'Detail Produk | PT Cengkeh Indonesia Global',
      'meta.productDetailDescription':
        'Detail produk cengkeh, spesifikasi, brosur, dan kanal komunikasi.',

      'meta.articleDetailTitle':
        'Detail Artikel | PT Cengkeh Indonesia Global',
      'meta.articleDetailDescription':
        'Detail artikel PT Cengkeh Indonesia Global.',

      'meta.privacyTitle':
        'Kebijakan Privasi | PT Cengkeh Indonesia Global',
      'meta.privacyDescription':
        'Kebijakan privasi demonstrasi untuk formulir kontak dan data supplier.',

      'meta.notFoundTitle':
        '404 | PT Cengkeh Indonesia Global',
      'meta.notFoundDescription':
        'Halaman tidak ditemukan.'
    },

    en: {
      'meta.homeTitle':
        'PT Cengkeh Indonesia Global | Profile, Products, and Suppliers',
      'meta.homeDescription':
        'Demonstration website for PT Cengkeh Indonesia Global, featuring the company profile, product catalogue, articles, supplier network, and contact information.',

      'meta.aboutTitle':
        'About Us | PT Cengkeh Indonesia Global',
      'meta.aboutDescription':
        'Demonstration company profile, vision, mission, values, and portfolio of PT Cengkeh Indonesia Global.',

      'meta.productsTitle':
        'Products | PT Cengkeh Indonesia Global',
      'meta.productsDescription':
        'Demonstration clove product catalogue with filters and detailed product pages.',

      'meta.articlesTitle':
        'Articles | PT Cengkeh Indonesia Global',
      'meta.articlesDescription':
        'Demonstration articles and publications about cloves, quality, and partnerships.',

      'meta.suppliersTitle':
        'Supplier Network | PT Cengkeh Indonesia Global',
      'meta.suppliersDescription':
        'An interactive map of supplier network regions using approximate locations to protect privacy.',

      'meta.contactTitle':
        'Contact | PT Cengkeh Indonesia Global',
      'meta.contactDescription':
        'Contact PT Cengkeh Indonesia Global through the contact form or WhatsApp.',

      'meta.productDetailTitle':
        'Product Details | PT Cengkeh Indonesia Global',
      'meta.productDetailDescription':
        'Clove product details, specifications, brochures, and communication channels.',

      'meta.articleDetailTitle':
        'Article Details | PT Cengkeh Indonesia Global',
      'meta.articleDetailDescription':
        'Article details from PT Cengkeh Indonesia Global.',

      'meta.privacyTitle':
        'Privacy Policy | PT Cengkeh Indonesia Global',
      'meta.privacyDescription':
        'Demonstration privacy policy for contact forms and supplier data.',

      'meta.notFoundTitle':
        '404 | PT Cengkeh Indonesia Global',
      'meta.notFoundDescription':
        'Page not found.'
    },

    hi: {
      'meta.homeTitle':
        'PT Cengkeh Indonesia Global | प्रोफ़ाइल, उत्पाद और आपूर्तिकर्ता',
      'meta.homeDescription':
        'PT Cengkeh Indonesia Global की कंपनी प्रोफ़ाइल, उत्पाद सूची, लेख, आपूर्तिकर्ता नेटवर्क और संपर्क जानकारी के लिए प्रदर्शन वेबसाइट।',

      'meta.aboutTitle':
        'हमारे बारे में | PT Cengkeh Indonesia Global',
      'meta.aboutDescription':
        'PT Cengkeh Indonesia Global की प्रदर्शन प्रोफ़ाइल, दृष्टि, मिशन, मूल्य और पोर्टफोलियो।',

      'meta.productsTitle':
        'उत्पाद | PT Cengkeh Indonesia Global',
      'meta.productsDescription':
        'फ़िल्टर और विस्तृत पृष्ठों के साथ लौंग उत्पादों की प्रदर्शन सूची।',

      'meta.articlesTitle':
        'लेख | PT Cengkeh Indonesia Global',
      'meta.articlesDescription':
        'लौंग, गुणवत्ता और साझेदारी के बारे में प्रदर्शन लेख और प्रकाशन।',

      'meta.suppliersTitle':
        'आपूर्तिकर्ता नेटवर्क | PT Cengkeh Indonesia Global',
      'meta.suppliersDescription':
        'गोपनीयता की रक्षा के लिए अनुमानित स्थानों के साथ आपूर्तिकर्ता क्षेत्रों का इंटरैक्टिव मानचित्र।',

      'meta.contactTitle':
        'संपर्क | PT Cengkeh Indonesia Global',
      'meta.contactDescription':
        'संपर्क फ़ॉर्म या व्हाट्सऐप के माध्यम से PT Cengkeh Indonesia Global से संपर्क करें।',

      'meta.productDetailTitle':
        'उत्पाद विवरण | PT Cengkeh Indonesia Global',
      'meta.productDetailDescription':
        'लौंग उत्पाद का विवरण, विशेषताएँ, ब्रोशर और संपर्क माध्यम।',

      'meta.articleDetailTitle':
        'लेख विवरण | PT Cengkeh Indonesia Global',
      'meta.articleDetailDescription':
        'PT Cengkeh Indonesia Global के लेख का विवरण।',

      'meta.privacyTitle':
        'गोपनीयता नीति | PT Cengkeh Indonesia Global',
      'meta.privacyDescription':
        'संपर्क फ़ॉर्म और आपूर्तिकर्ता डेटा के लिए प्रदर्शन गोपनीयता नीति।',

      'meta.notFoundTitle':
        '404 | PT Cengkeh Indonesia Global',
      'meta.notFoundDescription':
        'पृष्ठ नहीं मिला।'
    },

    zh: {
      'meta.homeTitle':
        'PT Cengkeh Indonesia Global | 公司简介、产品和供应商',
      'meta.homeDescription':
        'PT Cengkeh Indonesia Global 演示网站，包含公司简介、产品目录、文章、供应商网络和联系方式。',

      'meta.aboutTitle':
        '关于我们 | PT Cengkeh Indonesia Global',
      'meta.aboutDescription':
        'PT Cengkeh Indonesia Global 的演示公司简介、愿景、使命、价值观和业务组合。',

      'meta.productsTitle':
        '产品 | PT Cengkeh Indonesia Global',
      'meta.productsDescription':
        '带有筛选功能和产品详情页的丁香产品演示目录。',

      'meta.articlesTitle':
        '文章 | PT Cengkeh Indonesia Global',
      'meta.articlesDescription':
        '有关丁香、质量和合作关系的演示文章与出版内容。',

      'meta.suppliersTitle':
        '供应商网络 | PT Cengkeh Indonesia Global',
      'meta.suppliersDescription':
        '采用区域级大致位置以保护隐私的供应商网络交互式地图。',

      'meta.contactTitle':
        '联系我们 | PT Cengkeh Indonesia Global',
      'meta.contactDescription':
        '通过联系表单或 WhatsApp 联系 PT Cengkeh Indonesia Global。',

      'meta.productDetailTitle':
        '产品详情 | PT Cengkeh Indonesia Global',
      'meta.productDetailDescription':
        '丁香产品详情、规格、宣传册和沟通渠道。',

      'meta.articleDetailTitle':
        '文章详情 | PT Cengkeh Indonesia Global',
      'meta.articleDetailDescription':
        'PT Cengkeh Indonesia Global 的文章详情。',

      'meta.privacyTitle':
        '隐私政策 | PT Cengkeh Indonesia Global',
      'meta.privacyDescription':
        '适用于联系表单和供应商数据的演示隐私政策。',

      'meta.notFoundTitle':
        '404 | PT Cengkeh Indonesia Global',
      'meta.notFoundDescription':
        '未找到页面。'
    },

    ar: {
      'meta.homeTitle':
        'PT Cengkeh Indonesia Global | الملف التعريفي والمنتجات والموردون',
      'meta.homeDescription':
        'موقع تجريبي لشركة PT Cengkeh Indonesia Global يعرض الملف التعريفي للشركة وكتالوج المنتجات والمقالات وشبكة الموردين ومعلومات الاتصال.',

      'meta.aboutTitle':
        'من نحن | PT Cengkeh Indonesia Global',
      'meta.aboutDescription':
        'ملف تعريفي تجريبي ورؤية ورسالة وقيم ومحفظة أعمال شركة PT Cengkeh Indonesia Global.',

      'meta.productsTitle':
        'المنتجات | PT Cengkeh Indonesia Global',
      'meta.productsDescription':
        'كتالوج تجريبي لمنتجات القرنفل مع خيارات التصفية وصفحات التفاصيل.',

      'meta.articlesTitle':
        'المقالات | PT Cengkeh Indonesia Global',
      'meta.articlesDescription':
        'مقالات ومنشورات تجريبية حول القرنفل والجودة والشراكات.',

      'meta.suppliersTitle':
        'شبكة الموردين | PT Cengkeh Indonesia Global',
      'meta.suppliersDescription':
        'خريطة تفاعلية لمناطق شبكة الموردين باستخدام مواقع تقريبية لحماية الخصوصية.',

      'meta.contactTitle':
        'اتصل بنا | PT Cengkeh Indonesia Global',
      'meta.contactDescription':
        'تواصل مع PT Cengkeh Indonesia Global عبر نموذج الاتصال أو واتساب.',

      'meta.productDetailTitle':
        'تفاصيل المنتج | PT Cengkeh Indonesia Global',
      'meta.productDetailDescription':
        'تفاصيل منتجات القرنفل والمواصفات والكتيبات وقنوات التواصل.',

      'meta.articleDetailTitle':
        'تفاصيل المقال | PT Cengkeh Indonesia Global',
      'meta.articleDetailDescription':
        'تفاصيل مقال من PT Cengkeh Indonesia Global.',

      'meta.privacyTitle':
        'سياسة الخصوصية | PT Cengkeh Indonesia Global',
      'meta.privacyDescription':
        'سياسة خصوصية تجريبية لنماذج الاتصال وبيانات الموردين.',

      'meta.notFoundTitle':
        '404 | PT Cengkeh Indonesia Global',
      'meta.notFoundDescription':
        'لم يتم العثور على الصفحة.'
    }
  };

  Object.keys(metadataTranslations).forEach(language => {
    Object.assign(
      translations[language],
      metadataTranslations[language]
    );
  });

    const notFoundPageTranslations = {
    id: {
      'notFound.title': 'Halaman tidak ditemukan',
      'notFound.description':
        'Alamat yang Anda buka tidak tersedia atau telah dipindahkan.',
      'notFound.backHome': 'Kembali ke Beranda'
    },

    en: {
      'notFound.title': 'Page not found',
      'notFound.description':
        'The address you opened is unavailable or has been moved.',
      'notFound.backHome': 'Back to Home'
    },

    hi: {
      'notFound.title': 'पृष्ठ नहीं मिला',
      'notFound.description':
        'आपके द्वारा खोला गया पता उपलब्ध नहीं है या स्थानांतरित कर दिया गया है।',
      'notFound.backHome': 'मुखपृष्ठ पर वापस जाएँ'
    },

    zh: {
      'notFound.title': '未找到页面',
      'notFound.description':
        '您访问的地址不可用或已被移动。',
      'notFound.backHome': '返回首页'
    },

    ar: {
      'notFound.title': 'لم يتم العثور على الصفحة',
      'notFound.description':
        'العنوان الذي فتحته غير متاح أو تم نقله.',
      'notFound.backHome': 'العودة إلى الرئيسية'
    }
  };

  Object.keys(notFoundPageTranslations).forEach(language => {
    Object.assign(
      translations[language],
      notFoundPageTranslations[language]
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

    function translateDocumentMetadata() {
    const titleKey = findTranslationKey(document.title);

    if (titleKey) {
      document.title = translate(titleKey);
    }

    const metadataSelectors = [
      'meta[name="description"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]'
    ];

    document
      .querySelectorAll(metadataSelectors.join(', '))
      .forEach(element => {
        const content = element.getAttribute('content');

        if (!content) return;

        const translationKey = findTranslationKey(content);

        if (translationKey) {
          element.setAttribute(
            'content',
            translate(translationKey)
          );
        }
      });
  }

  function initAutomaticTranslation() {
    if (!document.body) return;

    translateTextNodes(document.body);
    translateElementAttributes(document);
    translateDocumentMetadata();

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
    translateDocumentMetadata();

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

