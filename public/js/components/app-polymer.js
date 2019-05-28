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
    this.saveContact = this.saveContact.bind(this)
    this.allContacts = []
  }

// Kominn á 4,08 mín á working on the logic of the form

  static get properties() {
    return {
      total: Object,
      popupOpen: Boolean,
      allContacts: Array
    }
  }

  firstUpdated() {

  }

  togglePopup() {
    this.popupOpen = !this.popupOpen
    console.log('clicked button')
    console.log(this.popupOpen)
  }

  saveContact(contact, event) {
    event.preventDefault()
    console.log('Saved contact')
    console.log(contact)
    function immutablePush(arr, newEntry) {
      return [ ...arr, newEntry]
    }

    let newArray = immutablePush(this.allContacts, contact)
    this.allContacts = newArray
    console.log('==============')
    console.log(this.allContacts)
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
        <content-area .popupOpen="${this.popupOpen}" .togglePopup="${this.togglePopup}" .saveContact="${this.saveContact}" > </content-area>
      </div>

    `
  }
}
customElements.define('counter-comp', CounterComp);