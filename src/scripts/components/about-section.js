import aboutImage from "../../assets/images/about.png";

class AboutSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section class="about container">
                <header class="about__header">
                    <h2 class="about__header__title">About</h2>
                    <p class="about__header__desc">This website is intended for those of you who want to be more productive in money management and others
                    </p>
                </header>
                <img class="about__image" src="${aboutImage}" alt="About Image"/>
            </section>
        `;
  }
}

customElements.define("about-section", AboutSection);
