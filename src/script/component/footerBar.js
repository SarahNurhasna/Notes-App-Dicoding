class FooterBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  static observedAttributes = ['background-color', 'color'];

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._color = this.getAttribute('color') ?? '#092639';
    this._backgroundColor = this.getAttribute('background-color') ?? '#acc8ff';
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
        :host {
          display: block;
          width: 100%;
          color: ${this._color};
          background-color: ${this._backgroundColor};
          border-top: 1px solid #DCDCDC;
        }
  
        div {
          padding: 15px;
          text-align: center;
          background-color: ${this.getAttribute('background-color')};
          font-size: clamp(14px, 3vw, 16px);
      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `   
        <div>
            <p>Dicoding Notes App Project &#169; 2024, Sarah Nurhasna Khairunnisa</p>
        </div>
      `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define('footer-bar', FooterBar);
