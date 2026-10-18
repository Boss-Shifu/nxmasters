/**
 * ============================================================================
 * CONFIGURACIÓN COMPLETA EDITABLE — NXMASTERS (CMS VISUAL)
 * ============================================================================
 * Este archivo es gestionado automáticamente desde el Panel Visual:
 *   https://boss-shifu.github.io/nxmasters/admin.html
 */

window.NX_CONFIG = {
    site: {
        brandFirst: "NX",
        brandHighlight: "MASTERS",
        subtitle: "Gaming Zone • Switch Scene",
        logoUrl: "assets/nxmasters_logo.jpg",
        communityLabel: "Unirse a WhatsApp",
        communityUrl: "https://chat.whatsapp.com/",
        heroTitlePrefix: "Bienvenidos a",
        heroRibbon: "NXMASTERS",
        heroDescription: "Evolucionamos de hacer forks a dominar el ecosistema completo de Nintendo Switch (Atmosphère): Recompilaciones Estáticas, Ports Nativos (.nro), Wrappers Android32 y Forks optimizados con Autorun / WineNX, además de grupos de ayuda y partidas multijugador entre toda la comunidad.",
        heroPills: [
            "☁️ Enlaces Directos en TeraBox",
            "⚡ Recompilaciones Estáticas",
            "🤖 Wrappers Android32",
            "🌿 Forks WineNX & Autorun",
            "🎧 Soporte & Multiplayer"
        ],
        navTabs: {
            catalogo: "Catálogo",
            guias: "Guías de Instalación",
            team: "El Team"
        },
        footerText: "Recompilaciones Estáticas • Ports Nativos • Wrappers • Forks Autorun — Alojados directamente en TeraBox."
    },

    // SUB-ÍNDICES / CATEGORÍAS DE FILTRADO (Puedes agregar, editar o borrar desde admin.html)
    subIndices: [
        { id: "todos", label: "Todos", icon: "fa-layer-group", color: "#9333ea" },
        { id: "recomp", label: "Recomp Estática", icon: "fa-bolt", color: "#c026d3" },
        { id: "port", label: "Ports Nativos", icon: "fa-cube", color: "#ea580c" },
        { id: "wrapper", label: "Wrappers", icon: "fa-robot", color: "#16a34a" },
        { id: "fork", label: "Forks Autorun", icon: "fa-code-branch", color: "#2563eb" },
        { id: "espanol", label: "En Español", icon: "fa-language", color: "#dc2626" }
    ],

    // GUÍAS DE INSTALACIÓN EDITABLES
    guides: [
        {
            title: "Ports Nativos & Recompilaciones Estáticas",
            icon: "fa-bolt",
            steps: [
                "Descarga el archivo .zip directo desde el botón azul de TeraBox.",
                "Extrae la carpeta dentro de sdmc:/switch/<nombre-del-juego>/ en tu microSD.",
                "Inicia el hbmenu en modo Title Takeover (manteniendo pulsado R al abrir cualquier juego).",
                "Ejecuta el archivo .nro o usa el forwarder incluido para abrirlo desde el menú Home."
            ]
        },
        {
            title: "Wrappers (Android32 / GLES)",
            icon: "fa-robot",
            steps: [
                "Descarga el paquete del wrapper desde TeraBox y descomprímelo en la raíz de tu microSD.",
                "Verifica que las librerías .so y assets queden en su ruta de /switch/ correspondiente.",
                "Ábrelo desde Sphaira / hbmenu con toda la RAM disponible (Applet Mode NO soportado)."
            ]
        },
        {
            title: "Forks (WineNX / Autorun PC)",
            icon: "fa-code-branch",
            steps: [
                "Descarga el fork desde TeraBox y descomprime la carpeta en /switch de tu microSD.",
                "Entra al hbmenu manteniendo presionado R sobre cualquier juego instalado.",
                "Al abrir el fork te preguntará si deseas crear el acceso directo en el menú Home: pulsa Aceptar (+) y listo."
            ]
        }
    ],

    // INTEGRANTES DEL TEAM
    team: [
        {
            name: "Boss Shifu",
            avatar: "🐐",
            role: "Líder & Maestro de Ingeniería NX",
            specialty: "Recompilaciones Estáticas, WineNX & Arquitectura"
        },
        {
            name: "Toro NX",
            avatar: "🐂",
            role: "Co-Fundador & Core Porter",
            specialty: "Ports Nativos, Optimización Switch OLED & Testing"
        },
        {
            name: "Lobo Security",
            avatar: "🐺",
            role: "Moderador Principal & Dev",
            specialty: "Seguridad de Builds, Forks Autorun & Soporte"
        },
        {
            name: "Porky L4D",
            avatar: "🐷",
            role: "Especialista en Shooters & Forks",
            specialty: "Source Engine, Left 4 Dead 2 & Multiplayer"
        },
        {
            name: "Kris",
            avatar: "🦝",
            role: "Developer & Pro Tester",
            specialty: "Wrappers, Perfiles de Mando & Comunidad"
        },
        {
            name: "JaxCucayo",
            avatar: "🐹",
            role: "Nuevo Integrante (Cuy Coder)",
            specialty: "Aprendiz de Forks, Wrappers & Porting en Switch"
        }
    ],

    // CATÁLOGO DE JUEGOS Y LINKS DIRECTOS A TERABOX
    games: [
        {
            id: 1,
            title: "Left 4 Dead 2 — NXMasters Edition",
            type: "fork",
            typeLabel: "Fork Autorun",
            category: "Shooter / Co-op",
            arch: "x86 WineNX",
            engine: ["Autorun 4.5", "DXVK"],
            size: "6.8 GB",
            language: "es",
            author: "NXMasters Team",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/library_600x900.jpg",
            description: "Fork optimizado por NXMasters con configuraciones de memoria ajustadas para Nintendo Switch, soporte para campañas cooperativas con la comunidad y acceso directo desde el menú Home.",
            teraboxLink: "https://www.terabox.com/s/1nxmasters-l4d2-ejemplo",
            patchLink: ""
        },
        {
            id: 2,
            title: "Need for Speed: Most Wanted — Static Recomp / NX",
            type: "recomp",
            typeLabel: "Recomp Estática",
            category: "Carreras",
            arch: "ARM64 AOT",
            engine: ["libnx", "60 FPS"],
            size: "2.4 GB",
            language: "es",
            author: "NXMasters Team",
            image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co209g.jpg",
            description: "Recompilación estática y adaptación de alto rendimiento para Nintendo Switch con soporte panorámico 16:9, texturas limpias y controles nativos de Joy-Con y Pro Controller.",
            teraboxLink: "https://www.terabox.com/s/1nxmasters-nfsmw-ejemplo",
            patchLink: ""
        },
        {
            id: 3,
            title: "Bully: Anniversary Edition — Android32 Wrapper",
            type: "wrapper",
            typeLabel: "Wrapper Android32",
            category: "Acción / Mundo Abierto",
            arch: "armeabi-v7a",
            engine: ["Android32", "Mesa32 GLES"],
            size: "1.9 GB",
            language: "multi",
            author: "NXMasters Team",
            image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1v7f.jpg",
            description: "Wrapper de 32 bits utilizando libnx32 y traducción dinámica de llamadas OpenGL ES para correr a máxima fluidez en Atmosphère con soporte de forwarder en Sphaira.",
            teraboxLink: "https://www.terabox.com/s/1nxmasters-bully32-ejemplo",
            patchLink: ""
        },
        {
            id: 4,
            title: "Grand Theft Auto IV — Autorun Custom Fork",
            type: "fork",
            typeLabel: "Fork Autorun",
            category: "Mundo Abierto",
            arch: "x86 / Box64",
            engine: ["Autorun 4.5"],
            size: "13.2 GB",
            language: "es",
            author: "NXMasters + JaxCucayo",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/library_600x900.jpg",
            description: "Versión ajustada por el equipo con reducción de carga de sombras, partículas optimizadas y parámetros de memoria listos para llegar y pegar en /switch.",
            teraboxLink: "https://www.terabox.com/s/1nxmasters-gta4-ejemplo",
            patchLink: "https://www.terabox.com/s/1nxmasters-gta4-parche"
        },
        {
            id: 5,
            title: "Dead Space — Native & Wrapper Pack",
            type: "wrapper",
            typeLabel: "Wrapper Android32",
            category: "Survival Horror",
            arch: "ARMv7 / GLES",
            engine: ["Android32", "Sphaira"],
            size: "680 MB",
            language: "es",
            author: "NXMasters + Kris",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/17470/library_600x900.jpg",
            description: "Adaptación completa mediante wrapper con iluminación corregida, mapeo nativo de doble stick y sonido envolvente listo para jugar en modo portátil o dock.",
            teraboxLink: "https://www.terabox.com/s/1nxmasters-deadspace-ejemplo",
            patchLink: ""
        },
        {
            id: 6,
            title: "Half-Life 2 / Source Engine — Port Nativo",
            type: "port",
            typeLabel: "Port Nativo",
            category: "Shooter",
            arch: "ARM64 Nativo",
            engine: ["libnx", "OpenGL"],
            size: "3.5 GB",
            language: "es",
            author: "NXMasters Team",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/220/library_600x900.jpg",
            description: "Port nativo compilado directamente para Horizon OS (ARM64), aprovechando toda la memoria mediante Title Takeover a 60 cuadros por segundo.",
            teraboxLink: "https://www.terabox.com/s/1nxmasters-hl2-ejemplo",
            patchLink: ""
        }
    ]
};

// Compatibilidad inversa
window.NX_GAMES = window.NX_CONFIG.games;
window.NX_TEAM = window.NX_CONFIG.team;
