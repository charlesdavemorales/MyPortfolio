const { createApp } = Vue;

const App = {
  components: {
    AppHeader: window.PortfolioComponents.AppHeader,
    AppFooter: window.PortfolioComponents.AppFooter
  },
  template: `
    <div>
      <AppHeader />
      <router-view></router-view>
      <AppFooter />
    </div>
  `
};

createApp(App).use(window.PortfolioRouter).mount('#app');
