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
      <div class="main-page">
        <side-menu></side-menu>
        <content-area> </content-area>
      </div>

    `
  }
}
customElements.define('counter-comp', CounterComp);