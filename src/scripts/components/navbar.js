import logo from "../../assets/images/logo-modive.png";

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar container">
                <a href="#" class="navbar__logo">
                    <img class="navbar__logo__image" src="${logo}" alt="Logo Image">
                </a>
                <ul class="navbar__menu">
                    <li class="navbar__item"><a href="#">Features</a></li>
                    <li class="navbar__item"><a href="#">About</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define("navigation-bar", Navbar);
