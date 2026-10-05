const { reactive, computed, h } = Vue;

function parseLocation() {
  const raw = (window.location.hash || '#/').slice(1);
  const [pathPart, queryPart = ''] = raw.split('?');
  const path = pathPart.startsWith('/') ? pathPart : '/' + pathPart;
  const query = {};
  new URLSearchParams(queryPart).forEach((value, key) => { query[key] = value; });

  if (path === '/about-project') {
    return { path, params: {}, query, view: window.PortfolioViews.AboutProjectView };
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    return {
      path,
      params: { slug: decodeURIComponent(projectMatch[1]) },
      query,
      view: window.PortfolioViews.ProjectView
    };
  }

  return { path: '/', params: {}, query, view: window.PortfolioViews.HomeView };
}

const route = reactive(parseLocation());

function syncRoute() {
  const next = parseLocation();
  route.path = next.path;
  route.params = next.params;
  route.query = next.query;
  route.view = next.view;
  window.scrollTo({ top: 0, behavior: 'auto' });
}

window.addEventListener('hashchange', syncRoute);
if (!window.location.hash) window.location.hash = '#/';

const RouterLink = {
  props: { to: { type: String, required: true } },
  setup(props, { slots, attrs }) {
    return () => h('a', { ...attrs, href: '#' + props.to }, slots.default ? slots.default() : props.to);
  }
};

const RouterView = {
  setup() {
    const view = computed(() => route.view);
    return () => h(view.value, { key: route.path });
  }
};

window.PortfolioRouter = {
  install(app) {
    app.config.globalProperties.$router = {
      push(to) {
        const target = typeof to === 'string' ? to : '/';
        if (window.location.hash === '#' + target) syncRoute();
        else window.location.hash = '#' + target;
        return Promise.resolve();
      }
    };
    app.config.globalProperties.$route = route;
    app.component('router-link', RouterLink);
    app.component('router-view', RouterView);
  }
};
