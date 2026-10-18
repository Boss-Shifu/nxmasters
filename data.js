/**
 * ============================================================================
 * BASE DE DATOS DE PROYECTOS — NXMASTERS
 * ============================================================================
 * Para agregar un nuevo trabajo del team, copia un bloque dentro de window.NX_GAMES
 * y reemplaza el campo `teraboxLink` con tu enlace directo de TeraBox (ej. https://1024terabox.com/s/1xxxxx).
 *
 * Tipos soportados (`type`):
 *   - "recomp"  -> Recompilación Estática (AOT / NRO nativo recompilado)
 *   - "port"    -> Port Nativo (libnx / OpenGL / Deko3d)
 *   - "wrapper" -> Wrapper (Android32 / GLES / SO Loader)
 *   - "fork"    -> Fork PC (WineNX / Autorun / FEX / Box64)
 */

window.NX_TEAM = [
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
];

window.NX_GAMES = [
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
];
