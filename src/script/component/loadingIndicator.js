class Loading extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.innerHTML += ` 
        <style>
            .loading {
                padding-top: 10px;
                color: #a0a0a0;
            }
        </style>  
        <div class="loading">Waiting for you to add note...</div>
    `;
  }
}

customElements.define('loading-indicator', Loading);
