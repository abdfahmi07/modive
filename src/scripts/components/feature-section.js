import features from "../data/features.js";
import "../components/card-feature";

class FeatureSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const featureList = document.querySelector(
      "feature-section .feature__wrapper"
    );

    features.forEach((feature) => {
      const cardFeature = document.createElement("card-feature");
      cardFeature.features = feature;
      featureList.appendChild(cardFeature);
    });
  }
}

customElements.define("feature-section", FeatureSection);
