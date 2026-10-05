window.PortfolioComponents = window.PortfolioComponents || {};

window.PortfolioComponents.AppHeader = {
  template: `
    <header class="site-header">
      <div class="header-shell">
        <a class="brand" href="#/" @click="closeMenu">
          <span class="brand-mark">CD</span>
          <span>Charles Dave<small>Computer Engineering</small></span>
        </a>

        <nav class="nav-links" :class="{ open: menuOpen }" aria-label="Primary navigation">
          <button type="button" @click="goToSection('about')">About</button>
          <button type="button" @click="goToSection('projects')">Projects</button>
          <button type="button" @click="goToSection('skills')">Skills</button>
          <button type="button" @click="goToSection('certificates')">Certificates</button>
          <button type="button" @click="goToSection('contact')">Contact</button>
        </nav>

        <div class="header-actions">
          <button class="icon-btn" type="button" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
            <span aria-hidden="true">{{ theme === 'dark' ? '☼' : '◐' }}</span>
          </button>
          <a class="btn ghost" href="mailto:charlesdavemorales04@gmail.com">Email</a>
          <button class="icon-btn menu-toggle" type="button" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">☰</button>
        </div>
      </div>
    </header>
  `,
  data() {
    return {
      menuOpen: false,
      theme: localStorage.getItem('portfolio-theme') || 'dark'
    };
  },
  mounted() {
    document.documentElement.dataset.theme = this.theme;
  },
  methods: {
    closeMenu() { this.menuOpen = false; },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = this.theme;
      localStorage.setItem('portfolio-theme', this.theme);
    },
    async goToSection(id) {
      this.menuOpen = false;
      if (this.$route.path !== '/') {
        await this.$router.push('/');
        await this.$nextTick();
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 40);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
