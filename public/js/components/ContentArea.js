import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import ContactsList from '/js/components/ContactsList.js';
import FavoritesList from '/js/components/FavoritesList.js';

export default class ContentArea extends LitElement {

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
        #content-area {
          background: #fcdfff;
          padding: 50px 80px;
        }
      </style>
      <section id="content-area">
        <favorites-list></favorites-list>
        <contacts-list></contacts-list>
      </section>
    `
  }
}

customElements.define('content-area', ContentArea);