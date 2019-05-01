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