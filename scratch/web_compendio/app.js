/**
 * Tormenta 20 Compêndio Web — Lógica da Aplicação (app.js)
 * Navegação hierárquica progressiva (drill-down), busca global Ctrl+K,
 * gaveta lateral de detalhes e compatibilidade 100% offline (file://).
 */

(function() {
  'use strict';

  // Verificar se o catálogo foi carregado
  if (!window.T20_CATALOG) {
    console.error('Catálogo T20_CATALOG não encontrado. Verifique data/catalog.js');
    document.body.innerHTML = '<div style="padding:40px;text-align:center;color:#ef4444;"><h2>Erro ao carregar catálogo</h2><p>Certifique-se de que o arquivo <code>data/catalog.js</code> está presente e acessível.</p></div>';
    return;
  }

  const CATALOG = window.T20_CATALOG;

  // Estado da Aplicação
  const state = {
    history: [{ view: 'home', label: 'Início' }],
    activeDetailId: null,
    currentSort: { col: 'preco_ts', asc: true },
    tableFilterText: '',
    searchFilterDomain: 'all',
    searchActiveIndex: 0,
    searchCurrentResults: []
  };

  // Elementos do DOM
  const elements = {
    viewContainer: document.getElementById('view-container'),
    breadcrumbsList: document.getElementById('breadcrumbs-list'),
    btnNavBack: document.getElementById('btn-nav-back'),
    btnHomeLogo: document.getElementById('btn-home-logo'),
    
    // Drawers
    detailDrawer: document.getElementById('detail-drawer'),
    drawerTitle: document.getElementById('drawer-title'),
    drawerBadges: document.getElementById('drawer-badges'),
    drawerMetaBar: document.getElementById('drawer-meta-bar'),
    drawerContent: document.getElementById('drawer-content'),
    btnCloseDrawer: document.getElementById('btn-close-drawer'),

    conditionsDrawer: document.getElementById('conditions-drawer'),
    btnToggleConditions: document.getElementById('btn-toggle-conditions'),
    btnCloseConditions: document.getElementById('btn-close-conditions'),
    conditionsFilterInput: document.getElementById('conditions-filter-input'),
    conditionsListContainer: document.getElementById('conditions-list-container'),

    // Busca Global
    btnOpenSearch: document.getElementById('btn-open-search'),
    searchModal: document.getElementById('search-modal'),
    btnCloseSearch: document.getElementById('btn-close-search'),
    globalSearchInput: document.getElementById('global-search-input'),
    searchResultsList: document.getElementById('search-results-list'),
    searchDomainFilters: document.getElementById('search-domain-filters'),

    // Outros
    backdrop: document.getElementById('backdrop'),
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon')
  };

  // ==========================================================================
  // 1. GERENCIADOR DE TEMA (CLARO / ESCURO)
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('t20_theme') || 'dark';
    setTheme(savedTheme);

    elements.btnThemeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('t20_theme', theme);
    elements.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  // ==========================================================================
  // 2. NAVEGAÇÃO E BREADCRUMBS
  // ==========================================================================
  function navigateTo(step, push = true) {
    if (push) {
      state.history.push(step);
    }
    state.tableFilterText = '';
    renderBreadcrumbs();
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateBack() {
    if (state.history.length > 1) {
      state.history.pop();
      renderBreadcrumbs();
      renderCurrentView();
    }
  }

  function renderBreadcrumbs() {
    elements.breadcrumbsList.innerHTML = '';
    elements.btnNavBack.style.visibility = state.history.length > 1 ? 'visible' : 'hidden';

    state.history.forEach((step, idx) => {
      const isLast = idx === state.history.length - 1;
      const li = document.createElement('li');
      li.className = `breadcrumb-item ${isLast ? 'active' : ''}`;

      if (isLast) {
        li.textContent = step.label;
      } else {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = step.label;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          state.history = state.history.slice(0, idx + 1);
          renderBreadcrumbs();
          renderCurrentView();
        });
        li.appendChild(a);

        const sep = document.createElement('span');
        sep.className = 'breadcrumb-separator';
        sep.textContent = '›';
        li.appendChild(sep);
      }
      elements.breadcrumbsList.appendChild(li);
    });
  }

  // ==========================================================================
  // 3. RENDERIZADORES DE TELAS (DRILL-DOWN)
  // ==========================================================================
  function renderCurrentView() {
    const current = state.history[state.history.length - 1];
    elements.viewContainer.innerHTML = '';

    switch (current.view) {
      case 'home':
        renderHomeView();
        break;
      case 'weapons_subtypes':
        renderWeaponsSubtypesView();
        break;
      case 'weapons_wield':
        renderWeaponsWieldView(current.subtipo, current.subtipoLabel);
        break;
      case 'weapons_table':
        renderWeaponsTable(current.subtipo, current.empunhadura, current.title);
        break;
      case 'items_categories':
        renderItemsCategoriesView();
        break;
      case 'items_subcategories':
        renderItemsSubcategoriesView(current.category);
        break;
      case 'items_table':
        renderItemsTable(current.category, current.subcategory, current.title);
        break;
      case 'powers_categories':
        renderPowersCategoriesView();
        break;
      case 'powers_sub':
        renderPowersSubView(current.category, current.catLabel);
        break;
      case 'powers_table':
        renderPowersTable(current.category, current.filterKey, current.filterVal, current.title);
        break;
      case 'spells_traditions':
        renderSpellsTraditionsView();
        break;
      case 'spells_circles':
        renderSpellsCirclesView(current.tradicao);
        break;
      case 'spells_table':
        renderSpellsTable(current.tradicao, current.circulo, current.title);
        break;
      case 'classes_types':
        renderClassesTypesView();
        break;
      case 'classes_list':
        renderClassesList(current.subtipo, current.title);
        break;
      case 'races_list':
        renderRacesList();
        break;
      case 'gods_list':
        renderGodsList();
        break;
      case 'origins_list':
        renderOriginsList();
        break;
      case 'mechanics_categories':
        renderMechanicsCategoriesView();
        break;
      case 'skills_table':
        renderSkillsTable();
        break;
      case 'conditions_table':
        renderConditionsTable();
        break;
      default:
        renderHomeView();
    }
  }

  // --------------------------------------------------------------------------
  // NÍVEL 0: HOME
  // --------------------------------------------------------------------------
  function renderHomeView() {
    const stats = CATALOG.stats;

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>🛡️ Compêndio Tormenta 20</h1>
          <p>Selecione um domínio para navegar pelas categorias e regras de Arton.</p>
        </div>
      </div>

      <div class="category-grid">
        <div class="category-card" data-action="weapons">
          <div class="card-header-line">
            <span class="card-icon">⚔️</span>
            <span class="card-badge">${stats.weapons_count}</span>
          </div>
          <h2 class="card-title">Armas</h2>
          <p class="card-desc">Armas simples, marciais, exóticas e de fogo. Navegue por empunhadura e alcance.</p>
          <div class="card-footer">Explorar armas ›</div>
        </div>

        <div class="category-card" data-action="items">
          <div class="card-header-line">
            <span class="card-icon">🎒</span>
            <span class="card-badge">${stats.total_items_count}</span>
          </div>
          <h2 class="card-title">Itens & Equipamentos</h2>
          <p class="card-desc">Armaduras, vestuário, esotéricos, poções, ferramentas, veículos e itens mágicos.</p>
          <div class="card-footer">Explorar equipamentos ›</div>
        </div>

        <div class="category-card" data-action="powers">
          <div class="card-header-line">
            <span class="card-icon">⚡</span>
            <span class="card-badge">${stats.powers_count}</span>
          </div>
          <h2 class="card-title">Poderes</h2>
          <p class="card-desc">Poderes de combate, magia, destino, Tormenta, de classe, raça e concedidos.</p>
          <div class="card-footer">Explorar poderes ›</div>
        </div>

        <div class="category-card" data-action="spells">
          <div class="card-header-line">
            <span class="card-icon">✨</span>
            <span class="card-badge">${stats.spells_count}</span>
          </div>
          <h2 class="card-title">Magias</h2>
          <p class="card-desc">Magias arcanas, divinas e universais do 1º ao 5º círculo organizadas por escola.</p>
          <div class="card-footer">Explorar magias ›</div>
        </div>

        <div class="category-card" data-action="classes">
          <div class="card-header-line">
            <span class="card-icon">🧙‍♂️</span>
            <span class="card-badge">${stats.classes_count}</span>
          </div>
          <h2 class="card-title">Classes</h2>
          <p class="card-desc">Classes básicas e variantes oficiais com PV, PM, perícias e progressão.</p>
          <div class="card-footer">Explorar classes ›</div>
        </div>

        <div class="category-card" data-action="races">
          <div class="card-header-line">
            <span class="card-icon">🧝</span>
            <span class="card-badge">${stats.races_count}</span>
          </div>
          <h2 class="card-title">Raças</h2>
          <p class="card-desc">Raças de Arton com bônus de atributos, habilidades raciais e características.</p>
          <div class="card-footer">Explorar raças ›</div>
        </div>

        <div class="category-card" data-action="gods">
          <div class="card-header-line">
            <span class="card-icon">☀️</span>
            <span class="card-badge">${stats.gods_count}</span>
          </div>
          <h2 class="card-title">Deuses & Panteão</h2>
          <p class="card-desc">Os 20 deuses do Panteão, poderes concedidos, crenças e canalização.</p>
          <div class="card-footer">Explorar panteão ›</div>
        </div>

        <div class="category-card" data-action="origins">
          <div class="card-header-line">
            <span class="card-icon">📜</span>
            <span class="card-badge">${stats.origins_count}</span>
          </div>
          <h2 class="card-title">Origens</h2>
          <p class="card-desc">Origens de aventureiros com perícias treinadas, itens iniciais e benefícios.</p>
          <div class="card-footer">Explorar origens ›</div>
        </div>

        <div class="category-card" data-action="mechanics">
          <div class="card-header-line">
            <span class="card-icon">⚠️</span>
            <span class="card-badge">${stats.conditions_count + stats.skills_count}</span>
          </div>
          <h2 class="card-title">Condições & Perícias</h2>
          <p class="card-desc">As 35 condições de combate, penalidades e todas as 29 perícias com fórmulas.</p>
          <div class="card-footer">Explorar regras ›</div>
        </div>
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    // Handlers
    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const action = card.getAttribute('data-action');
        if (action === 'weapons') {
          navigateTo({ view: 'weapons_subtypes', label: 'Armas' });
        } else if (action === 'items') {
          navigateTo({ view: 'items_categories', label: 'Itens' });
        } else if (action === 'powers') {
          navigateTo({ view: 'powers_categories', label: 'Poderes' });
        } else if (action === 'spells') {
          navigateTo({ view: 'spells_traditions', label: 'Magias' });
        } else if (action === 'classes') {
          navigateTo({ view: 'classes_types', label: 'Classes' });
        } else if (action === 'races') {
          navigateTo({ view: 'races_list', label: 'Raças' });
        } else if (action === 'gods') {
          navigateTo({ view: 'gods_list', label: 'Deuses' });
        } else if (action === 'origins') {
          navigateTo({ view: 'origins_list', label: 'Origens' });
        } else if (action === 'mechanics') {
          navigateTo({ view: 'mechanics_categories', label: 'Condições & Perícias' });
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // DRILL-DOWN DE ARMAS
  // --------------------------------------------------------------------------
  function renderWeaponsSubtypesView() {
    const weapons = CATALOG.weapons;
    const counts = {
      'arma-simples': weapons.filter(w => w.subtipo === 'arma-simples').length,
      'arma-marcial': weapons.filter(w => w.subtipo === 'arma-marcial').length,
      'arma-exotica': weapons.filter(w => w.subtipo === 'arma-exotica').length,
      'arma-de-fogo': weapons.filter(w => w.subtipo === 'arma-de-fogo').length
    };

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>⚔️ Armas por Proficiência</h1>
          <p>Escolha a proficiência para refinar por empunhadura e alcance.</p>
        </div>
        <div class="view-actions">
          <button id="btn-view-all-weapons" class="btn btn-secondary">Ver todas as 108 armas</button>
        </div>
      </div>

      <div class="category-grid">
        <div class="category-card" data-subtipo="arma-simples" data-label="Armas Simples">
          <div class="card-header-line">
            <span class="card-icon">🗡️</span>
            <span class="card-badge">${counts['arma-simples']}</span>
          </div>
          <h2 class="card-title">Armas Simples</h2>
          <p class="card-desc">Armas básicas acessíveis a quase todas as classes (adagas, bordões, lanças, arcos curtos).</p>
          <div class="card-footer">Selecionar empunhadura ›</div>
        </div>

        <div class="category-card" data-subtipo="arma-marcial" data-label="Armas Marciais">
          <div class="card-header-line">
            <span class="card-icon">⚔️</span>
            <span class="card-badge">${counts['arma-marcial']}</span>
          </div>
          <h2 class="card-title">Armas Marciais</h2>
          <p class="card-desc">Armas de guerreiros e combatentes treinados (espadas longas, machados de batalha, arcos longos).</p>
          <div class="card-footer">Selecionar empunhadura ›</div>
        </div>

        <div class="category-card" data-subtipo="arma-exotica" data-label="Armas Exóticas">
          <div class="card-header-line">
            <span class="card-icon">🪓</span>
            <span class="card-badge">${counts['arma-exotica']}</span>
          </div>
          <h2 class="card-title">Armas Exóticas</h2>
          <p class="card-desc">Armas raras e incomuns que exigem treinamento especializado (katanas, chicotes, machados anões).</p>
          <div class="card-footer">Selecionar empunhadura ›</div>
        </div>

        <div class="category-card" data-subtipo="arma-de-fogo" data-label="Armas de Fogo">
          <div class="card-header-line">
            <span class="card-icon">💥</span>
            <span class="card-badge">${counts['arma-de-fogo']}</span>
          </div>
          <h2 class="card-title">Armas de Fogo</h2>
          <p class="card-desc">Engenhocas bélicas de pólvora e pólvora alquímica (pistolas, mosquetes, bacamartes, canhões).</p>
          <div class="card-footer">Selecionar empunhadura ›</div>
        </div>
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelector('#btn-view-all-weapons').addEventListener('click', () => {
      navigateTo({
        view: 'weapons_table',
        subtipo: 'all',
        empunhadura: 'all',
        title: 'Todas as Armas',
        label: 'Todas as Armas'
      });
    });

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const sub = card.getAttribute('data-subtipo');
        const label = card.getAttribute('data-label');
        navigateTo({
          view: 'weapons_wield',
          subtipo: sub,
          subtipoLabel: label,
          label: label
        });
      });
    });
  }

  function renderWeaponsWieldView(subtipo, subtipoLabel) {
    const weapons = CATALOG.weapons.filter(w => w.subtipo === subtipo);
    
    // Contar empunhaduras
    const counts = {
      'leve': weapons.filter(w => w.empunhadura === 'leve').length,
      'uma-mao': weapons.filter(w => w.empunhadura === 'uma-mao').length,
      'duas-maos': weapons.filter(w => w.empunhadura === 'duas-maos').length,
      'distancia': weapons.filter(w => w.empunhadura === 'distancia').length
    };

    const empunhaduraMeta = [
      { key: 'leve', title: 'Armas Leves', icon: '🗡️', desc: 'Usadas em uma mão e leves o bastante para acuidade ou combate com duas armas.' },
      { key: 'uma-mao', title: 'Armas de Uma Mão', icon: '⚔️', desc: 'Armas versáteis empunhadas confortavelmente em uma mão, permitindo escudo na secundária.' },
      { key: 'duas-maos', title: 'Armas de Duas Mãos', icon: '🪓', desc: 'Armas pesadas que exigem ambas as mãos para desferir golpes devastadores.' },
      { key: 'distancia', title: 'Armas de Disparo & Arremesso', icon: '🏹', desc: 'Armas para atacar alvos afastados sem se expor no combate corpo a corpo.' }
    ];

    let cardsHtml = '';
    empunhaduraMeta.forEach(m => {
      const cnt = counts[m.key] || 0;
      if (cnt > 0) { // Oculta automaticamente combinações vazias
        cardsHtml += `
          <div class="category-card" data-wield="${m.key}" data-label="${m.title}">
            <div class="card-header-line">
              <span class="card-icon">${m.icon}</span>
              <span class="card-badge">${cnt}</span>
            </div>
            <h2 class="card-title">${m.title}</h2>
            <p class="card-desc">${m.desc}</p>
            <div class="card-footer">Ver tabela comparativa ›</div>
          </div>
        `;
      }
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>${subtipoLabel} — Empunhadura</h1>
          <p>Selecione a empunhadura ou visualize todas as ${weapons.length} armas deste grupo.</p>
        </div>
        <div class="view-actions">
          <button id="btn-view-all-in-group" class="btn btn-secondary">Ver todas (${weapons.length})</button>
        </div>
      </div>

      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelector('#btn-view-all-in-group').addEventListener('click', () => {
      navigateTo({
        view: 'weapons_table',
        subtipo: subtipo,
        empunhadura: 'all',
        title: `${subtipoLabel} (Todas)`,
        label: `${subtipoLabel} (Todas)`
      });
    });

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const wield = card.getAttribute('data-wield');
        const wieldLabel = card.getAttribute('data-label');
        navigateTo({
          view: 'weapons_table',
          subtipo: subtipo,
          empunhadura: wield,
          title: `${subtipoLabel} › ${wieldLabel}`,
          label: wieldLabel
        });
      });
    });
  }

  function renderWeaponsTable(subtipo, empunhadura, title) {
    let items = CATALOG.weapons;
    if (subtipo !== 'all') {
      items = items.filter(w => w.subtipo === subtipo);
    }
    if (empunhadura !== 'all') {
      items = items.filter(w => w.empunhadura === empunhadura);
    }

    // Ordenação padrão: preco_ts ASC (da mais barata para a mais cara)
    sortItems(items, state.currentSort.col || 'preco_ts', state.currentSort.asc);

    renderTableGeneric({
      title: title,
      totalCount: items.length,
      items: items,
      columns: [
        { key: 'name', label: 'Arma', class: 'cell-name' },
        { key: 'preco_ts', label: 'Preço', class: 'cell-price', formatter: (i) => i.preco_display },
        { key: 'dano', label: 'Dano', class: 'cell-damage' },
        { key: 'critico', label: 'Crítico', class: 'cell-crit' },
        { key: 'espacos', label: 'Espaços', class: 'cell-spaces' }
      ]
    });
  }

  // --------------------------------------------------------------------------
  // DRILL-DOWN DE DEMAIS ITENS
  // --------------------------------------------------------------------------
  function renderItemsCategoriesView() {
    const all = [...CATALOG.armors_and_shields, ...CATALOG.other_items];
    
    // Agrupar por item_category
    const groups = {};
    all.forEach(item => {
      const cat = item.item_category || 'Outros Itens';
      groups[cat] = (groups[cat] || 0) + 1;
    });

    const categoryIcons = {
      'Armas': '⚔️',
      'Armaduras e Escudos': '🛡️',
      'Vestuário': '🧥',
      'Esotéricos': '🔮',
      'Alquimia e Poções': '🧪',
      'Venenos': '☠️',
      'Equipamento de Aventura': '⛺',
      'Ferramentas e Instrumentos': '🛠️',
      'Alimentos e Hospedagem': '🍖',
      'Veículos e Montarias': '🐎',
      'Itens Sagrados & Pratos': '📿',
      'Itens Mágicos & Artefatos': '💍',
      'Modificações & Encantamentos': '✨',
      'Munições & Aparatos': '🎯',
      'Outros Itens': '📦'
    };

    let cardsHtml = '';
    // Adicionar Card de Armas como atalho com contagem exata
    cardsHtml += `
      <div class="category-card" data-cat="Armas" data-is-weapons="true">
        <div class="card-header-line">
          <span class="card-icon">⚔️</span>
          <span class="card-badge">${CATALOG.weapons.length}</span>
        </div>
        <h2 class="card-title">Armas</h2>
        <p class="card-desc">Armas simples, marciais, exóticas e de fogo.</p>
        <div class="card-footer">Navegar por proficiência ›</div>
      </div>
    `;

    Object.keys(groups).sort().forEach(cat => {
      cardsHtml += `
        <div class="category-card" data-cat="${cat}">
          <div class="card-header-line">
            <span class="card-icon">${categoryIcons[cat] || '📦'}</span>
            <span class="card-badge">${groups[cat]}</span>
          </div>
          <h2 class="card-title">${cat}</h2>
          <p class="card-desc">Equipamentos e itens catalogados da categoria ${cat}.</p>
          <div class="card-footer">Explorar itens ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>🎒 Categorias de Itens</h1>
          <p>Selecione um grupo para navegar pelas subcategorias e tabelas comparativas.</p>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.getAttribute('data-is-weapons') === 'true') {
          navigateTo({ view: 'weapons_subtypes', label: 'Armas' });
          return;
        }
        const cat = card.getAttribute('data-cat');
        if (cat === 'Armaduras e Escudos') {
          navigateTo({ view: 'items_subcategories', category: cat, label: cat });
        } else {
          navigateTo({
            view: 'items_table',
            category: cat,
            subcategory: 'all',
            title: cat,
            label: cat
          });
        }
      });
    });
  }

  function renderItemsSubcategoriesView(category) {
    if (category === 'Armaduras e Escudos') {
      const items = CATALOG.armors_and_shields;
      const counts = {
        'Armaduras Leves': items.filter(i => i.item_subcategory === 'Armaduras Leves').length,
        'Armaduras Pesadas': items.filter(i => i.item_subcategory === 'Armaduras Pesadas').length,
        'Escudos': items.filter(i => i.item_subcategory === 'Escudos').length
      };

      const html = `
        <div class="view-header">
          <div class="view-title-group">
            <h1>🛡️ Armaduras e Escudos</h1>
            <p>Selecione a categoria de proteção ou veja a tabela comparativa unificada.</p>
          </div>
          <div class="view-actions">
            <button id="btn-view-all-armors" class="btn btn-secondary">Ver Todas (${items.length})</button>
          </div>
        </div>

        <div class="category-grid">
          <div class="category-card" data-subcat="Armaduras Leves">
            <div class="card-header-line">
              <span class="card-icon">🥋</span>
              <span class="card-badge">${counts['Armaduras Leves']}</span>
            </div>
            <h2 class="card-title">Armaduras Leves</h2>
            <p class="card-desc">Permitem somar toda a Destreza à Defesa; baixa penalidade de armadura.</p>
            <div class="card-footer">Ver tabela ›</div>
          </div>

          <div class="category-card" data-subcat="Armaduras Pesadas">
            <div class="card-header-line">
              <span class="card-icon">🛡️</span>
              <span class="card-badge">${counts['Armaduras Pesadas']}</span>
            </div>
            <h2 class="card-title">Armaduras Pesadas</h2>
            <p class="card-desc">Alta Defesa pura, não aplicam bônus de Destreza e exigem proficiência marcial.</p>
            <div class="card-footer">Ver tabela ›</div>
          </div>

          <div class="category-card" data-subcat="Escudos">
            <div class="card-header-line">
              <span class="card-icon">🔰</span>
              <span class="card-badge">${counts['Escudos']}</span>
            </div>
            <h2 class="card-title">Escudos</h2>
            <p class="card-desc">Empunhados na mão inábil para conceder bônus cumulativo de Defesa.</p>
            <div class="card-footer">Ver tabela ›</div>
          </div>
        </div>
      `;

      elements.viewContainer.innerHTML = html;

      elements.viewContainer.querySelector('#btn-view-all-armors').addEventListener('click', () => {
        navigateTo({
          view: 'items_table',
          category: category,
          subcategory: 'all',
          title: 'Todas as Proteções (Armaduras & Escudos)',
          label: 'Todas'
        });
      });

      elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
          const sub = card.getAttribute('data-subcat');
          navigateTo({
            view: 'items_table',
            category: category,
            subcategory: sub,
            title: sub,
            label: sub
          });
        });
      });
    }
  }

  function renderItemsTable(category, subcategory, title) {
    let items = [...CATALOG.armors_and_shields, ...CATALOG.other_items];
    items = items.filter(i => i.item_category === category);
    if (subcategory && subcategory !== 'all') {
      items = items.filter(i => i.item_subcategory === subcategory);
    }

    // Ordenação padrão: preco_ts ASC
    sortItems(items, state.currentSort.col || 'preco_ts', state.currentSort.asc);

    const isArmor = category === 'Armaduras e Escudos';

    const columns = isArmor ? [
      { key: 'name', label: 'Item', class: 'cell-name' },
      { key: 'preco_ts', label: 'Preço', class: 'cell-price', formatter: (i) => i.preco_display },
      { key: 'bonus_defesa', label: 'Defesa', class: 'cell-def', formatter: (i) => i.bonus_defesa != null ? `+${i.bonus_defesa}` : '—' },
      { key: 'penalidade_armadura', label: 'Penalidade', class: 'cell-pen', formatter: (i) => i.penalidade_armadura != null ? `${i.penalidade_armadura}` : '0' },
      { key: 'espacos', label: 'Espaços', class: 'cell-spaces' }
    ] : [
      { key: 'name', label: 'Item', class: 'cell-name' },
      { key: 'preco_ts', label: 'Preço', class: 'cell-price', formatter: (i) => i.preco_display },
      { key: 'espacos', label: 'Espaços', class: 'cell-spaces' },
      { key: 'item_subcategory', label: 'Subcategoria', class: 'cell-subcat' }
    ];

    renderTableGeneric({
      title: title,
      totalCount: items.length,
      items: items,
      columns: columns
    });
  }

  // --------------------------------------------------------------------------
  // DRILL-DOWN DE PODERES
  // --------------------------------------------------------------------------
  function renderPowersCategoriesView() {
    const powers = CATALOG.powers;
    const catMap = {
      'combate': { label: 'Poderes de Combate', icon: '⚔️', desc: 'Aprimoram ataques, manobras e posturas em combate.' },
      'destino': { label: 'Poderes de Destino', icon: '🎲', desc: 'Concedem sorte, perícias extras e versatilidade tática.' },
      'magia': { label: 'Poderes de Magia', icon: '✨', desc: 'Expandem e fortalecem o lançamento de magias e conjuração.' },
      'tormenta': { label: 'Poderes da Tormenta', icon: '🩸', desc: 'Mutações aberrantes aberrativas da tempestade rubra.' },
      'classe': { label: 'Poderes de Classe', icon: '🧙‍♂️', desc: 'Poderes exclusivos desbloqueados por nível nas classes.' },
      'raca': { label: 'Poderes de Raça', icon: '🧝', desc: 'Aprimoramentos das habilidades naturais das raças de Arton.' },
      'concedido': { label: 'Poderes Concedidos', icon: '☀️', desc: 'Dons divinos concedidos pelos 20 deuses do Panteão.' },
      'origem': { label: 'Poderes de Origem', icon: '📜', desc: 'Benefícios concedidos pelo passado do personagem.' }
    };

    let cardsHtml = '';
    Object.keys(catMap).forEach(key => {
      const cnt = powers.filter(p => p.categoria === key || p.subtipo === `poder-${key}`).length;
      const m = catMap[key];
      cardsHtml += `
        <div class="category-card" data-cat="${key}" data-label="${m.label}">
          <div class="card-header-line">
            <span class="card-icon">${m.icon}</span>
            <span class="card-badge">${cnt}</span>
          </div>
          <h2 class="card-title">${m.label}</h2>
          <p class="card-desc">${m.desc}</p>
          <div class="card-footer">Explorar poderes ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>⚡ Poderes de Tormenta 20</h1>
          <p>Selecione a categoria de poder para explorar pré-requisitos e efeitos.</p>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-cat');
        const catLabel = card.getAttribute('data-label');
        if (cat === 'classe' || cat === 'raca' || cat === 'concedido') {
          navigateTo({ view: 'powers_sub', category: cat, catLabel: catLabel, label: catLabel });
        } else {
          navigateTo({
            view: 'powers_table',
            category: cat,
            filterKey: null,
            filterVal: null,
            title: catLabel,
            label: catLabel
          });
        }
      });
    });
  }

  function renderPowersSubView(category, catLabel) {
    const powers = CATALOG.powers.filter(p => p.categoria === category || p.subtipo === `poder-${category}`);
    
    let subGroup = {};
    if (category === 'classe') {
      powers.forEach(p => {
        const c = p.classe || (p.raw_yaml && p.raw_yaml.classe) || 'Geral';
        subGroup[c] = (subGroup[c] || 0) + 1;
      });
    } else if (category === 'raca') {
      powers.forEach(p => {
        const r = p.raca || (p.raw_yaml && p.raw_yaml.raca) || 'Geral';
        subGroup[r] = (subGroup[r] || 0) + 1;
      });
    } else if (category === 'concedido') {
      powers.forEach(p => {
        const deuses = p.deuses || (p.raw_yaml && p.raw_yaml.deuses) || ['Geral'];
        const list = Array.isArray(deuses) ? deuses : [deuses];
        list.forEach(d => {
          subGroup[d] = (subGroup[d] || 0) + 1;
        });
      });
    }

    let cardsHtml = '';
    Object.keys(subGroup).sort().forEach(sub => {
      cardsHtml += `
        <div class="category-card" data-sub="${sub}">
          <div class="card-header-line">
            <span class="card-icon">✨</span>
            <span class="card-badge">${subGroup[sub]}</span>
          </div>
          <h2 class="card-title">${sub}</h2>
          <p class="card-desc">Poderes associados a ${sub}.</p>
          <div class="card-footer">Ver tabela de poderes ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>${catLabel} — Seleção</h1>
          <p>Escolha uma entidade para listar seus poderes específicos.</p>
        </div>
        <div class="view-actions">
          <button id="btn-view-all-powers-sub" class="btn btn-secondary">Ver Todos (${powers.length})</button>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelector('#btn-view-all-powers-sub').addEventListener('click', () => {
      navigateTo({
        view: 'powers_table',
        category: category,
        filterKey: null,
        filterVal: null,
        title: `${catLabel} (Todos)`,
        label: 'Todos'
      });
    });

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const sub = card.getAttribute('data-sub');
        navigateTo({
          view: 'powers_table',
          category: category,
          filterKey: category === 'concedido' ? 'deuses' : category,
          filterVal: sub,
          title: `${catLabel} › ${sub}`,
          label: sub
        });
      });
    });
  }

  function renderPowersTable(category, filterKey, filterVal, title) {
    let items = CATALOG.powers.filter(p => p.categoria === category || p.subtipo === `poder-${category}`);
    if (filterKey && filterVal) {
      if (filterKey === 'deuses') {
        items = items.filter(p => {
          const d = p.deuses || (p.raw_yaml && p.raw_yaml.deuses) || [];
          return Array.isArray(d) ? d.includes(filterVal) : d === filterVal;
        });
      } else {
        items = items.filter(p => p[filterKey] === filterVal || (p.raw_yaml && p.raw_yaml[filterKey] === filterVal));
      }
    }

    sortItems(items, state.currentSort.col || 'name', state.currentSort.asc);

    renderTableGeneric({
      title: title,
      totalCount: items.length,
      items: items,
      columns: [
        { key: 'name', label: 'Poder', class: 'cell-name' },
        { key: 'categoria', label: 'Categoria', class: 'cell-pill' },
        { key: 'resumo', label: 'Resumo / Efeito', class: 'cell-desc', formatter: (i) => i.resumo || '—' }
      ]
    });
  }

  // --------------------------------------------------------------------------
  // DRILL-DOWN DE MAGIAS
  // --------------------------------------------------------------------------
  function renderSpellsTraditionsView() {
    const spells = CATALOG.spells;
    const counts = {
      'Arcana': spells.filter(s => Array.isArray(s.tradicao) ? s.tradicao.includes('Arcana') : s.tradicao === 'Arcana').length,
      'Divina': spells.filter(s => Array.isArray(s.tradicao) ? s.tradicao.includes('Divina') : s.tradicao === 'Divina').length,
      'Universal': spells.filter(s => Array.isArray(s.tradicao) ? s.tradicao.includes('Universal') : s.tradicao === 'Universal').length
    };

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>✨ Magias de Arton</h1>
          <p>Escolha a tradição mágica para refinar pelo círculo de poder.</p>
        </div>
        <div class="view-actions">
          <button id="btn-view-all-spells" class="btn btn-secondary">Ver todas (${spells.length})</button>
        </div>
      </div>

      <div class="category-grid">
        <div class="category-card" data-trad="Arcana" data-label="Magias Arcanas">
          <div class="card-header-line">
            <span class="card-icon">🔮</span>
            <span class="card-badge">${counts['Arcana']}</span>
          </div>
          <h2 class="card-title">Magias Arcanas</h2>
          <p class="card-desc">Manipulação da trama mágica do mundo por arcanistas, bardos e inovadores.</p>
          <div class="card-footer">Selecionar círculo ›</div>
        </div>

        <div class="category-card" data-trad="Divina" data-label="Magias Divinas">
          <div class="card-header-line">
            <span class="card-icon">☀️</span>
            <span class="card-badge">${counts['Divina']}</span>
          </div>
          <h2 class="card-title">Magias Divinas</h2>
          <p class="card-desc">Milagres e preces concedidos pela devoção aos deuses por clérigos, druidas e paladinos.</p>
          <div class="card-footer">Selecionar círculo ›</div>
        </div>

        <div class="category-card" data-trad="Universal" data-label="Magias Universais">
          <div class="card-header-line">
            <span class="card-icon">🌌</span>
            <span class="card-badge">${counts['Universal']}</span>
          </div>
          <h2 class="card-title">Magias Universais</h2>
          <p class="card-desc">Feitiços fundamentais pertencentes tanto à tradição arcana quanto à divina.</p>
          <div class="card-footer">Selecionar círculo ›</div>
        </div>
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelector('#btn-view-all-spells').addEventListener('click', () => {
      navigateTo({
        view: 'spells_table',
        tradicao: 'all',
        circulo: 'all',
        title: 'Todas as Magias',
        label: 'Todas as Magias'
      });
    });

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const trad = card.getAttribute('data-trad');
        const label = card.getAttribute('data-label');
        navigateTo({
          view: 'spells_circles',
          tradicao: trad,
          label: label
        });
      });
    });
  }

  function renderSpellsCirclesView(tradicao) {
    const spells = CATALOG.spells.filter(s => {
      return Array.isArray(s.tradicao) ? s.tradicao.includes(tradicao) : s.tradicao === tradicao;
    });

    const circles = [1, 2, 3, 4, 5];
    let cardsHtml = '';

    circles.forEach(c => {
      const cnt = spells.filter(s => Number(s.circulo) === c).length;
      cardsHtml += `
        <div class="category-card" data-circle="${c}">
          <div class="card-header-line">
            <span class="card-icon">⚡</span>
            <span class="card-badge">${cnt}</span>
          </div>
          <h2 class="card-title">${c}º Círculo</h2>
          <p class="card-desc">Magias do ${c}º círculo (${c === 1 ? '1 PM' : `${(c-1)*3 + 1} PM`}).</p>
          <div class="card-footer">Ver tabela de magias ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>Magias ${tradicao}s — Círculos</h1>
          <p>Escolha o círculo de conjuração para comparar custo de PM, alcance e execução.</p>
        </div>
        <div class="view-actions">
          <button id="btn-view-all-in-trad" class="btn btn-secondary">Ver Todas (${spells.length})</button>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelector('#btn-view-all-in-trad').addEventListener('click', () => {
      navigateTo({
        view: 'spells_table',
        tradicao: tradicao,
        circulo: 'all',
        title: `Magias ${tradicao}s (Todas)`,
        label: 'Todas'
      });
    });

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const c = card.getAttribute('data-circle');
        navigateTo({
          view: 'spells_table',
          tradicao: tradicao,
          circulo: c,
          title: `Magias ${tradicao}s › ${c}º Círculo`,
          label: `${c}º Círculo`
        });
      });
    });
  }

  function renderSpellsTable(tradicao, circulo, title) {
    let items = CATALOG.spells;
    if (tradicao !== 'all') {
      items = items.filter(s => Array.isArray(s.tradicao) ? s.tradicao.includes(tradicao) : s.tradicao === tradicao);
    }
    if (circulo !== 'all') {
      items = items.filter(s => Number(s.circulo) === Number(circulo));
    }

    sortItems(items, state.currentSort.col || 'circulo', state.currentSort.asc);

    renderTableGeneric({
      title: title,
      totalCount: items.length,
      items: items,
      columns: [
        { key: 'name', label: 'Magia', class: 'cell-name' },
        { key: 'circulo', label: 'Círculo', class: 'cell-circ', formatter: (i) => `${i.circulo}º` },
        { key: 'escola', label: 'Escola', class: 'cell-pill' },
        { key: 'execucao', label: 'Execução', class: 'cell-exec' },
        { key: 'alcance', label: 'Alcance', class: 'cell-range' },
        { key: 'custo_pm', label: 'PM', class: 'cell-price', formatter: (i) => `${i.custo_pm || i.circulo} PM` }
      ]
    });
  }

  // --------------------------------------------------------------------------
  // CLASSES, RAÇAS, DEUSES, ORIGENS, REGRAS
  // --------------------------------------------------------------------------
  function renderClassesTypesView() {
    const classes = CATALOG.classes;
    const base = classes.filter(c => c.subtipo === 'classe-base');
    const variant = classes.filter(c => c.subtipo !== 'classe-base');

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>🧙‍♂️ Classes de Personagem</h1>
          <p>Escolha entre as 19 classes fundamentais ou as variantes e suplementos.</p>
        </div>
      </div>
      <div class="category-grid">
        <div class="category-card" data-sub="classe-base" data-label="Classes Básicas">
          <div class="card-header-line">
            <span class="card-icon">⚔️</span>
            <span class="card-badge">${base.length}</span>
          </div>
          <h2 class="card-title">Classes Básicas (JdA)</h2>
          <p class="card-desc">As 19 classes do Livro Básico Jogo do Ano (Guerreiro, Arcanista, Clérigo, etc.).</p>
          <div class="card-footer">Ver classes básicas ›</div>
        </div>

        <div class="category-card" data-sub="classe-variante" data-label="Variantes & Suplementos">
          <div class="card-header-line">
            <span class="card-icon">📜</span>
            <span class="card-badge">${variant.length}</span>
          </div>
          <h2 class="card-title">Variantes & Expansões</h2>
          <p class="card-desc">Classes introduzidas em suplementos, Deuses de Arton e Dragão Brasil.</p>
          <div class="card-footer">Ver variantes ›</div>
        </div>
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const sub = card.getAttribute('data-sub');
        const label = card.getAttribute('data-label');
        navigateTo({ view: 'classes_list', subtipo: sub, title: label, label: label });
      });
    });
  }

  function renderClassesList(subtipo, title) {
    const items = CATALOG.classes.filter(c => subtipo === 'classe-base' ? c.subtipo === 'classe-base' : c.subtipo !== 'classe-base');

    let cardsHtml = '';
    items.forEach(c => {
      cardsHtml += `
        <div class="category-card entity-card" data-id="${c.id}">
          <div class="card-header-line">
            <span class="card-icon">🛡️</span>
            <span class="card-badge">${c.subtipo === 'classe-base' ? 'Básica' : 'Variante'}</span>
          </div>
          <h2 class="card-title">${c.name}</h2>
          <p class="card-desc"><strong>PV:</strong> ${c.raw_yaml.pv_inicial || '—'} (+${c.raw_yaml.pv_por_nivel || '—'}) • <strong>PM:</strong> ${c.raw_yaml.pm_inicial || '—'} (+${c.raw_yaml.pm_por_nivel || '—'})</p>
          <div class="card-footer">Abrir detalhes da classe ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>${title} (${items.length})</h1>
          <p>Clique em qualquer classe para abrir as habilidades e proficiências completas.</p>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;
    bindEntityCards();
  }

  function renderRacesList() {
    const races = CATALOG.races;
    let cardsHtml = '';

    races.forEach(r => {
      cardsHtml += `
        <div class="category-card entity-card" data-id="${r.id}">
          <div class="card-header-line">
            <span class="card-icon">🧝</span>
            <span class="card-badge">${r.tamanho || 'Médio'}</span>
          </div>
          <h2 class="card-title">${r.name}</h2>
          <p class="card-desc"><strong>Atributos:</strong> ${r.atributos || '—'}<br><strong>Deslocamento:</strong> ${r.deslocamento || '9m'}</p>
          <div class="card-footer">Ver habilidades raciais ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>🧝 Raças de Arton (${races.length})</h1>
          <p>Selecione uma raça para consultar modificadores e habilidades de herança.</p>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;
    bindEntityCards();
  }

  function renderGodsList() {
    const gods = CATALOG.gods;
    let cardsHtml = '';

    gods.forEach(g => {
      cardsHtml += `
        <div class="category-card entity-card" data-id="${g.id}">
          <div class="card-header-line">
            <span class="card-icon">☀️</span>
            <span class="card-badge">Panteão</span>
          </div>
          <h2 class="card-title">${g.name}</h2>
          <p class="card-desc">${g.resumo || (g.raw_yaml && g.raw_yaml.titulo) || 'Divindade Maior de Arton'}</p>
          <div class="card-footer">Ver crenças e poderes ›</div>
        </div>
      `;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>☀️ Deuses do Panteão (${gods.length})</h1>
          <p>Consulte poderes concedidos, obrigações e restrições de cada divindade.</p>
        </div>
      </div>
      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    elements.viewContainer.innerHTML = html;
    bindEntityCards();
  }

  function renderOriginsList() {
    const origins = CATALOG.origins;
    sortItems(origins, state.currentSort.col || 'name', state.currentSort.asc);

    renderTableGeneric({
      title: '📜 Origens de Personagem',
      totalCount: origins.length,
      items: origins,
      columns: [
        { key: 'name', label: 'Origem', class: 'cell-name' },
        { key: 'subtipo', label: 'Tipo', class: 'cell-pill' },
        { key: 'fonte', label: 'Fonte', class: 'cell-font' }
      ]
    });
  }

  function renderMechanicsCategoriesView() {
    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>⚠️ Condições & Perícias</h1>
          <p>Consulte as condições de combate e as fórmulas canônicas de perícias.</p>
        </div>
      </div>
      <div class="category-grid">
        <div class="category-card" data-action="conditions">
          <div class="card-header-line">
            <span class="card-icon">⚠️</span>
            <span class="card-badge">${CATALOG.conditions.length}</span>
          </div>
          <h2 class="card-title">Condições & Penalidades</h2>
          <p class="card-desc">Abalado, Cego, Desprevenido, Paralisado e todas as 35 condições de jogo.</p>
          <div class="card-footer">Ver tabela de condições ›</div>
        </div>

        <div class="category-card" data-action="skills">
          <div class="card-header-line">
            <span class="card-icon">🎯</span>
            <span class="card-badge">${CATALOG.skills.length}</span>
          </div>
          <h2 class="card-title">Perícias</h2>
          <p class="card-desc">As 29 perícias de T20 com atributos-chave e penalidades de armadura.</p>
          <div class="card-footer">Ver tabela de perícias ›</div>
        </div>
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    elements.viewContainer.querySelector('[data-action="conditions"]').addEventListener('click', () => {
      navigateTo({ view: 'conditions_table', label: 'Condições' });
    });

    elements.viewContainer.querySelector('[data-action="skills"]').addEventListener('click', () => {
      navigateTo({ view: 'skills_table', label: 'Perícias' });
    });
  }

  function renderConditionsTable() {
    const conditions = CATALOG.conditions;
    sortItems(conditions, state.currentSort.col || 'name', state.currentSort.asc);

    renderTableGeneric({
      title: '⚠️ Condições & Penalidades',
      totalCount: conditions.length,
      items: conditions,
      columns: [
        { key: 'name', label: 'Condição', class: 'cell-name' },
        { key: 'tipo_efeito', label: 'Efeito', class: 'cell-pill', formatter: (i) => i.tipo_efeito || 'Geral' }
      ]
    });
  }

  function renderSkillsTable() {
    const skills = CATALOG.skills;
    sortItems(skills, state.currentSort.col || 'name', state.currentSort.asc);

    renderTableGeneric({
      title: '🎯 Perícias de Tormenta 20',
      totalCount: skills.length,
      items: skills,
      columns: [
        { key: 'name', label: 'Perícia', class: 'cell-name' },
        { key: 'atributo_chave', label: 'Atributo-Chave', class: 'cell-pill' },
        { key: 'somente_treinada', label: 'Somente Treinada', class: 'cell-bool', formatter: (i) => i.somente_treinada ? 'Sim' : 'Não' },
        { key: 'penalidade_armadura', label: 'Penalidade Armadura', class: 'cell-bool', formatter: (i) => i.penalidade_armadura ? 'Sim' : 'Não' }
      ]
    });
  }

  // --------------------------------------------------------------------------
  // TABELA GENÉRICA COM BUSCA INTERNA E ORDENAÇÃO
  // --------------------------------------------------------------------------
  function renderTableGeneric({ title, totalCount, items, columns }) {
    // Filtrar pelo input local se houver
    let displayItems = items;
    if (state.tableFilterText.trim()) {
      const q = state.tableFilterText.toLowerCase();
      displayItems = items.filter(it => it.name.toLowerCase().includes(q));
    }

    let thsHtml = '';
    columns.forEach(col => {
      let sortClass = '';
      if (state.currentSort.col === col.key) {
        sortClass = state.currentSort.asc ? 'sorted-asc' : 'sorted-desc';
      }
      thsHtml += `<th data-col="${col.key}" class="${sortClass}">${col.label}</th>`;
    });

    let trsHtml = '';
    displayItems.forEach(item => {
      trsHtml += `<tr data-id="${item.id}">`;
      columns.forEach(col => {
        let val = item[col.key];
        if (col.formatter) {
          val = col.formatter(item);
        } else if (val == null) {
          val = '—';
        }
        trsHtml += `<td class="${col.class || ''}">${val}</td>`;
      });
      trsHtml += `</tr>`;
    });

    const html = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>${title} (${displayItems.length})</h1>
        </div>
      </div>

      <div class="table-wrapper">
        <div class="table-filter-bar">
          <input type="text" id="table-filter-input" class="input-table-filter" placeholder="Filtrar nesta lista..." value="${escapeHtml(state.tableFilterText)}">
          <span style="font-size:12px;color:var(--text-muted);">Exibindo ${displayItems.length} de ${totalCount} registros</span>
        </div>
        <div class="table-container">
          <table class="t20-table">
            <thead>
              <tr>${thsHtml}</tr>
            </thead>
            <tbody>
              ${trsHtml || '<tr><td colspan="' + columns.length + '" style="text-align:center;padding:20px;color:var(--text-muted);">Nenhum resultado encontrado para o filtro.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;

    elements.viewContainer.innerHTML = html;

    // Listeners da tabela
    const filterInput = elements.viewContainer.querySelector('#table-filter-input');
    filterInput.focus();
    filterInput.setSelectionRange(filterInput.value.length, filterInput.value.length);
    filterInput.addEventListener('input', (e) => {
      state.tableFilterText = e.target.value;
      renderCurrentView();
    });

    // Ordenação ao clicar no cabeçalho
    elements.viewContainer.querySelectorAll('.t20-table th').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.getAttribute('data-col');
        if (state.currentSort.col === col) {
          state.currentSort.asc = !state.currentSort.asc;
        } else {
          state.currentSort.col = col;
          state.currentSort.asc = true;
        }
        renderCurrentView();
      });
    });

    // Abrir gaveta lateral de detalhes ao clicar na linha
    elements.viewContainer.querySelectorAll('.t20-table tbody tr').forEach(tr => {
      tr.addEventListener('click', () => {
        const id = tr.getAttribute('data-id');
        if (id) openDetailDrawer(id);
      });
    });
  }

  function sortItems(arr, col, asc) {
    arr.sort((a, b) => {
      let va = a[col];
      let vb = b[col];

      // Valores numéricos ou preços
      if (col === 'preco_ts') {
        const pa = va == null ? Infinity : va;
        const pb = vb == null ? Infinity : vb;
        if (pa !== pb) return asc ? pa - pb : pb - pa;
        return a.name.localeCompare(b.name, 'pt-BR');
      }

      if (typeof va === 'number' && typeof vb === 'number') {
        return asc ? va - vb : vb - va;
      }

      // Strings
      va = (va || '').toString().toLowerCase();
      vb = (vb || '').toString().toLowerCase();
      const comp = va.localeCompare(vb, 'pt-BR');
      return asc ? comp : -comp;
    });
  }

  function bindEntityCards() {
    elements.viewContainer.querySelectorAll('.entity-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (id) openDetailDrawer(id);
      });
    });
  }

  // ==========================================================================
  // 4. PAINEL LATERAL DE DETALHES (SPLIT DRAWER)
  // ==========================================================================
  function openDetailDrawer(id) {
    const item = CATALOG.entities[id];
    if (!item) {
      console.warn('Item não encontrado:', id);
      return;
    }

    state.activeDetailId = id;
    elements.drawerTitle.textContent = item.name;

    // Badges
    elements.drawerBadges.innerHTML = '';
    const badgeColors = ['badge-crimson', 'badge-gold', 'badge-blue', 'badge-purple'];
    const badges = [item.domain, item.subtipo, item.categoria, item.item_category].filter(Boolean);
    badges.forEach((b, idx) => {
      const sp = document.createElement('span');
      sp.className = `badge ${badgeColors[idx % badgeColors.length]}`;
      sp.textContent = b;
      elements.drawerBadges.appendChild(sp);
    });

    // Barra de Meta
    let metaItems = [];
    if (item.preco_display && item.preco_display !== '—') metaItems.push(`<strong>Preço:</strong> ${item.preco_display}`);
    if (item.espacos && item.espacos !== '—') metaItems.push(`<strong>Espaços:</strong> ${item.espacos}`);
    if (item.dano && item.dano !== '—') metaItems.push(`<strong>Dano:</strong> ${item.dano}`);
    if (item.critico && item.critico !== '—') metaItems.push(`<strong>Crítico:</strong> ${item.critico}`);
    if (item.bonus_defesa != null) metaItems.push(`<strong>Defesa:</strong> +${item.bonus_defesa}`);
    if (item.custo_pm) metaItems.push(`<strong>Custo:</strong> ${item.custo_pm} PM`);
    if (item.circulo) metaItems.push(`<strong>Círculo:</strong> ${item.circulo}º`);

    elements.drawerMetaBar.innerHTML = metaItems.map(m => `<div class="meta-item">${m}</div>`).join('');
    elements.drawerContent.innerHTML = item.html_content || '<p style="color:var(--text-muted)">Sem descrição detalhada.</p>';

    // Interceptar cliques em wikilinks dentro do corpo da nota
    elements.drawerContent.querySelectorAll('.wikilink').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        if (target && CATALOG.entities[target]) {
          openDetailDrawer(target);
        } else {
          alert(`Nota de referência "[[${target}]]" não indexada diretamente no compêndio.`);
        }
      });
    });

    elements.detailDrawer.classList.add('open');
    elements.detailDrawer.setAttribute('aria-hidden', 'false');
    elements.backdrop.classList.remove('hidden');
  }

  function closeDetailDrawer() {
    elements.detailDrawer.classList.remove('open');
    elements.detailDrawer.setAttribute('aria-hidden', 'true');
    state.activeDetailId = null;
    checkBackdrop();
  }

  // ==========================================================================
  // 5. GAVETA RÁPIDA DE CONDIÇÕES (COMBATE)
  // ==========================================================================
  function initConditionsDrawer() {
    elements.btnToggleConditions.addEventListener('click', () => {
      toggleConditionsDrawer();
    });

    elements.btnCloseConditions.addEventListener('click', () => {
      closeConditionsDrawer();
    });

    elements.conditionsFilterInput.addEventListener('input', (e) => {
      renderConditionsList(e.target.value);
    });

    renderConditionsList('');
  }

  function toggleConditionsDrawer() {
    const isOpen = elements.conditionsDrawer.classList.contains('open');
    if (isOpen) {
      closeConditionsDrawer();
    } else {
      elements.conditionsDrawer.classList.add('open');
      elements.conditionsDrawer.setAttribute('aria-hidden', 'false');
      elements.backdrop.classList.remove('hidden');
      elements.conditionsFilterInput.focus();
    }
  }

  function closeConditionsDrawer() {
    elements.conditionsDrawer.classList.remove('open');
    elements.conditionsDrawer.setAttribute('aria-hidden', 'true');
    checkBackdrop();
  }

  function renderConditionsList(filter) {
    const list = CATALOG.conditions;
    const q = filter.toLowerCase().trim();
    const filtered = q ? list.filter(c => c.name.toLowerCase().includes(q) || (c.tipo_efeito || '').toLowerCase().includes(q)) : list;

    let html = '';
    filtered.forEach(c => {
      html += `
        <div class="condition-card" data-id="${c.id}">
          <div class="condition-header">
            <span class="condition-title">${c.name}</span>
            <span class="condition-tag">${c.tipo_efeito || 'Condição'}</span>
          </div>
          <div class="condition-summary">${c.resumo || 'Clique para ver o texto oficial de regras e penalidades.'}</div>
        </div>
      `;
    });

    elements.conditionsListContainer.innerHTML = html || '<p style="color:var(--text-muted);padding:20px;text-align:center;">Nenhuma condição encontrada.</p>';

    elements.conditionsListContainer.querySelectorAll('.condition-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openDetailDrawer(id);
      });
    });
  }

  // ==========================================================================
  // 6. BUSCA GLOBAL (CTRL + K)
  // ==========================================================================
  function initGlobalSearch() {
    // Abrir com botão ou Ctrl+K / Cmd+K
    elements.btnOpenSearch.addEventListener('click', openSearchModal);
    
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === 'Escape') {
        closeAllModals();
      }
    });

    elements.btnCloseSearch.addEventListener('click', closeSearchModal);

    elements.globalSearchInput.addEventListener('input', (e) => {
      state.searchActiveIndex = 0;
      performGlobalSearch(e.target.value);
    });

    // Teclas de navegação na busca
    elements.globalSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateSearchResults(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateSearchResults(-1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        selectSearchResult(state.searchActiveIndex);
      }
    });

    // Filtros por chip
    elements.searchDomainFilters.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        elements.searchDomainFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.searchFilterDomain = chip.getAttribute('data-filter');
        performGlobalSearch(elements.globalSearchInput.value);
      });
    });
  }

  function openSearchModal() {
    elements.searchModal.classList.remove('hidden');
    elements.globalSearchInput.value = '';
    elements.globalSearchInput.focus();
    performGlobalSearch('');
  }

  function closeSearchModal() {
    elements.searchModal.classList.add('hidden');
  }

  function performGlobalSearch(query) {
    const q = query.toLowerCase().trim();
    const domain = state.searchFilterDomain;
    const all = Object.values(CATALOG.entities);

    let results = all.filter(it => !it.is_moc);

    if (domain !== 'all') {
      if (domain === 'Condições') {
        results = results.filter(it => it.subtipo === 'condicao');
      } else {
        results = results.filter(it => it.domain === domain);
      }
    }

    if (q) {
      results = results.filter(it => {
        return it.name.toLowerCase().includes(q) ||
               (it.subtipo || '').toLowerCase().includes(q) ||
               (it.categoria || '').toLowerCase().includes(q);
      });
    }

    // Limitar a 50 resultados para máxima fluidez
    state.searchCurrentResults = results.slice(0, 50);
    renderSearchResults();
  }

  function renderSearchResults() {
    const list = state.searchCurrentResults;
    if (list.length === 0) {
      elements.searchResultsList.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted)">Nenhum resultado encontrado.</div>';
      return;
    }

    let html = '';
    list.forEach((it, idx) => {
      const isSelected = idx === state.searchActiveIndex;
      html += `
        <div class="search-result-item ${isSelected ? 'selected' : ''}" data-index="${idx}" data-id="${it.id}">
          <div class="search-item-info">
            <span class="search-item-name">${escapeHtml(it.name)}</span>
            <span class="search-item-sub">${escapeHtml(it.domain)} › ${escapeHtml(it.subtipo || it.categoria || '')}</span>
          </div>
          <span class="badge badge-gray">${escapeHtml(it.preco_display && it.preco_display !== '—' ? it.preco_display : it.domain)}</span>
        </div>
      `;
    });

    elements.searchResultsList.innerHTML = html;

    elements.searchResultsList.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = Number(item.getAttribute('data-index'));
        selectSearchResult(idx);
      });
    });
  }

  function navigateSearchResults(direction) {
    const total = state.searchCurrentResults.length;
    if (total === 0) return;
    state.searchActiveIndex = (state.searchActiveIndex + direction + total) % total;
    renderSearchResults();
    
    const selectedEl = elements.searchResultsList.querySelector(`.search-result-item[data-index="${state.searchActiveIndex}"]`);
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }

  function selectSearchResult(idx) {
    const item = state.searchCurrentResults[idx];
    if (item) {
      closeSearchModal();
      openDetailDrawer(item.id);
    }
  }

  // ==========================================================================
  // 7. FECHAMENTO DE MODAIS E BACKDROP
  // ==========================================================================
  function closeAllModals() {
    closeDetailDrawer();
    closeConditionsDrawer();
    closeSearchModal();
  }

  function checkBackdrop() {
    const isDetailOpen = elements.detailDrawer.classList.contains('open');
    const isConditionsOpen = elements.conditionsDrawer.classList.contains('open');
    if (!isDetailOpen && !isConditionsOpen) {
      elements.backdrop.classList.add('hidden');
    }
  }

  // ==========================================================================
  // 8. INICIALIZAÇÃO GERAL
  // ==========================================================================
  function init() {
    initTheme();
    initConditionsDrawer();
    initGlobalSearch();

    // Eventos de Navegação
    elements.btnNavBack.addEventListener('click', navigateBack);
    elements.btnHomeLogo.addEventListener('click', () => {
      state.history = [{ view: 'home', label: 'Início' }];
      renderBreadcrumbs();
      renderCurrentView();
    });

    elements.btnCloseDrawer.addEventListener('click', closeDetailDrawer);
    elements.backdrop.addEventListener('click', closeAllModals);

    // Render Inicial
    renderBreadcrumbs();
    renderCurrentView();

    console.log('⚔️ Tormenta 20 Compêndio Web inicializado com sucesso.');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Executar ao carregar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
