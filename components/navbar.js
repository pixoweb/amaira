class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-6 px-6 md:px-12">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" class="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Amaira Logo" class="h-10 md:h-[44px] w-auto object-contain">
          </a>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-10 text-sm tracking-wide font-light">
            <a href="/" class="hover:text-gold transition-colors duration-300">Home</a>
            <a href="/about/" class="hover:text-gold transition-colors duration-300">About</a>
            <a href="/products/" class="hover:text-gold transition-colors duration-300">Products</a>
            <a href="/contact/" class="hover:text-gold transition-colors duration-300">Contact</a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="fixed inset-0 bg-dark z-40 transform translate-x-full transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 text-2xl font-light">
          <button id="close-menu-btn" class="absolute top-6 right-6 text-white text-3xl">&times;</button>
          <a href="/" class="hover:text-gold transition-colors duration-300">Home</a>
          <a href="/about/" class="hover:text-gold transition-colors duration-300">About</a>
          <a href="/products/" class="hover:text-gold transition-colors duration-300">Products</a>
          <a href="/contact/" class="hover:text-gold transition-colors duration-300">Contact</a>
        </div>
      </nav>
    `;

    // Handle Scroll effect
    window.addEventListener('scroll', () => {
      const nav = this.querySelector('#navbar');
      if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled', 'py-4');
        nav.classList.remove('py-6');
      } else {
        nav.classList.remove('nav-scrolled', 'py-4');
        nav.classList.add('py-6');
      }
    });

    // Handle Mobile Menu
    const mobileBtn = this.querySelector('#mobile-menu-btn');
    const closeBtn = this.querySelector('#close-menu-btn');
    const mobileMenu = this.querySelector('#mobile-menu');

    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  }
}

customElements.define('app-navbar', Navbar);
