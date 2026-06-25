const translations = {
  zh: {
    brand: "陶语小铺",
    brandTag: "手作陶瓷小物市集",
    navShop: "作品",
    navProcess: "工艺",
    navContact: "联系",
    heroEyebrow: "小批量上新 · 每件都有手作痕迹",
    heroTitle: "把陶土、釉色和一点点可爱，做成日常里的小礼物。",
    heroText:
      "陶语小铺收集手工陶瓷钟表、纽扣、冰箱贴、杯子与饰品。每件作品都经过塑形、修整、上釉和烧制，适合自用，也适合送给喜欢独特小物的人。",
    heroShop: "浏览作品",
    heroContact: "微信咨询",
    highlightOneTitle: "独一件",
    highlightOneText: "手捏形状和釉色变化让每件都不完全相同。",
    highlightTwoTitle: "可定制",
    highlightTwoText: "可咨询颜色、图案和小批量礼物需求。",
    highlightThreeTitle: "微信下单",
    highlightThreeText: "看中作品后直接联系确认现货与价格。",
    shopEyebrow: "Shop the table",
    shopTitle: "今日小市集",
    shopText: "先挑一个分类，再慢慢看釉色和表情。",
    processEyebrow: "From clay to keepsake",
    processTitle: "手作过程",
    processText: "从泥土成形到釉色稳定，每一步都让小物多一点温度。",
    processStepOne: "01 · 拉坯与塑形",
    processOneTitle: "先让泥土有自己的轮廓",
    processOneText: "杯子、盘子和小挂件会根据用途调整厚度、边缘和手感。",
    processStepTwo: "02 · 上釉与烧制",
    processTwoTitle: "用釉色留下柔软的光",
    processTwoText: "透明釉、彩釉和手绘细节会在窑火里形成自然的流动感。",
    contactEyebrow: "Ask on WeChat",
    contactTitle: "喜欢哪一件，发图来问就好。",
    contactText: "现货、定制、礼物包装和批量需求都可以微信沟通。",
    contactButton: "打开微信咨询",
    qrLabel: "微信二维码",
    modalTitle: "微信咨询购买",
    modalText: "这里可替换为你的真实微信二维码。也可以在咨询时发送作品截图，确认是否有现货。",
    modalBack: "继续看作品",
    footerBrand: "陶语小铺 Taoyu Studio",
    footerText: "手作陶瓷小物，慢慢上新。",
    all: "全部",
    ask: "微信咨询",
    askPrice: "微信咨询",
    comingSoon: "待上新",
    categories: {
      clocks: "陶瓷钟表",
      buttons: "陶瓷纽扣",
      magnets: "冰箱贴",
      cups: "杯子与小器皿",
      bracelets: "手串",
      necklaces: "项链",
      earrings: "耳坠",
    },
  },
  en: {
    brand: "Taoyu Studio",
    brandTag: "Handmade ceramic tiny market",
    navShop: "Shop",
    navProcess: "Process",
    navContact: "Contact",
    heroEyebrow: "Small batches · handmade marks in every piece",
    heroTitle: "Clay, glaze, and a little charm for everyday gifts.",
    heroText:
      "Taoyu Studio makes handmade ceramic clocks, buttons, fridge magnets, cups, and accessories. Each piece is shaped, finished, glazed, and fired by hand for people who love one-of-a-kind objects.",
    heroShop: "Browse Pieces",
    heroContact: "Ask on WeChat",
    highlightOneTitle: "One of a kind",
    highlightOneText: "Hand shaping and glaze movement make every piece slightly different.",
    highlightTwoTitle: "Custom friendly",
    highlightTwoText: "Ask about colors, patterns, and small-batch gift ideas.",
    highlightThreeTitle: "Order on WeChat",
    highlightThreeText: "Send a screenshot to confirm availability and pricing.",
    shopEyebrow: "Shop the table",
    shopTitle: "Today's Tiny Market",
    shopText: "Pick a category, then linger over the glaze and tiny expressions.",
    processEyebrow: "From clay to keepsake",
    processTitle: "The Making",
    processText: "From shaping clay to settling the glaze, each step adds warmth.",
    processStepOne: "01 · Throwing and shaping",
    processOneTitle: "Giving clay its first outline",
    processOneText: "Cups, plates, and charms are shaped for thickness, edges, and hand feel.",
    processStepTwo: "02 · Glazing and firing",
    processTwoTitle: "Letting glaze catch the light",
    processTwoText: "Clear glaze, color glaze, and hand-painted details settle naturally in the kiln.",
    contactEyebrow: "Ask on WeChat",
    contactTitle: "Found a favorite? Send a picture and ask.",
    contactText: "Stock, custom requests, gift wrapping, and small batches can all be discussed on WeChat.",
    contactButton: "Open WeChat Info",
    qrLabel: "WeChat QR",
    modalTitle: "Order by WeChat",
    modalText: "Replace this block with your real WeChat QR code. You can also send a product screenshot to check availability.",
    modalBack: "Keep Browsing",
    footerBrand: "Taoyu Studio",
    footerText: "Handmade ceramic small goods, updated slowly.",
    all: "All",
    ask: "Ask on WeChat",
    askPrice: "Ask on WeChat",
    comingSoon: "Coming Soon",
    categories: {
      clocks: "Ceramic Clocks",
      buttons: "Ceramic Buttons",
      magnets: "Fridge Magnets",
      cups: "Cups & Small Ware",
      bracelets: "Bracelets",
      necklaces: "Necklaces",
      earrings: "Earrings",
    },
  },
};

const products = [
  {
    category: "clocks",
    image: "assets/products/clock-sun-square.jpg",
    zh: {
      name: "太阳花方形陶瓷钟",
      desc: "米白陶面配手绘花纹和金色指针，适合书桌或玄关。",
    },
    en: {
      name: "Sunburst Square Ceramic Clock",
      desc: "A creamy ceramic face with hand-painted details and gold hands for a desk or entryway.",
    },
  },
  {
    category: "clocks",
    image: "assets/products/clock-birthday-round.jpg",
    zh: {
      name: "生日蛋糕圆盘钟",
      desc: "柔软蓝粉色和蛋糕图案，像一份每天都能看见的小祝福。",
    },
    en: {
      name: "Birthday Cake Round Clock",
      desc: "Soft blue and pink details with a cake motif, made like a tiny daily wish.",
    },
  },
  {
    category: "clocks",
    image: "assets/products/clock-hourglass-round.jpg",
    zh: {
      name: "沙漏图案陶瓷钟",
      desc: "蓝色釉线与沙漏图案组合，安静又有一点复古感。",
    },
    en: {
      name: "Hourglass Ceramic Clock",
      desc: "Blue glazed lines and an hourglass motif give this piece a calm vintage mood.",
    },
  },
  {
    category: "buttons",
    image: "assets/products/buttons-cat-collection.jpg",
    zh: {
      name: "猫猫陶瓷纽扣合集",
      desc: "每颗都有不同表情和釉色，可用于衣物、包包或手作配件。",
    },
    en: {
      name: "Cat Ceramic Button Set",
      desc: "Each button has its own tiny face and glaze, ready for clothes, bags, or craft projects.",
    },
  },
  {
    category: "buttons",
    image: "assets/products/buttons-cat-closeup.jpg",
    zh: {
      name: "釉面猫咪纽扣",
      desc: "近看能看到手绘线条、釉面亮光和小小的不规则边缘。",
    },
    en: {
      name: "Glossy Cat Buttons",
      desc: "Close-up charm with hand-painted lines, glossy glaze, and soft irregular edges.",
    },
  },
  {
    category: "magnets",
    image: "assets/products/magnet-panda-set.jpg",
    zh: {
      name: "熊猫陶瓷冰箱贴",
      desc: "几只不同表情的小熊猫，适合贴在冰箱、白板或礼物盒上。",
    },
    en: {
      name: "Panda Ceramic Magnets",
      desc: "A small group of panda faces for fridges, boards, or gift boxes.",
    },
  },
  {
    category: "magnets",
    image: "assets/products/magnet-blue-bottle.jpg",
    zh: {
      name: "青花小酒瓶冰箱贴",
      desc: "蓝白线描的小瓶造型，带一点东方器物的俏皮感。",
    },
    en: {
      name: "Blue Bottle Ceramic Magnet",
      desc: "A blue-and-white bottle shape with a playful nod to classic porcelain.",
    },
  },
  {
    category: "cups",
    image: "assets/products/cups-and-plate.jpg",
    zh: {
      name: "生日图案杯盘小器皿",
      desc: "杯子、盘子和小器皿组合，适合作为温柔的纪念礼物。",
    },
    en: {
      name: "Birthday Cup and Small Ware",
      desc: "A cup, plate, and small ceramic pieces made as gentle keepsake gifts.",
    },
  },
  {
    category: "bracelets",
    image: "assets/products/bracelet-ceramic.svg",
    zh: {
      name: "手工陶瓷手串",
      desc: "圆润陶珠配柔和釉色和小吊坠，适合作为日常手作配饰。",
    },
    en: {
      name: "Handmade Ceramic Bracelets",
      desc: "Rounded ceramic beads with soft glaze colors and a tiny charm for everyday wear.",
    },
  },
  {
    category: "necklaces",
    comingSoon: true,
    zh: {
      name: "手工陶瓷项链",
      desc: "适合日常佩戴的小吊坠款式，待补充实拍图。",
    },
    en: {
      name: "Handmade Ceramic Necklaces",
      desc: "Small everyday pendant styles will be added with real photos soon.",
    },
  },
  {
    category: "earrings",
    comingSoon: true,
    zh: {
      name: "手工陶瓷耳坠",
      desc: "轻巧釉面耳坠款式待上新，可先微信咨询定制方向。",
    },
    en: {
      name: "Handmade Ceramic Earrings",
      desc: "Light glazed earring styles are coming soon; custom ideas are welcome on WeChat.",
    },
  },
];

const categories = ["all", "clocks", "buttons", "magnets", "cups", "bracelets", "necklaces", "earrings"];

let currentLang = localStorage.getItem("taoyu-language") || "zh";
let currentCategory = "all";

const productGrid = document.querySelector("#productGrid");
const categoryFilters = document.querySelector("#categoryFilters");
const modal = document.querySelector("#contactModal");

function t(key) {
  return translations[currentLang][key];
}

function categoryLabel(category) {
  return category === "all" ? t("all") : translations[currentLang].categories[category];
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[currentLang][key]) {
      node.textContent = translations[currentLang][key];
    }
  });
  document.querySelectorAll(".lang-option").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
  renderFilters();
  renderProducts();
}

function renderFilters() {
  categoryFilters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.textContent = categoryLabel(category);
    button.classList.toggle("is-active", currentCategory === category);
    button.addEventListener("click", () => {
      currentCategory = category;
      renderFilters();
      renderProducts();
    });
    categoryFilters.appendChild(button);
  });
}

function renderProducts() {
  const visibleProducts = products.filter((product) => currentCategory === "all" || product.category === currentCategory);
  productGrid.innerHTML = "";

  visibleProducts.forEach((product) => {
    const copy = product[currentLang];
    const card = document.createElement("article");
    card.className = `product-card${product.comingSoon ? " is-coming-soon" : ""}`;

    const visual = product.comingSoon
      ? `<div class="product-image-wrap"><span class="coming-soon-mark">${t("comingSoon")}</span></div>`
      : `<img class="product-image" src="${product.image}" alt="${copy.name}">`;

    card.innerHTML = `
      ${visual}
      <div class="product-body">
        <div class="product-meta">
          <span>${categoryLabel(product.category)}</span>
          <span>${product.comingSoon ? t("comingSoon") : t("askPrice")}</span>
        </div>
        <h3>${copy.name}</h3>
        <p>${copy.desc}</p>
        <button class="button ghost contact-trigger" type="button">${t("ask")}</button>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const contactButton = event.target.closest(".contact-trigger");
  const closeButton = event.target.closest("[data-close-modal]");

  if (contactButton) {
    openModal();
  }

  if (closeButton) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.querySelectorAll(".lang-option").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("taoyu-language", currentLang);
    applyTranslations();
  });
});

applyTranslations();
