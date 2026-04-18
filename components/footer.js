class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-darker pt-20 pb-10 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative">
            <div class="col-span-1 md:col-span-2">
              <a href="/" class="inline-block mb-6">
                <img src="/assets/logo.png" alt="Amaira Logo" class="h-14 md:h-[60px] w-auto object-contain">
              </a>
              <p class="text-silver font-light leading-relaxed max-w-sm">
                Redefining luxury living spaces with premium tiles, bathware, and architectural surfaces. Experience elegance in every detail.
              </p>
            </div>
            
            <div>
              <h4 class="text-white font-medium mb-6 uppercase tracking-wider text-sm">Explore</h4>
              <ul class="space-y-4 text-silver font-light text-sm">
                <li><a href="/products/" class="hover:text-gold transition-colors">Tiles</a></li>
                <li><a href="/products/" class="hover:text-gold transition-colors">Bathware</a></li>
                <li><a href="/products/" class="hover:text-gold transition-colors">Sanitaryware</a></li>
                <li><a href="/about/" class="hover:text-gold transition-colors">Our Story</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul class="space-y-4 text-silver font-light text-sm">
                <li>Etukuru Rd, R Agraharam, Guntur.</li>
                <li>mailme@amairabathware.com</li>
                <li>+91 90262 63636</li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-silver/60 font-light">
            <p>&copy; ${new Date().getFullYear()} Amaira Tiles & Bathware. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="hover:text-gold transition-colors">Instagram</a>
              <a href="#" class="hover:text-gold transition-colors">Pinterest</a>
              <a href="#" class="hover:text-gold transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
