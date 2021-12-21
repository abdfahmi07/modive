import illustration from "../../assets/images/hero-image.png";

class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <section class="hero container">
            <header class="hero__header">
                <h1 class="hero__header__headline">More features, more productive_..</h1>
                <p class="hero__header__copy">Help you to be more productive through some of the tools that have been provided</p>
            <div class="hero__header__cta">
                <a href="#"><button class="cta__button--hover">Use Now!</button></a>
                <div class="hero__header__cta__payday-desc">
                    <p>Payday</p>
                    <h3><span class="date">30</span> days left</h3>
                </div>
            </div>
            </header>
            <div class="hero__illustration">
                <img class="hero__illustration__image" src="${illustration}" alt="Illustration Image">
            </div>
            </section>
            <hr/>
          `;
  }
}

customElements.define("hero-section", HeroSection);
