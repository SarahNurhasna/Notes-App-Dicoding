import Utils from '../utils.js';

class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  connectedCallback() {
    this._shadowRoot
      .getElementById('deleteButton')
      .addEventListener('click', this.#onDeleteButton.bind(this));
    this._shadowRoot
      .getElementById('moveButton')
      .addEventListener('click', this.#onMoveButton.bind(this));
  }

  disconnectedCallback() {
    this._shadowRoot
      .getElementById('deleteButton')
      .removeEventListener('click', this.#onDeleteButton.bind(this));
    this._shadowRoot
      .getElementById('moveButton')
      .removeEventListener('click', this.#onMoveButton.bind(this));
  }

  #onDeleteButton() {
    const confirmed = confirm('Delete this note?');

    if (confirmed) {
      this.dispatchEvent(
        new CustomEvent('deleteNote', {
          detail: { noteId: this._note.id },
          bubbles: true,
        }),
      );
    }
  }

  #onMoveButton() {
    const confirmed = confirm('Do you want to move your note?');

    if (confirmed) {
      this.dispatchEvent(
        new CustomEvent('moveNote', {
          detail: this._note,
          bubbles: true,
        }),
      );
    }
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: flex;
        flex-direction: row;
        overflow: hidden;
      }

      .card {
        display: flex;
        flex-direction: column;
        background-color: #dce8ff;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #092639;
        overflow: hidden;
        width: 100%
      }

      .note-content {
        flex-grow: 1;
      }

      .note-content__title {
        font-size: clamp(16px, 3vw, 20px);
        padding-bottom: 10px;
        border-bottom: 1px solid #092639;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: auto;
        white-space: nowrap;
      }

      .note-content__body {
        font-size: clamp(14px, 3vw, 16px);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .note-content__date {
        font-size: 0.75em;
        opacity: 75%;
      }

      .note-button {
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: space-between;
      }

      .note-button > button {
        display: block;
        font-weight: bold;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #092639;
        margin-top: 16px;
        padding: 5px;
        text-align: center;
        cursor: pointer;
      }

      .note-button__delete-button {
        background-color: #ff6969;
        color: white;
      }
      
      .note-button__delete-button:hover {
        background-color: #ff2929;
      }

      .note-button__move-button {
        background-color: #FAE37F;
        color: #092639;
      }
      
      .note-button__move-button:hover {
        background-color: #FFCF00;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="card">
        <div class="note-content">
          <h3 class="note-content__title">${this._note.title}</h3>
          <p class="note-content__date">${Utils.showFormattedDate(this._note.createdAt)}</p>
          <p class="note-content__body">${this._note.body}</p>
        </div>
        <div class="note-button">
          <button id="deleteButton" class="note-button__delete-button">Delete</button>
          <button id="moveButton" class="note-button__move-button">Move</button>
        </div>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);
