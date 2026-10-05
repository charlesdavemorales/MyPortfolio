window.PortfolioComponents = window.PortfolioComponents || {};

window.PortfolioComponents.AppFooter = {
  template: `
    <footer class="site-footer">
      <div class="container footer-row">
        <span>© {{ year }} Charles Dave Morales</span>
        <span>Designed as a Vue portfolio architecture · Software + hardware projects</span>
      </div>
    </footer>
  `,
  computed: { year() { return new Date().getFullYear(); } }
};
