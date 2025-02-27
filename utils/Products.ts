export interface Product {
    getName(): String;
    getThumbnail(): String;
    getDescription(): String;
    getFeatures(): String;
    isActive(): Boolean;
    getPrices(): Object;
}

const products = [
    {
        active: true,
        id: 1,
        productName: "Sony Alpha 7 IV",
        prices: {
            perDay: 120,
            perFullWeek: 600,
        },
        description: "Erlebe die beeindruckende Bildqualität und Flexibilität der Sony Alpha 7 IV! Diese spiegellose Vollformatkamera bietet eine auflösungsstarke 33 MP-Sensor, exzellente 4K-Videoqualität und ein leistungsstarkes Autofokus-System mit Echtzeit-Tracking. Ideal für Fotografie-Enthusiasten und Profis, die das Beste aus ihren Aufnahmen herausholen möchten.",
        features: [
            "Inkl. Small Rig Cage"
        ],
        productTeaserCover: "https://www.fotohits.de/fileadmin/user_upload/sonyalpha7iv-1.jpg",
        category: [
            'cameras'
        ]
    },
    {
        active: true,
        id: 2,
        productName: "Atomos Shinobi 5&Prime;",
        prices: {
            perDay: 30,
            perFullWeek: 200,
        },
        description: "Der Atomos Shinobi 5\" ist ein hochauflösender Full-HD Touchscreen-Monitor, der dir eine präzise Bildkontrolle bei deinen Drehs ermöglicht. Mit 1000 nits Helligkeit und HDR-Unterstützung ist er auch bei hellem Tageslicht bestens ablesbar. Dank Features wie Falschfarben, Peaking und Zebra hast du jederzeit die volle Kontrolle über deine Belichtung und Schärfe. Perfekt für Filmemacher, die auf höchste Präzision setzen!",
        features: [

        ],
        productTeaserCover: "https://www.film-tv-video.de/wp-content/uploads/2019/02/B_0219_Atomos_Shinobi_SD.jpg",
        category: [
            'diverse'
        ]
    },
    {
        active: true,
        id: 3,
        productName: "DJI Ronin RS3 Pro Combo",
        prices: {
            perDay: 80,
            perFullWeek: 430,
        },
        description: "Der DJI Ronin RS3 Pro ist ein leistungsstarker Gimbal für professionelle Filmemacher. Dank Carbon-Fiber-Konstruktion bleibt er leicht und dennoch extrem stabil, selbst bei schweren Kamera-Setups. Mit LiDAR-Fokus, aktiver 4. Achse und verbesserter Motorleistung ermöglicht er butterweiche Kamerafahrten und mühelose Bewegungen. Die RS3 Pro Combo enthält zusätzliches Zubehör für noch mehr kreative Möglichkeiten!",
        features: [
            "Inkl. allem Zubehör"
        ],
        productTeaserCover: "https://store.dji.bg/img/cms/ronin/dji-rs-3-pro/3.jpg",
        category: [
            'gimbal',
            'diverse'
        ]
    },
    {
        active: true,
        id: 4,
        productName: "Sigma 20mm F1.4 DG HSM (E-Mount)",
        prices: {
            perDay: 35,
            perFullWeek: 200,
        },
        description: "Das Sigma 20mm F1.4 DG HSM für Sony E-Mount ist ein lichtstarkes Weitwinkelobjektiv, ideal für Landschafts-, Astro- und Architekturaufnahmen. Mit seiner blendenstarken f/1.4 Öffnung liefert es gestochen scharfe Bilder mit wunderschönem Bokeh – selbst bei wenig Licht. Die hochwertige Verarbeitung und der schnelle HSM-Autofokus machen es zur perfekten Wahl für Profis und Kreative.",
        features: [
        ],
        productTeaserCover: "https://www.sigmacanada.ca/cdn/shop/products/pphoto_20_14_a015_design_details_02_3000x2250.jpg?v=1628536451",
        category: [
            'lenses'
        ]
    },
    {
        active: true,
        id: 5,
        productName: "Sony SEL 85mm f/1,8 Sony (FE-Mount)",
        prices: {
            perDay: 55,
            perFullWeek: 300,
        },
        description: "Das Sony SEL 85mm f/1.8 ist ein kompaktes, aber leistungsstarkes Objektiv für atemberaubende Porträts mit wunderschönem Bokeh. Die hohe Lichtstärke von f/1.8 sorgt für gestochen scharfe Motive und sanfte Hintergrundunschärfe. Dank schnellem und präzisem Autofokus eignet es sich perfekt für Fotoshootings und Videoproduktionen.",
        features: [
        ],
        productTeaserCover: "https://dustinabbott.net/wp-content/gallery/sony-fe-85mm-f1-8-review/03-Clean.jpg",
        category: [
            'lenses'
        ]
    },
    {
        active: true,
        id: 6,
        productName: "Sony SEL 35mm f/1,8 Sony (FE-Mount)",
        prices: {
            perDay: 60,
            perFullWeek: 290,
        },
        description: "Das Sony SEL 35mm f/1.8 ist ein leichtes und kompaktes Festbrennweiten-Objektiv, das sich perfekt für Street-, Reportage- und Alltagsfotografie eignet. Mit seiner f/1.8 Blende liefert es auch bei schwierigen Lichtverhältnissen brillante Ergebnisse. Der schnelle Autofokus und die hohe Bildqualität machen es zu einem unverzichtbaren Begleiter für Kreative, die Wert auf Flexibilität legen.",
        features: [
        ],
        productTeaserCover: "https://www.sony-asia.com/microsite/ILCE-7C/my/assets/images/products/SEL35F18F.jpg",
        category: [
            'lenses'
        ]
    },
    {
        active: false,
        id: 7,
        productName: "Sony FX30 Cinema Line",
        prices: {
            perDay: 200,
            perFullWeek: 840,
        },
        description: "Die Sony FX30 ist die perfekte Wahl für alle, die professionelle Cinema-Qualität in kompakter Form suchen! Mit ihrem Super-35mm-Sensor, 4K-Auflösung mit 10-Bit 4:2:2 Farbtiefe und Cine EI-Modus liefert sie atemberaubende Filmaufnahmen mit kinoreifen Farben und Dynamikumfang. Dank fortschrittlichem Autofokus, 5-Achsen-Stabilisierung und Dual Base ISO eignet sie sich ideal für kreative Filmprojekte, Dokumentationen oder Werbefilme.",
        features: [
        ],
        productTeaserCover: "https://petapixel.com/assets/uploads/2022/09/Sonys-New-Crop-Sensor-FX30-is-an-Easy-Entry-into-its-Cinema-Line-1.jpg",
        category: [
            'cameras'
        ]
    },
    {
        active: true,
        id: 8,
        productName: "DJI Osmo Pocket",
        prices: {
            perDay: 18,
            perFullWeek: 100,
        },
        description: "Der DJI Osmo Pocket ist eine ultrakompakte 4K-Kamera mit integriertem 3-Achsen-Gimbal, die dir professionelle Videoaufnahmen in jeder Situation ermöglicht. Dank intelligentem Tracking, HDR-Video und zeitlupenfähigem 4K/60fps liefert er gestochen scharfe und butterweiche Aufnahmen – ideal für Vlogs, Reisen oder schnelle Action-Szenen.",
        features: [
            "Als Creator Combo"
        ],
        productTeaserCover: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/osmopocket3header.jpg",
        category: [
            'gimbal',
            'diverse'
        ]
    },
    {
        active: true,
        id: 9,
        productName: "DJI MIC 2",
        prices: {
            perDay: 14,
            perFullWeek: 90,
        },
        description: "Das DJI MIC 2 ist ein kompaktes und leistungsstarkes drahtloses Mikrofon, das perfekten Ton für Interviews, Vlogs oder Filmproduktionen liefert. Mit einer Reichweite von bis zu 250m, integrierter Geräuschunterdrückung und bis zu 14 Stunden Aufnahmezeit sorgt es für glasklaren, professionellen Sound – egal, wo du drehst.",
        features: [
            "Inkl. allem Zubehör"
        ],
        productTeaserCover: "https://www.flyingmachines.de/cdn/shop/files/971364-DJI-MIC-2-2-TX-1-RX-Charging-Case-5_600x600_c52bc918-3432-4e95-9883-e6419fee3731.jpg?v=1721898757&width=1214",
        category: [
            'diverse'
        ]
    },

]


export class Product implements Product {
    id: number;
    constructor(id: number) {
        this.id = id
    }
    getId = (): number => {
        return products.find(x => x.id === parseInt(this.id)).id
    }
    getName = (): string => {
        return products.find(x => x.id === parseInt(this.id)).productName
    }
    getThumbnail = (): string => {
        return products.find(x => x.id === parseInt(this.id)).productTeaserCover
    }
    getDescription = (): string => {
        return products.find(x => x.id === parseInt(this.id)).description
    }
    getFeatures = (): string => {
        let productFeatures = products.find(x => x.id === parseInt(this.id)).features
        if (productFeatures.length >= 1) {
            return productFeatures
        } else {return null}
    }
    isActive = (): Boolean => {
        return products.find(x => x.id === parseInt(this.id)).active
    }
    getPrices = (): Object => {
        return products.find(x => x.id === parseInt(this.id)).prices
    }
}

export class Products {
    getAll = (): array => {
        return products
    }
}