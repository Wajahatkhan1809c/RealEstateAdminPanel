(function () {
    var PAGE = location.pathname.split('/').pop() || 'dashboard.html';

    var mainNav = [
        { href: 'dashboard.html', icon: 'bi-grid-fill', label: 'Dashboard' },
        { href: 'properties.html', icon: 'bi-houses-fill', label: 'All Properties', badge: '10', badgeClass: 'badge-gold' },
        { href: 'featured.html', icon: 'bi-star-fill', label: 'Featured', badge: '6', badgeClass: 'badge-navy' },
        { href: 'add-property.html', icon: 'bi-plus-circle-fill', label: 'Add Property' }
    ];

    var contentNav = [
        { href: 'testimonials.html', icon: 'bi-chat-quote-fill', label: 'Testimonials' },
        { href: 'services.html', icon: 'bi-gear-fill', label: 'Services (6)' }
    ];

    var msgNav = [
        { href: 'leads.html', icon: 'bi-envelope-fill', label: 'Contact Messages', badge: '8', badgeClass: 'badge-gold' },
        { href: 'consultations.html', icon: 'bi-calendar-check-fill', label: 'Consultations', badge: '4', badgeClass: 'badge-navy' }
    ];

    var settingsNav = [
        { href: 'settings.html', icon: 'bi-sliders', label: 'Site Settings' }
    ];

    function navLink(item) {
        var active = item.href === PAGE ? ' active' : '';
        var badge = item.badge
            ? ' <span class="badge ' + item.badgeClass + '">' + item.badge + '</span>'
            : '';
        return '<li class="nav-item"><a href="' + item.href + '" class="nav-link' + active + '">' +
            '<i class="bi ' + item.icon + '"></i> ' + item.label + badge + '</a></li>';
    }

    function renderSidebar() {
        var root = document.getElementById('sidebar-root');
        if (!root) return;
        root.innerHTML =
            '<nav id="sidebar" class="d-flex flex-column">' +
                '<div class="brand-block">' +
                    '<div class="brand-logo"><img src="logo.jpeg" alt="Hasaan Real Estate"></div>' +
                    '<div>' +
                        '<div class="brand-name">Hasaan Real Estate</div>' +
                        '<div class="brand-tagline">Sale, Purchase &amp; Rent</div>' +
                    '</div>' +
                '</div>' +
                '<ul class="nav flex-column mt-3 flex-grow-1">' +
                    mainNav.map(navLink).join('') +
                    '<li class="sidebar-section">Website Content</li>' +
                    contentNav.map(navLink).join('') +
                    '<li class="sidebar-section">Messages</li>' +
                    msgNav.map(navLink).join('') +
                    '<li class="sidebar-section">Settings</li>' +
                    settingsNav.map(navLink).join('') +
                    '<li class="nav-item"><a href="#" class="nav-link text-danger"><i class="bi bi-box-arrow-right"></i> Logout</a></li>' +
                '</ul>' +
            '</nav>';
    }

    function renderTopbar() {
        var root = document.getElementById('topbar-root');
        if (!root) return;
        root.innerHTML =
            '<nav class="navbar top-navbar">' +
                '<div class="container-fluid px-0">' +
                    '<button class="icon-btn d-lg-none" id="sidebarToggle" aria-label="Menu"><i class="bi bi-list fs-5"></i></button>' +
                    '<form class="d-none d-md-flex search-box ms-2" data-demo data-msg="Search is a demo feature.">' +
                        '<div class="input-group">' +
                            '<span class="input-group-text"><i class="bi bi-search"></i></span>' +
                            '<input class="form-control" type="search" placeholder="Search properties, testimonials, messages...">' +
                        '</div>' +
                    '</form>' +
                    '<div class="d-flex align-items-center gap-2 ms-auto">' +
                        '<a class="icon-btn d-none d-sm-inline-flex" href="https://wa.me/923003084176" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>' +
                        '<div class="dropdown">' +
                            '<button class="icon-btn position-relative" data-bs-toggle="dropdown" aria-expanded="false">' +
                                '<i class="bi bi-bell"></i>' +
                                '<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:10px;">12</span>' +
                            '</button>' +
                            '<ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2">' +
                                '<li><h6 class="dropdown-header">New Messages</h6></li>' +
                                '<li><a class="dropdown-item small" href="leads.html">Contact: inquiry for 500 Sq. Yd. Modern Villa (DHA 7)</a></li>' +
                                '<li><a class="dropdown-item small" href="leads.html">Contact: details request - Clifton Sea-Facing Apartment</a></li>' +
                                '<li><a class="dropdown-item small" href="consultations.html">Consultation: booking request (Investment)</a></li>' +
                                '<li><hr class="dropdown-divider"></li>' +
                                '<li><a class="dropdown-item text-center small fw-semibold" style="color:var(--primary);" href="leads.html">View all messages</a></li>' +
                            '</ul>' +
                        '</div>' +
                        '<div class="dropdown">' +
                            '<a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">' +
                                '<img src="https://ui-avatars.com/api/?name=Fahad+Hussain&background=B89A61&color=fff" alt="admin" width="38" height="38" class="rounded-circle me-2">' +
                                '<div class="d-none d-sm-block text-start">' +
                                    '<span class="fw-semibold d-block" style="font-size:0.9rem;">Fahad Hussain</span>' +
                                    '<small class="text-muted" style="font-size:0.72rem;">Proprietor</small>' +
                                '</div>' +
                            '</a>' +
                            '<ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2">' +
                                '<li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i> Profile</a></li>' +
                                '<li><a class="dropdown-item" href="settings.html"><i class="bi bi-gear me-2"></i> Settings</a></li>' +
                                '<li><hr class="dropdown-divider"></li>' +
                                '<li><a class="dropdown-item text-danger" href="#"><i class="bi bi-box-arrow-right me-2"></i> Logout</a></li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</nav>';
    }

    function bindToggle() {
        var toggle = document.getElementById('sidebarToggle');
        var sidebar = document.getElementById('sidebar');
        var overlay = document.getElementById('sidebarOverlay');
        if (!toggle || !sidebar) return;
        toggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            if (overlay) overlay.classList.toggle('show');
        });
        if (overlay) {
            overlay.addEventListener('click', function () {
                sidebar.classList.remove('active');
                overlay.classList.remove('show');
            });
        }
    }

    function toast(msg) {
        var el = document.querySelector('.toast-app');
        if (!el) {
            el = document.createElement('div');
            el.className = 'toast-app';
            document.body.appendChild(el);
        }
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(el._t);
        el._t = setTimeout(function () { el.classList.remove('show'); }, 2400);
    }

    function bindForms() {
        document.querySelectorAll('form[data-demo]').forEach(function (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                toast(form.getAttribute('data-msg') || 'Saved successfully.');
            });
        });
        document.querySelectorAll('[data-action-msg]').forEach(function (el) {
            el.addEventListener('click', function (e) {
                if (el.tagName === 'A' && el.getAttribute('href') === '#') e.preventDefault();
                toast(el.getAttribute('data-action-msg'));
            });
        });
    }

    function bindFilters() {
        document.querySelectorAll('[data-filter-group]').forEach(function (group) {
            var targetSel = group.getAttribute('data-filter-target');
            var container = targetSel ? document.querySelector(targetSel) : null;
            if (!container) return;
            group.querySelectorAll('[data-filter]').forEach(function (chip) {
                chip.addEventListener('click', function () {
                    group.querySelectorAll('[data-filter]').forEach(function (c) { c.classList.remove('active'); });
                    chip.classList.add('active');
                    var val = chip.getAttribute('data-filter');
                    container.querySelectorAll('[data-tags]').forEach(function (item) {
                        var tags = item.getAttribute('data-tags') || '';
                        var show = val === 'all' || tags.split(' ').indexOf(val) !== -1;
                        item.style.display = show ? '' : 'none';
                    });
                });
            });
        });
    }

    renderSidebar();
    renderTopbar();
    bindToggle();
    bindForms();
    bindFilters();
})();
