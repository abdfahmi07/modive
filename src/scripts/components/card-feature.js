import managementFinances from "../../assets/images/management-finance.png";
import splitBill from "../../assets/images/split-bill.png";

class CardFeature extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  set features(feature) {
    this._features = feature;
    this.render();
  }

  render() {
    // console.log(this._features);

    const { title, desc, urlImage } = this._features;

    this.innerHTML = `
            <div class="card">
                <img class="card__image" src="${
                  urlImage === "management-finance.png"
                    ? managementFinances
                    : splitBill
                }"/>
                <h3 class="card__title">${title}</h3>
                <p class="card__desc">${desc}</p>
                <a href="#" class="card__cta"><button class="cta__button--hover">Use Feature <i class="fas fa-chevron-right"></i></button></a>
            </div>
        `;
  }
}

customElements.define("card-feature", CardFeature);
