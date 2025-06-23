const Hero = () => {
  <section className="hero relative h-screen flex items-center justify-center w-full overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
    <div className="text-center z-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
        Hi, I'm <span class="text-[var(--color-darkSecondary)]">Vish Gupta</span>
      </h1>
      <p className="text-xl sm:text-2xl text-white/80 mb-8 animate-slide-up max-w-3xl mx-auto">
        A passionate developer crafting innovative, user-focused web solutions.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="btn-primary px-8 py-3 text-lg animate-pulse hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>
        <a
          href="/projects"
          className="link px-8 py-3 text-lg font-semibold border border-white/40 rounded-lg hover:bg-white/10 dark:hover:bg-[var(--color-darkBorder)] transition-colors"
        >
          View Projects
        </a>
      </div>
    </div>
  </section>
};

export default Hero;