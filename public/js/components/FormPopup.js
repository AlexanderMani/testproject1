import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import ContactsList from '/js/components/ContactsList.js';
import FavoritesList from '/js/components/FavoritesList.js';

export default class FormPopup extends LitElement {

  constructor() {
    super();
    this.total = {
      number: 0
    }
    this.formData = {}
  }

  static get properties() {
    return {
      total: Object,
      popupOpen: Boolean,
      formData: Object

    }
  }

  firstUpdated() {
  }

  change(event) {
    let formData = {}
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    formData[name] = value
    this.formData = object.assign({}, formData)
    this.change = this.change.bind(this)

    console.log(this.formData)
  }

  render() {
    return html`
      <style>

        .form-popup {
          background: #2b304c;
          height: 100vh;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          opacity: 1.0;
          transition: all .4s ease-in-out;
        }

        .form-popup.active {
          visibility: visible;
        }

        form {
            background: white;
            width: 400px;
            padding: 20px;
            border-radius: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        h2 {
          font-size: 1.4rem;
          font-weight: 500;
          grid-column: 1/5;
        }

        .form-group {
          padding: 0px;
          position: relative;
        }

        label {
          background: white;
          font-size: .7rem;
          position: absolute;
          top: -5px;
          display: inline-block;

        }

        input[type="text"] {
          padding: 10px;
          display: block;
          width: 100%;
        }

        .first-name {
          grid-column: 1/3;
        }

        .last-name {
          grid-column: 3/5;
        }

        .address-1 {
          grid-column: 1/5;
        }


        .address-2 {
          grid-column: 1/5;
        }

        .city {
          grid-column: 1/3;
        }

        .button {
          justify-self: end;
          grid-column: 4/5;
        }

        .button button {
          padding: 10px 25px;
          cursor: pointer;
          background: rgb(30,87,153);
          border: 1px solid rgba(0, 0, 0, .1);
          color: white;
          border-radius: 5px;
        }

        .closing-btn {
          position: absolute;
          z-index: 3;
          right: 20px;
          top: 0;
          font-size: 2rem;
          color: black;
          padding: 20 px;
        }

        .closing-btn svg{
          width: 24px;
          height: 24px;
          fill: white;
        }


      </style>

      <section class="form-popup ${this.popupOpen ? 'active' : ''}">
        <form>

        <div class="closing-btn" @click="${this.togglePopup}">
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
        </div>

        <h2> Add a new contact </h2>
        <div class="form-group first-name">
          <label for="first_name">First Name </label>
          <input type="text" name="first_name" on-keyup="${this.change}" >
        </div>

          <div class="form-group last-name">
            <label for="first_name">Last Name </label>
            <input type="text" name="last_name">
          </div>

          <div class="form-group address-1">
            <label for="first_name">Address #1 </label>
            <input type="text" name="address_1">
          </div>

          <div class="form-group address-2 ">
            <label for="first_name">Address #2 </label>
            <input type="text" name="address_2">
          </div>

          <div class="form-group city">
            <label for="first_name">City </label>
            <input type="text" name="City">
          </div>

          <div class="form-group state">
            <label for="first_name">State</label>
            <input type="text" name="state">
          </div>

          <div class="form-group zipcode">
            <label for="first_name">Zipcode</label>
            <input type="text" name="zipcode">
          </div>

          <div class="form-group button">

            <button type="submit">Add</button >
          </div>

        </form>
      </section>
    `
  }
}

customElements.define('form-popup', FormPopup);