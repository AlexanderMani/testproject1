import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import SideMenu from '/js/components/SideMenu.js'
import ContentArea from '/js/components/ContentArea.js'
import ContactsList from '/js/components/ContactsList.js'

class CounterComp extends LitElement {
  constructor() {
    super();
    this.total = {
      number: 0
    }
    this.popupOpen = false
    this.togglePopup = this.togglePopup.bind(this)
  }

// Kominn á 4,08 mín á working on the logic of the form

  static get properties() {
    return {
      total: Object,
      popupOpen: Boolean
    }
  }

  firstUpdated() {

  }

  togglePopup() {
    this.popupOpen = !this.popupOpen
    console.log('clicked button')
    console.log(this.popupOpen)
  }



  render() {
    return html`
      <style>
      @import '/css/global.css';
        .main-page {
          display: grid;
          grid-template-columns: 250px 1fr;
        }
      </style>
      <div class="main-page">
        <side-menu .togglePopup="${this.togglePopup}"></side-menu>
        <content-area .popupOpen="${this.popupOpen}" .togglePopup="${this.togglePopup}"> </content-area>
      </div>

    `
  }
}
customElements.define('counter-comp', CounterComp);