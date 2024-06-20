import Utils from '../utils.js';

class NoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _column = 3;
  _gutter = 16;

  static get observedAttributes() {
    return ['column', 'gutter'];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  set column(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this.column = value;
  }

  get column() {
    return this._column;
  }

  get gutter() {
    return this._gutter;
  }

  _updateStyle() {
    this._style.textContent = `
      :host{
        display: block;
      }

      .list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: ${this.gutter}px;
        color: #092639;
        margin: 15px 0px 20px 0px;   
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class='list'>
        <slot></slot>
      </div>
    `;
  }

  attributeChangedCallBack(name, oldValue, newValue) {
    switch (name) {
      case 'column':
        this._column = newValue;
        break;
      case 'gutter':
        this._gutter = newValue;
        break;
    }

    this.render();
  }
}

customElements.define('note-list', NoteList);
