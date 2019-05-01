import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class SideMenu extends LitElement {
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
        <section id="side-menu">
          <div class="logo"></div>
          <div class="menu">
            <div class="title">Contacts</div>
            <nav>
              <a href="#">Add contact</a>
              <a href="#">Add contact</a>
              <a href="#">Add contact</a>
              <a href="#">Add contact</a>
            </nav>
          </div>
        </section>
    `
  }
}
customElements.define('side-menu', SideMenu);