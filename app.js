/* ==========================================================================
   MOCK SEED DATA DEFINITIONS
   ========================================================================== */
const SEED_USERS = [
    {
        username: "admin1",
        password: "1234",
        name: "Ana Administradora",
        position: "Jefe de Planta",
        shift: "Mixto",
        level: 3,
        email: "ana.admin@empresa.com"
    },
    {
        username: "supervisor1",
        password: "1234",
        name: "Carlos Supervisor",
        position: "Supervisor de Turno A",
        shift: "Vespertino",
        level: 2,
        email: "carlos.super@empresa.com"
    },
    {
        username: "operario1",
        password: "1234",
        name: "Juan Operario",
        position: "Técnico de Mantenimiento",
        shift: "Matutino",
        level: 1,
        email: "juan.operario@empresa.com"
    }
];

// Raw SVG data strings (using standard hex color codes like #4f46e5)
const SVG_RAW_DATA = {
    sensor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#4f46e5" stroke-width="2.5"><rect x="30" y="20" width="40" height="50" rx="8" fill="rgba(79, 70, 229, 0.05)"/><circle cx="50" cy="38" r="10" stroke-dasharray="2"/><path d="M50 70 L50 90 M40 90 H60" stroke-linecap="round"/><circle cx="50" cy="38" r="4" fill="#4f46e5"/></svg>`,
    bearing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#0ea5e9" stroke-width="2.5"><circle cx="50" cy="50" r="35" fill="rgba(14, 165, 233, 0.05)"/><circle cx="50" cy="50" r="22"/><circle cx="50" cy="28" r="5" fill="#0ea5e9"/><circle cx="50" cy="72" r="5" fill="#0ea5e9"/><circle cx="28" cy="50" r="5" fill="#0ea5e9"/><circle cx="72" cy="50" r="5" fill="#0ea5e9"/><circle cx="34.4" cy="34.4" r="5" fill="#0ea5e9"/><circle cx="65.6" cy="65.6" r="5" fill="#0ea5e9"/><circle cx="34.4" cy="65.6" r="5" fill="#0ea5e9"/><circle cx="65.6" cy="34.4" r="5" fill="#0ea5e9"/></svg>`,
    tool: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="M25 80 L70 35 M70 35 L62 27 M78 43 L70 35 M70 35 L76 29 C79 26, 83 26, 86 29 L86 29 C89 32, 89 36, 86 39 L80 45 Z" stroke-linecap="round" stroke-linejoin="round" fill="rgba(245, 158, 11, 0.05)"/><rect x="15" y="75" width="12" height="12" rx="3" fill="#f59e0b"/></svg>`,
    cable: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M15 50 C 35 25, 45 75, 65 50 S 75 25, 85 50" stroke-linecap="round" fill="none"/><rect x="5" y="44" width="10" height="12" rx="2" fill="#10b981"/><rect x="85" y="44" width="10" height="12" rx="2" fill="#10b981"/><circle cx="10" cy="50" r="2" fill="white"/><circle cx="90" cy="50" r="2" fill="white"/></svg>`,
    computer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#6366f1" stroke-width="2.5"><rect x="20" y="25" width="60" height="40" rx="5" fill="rgba(99, 102, 241, 0.05)"/><path d="M15 75 H85 M35 65 L30 75 M65 65 L70 75" stroke-linecap="round"/><circle cx="50" cy="58" r="2" fill="#6366f1"/></svg>`,
    printer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#3b82f6" stroke-width="2.5"><rect x="25" y="35" width="50" height="30" rx="4" fill="rgba(59, 130, 246, 0.05)"/><path d="M35 35 V20 H65 V35 M30 50 H70 M35 65 H65 V80 H35 Z" stroke-linecap="round"/><circle cx="60" cy="42" r="2" fill="#3b82f6"/></svg>`,
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#94a3b8" stroke-width="2.5"><rect x="25" y="25" width="50" height="50" rx="10" fill="rgba(148, 163, 184, 0.05)"/><path d="M25 45 H75 M50 25 V75" stroke-dasharray="3"/></svg>`
};

const SVG_BLUEPRINTS = {};
for (let key in SVG_RAW_DATA) {
    SVG_BLUEPRINTS[key] = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(SVG_RAW_DATA[key])))}`;
}


// Master inventory data from Excel (Inventario Maestro)
const SEED_INVENTORY = [
    // --- TONERES HP ---
    { id: "inv-m1", name: "TONER", brand: "HP.", model: "81A", sku: "TONHP.81A", location: "A-1-D", minStock: 5, stock: 14, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora Hp, 81A" },
    { id: "inv-m2", name: "TONER", brand: "HP.", model: "55A", sku: "TONHP.55A", location: "A-2-D", minStock: 5, stock: 21, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora Hp 55A" },
    { id: "inv-m3", name: "TONER", brand: "HP.", model: "90A", sku: "TONHP.90A", location: "A-3-D", minStock: 5, stock: 13, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 90A" },
    { id: "inv-m4", name: "TONER", brand: "HP.", model: "37A", sku: "TONHP.37A", location: "A-1-A", minStock: 5, stock: 26, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 37A" },
    { id: "inv-m5", name: "TONER", brand: "HP.", model: "87A", sku: "TONHP.87A", location: "A-2-C", minStock: 5, stock: 15, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 87A" },
    { id: "inv-m6", name: "TONER", brand: "HP.", model: "89A", sku: "TONHP.89A", location: "A-1-C", minStock: 5, stock: 19, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 89A" },
    { id: "inv-m7", name: "TONER", brand: "HP.", model: "32A", sku: "TONHP.32A", location: "A-1-C", minStock: 5, stock: 31, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 32A" },
    { id: "inv-m8", name: "TONER", brand: "HP.", model: "30A", sku: "TONHP.30A", location: "A-2-B", minStock: 5, stock: 13, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 30A" },
    { id: "inv-m9", name: "TONER", brand: "HP.", model: "58A", sku: "TONHP.58A", location: "A-2-B", minStock: 5, stock: 8, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora HP 58A" },
    // --- TONERES OTROS ---
    { id: "inv-m10", name: "TONER", brand: "NEXT", model: "37A", sku: "TONNEX37A", location: "A-1-B", minStock: 5, stock: 4, image: SVG_BLUEPRINTS.printer, description: "Toner generico 37A" },
    { id: "inv-m11", name: "TONER", brand: "TN.", model: "227BK", sku: "TONTN.227", location: "A-3-A", minStock: 0, stock: 2, image: SVG_BLUEPRINTS.printer, description: "Toner TN. 227BK" },
    { id: "inv-m12", name: "TONER", brand: "HE-CF", model: "281X-N", sku: "TONHE-281", location: "A-3-A", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Toner HE 281X" },
    { id: "inv-m13", name: "TONER", brand: "UNISON TONNER", model: "56FU00", sku: "TONUNI56F", location: "A-3-C", minStock: 4, stock: 8, image: SVG_BLUEPRINTS.printer, description: "Toner para Lexmark ms621" },
    { id: "inv-m14", name: "TONER", brand: "UNISON TONNER", model: "66S1000", sku: "TONUNI66S", location: "C-3-C", minStock: 4, stock: 8, image: SVG_BLUEPRINTS.printer, description: "Toner para Lexmark ms631" },
    // --- UNIDADES DE IMAGEN ---
    { id: "inv-m15", name: "UNIDAD DE IMAGEN", brand: "UNISON TONNER", model: "56F0Z00", sku: "UNIUNI56F", location: "C-3-D", minStock: 4, stock: 40, image: SVG_BLUEPRINTS.printer, description: "Unidad de imagen para impresora Lexmark ms621" },
    { id: "inv-m16", name: "UNIDAD DE IMAGEN", brand: "UNISON TONNER", model: "66S0Z00", sku: "UNIUNI66S", location: "C-3-D", minStock: 4, stock: 11, image: SVG_BLUEPRINTS.printer, description: "Unidad de imagen para impresora Lexmark ms631" },
    // --- TONERES COLOR ---
    { id: "inv-m17", name: "TONER", brand: "YELLOW TERRAJET", model: "210A", sku: "TONYEL210", location: "A-2-B", minStock: 5, stock: 26, image: SVG_BLUEPRINTS.printer, description: "Toner HP LaserJet 4000/4050" },
    { id: "inv-m18", name: "TONER", brand: "MAGENTA TERRAJET", model: "210A", sku: "TONMAG210", location: "A-2-B", minStock: 5, stock: 20, image: SVG_BLUEPRINTS.printer, description: "Toner magenta HP 210A" },
    { id: "inv-m19", name: "TONER", brand: "CIAN TERRAJET", model: "210A", sku: "TONCIA210", location: "A-2-B", minStock: 5, stock: 14, image: SVG_BLUEPRINTS.printer, description: "Toner cian HP 210A" },
    { id: "inv-m20", name: "TONER", brand: "BLACK TERRAJET", model: "210A", sku: "TONBLA210", location: "A-2-B", minStock: 5, stock: 12, image: SVG_BLUEPRINTS.printer, description: "Toner negro HP 210A" },
    // --- TONERES HP 923 ---
    { id: "inv-m21", name: "TONER", brand: "CYAN HP", model: "923", sku: "TONCYA923", location: "LOCKER", minStock: 10, stock: 51, image: SVG_BLUEPRINTS.printer, description: "Toner HP OfficeJet 8100-8139 cyan" },
    { id: "inv-m22", name: "TONER", brand: "BLACK HP", model: "923", sku: "TONBLA923", location: "LOCKER", minStock: 10, stock: 45, image: SVG_BLUEPRINTS.printer, description: "Toner HP OfficeJet 8100-8139 negro" },
    { id: "inv-m23", name: "TONER", brand: "MAGENTA HP", model: "923", sku: "TONMAG923", location: "LOCKER", minStock: 10, stock: 50, image: SVG_BLUEPRINTS.printer, description: "Toner HP OfficeJet 8100-8139 magenta" },
    { id: "inv-m24", name: "TONER", brand: "YELLOW HP", model: "923", sku: "TONYEL923", location: "LOCKER", minStock: 10, stock: 53, image: SVG_BLUEPRINTS.printer, description: "Toner HP OfficeJet 8100-8139 amarillo" },
    // --- PAPEL ---
    { id: "inv-m25", name: "PAPEL", brand: "BAALAND", model: "12MM", sku: "PAPBAA12M", location: "A-1-D", minStock: 8, stock: 19, image: SVG_BLUEPRINTS.default, description: "Papel para impresoras pequeñas" },
    { id: "inv-m26", name: "PAPEL", brand: "LABELIFE", model: "18MM", sku: "PAPLAB18M", location: "A-1-D", minStock: 1, stock: 1, image: SVG_BLUEPRINTS.default, description: "Papel 18MM" },
    { id: "inv-m27", name: "PAPEL", brand: "MARK DOMAIN", model: "12MM", sku: "PAPMAR12M", location: "A-1-D", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.default, description: "Papel 12MM Mark Domain" },
    // --- TONERES GREENCYCLE/CANON/EXINK ---
    { id: "inv-m28", name: "TONER", brand: "GREENCYCLE", model: "070", sku: "TONGRE070", location: "A-3-B", minStock: 0, stock: 10, image: SVG_BLUEPRINTS.printer, description: "Toner generico para impresora Canon" },
    { id: "inv-m29", name: "TONER", brand: "CANON", model: "070", sku: "TONCAN070", location: "A-3-B", minStock: 5, stock: 10, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora Canon" },
    { id: "inv-m30", name: "TONER", brand: "PREMIUM TONER", model: "87A", sku: "TONPRE87A", location: "A-3-B", minStock: 5, stock: 5, image: SVG_BLUEPRINTS.printer, description: "Toner para impresora 87A" },
    { id: "inv-m31", name: "TONER", brand: "CYAN EXINK", model: "069", sku: "TONCYA069", location: "E-3-D", minStock: 5, stock: 19, image: SVG_BLUEPRINTS.printer, description: "Toner Cyan 069" },
    { id: "inv-m32", name: "TONER", brand: "YELLOW EXINK", model: "069", sku: "TONYEL069", location: "E-3-D", minStock: 5, stock: 19, image: SVG_BLUEPRINTS.printer, description: "Toner Yellow 069" },
    { id: "inv-m33", name: "TONER", brand: "BLACK EXINK", model: "069", sku: "TONBLA069", location: "E-3-D", minStock: 5, stock: 19, image: SVG_BLUEPRINTS.printer, description: "Toner Black 069" },
    { id: "inv-m34", name: "TONER", brand: "MAGENTA EXINK", model: "069", sku: "TONMAG069", location: "E-3-D", minStock: 5, stock: 19, image: SVG_BLUEPRINTS.printer, description: "Toner Magenta 069" },
    // --- TONERES 812 / 222 ---
    { id: "inv-m35", name: "TONER", brand: "YELLOW", model: "812", sku: "TONYEL812", location: "LOCKER", minStock: 8, stock: 25, image: SVG_BLUEPRINTS.printer, description: "Toner Yellow 812" },
    { id: "inv-m36", name: "TONER", brand: "CYAN", model: "812", sku: "TONCYA812", location: "LOCKER", minStock: 8, stock: 22, image: SVG_BLUEPRINTS.printer, description: "Toner Cyan 812" },
    { id: "inv-m37", name: "TONER", brand: "MAGENTA", model: "812", sku: "TONMAG812", location: "LOCKER", minStock: 8, stock: 24, image: SVG_BLUEPRINTS.printer, description: "Toner Magenta 812" },
    { id: "inv-m38", name: "TONER", brand: "BLACK", model: "812", sku: "TONBLA812", location: "LOCKER", minStock: 8, stock: 25, image: SVG_BLUEPRINTS.printer, description: "Toner Black 812" },
    { id: "inv-m39", name: "TONER", brand: "MAGENTA", model: "222", sku: "TONMAG222", location: "LOCKER", minStock: 8, stock: 45, image: SVG_BLUEPRINTS.printer, description: "Toner Magenta 222" },
    { id: "inv-m40", name: "TONER", brand: "BLACK", model: "222", sku: "TONBLA222", location: "LOCKER", minStock: 8, stock: 26, image: SVG_BLUEPRINTS.printer, description: "Toner Black 222" },
    { id: "inv-m41", name: "TONER", brand: "YELLOW", model: "222", sku: "TONYEL222", location: "LOCKER", minStock: 8, stock: 44, image: SVG_BLUEPRINTS.printer, description: "Toner Yellow 222" },
    { id: "inv-m42", name: "TONER", brand: "CYAN", model: "222", sku: "TONCYA222", location: "LOCKER", minStock: 8, stock: 39, image: SVG_BLUEPRINTS.printer, description: "Toner Cyan 222" },
    // --- IMPRESORAS ---
    { id: "inv-m43", name: "IMPRESORA", brand: "ZEBRA", model: "421ZD", sku: "IMPZEB421", location: "C-2-B C-1-D C-1-C C-1-B", minStock: 0, stock: 82, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra ZD421" },
    { id: "inv-m44", name: "IMPRESORA", brand: "ZEBRA", model: "510ZT", sku: "IMPZEB510", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra ZT510" },
    { id: "inv-m45", name: "IMPRESORA", brand: "ZEBRA", model: "105SL PLUS", sku: "IMPZEB105", location: "CONTEINER", minStock: 0, stock: 5, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra SL105PLUS" },
    { id: "inv-m46", name: "IMPRESORA", brand: "ZEBRA", model: "621ZD", sku: "IMPZEB621", location: "CONTEINER", minStock: 0, stock: 4, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra ZD621" },
    { id: "inv-m47", name: "IMPRESORA", brand: "ZEBRA", model: "X420GX", sku: "IMPZEBX42", location: "CONTEINER", minStock: 0, stock: 3, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra X420GX" },
    { id: "inv-m48", name: "IMPRESORA", brand: "ZEBRA", model: "K420", sku: "IMPZEBK42", location: "CONTEINER", minStock: 0, stock: 10, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra K420" },
    { id: "inv-m49", name: "IMPRESORA", brand: "ZEBRA", model: "620ZD", sku: "IMPZEB620", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra ZD620" },
    { id: "inv-m50", name: "IMPRESORA", brand: "ZEBRA", model: "410ZD", sku: "IMPZEB410", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra ZD410" },
    { id: "inv-m51", name: "IMPRESORA", brand: "ZEBRA", model: "500R", sku: "IMPZEB500", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra 500R" },
    { id: "inv-m52", name: "IMPRESORA", brand: "SATO", model: "CT4-LX", sku: "IMPSATCT4", location: "C-2-C C-1-D E-1-D", minStock: 0, stock: 5, image: SVG_BLUEPRINTS.printer, description: "Impresora SATO CT4-LX" },
    { id: "inv-m53", name: "IMPRESORA", brand: "EPSON", model: "PM400", sku: "IMPEPSPM4", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Impresora Epson PM400" },
    { id: "inv-m54", name: "IMPRESORA", brand: "LEXMARK", model: "621MS", sku: "IMPLEX621", location: "E-2-C E-2-B", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.printer, description: "Impresora Lexmark ms621" },
    { id: "inv-m55", name: "IMPRESORA", brand: "LEXMARK", model: "631MS", sku: "IMPLEX631", location: "CONTEINER", minStock: 0, stock: 5, image: SVG_BLUEPRINTS.printer, description: "Impresora Lexmark ms631" },
    { id: "inv-m56", name: "IMPRESORA", brand: "HP", model: "506M", sku: "IMPHP506", location: "CONTEINER", minStock: 0, stock: 200, image: SVG_BLUEPRINTS.printer, description: "Impresora HP 506M" },
    { id: "inv-m57", name: "IMPRESORA", brand: "HP", model: "507M", sku: "IMPHP507", location: "CONTEINER", minStock: 3, stock: 7, image: SVG_BLUEPRINTS.printer, description: "Impresora HP 507M" },
    { id: "inv-m58", name: "IMPRESORA", brand: "HP", model: "404MN", sku: "IMPHP404", location: "CONTEINER", minStock: 0, stock: 121, image: SVG_BLUEPRINTS.printer, description: "Impresora HP 404MN" },
    { id: "inv-m59", name: "IMPRESORA", brand: "RIO", model: "360PRO", sku: "IMPRIO360", location: "CONTEINER", minStock: 3, stock: 5, image: SVG_BLUEPRINTS.printer, description: "Impresora RIO 360PRO" },
    { id: "inv-m60", name: "IMPRESORA", brand: "ZEBRA", model: "231ZT", sku: "IMPZEB231", location: "E-2-D", minStock: 0, stock: 3, image: SVG_BLUEPRINTS.printer, description: "Impresora Zebra ZT231" },
    { id: "inv-m61", name: "IMPRESORA", brand: "BROTHER", model: "410D", sku: "IMPBRO410", location: "E-3-C", minStock: 0, stock: 70, image: SVG_BLUEPRINTS.printer, description: "Impresora Brother pequeña" },
    { id: "inv-m62", name: "IMPRESORA", brand: "HID", model: "FARGO", sku: "IMPHIDFAR", location: "CONTEINER", minStock: 0, stock: 28, image: SVG_BLUEPRINTS.printer, description: "Impresora HID Fargo" },
    { id: "inv-m63", name: "IMPRESORA", brand: "MAGIC", model: "CARD", sku: "IMPMAGCAR", location: "CONTEINER", minStock: 0, stock: 21, image: SVG_BLUEPRINTS.printer, description: "Impresora MAGICARD" },
    // --- KITS / ACCESORIOS ---
    { id: "inv-m64", name: "KIT", brand: "ZEBRA", model: "421ZD", sku: "KITZEB421", location: "CONTEINER", minStock: 5, stock: 8, image: SVG_BLUEPRINTS.default, description: "Modulo dispensador de etiquetas" },
    { id: "inv-m65", name: "ETHERNET", brand: "ZEBRA", model: "421ZD", sku: "ETHZEB421", location: "E-3-B", minStock: 0, stock: 10, image: SVG_BLUEPRINTS.cable, description: "Puerto de ethernet para impresoras Zebra ZD421 y ZD621" },
    { id: "inv-m66", name: "WIRELESS", brand: "ZEBRA", model: "421ZD", sku: "WIRZEB421", location: "E-3-B", minStock: 0, stock: 14, image: SVG_BLUEPRINTS.cable, description: "Antena de wifi para impresoras Zebra ZD421" },
    // --- MANTENIMIENTO ---
    { id: "inv-m67", name: "MANTENIMIENTO", brand: "LEXMARK", model: "631MS", sku: "MANLEX631", location: "CONTEINER", minStock: 5, stock: 19, image: SVG_BLUEPRINTS.tool, description: "Kit de mantenimiento de la impresora Lexmark" },
    { id: "inv-m68", name: "ROLLER", brand: "SATO", model: "R35351500", sku: "ROLSATR35", location: "C-2-C", minStock: 0, stock: 10, image: SVG_BLUEPRINTS.tool, description: "Rodillo para impresora SATO" },
    { id: "inv-m69", name: "TERMAL", brand: "SATO", model: "G00674002", sku: "TERSATG00", location: "C-2-A", minStock: 0, stock: 89, image: SVG_BLUEPRINTS.tool, description: "Cabezal termico para impresora SATO" },
    { id: "inv-m70", name: "ROLLER", brand: "ZEBRA", model: "X004KJPM33", sku: "ROL421X00", location: "CONTEINER", minStock: 5, stock: 8, image: SVG_BLUEPRINTS.tool, description: "Rodillo para impresora Zebra ZD421" },
    { id: "inv-m71", name: "ROLLER", brand: "ZEBRA", model: "420GX", sku: "ROL420GXT", location: "CONTEINER", minStock: 0, stock: 4, image: SVG_BLUEPRINTS.tool, description: "Rodillo para impresora Zebra GX420T" },
    { id: "inv-m72", name: "TERMAL", brand: "ZEBRA", model: "231ZT", sku: "TER231ZT.", location: "CONTEINER", minStock: 0, stock: 4, image: SVG_BLUEPRINTS.tool, description: "Cabezal termico para impresora Zebra ZT231" },
    { id: "inv-m73", name: "ADAPTOR", brand: "SATO", model: "R36101101", sku: "ADASATR36", location: "CONTEINER", minStock: 0, stock: 12, image: SVG_BLUEPRINTS.tool, description: "Adaptador para insertar ribon" },
    { id: "inv-m74", name: "TERMAL", brand: "ZEBRA", model: "421ZD", sku: "TERZEB421", location: "CONTEINER", minStock: 5, stock: 3, image: SVG_BLUEPRINTS.tool, description: "Cabezal termico para impresora Zebra ZD421" },
    { id: "inv-m75", name: "TERMAL", brand: "ZEBRA", model: "420GK", sku: "TERZEB420", location: "CONTEINER", minStock: 0, stock: 2, image: SVG_BLUEPRINTS.tool, description: "Cabezal termico Zebra 420GK" },
    // --- PANTALLAS / COMPUTADORAS ---
    { id: "inv-m76", name: "PANTALLA", brand: "VIEW SONIC", model: "2447VS", sku: "PANVIE244", location: "C-2-D", minStock: 0, stock: 3, image: SVG_BLUEPRINTS.computer, description: "Pantalla para computadora ViewSonic" },
    { id: "inv-m77", name: "PANTALLA", brand: "VIEW SONIC", model: "2423TD", sku: "PANVIE242", location: "C-2-D", minStock: 1, stock: 2, image: SVG_BLUEPRINTS.computer, description: "Pantalla ViewSonic 2423TD" },
    { id: "inv-m78", name: "PANTALLA", brand: "USADO", model: "GEN", sku: "PANUSAGEN", location: "C-2-D C-3-C", minStock: 0, stock: 2, image: SVG_BLUEPRINTS.computer, description: "Pantalla para computadora - diferentes marcas usadas" },
    { id: "inv-m79", name: "COMPUTADORA", brand: "TOUCH", model: "APVANTECH", sku: "COMTOUAPV", location: "E-1-D", minStock: 0, stock: 6, image: SVG_BLUEPRINTS.computer, description: "Computadora Touch APVANTECH" },
    // --- MOUSE / TECLADO ---
    { id: "inv-m80", name: "MOUSE", brand: "LOGITECH", model: "185M", sku: "MOULOG185", location: "C-3-A", minStock: 0, stock: 4, image: SVG_BLUEPRINTS.computer, description: "Mouse inalambrico Logitech, necesita bateria" },
    { id: "inv-m81", name: "MOUSE", brand: "HALPILT", model: "Q23", sku: "MOUHALQ23", location: "C-3-A", minStock: 0, stock: 76, image: SVG_BLUEPRINTS.computer, description: "Mouse inalambrico recargable USB y Tipo C" },
    { id: "inv-m82", name: "MOUSE", brand: "USADOS", model: "GENERICOS", sku: "MOUUSAGEN", location: "C-3-A", minStock: 0, stock: 19, image: SVG_BLUEPRINTS.computer, description: "Mouse que ya fueron usados, diferentes marcas" },
    { id: "inv-m83", name: "TECLADO", brand: "USADOS", model: "GENERICOS", sku: "TECUSAGEN", location: "C-3-A", minStock: 0, stock: 19, image: SVG_BLUEPRINTS.computer, description: "Teclados usados, diferentes marcas" },
    { id: "inv-m84", name: "TECLADO", brand: "LOGITECH", model: "120K", sku: "TECLOG120", location: "C-3-A", minStock: 0, stock: 19, image: SVG_BLUEPRINTS.computer, description: "Teclado Logitech 120K" },
    // --- MULTICONTACTOS / EXTENSIONES ---
    { id: "inv-m85", name: "MULTICONTACTO", brand: "ELECTRONICS", model: "735", sku: "MULELE735", location: "C-1-A", minStock: 0, stock: 19, image: SVG_BLUEPRINTS.cable, description: "Multicontacto" },
    { id: "inv-m86", name: "MULTICONTACTO", brand: "WOODS", model: "PRO", sku: "MULWOOPRO", location: "JAULA", minStock: 0, stock: 5, image: SVG_BLUEPRINTS.cable, description: "Multicontacto de 9 puertos" },
    { id: "inv-m87", name: "EXTENSION", brand: "GREAT QUALITY", model: "210", sku: "EXTGRE210", location: "JAULA", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Extension con multicontacto" },
    { id: "inv-m88", name: "EXTENSION", brand: "DURAPOWER", model: "100FT", sku: "EXTDUR100", location: "JAULA", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Extension electrica de 100FT" },
    { id: "inv-m89", name: "EXTENSION", brand: "DURAPOWER", model: "50FT", sku: "EXTDUR50F", location: "JAULA", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Extension electrica de 50FT" },
    { id: "inv-m90", name: "EXTENSION", brand: "GENERICO", model: "XXX", sku: "EXTGENXXX", location: "JAULA", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Extension electrica generica" },
    { id: "inv-m91", name: "MULTICONTACTO", brand: "GENERICO", model: "XXX", sku: "MULGENXXX", location: "JAULA", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Multicontacto generico" },
    // --- PORTA LABEL / MOUSEPAD ---
    { id: "inv-m92", name: "PORTA LABEL", brand: "MUNBYN", model: "X002B33JEJ", sku: "PORMUNX00", location: "CONTEINER", minStock: 0, stock: 27, image: SVG_BLUEPRINTS.default, description: "Porta-label para sostener el rollo de labels" },
    { id: "inv-m93", name: "MOUSEPAD", brand: "JIKIO", model: "PAD", sku: "MOUPADJIK", location: "CONTEINER", minStock: 0, stock: 70, image: SVG_BLUEPRINTS.default, description: "Base para los mouse" },
    // --- SCANNERS ---
    { id: "inv-m94", name: "SCANNER", brand: "EYOYO", model: "EY-2200", sku: "SCAEOYEY-", location: "C-3-A", minStock: 0, stock: 10, image: SVG_BLUEPRINTS.default, description: "Scanner de marca EYOYO" },
    { id: "inv-m95", name: "SCANNER", brand: "ZEBRA", model: "DS2208", sku: "SCAZEBDS2", location: "C-3-A", minStock: 5, stock: 3, image: SVG_BLUEPRINTS.default, description: "Scanner ZEBRA, lee codigos de barra y QR" },
    // --- LAPTOPS / COMPUTADORAS ---
    { id: "inv-m96", name: "LAPTOP", brand: "ASUS", model: "CHROMEBOOK", sku: "LAPASUCHR", location: "E-1-B", minStock: 0, stock: 4, image: SVG_BLUEPRINTS.computer, description: "Laptop Asus Chromebook" },
    { id: "inv-m97", name: "LAPTOP", brand: "HP", model: "CHROMEBOOK", sku: "LAPHPCHR", location: "E-1-A", minStock: 0, stock: 2, image: SVG_BLUEPRINTS.computer, description: "Laptop HP Chromebook" },
    { id: "inv-m98", name: "COMPUTADORA", brand: "LENOVO", model: "THINKCENTER", sku: "COMLENTHI", location: "XXX", minStock: 0, stock: 28, image: SVG_BLUEPRINTS.computer, description: "Computadora Lenovo ThinkCenter" },
    { id: "inv-m99", name: "COMPUTADORA", brand: "HP", model: "I7CORE", sku: "COMHP.I7C", location: "CONTEINER", minStock: 0, stock: 21, image: SVG_BLUEPRINTS.computer, description: "Computadora HP I7Core" },
    // --- ACCESORIOS COMPUTADORA ---
    { id: "inv-m100", name: "ESTANTE", brand: "WALI", model: "STT003", sku: "ESTWALST", location: "C-2-D", minStock: 1, stock: 14, image: SVG_BLUEPRINTS.default, description: "Estante para monitor" },
    { id: "inv-m101", name: "DOCK", brand: "HP", model: "GB4943", sku: "DOCHPGB4", location: "CONTEINER", minStock: 0, stock: 8, image: SVG_BLUEPRINTS.computer, description: "Dock para ampliar conexiones de laptop" },
    { id: "inv-m102", name: "DOCK", brand: "GENERICO", model: "XXX", sku: "DOCGENXXX", location: "CONTEINER", minStock: 0, stock: 89, image: SVG_BLUEPRINTS.computer, description: "Dock de diferentes marcas" },
    { id: "inv-m103", name: "CARGADOR", brand: "DELL", model: "TIPO-C", sku: "CARDELTIC", location: "CONTEINER", minStock: 5, stock: 8, image: SVG_BLUEPRINTS.cable, description: "Cargador de computadora tipo c" },
    { id: "inv-m104", name: "RECEPTOR", brand: "PROGLOV", model: "X001", sku: "RECPROX00", location: "CONTEINER", minStock: 0, stock: 3, image: SVG_BLUEPRINTS.default, description: "Receptor bluetooth para scanners ProGlove" },
    // --- BATERIAS ---
    { id: "inv-m105", name: "BATERIA", brand: "GENERICO", model: "5EFG2", sku: "BATGEN5EF", location: "A-2-A", minStock: 0, stock: 2, image: SVG_BLUEPRINTS.default, description: "Batería genérica" },
    { id: "inv-m106", name: "BATERIA", brand: "KASTAR", model: "MH-HBAAA3.6", sku: "BATKASMH-", location: "A-2-A", minStock: 0, stock: 12, image: SVG_BLUEPRINTS.default, description: "Bateria para los scanners symbol" },
    { id: "inv-m107", name: "BATERIA", brand: "SYMBOL", model: "82-111734-01", sku: "BATSYM82-", location: "E-1-C", minStock: 0, stock: 8, image: SVG_BLUEPRINTS.default, description: "Bateria Symbol 82-111734-01" },
    { id: "inv-m108", name: "BATERIA", brand: "SYMBOL", model: "SYM 90001", sku: "BATSYMSYM", location: "E-1-C", minStock: 0, stock: 76, image: SVG_BLUEPRINTS.default, description: "Bateria Symbol SYM 90001" },
    // --- MULTIPORT / OTROS ---
    { id: "inv-m109", name: "MULTIPORT", brand: "CISCO", model: "5PORT", sku: "MULCIS5PO", location: "CONTEINER", minStock: 0, stock: 19, image: SVG_BLUEPRINTS.cable, description: "Switch multiport Cisco" },
    { id: "inv-m110", name: "MICROFONO", brand: "GENERICO", model: "XXXXXX", sku: "MICXXXXXX", location: "CONTEINER", minStock: 0, stock: 5, image: SVG_BLUEPRINTS.default, description: "Microfono para bocinas" },
    { id: "inv-m111", name: "MULTIUSB", brand: "BETTO", model: "3.0", sku: "MULBET3.0", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Multipuerto de USB para computadoras" },
    { id: "inv-m112", name: "CARGADOR", brand: "PROGLOV", model: "MARK", sku: "CARPROCAR", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.cable, description: "Base de cargador para scanners ProGlove" },
    { id: "inv-m113", name: "RIBBON", brand: "GENERICO", model: "300XXX", sku: "RIB300XXX", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.default, description: "Toner para impresora de tarjetas" },
    { id: "inv-m114", name: "SCANNER", brand: "COGNEX", model: "ODDM", sku: "SCACOGOD", location: "USING IT", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.default, description: "Scanner para el conveyer" },
    { id: "inv-m115", name: "MEMORIA", brand: "SD6", model: "64GB", sku: "MEMSD64GB", location: "CONTEINER", minStock: 0, stock: 4, image: SVG_BLUEPRINTS.default, description: "Memoria SD de 64 GB" },
    { id: "inv-m116", name: "BASCULA", brand: "GENERICO", model: "XXXXXX", sku: "BASXXXXXX", location: "CONTEINER", minStock: 0, stock: 1, image: SVG_BLUEPRINTS.default, description: "Bascula para pesar" },
    { id: "inv-m117", name: "ANTENA", brand: "ZEBRA", model: "FXP2004", sku: "ANTZEBFXP", location: "CONTEINER", minStock: 0, stock: 7, image: SVG_BLUEPRINTS.cable, description: "Antena Zebra FXP2004" },
    // --- CARGADORES SCANNER ---
    { id: "inv-m118", name: "CARGADOR", brand: "ZEBRA", model: "8000TC", sku: "CARSCA800", location: "C-1-D", minStock: 0, stock: 89, image: SVG_BLUEPRINTS.cable, description: "Cargador para scanners tipo telefono modelo TC800" },
    { id: "inv-m119", name: "CARGADOR", brand: "ZEBRA", model: "22/27TC", sku: "CARSCA22/", location: "C-1-D", minStock: 0, stock: 8, image: SVG_BLUEPRINTS.cable, description: "Cargador para scanners tipo telefono modelo TC22/27" },
    { id: "inv-m120", name: "CARGADOR", brand: "ZEBRA", model: "TRG", sku: "CARTRG", location: "CONTEINER", minStock: 0, stock: 5, image: SVG_BLUEPRINTS.cable, description: "Cargador para scanner" },
    // --- SENSOR ---
    { id: "inv-m121", name: "SENSOR", brand: "SLS", model: "100", sku: "SENSLS100", location: "CONTEINER", minStock: 2, stock: 4, image: SVG_BLUEPRINTS.sensor, description: "Sensor para el conveyer" },
    // --- KITS MANTENIMIENTO HP/LEXMARK ---
    { id: "inv-m122", name: "MANTENIMIENTO", brand: "HP", model: "B3M77A", sku: "MANHP.B3M", location: "C-3-B", minStock: 5, stock: 2, image: SVG_BLUEPRINTS.tool, description: "Kit de Mantenimiento HP" },
    { id: "inv-m123", name: "MANTENIMIENTO", brand: "LEXMARK", model: "621MS", sku: "MANLEX621", location: "C-3-B", minStock: 0, stock: 2, image: SVG_BLUEPRINTS.tool, description: "Kit de mantenimiento para la Lexmark MS621" }
];

    // NOTE: Master inventory above loaded from Inventario Maestro.xlsx

    // Legacy seed items kept for reference (not loaded by default)
    const _LEGACY_ITEMS = [
    {
        id: "inv-1",
        name: "Sensor Óptico Industrial",
        brand: "Autonics",
        model: "BJ15M-TDT",
        sku: "SEN928X",
        location: "Pasillo A - Estante 2",
        minStock: 8,
        stock: 15,
        image: SVG_BLUEPRINTS.sensor,
        description: "Sensor fotoeléctrico de barrera con distancia de detección de hasta 15 metros."
    },
    {
        id: "inv-5",
        name: "Cable Conector M12 de 4 Pines",
        brand: "Banner",
        model: "MQDC-406",
        sku: "CON-382-Y",
        location: "Pasillo A - Estante 1",
        minStock: 15,
        stock: 24,
        image: SVG_BLUEPRINTS.cable,
        description: "Cable de conexión directa de acoplamiento rápido M12 con recubrimiento de poliuretano altamente flexible."
    }
];

const SEED_ORDERS = [
    {
        id: "ORD-93021",
        date: "2026-06-08T10:14:00-07:00",
        requester: "Juan Operario",
        requesterShift: "Matutino",
        itemName: "Cilindro Neumático",
        model: "SMC-CDQ2B",
        qty: 3,
        totalCost: 180.00,
        link: "https://www.smc.eu",
        status: "Solicitado", // Needs Admin approval
        log: "Solicitud iniciada por Juan."
    },
    {
        id: "ORD-12932",
        date: "2026-06-07T14:32:00-07:00",
        requester: "Carlos Supervisor",
        requesterShift: "Vespertino",
        itemName: "PLC Micro820",
        model: "2080-LC20-20QWB",
        qty: 1,
        totalCost: 350.00,
        link: "https://www.rockwellautomation.com",
        status: "En Espera", // Approved, waiting for receiving
        log: "Aprobado por Ana Administradora el 2026-06-07."
    },
    {
        id: "ORD-02931",
        date: "2026-06-05T09:00:00-07:00",
        requester: "Ana Administradora",
        requesterShift: "Mixto",
        itemName: "Rodamiento Rígido de Bolas",
        model: "6206-ZZ",
        qty: 10,
        totalCost: 150.00,
        link: "https://www.nsk.com",
        status: "Recibido", // Fully processed history
        log: "Entregado a planta y existencias añadidas al inventario."
    }
];

const SEED_REPORTS = [
    {
        id: "REP-1",
        date: "2026-06-09",
        username: "Juan Operario",
        shift: "Matutino",
        activities: [
            { time: "08:00", description: "Inicio de turno y revisión de bandas transportadoras. Se detectó desgaste menor en el rodamiento del motor de la línea 2." },
            { time: "09:30", description: "Se marcó la baja de stock del rodamiento NSK 6206-ZZ en el sistema de inventario." }
        ]
    },
    {
        id: "REP-2",
        date: "2026-06-08",
        username: "Carlos Supervisor",
        shift: "Vespertino",
        activities: [
            { time: "14:15", description: "Ingreso de turno. Revisión de seguridad y control de personal." },
            { time: "15:45", description: "Mantenimiento preventivo en la celda robotizada 1 realizado sin incidencias. Se lubricaron los ejes principales." },
            { time: "18:00", description: "Se solicitó reabastecimiento de sensores ópticos BJ15M ya que quedan pocas unidades." }
        ]
    },
    {
        id: "REP-3",
        date: "2026-06-08",
        username: "Carlos Supervisor",
        shift: "Vespertino",
        activities: [
            { time: "20:10", description: "Cierre de turno. Producción completada al 102% de la meta de la tarde. Se entregó la línea limpia al equipo nocturno." }
        ]
    }
];


/* ==========================================================================
   TRANSLATION SYSTEM (ES / EN)
   ========================================================================== */
let currentLanguage = localStorage.getItem("mi_language") || "es";

const TRANSLATIONS = {
    es: {
        "login.title": "MasterInventory",
        "login.subtitle": "Ingresa tus credenciales para acceder al sistema",
        "login.user": "Usuario",
        "login.password": "Contraseña",
        "login.error": "Usuario o contraseña incorrectos",
        "login.btn": "Iniciar Sesión",
        "nav.inventory": "Inventario",
        "nav.orders": "Órdenes y Pedidos",
        "nav.report": "Reporte Diario",
        "nav.users": "Usuarios",
        "header.greeting": "Hola, {name}",
        "header.subtitle": "Turno: {shift} | Acceso: Nivel {level}",
        "header.searchPlaceholder": "Búsqueda inteligente por nombre, marca, modelo, SKU...",
        "header.level": "Nivel {level}",
        "inventory.title": "Gestión de Artículos",
        "inventory.subtitle": "Visualiza, busca y actualiza los artículos en stock.",
        "inventory.addBtn": "Agregar Componente",
        "inventory.activeFilters": "Filtros activos:",
        "inventory.emptyTitle": "No se encontraron artículos",
        "inventory.emptySubtitle": "Intenta con otros términos de búsqueda o agrega un nuevo componente.",
        "inventory.lowStock": "Bajo Stock",
        "inventory.outOfStock": "Agotado",
        "inventory.sufficientStock": "Suficiente",
        "orders.title": "Órdenes y Pedidos",
        "orders.subtitle": "Solicita artículos y realiza seguimiento en tiempo real.",
        "orders.newOrderTitle": "Solicitar Nuevo Artículo",
        "orders.itemNameLabel": "Nombre del artículo",
        "orders.itemNamePlaceholder": "Ej: Sensor Proximidad",
        "orders.modelLabel": "Modelo",
        "orders.modelPlaceholder": "Ej: PNP-NO-M12",
        "orders.quantityLabel": "Cantidad",
        "orders.costLabel": "Costo total (USD)",
        "orders.costPlaceholder": "Ej: 45.50",
        "orders.linkLabel": "Link de compra / Referencia",
        "orders.linkPlaceholder": "Ej: https://tienda.com/sensor",
        "orders.sendBtn": "Enviar Solicitud",
        "orders.pendingOrdersTitle": "Pedidos Pendientes",
        "orders.statusSolicitado": "Solicitado",
        "orders.statusEspera": "En Espera (Aprobados)",
        "orders.statusRecibido": "Recibido",
        "orders.historyTitle": "Historial de Pedidos",
        "orders.historyNote": "Solo el Nivel 3 puede eliminar registros de este historial",
        "orders.tableId": "ID Pedido",
        "orders.tableDate": "Fecha",
        "orders.tableRequester": "Solicitado por",
        "orders.tableItem": "Artículo",
        "orders.tableCost": "Costo",
        "orders.tableStatus": "Estado Final",
        "orders.tableHistoryLog": "Historial",
        "orders.tableAction": "Acción",
        "orders.emptyHistory": "El historial está vacío.",
        "orders.noLog": "Sin bitácora.",
        "reports.title": "Reporte de Turno",
        "reports.subtitle": "Registra tus actividades por hora y revisa la bitácora del día.",
        "reports.registerTitle": "Registrar Actividad",
        "reports.associate": "Asociado: {name}",
        "reports.shift": "Turno: {shift}",
        "reports.hourlyLogLabel": "Cronograma de Actividades por Hora",
        "reports.activityPlaceholder": "Actividad realizada a esta hora...",
        "reports.addRowBtn": "Añadir Hora al Cronograma",
        "reports.saveBtn": "Registrar Cronograma Completo",
        "reports.blockedTitle": "Formulario Restringido",
        "reports.blockedText1": "El formulario de reporte de turno está reservado únicamente para el <strong>Nivel 1 (Operadores)</strong> y <strong>Nivel 2 (Supervisores)</strong>.",
        "reports.blockedText2": "Como Administrador (Nivel 3), tu rol es de auditoría y puedes revisar todos los reportes en el panel lateral.",
        "reports.viewTitle": "Historial de Bitácoras (Nivel 2 y 3)",
        "reports.viewTitleL1": "Mis Reportes de Turno",
        "reports.emptyState": "No se han registrado reportes en el sistema.",
        "reports.bulletSummaryTitle": "Resumen Simple",
        "reports.l1ReportTag": "Reporte de Operario",
        "reports.l1BulletSummary": "Reportes de Nivel 1",
        "users.title": "Administración de Usuarios",
        "users.subtitle": "Registra y administra las cuentas de asociados para el acceso al sistema.",
        "users.registerTitle": "Registrar Nuevo Asociado",
        "users.nameLabel": "Nombre del Asociado",
        "users.namePlaceholder": "Ej: Juan Pérez",
        "users.positionLabel": "Posición / Cargo",
        "users.positionPlaceholder": "Ej: Operador de Planta",
        "users.shiftLabel": "Turno",
        "users.levelLabel": "Nivel de Acceso",
        "users.usernameLabel": "Usuario (Login)",
        "users.usernamePlaceholder": "Ej: jperez",
        "users.passwordLabel": "Contraseña",
        "users.errorUsernameExists": "El nombre de usuario ya existe.",
        "users.createBtn": "Crear Cuenta",
        "users.registeredTitle": "Asociados Registrados",
        "users.tableUser": "Asociado / Cargo",
        "users.tableShift": "Turno",
        "users.tableLevel": "Nivel",
        "users.tableUsername": "Usuario",
        "users.tableAction": "Acción",
        "users.defaultUser": "Por defecto",
        "shift.morning": "Matutino",
        "shift.evening": "Vespertino",
        "shift.night": "Nocturno",
        "shift.mixed": "Mixto",
        "level.1": "Nivel 1 - Operador",
        "level.2": "Nivel 2 - Supervisor",
        "level.3": "Nivel 3 - Administrador",
        "level.1.short": "Nivel 1 (Operario)",
        "level.2.short": "Nivel 2 (Supervisor)",
        "level.3.short": "Nivel 3 (Admin)",
        "shift.matutino": "Matutino",
        "shift.vespertino": "Vespertino",
        "shift.nocturno": "Nocturno",
        "shift.mixto": "Mixto",
        "detail.title": "Detalle de Componente",
        "detail.editBtn": "Editar",
        "detail.minStockLabel": "Stock Mínimo",
        "detail.locationLabel": "Ubicación",
        "detail.skuLabel": "SKU",
        "detail.descLabel": "Descripción",
        "detail.adjustTitle": "Ajuste de Inventario (Entrada / Salida)",
        "detail.adjustNote": "Para habilitar las operaciones de inventario, escanee primero el SKU del artículo.",
        "detail.scanPlaceholder": "Ingresa o escanea el SKU...",
        "detail.simulateScanBtn": "Simular Escaneo",
        "detail.waitingSku": "Esperando escaneo de SKU...",
        "detail.correctSku": "Escaneo correcto. Operación desbloqueada.",
        "detail.wrongSku": "SKU no coincide con el artículo.",
        "detail.adjustQtyLabel": "Selecciona la cantidad a ajustar:",
        "detail.currentStock": "Stock Actual: {stock}",
        "detail.subStockBtn": "Retirar del Stock",
        "detail.addStockBtn": "Agregar al Stock",
        "modal.addTitle": "Agregar Nuevo Componente",
        "modal.editTitle": "Editar Componente",
        "modal.nameLabel": "Nombre del Artículo *",
        "modal.namePlaceholder": "Ej: Rodamiento de Esferas",
        "modal.brandLabel": "Marca *",
        "modal.brandPlaceholder": "Ej: SKF",
        "modal.modelLabel": "Modelo *",
        "modal.modelPlaceholder": "Ej: 6204-2RSH",
        "modal.skuLabel": "SKU (9 caracteres en Mayúsculas) *",
        "modal.skuPlaceholder": "Generar o escribir...",
        "modal.generateBtn": "Generar",
        "modal.locationLabel": "Ubicación física *",
        "modal.locationPlaceholder": "Ej: Pasillo A - Estante 3",
        "modal.minStockLabel": "Stock Mínimo *",
        "modal.minStockPlaceholder": "Ej: 5",
        "modal.initialStockLabel": "Stock Inicial *",
        "modal.initialStockPlaceholder": "Ej: 20",
        "modal.currentStockLabel": "Stock Actual *",
        "modal.imageLabel": "Imagen del Artículo *",
        "modal.tabUpload": "Subir Archivo",
        "modal.tabIcon": "Seleccionar Icono",
        "modal.tabUrl": "URL",
        "modal.tabKeep": "Mantener Actual",
        "modal.dragText": "Arrastra una imagen aquí o haz click para seleccionar",
        "modal.noFileSelected": "Ningún archivo seleccionado",
        "modal.iconComputer": "Computación",
        "modal.iconPrinter": "Impresora",
        "modal.iconSensor": "Sensor",
        "modal.iconBearing": "Rodamiento",
        "modal.iconTool": "Herramienta",
        "modal.iconCable": "Conector",
        "modal.previewLabel": "Previsualización del plano generado:",
        "modal.descLabel": "Descripción General",
        "modal.descPlaceholder": "Describe brevemente el uso, especificaciones o detalles técnicos del componente.",
        "modal.cancelBtn": "Cancelar",
        "modal.saveBtn": "Guardar Componente",
        "modal.saveChangesBtn": "Guardar Cambios",
        "modal.keepImageText": "Se conservará esta imagen a menos que selecciones otra pestaña.",
        "modal.urlPlaceholder": "https://ejemplo.com/imagen.jpg",
        "toast.loginSuccessTitle": "Inicio de Sesión",
        "toast.loginSuccessDesc": "¡Bienvenido(a) de nuevo, {name}!",
        "toast.logoutTitle": "Sesión Cerrada",
        "toast.logoutDesc": "Has salido del sistema de inventario.",
        "toast.restrictionAdminOnly": "Acceso denegado. Pestaña de administración reservada para Nivel 3.",
        "toast.restrictionAddComponents": "Solo el Nivel 2 y 3 pueden agregar componentes.",
        "toast.imageLoaded": "Archivo de imagen leído correctamente.",
        "toast.imageFormatIncorrect": "Por favor, arrastra únicamente archivos de imagen.",
        "toast.skuGenerated": "Código: {sku}",
        "toast.skuErrorLength": "El SKU no puede exceder los 9 caracteres y símbolos.",
        "toast.skuErrorDuplicate": "Ya existe otro artículo registrado con ese SKU.",
        "toast.itemUpdated": "Componente \"{name}\" guardado correctamente.",
        "toast.itemCreated": "Componente \"{name}\" registrado con éxito.",
        "toast.scanSimulated": "Código SKU leído correctamente.",
        "toast.entrySuccess": "Se agregaron {qty} unidades a {name}.",
        "toast.invalidAdjustment": "No hay suficiente mercancía para realizar el retiro de stock.",
        "toast.exitSuccess": "Se retiraron {qty} unidades de {name}.",
        "toast.lowStock": "¡Atención! El stock de \"{name}\" ha descendido del mínimo establecido ({min}).",
        "toast.orderSuccess": "La solicitud para \"{name}\" ha sido creada en fase 1.",
        "toast.orderApprove": "El pedido {id} fue aprobado y pasa a 'En Espera'.",
        "toast.orderReject": "El pedido {id} fue rechazado.",
        "toast.orderReceived": "Marcado recibido. Se sumaron automáticamente +{qty} unidades a \"{name}\" en stock (Stock anterior: {prev}).",
        "toast.orderReceivedSimple": "Pedido {id} marcado como recibido con éxito.",
        "toast.orderDelete": "Registro de pedido eliminado permanentemente.",
        "toast.reportMinRow": "El cronograma debe tener al menos una hora registrada.",
        "toast.restrictionReport": "Solo los operadores (Nivel 1) y supervisores (Nivel 2) llenan reportes de turno.",
        "toast.reportEmpty": "Debe agregar al menos una actividad al cronograma.",
        "toast.reportSuccess": "El cronograma de actividades fue ingresado a la bitácora diaria.",
        "toast.userCreated": "El asociado {name} fue registrado con nivel {level}.",
        "toast.userDeleted": "La cuenta del usuario \"{username}\" fue borrada.",
        "toast.userLevelChanged": "El nivel de acceso de \"{name}\" fue cambiado a Nivel {level}.",
        "toast.commentEmpty": "Por favor escribe algún texto antes de enviar.",
        "toast.commentSuccess": "Retroalimentación agregada correctamente.",
        "toast.masterUserDeleteError": "No se puede eliminar el usuario maestro.",
        
        "detail.deleteBtn": "Eliminar",
        "search.label": "Búsqueda:",
        "min.label": "Mín: <strong>{count} uds</strong>",
        "reports.summaryOfActivities": "Resumen de Actividades",
        "reports.ofShift": " del Turno",
        "reports.commentsTitle": "Comentarios de Supervisión",
        "reports.commentsEmpty": "Sin comentarios de retroalimentación.",
        "reports.commentPlaceholder": "Escribe un comentario...",
        "reports.commentBtnTitle": "Comentar",
        "reports.timelineTitle": "Cronograma de Turno",
        "users.confirmDelete": "¿Estás seguro de que deseas eliminar la cuenta del usuario \"{username}\"?",
        "orders.confirmDelete": "¿Estás seguro de que deseas eliminar permanentemente el pedido {id} del historial? Esta acción no se puede deshacer.",
        "orders.logApprove": "Aprobado por {name}. Esperando recepción física.",
        "orders.logReject": "Rechazado por {name} el {date}.",
        "orders.logReceived": "Recibido y marcado en planta por {name}. Bitácora cerrada.",
        "modal.editUserTitle": "Editar Asociado",
        "users.editUserBtnTitle": "Editar usuario",
        "toast.userCreatedTitle": "Usuario Creado",
        "toast.userDeletedTitle": "Usuario Eliminado",
        "toast.userLevelChangedTitle": "Nivel Actualizado",
        "toast.userUpdatedTitle": "Usuario Actualizado",
        "toast.userUpdatedDesc": "La información de {name} fue actualizada.",
        "toast.masterUserDeleteErrorTitle": "Error",
        "toast.entryTitle": "Entrada de Inventario",
        "toast.exitTitle": "Salida de Inventario",
        "toast.invalidAdjustmentTitle": "Ajuste Inválido",
        "toast.scanSimulatedTitle": "Escaneo Simulado",
        "toast.scanSimulatedDesc": "Código SKU leído correctamente.",
        "toast.orderSuccessTitle": "Pedido Solicitado",
        "toast.orderApproveTitle": "Pedido Aprobado",
        "toast.orderRejectTitle": "Pedido Rechazado",
        "toast.orderReceivedTitle": "Recepción e Inventario",
        "toast.orderReceivedSimpleTitle": "Recepción Completada",
        "toast.orderDeleteTitle": "Historial Limpiado",
        "toast.reportMinRowTitle": "Mínimo Requerido",
        "toast.reportEmptyTitle": "Formulario Vacío",
        "toast.reportSuccessTitle": "Cronograma Registrado",
        "toast.commentEmptyTitle": "Comentario Vacío",
        "toast.commentSuccessTitle": "Comentario Enviado",
        "toast.itemUpdatedTitle": "Componente Actualizado",
        "toast.itemCreatedTitle": "Componente Creado",
        "toast.restrictionTitle": "Restricción",
        "toast.lowStockTitle": "Stock Bajo",
        "toast.itemDeletedTitle": "Artículo Eliminado",
        "toast.itemDeleted": "El artículo \"{name}\" fue eliminado del inventario.",
        "Admin": "Admin",
        "Supervisor": "Supervisor",
        
        "nav.printerCleaning": "Limpieza de Impresora",
        "nav.rfidVerification": "Verificación RFID",
        "demo.title": "Modo Demostración",
        "limpieza.title": "Limpieza de Impresora",
        "limpieza.subtitle": "Registro de limpieza de cabezales y rodillos de impresoras.",
        "limpieza.registerTitle": "Registrar Limpieza",
        "limpieza.listLabel": "Lista de Impresoras Limpiadas",
        "limpieza.addRowBtn": "Añadir Fila",
        "limpieza.saveBtn": "Registrar Limpiezas",
        "limpieza.blockedTitle": "Formulario Reservado",
        "limpieza.blockedText1": "El registro de limpieza de impresora está reservado únicamente para el <strong>Nivel 1 (Operadores)</strong>.",
        "limpieza.blockedText2": "Como Supervisor (Nivel 2) o Administrador (Nivel 3), tu rol es de auditoría y puedes revisar los registros en el panel de historial.",
        "limpieza.historyTitle": "Historial de Limpiezas (Nivel 2 y 3)",
        "limpieza.emptyState": "No se han registrado limpiezas en el sistema.",
        "toast.limpiezaSuccessTitle": "Limpiezas Registradas",
        "toast.limpiezaSuccessDesc": "Se han registrado {count} limpiezas en la bitácora de hoy.",
        "limpieza.placeholderEstacion": "Estación",
        "limpieza.placeholderTipo": "Tipo de impresora",
        "limpieza.placeholderIp": "IP Address",
        "limpieza.placeholderResponsable": "Responsable",
        "limpieza.editTitle": "Editar Registro de Limpieza",
        
        "rfid.title": "Verificación RFID",
        "rfid.subtitle": "Validación de antenas, lectores y coberturas RFID.",
        "rfid.registerTitle": "Registrar Verificación RFID",
        "rfid.listLabel": "Lista de Verificaciones RFID",
        "rfid.addRowBtn": "Añadir Fila",
        "rfid.saveBtn": "Registrar Verificaciones",
        "rfid.blockedTitle": "Formulario Reservado",
        "rfid.blockedText1": "El registro de verificación RFID está reservado únicamente para los <strong>Niveles 1 (Operadores) y 2 (Supervisores)</strong>.",
        "rfid.blockedText2": "Como Administrador (Nivel 3), tu rol es de auditoría y puedes revisar los registros en el panel de historial.",
        "rfid.historyTitle": "Historial de Verificaciones (Nivel 2 y 3)",
        "rfid.emptyState": "No se han registrado verificaciones en el sistema.",
        "toast.rfidSuccessTitle": "Verificaciones Registradas",
        "toast.rfidSuccessDesc": "Se han registrado {count} verificaciones RFID en la bitácora de hoy.",
        "rfid.placeholderEstacion": "Estación",
        "rfid.placeholderIp": "IP Address",
        "rfid.editTitle": "Editar Verificación RFID",
        
        "Jefe de Planta": "Jefe de Planta",
        "Supervisor de Turno A": "Supervisor de Turno A",
        "Técnico de Mantenimiento": "Técnico de Mantenimiento",
        "Superusuario": "Superusuario",
        "theme.title": "Tema Visual",
        "theme.classic": "Clásico Azul",
        "theme.emerald": "Bosque Esmeralda",
        "theme.sand": "Arena Cálida",
        "theme.lavender": "Sueño Lavanda",
        "theme.sunset": "Atardecer Coral",
        "inventory.movementsBtn": "Movimientos",
        "movements.title": "Registro de Movimientos",
        "movements.downloadPdf": "Descargar PDF",
        "movements.tableDate": "Fecha",
        "movements.tableUser": "Usuario",
        "movements.tableItem": "Componente",
        "movements.tableSku": "SKU",
        "movements.tableType": "Tipo",
        "movements.tableQty": "Cant.",
        "movements.tableStock": "Stock (Previo → Nuevo)",
        "movements.empty": "No se han registrado movimientos de inventario.",
        "detail.pdfBoxTitle": "Ficha Técnica en PDF",
        "detail.pdfBoxDesc": "Descarga un documento PDF completo con la información de este artículo.",
        "detail.downloadPdf": "Descargar PDF",
        "limpieza.downloadPdf": "Descargar PDF",
        "rfid.downloadPdf": "Descargar PDF",
        "orders.downloadPdf": "Descargar PDF",
        "reports.downloadPdfSection": "Exportar Bitácoras a PDF",
        "reports.filterUser": "Por Usuario",
        "reports.allUsers": "Todos los usuarios",
        "reports.filterDay": "Por Día",
        "reports.filterWeek": "Por Semana",
        "reports.downloadPdfBtn": "Descargar PDF",
        "users.emailLabel": "Correo Electrónico",
        "users.emailPlaceholder": "Ej: juan.perez@empresa.com"
    },
    en: {
        "login.title": "MasterInventory",
        "login.subtitle": "Enter your credentials to access the system",
        "login.user": "Username",
        "login.password": "Password",
        "login.error": "Incorrect username or password",
        "login.btn": "Log In",
        "nav.inventory": "Inventory",
        "nav.orders": "Orders & Requisitions",
        "nav.report": "Daily Report",
        "nav.users": "Users",
        "header.greeting": "Hello, {name}",
        "header.subtitle": "Shift: {shift} | Access: Level {level}",
        "header.searchPlaceholder": "Smart search by name, brand, model, SKU...",
        "header.level": "Level {level}",
        "inventory.title": "Item Management",
        "inventory.subtitle": "View, search and update items in stock.",
        "inventory.addBtn": "Add Component",
        "inventory.activeFilters": "Active filters:",
        "inventory.emptyTitle": "No items found",
        "inventory.emptySubtitle": "Try other search terms or add a new component.",
        "inventory.lowStock": "Low Stock",
        "inventory.outOfStock": "Out of Stock",
        "inventory.sufficientStock": "In Stock",
        "orders.title": "Orders & Requisitions",
        "orders.subtitle": "Request items and track in real time.",
        "orders.newOrderTitle": "Request New Item",
        "orders.itemNameLabel": "Item Name",
        "orders.itemNamePlaceholder": "E.g., Proximity Sensor",
        "orders.modelLabel": "Model",
        "orders.modelPlaceholder": "E.g., PNP-NO-M12",
        "orders.quantityLabel": "Quantity",
        "orders.costLabel": "Total Cost (USD)",
        "orders.costPlaceholder": "E.g., 45.50",
        "orders.linkLabel": "Purchase Link / Reference",
        "orders.linkPlaceholder": "E.g., https://store.com/sensor",
        "orders.sendBtn": "Send Request",
        "orders.pendingOrdersTitle": "Pending Orders",
        "orders.statusSolicitado": "Requested",
        "orders.statusEspera": "On Hold (Approved)",
        "orders.statusRecibido": "Received",
        "orders.historyTitle": "Orders History",
        "orders.historyNote": "Only Level 3 can delete records from this history",
        "orders.tableId": "Order ID",
        "orders.tableDate": "Date",
        "orders.tableRequester": "Requested by",
        "orders.tableItem": "Item",
        "orders.tableCost": "Cost",
        "orders.tableStatus": "Final Status",
        "orders.tableHistoryLog": "History",
        "orders.tableAction": "Action",
        "orders.emptyHistory": "The history is empty.",
        "orders.noLog": "No log.",
        "reports.title": "Shift Report",
        "reports.subtitle": "Log your hourly activities and review the daily log.",
        "reports.registerTitle": "Log Activity",
        "reports.associate": "Associate: {name}",
        "reports.shift": "Shift: {shift}",
        "reports.hourlyLogLabel": "Hourly Activity Schedule",
        "reports.activityPlaceholder": "Activity performed at this hour...",
        "reports.addRowBtn": "Add Hour to Schedule",
        "reports.saveBtn": "Log Complete Schedule",
        "reports.blockedTitle": "Restricted Form",
        "reports.blockedText1": "The shift report form is reserved only for <strong>Level 1 (Operators)</strong> and <strong>Level 2 (Supervisors)</strong>.",
        "reports.blockedText2": "As Administrator (Level 3), your role is audit and you can review all reports in the side panel.",
        "reports.viewTitle": "Log History (Level 2 & 3)",
        "reports.viewTitleL1": "My Shift Reports",
        "reports.emptyState": "No reports have been logged in the system.",
        "reports.bulletSummaryTitle": "Simple Summary",
        "reports.l1ReportTag": "Operator Report",
        "reports.l1BulletSummary": "Level 1 Reports",
        "users.title": "User Administration",
        "users.subtitle": "Register and manage associate accounts for system access.",
        "users.registerTitle": "Register New Associate",
        "users.nameLabel": "Associate Name",
        "users.namePlaceholder": "E.g., John Doe",
        "users.positionLabel": "Position / Role",
        "users.positionPlaceholder": "E.g., Plant Operator",
        "users.shiftLabel": "Shift",
        "users.levelLabel": "Access Level",
        "users.usernameLabel": "Username (Login)",
        "users.usernamePlaceholder": "E.g., jdoe",
        "users.passwordLabel": "Password",
        "users.errorUsernameExists": "The username already exists.",
        "users.createBtn": "Create Account",
        "users.registeredTitle": "Registered Associates",
        "users.tableUser": "Associate / Position",
        "users.tableShift": "Shift",
        "users.tableLevel": "Level",
        "users.tableUsername": "Username",
        "users.tableAction": "Action",
        "users.defaultUser": "Default",
        "shift.morning": "Morning",
        "shift.evening": "Evening",
        "shift.night": "Night",
        "shift.mixed": "Mixed",
        "level.1": "Level 1 - Operator",
        "level.2": "Level 2 - Supervisor",
        "level.3": "Level 3 - Administrator",
        "level.1.short": "Level 1 (Operator)",
        "level.2.short": "Level 2 (Supervisor)",
        "level.3.short": "Level 3 (Admin)",
        "shift.matutino": "Morning",
        "shift.vespertino": "Evening",
        "shift.nocturno": "Night",
        "shift.mixto": "Mixed",
        "detail.title": "Component Details",
        "detail.editBtn": "Edit",
        "detail.minStockLabel": "Minimum Stock",
        "detail.locationLabel": "Location",
        "detail.skuLabel": "SKU",
        "detail.descLabel": "Description",
        "detail.adjustTitle": "Inventory Adjustment (In / Out)",
        "detail.adjustNote": "To enable inventory operations, first scan the item's SKU.",
        "detail.scanPlaceholder": "Enter or scan the SKU...",
        "detail.simulateScanBtn": "Simulate Scan",
        "detail.waitingSku": "Waiting for SKU scan...",
        "detail.correctSku": "Correct scan. Operation unlocked.",
        "detail.wrongSku": "SKU does not match the item.",
        "detail.adjustQtyLabel": "Select quantity to adjust:",
        "detail.currentStock": "Current Stock: {stock}",
        "detail.subStockBtn": "Remove from Stock",
        "detail.addStockBtn": "Add to Stock",
        "modal.addTitle": "Add New Component",
        "modal.editTitle": "Edit Component",
        "modal.nameLabel": "Item Name *",
        "modal.namePlaceholder": "E.g., Ball Bearing",
        "modal.brandLabel": "Brand *",
        "modal.brandPlaceholder": "E.g., SKF",
        "modal.modelLabel": "Model *",
        "modal.modelPlaceholder": "E.g., 6204-2RSH",
        "modal.skuLabel": "SKU (9 Uppercase characters) *",
        "modal.skuPlaceholder": "Generate or write...",
        "modal.generateBtn": "Generate",
        "modal.locationLabel": "Physical Location *",
        "modal.locationPlaceholder": "E.g., Aisle A - Shelf 3",
        "modal.minStockLabel": "Minimum Stock *",
        "modal.minStockPlaceholder": "E.g., 5",
        "modal.initialStockLabel": "Initial Stock *",
        "modal.initialStockPlaceholder": "E.g., 20",
        "modal.currentStockLabel": "Current Stock *",
        "modal.imageLabel": "Item Image *",
        "modal.tabUpload": "Upload File",
        "modal.tabIcon": "Select Icon",
        "modal.tabUrl": "URL",
        "modal.tabKeep": "Keep Current",
        "modal.dragText": "Drag an image here or click to select",
        "modal.noFileSelected": "No file selected",
        "modal.iconComputer": "Computing",
        "modal.iconPrinter": "Printer",
        "modal.iconSensor": "Sensor",
        "modal.iconBearing": "Bearing",
        "modal.iconTool": "Tool",
        "modal.iconCable": "Connector",
        "modal.previewLabel": "Preview of generated layout:",
        "modal.descLabel": "General Description",
        "modal.descPlaceholder": "Briefly describe the use, specs, or technical details of the component.",
        "modal.cancelBtn": "Cancel",
        "modal.saveBtn": "Save Component",
        "modal.saveChangesBtn": "Save Changes",
        "modal.keepImageText": "This image will be kept unless you select another tab.",
        "modal.urlPlaceholder": "https://example.com/image.jpg",
        "toast.loginSuccessTitle": "Logged In",
        "toast.loginSuccessDesc": "Welcome back, {name}!",
        "toast.logoutTitle": "Logged Out",
        "toast.logoutDesc": "You have logged out of the inventory system.",
        "toast.restrictionAdminOnly": "Access denied. Administration tab reserved for Level 3.",
        "toast.restrictionAddComponents": "Only Level 2 and 3 can add components.",
        "toast.imageLoaded": "Image file loaded successfully.",
        "toast.imageFormatIncorrect": "Please drag image files only.",
        "toast.skuGenerated": "Code: {sku}",
        "toast.skuErrorLength": "The SKU cannot exceed 9 characters and symbols.",
        "toast.skuErrorDuplicate": "Another item with that SKU is already registered.",
        "toast.itemUpdated": "Component \"{name}\" successfully saved.",
        "toast.itemCreated": "Component \"{name}\" successfully registered.",
        "toast.scanSimulated": "SKU code read successfully.",
        "toast.entrySuccess": "Added {qty} units to {name}.",
        "toast.invalidAdjustment": "Not enough stock to remove.",
        "toast.exitSuccess": "Removed {qty} units from {name}.",
        "toast.lowStock": "Attention! Stock of \"{name}\" has fallen below the minimum ({min}).",
        "toast.orderSuccess": "Request for \"{name}\" created in phase 1.",
        "toast.orderApprove": "Order {id} approved and moved to 'On Hold'.",
        "toast.orderReject": "Order {id} was rejected.",
        "toast.orderReceived": "Marked received. Automatically added +{qty} units to \"{name}\" in stock (Previous stock: {prev}).",
        "toast.orderReceivedSimple": "Order {id} successfully marked as received.",
        "toast.orderDelete": "Order record permanently removed.",
        "toast.reportMinRow": "The schedule must have at least one hour logged.",
        "toast.restrictionReport": "Only operators (Level 1) and supervisors (Level 2) fill shift reports.",
        "toast.reportEmpty": "Must add at least one activity to the schedule.",
        "toast.reportSuccess": "Hourly activities successfully logged to daily log.",
        "toast.userCreated": "Associate {name} registered with level {level}.",
        "toast.userDeleted": "User account \"{username}\" was deleted.",
        "toast.userLevelChanged": "Access level of \"{name}\" updated to Level {level}.",
        "toast.commentEmpty": "Please enter some text before sending.",
        "toast.commentSuccess": "Feedback successfully added.",
        "toast.masterUserDeleteError": "Cannot delete master user.",
        
        "detail.deleteBtn": "Delete",
        "search.label": "Search:",
        "min.label": "Min: <strong>{count} pcs</strong>",
        "reports.summaryOfActivities": "Summary of Activities",
        "reports.ofShift": " of the Shift",
        "reports.commentsTitle": "Supervision Comments",
        "reports.commentsEmpty": "No feedback comments.",
        "reports.commentPlaceholder": "Write a comment...",
        "reports.commentBtnTitle": "Comment",
        "reports.timelineTitle": "Shift Timeline",
        "users.confirmDelete": "Are you sure you want to delete the user account \"{username}\"?",
        "orders.confirmDelete": "Are you sure you want to permanently delete order {id} from the history? This action cannot be undone.",
        "orders.logApprove": "Approved by {name}. Waiting for physical receiving.",
        "orders.logReject": "Rejected by {name} on {date}.",
        "orders.logReceived": "Received and marked in plant by {name}. Log closed.",
        "modal.editUserTitle": "Edit Associate",
        "users.editUserBtnTitle": "Edit user",
        "toast.userCreatedTitle": "User Created",
        "toast.userDeletedTitle": "User Deleted",
        "toast.userLevelChangedTitle": "Level Updated",
        "toast.userUpdatedTitle": "User Updated",
        "toast.userUpdatedDesc": "Associate {name}'s information was updated.",
        "toast.masterUserDeleteErrorTitle": "Error",
        "toast.entryTitle": "Inventory Entry",
        "toast.exitTitle": "Inventory Withdrawal",
        "toast.invalidAdjustmentTitle": "Invalid Adjustment",
        "toast.scanSimulatedTitle": "Scan Simulated",
        "toast.scanSimulatedDesc": "SKU code read successfully.",
        "toast.orderSuccessTitle": "Order Requested",
        "toast.orderApproveTitle": "Order Approved",
        "toast.orderRejectTitle": "Order Rejected",
        "toast.orderReceivedTitle": "Receiving & Inventory",
        "toast.orderReceivedSimpleTitle": "Receiving Completed",
        "toast.orderDeleteTitle": "History Cleared",
        "toast.reportMinRowTitle": "Minimum Required",
        "toast.reportEmptyTitle": "Empty Form",
        "toast.reportSuccessTitle": "Schedule Logged",
        "toast.commentEmptyTitle": "Empty Comment",
        "toast.commentSuccessTitle": "Comment Sent",
        "toast.itemUpdatedTitle": "Component Updated",
        "toast.itemCreatedTitle": "Component Created",
        "toast.restrictionTitle": "Restriction",
        "toast.lowStockTitle": "Low Stock",
        "toast.itemDeletedTitle": "Item Deleted",
        "toast.itemDeleted": "The item \"{name}\" was deleted from the inventory.",
        "Admin": "Admin",
        "Supervisor": "Supervisor",
        
        "nav.printerCleaning": "Printer Cleaning",
        "nav.rfidVerification": "RFID Verification",
        "demo.title": "Demo Mode",
        "limpieza.title": "Printer Cleaning",
        "limpieza.subtitle": "Printer head and roller cleaning logs.",
        "limpieza.registerTitle": "Log Printer Cleaning",
        "limpieza.listLabel": "List of Cleaned Printers",
        "limpieza.addRowBtn": "Add Row",
        "limpieza.saveBtn": "Log Cleanings",
        "limpieza.blockedTitle": "Restricted Form",
        "limpieza.blockedText1": "The printer cleaning form is reserved only for <strong>Level 1 (Operators)</strong>.",
        "limpieza.blockedText2": "As Supervisor (Level 2) or Administrator (Level 3), your role is audit and you can review all cleaning records in the history panel.",
        "limpieza.historyTitle": "Cleaning History (Level 2 & 3)",
        "limpieza.emptyState": "No cleanings have been registered in the system.",
        "toast.limpiezaSuccessTitle": "Cleanings Logged",
        "toast.limpiezaSuccessDesc": "{count} cleanings successfully registered to today's log.",
        "limpieza.placeholderEstacion": "Station",
        "limpieza.placeholderTipo": "Printer Type",
        "limpieza.placeholderIp": "IP Address",
        "limpieza.placeholderResponsable": "Responsible",
        "limpieza.editTitle": "Edit Cleaning Record",
        
        "rfid.title": "RFID Verification",
        "rfid.subtitle": "Validation of antennas, readers, and RFID coverages.",
        "rfid.registerTitle": "Log RFID Verification",
        "rfid.listLabel": "List of RFID Verifications",
        "rfid.addRowBtn": "Add Row",
        "rfid.saveBtn": "Log Verifications",
        "rfid.blockedTitle": "Restricted Form",
        "rfid.blockedText1": "The RFID verification form is reserved only for <strong>Level 1 (Operators) and Level 2 (Supervisors)</strong>.",
        "rfid.blockedText2": "As Administrator (Level 3), your role is audit and you can review all verification records in the history panel.",
        "rfid.historyTitle": "Verification History (Level 2 & 3)",
        "rfid.emptyState": "No RFID verifications have been logged.",
        "toast.rfidSuccessTitle": "Verifications Logged",
        "toast.rfidSuccessDesc": "{count} RFID verifications successfully registered to today's log.",
        "rfid.placeholderEstacion": "Station",
        "rfid.placeholderIp": "IP Address",
        "rfid.editTitle": "Edit RFID Verification",
        
        "Jefe de Planta": "Plant Manager",
        "Supervisor de Turno A": "Shift A Supervisor",
        "Técnico de Mantenimiento": "Maintenance Technician",
        "Superusuario": "Superuser",
        "theme.title": "Visual Theme",
        "theme.classic": "Classic Slate",
        "theme.emerald": "Emerald Garden",
        "theme.sand": "Warm Sand",
        "theme.lavender": "Lavender Dream",
        "theme.sunset": "Sunset Coral",
        "inventory.movementsBtn": "Movements",
        "movements.title": "Transaction Log",
        "movements.downloadPdf": "Download PDF",
        "movements.tableDate": "Date",
        "movements.tableUser": "User",
        "movements.tableItem": "Item",
        "movements.tableSku": "SKU",
        "movements.tableType": "Type",
        "movements.tableQty": "Qty",
        "movements.tableStock": "Stock (Prev → New)",
        "movements.empty": "No inventory transactions registered.",
        "detail.pdfBoxTitle": "PDF Spec Sheet",
        "detail.pdfBoxDesc": "Download a complete PDF document with this item's info.",
        "detail.downloadPdf": "Download PDF",
        "limpieza.downloadPdf": "Download PDF",
        "rfid.downloadPdf": "Download PDF",
        "orders.downloadPdf": "Download PDF",
        "reports.downloadPdfSection": "Export Logs to PDF",
        "reports.filterUser": "By User",
        "reports.allUsers": "All users",
        "reports.filterDay": "By Day",
        "reports.filterWeek": "By Week",
        "reports.downloadPdfBtn": "Download PDF",
        "users.emailLabel": "Email Address",
        "users.emailPlaceholder": "E.g., john.doe@company.com"
    }
};

function t(key, replacements = {}) {
    let translation = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS["es"]?.[key] || key;
    for (const [placeholder, val] of Object.entries(replacements)) {
        translation = translation.replace(`{${placeholder}}`, val);
    }
    return translation;
}

function setTheme(theme) {
    document.body.classList.remove("theme-classic", "theme-emerald", "theme-sand", "theme-lavender", "theme-sunset");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("mi_theme", theme);
    
    document.querySelectorAll(".theme-opt-btn").forEach(btn => {
        if (btn.getAttribute("data-theme") === theme) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    localStorage.setItem("mi_language", currentLanguage);
    applyLanguage();
    if (currentUser) {
        showApp();
    }
}

function applyLanguage() {
    // 1. Update elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        const translation = t(key);
        if (translation && translation !== key) {
            if (key.includes("blockedText")) {
                elem.innerHTML = translation;
            } else {
                elem.textContent = translation;
            }
        }
    });

    // 2. Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-i18n-placeholder");
        const translation = t(key);
        if (translation && translation !== key) {
            elem.setAttribute("placeholder", translation);
        }
    });

    // 2.5. Update tooltips / title attributes
    document.querySelectorAll("[data-i18n-title]").forEach(elem => {
        const key = elem.getAttribute("data-i18n-title");
        const translation = t(key);
        if (translation && translation !== key) {
            elem.setAttribute("title", translation);
        }
    });

    // 3. Update specific labels
    const loginLangLabel = document.getElementById("login-lang-label");
    if (loginLangLabel) {
        loginLangLabel.innerText = currentLanguage === "es" ? "EN" : "ES";
    }
    
    const sidebarLangLabel = document.getElementById("sidebar-lang-label");
    if (sidebarLangLabel) {
        sidebarLangLabel.innerText = currentLanguage === "es" ? "Switch to English" : "Cambiar a Español";
    }
}

/* ==========================================================================
   APP STATE MANAGEMENT
   ========================================================================== */
let currentUser = null;
let currentTab = "inventario";
let selectedItem = null;
let isSkuScanned = false;
let searchQuery = "";
let uploadedImageBase64 = ""; // Holds local uploaded base64 data
let expandedReportsDates = new Set();
let expandedReportsIds = new Set();

/* ==========================================================================
   INIT DATABASE & STATE RESTORATION
   ========================================================================== */
function initDb() {
    // Version key: bump this whenever SEED_INVENTORY is updated so master data reloads
    const DB_VERSION = "v2.0-maestro";
    const storedVersion = localStorage.getItem("mi_db_version");

    if (!localStorage.getItem("mi_users")) {
        localStorage.setItem("mi_users", JSON.stringify(SEED_USERS));
    }
    // Force-reload inventory if DB version changed (new master inventory)
    if (!localStorage.getItem("mi_inventory") || storedVersion !== DB_VERSION) {
        localStorage.setItem("mi_inventory", JSON.stringify(SEED_INVENTORY));
        localStorage.setItem("mi_db_version", DB_VERSION);
    }
    if (!localStorage.getItem("mi_orders")) {
        localStorage.setItem("mi_orders", JSON.stringify(SEED_ORDERS));
    }
    if (!localStorage.getItem("mi_reports")) {
        localStorage.setItem("mi_reports", JSON.stringify(SEED_REPORTS));
    }
    if (!localStorage.getItem("mi_limpiezas")) {
        localStorage.setItem("mi_limpiezas", JSON.stringify([]));
    }
    if (!localStorage.getItem("mi_rfids")) {
        localStorage.setItem("mi_rfids", JSON.stringify([]));
    }
    if (!localStorage.getItem("mi_movements")) {
        const mockMovements = [
            {
                id: "mov-init-1",
                itemId: "inv-m118",
                itemName: "CARGADOR",
                sku: "CARSCA800",
                type: "add",
                qty: 15,
                previousStock: 74,
                newStock: 89,
                username: "Supervisor Juan",
                date: new Date(Date.now() - 3600000 * 24).toISOString()
            },
            {
                id: "mov-init-2",
                itemId: "inv-m121",
                itemName: "SENSOR",
                sku: "SENSLS100",
                type: "sub",
                qty: 2,
                previousStock: 6,
                newStock: 4,
                username: "Supervisor Juan",
                date: new Date(Date.now() - 3600000 * 12).toISOString()
            },
            {
                id: "mov-init-3",
                itemId: "inv-m122",
                itemName: "MANTENIMIENTO",
                sku: "MANHP.B3M",
                type: "create",
                qty: 2,
                previousStock: 0,
                newStock: 2,
                username: "Admin Master",
                date: new Date(Date.now() - 3600000 * 2).toISOString()
            }
        ];
        localStorage.setItem("mi_movements", JSON.stringify(mockMovements));
    }
}

function logMovement(itemId, itemName, sku, type, qty, previousStock, newStock) {
    const movements = JSON.parse(localStorage.getItem("mi_movements")) || [];
    const newMovement = {
        id: `mov-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        itemId,
        itemName,
        sku,
        type, // "add", "sub", "create", "edit", "received"
        qty,
        previousStock,
        newStock,
        username: currentUser ? currentUser.name : "System",
        date: new Date().toISOString()
    };
    movements.unshift(newMovement);
    localStorage.setItem("mi_movements", JSON.stringify(movements));
}

document.addEventListener("DOMContentLoaded", () => {
    initDb();
    applyLanguage(); // Apply language first
    
    // Initialize Theme
    const savedTheme = localStorage.getItem("mi_theme") || "classic";
    setTheme(savedTheme === "dark" ? "classic" : savedTheme);
    
    loadActiveSession();
    lucide.createIcons();
});

function loadActiveSession() {
    const session = sessionStorage.getItem("mi_active_user") || localStorage.getItem("mi_active_user");
    if (session) {
        currentUser = JSON.parse(session);
        if (currentUser.username === "1234" && sessionStorage.getItem("mi_demo_active") === "true") {
            const demoLevel = parseInt(sessionStorage.getItem("mi_demo_level"));
            if (demoLevel) currentUser.level = demoLevel;
        }
        showApp();
    } else {
        showLogin();
    }
}

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */
function handleLogin(e) {
    e.preventDefault();
    const usernameInput = document.getElementById("login-username").value.trim();
    const passwordInput = document.getElementById("login-password").value.trim();
    const errorMsg = document.getElementById("login-error");

    let matchedUser = null;
    
    // Master User check (hardcoded, hidden)
    if (usernameInput === "1234" && passwordInput === "1234") {
        matchedUser = {
            username: "1234",
            password: "1234",
            name: "Usuario Maestro",
            position: "Superusuario",
            shift: "Mixto",
            level: 3
        };
    } else {
        const users = JSON.parse(localStorage.getItem("mi_users")) || [];
        matchedUser = users.find(u => u.username.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput);
    }

    if (matchedUser) {
        currentUser = matchedUser;
        // Save to sessionStorage (transient session)
        sessionStorage.setItem("mi_active_user", JSON.stringify(currentUser));
        errorMsg.style.display = "none";
        
        // Clear login form
        document.getElementById("login-username").value = "";
        document.getElementById("login-password").value = "";
        
        showApp();
        showToast(t('toast.loginSuccessTitle'), t('toast.loginSuccessDesc', {name: currentUser.name}), "success");
    } else {
        errorMsg.style.display = "block";
    }
}

function handleLogout() {
    sessionStorage.removeItem("mi_active_user");
    localStorage.removeItem("mi_active_user");
    sessionStorage.removeItem("mi_demo_active");
    sessionStorage.removeItem("mi_demo_level");
    currentUser = null;
    showLogin();
    showToast(t('toast.logoutTitle'), t('toast.logoutDesc'), "warning");
}

function showLogin() {
    document.getElementById("login-screen").style.display = "flex";
    document.getElementById("app-container").classList.add("hidden");
    document.body.className = ""; // Reset levels class
}

function showApp() {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app-container").classList.remove("hidden");
    
    // Set dynamic body class for CSS permission rule matching
    document.body.className = `level-${currentUser.level}`;
    
    // Fill user info in layout
    document.getElementById("user-display-name").innerText = currentUser.name;
    
    const levelText = currentUser.level === 3 ? t('level.3.short') : currentUser.level === 2 ? t('level.2.short') : t('level.1.short');
    document.getElementById("user-display-role").innerText = `${t(currentUser.position) || currentUser.position} • ${levelText}`;
    
    // Init initials avatar
    const initials = currentUser.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    document.getElementById("user-avatar-initials").innerText = initials;

    // Fill Header details
    document.getElementById("header-greeting").innerText = t('header.greeting', {name: currentUser.name.split(" ")[0]});
    document.getElementById("header-subtitle").innerText = t('header.subtitle', {
        shift: t('shift.' + currentUser.shift.toLowerCase()), 
        level: currentUser.level
    });
    document.getElementById("level-indicator-text").innerText = t('header.level', {level: currentUser.level});

    // Demo Mode control for Master User (1234)
    const demoContainer = document.getElementById("demo-mode-container");
    const isMasterUser = currentUser.username === "1234" || sessionStorage.getItem("mi_demo_active") === "true";
    if (isMasterUser) {
        demoContainer.classList.remove("hidden");
        const demoActive = sessionStorage.getItem("mi_demo_active") === "true";
        document.getElementById("demo-mode-toggle").checked = demoActive;
        const selector = document.getElementById("demo-level-selector-container");
        if (demoActive) {
            selector.classList.remove("hidden");
            document.getElementById("demo-level-select").value = currentUser.level;
        } else {
            selector.classList.add("hidden");
        }
    } else {
        demoContainer.classList.add("hidden");
    }

    // Permissions toggles
    // Admin only tab (Level 3)
    const adminNav = document.getElementById("nav-usuarios");
    if (currentUser.level === 3) {
        adminNav.classList.remove("hidden");
    } else {
        adminNav.classList.add("hidden");
        if (currentTab === "usuarios") {
            switchTab("inventario");
        }
    }

    // Daily report form availability
    const reportFormCard = document.getElementById("report-form-container");
    const reportLevel3Blocked = document.getElementById("report-form-level3-blocked");
    const reportsViewContainer = document.getElementById("reports-view-container");

    if (currentUser.level === 3) {
        reportFormCard.classList.add("hidden");
        reportLevel3Blocked.classList.remove("hidden");
    } else {
        reportFormCard.classList.remove("hidden");
        reportLevel3Blocked.classList.add("hidden");
        // Update user & shift on report form details
        document.getElementById("report-form-username").innerText = t('reports.associate', {name: currentUser.name});
        document.getElementById("report-form-shift").innerText = t('reports.shift', {shift: t('shift.' + currentUser.shift.toLowerCase())});
    }

    // Reports list is now visible to all levels (Level 1 can see their own reports)
    reportsViewContainer.classList.remove("hidden");

    // Limpieza de impresora form availability & history visibility
    const limpiezaFormContainer = document.getElementById("limpieza-form-container");
    const limpiezaFormBlocked = document.getElementById("limpieza-form-blocked");
    const limpiezaViewContainer = document.getElementById("limpieza-view-container");

    if (currentUser.level === 1) {
        limpiezaFormContainer.classList.remove("hidden");
        limpiezaFormBlocked.classList.add("hidden");
    } else {
        limpiezaFormContainer.classList.add("hidden");
        limpiezaFormBlocked.classList.remove("hidden");
    }

    if (currentUser.level >= 2) {
        limpiezaViewContainer.classList.remove("hidden");
    } else {
        limpiezaViewContainer.classList.add("hidden");
    }

    // RFID verification form availability & history visibility
    const rfidFormContainer = document.getElementById("rfid-form-container");
    const rfidFormBlocked = document.getElementById("rfid-form-blocked");
    const rfidViewContainer = document.getElementById("rfid-view-container");

    if (currentUser.level === 1 || currentUser.level === 2) {
        rfidFormContainer.classList.remove("hidden");
        rfidFormBlocked.classList.add("hidden");
    } else {
        rfidFormContainer.classList.add("hidden");
        rfidFormBlocked.classList.remove("hidden");
    }

    if (currentUser.level >= 2) {
        rfidViewContainer.classList.remove("hidden");
    } else {
        rfidViewContainer.classList.add("hidden");
    }

    // Refresh display
    renderCurrentTab();
}

/* ==========================================================================
   NAVIGATION TAB ROUTING
   ========================================================================== */
function switchTab(tabName) {
    if (tabName === "usuarios" && currentUser.level !== 3) {
        showToast("Restricción", "Acceso denegado. Pestaña de administración reservada para Nivel 3.", "danger");
        return;
    }

    currentTab = tabName;
    
    // Update active nav styling
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    document.getElementById(`nav-${tabName}`).classList.add("active");

    // Hide search bar if not in Inventory tab (keeps clean header look)
    const searchBar = document.getElementById("search-bar-container");
    if (tabName === "inventario") {
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
    } else {
        searchBar.style.visibility = "hidden";
        searchBar.style.opacity = "0";
    }

    // Show/Hide content sections
    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
    });
    document.getElementById(`content-${tabName}`).classList.add("active");

    renderCurrentTab();
}

function renderCurrentTab() {
    if (currentTab === "inventario") {
        renderInventory();
    } else if (currentTab === "ordenes") {
        renderOrders();
    } else if (currentTab === "reporte") {
        renderReports();
    } else if (currentTab === "usuarios") {
        renderUsers();
    } else if (currentTab === "limpieza") {
        renderLimpieza();
    } else if (currentTab === "rfid") {
        renderRfid();
    }
}

/* ==========================================================================
   TAB 1: INVENTARIO LOGIC
   ========================================================================== */
function renderInventory() {
    const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
    const grid = document.getElementById("inventory-list-grid");
    const emptyState = document.getElementById("inventory-empty-state");
    const activeFiltersRow = document.getElementById("filter-tags-row");
    const activeFiltersContainer = document.getElementById("filter-tags-container");
    
    grid.innerHTML = "";
    
    // Apply filters
    let filteredItems = items;
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.brand.toLowerCase().includes(query) ||
            item.model.toLowerCase().includes(query) ||
            item.sku.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );

        // Render search tag
        activeFiltersRow.classList.remove("hidden");
        activeFiltersContainer.innerHTML = `
            <span class="tag-badge">
                ${t('search.label')} "${searchQuery}"
                <button onclick="clearSearch()">&times;</button>
            </span>
        `;
    } else {
        activeFiltersRow.classList.add("hidden");
    }

    if (filteredItems.length === 0) {
        grid.style.display = "none";
        emptyState.classList.remove("hidden");
        return;
    }

    grid.style.display = "grid";
    emptyState.classList.add("hidden");

    filteredItems.forEach(item => {
        const isLow = item.stock <= item.minStock;
        const isCritical = item.stock === 0;
        
        let stockClass = "stock-ok";
        let stockLabel = t('inventory.sufficientStock');
        
        if (isCritical) {
            stockClass = "stock-critical";
            stockLabel = t('inventory.outOfStock');
        } else if (isLow) {
            stockClass = "stock-low";
            stockLabel = t('inventory.lowStock');
        }

        const card = document.createElement("div");
        card.className = "item-card";
        card.onclick = () => openItemDetail(item.id);
        
        card.innerHTML = `
            <div class="item-card-image">
                <img src="${item.image || SVG_BLUEPRINTS.default}" alt="${item.name}">
                <span class="item-card-sku-tag font-mono">${item.sku}</span>
            </div>
            <div class="item-card-body">
                <span class="item-card-model">${item.brand} • ${item.model}</span>
                <h4 class="item-card-title">${item.name}</h4>
                <div class="item-card-specs">
                    <span>${t('min.label', {count: item.minStock})}</span>
                    <span class="location-indicator"><i data-lucide="map-pin"></i> ${item.location}</span>
                </div>
            </div>
            <div class="item-card-footer">
                <span class="stock-indicator ${stockClass}">${item.stock} ${currentLanguage === 'es' ? 'unidades' : 'units'}</span>
                <span class="subtext-note" style="padding: 2px 6px; font-size: 0.72rem;">${stockLabel}</span>
            </div>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

function handleSmartSearch(e) {
    searchQuery = e.target.value;
    const clearBtn = document.getElementById("clear-search-btn");
    if (searchQuery.trim() !== "") {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
    renderInventory();
}

function clearSearch() {
    searchQuery = "";
    document.getElementById("smart-search-input").value = "";
    document.getElementById("clear-search-btn").style.display = "none";
    renderInventory();
}

/* Modal Open/Close core */
function openModal(modalId) {
    if (modalId === "add-item-modal") {
        if (currentUser.level < 2) {
            showToast("Acceso Restringido", "Solo el Nivel 2 y 3 pueden agregar componentes.", "danger");
            return;
        }
        document.getElementById("modal-add-item").classList.add("active");
        resetAddForm();
    }
}

function closeModal(modalId) {
    if (modalId === "add-item-modal") {
        document.getElementById("modal-add-item").classList.remove("active");
    } else if (modalId === "item-detail-modal") {
        document.getElementById("modal-item-detail").classList.remove("active");
        selectedItem = null;
        isSkuScanned = false;
    } else if (modalId === "edit-item-modal") {
        document.getElementById("modal-edit-item").classList.remove("active");
    } else if (modalId === "edit-user-modal") {
        document.getElementById("modal-edit-user").classList.remove("active");
    } else if (modalId === "edit-limpieza-modal") {
        document.getElementById("modal-edit-limpieza").classList.remove("active");
    } else if (modalId === "edit-rfid-modal") {
        document.getElementById("modal-edit-rfid").classList.remove("active");
    } else if (modalId === "movements") {
        document.getElementById("modal-movements").classList.remove("active");
    }
}

function openMovementsModal() {
    if (currentUser.level < 2) {
        showToast(t('toast.restrictionTitle') || "Acceso Restringido", "Solo el Nivel 2 y 3 pueden acceder al registro de movimientos.", "danger");
        return;
    }
    
    // Render movements
    renderMovements();
    
    // Open modal
    document.getElementById("modal-movements").classList.add("active");
    
    // Re-create icons for download
    lucide.createIcons();
}

function renderMovements() {
    const movements = JSON.parse(localStorage.getItem("mi_movements")) || [];
    const tbody = document.getElementById("movements-table-body");
    const emptyState = document.getElementById("movements-empty-state");
    
    tbody.innerHTML = "";
    
    if (movements.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }
    emptyState.classList.add("hidden");
    
    movements.forEach(mov => {
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid rgba(203, 213, 225, 0.2)";
        
        const formattedDate = new Date(mov.date).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        
        let typeBadge = "";
        if (mov.type === "add") {
            typeBadge = `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--color-success); font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight:600;">${currentLanguage === 'es' ? 'Entrada' : 'Addition'}</span>`;
        } else if (mov.type === "sub") {
            typeBadge = `<span class="badge" style="background: rgba(239, 68, 68, 0.15); color: var(--color-danger); font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight:600;">${currentLanguage === 'es' ? 'Retiro' : 'Removal'}</span>`;
        } else if (mov.type === "create") {
            typeBadge = `<span class="badge" style="background: rgba(79, 70, 229, 0.15); color: var(--color-primary); font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight:600;">${currentLanguage === 'es' ? 'Creación' : 'Creation'}</span>`;
        } else if (mov.type === "edit") {
            typeBadge = `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: var(--color-warning); font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight:600;">${currentLanguage === 'es' ? 'Edición' : 'Edit'}</span>`;
        } else if (mov.type === "received") {
            typeBadge = `<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: var(--color-info); font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; font-weight:600;">${currentLanguage === 'es' ? 'Recibido' : 'Received'}</span>`;
        }
        
        tr.innerHTML = `
            <td style="padding: 10px; color: var(--color-text-muted); font-size: 0.8rem;">${formattedDate}</td>
            <td style="padding: 10px; font-weight: 600;">${mov.username}</td>
            <td style="padding: 10px;">${mov.itemName}</td>
            <td style="padding: 10px;"><code>${mov.sku}</code></td>
            <td style="padding: 10px;">${typeBadge}</td>
            <td style="padding: 10px; font-weight: 700; text-align: center;">${mov.qty}</td>
            <td style="padding: 10px; color: var(--color-text-muted); text-align: center;">${mov.previousStock} → ${mov.newStock}</td>
        `;
        tbody.appendChild(tr);
    });
}

let editedImageBase64 = "";

/* ==========================================================================
   DYNAMIC BLUEPRINT SVG GENERATION (WITH UNIQUE ID SERIALS)
   ========================================================================== */
function generateBlueprintSVG(type) {
    const randomSerial = Math.floor(100 + Math.random() * 900);
    const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
    
    let svg = "";
    if (type === "computer") {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#6366f1" stroke-width="2.5">
            <rect x="15" y="20" width="70" height="46" rx="6" fill="rgba(99, 102, 241, 0.05)"/>
            <path d="M10 76 H90 M35 66 L30 76 M65 66 L70 76" stroke-linecap="round"/>
            <line x1="20" y1="52" x2="80" y2="52" stroke-dasharray="2" stroke="#818cf8"/>
            <text x="22" y="38" fill="#818cf8" font-family="monospace" font-size="6" font-weight="bold">SYS-PC#${randomSerial}</text>
            <text x="22" y="46" fill="#818cf8" font-family="monospace" font-size="5">ADDR: 0x${randomHex}</text>
            <circle cx="50" cy="58" r="2" fill="#6366f1"/>
        </svg>`;
    } else if (type === "printer") {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#3b82f6" stroke-width="2.5">
            <rect x="25" y="35" width="50" height="30" rx="4" fill="rgba(59, 130, 246, 0.05)"/>
            <path d="M35 35 V20 H65 V35 M30 50 H70 M35 65 H65 V80 H35 Z" stroke-linecap="round"/>
            <line x1="30" y1="42" x2="45" y2="42" stroke="#60a5fa" stroke-width="1.5"/>
            <text x="36" y="74" fill="#60a5fa" font-family="monospace" font-size="6" font-weight="bold">PRT-${randomSerial}</text>
            <circle cx="60" cy="42" r="2" fill="#3b82f6"/>
        </svg>`;
    } else if (type === "sensor") {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#4f46e5" stroke-width="2.5">
            <rect x="30" y="20" width="40" height="50" rx="8" fill="rgba(79, 70, 229, 0.05)"/>
            <circle cx="50" cy="38" r="10" stroke-dasharray="2"/>
            <path d="M50 70 L50 90 M40 90 H60" stroke-linecap="round"/>
            <text x="35" y="60" fill="#818cf8" font-family="monospace" font-size="5" font-weight="bold">SNSR#${randomSerial}</text>
            <circle cx="50" cy="38" r="4" fill="#4f46e5"/>
        </svg>`;
    } else if (type === "bearing") {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#0ea5e9" stroke-width="2.5">
            <circle cx="50" cy="50" r="35" fill="rgba(14, 165, 233, 0.05)"/>
            <circle cx="50" cy="50" r="22"/>
            <circle cx="50" cy="28" r="5" fill="#0ea5e9"/>
            <circle cx="50" cy="72" r="5" fill="#0ea5e9"/>
            <circle cx="28" cy="50" r="5" fill="#0ea5e9"/>
            <circle cx="72" cy="50" r="5" fill="#0ea5e9"/>
            <circle cx="34.4" cy="34.4" r="5" fill="#0ea5e9"/>
            <circle cx="65.6" cy="65.6" r="5" fill="#0ea5e9"/>
            <circle cx="34.4" cy="65.6" r="5" fill="#0ea5e9"/>
            <circle cx="65.6" cy="34.4" r="5" fill="#0ea5e9"/>
            <text x="38" y="53" fill="#0ea5e9" font-family="monospace" font-size="6" font-weight="bold">BRG-${randomSerial}</text>
        </svg>`;
    } else if (type === "tool") {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#f59e0b" stroke-width="2.5">
            <path d="M25 80 L70 35 M70 35 L62 27 M78 43 L70 35 M70 35 L76 29 C79 26, 83 26, 86 29 L86 29 C89 32, 89 36, 86 39 L80 45 Z" stroke-linecap="round" stroke-linejoin="round" fill="rgba(245, 158, 11, 0.05)"/><rect x="15" y="75" width="12" height="12" rx="3" fill="#f59e0b"/>
            <text x="35" y="75" fill="#f59e0b" font-family="monospace" font-size="6" font-weight="bold">TOOL-${randomSerial}</text>
        </svg>`;
    } else if (type === "cable") {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#10b981" stroke-width="2.5">
            <path d="M15 50 C 35 25, 45 75, 65 50 S 75 25, 85 50" stroke-linecap="round" fill="none"/><rect x="5" y="44" width="10" height="12" rx="2" fill="#10b981"/><rect x="85" y="44" width="10" height="12" rx="2" fill="#10b981"/><circle cx="10" cy="50" r="2" fill="white"/><circle cx="90" cy="50" r="2" fill="white"/>
            <text x="35" y="80" fill="#10b981" font-family="monospace" font-size="6" font-weight="bold">CABL-${randomSerial}</text>
        </svg>`;
    } else {
        svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#94a3b8" stroke-width="2.5">
            <rect x="25" y="25" width="50" height="50" rx="10" fill="rgba(148, 163, 184, 0.05)"/>
            <path d="M25 45 H75 M50 25 V75" stroke-dasharray="3"/>
            <text x="35" y="60" fill="#94a3b8" font-family="monospace" font-size="6" font-weight="bold">GEN-${randomSerial}</text>
        </svg>`;
    }
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}


/* ==========================================================================
   FORM RESET & IMAGE MODE TABS SYSTEM (ADD / EDIT MODALS)
   ========================================================================== */
function resetAddForm() {
    const form = document.getElementById("add-item-form");
    if (form) form.reset();
    
    // Clear variables
    uploadedImageBase64 = "";
    
    // Reset inputs
    document.getElementById("item-image-file").value = "";
    document.getElementById("item-custom-image-url").value = "";
    
    // Reset Tabs
    switchAddImageTab("upload");
    removeAddImagePreview();
    selectAddIcon("computer");
}

function switchAddImageTab(mode) {
    document.getElementById("item-image-source-mode").value = mode;
    
    // Update active class on tab buttons
    document.querySelectorAll("#modal-add-item .img-tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(`add-tab-${mode}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Toggle containers
    document.getElementById("add-image-upload-wrapper").classList.add("hidden");
    document.getElementById("add-image-icon-wrapper").classList.add("hidden");
    document.getElementById("add-image-url-wrapper").classList.add("hidden");
    
    if (mode === "upload") {
        document.getElementById("add-image-upload-wrapper").classList.remove("hidden");
    } else if (mode === "icon") {
        document.getElementById("add-image-icon-wrapper").classList.remove("hidden");
        const currentIcon = document.getElementById("add-item-selected-icon").value;
        selectAddIcon(currentIcon);
    } else if (mode === "url") {
        document.getElementById("add-image-url-wrapper").classList.remove("hidden");
    }
}

function selectAddIcon(type) {
    document.getElementById("add-item-selected-icon").value = type;
    
    // Select visual active class in grid
    document.querySelectorAll("#modal-add-item .icon-option").forEach(opt => {
        if (opt.getAttribute("data-icon") === type) {
            opt.classList.add("active");
        } else {
            opt.classList.remove("active");
        }
    });
    
    // Update live preview SVG
    const svgData = generateBlueprintSVG(type);
    document.getElementById("add-icon-preview-display").innerHTML = svgData.replace("data:image/svg+xml;utf8,", "").replaceAll("%23", "#");
}

function removeAddImagePreview() {
    uploadedImageBase64 = "";
    document.getElementById("item-image-file").value = "";
    document.getElementById("upload-file-name").innerText = "Ningún archivo seleccionado";
    document.getElementById("add-image-preview-container").classList.add("hidden");
    document.getElementById("drag-drop-zone").classList.remove("hidden");
}

function previewUploadedImage(event) {
    const file = (event.target && event.target.files) ? event.target.files[0] : null;
    const nameSpan = document.getElementById("upload-file-name");
    
    if (file) {
        nameSpan.innerText = file.name;
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImageBase64 = e.target.result;
            document.getElementById("add-image-preview").src = uploadedImageBase64;
            document.getElementById("add-image-preview-container").classList.remove("hidden");
            document.getElementById("drag-drop-zone").classList.add("hidden");
            showToast("Imagen cargada", "Archivo de imagen leído correctamente.", "success");
        };
        reader.readAsDataURL(file);
    } else {
        removeAddImagePreview();
    }
}

/* Edit Form Image Tabs */
function switchEditImageTab(mode) {
    document.getElementById("edit-item-image-source-mode").value = mode;
    
    // Update active class on tab buttons
    document.querySelectorAll("#modal-edit-item .img-tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(`edit-tab-${mode}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Toggle containers
    document.getElementById("edit-image-keep-wrapper").classList.add("hidden");
    document.getElementById("edit-image-upload-wrapper").classList.add("hidden");
    document.getElementById("edit-image-icon-wrapper").classList.add("hidden");
    document.getElementById("edit-image-url-wrapper").classList.add("hidden");
    
    if (mode === "keep") {
        document.getElementById("edit-image-keep-wrapper").classList.remove("hidden");
    } else if (mode === "upload") {
        document.getElementById("edit-image-upload-wrapper").classList.remove("hidden");
    } else if (mode === "icon") {
        document.getElementById("edit-image-icon-wrapper").classList.remove("hidden");
        const currentIcon = document.getElementById("edit-item-selected-icon").value;
        selectEditIcon(currentIcon);
    } else if (mode === "url") {
        document.getElementById("edit-image-url-wrapper").classList.remove("hidden");
    }
}

function selectEditIcon(type) {
    document.getElementById("edit-item-selected-icon").value = type;
    
    // Select visual active class in grid
    document.querySelectorAll("#modal-edit-item .icon-option").forEach(opt => {
        if (opt.getAttribute("data-icon") === type) {
            opt.classList.add("active");
        } else {
            opt.classList.remove("active");
        }
    });
    
    // Update live preview SVG
    const svgData = generateBlueprintSVG(type);
    document.getElementById("edit-icon-preview-display").innerHTML = svgData.replace("data:image/svg+xml;utf8,", "").replaceAll("%23", "#");
}

function removeEditImagePreview() {
    editedImageBase64 = "";
    document.getElementById("edit-item-image-file").value = "";
    document.getElementById("edit-upload-file-name").innerText = "Ningún archivo seleccionado";
    document.getElementById("edit-image-preview-container").classList.add("hidden");
    document.getElementById("edit-drag-drop-zone").classList.remove("hidden");
}

function previewEditUploadedImage(event) {
    const file = (event.target && event.target.files) ? event.target.files[0] : null;
    const nameSpan = document.getElementById("edit-upload-file-name");
    
    if (file) {
        nameSpan.innerText = file.name;
        const reader = new FileReader();
        reader.onload = function(e) {
            editedImageBase64 = e.target.result;
            document.getElementById("edit-image-preview").src = editedImageBase64;
            document.getElementById("edit-image-preview-container").classList.remove("hidden");
            document.getElementById("edit-drag-drop-zone").classList.add("hidden");
            showToast("Imagen cargada", "Archivo de imagen leído correctamente.", "success");
        };
        reader.readAsDataURL(file);
    } else {
        removeEditImagePreview();
    }
}

// Drag and Drop support
function triggerFileInput(inputId) {
    document.getElementById(inputId).click();
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("dragover");
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
        const fileInput = document.getElementById("item-image-file");
        fileInput.files = e.dataTransfer.files;
        previewUploadedImage({ target: fileInput });
    } else {
        showToast("Formato Incorrecto", "Por favor, arrastra únicamente archivos de imagen.", "warning");
    }
}

function handleEditDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
        const fileInput = document.getElementById("edit-item-image-file");
        fileInput.files = e.dataTransfer.files;
        previewEditUploadedImage({ target: fileInput });
    } else {
        showToast("Formato Incorrecto", "Por favor, arrastra únicamente archivos de imagen.", "warning");
    }
}

function openEditItemModal() {
    if (currentUser.level < 2) return;
    if (!selectedItem) return;

    // Fill edit fields
    document.getElementById("edit-item-id").value = selectedItem.id;
    document.getElementById("edit-item-name").value = selectedItem.name;
    document.getElementById("edit-item-brand").value = selectedItem.brand;
    document.getElementById("edit-item-model").value = selectedItem.model;
    document.getElementById("edit-item-sku").value = selectedItem.sku;
    document.getElementById("edit-item-location").value = selectedItem.location;
    document.getElementById("edit-item-min-stock").value = selectedItem.minStock;
    document.getElementById("edit-item-stock").value = selectedItem.stock;
    document.getElementById("edit-item-description").value = selectedItem.description;

    // Set current preview image
    document.getElementById("edit-current-image-preview").src = selectedItem.image || SVG_BLUEPRINTS.default;

    // Reset image selections to keep current
    switchEditImageTab("keep");
    removeEditImagePreview();
    
    // Default selected icon in edit grid
    selectEditIcon("computer");

    // Open Modal
    document.getElementById("modal-edit-item").classList.add("active");
    closeModal("item-detail-modal");
    lucide.createIcons();
}

function triggerSKUGeneration() {
    const name  = document.getElementById("item-name").value.trim();
    const brand = document.getElementById("item-brand").value.trim();
    const model = document.getElementById("item-model").value.trim();
    let finalSKU = generateSmartSKU(name, brand, model);
    if (!finalSKU) {
        const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        finalSKU = Array.from({length: 9}, () => pool[Math.floor(Math.random() * pool.length)]).join("");
    }
    document.getElementById("item-sku").value = finalSKU;
    showToast("SKU Generado", `Código: ${finalSKU}`, "info");
}

function generateSmartSKU(name, brand, model) {
    // Use first 3 chars/symbols of Name, Brand and Model in UPPERCASE
    const clean = str => (str || "").replace(/\s+/g, "").toUpperCase();
    const namePart  = clean(name).substring(0, 3);
    const brandPart = clean(brand).substring(0, 3);
    const modelPart = clean(model).substring(0, 3);
    return (namePart + brandPart + modelPart).substring(0, 9);
}

function triggerEditSKUGeneration() {
    const name  = document.getElementById("edit-item-name").value.trim();
    const brand = document.getElementById("edit-item-brand").value.trim();
    const model = document.getElementById("edit-item-model").value.trim();
    let finalSKU = generateSmartSKU(name, brand, model);
    if (!finalSKU) {
        // Fallback to random if fields are empty
        const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        finalSKU = Array.from({length: 9}, () => pool[Math.floor(Math.random() * pool.length)]).join("");
    }
    document.getElementById("edit-item-sku").value = finalSKU;
    showToast("SKU Generado", `Código: ${finalSKU}`, "info");
}

function handleUpdateItem(e) {
    e.preventDefault();
    if (currentUser.level < 2) return;

    const id = document.getElementById("edit-item-id").value;
    const name = document.getElementById("edit-item-name").value.trim();
    const brand = document.getElementById("edit-item-brand").value.trim();
    const model = document.getElementById("edit-item-model").value.trim();
    const sku = document.getElementById("edit-item-sku").value.trim().toUpperCase();
    const location = document.getElementById("edit-item-location").value.trim();
    const minStock = parseInt(document.getElementById("edit-item-min-stock").value);
    const stock = parseInt(document.getElementById("edit-item-stock").value);
    const desc = document.getElementById("edit-item-description").value.trim();
    const imageSourceMode = document.getElementById("edit-item-image-source-mode").value;

    if (sku.length > 9) {
        showToast(t("Error de SKU"), t("toast.skuErrorLength"), "danger");
        return;
    }

    const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex === -1) return;

    const prevStock = items[itemIndex].stock;

    // Check duplicate SKU (excluding current item)
    if (items.some((item, idx) => item.sku === sku && idx !== itemIndex)) {
        showToast(t("SKU Duplicado"), t("toast.skuErrorDuplicate"), "danger");
        return;
    }

    let imageSrc = items[itemIndex].image;
    if (imageSourceMode === "keep") {
        imageSrc = items[itemIndex].image;
    } else if (imageSourceMode === "upload") {
        imageSrc = editedImageBase64 || items[itemIndex].image;
    } else if (imageSourceMode === "icon") {
        const selectedIcon = document.getElementById("edit-item-selected-icon").value;
        imageSrc = generateBlueprintSVG(selectedIcon);
    } else if (imageSourceMode === "url") {
        imageSrc = document.getElementById("edit-item-custom-image-url").value.trim() || items[itemIndex].image;
    }

    const updatedItem = {
        id,
        name,
        brand,
        model,
        sku,
        location,
        minStock,
        stock,
        image: imageSrc,
        description: desc || "Sin descripción adicional."
    };

    items[itemIndex] = updatedItem;
    localStorage.setItem("mi_inventory", JSON.stringify(items));
    if (prevStock !== stock) {
        logMovement(id, name, sku, "edit", Math.abs(stock - prevStock), prevStock, stock);
    }

    // Close edit modal and refresh
    closeModal("edit-item-modal");
    renderInventory();
    
    // Re-open detail with updated item
    selectedItem = updatedItem;
    openItemDetail(id);

    showToast(t("toast.itemUpdatedTitle"), t("toast.itemUpdated", {name: name}), "success");
}

function handleCreateItem(e) {
    e.preventDefault();
    if (currentUser.level < 2) return;

    const name = document.getElementById("item-name").value.trim();
    const brand = document.getElementById("item-brand").value.trim();
    const model = document.getElementById("item-model").value.trim();
    const sku = document.getElementById("item-sku").value.trim().toUpperCase();
    const location = document.getElementById("item-location").value.trim();
    const minStock = parseInt(document.getElementById("item-min-stock").value);
    const initialStock = parseInt(document.getElementById("item-initial-stock").value);
    const desc = document.getElementById("item-description").value.trim();
    const imageSourceMode = document.getElementById("item-image-source-mode").value;
    
    // Validation SKU (max 9 chars)
    if (sku.length > 9) {
        showToast(t("Error de SKU"), t("toast.skuErrorLength"), "danger");
        return;
    }

    const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
    
    // Check duplicate SKU
    if (items.some(item => item.sku === sku)) {
        showToast(t("SKU Duplicado"), t("toast.skuErrorDuplicate"), "danger");
        return;
    }

    // Set correct Image Blueprint/Upload
    let imageSrc = SVG_BLUEPRINTS.default;
    if (imageSourceMode === "upload") {
        imageSrc = uploadedImageBase64 || SVG_BLUEPRINTS.default;
    } else if (imageSourceMode === "icon") {
        const selectedIcon = document.getElementById("add-item-selected-icon").value;
        imageSrc = generateBlueprintSVG(selectedIcon);
    } else if (imageSourceMode === "url") {
        imageSrc = document.getElementById("item-custom-image-url").value.trim() || SVG_BLUEPRINTS.default;
    }

    const newItem = {
        id: `inv-${Date.now()}`,
        name,
        brand,
        model,
        sku,
        location,
        minStock,
        stock: initialStock,
        image: imageSrc,
        description: desc || "Sin descripción adicional."
    };

    items.push(newItem);
    localStorage.setItem("mi_inventory", JSON.stringify(items));
    logMovement(newItem.id, newItem.name, newItem.sku, "create", newItem.stock, 0, newItem.stock);
    
    closeModal("add-item-modal");
    renderInventory();
    showToast(t("toast.itemCreatedTitle"), t("toast.itemCreated", {name: name}), "success");
}

/* Item Detail Modal and Scanning Operations */
function openItemDetail(itemId) {
    const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
    selectedItem = items.find(item => item.id === itemId);

    if (!selectedItem) return;

    // Reset scanner lock state
    isSkuScanned = false;
    document.getElementById("scan-sku-input").value = "";
    // Set text status elements
    const statusMsg = document.getElementById("scan-status-message");
    statusMsg.className = "scan-status-message";
    statusMsg.innerHTML = `<i data-lucide="alert-circle" class="icon-small text-warning"></i> ${t('detail.waitingSku')}`;
    
    const controlInterface = document.getElementById("stock-control-interface");
    controlInterface.classList.add("locked");

    // Populate Fields
    document.getElementById("detail-image").src = selectedItem.image || SVG_BLUEPRINTS.default;
    document.getElementById("detail-title").innerText = selectedItem.name;
    document.getElementById("detail-brand-model").innerText = `${selectedItem.brand} • ${selectedItem.model}`;
    document.getElementById("detail-sku").innerText = selectedItem.sku;
    document.getElementById("detail-location").innerText = selectedItem.location;
    document.getElementById("detail-min-stock").innerText = `${selectedItem.minStock} ${currentLanguage === 'es' ? 'unidades' : 'units'}`;
    document.getElementById("detail-description").innerText = selectedItem.description;
    
    document.getElementById("stock-current-display").innerText = t('detail.currentStock', {stock: selectedItem.stock});
    document.getElementById("adjust-qty-input").value = 1;

    // Set stock badge detail
    const stockBadge = document.getElementById("detail-stock-badge");
    const stockText = document.getElementById("detail-stock-text");
    const stockStatus = document.getElementById("detail-stock-status");
    
    stockText.innerText = `${currentLanguage === 'es' ? 'Stock' : 'Stock'}: ${selectedItem.stock} ${currentLanguage === 'es' ? 'uds' : 'pcs'}`;
    
    if (selectedItem.stock === 0) {
        stockStatus.className = "stock-status critical";
        stockStatus.innerText = t('inventory.outOfStock');
    } else if (selectedItem.stock <= selectedItem.minStock) {
        stockStatus.className = "stock-status low";
        stockStatus.innerText = t('inventory.lowStock');
    } else {
        stockStatus.className = "stock-status ok";
        stockStatus.innerText = t('inventory.sufficientStock');
    }


    document.getElementById("modal-item-detail").classList.add("active");
    lucide.createIcons();
}

function checkSkuScan(value) {
    const statusMsg = document.getElementById("scan-status-message");
    const controlInterface = document.getElementById("stock-control-interface");

    if (value.trim().toUpperCase() === selectedItem.sku) {
        isSkuScanned = true;
        statusMsg.className = "scan-status-message success";
        statusMsg.innerHTML = `<i data-lucide="check-circle-2" class="icon-small"></i> ${t('detail.correctSku')}`;
        controlInterface.classList.remove("locked");
    } else {
        isSkuScanned = false;
        statusMsg.className = "scan-status-message error";
        statusMsg.innerHTML = `<i data-lucide="alert-circle" class="icon-small"></i> ${t('detail.wrongSku')}`;
        controlInterface.classList.add("locked");
    }
    lucide.createIcons();
}

function simulateSkuScan() {
    if (!selectedItem) return;
    const input = document.getElementById("scan-sku-input");
    input.value = selectedItem.sku;
    checkSkuScan(selectedItem.sku);
    showToast(t('toast.scanSimulatedTitle'), t('toast.scanSimulatedDesc'), "success");
}

function adjustStockValue(change) {
    const input = document.getElementById("adjust-qty-input");
    let val = parseInt(input.value) || 1;
    val += change;
    if (val < 1) val = 1;
    input.value = val;
}

function saveStockAdjustment(type) {
    if (!selectedItem || !isSkuScanned) return;

    const adjustQty = parseInt(document.getElementById("adjust-qty-input").value) || 0;
    if (adjustQty <= 0) return;

    const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
    const itemIndex = items.findIndex(item => item.id === selectedItem.id);
    
    if (itemIndex === -1) return;

    let targetItem = items[itemIndex];
    const prevStock = targetItem.stock;
    let newStock = targetItem.stock;

    if (type === "add") {
        newStock += adjustQty;
        showToast(t('toast.entryTitle'), t('toast.entryDesc', {qty: adjustQty, name: targetItem.name}), "success");
    } else if (type === "sub") {
        if (adjustQty > newStock) {
            showToast(t('toast.invalidAdjustment'), t('toast.invalidAdjustmentDesc'), "danger");
            return;
        }
        newStock -= adjustQty;
        showToast(t('toast.exitTitle'), t('toast.exitDesc', {qty: adjustQty, name: targetItem.name}), "warning");
        
        // Alert if below minStock
        if (newStock <= targetItem.minStock) {
            setTimeout(() => {
                showToast(t('toast.lowStockTitle'), t('toast.lowStock', {name: targetItem.name, min: targetItem.minStock}), "warning");
            }, 1000);
        }
    }

    targetItem.stock = newStock;
    items[itemIndex] = targetItem;
    
    localStorage.setItem("mi_inventory", JSON.stringify(items));
    logMovement(targetItem.id, targetItem.name, targetItem.sku, type, adjustQty, prevStock, newStock);
    
    // Refresh modals and inventory views
    selectedItem = targetItem;
    openItemDetail(selectedItem.id);
    renderInventory();
}

/* ==========================================================================
   TAB 2: ÓRDENES Y PEDIDOS LOGIC
   ========================================================================== */
function renderOrders() {
    const orders = JSON.parse(localStorage.getItem("mi_orders")) || [];
    
    // Containers
    const containerSolicitado = document.getElementById("container-solicitado");
    const containerEspera = document.getElementById("container-espera");
    const containerRecibido = document.getElementById("container-recibido");
    
    containerSolicitado.innerHTML = "";
    containerEspera.innerHTML = "";
    containerRecibido.innerHTML = "";
    
    let countSolicitado = 0;
    let countEspera = 0;
    let countRecibido = 0;

    // History table
    const historyTable = document.getElementById("orders-history-table-body");
    const historyEmpty = document.getElementById("orders-history-empty");
    historyTable.innerHTML = "";
    let historyCount = 0;

    orders.forEach(order => {
        // Build small column cards
        const orderCard = document.createElement("div");
        orderCard.className = "order-card";
        let actionBtn = "";
        
        // Level 3 can approve directly on cards in the "Solicitado" column
        if (order.status === "Solicitado" && currentUser.level === 3) {
            actionBtn = `
                <div class="order-card-actions">
                    <button class="btn-action-small btn-success" onclick="approveOrder('${order.id}', 'approve')">
                        <i data-lucide="check"></i> ${t('orders.statusSolicitado')}
                    </button>
                    <button class="btn-action-small btn-danger" onclick="approveOrder('${order.id}', 'reject')">
                        <i data-lucide="x"></i> ${t('orders.reject')}
                    </button>
                </div>
            `;
        }
        // Level 2 & 3 can mark as Received when order is in "En Espera" (Approved)
        else if (order.status === "En Espera" && currentUser.level >= 2) {
            actionBtn = `
                <div class="order-card-actions">
                    <button class="btn-action-small btn-success" onclick="receiveOrder('${order.id}')">
                        <i data-lucide="check"></i> ${t('orders.statusRecibido')}
                    </button>
                </div>
            `;
        }

        orderCard.innerHTML = `
            <div class="order-card-title">${order.itemName}</div>
            <div class="order-card-meta">${t('orders.modelLabel')}: <strong>${order.model}</strong> • ${t('orders.quantityLabel')}: ${order.qty}</div>
            <div class="order-card-cost">${t('orders.costLabel')}: $${parseFloat(order.totalCost).toFixed(2)} USD</div>
            <div class="order-card-meta" style="font-size: 0.72rem; color: var(--color-text-light);">${t('orders.tableRequester')}: ${order.requester}</div>
            ${actionBtn}
        `;

        if (order.status === "Solicitado") {
            containerSolicitado.appendChild(orderCard);
            countSolicitado++;
        } else if (order.status === "En Espera") {
            containerEspera.appendChild(orderCard);
            countEspera++;
        } else if (order.status === "Recibido") {
            // Only show the latest 5 received orders
            if (countRecibido < 5) {
                containerRecibido.appendChild(orderCard);
            }
            countRecibido++;
        }

        // History list (contains everything resolved: Received or Rejected)
        if (order.status === "Recibido" || order.status === "Rechazado") {
            const tr = document.createElement("tr");
            
            // Delete action for Level 3 only
            let deleteCell = "";
            if (currentUser.level === 3) {
                deleteCell = `
                    <td class="level-3-only-cell">
                        <button class="btn-trash" onclick="deleteOrderHistory('${order.id}')" title="Eliminar registro">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </td>
                `;
            } else {
                deleteCell = `<td class="level-3-only-cell"></td>`;
            }

            const formattedDate = new Date(order.date).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
                day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
            });

            const statusKey = order.status === "Solicitado" ? "orders.statusSolicitado" : 
                              order.status === "En Espera" ? "orders.statusEspera" : 
                              order.status === "Recibido" ? "orders.statusRecibido" : 
                              order.status === "Rechazado" ? "orders.statusRechazado" : order.status;
            const translatedStatus = t(statusKey);

            tr.innerHTML = `
                <td><code>${order.id}</code></td>
                <td>${formattedDate}</td>
                <td>${order.requester}</td>
                <td><strong>${order.itemName}</strong><br><small class="text-muted">${order.model}</small></td>
                <td>$${parseFloat(order.totalCost).toFixed(2)} USD</td>
                <td>
                    <span class="status-pill-small ${order.status.toLowerCase()}">${translatedStatus}</span>
                </td>
                <td style="font-size: 0.78rem;" class="text-muted">${order.log || t('orders.noLog')}</td>
                ${deleteCell}
            `;

            historyTable.appendChild(tr);
            historyCount++;
        }
    });

    // Set badges counters
    document.getElementById("badge-count-solicitado").innerText = countSolicitado;
    document.getElementById("badge-count-espera").innerText = countEspera;
    document.getElementById("badge-count-recibido").innerText = countRecibido;

    if (historyCount === 0) {
        historyEmpty.classList.remove("hidden");
    } else {
        historyEmpty.classList.add("hidden");
    }

    lucide.createIcons();
}

function handleCreateOrder(e) {
    e.preventDefault();

    const name = document.getElementById("order-item-name").value.trim();
    const model = document.getElementById("order-item-model").value.trim();
    const qty = parseInt(document.getElementById("order-quantity").value) || 1;
    const totalCost = parseFloat(document.getElementById("order-total-cost").value) || 0;
    const link = document.getElementById("order-item-link").value.trim();

    const orders = JSON.parse(localStorage.getItem("mi_orders")) || [];

    const newOrder = {
        id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
        date: new Date().toISOString(),
        requester: currentUser.name,
        requesterShift: currentUser.shift,
        itemName: name,
        model,
        qty,
        totalCost,
        link,
        status: "Solicitado",
        log: currentLanguage === 'es' 
            ? `Solicitud inicial levantada por ${currentUser.name} en el turno ${currentUser.shift}.` 
            : `Initial request raised by ${currentUser.name} on shift ${currentUser.shift}.`
    };

    orders.unshift(newOrder);
    localStorage.setItem("mi_orders", JSON.stringify(orders));

    document.getElementById("order-request-form").reset();
    renderOrders();
    showToast(t('toast.orderSuccessTitle'), t('toast.orderSuccess', {name: name}), "success");
}

function approveOrder(orderId, action) {
    if (currentUser.level !== 3) return;

    const orders = JSON.parse(localStorage.getItem("mi_orders")) || [];
    const index = orders.findIndex(o => o.id === orderId);

    if (index === -1) return;

    const order = orders[index];
    if (action === "approve") {
        order.status = "En Espera";
        order.log = t('orders.logApprove', {name: currentUser.name});
        showToast(t('toast.orderApproveTitle'), t('toast.orderApprove', {id: orderId}), "success");
    } else if (action === "reject") {
        order.status = "Rechazado";
        const dateStr = new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US');
        order.log = t('orders.logReject', {name: currentUser.name, date: dateStr});
        showToast(t('toast.orderRejectTitle'), t('toast.orderReject', {id: orderId}), "danger");
    }

    orders[index] = order;
    localStorage.setItem("mi_orders", JSON.stringify(orders));
    renderOrders();
}

function receiveOrder(orderId) {
    if (currentUser.level < 2) return;

    const orders = JSON.parse(localStorage.getItem("mi_orders")) || [];
    const orderIndex = orders.findIndex(o => o.id === orderId);

    if (orderIndex === -1) return;

    const order = orders[orderIndex];
    order.status = "Recibido";
    order.log = t('orders.logReceived', {name: currentUser.name});
    orders[orderIndex] = order;
    
    localStorage.setItem("mi_orders", JSON.stringify(orders));

    // Optional Stock Integration: Check if item exists in inventory and prompt user to update
    const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
    const matchingItemIndex = items.findIndex(item => item.model.toLowerCase() === order.model.toLowerCase() || item.name.toLowerCase() === order.itemName.toLowerCase());
    
    if (matchingItemIndex !== -1) {
        const matchingItem = items[matchingItemIndex];
        const prevStock = matchingItem.stock;
        matchingItem.stock += order.qty;
        items[matchingItemIndex] = matchingItem;
        localStorage.setItem("mi_inventory", JSON.stringify(items));
        logMovement(matchingItem.id, matchingItem.name, matchingItem.sku, "received", order.qty, prevStock, matchingItem.stock);
        
        showToast(t('toast.orderReceivedTitle'), t('toast.orderReceived', {qty: order.qty, name: matchingItem.name, prev: prevStock}), "success");
    } else {
        showToast(t('toast.orderReceivedSimpleTitle'), t('toast.orderReceivedSimple', {id: orderId}), "success");
    }

    renderOrders();
}

function deleteOrderHistory(orderId) {
    if (currentUser.level !== 3) return;

    if (confirm(t('orders.confirmDelete', {id: orderId}))) {
        const orders = JSON.parse(localStorage.getItem("mi_orders")) || [];
        const filtered = orders.filter(o => o.id !== orderId);
        
        localStorage.setItem("mi_orders", JSON.stringify(filtered));
        renderOrders();
        showToast(t('toast.orderDeleteTitle'), t('toast.orderDelete'), "warning");
    }
}

/* ==========================================================================
   TAB 3: REPORTE DIARIO LOGIC
   ========================================================================== */
function addCronogramaRow() {
    const container = document.getElementById("cronograma-rows-container");
    const row = document.createElement("div");
    row.className = "cronograma-row";
    
    // Set default time to current hour
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const timeVal = `${hrs}:${mins}`;
    
    row.innerHTML = `
        <input type="time" class="crono-time" value="${timeVal}" required>
        <textarea class="crono-desc" rows="1" placeholder="Actividad realizada a esta hora..." required></textarea>
        <button type="button" class="btn-remove-row" onclick="removeCronogramaRow(this)">&times;</button>
    `;
    container.appendChild(row);
    row.querySelector(".crono-desc").focus();
}

function removeCronogramaRow(btn) {
    const container = document.getElementById("cronograma-rows-container");
    const rows = container.querySelectorAll(".cronograma-row");
    if (rows.length > 1) {
        btn.parentElement.remove();
    } else {
        showToast("Mínimo Requerido", "El cronograma debe tener al menos una hora registrada.", "warning");
    }
}

function getReporterLevel(name) {
    const users = JSON.parse(localStorage.getItem("mi_users")) || SEED_USERS;
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    return user ? user.level : 1;
}

function renderReports() {
    const reports = JSON.parse(localStorage.getItem("mi_reports")) || [];
    const accordion = document.getElementById("reports-grouped-accordion");
    const emptyState = document.getElementById("reports-empty-state");
    const titleHeader = document.getElementById("reports-view-title");

    accordion.innerHTML = "";

    // Populate PDF user select options dynamically
    const pdfUserSelect = document.getElementById("pdf-report-user");
    if (pdfUserSelect) {
        const selectedValue = pdfUserSelect.value;
        pdfUserSelect.innerHTML = `<option value="">${t('reports.allUsers')}</option>`;
        
        // Find unique usernames from the reports array
        const uniqueUsers = [...new Set(reports.map(r => r.username))].filter(Boolean).sort();
        uniqueUsers.forEach(u => {
            const opt = document.createElement("option");
            opt.value = u;
            opt.textContent = u;
            if (u === selectedValue) {
                opt.selected = true;
            }
            pdfUserSelect.appendChild(opt);
        });
    }

    // Set header dynamically based on level
    if (titleHeader) {
        if (currentUser.level === 1) {
            titleHeader.innerText = t('reports.viewTitleL1');
        } else {
            titleHeader.innerText = t('reports.viewTitle');
        }
    }

    // Filter reports if Level 1 so they only see their own
    let filteredReports = reports;
    if (currentUser.level === 1) {
        filteredReports = reports.filter(rep => rep.username && rep.username.toLowerCase() === currentUser.name.toLowerCase());
    }

    if (filteredReports.length === 0) {
        emptyState.style.display = "flex";
        return;
    }

    emptyState.style.display = "none";

    // Group reports by Date
    const grouped = {};
    filteredReports.forEach(rep => {
        const date = rep.date;
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(rep);
    });

    // Sort dates descending
    const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

    sortedDates.forEach(date => {
        // Translate dates to readable formats
        const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        const dateGroup = document.createElement("div");
        dateGroup.className = "report-date-group";

        const count = grouped[date].length;
        const summaryText = currentLanguage === 'es'
            ? `${count} ${count === 1 ? 'reporte' : 'reportes'}`
            : `${count} ${count === 1 ? 'report' : 'reports'}`;

        const isDateExpanded = expandedReportsDates.has(date);

        const header = document.createElement("div");
        header.className = "date-group-header clickable";
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        
        header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <i data-lucide="calendar"></i>
                <span style="text-transform: capitalize;">${formattedDate}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; margin-left: auto;">
                <span class="badge" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary); font-size: 0.78rem; font-weight: 600; padding: 4px 8px; border-radius: 12px;">${summaryText}</span>
                <i data-lucide="chevron-down" class="accordion-arrow" style="width: 16px; height: 16px; transition: transform 0.2s; ${isDateExpanded ? 'transform: rotate(180deg);' : ''}"></i>
            </div>
        `;
        dateGroup.appendChild(header);

        const content = document.createElement("div");
        content.className = "date-group-content";
        content.style.display = isDateExpanded ? "flex" : "none";
        content.style.flexDirection = "column";
        content.style.gap = "12px";
        content.style.marginTop = "8px";

        header.onclick = () => {
            const isCollapsed = content.style.display === "none";
            const arrow = header.querySelector(".accordion-arrow");
            if (isCollapsed) {
                content.style.display = "flex";
                header.classList.add("expanded");
                if (arrow) arrow.style.transform = "rotate(180deg)";
                expandedReportsDates.add(date);
            } else {
                content.style.display = "none";
                header.classList.remove("expanded");
                if (arrow) arrow.style.transform = "rotate(0deg)";
                expandedReportsDates.delete(date);
            }
        };

        // Sort items inside date by ID descending (newest first)
        const dayReports = grouped[date].sort((a, b) => b.id.localeCompare(a.id));

        dayReports.forEach(rep => {
            const initials = rep.username.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
            
            const card = document.createElement("div");
            card.className = "report-row-card";
            
            // Build content HTML:
            // - Level 1 viewing own reports: simple summary
            // - Level 2 & 3 viewing Level 1 reports: also simple summary (not timeline)
            // - Level 2 & 3 viewing Level 2/3 reports: timeline view
            let contentHtml = "";
            const reporterLvl = getReporterLevel(rep.username);
            const useSimpleSummary = (currentUser.level === 1) || (reporterLvl === 1 && currentUser.level >= 2);

            if (useSimpleSummary) {
                const prefix = t('reports.summaryOfActivities');
                const suffix = reporterLvl === 1 && currentUser.level >= 2 
                    ? ` — <span class="reporter-tag">${t('reports.l1ReportTag')}</span>` 
                    : t('reports.ofShift');
                contentHtml = '<div class="simple-report-summary">';
                contentHtml += `<div class="summary-subtitle">${prefix}${suffix}</div>`;
                contentHtml += '<ul class="summary-list">';
                if (rep.activities && Array.isArray(rep.activities)) {
                    const sortedActivities = [...rep.activities].sort((a, b) => a.time.localeCompare(b.time));
                    sortedActivities.forEach(act => {
                        contentHtml += `<li><strong>${act.time} ${currentLanguage === 'es' ? 'hs' : 'hrs'}:</strong> ${act.description}</li>`;
                    });
                } else {
                    contentHtml += `<li><strong>${rep.time} ${currentLanguage === 'es' ? 'hs' : 'hrs'}:</strong> ${rep.activity}</li>`;
                }
                contentHtml += '</ul></div>';
            } else {
                // Timeline view for L2/L3 own reports
                contentHtml = '<div class="timeline-container">';
                if (rep.activities && Array.isArray(rep.activities)) {
                    const sortedActivities = [...rep.activities].sort((a, b) => a.time.localeCompare(b.time));
                    sortedActivities.forEach(act => {
                        contentHtml += `
                            <div class="timeline-node">
                                <div class="timeline-marker"></div>
                                <strong class="timeline-time">${act.time} ${currentLanguage === 'es' ? 'hs' : 'hrs'}</strong>
                                <p class="timeline-text">${act.description}</p>
                            </div>
                        `;
                    });
                } else {
                    contentHtml += `
                        <div class="timeline-node">
                            <div class="timeline-marker"></div>
                            <strong class="timeline-time">${rep.time} ${currentLanguage === 'es' ? 'hs' : 'hrs'}</strong>
                            <p class="timeline-text">${rep.activity}</p>
                        </div>
                    `;
                }
                contentHtml += '</div>';
            }

            const reporterLevel = getReporterLevel(rep.username);
            let commentsHtml = "";
            if (reporterLevel === 1) {
                commentsHtml = `
                    <div class="report-comments-section">
                        <div class="comments-header">
                            <i data-lucide="message-square"></i> ${t('reports.commentsTitle')}
                        </div>
                `;
                
                const comments = rep.comments || [];
                if (comments.length > 0) {
                    commentsHtml += `<div class="comments-list">`;
                    comments.forEach(com => {
                        const comInitials = com.author.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
                        const comRole = com.authorLevel === 3 ? t('Admin') : t('Supervisor');
                        const formattedComDate = new Date(com.date).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
                            day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                        });
                        commentsHtml += `
                            <div class="comment-item">
                                <div class="comment-avatar">${comInitials}</div>
                                <div class="comment-content">
                                    <div class="comment-meta">
                                        <strong>${com.author}</strong> <span class="comment-role">${comRole}</span> • <span class="comment-time">${formattedComDate}</span>
                                    </div>
                                    <div class="comment-text">${com.text}</div>
                                </div>
                            </div>
                        `;
                    });
                    commentsHtml += `</div>`;
                } else {
                    commentsHtml += `<div class="comments-empty">${t('reports.commentsEmpty')}</div>`;
                }

                if (currentUser.level >= 2) {
                    commentsHtml += `
                        <div class="add-comment-box">
                            <input type="text" placeholder="${t('reports.commentPlaceholder')}" class="comment-input" id="input-comment-${rep.id}" onkeydown="if(event.key === 'Enter') addReportComment('${rep.id}')">
                            <button class="btn btn-primary btn-sm btn-send-comment" onclick="addReportComment('${rep.id}')" title="${t('reports.commentBtnTitle')}">
                                <i data-lucide="send"></i>
                            </button>
                        </div>

                    `;
                }
                commentsHtml += `</div>`;
            }

            const isRepExpanded = expandedReportsIds.has(rep.id);

            card.innerHTML = `
                <div class="report-row-header clickable-user-header ${isRepExpanded ? 'expanded' : ''}" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <div class="report-reporter-info">
                        <div class="reporter-avatar">${initials}</div>
                        <span class="reporter-text">${rep.username} <small class="text-muted">(${t('shift.' + rep.shift.toLowerCase()) || rep.shift})</small></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span class="report-time-tag"><i data-lucide="clock"></i> ${t('reports.timelineTitle')}</span>
                        <i data-lucide="chevron-down" class="accordion-arrow" style="width: 16px; height: 16px; transition: transform 0.2s; ${isRepExpanded ? 'transform: rotate(180deg);' : ''}"></i>
                    </div>
                </div>
                <div class="report-row-body" style="padding-top: 10px; display: ${isRepExpanded ? 'block' : 'none'};">
                    ${contentHtml}
                    ${commentsHtml}
                </div>
            `;

            const cardHeader = card.querySelector(".clickable-user-header");
            cardHeader.onclick = () => {
                const body = card.querySelector(".report-row-body");
                const isCollapsed = body.style.display === "none";
                const arrow = cardHeader.querySelector(".accordion-arrow");
                
                if (isCollapsed) {
                    body.style.display = "block";
                    cardHeader.classList.add("expanded");
                    if (arrow) arrow.style.transform = "rotate(180deg)";
                    expandedReportsIds.add(rep.id);
                } else {
                    body.style.display = "none";
                    cardHeader.classList.remove("expanded");
                    if (arrow) arrow.style.transform = "rotate(0deg)";
                    expandedReportsIds.delete(rep.id);
                }
            };

            content.appendChild(card);
        });

        dateGroup.appendChild(content);
        accordion.appendChild(dateGroup);
    });


    lucide.createIcons();
}

function handleCreateReport(e) {
    e.preventDefault();

    if (currentUser.level > 2) {
        showToast(t('toast.restrictionTitle'), t('toast.restrictionReport'), "danger");
        return;
    }

    const rows = document.querySelectorAll(".cronograma-row");
    const activitiesList = [];
    rows.forEach(row => {
        const rowTime = row.querySelector(".crono-time").value;
        const rowDesc = row.querySelector(".crono-desc").value.trim();
        if (rowTime && rowDesc) {
            activitiesList.push({ time: rowTime, description: rowDesc });
        }
    });

    if (activitiesList.length === 0) {
        showToast(t('toast.reportEmptyTitle'), t('toast.reportEmpty'), "warning");
        return;
    }

    const reports = JSON.parse(localStorage.getItem("mi_reports")) || [];
    
    // Get local date YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    const newReport = {
        id: `REP-${Date.now()}`,
        date: dateStr,
        username: currentUser.name,
        shift: currentUser.shift,
        activities: activitiesList
    };

    reports.unshift(newReport);
    localStorage.setItem("mi_reports", JSON.stringify(reports));

    // Reset Form
    document.getElementById("shift-report-form").reset();
    
    // Reset container to a single empty row
    const container = document.getElementById("cronograma-rows-container");
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    
    container.innerHTML = `
        <div class="cronograma-row">
            <input type="time" class="crono-time" value="${hrs}:${mins}" required>
            <textarea class="crono-desc" rows="1" placeholder="Actividad realizada a esta hora..." required></textarea>
            <button type="button" class="btn-remove-row" onclick="removeCronogramaRow(this)">&times;</button>
        </div>
    `;

    renderReports();
    showToast(t('toast.reportSuccessTitle'), t('toast.reportSuccess'), "success");
}

function setCurrentTimeInForm() {
    const timeField = document.querySelector(".crono-time");
    if (timeField) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        timeField.value = `${hrs}:${mins}`;
    }
}

// Ensure current time is set on report form when switching to it
function initReportFormTime() {
    if (currentUser && currentUser.level <= 2) {
        const timeInputs = document.querySelectorAll(".crono-time");
        if (timeInputs.length === 1 && !timeInputs[0].value) {
            const now = new Date();
            const hrs = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            timeInputs[0].value = `${hrs}:${mins}`;
        }
    }
}

// Hook into switchTab to pre-initialize the report time
const baseSwitchTab = switchTab;
switchTab = function(tabName) {
    baseSwitchTab(tabName);
    if (tabName === "reporte") {
        initReportFormTime();
    }
};

/* ==========================================================================
   TAB 4: CREACIÓN DE USUARIOS LOGIC (NIVEL 3 ONLY)
   ========================================================================== */
function renderUsers() {
    if (currentUser.level !== 3) return;

    // Filter out master user so it is hidden
    const users = (JSON.parse(localStorage.getItem("mi_users")) || []).filter(u => u.username !== "1234");
    const tbody = document.getElementById("registered-users-table-body");
    tbody.innerHTML = "";

    users.forEach(user => {
        const tr = document.createElement("tr");
        
        // Cannot delete seed/default users to prevent locking out the demo tester
        const isSeedUser = SEED_USERS.some(u => u.username === user.username);
        let actionCell = "";
        
        let editBtn = `
            <button class="btn-edit-user-row" onclick="openEditUserModal('${user.username}')" title="${t('users.editUserBtnTitle')}">
                <i data-lucide="user-cog"></i>
            </button>
        `;
        
        if (isSeedUser) {
            actionCell = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    ${editBtn}
                    <span class="badge text-muted" style="font-size: 0.72rem; padding: 4px;">${t('users.defaultUser')}</span>
                </div>
            `;
        } else {
            actionCell = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    ${editBtn}
                    <button class="btn-trash" onclick="deleteUser('${user.username}')" title="Eliminar usuario">
                        <i data-lucide="user-x"></i>
                    </button>
                </div>
            `;
        }

        const levelSelect = `
            <select class="user-table-level-select" onchange="changeUserLevel('${user.username}', this.value)">
                <option value="1" ${user.level === 1 ? 'selected' : ''}>${t('level.1.short')}</option>
                <option value="2" ${user.level === 2 ? 'selected' : ''}>${t('level.2.short')}</option>
                <option value="3" ${user.level === 3 ? 'selected' : ''}>${t('level.3.short')}</option>
            </select>
        `;

        tr.innerHTML = `
            <td>
                <strong>${user.name}</strong><br>
                <small class="text-muted">${t(user.position) || user.position}</small><br>
                <small style="color: var(--color-primary);">${user.email || ""}</small>
            </td>
            <td>${t('shift.' + user.shift.toLowerCase())}</td>
            <td>${levelSelect}</td>
            <td><code>${user.username}</code></td>
            <td>${actionCell}</td>
        `;
        tbody.appendChild(tr);
    });

    lucide.createIcons();
}

function handleCreateUser(e) {
    e.preventDefault();
    if (currentUser.level !== 3) return;

    const name = document.getElementById("new-user-name").value.trim();
    const position = document.getElementById("new-user-position").value.trim();
    const shift = document.getElementById("new-user-shift").value;
    const level = parseInt(document.getElementById("new-user-level").value);
    const username = document.getElementById("new-user-username").value.trim().toLowerCase();
    const password = document.getElementById("new-user-password").value.trim();
    const email = document.getElementById("new-user-email").value.trim();
    const errorDiv = document.getElementById("user-create-error");

    const users = JSON.parse(localStorage.getItem("mi_users")) || [];

    // Block master user username registration
    if (username === "1234" || users.some(u => u.username === username)) {
        errorDiv.style.display = "block";
        return;
    }

    errorDiv.style.display = "none";

    const newUser = {
        name,
        position,
        shift,
        level,
        username,
        password,
        email
    };

    users.push(newUser);
    localStorage.setItem("mi_users", JSON.stringify(users));

    document.getElementById("create-user-form").reset();
    renderUsers();
    showToast(t('toast.userCreatedTitle'), t('toast.userCreated', {name: name, level: level}), "success");
}

function deleteUser(username) {
    if (currentUser.level !== 3) return;

    // Safety check for master user
    if (username === "1234") {
        showToast(t('toast.masterUserDeleteErrorTitle'), t('toast.masterUserDeleteError'), "danger");
        return;
    }

    if (confirm(t('users.confirmDelete', {username: username}))) {
        const users = JSON.parse(localStorage.getItem("mi_users")) || [];
        const filtered = users.filter(u => u.username !== username);
        
        localStorage.setItem("mi_users", JSON.stringify(filtered));
        renderUsers();
        showToast(t('toast.userDeletedTitle'), t('toast.userDeleted', {username: username}), "warning");
    }
}

/* handleDeleteItem - Level 2 & 3 item deletion */
function handleDeleteItem() {
    if (currentUser.level < 2) return;
    if (!selectedItem) return;

    const confirmMsg = currentLanguage === 'es' 
        ? `¿Estás seguro de que deseas eliminar permanentemente el artículo "${selectedItem.name}" del inventario? Esta acción no se puede deshacer.` 
        : `Are you sure you want to permanently delete the item "${selectedItem.name}" from the inventory? This action cannot be undone.`;

    if (confirm(confirmMsg)) {
        const items = JSON.parse(localStorage.getItem("mi_inventory")) || [];
        const filtered = items.filter(item => item.id !== selectedItem.id);
        
        localStorage.setItem("mi_inventory", JSON.stringify(filtered));
        
        closeModal("item-detail-modal");
        renderInventory();
        
        showToast(t('toast.itemDeletedTitle'), t('toast.itemDeleted', {name: selectedItem.name}), "warning");
    }
}

/* openEditUserModal - Load and display Edit User Modal (Admin level 3 only) */
function openEditUserModal(username) {
    if (currentUser.level !== 3) return;

    // Safety check for master user
    if (username === "1234") {
        showToast(t('toast.masterUserDeleteErrorTitle'), t('toast.masterUserDeleteError'), "danger");
        return;
    }

    const users = JSON.parse(localStorage.getItem("mi_users")) || [];
    const user = users.find(u => u.username === username);
    if (!user) return;

    document.getElementById("edit-user-original-username").value = user.username;
    document.getElementById("edit-user-name").value = user.name;
    document.getElementById("edit-user-position").value = user.position;
    document.getElementById("edit-user-shift").value = user.shift;
    document.getElementById("edit-user-level").value = user.level;
    document.getElementById("edit-user-username").value = user.username;
    document.getElementById("edit-user-password").value = user.password;
    document.getElementById("edit-user-email").value = user.email || "";
    document.getElementById("edit-user-error").style.display = "none";

    document.getElementById("modal-edit-user").classList.add("active");
    lucide.createIcons();
}

/* handleUpdateUser - Submit handler for updating user details */
function handleUpdateUser(e) {
    e.preventDefault();
    if (currentUser.level !== 3) return;

    const originalUsername = document.getElementById("edit-user-original-username").value;
    const name = document.getElementById("edit-user-name").value.trim();
    const position = document.getElementById("edit-user-position").value.trim();
    const shift = document.getElementById("edit-user-shift").value;
    const level = parseInt(document.getElementById("edit-user-level").value);
    const username = document.getElementById("edit-user-username").value.trim().toLowerCase();
    const password = document.getElementById("edit-user-password").value.trim();
    const email = document.getElementById("edit-user-email").value.trim();
    const errorDiv = document.getElementById("edit-user-error");

    // Block master user username registration/takeover
    if (username === "1234" && originalUsername !== "1234") {
        errorDiv.style.display = "block";
        return;
    }

    const users = JSON.parse(localStorage.getItem("mi_users")) || [];
    
    // Check duplicate username (excluding originalUsername)
    if (users.some(u => u.username === username && u.username !== originalUsername)) {
        errorDiv.style.display = "block";
        return;
    }

    errorDiv.style.display = "none";

    const index = users.findIndex(u => u.username === originalUsername);
    if (index === -1) return;

    const updatedUser = {
        name,
        position,
        shift,
        level,
        username,
        password,
        email
    };

    users[index] = updatedUser;
    localStorage.setItem("mi_users", JSON.stringify(users));

    closeModal("edit-user-modal");
    renderUsers();

    // If the updated user is the currently logged in user, refresh their session
    if (currentUser.username === originalUsername) {
        currentUser = updatedUser;
        sessionStorage.setItem("mi_active_user", JSON.stringify(currentUser));
        showApp();
    }

    showToast(t('toast.userUpdatedTitle'), t('toast.userUpdatedDesc', {name: name}), "success");
}

/* ==========================================================================
   FLOATING GLASS TOAST NOTIFICATION CONTAINER SYSTEM
   ========================================================================== */
function showToast(title, message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    
    toast.className = `toast toast-${type} glass-panel`;
    
    let iconName = "check-circle";
    if (type === "warning") iconName = "alert-triangle";
    if (type === "danger") iconName = "alert-circle";
    if (type === "info") iconName = "info";

    toast.innerHTML = `
        <i data-lucide="${iconName}" class="toast-icon"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    // Auto-remove toast after 4.5 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(50px)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4500);
}

/* ==========================================================================
   USER LEVEL / ACCESS MODIFICATION LOGIC
   ========================================================================== */
function changeUserLevel(username, newLevel) {
    const levelNum = parseInt(newLevel);
    const users = JSON.parse(localStorage.getItem("mi_users")) || [];
    const userIndex = users.findIndex(u => u.username === username);
    
    if (userIndex === -1) return;
    
    users[userIndex].level = levelNum;
    localStorage.setItem("mi_users", JSON.stringify(users));
    
    showToast(t('toast.userLevelChangedTitle'), t('toast.userLevelChanged', {name: users[userIndex].name, level: levelNum}), "success");
    
    // If the edited user is the currently logged-in user, dynamically switch access/permissions in hot reload
    if (currentUser.username === username) {
        currentUser.level = levelNum;
        sessionStorage.setItem("mi_active_user", JSON.stringify(currentUser));
        showApp();
    } else {
        renderUsers();
    }
}

/* ==========================================================================
   REPORT COMMENTS ADDITION LOGIC
   ========================================================================== */
function addReportComment(reportId) {
    const input = document.getElementById(`input-comment-${reportId}`);
    if (!input) return;
    const commentText = input.value.trim();
    if (commentText === "") {
        showToast(t('toast.commentEmptyTitle'), t('toast.commentEmpty'), "warning");
        return;
    }

    const reports = JSON.parse(localStorage.getItem("mi_reports")) || [];
    const repIndex = reports.findIndex(r => r.id === reportId);
    if (repIndex === -1) return;

    const rep = reports[repIndex];
    rep.comments = rep.comments || [];
    rep.comments.push({
        id: `com-${Date.now()}`,
        author: currentUser.name,
        authorLevel: currentUser.level,
        text: commentText,
        date: new Date().toISOString()
    });

    reports[repIndex] = rep;
    localStorage.setItem("mi_reports", JSON.stringify(reports));

    renderReports();
    showToast(t('toast.commentSuccessTitle'), t('toast.commentSuccess'), "success");
}

/* ==========================================================================
   TAB 5: LIMPIEZA DE IMPRESORA LOGIC
   ========================================================================== */
function addLimpiezaRow() {
    const container = document.getElementById("limpieza-rows-container");
    const row = document.createElement("div");
    row.className = "limpieza-row";
    
    row.innerHTML = `
        <input type="text" class="crono-desc limpieza-estacion" data-i18n-placeholder="limpieza.placeholderEstacion" placeholder="${t('limpieza.placeholderEstacion')}" required maxlength="5" style="max-width: 70px;">
        <input type="text" class="crono-desc limpieza-tipo" data-i18n-placeholder="limpieza.placeholderTipo" placeholder="${t('limpieza.placeholderTipo')}" required>
        <input type="text" class="crono-desc limpieza-ip" data-i18n-placeholder="limpieza.placeholderIp" placeholder="${t('limpieza.placeholderIp')}" required style="max-width: 140px;">
        <button type="button" class="btn-remove-row" onclick="removeLimpiezaRow(this)">&times;</button>
    `;
    container.appendChild(row);
    row.querySelector(".limpieza-estacion").focus();
}

function removeLimpiezaRow(btn) {
    const container = document.getElementById("limpieza-rows-container");
    const rows = container.querySelectorAll(".limpieza-row");
    if (rows.length > 1) {
        btn.parentElement.remove();
    } else {
        showToast(t('toast.reportMinRowTitle') || "Mínimo Requerido", t('toast.reportMinRow') || "El cronograma debe tener al menos una hora registrada.", "warning");
    }
}

function handleCreateLimpieza(e) {
    e.preventDefault();
    if (currentUser.level !== 1) return;

    const rows = document.querySelectorAll(".limpieza-row");
    const list = [];
    rows.forEach(row => {
        const estacion = row.querySelector(".limpieza-estacion").value.trim();
        const tipo = row.querySelector(".limpieza-tipo").value.trim();
        const ip = row.querySelector(".limpieza-ip").value.trim();
        if (estacion && tipo && ip) {
            list.push({ estacion, tipo, ip });
        }
    });

    if (list.length === 0) {
        showToast(t('toast.reportEmptyTitle') || "Formulario vacío", t('toast.reportEmpty') || "Debe agregar al menos una actividad al cronograma.", "warning");
        return;
    }

    const limpiezas = JSON.parse(localStorage.getItem("mi_limpiezas")) || [];
    
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const newLog = {
        id: `LIM-${Date.now()}`,
        date: dateStr,
        username: currentUser.name,
        shift: currentUser.shift,
        items: list
    };

    limpiezas.unshift(newLog);
    localStorage.setItem("mi_limpiezas", JSON.stringify(limpiezas));

    // Reset Form
    document.getElementById("printer-cleaning-form").reset();
    
    // Reset container to a single empty row
    const container = document.getElementById("limpieza-rows-container");
    container.innerHTML = `
        <div class="limpieza-row">
            <input type="text" class="crono-desc limpieza-estacion" data-i18n-placeholder="limpieza.placeholderEstacion" placeholder="${t('limpieza.placeholderEstacion')}" required maxlength="5" style="max-width: 70px;">
            <input type="text" class="crono-desc limpieza-tipo" data-i18n-placeholder="limpieza.placeholderTipo" placeholder="${t('limpieza.placeholderTipo')}" required>
            <input type="text" class="crono-desc limpieza-ip" data-i18n-placeholder="limpieza.placeholderIp" placeholder="${t('limpieza.placeholderIp')}" required style="max-width: 140px;">
            <button type="button" class="btn-remove-row" onclick="removeLimpiezaRow(this)">&times;</button>
        </div>
    `;

    renderLimpieza();
    showToast(t('toast.limpiezaSuccessTitle'), t('toast.limpiezaSuccessDesc', {count: list.length}), "success");
}

function renderLimpieza() {
    const limpiezas = JSON.parse(localStorage.getItem("mi_limpiezas")) || [];
    const accordion = document.getElementById("limpieza-grouped-accordion");
    const emptyState = document.getElementById("limpieza-empty-state");

    accordion.innerHTML = "";

    // History is only visible to Level 2 & 3
    if (currentUser.level < 2) {
        emptyState.style.display = "none";
        return;
    }

    if (limpiezas.length === 0) {
        emptyState.style.display = "flex";
        return;
    }

    emptyState.style.display = "none";

    // Group by Date
    const grouped = {};
    limpiezas.forEach(log => {
        const date = log.date;
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(log);
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

    sortedDates.forEach(date => {
        const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        // Compute summary values
        const totalLogs = grouped[date].length;
        let totalPrinters = 0;
        grouped[date].forEach(log => {
            totalPrinters += log.items.length;
        });

        const summaryText = currentLanguage === 'es'
            ? `${totalLogs} ${totalLogs === 1 ? 'registro' : 'registros'} (${totalPrinters} ${totalPrinters === 1 ? 'impresora' : 'impresoras'})`
            : `${totalLogs} ${totalLogs === 1 ? 'log' : 'logs'} (${totalPrinters} ${totalPrinters === 1 ? 'printer' : 'printers'})`;

        const dateGroup = document.createElement("div");
        dateGroup.className = "report-date-group";

        const header = document.createElement("div");
        header.className = "date-group-header clickable";
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        header.onclick = () => toggleDateGroup(header);

        header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <i data-lucide="calendar"></i>
                <span style="text-transform: capitalize;">${formattedDate}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; margin-left: auto;">
                <span class="badge" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary); font-size: 0.78rem; font-weight: 600; padding: 4px 8px; border-radius: 12px;">${summaryText}</span>
                <i data-lucide="chevron-down" class="accordion-arrow" style="width: 16px; height: 16px; transition: transform 0.2s;"></i>
            </div>
        `;
        dateGroup.appendChild(header);

        const content = document.createElement("div");
        content.className = "date-group-content";
        content.style.display = "none"; // collapsed by default
        content.style.flexDirection = "column";
        content.style.gap = "12px";
        content.style.marginTop = "8px";

        grouped[date].forEach(log => {
            const initials = log.username.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
            
            const card = document.createElement("div");
            card.className = "report-row-card";
            
            let listHtml = '<div class="simple-report-summary">';
            listHtml += `<div class="summary-subtitle" style="font-weight:600; margin-bottom:8px;">${currentLanguage === 'es' ? 'Impresoras Limpiadas' : 'Cleaned Printers'}</div>`;
            listHtml += '<ul class="summary-list" style="margin-left: 0; padding-left: 0; list-style: none;">';
            
            log.items.forEach(item => {
                listHtml += `<li style="padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.88rem;">
                    <strong>${currentLanguage === 'es' ? 'Estación' : 'Station'}:</strong> <code>${item.estacion}</code> | 
                    <strong>${currentLanguage === 'es' ? 'Tipo' : 'Type'}:</strong> ${item.tipo} | 
                    <strong>IP:</strong> <code>${item.ip}</code>
                </li>`;
            });
            listHtml += '</ul></div>';

            card.innerHTML = `
                <div class="report-row-header">
                    <div class="report-reporter-info">
                        <div class="reporter-avatar">${initials}</div>
                        <span class="reporter-text">${log.username} <small class="text-muted">(${t('shift.' + log.shift.toLowerCase()) || log.shift})</small></span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="openEditLimpiezaModal('${log.id}')" style="padding:4px 8px; font-size:0.75rem; display:flex; align-items:center; gap:4px; height:28px;">
                            <i data-lucide="edit-3" style="width:12px; height:12px;"></i> ${currentLanguage === 'es' ? 'Modificar' : 'Modify'}
                        </button>
                        <span class="report-time-tag"><i data-lucide="printer"></i> ${currentLanguage === 'es' ? 'Registro Limpieza' : 'Cleaning Log'}</span>
                    </div>
                </div>
                <div class="report-row-body" style="padding-top: 10px;">
                    ${listHtml}
                </div>
            `;
            content.appendChild(card);
        });

        dateGroup.appendChild(content);
        accordion.appendChild(dateGroup);
    });

    lucide.createIcons();
}

/* ==========================================================================
   TAB 6: VERIFICACIÓN RFID LOGIC
   ========================================================================== */
function addRfidRow() {
    const container = document.getElementById("rfid-rows-container");
    const row = document.createElement("div");
    row.className = "rfid-row";
    
    row.innerHTML = `
        <input type="text" class="crono-desc rfid-estacion" data-i18n-placeholder="rfid.placeholderEstacion" placeholder="${t('rfid.placeholderEstacion')}" required maxlength="5" style="max-width: 70px;">
        <input type="text" class="crono-desc rfid-ip" data-i18n-placeholder="rfid.placeholderIp" placeholder="${t('rfid.placeholderIp')}" required style="max-width: 160px;">
        <div class="rfid-status-toggle" style="display: flex; gap: 6px; flex-shrink: 0;">
            <button type="button" class="btn-rfid-status pass active" onclick="setRfidStatus(this, 'pass')" title="Aprobado">
                <i data-lucide="check" style="width: 16px; height: 16px;"></i>
            </button>
            <button type="button" class="btn-rfid-status fail" onclick="setRfidStatus(this, 'fail')" title="Fallo">
                <i data-lucide="x" style="width: 16px; height: 16px;"></i>
            </button>
            <input type="hidden" class="rfid-status-input" value="pass">
        </div>
        <button type="button" class="btn-remove-row" onclick="removeRfidRow(this)">&times;</button>
    `;
    container.appendChild(row);
    lucide.createIcons();
    row.querySelector(".rfid-estacion").focus();
}

function removeRfidRow(btn) {
    const container = document.getElementById("rfid-rows-container");
    const rows = container.querySelectorAll(".rfid-row");
    if (rows.length > 1) {
        btn.parentElement.remove();
    } else {
        showToast(t('toast.reportMinRowTitle') || "Mínimo Requerido", t('toast.reportMinRow') || "El cronograma debe tener al menos una hora registrada.", "warning");
    }
}

function setRfidStatus(btn, status) {
    const parent = btn.parentElement;
    parent.querySelectorAll(".btn-rfid-status").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    parent.querySelector(".rfid-status-input").value = status;
}

function handleCreateRfid(e) {
    e.preventDefault();
    if (currentUser.level > 2) return;

    const rows = document.querySelectorAll(".rfid-row");
    const list = [];
    rows.forEach(row => {
        const estacion = row.querySelector(".rfid-estacion").value.trim();
        const ip = row.querySelector(".rfid-ip").value.trim();
        const status = row.querySelector(".rfid-status-input").value;
        if (estacion && ip && status) {
            list.push({ estacion, ip, status });
        }
    });

    if (list.length === 0) {
        showToast(t('toast.reportEmptyTitle') || "Formulario vacío", t('toast.reportEmpty') || "Debe agregar al menos una actividad al cronograma.", "warning");
        return;
    }

    const rfids = JSON.parse(localStorage.getItem("mi_rfids")) || [];
    
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const newLog = {
        id: `RFD-${Date.now()}`,
        date: dateStr,
        username: currentUser.name,
        shift: currentUser.shift,
        items: list
    };

    rfids.unshift(newLog);
    localStorage.setItem("mi_rfids", JSON.stringify(rfids));

    // Reset Form
    document.getElementById("rfid-verification-form").reset();
    
    // Reset container to a single empty row
    const container = document.getElementById("rfid-rows-container");
    container.innerHTML = `
        <div class="rfid-row">
            <input type="text" class="crono-desc rfid-estacion" data-i18n-placeholder="rfid.placeholderEstacion" placeholder="${t('rfid.placeholderEstacion')}" required>
            <input type="text" class="crono-desc rfid-ip" data-i18n-placeholder="rfid.placeholderIp" placeholder="${t('rfid.placeholderIp')}" required style="max-width: 160px;">
            <div class="rfid-status-toggle" style="display: flex; gap: 6px; flex-shrink: 0;">
                <button type="button" class="btn-rfid-status pass active" onclick="setRfidStatus(this, 'pass')" title="Aprobado">
                    <i data-lucide="check" style="width: 16px; height: 16px;"></i>
                </button>
                <button type="button" class="btn-rfid-status fail" onclick="setRfidStatus(this, 'fail')" title="Fallo">
                    <i data-lucide="x" style="width: 16px; height: 16px;"></i>
                </button>
                <input type="hidden" class="rfid-status-input" value="pass">
            </div>
            <button type="button" class="btn-remove-row" onclick="removeRfidRow(this)">&times;</button>
        </div>
    `;
    lucide.createIcons();

    renderRfid();
    showToast(t('toast.rfidSuccessTitle'), t('toast.rfidSuccessDesc', {count: list.length}), "success");
}

function renderRfid() {
    const rfids = JSON.parse(localStorage.getItem("mi_rfids")) || [];
    const accordion = document.getElementById("rfid-grouped-accordion");
    const emptyState = document.getElementById("rfid-empty-state");

    accordion.innerHTML = "";

    // History is only visible to Level 2 & 3
    if (currentUser.level < 2) {
        emptyState.style.display = "none";
        return;
    }

    if (rfids.length === 0) {
        emptyState.style.display = "flex";
        return;
    }

    emptyState.style.display = "none";

    // Group by Date
    const grouped = {};
    rfids.forEach(log => {
        const date = log.date;
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(log);
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

    sortedDates.forEach(date => {
        const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        // Compute summary values
        const totalLogs = grouped[date].length;
        let totalItems = 0;
        let totalPass = 0;
        let totalFail = 0;
        grouped[date].forEach(log => {
            totalItems += log.items.length;
            log.items.forEach(item => {
                if (item.status === 'pass') totalPass++;
                else totalFail++;
            });
        });

        const summaryText = currentLanguage === 'es'
            ? `${totalLogs} ${totalLogs === 1 ? 'registro' : 'registros'} (${totalItems} RFID: ${totalPass} ✓, ${totalFail} ✗)`
            : `${totalLogs} ${totalLogs === 1 ? 'log' : 'logs'} (${totalItems} RFID: ${totalPass} ✓, ${totalFail} ✗)`;

        const dateGroup = document.createElement("div");
        dateGroup.className = "report-date-group";

        const header = document.createElement("div");
        header.className = "date-group-header clickable";
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        header.onclick = () => toggleDateGroup(header);

        header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <i data-lucide="calendar"></i>
                <span style="text-transform: capitalize;">${formattedDate}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; margin-left: auto;">
                <span class="badge" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary); font-size: 0.78rem; font-weight: 600; padding: 4px 8px; border-radius: 12px;">${summaryText}</span>
                <i data-lucide="chevron-down" class="accordion-arrow" style="width: 16px; height: 16px; transition: transform 0.2s;"></i>
            </div>
        `;
        dateGroup.appendChild(header);

        const content = document.createElement("div");
        content.className = "date-group-content";
        content.style.display = "none"; // collapsed by default
        content.style.flexDirection = "column";
        content.style.gap = "12px";
        content.style.marginTop = "8px";

        grouped[date].forEach(log => {
            const initials = log.username.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
            
            const card = document.createElement("div");
            card.className = "report-row-card";
            
            let listHtml = '<div class="simple-report-summary">';
            listHtml += `<div class="summary-subtitle" style="font-weight:600; margin-bottom:8px;">${currentLanguage === 'es' ? 'Lectores RFID Verificados' : 'Verified RFID Readers'}</div>`;
            listHtml += '<ul class="summary-list" style="margin-left: 0; padding-left: 0; list-style: none;">';
            
            log.items.forEach(item => {
                const isPass = item.status === 'pass';
                const statusBadge = isPass
                    ? `<span style="display:inline-flex; align-items:center; gap:4px; padding:2px 8px; font-size:0.75rem; border-radius:12px; background:var(--color-success-bg); color:var(--color-success); font-weight:600;"><i data-lucide="check" style="width:12px; height:12px;"></i> ${currentLanguage === 'es' ? 'Pasa' : 'Pass'}</span>`
                    : `<span style="display:inline-flex; align-items:center; gap:4px; padding:2px 8px; font-size:0.75rem; border-radius:12px; background:var(--color-danger-bg); color:var(--color-danger); font-weight:600;"><i data-lucide="x" style="width:12px; height:12px;"></i> ${currentLanguage === 'es' ? 'Fallo' : 'Fail'}</span>`;
                
                listHtml += `<li style="padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.88rem; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>${currentLanguage === 'es' ? 'Estación' : 'Station'}:</strong> <code>${item.estacion}</code> | 
                        <strong>IP:</strong> <code>${item.ip}</code>
                    </div>
                    ${statusBadge}
                </li>`;
            });
            listHtml += '</ul></div>';

            card.innerHTML = `
                <div class="report-row-header">
                    <div class="report-reporter-info">
                        <div class="reporter-avatar">${initials}</div>
                        <span class="reporter-text">${log.username} <small class="text-muted">(${t('shift.' + log.shift.toLowerCase()) || log.shift})</small></span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="openEditRfidModal('${log.id}')" style="padding:4px 8px; font-size:0.75rem; display:flex; align-items:center; gap:4px; height:28px;">
                            <i data-lucide="edit-3" style="width:12px; height:12px;"></i> ${currentLanguage === 'es' ? 'Modificar' : 'Modify'}
                        </button>
                        <span class="report-time-tag"><i data-lucide="radio"></i> ${currentLanguage === 'es' ? 'Verificación RFID' : 'RFID Verification'}</span>
                    </div>
                </div>
                <div class="report-row-body" style="padding-top: 10px;">
                    ${listHtml}
                </div>
            `;
            content.appendChild(card);
        });

        dateGroup.appendChild(content);
        accordion.appendChild(dateGroup);
    });

    lucide.createIcons();
}

function toggleDateGroup(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".accordion-arrow");
    const isCollapsed = content.style.display === "none";
    
    if (isCollapsed) {
        content.style.display = "flex";
        header.classList.add("expanded");
        if (arrow) arrow.style.transform = "rotate(180deg)";
    } else {
        content.style.display = "none";
        header.classList.remove("expanded");
        if (arrow) arrow.style.transform = "rotate(0deg)";
    }
}

function openEditLimpiezaModal(logId) {
    const limpiezas = JSON.parse(localStorage.getItem("mi_limpiezas")) || [];
    const log = limpiezas.find(l => l.id === logId);
    if (!log) return;
    
    document.getElementById("edit-limpieza-log-id").value = logId;
    const container = document.getElementById("edit-limpieza-rows-container");
    container.innerHTML = "";
    
    log.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "limpieza-row";
        row.innerHTML = `
            <input type="text" class="crono-desc limpieza-estacion" data-i18n-placeholder="limpieza.placeholderEstacion" placeholder="${t('limpieza.placeholderEstacion')}" value="${item.estacion}" required maxlength="5" style="max-width: 70px;">
            <input type="text" class="crono-desc limpieza-tipo" data-i18n-placeholder="limpieza.placeholderTipo" placeholder="${t('limpieza.placeholderTipo')}" value="${item.tipo}" required>
            <input type="text" class="crono-desc limpieza-ip" data-i18n-placeholder="limpieza.placeholderIp" placeholder="${t('limpieza.placeholderIp')}" value="${item.ip}" required style="max-width: 140px;">
            <button type="button" class="btn-remove-row" onclick="removeEditLimpiezaRow(this)">&times;</button>
        `;
        container.appendChild(row);
    });
    
    document.getElementById("modal-edit-limpieza").classList.add("active");
    lucide.createIcons();
}

function addEditLimpiezaRow() {
    const container = document.getElementById("edit-limpieza-rows-container");
    const row = document.createElement("div");
    row.className = "limpieza-row";
    row.innerHTML = `
        <input type="text" class="crono-desc limpieza-estacion" data-i18n-placeholder="limpieza.placeholderEstacion" placeholder="${t('limpieza.placeholderEstacion')}" required maxlength="5" style="max-width: 70px;">
        <input type="text" class="crono-desc limpieza-tipo" data-i18n-placeholder="limpieza.placeholderTipo" placeholder="${t('limpieza.placeholderTipo')}" required>
        <input type="text" class="crono-desc limpieza-ip" data-i18n-placeholder="limpieza.placeholderIp" placeholder="${t('limpieza.placeholderIp')}" required style="max-width: 140px;">
        <button type="button" class="btn-remove-row" onclick="removeEditLimpiezaRow(this)">&times;</button>
    `;
    container.appendChild(row);
    row.querySelector(".limpieza-estacion").focus();
}

function removeEditLimpiezaRow(btn) {
    const container = document.getElementById("edit-limpieza-rows-container");
    const rows = container.querySelectorAll(".edit-limpieza-row, .limpieza-row");
    if (rows.length > 1) {
        btn.parentElement.remove();
    } else {
        showToast(t('toast.reportMinRowTitle') || "Mínimo Requerido", t('toast.reportMinRow') || "El cronograma debe tener al menos una hora registrada.", "warning");
    }
}

function handleUpdateLimpieza(e) {
    e.preventDefault();
    const logId = document.getElementById("edit-limpieza-log-id").value;
    const limpiezas = JSON.parse(localStorage.getItem("mi_limpiezas")) || [];
    const logIndex = limpiezas.findIndex(l => l.id === logId);
    if (logIndex === -1) return;
    
    const container = document.getElementById("edit-limpieza-rows-container");
    const rows = container.querySelectorAll(".limpieza-row");
    const list = [];
    rows.forEach(row => {
        const estacion = row.querySelector(".limpieza-estacion").value.trim();
        const tipo = row.querySelector(".limpieza-tipo").value.trim();
        const ip = row.querySelector(".limpieza-ip").value.trim();
        if (estacion && tipo && ip) {
            list.push({ estacion, tipo, ip });
        }
    });
    
    if (list.length === 0) {
        showToast(t('toast.reportEmptyTitle') || "Formulario vacío", t('toast.reportEmpty') || "Debe agregar al menos una actividad al cronograma.", "warning");
        return;
    }
    
    limpiezas[logIndex].items = list;
    localStorage.setItem("mi_limpiezas", JSON.stringify(limpiezas));
    
    closeModal("edit-limpieza-modal");
    renderLimpieza();
    showToast(t('toast.itemUpdatedTitle') || "Registro Actualizado", currentLanguage === 'es' ? 'El registro de limpieza ha sido actualizado.' : 'The cleaning record has been updated.', "success");
}

function openEditRfidModal(logId) {
    const rfids = JSON.parse(localStorage.getItem("mi_rfids")) || [];
    const log = rfids.find(l => l.id === logId);
    if (!log) return;
    
    document.getElementById("edit-rfid-log-id").value = logId;
    const container = document.getElementById("edit-rfid-rows-container");
    container.innerHTML = "";
    
    log.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "rfid-row";
        
        const isPass = item.status === 'pass';
        row.innerHTML = `
            <input type="text" class="crono-desc rfid-estacion" data-i18n-placeholder="rfid.placeholderEstacion" placeholder="${t('rfid.placeholderEstacion')}" value="${item.estacion}" required maxlength="5" style="max-width: 70px;">
            <input type="text" class="crono-desc rfid-ip" data-i18n-placeholder="rfid.placeholderIp" placeholder="${t('rfid.placeholderIp')}" value="${item.ip}" required style="max-width: 160px;">
            <div class="rfid-status-toggle" style="display: flex; gap: 6px; flex-shrink: 0;">
                <button type="button" class="btn-rfid-status pass ${isPass ? 'active' : ''}" onclick="setRfidStatus(this, 'pass')" title="Aprobado">
                    <i data-lucide="check" style="width: 16px; height: 16px;"></i>
                </button>
                <button type="button" class="btn-rfid-status fail ${!isPass ? 'active' : ''}" onclick="setRfidStatus(this, 'fail')" title="Fallo">
                    <i data-lucide="x" style="width: 16px; height: 16px;"></i>
                </button>
                <input type="hidden" class="rfid-status-input" value="${item.status}">
            </div>
            <button type="button" class="btn-remove-row" onclick="removeEditRfidRow(this)">&times;</button>
        `;
        container.appendChild(row);
    });
    
    document.getElementById("modal-edit-rfid").classList.add("active");
    lucide.createIcons();
}

function addEditRfidRow() {
    const container = document.getElementById("edit-rfid-rows-container");
    const row = document.createElement("div");
    row.className = "rfid-row";
    
    row.innerHTML = `
        <input type="text" class="crono-desc rfid-estacion" data-i18n-placeholder="rfid.placeholderEstacion" placeholder="${t('rfid.placeholderEstacion')}" required maxlength="5" style="max-width: 70px;">
        <input type="text" class="crono-desc rfid-ip" data-i18n-placeholder="rfid.placeholderIp" placeholder="${t('rfid.placeholderIp')}" required style="max-width: 160px;">
        <div class="rfid-status-toggle" style="display: flex; gap: 6px; flex-shrink: 0;">
            <button type="button" class="btn-rfid-status pass active" onclick="setRfidStatus(this, 'pass')" title="Aprobado">
                <i data-lucide="check" style="width: 16px; height: 16px;"></i>
            </button>
            <button type="button" class="btn-rfid-status fail" onclick="setRfidStatus(this, 'fail')" title="Fallo">
                <i data-lucide="x" style="width: 16px; height: 16px;"></i>
            </button>
            <input type="hidden" class="rfid-status-input" value="pass">
        </div>
        <button type="button" class="btn-remove-row" onclick="removeEditRfidRow(this)">&times;</button>
    `;
    container.appendChild(row);
    lucide.createIcons();
    row.querySelector(".rfid-estacion").focus();
}

function removeEditRfidRow(btn) {
    const container = document.getElementById("edit-rfid-rows-container");
    const rows = container.querySelectorAll(".edit-rfid-row, .rfid-row");
    if (rows.length > 1) {
        btn.parentElement.remove();
    } else {
        showToast(t('toast.reportMinRowTitle') || "Mínimo Requerido", t('toast.reportMinRow') || "El cronograma debe tener al menos una hora registrada.", "warning");
    }
}

function handleUpdateRfid(e) {
    e.preventDefault();
    const logId = document.getElementById("edit-rfid-log-id").value;
    const rfids = JSON.parse(localStorage.getItem("mi_rfids")) || [];
    const logIndex = rfids.findIndex(r => r.id === logId);
    if (logIndex === -1) return;
    
    const container = document.getElementById("edit-rfid-rows-container");
    const rows = container.querySelectorAll(".rfid-row");
    const list = [];
    rows.forEach(row => {
        const estacion = row.querySelector(".rfid-estacion").value.trim();
        const ip = row.querySelector(".rfid-ip").value.trim();
        const status = row.querySelector(".rfid-status-input").value;
        if (estacion && ip && status) {
            list.push({ estacion, ip, status });
        }
    });
    
    if (list.length === 0) {
        showToast(t('toast.reportEmptyTitle') || "Formulario vacío", t('toast.reportEmpty') || "Debe agregar al menos una actividad al cronograma.", "warning");
        return;
    }
    
    rfids[logIndex].items = list;
    localStorage.setItem("mi_rfids", JSON.stringify(rfids));
    
    closeModal("edit-rfid-modal");
    renderRfid();
    showToast(t('toast.itemUpdatedTitle') || "Registro Actualizado", currentLanguage === 'es' ? 'La verificación RFID ha sido actualizada.' : 'The RFID verification has been updated.', "success");
}

function toggleDemoMode(enabled) {
    const selector = document.getElementById("demo-level-selector-container");
    if (enabled) {
        selector.classList.remove("hidden");
        const val = parseInt(document.getElementById("demo-level-select").value);
        sessionStorage.setItem("mi_demo_active", "true");
        sessionStorage.setItem("mi_demo_level", val);
        currentUser.level = val;
    } else {
        selector.classList.add("hidden");
        sessionStorage.removeItem("mi_demo_active");
        sessionStorage.removeItem("mi_demo_level");
        currentUser.level = 3; // Restore master admin level
    }
    showApp();
}

function changeDemoLevel(level) {
    const val = parseInt(level);
    sessionStorage.setItem("mi_demo_level", val);
    currentUser.level = val;
    showApp();
}

/* ==========================================================================
   PDF GENERATION & DOWNLOAD FUNCTIONS (jsPDF & jsPDF-AutoTable)
   ========================================================================== */

function getPdfDoc() {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        showToast("Error de PDF", "La librería de PDF no está cargada. Por favor, revise su conexión a internet.", "danger");
        return null;
    }
    return new window.jspdf.jsPDF();
}

function downloadItemPDF() {
    if (!selectedItem) return;
    const doc = getPdfDoc();
    if (!doc) return;

    const formattedDate = new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    let stockStatus = t('inventory.sufficientStock');
    if (selectedItem.stock === 0) {
        stockStatus = t('inventory.outOfStock');
    } else if (selectedItem.stock <= selectedItem.minStock) {
        stockStatus = t('inventory.lowStock');
    }

    // PDF styling and content
    doc.setFillColor(79, 70, 229); // indigo primary
    doc.rect(0, 0, 210, 15, 'F');

    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("MASTERINVENTORY - FICHA TÉCNICA", 15, 10);

    // Metadata
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${currentLanguage === 'es' ? 'Fecha de generación' : 'Generated on'}: ${formattedDate}`, 15, 25);
    doc.text(`${currentLanguage === 'es' ? 'Generado por' : 'Generated by'}: ${currentUser ? currentUser.name : 'System'}`, 15, 30);

    // Divider line
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 35, 195, 35);

    // Item Details
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(selectedItem.name.toUpperCase(), 15, 48);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`${t('orders.modelLabel')}: ${selectedItem.brand} • ${selectedItem.model}`, 15, 56);

    // Details Grid as autoTable
    const detailHeaders = [[
        currentLanguage === 'es' ? 'Campo' : 'Field',
        currentLanguage === 'es' ? 'Valor' : 'Value'
    ]];
    const detailRows = [
        ['SKU', selectedItem.sku],
        [currentLanguage === 'es' ? 'Ubicación' : 'Location', selectedItem.location],
        [currentLanguage === 'es' ? 'Stock Mínimo' : 'Minimum Stock', `${selectedItem.minStock} pcs`],
        [currentLanguage === 'es' ? 'Stock Actual' : 'Current Stock', `${selectedItem.stock} pcs`],
        [currentLanguage === 'es' ? 'Estado de Stock' : 'Stock Status', stockStatus.toUpperCase()],
    ];

    doc.autoTable({
        head: detailHeaders,
        body: detailRows,
        startY: 65,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 10, cellPadding: 5 },
        columnStyles: {
            0: { fontStyle: 'bold', width: 50 },
        }
    });

    // Description Section
    const finalY = doc.lastAutoTable.finalY + 15;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(currentLanguage === 'es' ? "DESCRIPCIÓN GENERAL:" : "GENERAL DESCRIPTION:", 15, finalY);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const splitDesc = doc.splitTextToSize(selectedItem.description || (currentLanguage === 'es' ? "Sin descripción adicional." : "No description provided."), 180);
    doc.text(splitDesc, 15, finalY + 7);

    // Footer note
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("MasterInventory - Smart Inventory System", 15, 285);

    doc.save(`Ficha_Tecnica_${selectedItem.sku}.pdf`);
    showToast(currentLanguage === 'es' ? "PDF Descargado" : "PDF Downloaded", currentLanguage === 'es' ? 'Ficha técnica descargada con éxito.' : 'Specification sheet downloaded successfully.', "success");
}

function downloadMovementsPDF() {
    const doc = getPdfDoc();
    if (!doc) return;

    const movements = JSON.parse(localStorage.getItem("mi_movements")) || [];
    
    // PDF Header
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, 210, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(currentLanguage === 'es' ? "REPORTE DE MOVIMIENTOS" : "TRANSACTION LOG REPORT", 15, 10);

    const formattedDate = new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    doc.setTextColor(30, 41, 59);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${currentLanguage === 'es' ? 'Fecha de generación' : 'Generated on'}: ${formattedDate}`, 15, 25);
    doc.text(`${currentLanguage === 'es' ? 'Generado por' : 'Generated by'}: ${currentUser ? currentUser.name : 'System'}`, 15, 30);

    // Divider line
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 35, 195, 35);

    const headers = [[
        currentLanguage === 'es' ? 'Fecha' : 'Date',
        currentLanguage === 'es' ? 'Usuario' : 'User',
        currentLanguage === 'es' ? 'Componente' : 'Component',
        'SKU',
        currentLanguage === 'es' ? 'Tipo' : 'Type',
        currentLanguage === 'es' ? 'Cant.' : 'Qty',
        'Stock'
    ]];

    const rows = movements.map(mov => {
        const movDate = new Date(mov.date).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        let typeStr = mov.type;
        if (mov.type === 'add') typeStr = currentLanguage === 'es' ? 'Entrada' : 'Addition';
        else if (mov.type === 'sub') typeStr = currentLanguage === 'es' ? 'Retiro' : 'Removal';
        else if (mov.type === 'create') typeStr = currentLanguage === 'es' ? 'Creación' : 'Creation';
        else if (mov.type === 'edit') typeStr = currentLanguage === 'es' ? 'Edición' : 'Edit';
        else if (mov.type === 'received') typeStr = currentLanguage === 'es' ? 'Recibido' : 'Received';

        return [
            movDate,
            mov.username,
            mov.itemName,
            mov.sku,
            typeStr,
            mov.qty,
            `${mov.previousStock} -> ${mov.newStock}`
        ];
    });

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 40,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8.5 }
    });

    // Footer note
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("MasterInventory - Smart Inventory System", 15, 285);

    doc.save(`Reporte_Movimientos_${Date.now()}.pdf`);
    showToast(currentLanguage === 'es' ? "PDF Descargado" : "PDF Downloaded", currentLanguage === 'es' ? 'Reporte de movimientos descargado con éxito.' : 'Movements report downloaded successfully.', "success");
}

function downloadLimpiezaPDF() {
    const doc = getPdfDoc();
    if (!doc) return;

    const limpiezas = JSON.parse(localStorage.getItem("mi_limpiezas")) || [];

    // PDF Header
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, 210, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(currentLanguage === 'es' ? "REPORTE DE LIMPIEZA DE IMPRESORAS" : "PRINTER CLEANING REPORT", 15, 10);

    const formattedDate = new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    doc.setTextColor(30, 41, 59);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${currentLanguage === 'es' ? 'Fecha de generación' : 'Generated on'}: ${formattedDate}`, 15, 25);
    doc.text(`${currentLanguage === 'es' ? 'Generado por' : 'Generated by'}: ${currentUser ? currentUser.name : 'System'}`, 15, 30);

    // Divider line
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 35, 195, 35);

    const headers = [[
        currentLanguage === 'es' ? 'Fecha' : 'Date',
        currentLanguage === 'es' ? 'Usuario' : 'User',
        currentLanguage === 'es' ? 'Turno' : 'Shift',
        currentLanguage === 'es' ? 'Estación' : 'Station',
        currentLanguage === 'es' ? 'Tipo de Impresora' : 'Printer Type',
        'IP Address'
    ]];

    const rows = [];
    limpiezas.forEach(log => {
        const logDate = new Date(log.date + "T00:00:00").toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
        const shiftTrans = t('shift.' + log.shift.toLowerCase()) || log.shift;
        
        log.items.forEach(item => {
            rows.push([
                logDate,
                log.username,
                shiftTrans,
                item.estacion,
                item.tipo,
                item.ip
            ]);
        });
    });

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 40,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
    });

    // Footer note
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("MasterInventory - Smart Inventory System", 15, 285);

    doc.save(`Historial_Limpiezas_${Date.now()}.pdf`);
    showToast(currentLanguage === 'es' ? "PDF Descargado" : "PDF Downloaded", currentLanguage === 'es' ? 'Reporte de limpiezas descargado con éxito.' : 'Cleaning report downloaded successfully.', "success");
}

function downloadRfidPDF() {
    const doc = getPdfDoc();
    if (!doc) return;

    const rfids = JSON.parse(localStorage.getItem("mi_rfids")) || [];

    // PDF Header
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, 210, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(currentLanguage === 'es' ? "REPORTE DE VERIFICACIÓN RFID" : "RFID VERIFICATION REPORT", 15, 10);

    const formattedDate = new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    doc.setTextColor(30, 41, 59);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${currentLanguage === 'es' ? 'Fecha de generación' : 'Generated on'}: ${formattedDate}`, 15, 25);
    doc.text(`${currentLanguage === 'es' ? 'Generado por' : 'Generated by'}: ${currentUser ? currentUser.name : 'System'}`, 15, 30);

    // Divider line
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 35, 195, 35);

    const headers = [[
        currentLanguage === 'es' ? 'Fecha' : 'Date',
        currentLanguage === 'es' ? 'Usuario' : 'User',
        currentLanguage === 'es' ? 'Turno' : 'Shift',
        currentLanguage === 'es' ? 'Estación' : 'Station',
        'IP Address',
        currentLanguage === 'es' ? 'Estado' : 'Status'
    ]];

    const rows = [];
    rfids.forEach(log => {
        const logDate = new Date(log.date + "T00:00:00").toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
        const shiftTrans = t('shift.' + log.shift.toLowerCase()) || log.shift;

        log.items.forEach(item => {
            const statusStr = item.status === 'pass'
                ? (currentLanguage === 'es' ? 'APROBADO' : 'PASS')
                : (currentLanguage === 'es' ? 'FALLÓ' : 'FAIL');
            rows.push([
                logDate,
                log.username,
                shiftTrans,
                item.estacion,
                item.ip,
                statusStr
            ]);
        });
    });

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 40,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
    });

    // Footer note
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("MasterInventory - Smart Inventory System", 15, 285);

    doc.save(`Historial_RFID_${Date.now()}.pdf`);
    showToast(currentLanguage === 'es' ? "PDF Descargado" : "PDF Downloaded", currentLanguage === 'es' ? 'Reporte de verificado RFID descargado con éxito.' : 'RFID report downloaded successfully.', "success");
}

function getWeekRange(weekStr) {
    if (!weekStr) return null;
    const parts = weekStr.split("-W");
    if (parts.length !== 2) return null;
    
    const year = parseInt(parts[0], 10);
    const week = parseInt(parts[1], 10);
    
    const jan4 = new Date(year, 0, 4);
    const dayOfWeek = jan4.getDay() || 7;
    const week1Monday = new Date(jan4.getTime() - (dayOfWeek - 1) * 24 * 60 * 60 * 1000);
    
    const startOfWeek = new Date(week1Monday.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);
    const endOfWeek = new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000);
    
    startOfWeek.setHours(0, 0, 0, 0);
    endOfWeek.setHours(23, 59, 59, 999);
    
    return { startDate: startOfWeek, endDate: endOfWeek };
}

function downloadReportsPDF() {
    const doc = getPdfDoc();
    if (!doc) return;

    const reports = JSON.parse(localStorage.getItem("mi_reports")) || [];
    let filteredReports = reports;

    // Filter by User
    const selectedUser = document.getElementById("pdf-report-user").value;
    if (selectedUser) {
        filteredReports = filteredReports.filter(rep => rep.username === selectedUser);
    }

    // Filter by Day
    const selectedDay = document.getElementById("pdf-report-date").value;
    if (selectedDay) {
        filteredReports = filteredReports.filter(rep => rep.date === selectedDay);
    }

    // Filter by Week
    const selectedWeek = document.getElementById("pdf-report-week").value;
    if (selectedWeek) {
        const range = getWeekRange(selectedWeek);
        if (range) {
            filteredReports = filteredReports.filter(rep => {
                const repDate = new Date(rep.date + "T00:00:00");
                return repDate >= range.startDate && repDate <= range.endDate;
            });
        }
    }

    if (filteredReports.length === 0) {
        showToast(
            currentLanguage === 'es' ? "Sin Resultados" : "No Results",
            currentLanguage === 'es' ? "No se encontraron reportes con los filtros seleccionados." : "No reports found matching selected filters.",
            "warning"
        );
        return;
    }

    // Sort by Date Descending, then ID Descending
    filteredReports.sort((a, b) => {
        const dateDiff = new Date(b.date) - new Date(a.date);
        if (dateDiff !== 0) return dateDiff;
        return b.id.localeCompare(a.id);
    });

    // Write title and filters on first page
    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(currentLanguage === 'es' ? "Filtros aplicados:" : "Applied filters:", 15, 25);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    let filterTxt = "";
    filterTxt += `${currentLanguage === 'es' ? 'Usuario' : 'User'}: ${selectedUser || (currentLanguage === 'es' ? 'Todos' : 'All')}  |  `;
    filterTxt += `${currentLanguage === 'es' ? 'Día' : 'Day'}: ${selectedDay || (currentLanguage === 'es' ? 'Cualquiera' : 'Any')}  |  `;
    filterTxt += `${currentLanguage === 'es' ? 'Semana' : 'Week'}: ${selectedWeek || (currentLanguage === 'es' ? 'Cualquiera' : 'Any')}`;
    doc.text(filterTxt, 15, 30);
    
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 34, 195, 34);

    let currentY = 40;

    filteredReports.forEach((rep, idx) => {
        // Page boundary check
        if (currentY > 210) {
            doc.addPage();
            currentY = 25;
        }
        
        // Draw report card banner
        doc.setFillColor(248, 250, 252);
        doc.rect(15, currentY, 180, 20, 'F');
        doc.setDrawColor(226, 232, 240);
        doc.rect(15, currentY, 180, 20, 'S');
        
        // Header Text
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(30, 41, 59);
        const initials = rep.username ? rep.username.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() : "REP";
        doc.text(`${rep.username} (${initials})`, 20, currentY + 7);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        const formattedRepDate = new Date(rep.date + "T00:00:00").toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        const shiftStr = t('shift.' + rep.shift.toLowerCase()) || rep.shift;
        doc.text(`${currentLanguage === 'es' ? 'Fecha' : 'Date'}: ${formattedRepDate}  |  ${currentLanguage === 'es' ? 'Turno' : 'Shift'}: ${shiftStr}`, 20, currentY + 14);
        
        currentY += 25;
        
        // Activities
        const tableHeaders = [[
            currentLanguage === 'es' ? 'Hora' : 'Time',
            currentLanguage === 'es' ? 'Actividad Realizada' : 'Activity Description'
        ]];
        
        const tableRows = [];
        if (rep.activities && Array.isArray(rep.activities)) {
            const sortedAct = [...rep.activities].sort((a, b) => a.time.localeCompare(b.time));
            sortedAct.forEach(act => {
                tableRows.push([act.time, act.description]);
            });
        } else {
            tableRows.push([rep.time || "", rep.activity || ""]);
        }
        
        doc.autoTable({
            head: tableHeaders,
            body: tableRows,
            startY: currentY,
            margin: { left: 15, right: 15 },
            theme: 'striped',
            headStyles: { fillColor: [79, 70, 229] },
            styles: { fontSize: 8.5, cellPadding: 3 },
            columnStyles: {
                0: { width: 25 }
            }
        });
        
        currentY = doc.lastAutoTable.finalY + 6;
        
        // Draw comments if they exist
        const comments = rep.comments || [];
        
        // Title comments
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(79, 70, 229);
        doc.text(t('reports.commentsTitle') + ":", 15, currentY);
        currentY += 4;
        
        if (comments.length > 0) {
            comments.forEach(com => {
                if (currentY > 260) {
                    doc.addPage();
                    currentY = 25;
                }
                const roleText = com.authorLevel === 3 ? t('Admin') : t('Supervisor');
                const commentMeta = `${com.author} (${roleText}) - ${com.date}`;
                doc.setFont("helvetica", "bold");
                doc.setFontSize(7.5);
                doc.setTextColor(71, 85, 105);
                doc.text(commentMeta, 18, currentY);
                currentY += 3.5;
                
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8);
                doc.setTextColor(30, 41, 59);
                const commentText = doc.splitTextToSize(com.text, 170);
                doc.text(commentText, 18, currentY);
                currentY += (commentText.length * 3.5) + 3;
            });
        } else {
            doc.setFont("helvetica", "italic");
            doc.setFontSize(8.5);
            doc.setTextColor(148, 163, 184);
            doc.text(t('reports.commentsEmpty'), 18, currentY);
            currentY += 6;
        }
        
        currentY += 4;
        if (idx < filteredReports.length - 1) {
            doc.setDrawColor(241, 245, 249);
            doc.line(15, currentY, 195, currentY);
            currentY += 8;
        }
    });

    // Decorate all pages with headers/footers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Draw Header bar
        doc.setFillColor(79, 70, 229);
        doc.rect(0, 0, 210, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(currentLanguage === 'es' ? "HISTORIAL DE BITÁCORAS Y REPORTES" : "DAILY LOGS & SHIFT REPORTS HISTORY", 15, 10);
        
        // Draw Footer bar
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.setFont("helvetica", "normal");
        doc.text("MasterInventory - Smart Inventory System", 15, 287);
        doc.text(`${currentLanguage === 'es' ? 'Página' : 'Page'} ${i} ${currentLanguage === 'es' ? 'de' : 'of'} ${pageCount}`, 180, 287);
    }

    doc.save(`Historial_Bitacoras_${Date.now()}.pdf`);
    showToast(
        currentLanguage === 'es' ? "PDF Descargado" : "PDF Downloaded", 
        currentLanguage === 'es' ? 'Historial de bitácoras exportado con éxito.' : 'Daily logs history exported successfully.', 
        "success"
    );
}

function downloadOrdersHistoryPDF() {
    const doc = getPdfDoc();
    if (!doc) return;

    const orders = JSON.parse(localStorage.getItem("mi_orders")) || [];
    const resolvedOrders = orders.filter(order => order.status === "Recibido" || order.status === "Rechazado");

    if (resolvedOrders.length === 0) {
        showToast(
            currentLanguage === 'es' ? "Sin Registros" : "No Records",
            currentLanguage === 'es' ? "No hay pedidos resueltos (recibidos o rechazados) en el historial." : "No resolved orders (received or rejected) in the history.",
            "warning"
        );
        return;
    }

    // Sort by Date Descending
    resolvedOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    // PDF Header
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, 210, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(currentLanguage === 'es' ? "HISTORIAL DE PEDIDOS Y ÓRDENES" : "ORDERS & REQUISITIONS HISTORY REPORT", 15, 10);

    const formattedDate = new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    doc.setTextColor(30, 41, 59);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${currentLanguage === 'es' ? 'Fecha de generación' : 'Generated on'}: ${formattedDate}`, 15, 25);
    doc.text(`${currentLanguage === 'es' ? 'Generado por' : 'Generated by'}: ${currentUser ? currentUser.name : 'System'}`, 15, 30);

    // Divider line
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 35, 195, 35);

    const headers = [[
        currentLanguage === 'es' ? 'ID Pedido' : 'Order ID',
        currentLanguage === 'es' ? 'Fecha' : 'Date',
        currentLanguage === 'es' ? 'Solicitado por' : 'Requested by',
        currentLanguage === 'es' ? 'Artículo' : 'Item',
        currentLanguage === 'es' ? 'Costo' : 'Cost',
        currentLanguage === 'es' ? 'Estado Final' : 'Final Status',
        currentLanguage === 'es' ? 'Historial / Bitácora' : 'Log / History'
    ]];

    const rows = resolvedOrders.map(order => {
        const orderDate = new Date(order.date).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        const statusKey = order.status === "Recibido" ? "orders.statusRecibido" : "orders.statusRechazado";
        const translatedStatus = t(statusKey);

        return [
            order.id,
            orderDate,
            order.requester,
            `${order.itemName}\n(${order.model})`,
            `$${parseFloat(order.totalCost).toFixed(2)} USD`,
            translatedStatus,
            order.log || t('orders.noLog')
        ];
    });

    doc.autoTable({
        head: headers,
        body: rows,
        startY: 40,
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8.5 }
    });

    // Footer note
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        if (i > 1) {
            // Draw Header bar on subsequent pages
            doc.setFillColor(79, 70, 229);
            doc.rect(0, 0, 210, 15, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text(currentLanguage === 'es' ? "HISTORIAL DE PEDIDOS Y ÓRDENES" : "ORDERS & REQUISITIONS HISTORY REPORT", 15, 10);
        }
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.setFont("helvetica", "normal");
        doc.text("MasterInventory - Smart Inventory System", 15, 287);
        doc.text(`${currentLanguage === 'es' ? 'Página' : 'Page'} ${i} ${currentLanguage === 'es' ? 'de' : 'of'} ${pageCount}`, 180, 287);
    }

    doc.save(`Historial_Pedidos_${Date.now()}.pdf`);
    showToast(
        currentLanguage === 'es' ? "PDF Descargado" : "PDF Downloaded", 
        currentLanguage === 'es' ? 'Historial de pedidos descargado con éxito.' : 'Orders history report downloaded successfully.', 
        "success"
    );
}
