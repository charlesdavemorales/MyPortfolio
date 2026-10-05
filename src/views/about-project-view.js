window.PortfolioViews = window.PortfolioViews || {};

window.PortfolioViews.AboutProjectView = {
  template: `
    <main>
      <section class="personal-hero">
        <div class="container">
          <router-link class="project-back" to="/">← Back to portfolio</router-link>
          <div class="personal-grid">
            <div>
              <span class="kicker">First Year Project · Rebuilt</span>
              <h1>My first website, reimagined with the skills I have now.</h1>
              <p>The original activity was simple: make a website about myself. I kept that same thought, but rebuilt the experience so it feels intentional, readable, responsive, and much closer to the kind of interface I would be comfortable showing today.</p>
              <div class="personal-note">This page is not pretending the old project was advanced. Its value is showing the starting point and how much the presentation can improve.</div>
              <div class="personal-facts">
                <div class="personal-fact"><span>Project type</span><b>Personal website</b></div>
                <div class="personal-fact"><span>Original stage</span><b>First year</b></div>
                <div class="personal-fact"><span>Current goal</span><b>Show growth</b></div>
              </div>
            </div>
            <div class="personal-portrait"><img src="assets/images/charles.jpg" alt="Charles Dave Morales portrait" /></div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <div><span class="kicker">Personal profile</span><h2 class="section-title">The person behind the projects.</h2></div>
            <p class="section-copy">This keeps the personal purpose of the original website without filling the page with random decorations, oversized icons, or disconnected content.</p>
          </div>
          <div class="detail-grid">
            <article class="detail-card"><span>01 / INTEREST</span><h2>Why Computer Engineering</h2><p>I was interested in computers and in understanding how technology works beyond the screen. As my subjects became more technical, I started appreciating projects that combine programming with hardware, digital logic, networking, and embedded systems.</p></article>
            <article class="detail-card"><span>02 / WORK STYLE</span><h2>How I learn best</h2><p>I prefer seeing a concept become something real: a program that runs, a circuit that responds, a sensor that produces useful data, or an interface that makes a technical process easier to understand.</p></article>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <span class="kicker">Growth</span>
          <h2 class="section-title">Same idea. Better design decisions.</h2>
          <div class="growth-grid">
            <article class="growth-card"><h3>Then</h3><p>The original project focused on learning basic HTML elements and simply getting text, photos, audio, video, and links onto a page. The visual hierarchy and structure were secondary.</p></article>
            <article class="growth-card"><h3>Now</h3><p>The remake uses clearer hierarchy, responsive layouts, consistent spacing, reusable styles, accessible navigation, and content sections that explain why each piece of information is on the page.</p></article>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <div class="section-head">
            <div><span class="kicker">Memories</span><h2 class="section-title">A small gallery from the original activity.</h2></div>
            <p class="section-copy">The photos stay because they were part of the first project’s personality, but they are now treated as an editorial gallery instead of scattered decoration.</p>
          </div>
          <div class="memory-grid">
            <figure><img src="assets/pictures/fam.jpg" alt="Family memory" /></figure>
            <figure><img src="assets/pictures/kabarkada.jpg" alt="Friends memory" /></figure>
            <figure><img src="assets/pictures/chill.jpg" alt="Student life memory" /></figure>
            <figure><img src="assets/pictures/canteen.jpg" alt="Campus memory" /></figure>
            <figure><img src="assets/pictures/gus.jpg" alt="Personal memory" /></figure>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <div class="section-head"><div><span class="kicker">Original media</span><h2 class="section-title">Audio and video, kept with better presentation.</h2></div><p class="section-copy">These elements were already part of the first-year concept. The remake keeps them but gives them a clear place in the page.</p></div>
          <div class="media-grid">
            <article class="media-card"><audio controls preload="metadata"><source src="assets/media/binhi.mp3" type="audio/mpeg"></audio><h3>Audio from the original project</h3><p>Preserved as part of the project’s original personal-content idea.</p></article>
            <article class="media-card"><video controls preload="metadata"><source src="assets/media/aguy.mp4" type="video/mp4"></video><h3>Video from the original project</h3><p>Presented inside a contained media card instead of interrupting the page flow.</p></article>
          </div>
        </div>
      </section>

      <section class="section compact">
        <div class="container">
          <span class="kicker">Reflection</span>
          <h2 class="section-title">Why I still keep this project in my portfolio.</h2>
          <p class="section-copy" style="font-size:1.1rem;max-width:800px">Because it shows a real starting point. A portfolio does not have to pretend every early project was polished. Rebuilding this one demonstrates a more useful skill: recognizing weak design, reorganizing the information, and improving the experience without changing the project’s original purpose.</p>
          <div class="next-project"><div><small>Continue exploring</small><strong>Autonomous Sumobot</strong></div><router-link class="btn primary" to="/projects/autonomous-sumobot">Next project <span>→</span></router-link></div>
        </div>
      </section>
    </main>
  `,
  mounted() { window.scrollTo(0,0); }
};
