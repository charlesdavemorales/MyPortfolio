window.PortfolioViews = window.PortfolioViews || {};

window.PortfolioViews.ProjectView = {
  template: `
    <main v-if="project" class="project-page">
      <section class="project-hero">
        <div class="container">
          <router-link class="project-back" to="/">← Back to portfolio</router-link>
          <div class="project-hero-grid">
            <div>
              <span class="kicker">{{ project.eyebrow }}</span>
              <h1>{{ project.title }}</h1>
              <p>{{ project.summary }}</p>
              <div class="chip-row"><span class="chip" v-for="tech in project.stack" :key="tech">{{ tech }}</span></div>
              <div class="detail-meta">
                <div><span>Year</span><b>{{ project.year }}</b></div>
                <div><span>Category</span><b>{{ project.category }}</b></div>
                <div><span>Focus</span><b>{{ project.stack.slice(0,2).join(' + ') }}</b></div>
              </div>
            </div>
            <div class="project-hero-visual"><img :src="project.image" :alt="project.title" /></div>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container detail-grid">
          <article class="detail-card"><span>01 / PROBLEM</span><h2>What the project needed to solve</h2><p>{{ project.challenge }}</p></article>
          <article class="detail-card"><span>02 / APPROACH</span><h2>How I approached it</h2><p>{{ project.solution }}</p></article>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <span class="kicker">System architecture</span>
          <h2 class="section-title">How the project flows from input to output.</h2>
          <div class="architecture" :class="{ 'architecture-five': project.architecture.length === 5 }">
            <article class="arch-step" v-for="(step,index) in project.architecture" :key="step[0]">
              <span class="arch-no">{{ String(index + 1).padStart(2,'0') }}</span>
              <h3>{{ step[0] }}</h3><p>{{ step[1] }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <span class="kicker">Key implementation ideas</span>
          <h2 class="section-title">What matters most in the project.</h2>
          <div class="highlight-grid">
            <article class="highlight-card" v-for="item in project.highlights" :key="item[0]"><h3>{{ item[0] }}</h3><p>{{ item[1] }}</p></article>
          </div>
        </div>
      </section>

      <section class="section compact" v-if="project.formulas?.length">
        <div class="container">
          <span class="kicker">Technical explanation</span>
          <h2 class="section-title">Formulas and calculations used.</h2>
          <p class="section-copy">The calculation notes are documented directly in the case study so the technical idea can be understood without leaving the portfolio.</p>
          <div class="formula-grid">
            <article class="formula-card" v-for="item in project.formulas" :key="item.name"><h3>{{ item.name }}</h3><div class="formula">{{ item.formula }}</div><p>{{ item.note }}</p></article>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <span class="kicker">What I learned</span>
          <h2 class="section-title">Skills practiced through the build.</h2>
          <div class="learning-list"><span class="learning-pill" v-for="item in project.learnings" :key="item">{{ item }}</span></div>
          <div class="next-project">
            <div><small>Next project</small><strong>{{ nextProject.title }}</strong></div>
            <router-link class="btn primary" :to="nextProject.type === 'personal' ? '/about-project' : '/projects/' + nextProject.slug">Continue <span>→</span></router-link>
          </div>
        </div>
      </section>
    </main>

    <main v-else class="project-page"><section class="section"><div class="container"><span class="kicker">404</span><h1 class="section-title">Project not found.</h1><router-link class="btn primary" to="/">Return home</router-link></div></section></main>
  `,
  computed: {
    project() { return window.PortfolioData.projects.find(p => p.slug === this.$route.params.slug); },
    nextProject() {
      const list = window.PortfolioData.projects;
      const index = list.findIndex(p => p.slug === this.$route.params.slug);
      return list[(index + 1 + list.length) % list.length];
    }
  },
  mounted() { window.scrollTo(0,0); },
  watch: { '$route.params.slug'() { window.scrollTo(0,0); } }
};
