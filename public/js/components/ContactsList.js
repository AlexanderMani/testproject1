  import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class ContactsList extends LitElement {
  constructor() {
    super();
    this.total = {
      number: 0
    }
  }

  static get properties() {
    return {
      total: Object,
    }
  }

  firstUpdated() {
  }

  render() {
    return html`
      <style>
        .contacts {
          max-width: 800px;
        }
        h2 {
          color: #3e4162;
          font-weight: 300;
        }
        .contact {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
        }
        .contact .user-img {
          background-image: url('https://randomuser.me/api/portraits/women/79.jpg');
          height: 80px;
          width: 80px;
          background-size: cover;
          background-position: center center:
        }



      </style>
      <section class="contacts">
          <h2>Contacts</h2>
          <div class="contact">
            <div class="user-img"></div>
            <div class="fullname">
              Alexander Máni
            </div>
            <div class="number">
              5812345
            </div>
            <div class="state">
              Montana
            </div>
            <div class="category">
              Family
            </div>
          </div>
        </section>
    `
  }
}

customElements.define('contacts-list', ContactsList);