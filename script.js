// Global variables
let cart = [];
let isMenuOpen = false;

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Reseller why choose content
const resellerWhyChoose = {
    'mta-samp': [
        {
            icon: 'fas fa-handshake',
            title: 'Parceria Completa',
            description: 'Revenda tanto MTA quanto SAMP com um único plano. Máxima flexibilidade para seus clientes.'
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Margem Maior',
            description: 'Planos combinados oferecem melhor custo-benefício e maior margem de lucro para revendedores.'
        },
        {
            icon: 'fas fa-cogs',
            title: 'Painel Unificado',
            description: 'Gerencie servidores MTA e SAMP através de um único painel TCAdmin profissional.'
        },
        {
            icon: 'fas fa-users',
            title: 'Comunidade Ativa',
            description: 'Atenda tanto a comunidade MTA quanto SAMP, expandindo seu mercado potencial.'
        }
    ],
    'mta': [
        {
            icon: 'fas fa-car',
            title: 'Especialização MTA',
            description: 'Foque exclusivamente no mercado MTA com recursos otimizados para este tipo de servidor.'
        },
        {
            icon: 'fas fa-tachometer-alt',
            title: 'Performance Superior',
            description: 'Servidores otimizados especificamente para MTA com baixa latência e alta performance.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Proteção Avançada',
            description: 'Sistema anti-cheat integrado e proteção DDoS especializada para servidores MTA.'
        },
        {
            icon: 'fas fa-puzzle-piece',
            title: 'Recursos Exclusivos',
            description: 'Mods e recursos específicos para MTA, incluindo suporte a scripts personalizados.'
        }
    ],
    'samp': [
        {
            icon: 'fas fa-gamepad',
            title: 'Especialização SAMP',
            description: 'Recursos dedicados para SAMP com suporte completo a plugins e filterscripts.'
        },
        {
            icon: 'fas fa-bolt',
            title: 'Baixa Latência',
            description: 'Servidores otimizados para SAMP com ping brasileiro e conexão estável.'
        },
        {
            icon: 'fas fa-download',
            title: 'Fast Download',
            description: 'Sistema de download rápido integrado para mods e texturas dos seus servidores.'
        },
        {
            icon: 'fas fa-community',
            title: 'Comunidade Brasileira',
            description: 'Suporte especializado para a comunidade SAMP brasileira com experiência comprovada.'
        }
    ],
    'openmp': [
        {
            icon: 'fas fa-code',
            title: 'Tecnologia Moderna',
            description: 'Open.MP é a evolução do SA-MP com melhor performance e recursos avançados.'
        },
        {
            icon: 'fas fa-users',
            title: 'Comunidade Crescente',
            description: 'Faça parte da comunidade Open.MP em crescimento com suporte ativo dos desenvolvedores.'
        },
        {
            icon: 'fas fa-sync-alt',
            title: 'Atualizações Constantes',
            description: 'Receba automaticamente as últimas atualizações e melhorias do Open.MP.'
        },
        {
            icon: 'fas fa-puzzle-piece',
            title: 'Compatibilidade SA-MP',
            description: '100% compatível com scripts SA-MP existentes, facilitando a migração.'
        }
    ]
};

// Reseller plans data
const resellerPlans = {
    'mta-samp': {
        title: 'Planos Revenda MTA/SAMP',
        subtitle: 'Revenda servidores MTA e SAMP com painel TCAdmin',
        plans: [
            {
                icon: 'fas fa-cube',
                name: 'Revenda 1k',
                price: '21,99',
                id: 'revenda-mta-samp-1k',
                features: [
                    '1.000 Slots',
                    'MTA & SAMP',
                    'Anti-DDoS',
                    'Fast Download (MTA)',
                    'Plugins .so (SAMP)',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda 3k',
                price: '55,00',
                id: 'revenda-mta-samp-3k',
                features: [
                    '3.000 Slots',
                    'MTA & SAMP',
                    'Anti-DDoS',
                    'Fast Download (MTA)',
                    'Plugins .so (SAMP)',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda 4k',
                price: '71,00',
                id: 'revenda-mta-samp-4k',
                features: [
                    '4.000 Slots',
                    'MTA & SAMP',
                    'Anti-DDoS',
                    'Fast Download (MTA)',
                    'Plugins .so (SAMP)',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda 5k',
                price: '84,99',
                id: 'revenda-mta-samp-5k',
                features: [
                    '5.000 Slots',
                    'MTA & SAMP',
                    'Anti-DDoS',
                    'Fast Download (MTA)',
                    'Plugins .so (SAMP)',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            }
        ]
    },
    'mta': {
        title: 'Planos Revenda MTA',
        subtitle: 'Revenda servidores MTA com painel TCAdmin',
        plans: [
            {
                icon: 'fas fa-cube',
                name: 'Revenda MTA 1k',
                price: '19,90',
                id: 'revenda-mta-1k',
                features: [
                    '1.000 Slots',
                    'MTA',
                    'Anti-DDoS',
                    'Fast Download',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda MTA 2k',
                price: '30,00',
                id: 'revenda-mta-2k',
                features: [
                    '2.000 Slots',
                    'MTA',
                    'Anti-DDoS',
                    'Fast Download',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda MTA 3k',
                price: '37,00',
                id: 'revenda-mta-3k',
                features: [
                    '3.000 Slots',
                    'MTA',
                    'Anti-DDoS',
                    'Fast Download',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda MTA 5k',
                price: '65,00',
                id: 'revenda-mta-5k',
                features: [
                    '5.000 Slots',
                    'MTA',
                    'Anti-DDoS',
                    'Fast Download',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            }
        ]
    },
    'samp': {
        title: 'Planos Revenda SAMP',
        subtitle: 'Revenda servidores SAMP com painel TCAdmin',
        plans: [
            {
                icon: 'fas fa-cube',
                name: 'Revenda SAMP 1k',
                price: '19,90',
                id: 'revenda-samp-1k',
                features: [
                    '1.000 Slots',
                    'SAMP',
                    'Anti-DDoS',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda SAMP 2k',
                price: '30,00',
                id: 'revenda-samp-2k',
                features: [
                    '2.000 Slots',
                    'SAMP',
                    'Anti-DDoS',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda SAMP 3k',
                price: '37,00',
                id: 'revenda-samp-3k',
                features: [
                    '3.000 Slots',
                    'SAMP',
                    'Anti-DDoS',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Revenda SAMP 5k',
                price: '65,00',
                id: 'revenda-samp-5k',
                features: [
                    '5.000 Slots',
                    'SAMP',
                    'Anti-DDoS',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            }
        ]
    },
    'openmp': {
        title: 'Planos Revenda Open.MP',
        subtitle: 'Revenda servidores Open.MP com painel TCAdmin',
        plans: [
            {
                icon: 'fas fa-cube',
                name: 'Rev OpenMP 1k',
                price: '19,90',
                id: 'revenda-openmp-1k',
                features: [
                    '1.000 Slots',
                    'OpenMP',
                    'Anti-DDoS',
                    'Última versão',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Rev OpenMP 2k',
                price: '30,00',
                id: 'revenda-openmp-2k',
                features: [
                    '2.000 Slots',
                    'OpenMP',
                    'Anti-DDoS',
                    'Última versão',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Rev OpenMP 3k',
                price: '37,00',
                id: 'revenda-openmp-3k',
                features: [
                    '3.000 Slots',
                    'OpenMP',
                    'Anti-DDoS',
                    'Última versão',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            },
            {
                icon: 'fas fa-cube',
                name: 'Rev OpenMP 5k',
                price: '65,00',
                id: 'revenda-openmp-5k',
                features: [
                    '5.000 Slots',
                    'OpenMP',
                    'Anti-DDoS',
                    'Última versão',
                    'Plugins .so',
                    'MySQL Incluso',
                    'Ping BR',
                    'TCAdmin 2.0'
                ]
            }
        ]
    }
};

// Load reseller plans based on category
function loadResellerPlans(category = 'mta-samp') {
    const planData = resellerPlans[category];
    const whyChooseData = resellerWhyChoose[category];
    if (!planData) return;

    // Update title and subtitle
    const titleElement = document.getElementById('plans-title');
    const subtitleElement = document.getElementById('plans-subtitle');
    const containerElement = document.getElementById('plans-container');

    if (titleElement) titleElement.textContent = planData.title;
    if (subtitleElement) subtitleElement.textContent = planData.subtitle;

    // Load plans
    if (containerElement) {
        containerElement.innerHTML = '';
        
        planData.plans.forEach(plan => {
            const planCard = document.createElement('div');
            planCard.className = 'plan-card';
            
            const featuresHTML = plan.features.map(feature => 
                `<li><i class="fas fa-check"></i> ${feature}</li>`
            ).join('');

            planCard.innerHTML = `
                <div class="plan-card__icon">
                    <i class="${plan.icon}"></i>
                </div>
                <h3 class="plan-card__name">${plan.name}</h3>
                <div class="plan-card__price">
                    <span class="price">R$${plan.price}</span>
                    <span class="period">/mês</span>
                </div>
                <ul class="plan-card__features">
                    ${featuresHTML}
                </ul>
                <button class="btn btn--primary btn--full" onclick="addToCart('${plan.id}', ${plan.price.replace(',', '.')})">
                    Contratar Agora
                </button>
            `;
            
            containerElement.appendChild(planCard);
        });
    }

    // Load why choose content
    const whyChooseContainer = document.getElementById('why-choose-content');
    const whyChooseTitle = document.getElementById('why-choose-title');
    
    if (whyChooseTitle) {
        const categoryNames = {
            'mta-samp': 'MTA/SAMP',
            'mta': 'MTA',
            'samp': 'SAMP', 
            'minecraft': 'Minecraft',
            'openmp': 'Open.MP'
        };
        whyChooseTitle.textContent = `Por que escolher nossa revenda ${categoryNames[category]}?`;
    }

    if (whyChooseContainer && whyChooseData) {
        whyChooseContainer.innerHTML = '';
        
        whyChooseData.forEach(item => {
            const whyChooseItem = document.createElement('div');
            whyChooseItem.className = 'why-choose__item';
            
            whyChooseItem.innerHTML = `
                <div class="why-choose__icon">
                    <i class="${item.icon}"></i>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            
            whyChooseContainer.appendChild(whyChooseItem);
        });
    }
}

// Get category from URL parameter
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || 'mta-samp';
}

// Plan configurations
const planConfigs = {
    // MTA Plans
    'mta-basic': 'MTA Basic - 50 Slots',
    'mta-standard': 'MTA Standard - 100 Slots',
    'mta-professional': 'MTA Professional - 200 Slots',
    'mta-business': 'MTA Business - 500 Slots',
    
    // SAMP Plans
    'samp-basic': 'SAMP Basic - 50 Slots',
    'samp-standard': 'SAMP Standard - 100 Slots',
    'samp-professional': 'SAMP Professional - 200 Slots',
    'samp-business': 'SAMP Business - 500 Slots',
    
    // Minecraft Plans
    'minecraft-basic': 'Minecraft Basic - 20 Slots',
    'minecraft-standard': 'Minecraft Standard - 50 Slots',
    'minecraft-professional': 'Minecraft Professional - 100 Slots',
    'minecraft-business': 'Minecraft Business - 200 Slots',
    
    // OpenMP Plans
    'openmp-basic': 'Open.MP Basic - 50 Slots',
    'openmp-standard': 'Open.MP Standard - 100 Slots',
    'openmp-professional': 'Open.MP Professional - 200 Slots',
    'openmp-business': 'Open.MP Business - 500 Slots',
    
    // Reseller Plans - MTA/SAMP
    'revenda-mta-samp-1k': 'Revenda 1k',
    'revenda-mta-samp-3k': 'Revenda 3k',
    'revenda-mta-samp-4k': 'Revenda 4k',
    'revenda-mta-samp-5k': 'Revenda 5k',
    
    // Reseller Plans - MTA
    'revenda-mta-1k': 'Revenda MTA 1k',
    'revenda-mta-2k': 'Revenda MTA 2k',
    'revenda-mta-3k': 'Revenda MTA 3k',
    'revenda-mta-5k': 'Revenda MTA 5k',
    
    // Reseller Plans - SAMP
    'revenda-samp-1k': 'Revenda SAMP 1k',
    'revenda-samp-2k': 'Revenda SAMP 2k',
    'revenda-samp-3k': 'Revenda SAMP 3k',
    'revenda-samp-5k': 'Revenda SAMP 5k',
    
    // Reseller Plans - OpenMP
    'revenda-openmp-1k': 'Rev OpenMP 1k',
    'revenda-openmp-2k': 'Rev OpenMP 2k',
    'revenda-openmp-3k': 'Rev OpenMP 3k',
    'revenda-openmp-5k': 'Rev OpenMP 5k'
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initTheme();
    
    initMobileMenu();
    initDropdowns();
    initModals();
    updateCartDisplay();
});

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking on links
    const navLinks = navMenu.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle('nav__menu--active', isMenuOpen);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initTheme();
    
    updateCartDisplay();
    
    // Load reseller plans if on reseller page
    if (window.location.pathname.includes('revendas.html')) {
        const category = getCategoryFromURL();
        loadResellerPlans(category);
    }
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav__menu--active');
        });
    }
    
    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.nav__dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('nav__dropdown--active');
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav__dropdown')) {
            document.querySelectorAll('.nav__dropdown').forEach(dropdown => {
                dropdown.classList.remove('nav__dropdown--active');
            });
        }
    });
});

// Modal functionality
function initModals() {
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
        
        // Focus first input if exists
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('modal--active');
    });
    document.body.style.overflow = '';
}

// Cart functionality
function addToCart(planId, price) {
    const planName = planConfigs[planId];
    
    if (!planName) {
        showNotification('Plano não encontrado!', 'error');
        return;
    }
    
    // Check if item already exists
    const existingItem = cart.find(item => item.planId === planId);
    if (existingItem) {
        showNotification('Este plano já está no seu carrinho!', 'warning');
        return;
    }
    
    const item = {
        id: Date.now(),
        planId: planId,
        name: planName,
        price: price
    };
    
    cart.push(item);
    updateCartDisplay();
    showNotification(`${planName} adicionado ao carrinho!`, 'success');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showNotification('Item removido do carrinho!', 'info');
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartCountDesktop = document.getElementById('cartCountDesktop');
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const count = cart.length;
    if (cartCount) {
        cartCount.textContent = count;
    }
    if (cartCountDesktop) {
        cartCountDesktop.textContent = count;
    }
    if (cartBadge) {
        cartBadge.textContent = count;
        cartBadge.style.display = count > 0 ? 'flex' : 'none';
    }
    
    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-center text-muted">Seu carrinho está vazio</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item__info">
                        <h4>${item.name}</h4>
                        <div class="cart-item__details">
                            <p class="cart-item__price">R$ ${item.price.toFixed(2).replace('.', ',')}/mês</p>
                            <small class="cart-item__id">ID: ${item.planId}</small>
                        </div>
                        <div class="cart-item__features">
                            <small>✓ Painel TCAdmin</small>
                            <small>✓ Suporte 24/7</small>
                            <small>✓ Anti-DDoS</small>
                        </div>
                    </div>
                    <button class="btn btn--sm btn--outline" onclick="removeFromCart(${item.id})" title="Remover item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
    
    // Update cart total
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total.toFixed(2).replace('.', ',');
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'warning');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const message = `Olá! Gostaria de contratar os seguintes planos:\n\n${cart.map(item => `• ${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}/mês`).join('\n')}\n\nTotal: R$ ${total.toFixed(2).replace('.', ',')}/mês`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    showNotification('Redirecionando para WhatsApp...', 'success');
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification__close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                z-index: 3000;
                max-width: 400px;
                animation: slideIn 0.3s ease;
            }
            
            .notification--success { border-left: 4px solid #10b981; }
            .notification--error { border-left: 4px solid #ef4444; }
            .notification--warning { border-left: 4px solid #f59e0b; }
            .notification--info { border-left: 4px solid #3b82f6; }
            
            .notification__content {
                display: flex;
                align-items: center;
                gap: 8px;
                flex: 1;
            }
            
            .notification__close {
                background: none;
                border: none;
                cursor: pointer;
                color: #6b7280;
                padding: 4px;
                border-radius: 4px;
            }
            
            .notification__close:hover {
                background: #f3f4f6;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMenuOpen) {
        closeMobileMenu();
    }
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});
