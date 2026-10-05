window.PortfolioViews = window.PortfolioViews || {};

window.PortfolioViews.HomeView = {
  components: {
    ProjectCard: window.PortfolioComponents.ProjectCard,
    CertificateGallery: window.PortfolioComponents.CertificateGallery
  },
  template: `
    <main>
      <section class="hero" id="home">
        <div class="container hero-grid">
          <div class="fade-up">
            <span class="kicker">Computer Engineering · Portfolio</span>
            <h1 class="display">Building practical systems across <span class="muted-word">software & hardware.</span></h1>
            <p class="hero-copy">I’m Charles Dave Morales. I build and study web applications, embedded systems, robotics, numerical tools, and IoT projects with a focus on making technical ideas usable and understandable.</p>
            <div class="hero-actions">
              <button class="btn primary" type="button" @click="scrollTo('projects')">View selected work <span>↗</span></button>
              <router-link class="btn ghost" to="/about-project">See my first web project</router-link>
            </div>
            <div class="hero-meta">
              <div class="meta-item"><strong>{{ projects.length }}</strong><span>portfolio projects</span></div>
              <div class="meta-item"><strong>3+</strong><span>academic years represented</span></div>
              <div class="meta-item"><strong>Hybrid</strong><span>software + embedded focus</span></div>
            </div>
          </div>

          <aside class="profile-panel fade-up">
            <div class="profile-photo"><img src="assets/images/charles.jpg" alt="Charles Dave Morales" /></div>
            <div class="profile-card">
              <div class="profile-card-head"><strong>Charles Dave Morales</strong><span class="status-dot" title="Portfolio available"></span></div>
              <div class="profile-list">
                <div class="profile-row"><span>Discipline</span><b>Computer Engineering</b></div>
                <div class="profile-row"><span>Interests</span><b>Web · Embedded · IoT</b></div>
                <div class="profile-row"><span>Approach</span><b>Build · Test · Improve</b></div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section" id="about">
        <div class="container about-layout">
          <aside class="about-index fade-up">
            <span class="index-number">01 / ABOUT</span>
            <h3>Engineering through projects.</h3>
            <p>I learn best when a concept becomes something I can run, measure, wire, debug, or improve.</p>
          </aside>
          <div class="about-content fade-up">
            <span class="kicker">Profile</span>
            <p>My portfolio started with basic HTML and C programming, then grew into projects involving databases, numerical analysis, digital logic, robotics, microcontrollers, and connected systems. The common idea is simple: understand the problem, design the flow, build the system, and improve it through testing.</p>
            <div class="about-grid">
              <article class="principle"><span class="no">01</span><h4>Systems thinking</h4><p>I look at inputs, processing, outputs, users, and failure points as one connected flow.</p></article>
              <article class="principle"><span class="no">02</span><h4>Hands-on learning</h4><p>I understand technical concepts better when I can turn them into a working interface, program, or circuit.</p></article>
              <article class="principle"><span class="no">03</span><h4>Iteration</h4><p>Older work is not something to hide. Rebuilding it shows what changed in my design and engineering decisions.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="container">
          <div class="section-head fade-up">
            <div><span class="kicker">Selected work</span><h2 class="section-title">Projects presented as engineering case studies.</h2></div>
            <p class="section-copy">The project ideas stay faithful to the original coursework. The presentation is rebuilt around problem, approach, architecture, technologies, and what each project taught me.</p>
          </div>

          <div class="filter-bar fade-up" aria-label="Project filters">
            <button v-for="filter in filters" :key="filter" class="filter-btn" :class="{ active: activeFilter === filter }" @click="activeFilter = filter">{{ filter }}</button>
          </div>

          <div class="projects-grid">
            <ProjectCard v-for="(project, index) in filteredProjects" :key="project.slug" :project="project" :index="index" class="fade-up" />
          </div>

          <div class="featured-strip fade-up" v-if="featuredProject">
            <div>
              <span class="kicker">Featured integration project</span>
              <h3>{{ featuredProject.title }}</h3>
              <p>{{ featuredProject.summary }}</p>
              <div class="chip-row" style="margin:20px 0 22px"><span class="chip" v-for="tech in featuredProject.stack" :key="tech">{{ tech }}</span></div>
              <router-link class="btn primary" :to="'/projects/' + featuredProject.slug">Open case study <span>↗</span></router-link>
            </div>
            <div class="featured-image"><img :src="featuredProject.image" :alt="featuredProject.title" /></div>
          </div>
        </div>
      </section>

      <section class="section" id="skills">
        <div class="container skills-shell">
          <div class="skills-copy fade-up">
            <span class="kicker">Capabilities</span>
            <h2 class="section-title">Tools I use to turn ideas into working systems.</h2>
            <p>These are areas I have practiced through academic projects and hands-on implementation. I present them by function instead of using a decorative skill-percentage chart.</p>
          </div>
          <div class="skill-groups fade-up">
            <div class="skill-group"><h3>Programming</h3><div class="chip-row"><span class="chip" v-for="x in ['Python','C/C++','Java','JavaScript','PHP','MATLAB']" :key="x">{{ x }}</span></div></div>
            <div class="skill-group"><h3>Web & data</h3><div class="chip-row"><span class="chip" v-for="x in ['HTML/CSS','Vue','MySQL','Responsive UI','Forms','Data handling']" :key="x">{{ x }}</span></div></div>
            <div class="skill-group"><h3>Embedded & IoT</h3><div class="chip-row"><span class="chip" v-for="x in ['Arduino','ESP32','Sensors','Motor control','Digital logic','RFID']" :key="x">{{ x }}</span></div></div>
            <div class="skill-group"><h3>Engineering practice</h3><div class="chip-row"><span class="chip" v-for="x in ['Debugging','System flow','Testing','Documentation','Algorithms','Hardware/software integration']" :key="x">{{ x }}</span></div></div>
          </div>
        </div>
      </section>

      <section class="section" id="certificates">
        <div class="container">
          <div class="cert-panel fade-up">
            <div class="cert-top">
              <div><span class="kicker">Certificates</span><h2 class="section-title" style="font-size:clamp(2rem,4vw,3.3rem)">Training and achievements.</h2></div>
              <p>Place certificate photos inside the <span class="mono">certificates</span> folder and name them <span class="mono">1.jpg</span>, <span class="mono">2.jpg</span>, <span class="mono">3.jpg</span>, and so on.</p>
            </div>
            <CertificateGallery />
          </div>
        </div>
      </section>

      <section class="section" id="contact">
        <div class="container">
          <div class="contact-shell fade-up">
            <div class="contact-copy">
              <span class="kicker">Contact</span>
              <h2>Let’s build something useful.</h2>
              <p>For project discussions, opportunities, collaboration, or technical conversations, you can reach me directly through email or social media.</p>
              <div class="contact-links">
                <a class="contact-link" :href="'mailto:' + site.email"><span>Email</span><span>{{ site.email }}</span></a>
                <a class="contact-link" :href="site.facebook" target="_blank" rel="noopener"><span>Facebook</span><span>Open ↗</span></a>
                <a class="contact-link" :href="site.instagram" target="_blank" rel="noopener"><span>Instagram</span><span>Open ↗</span></a>
              </div>
            </div>
            <form class="contact-form" @submit.prevent="prepareEmail">
              <input class="field" v-model="form.name" required placeholder="Your name" />
              <input class="field" v-model="form.email" required type="email" placeholder="Your email" />
              <textarea class="field" v-model="form.message" required placeholder="Tell me about your message or project"></textarea>
              <button class="btn primary" type="submit">Prepare email <span>↗</span></button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `,
  data() {
    return {
      projects: window.PortfolioData.projects,
      site: window.PortfolioData.site,
      activeFilter: 'All',
      filters: ['All', 'First Year', 'Second Year', 'Third Year', 'Special Project'],
      form: { name: '', email: '', message: '' },
      observer: null
    };
  },
  computed: {
    filteredProjects() {
      return this.activeFilter === 'All' ? this.projects : this.projects.filter(p => p.year === this.activeFilter);
    },
    featuredProject() {
      return this.projects.find(p => p.slug === 'rfid-attendance-management');
    }
  },
  mounted() {
    this.installRevealObserver();
    this.handleHashSection();
  },
  updated() { this.$nextTick(this.installRevealObserver); },
  beforeUnmount() { this.observer?.disconnect(); },
  methods: {
    scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); },
    handleHashSection() {
      const section = this.$route.query.section;
      if (section) setTimeout(() => this.scrollTo(section), 80);
    },
    installRevealObserver() {
      this.observer?.disconnect();
      const nodes = document.querySelectorAll('.fade-up:not(.visible)');
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: .08 });
      nodes.forEach(node => this.observer.observe(node));
    },
    prepareEmail() {
      const subject = encodeURIComponent('Portfolio inquiry from ' + this.form.name);
      const body = encodeURIComponent(`Name: ${this.form.name}\nEmail: ${this.form.email}\n\n${this.form.message}`);
      window.location.href = `mailto:${this.site.email}?subject=${subject}&body=${body}`;
    }
  }
};
