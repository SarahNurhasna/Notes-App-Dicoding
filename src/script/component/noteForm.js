class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = 'submit';

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
          :host {
            display: block;
            color: #092639;
          }
          
          section {
            margin-top: 110px;
            border: 1px solid #092639;
            border-radius: 10px;
            background-color: #d0e0ff;
          }

          ::placeholder {
            color: grey;
            font-size: 1em;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          }
          
          .input-section {
            display: flex;
            flex-direction: column;
            padding: 24px;
          }
          
          .input-section > h2 {
            font-size: clamp(18px, 4vw, 24px);
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #092639;
            margin: 0;
          }

          .input-section > form > .input {
            margin: 10px 0;
          }

          inputNote__title {
            padding-top: 10px;
          }
          
          .input-section > form > button {
            display: block;
            width: 100%;
            padding: 8px;
            background-color: #acc8ff;
            color: #092639;
            border-radius: 5px;
            border: 1px solid #092639;
            cursor: pointer;
          }

          .input-section > form > button:hover {
            background-color: #79a4fb;
          }
          
          .input-section > form > button > span,
          label {
            font-weight: bold;
          }
          
          .input-section > form > .input > input, 
          textarea {
            display: block;
            width: 100%;
            padding: 8px;
            margin-top: 8px;
            border-radius: 5px;
            box-sizing: border-box;
            border: 1px solid #092639;
          }
          
          .inputNote__body {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
          }
          
          .inputNote__body > .body-label {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            align-self: center;
          }
          
          .inputNote__body > #notifikasiSisaKarakter {
            grid-row: 1 / 2;
            grid-column: 2 / 3;
            justify-self: end;
            font-size: clamp(10px, 3vw, 12px);
            font-weight: 600;
          }
          
          .inputNote__body > textarea {
            grid-row: 2 / 3;
            grid-column: 1 / 3;
            font-family: "Poppins", sans-serif;
          }

          label[for="inputNoteTitle"], label[for="inputNotebody"] {
            font-size: clamp(12px, 4vw, 16px);
          }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this._shadowRoot
      .querySelector('form')
      .addEventListener('submit', this.#onFormSubmit.bind(this));
  }

  disconnectedCallback() {
    this._shadowRoot
      .querySelector('form')
      .removeEventListener('submit', this.#onFormSubmit.bind(this));
  }

  #onFormSubmit(event) {
    event.preventDefault();

    const inputTitle = this._shadowRoot.querySelector('#inputNoteTitle');
    const inputBody = this._shadowRoot.querySelector('#inputNoteBody');

    if (!inputTitle.value || !inputBody.value) {
      alert('Title and content cannot be empty!');
      return;
    }

    const eventDetail = {
      id: +new Date(),
      title: inputTitle.value,
      body: inputBody.value,
      createdAt: new Date(),
      archived: false,
    };

    this.dispatchEvent(
      new CustomEvent('submit', {
        detail: eventDetail,
        bubbles: true,
      }),
    );
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `   
        <section class="input-section" id="form">
          <h2>Make a new notes!</h2>
          <form id="inputNote">
            <div class="input inputNote__title">
              <label for="inputNoteTitle">Title</label>
              <input id="inputNoteTitle" type="text" name="inputNoteTitle" placeholder="Type your note's title..." required/>
            </div>
            <div class="input inputNote__body">
              <label for="inputNoteBody" class="body-label">Content</label>
              <label id="notifikasiSisaKarakter"> Character left: <span id="sisaKarakter"></span> </label>
              <textarea name="noteBody" id="inputNoteBody" cols="30" rows="5" maxlength="100" placeholder="Type your note's content..." required></textarea>
            </div>
            <button id="NoteSubmit" type="submit"><span>Add Note</span></button>
          </form>
        </section>
    `;

    const inputNoteBody = this._shadowRoot.getElementById('inputNoteBody');
    const sisaKarakter = this._shadowRoot.getElementById('sisaKarakter');
    const notifikasiSisaKarakter = this._shadowRoot.getElementById('notifikasiSisaKarakter');

    sisaKarakter.innerText = inputNoteBody.maxLength;

    inputNoteBody.addEventListener('input', () => {
      const jumlahKarakterDiketik = inputNoteBody.value.length;
      const jumlahKarakterMaksimal = inputNoteBody.maxLength;
      const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;

      sisaKarakter.innerText = sisaKarakterUpdate.toString();

      if (sisaKarakterUpdate <= 5) {
        notifikasiSisaKarakter.style.color = 'red';
      } else {
        notifikasiSisaKarakter.style.color = 'black';
      }
    });
  }
}

customElements.define('note-form', NoteForm);
