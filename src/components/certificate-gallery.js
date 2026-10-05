window.PortfolioComponents = window.PortfolioComponents || {};

window.PortfolioComponents.CertificateGallery = {
  template: `
    <div>
      <div class="cert-grid">
        <button
          v-for="n in maxCertificates"
          :key="n"
          class="cert-card"
          :class="{ loaded: loaded.includes(n) }"
          type="button"
          @click="open(n)"
        >
          <img
            :src="'certificates/' + n + '.jpg'"
            :alt="'Certificate ' + n"
            loading="lazy"
            @load="markLoaded(n)"
            @error="markFinished(n)"
          />
          <span class="cert-caption"><span>Certificate {{ n }}</span><span>Open ↗</span></span>
        </button>
      </div>
      <div class="empty-cert" v-if="finished >= maxCertificates && loaded.length === 0">
        Add certificate images as <span class="mono">certificates/1.jpg</span>, <span class="mono">2.jpg</span>, <span class="mono">3.jpg</span>, and so on. The gallery will display them automatically.
      </div>

      <div class="lightbox" v-if="active" @click.self="active = null">
        <div class="lightbox-inner">
          <button class="lightbox-close" type="button" aria-label="Close certificate" @click="active = null">×</button>
          <img :src="'certificates/' + active + '.jpg'" :alt="'Certificate ' + active + ' preview'" />
        </div>
      </div>
    </div>
  `,
  data() {
    return { maxCertificates: 40, loaded: [], completed: [], active: null };
  },
  computed: {
    finished() { return this.completed.length; }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKey);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  },
  methods: {
    markLoaded(n) {
      if (!this.loaded.includes(n)) this.loaded.push(n);
      this.markFinished(n);
    },
    markFinished(n) {
      if (!this.completed.includes(n)) this.completed.push(n);
    },
    open(n) { if (this.loaded.includes(n)) this.active = n; },
    handleKey(e) { if (e.key === 'Escape') this.active = null; }
  }
};
