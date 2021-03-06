import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import ContactsList from '/js/components/ContactsList.js';
import FavoritesList from '/js/components/FavoritesList.js';
import FormPopup from '/js/components/FormPopup.js';

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
      popupOpen: Boolean,
      togglePopup: Function,
      saveContact: Function,
    }
  }

  firstUpdated() {
  }

  render() {
    return html`
      <style>
      @import '/css/global.css';
        #content-area {
          background: #fcdfff;
          padding: 50px 80px;
        }
      </style>
      <section id="content-area">
      <form-popup .popupOpen="${this.popupOpen}" .togglePopup="${this.togglePopup}" .saveContact="${this.saveContact}"></form-popup>
        <favorites-list></favorites-list>
        <contacts-list></contacts-list>
      </section>
    `
  }
}

customElements.define('content-area', ContentArea);