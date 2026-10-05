window.PortfolioComponents = window.PortfolioComponents || {};

window.PortfolioComponents.ProjectCard = {
  props: {
    project: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  template: `
    <router-link class="project-card" :to="project.type === 'personal' ? '/about-project' : '/projects/' + project.slug">
      <div class="project-media">
        <img :src="project.image" :alt="project.title" loading="lazy" />
        <span class="project-order">{{ String(index + 1).padStart(2, '0') }}</span>
      </div>
      <div class="project-body">
        <span class="project-eyebrow">{{ project.eyebrow }}</span>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-summary">{{ project.summary }}</p>
        <div class="chip-row">
          <span class="chip" v-for="tech in project.stack.slice(0, 4)" :key="tech">{{ tech }}</span>
        </div>
        <div class="project-footer">
          <span>View case study</span>
          <span class="arrow-link" aria-hidden="true">↗</span>
        </div>
      </div>
    </router-link>
  `
};
