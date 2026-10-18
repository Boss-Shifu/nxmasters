let currentFilter = "todos";

document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
    renderTeam();

    const modal = document.getElementById("modal-juego");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.close();
        });
    }
});

function switchView(viewName, event) {
    if (event) event.preventDefault();
    ["catalogo", "guias", "team"].forEach(v => {
        const section = document.getElementById(`view-${v}`);
        if (section) section.classList.toggle("hidden", v !== viewName);
    });

    document.querySelectorAll(".site-links .nav-pill").forEach(btn => {
        btn.classList.toggle("nav-active", btn.dataset.view === viewName);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll("#filter-tabs .filter-tab").forEach(btn => {
        btn.classList.toggle("activo", btn.dataset.filter === filter);
    });
    renderCatalog();
}

function getLangBadge(lang) {
    if (lang === "es") {
        return `<span class="badge-lang badge-es" title="Juego en Español"><i class="fa-solid fa-comment-dots"></i> Español</span>`;
    }
    if (lang === "multi") {
        return `<span class="badge-lang badge-multi" title="Multilenguaje (incluye Español)"><i class="fa-solid fa-language"></i> Multi</span>`;
    }
    return `<span class="badge-lang badge-en" title="Juego en Inglés"><i class="fa-solid fa-globe"></i> Inglés</span>`;
}

function getTypeBadge(type, label) {
    const icons = {
        recomp: "fa-bolt",
        port: "fa-cube",
        wrapper: "fa-brands fa-android",
        fork: "fa-code-branch"
    };
    const iconClass = icons[type] || "fa-gamepad";
    const prefix = iconClass.startsWith("fa-brands") ? "" : "fa-solid ";
    return `<span class="badge-type type-${type}"><i class="${prefix}${iconClass}"></i> ${label}</span>`;
}

function renderCatalog() {
    const grid = document.getElementById("games-grid");
    const countBadge = document.getElementById("game-count");
    const searchInput = document.getElementById("search-input");
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    let list = (window.NX_GAMES || []).filter(game => {
        if (currentFilter === "espanol") return game.language === "es" || game.language === "multi";
        if (currentFilter !== "todos") return game.type === currentFilter;
        return true;
    });

    if (query) {
        list = list.filter(g =>
            g.title.toLowerCase().includes(query) ||
            g.category.toLowerCase().includes(query) ||
            g.typeLabel.toLowerCase().includes(query) ||
            g.author.toLowerCase().includes(query) ||
            (g.engine || []).join(" ").toLowerCase().includes(query)
        );
    }

    countBadge.textContent = `${list.length} ${list.length === 1 ? "proyecto disponible" : "proyectos disponibles"}`;
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;color:var(--text-dim);">
                <i class="fa-solid fa-ghost" style="font-size:2rem;margin-bottom:0.5rem;color:var(--neon-purple);"></i>
                <p>No se encontraron proyectos con ese filtro. Prueba con otro término.</p>
            </div>`;
        return;
    }

    list.forEach(game => {
        const card = document.createElement("article");
        card.className = "post-card";
        const builds = (game.engine || []).map(b => `<span class="cover-build">${b}</span>`).join("");

        card.innerHTML = `
            <div class="cover-wrap">
                <img src="${game.image}" alt="Portada de ${game.title}" loading="lazy"
                     onerror="this.onerror=null;this.src='assets/nxmasters_logo.jpg';">
                ${getLangBadge(game.language)}
                ${getTypeBadge(game.type, game.typeLabel)}
                <div class="cover-builds">${builds}</div>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <span class="chip-cat">${game.category}</span>
                    <span class="credit-porter" title="Desarrollado / Adaptado por ${game.author}">
                        <i class="fa-solid fa-user-astronaut"></i> ${game.author}
                    </span>
                </div>
                <h3 class="card-title">${game.title}</h3>
                <div class="card-specs">
                    <span class="spec" title="Arquitectura"><i class="fa-solid fa-microchip"></i> ${game.arch}</span>
                    ${game.size ? `<span class="spec" title="Peso aproximado"><i class="fa-solid fa-hard-drive"></i> ${game.size}</span>` : ""}
                </div>
                <div class="card-actions">
                    <a href="${game.teraboxLink}" target="_blank" rel="noopener" class="btn-terabox" title="Descargar directo desde TeraBox">
                        <i class="fa-solid fa-cloud-arrow-down"></i> TeraBox
                    </a>
                    <button type="button" class="btn-info" onclick="openGameModal(${game.id})" title="Ver ficha técnica e instrucciones">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openGameModal(id) {
    const game = (window.NX_GAMES || []).find(g => g.id === id);
    if (!game) return;

    const modal = document.getElementById("modal-juego");
    const body = document.getElementById("modal-body");
    const builds = (game.engine || []).join(" • ");

    body.innerHTML = `
        <div class="modal-header">
            <div>
                <span class="chip-cat" style="margin-bottom:0.4rem;display:inline-block;">${game.typeLabel} • ${game.category}</span>
                <h2 style="font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:900;color:#fff;">${game.title}</h2>
                <p style="font-size:0.82rem;color:#f0abfc;margin-top:0.2rem;">
                    <i class="fa-solid fa-code"></i> Por <strong>${game.author}</strong>
                </p>
            </div>
            <button type="button" class="modal-close" onclick="document.getElementById('modal-juego').close()" aria-label="Cerrar">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <p style="color:var(--text-muted);font-size:0.92rem;line-height:1.6;margin-bottom:1.1rem;">
            ${game.description}
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.65rem;margin-bottom:1.25rem;background:rgba(0,0,0,0.28);padding:0.9rem;border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
            <div><span style="font-size:0.72rem;color:var(--text-dim);display:block;">Arquitectura</span><strong>${game.arch}</strong></div>
            <div><span style="font-size:0.72rem;color:var(--text-dim);display:block;">Entorno / Motor</span><strong>${builds}</strong></div>
            <div><span style="font-size:0.72rem;color:var(--text-dim);display:block;">Tamaño</span><strong>${game.size || "N/A"}</strong></div>
            <div><span style="font-size:0.72rem;color:var(--text-dim);display:block;">Servidor</span><strong style="color:#38bdf8;">TeraBox Directo</strong></div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
            <a href="${game.teraboxLink}" target="_blank" rel="noopener" class="btn-terabox" style="flex:1;padding:0.8rem 1.2rem;font-size:0.95rem;">
                <i class="fa-solid fa-cloud-arrow-down"></i> Descargar Archivo desde TeraBox
            </a>
            ${game.patchLink ? `
            <a href="${game.patchLink}" target="_blank" rel="noopener" class="community-btn" style="background:linear-gradient(135deg,#ea580c,#f59e0b);color:#140800;font-weight:900;">
                <i class="fa-solid fa-box-archive"></i> Descargar Parche Extra (TeraBox)
            </a>` : ""}
        </div>
    `;
    modal.showModal();
}

function renderTeam() {
    const grid = document.getElementById("team-grid");
    if (!grid) return;
    grid.innerHTML = (window.NX_TEAM || []).map(member => `
        <div class="member-card">
            <div class="member-icon">${member.avatar}</div>
            <div>
                <h3 style="font-family:'Outfit',sans-serif;font-weight:800;font-size:1.05rem;color:#fff;">${member.name}</h3>
                <p style="font-size:0.76rem;color:#fde047;font-weight:700;">${member.role}</p>
                <p style="font-size:0.78rem;color:var(--text-muted);margin-top:0.2rem;">${member.specialty}</p>
            </div>
        </div>
    `).join("");
}
