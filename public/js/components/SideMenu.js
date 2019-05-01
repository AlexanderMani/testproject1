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
        #side-menu {

          background: #323759;
          height: 100vh;
          padding: 25px 25px;
        }

        .title {
          font-weight: 700;
          color: #ccced7;
          margin: 1rem 0;
        }

        .logo {
          text-align: center;
        }

        .logo img {
          width: 200px;
        }

        #side-menu nav a {
          color: #ccced7;
          text-decoration: none;
          text-transform: capitalize;
          display: block;
          padding: 10px 10px 10px 0 ;
        }
        #side-menu nav a span.icon {
          padding: 10px 10px 10px 0;
        }

      </style>
        <section id="side-menu">
          <div class="logo">
            <img
              src="https://www.nicepng.com/png/detail/1-11556_gucci-png-photos-transparent-background-gucci-logo.png">
            </div>
          <div class="menu">
            <div class="title">Contacts</div>
            <nav>
              <a href="#"><span class="icon"> + </span>Add contact</a>
              <a href="#"><span class="icon"> + </span>Add contact</a>
              <a href="#"><span class="icon"> + </span>Add contact</a>
              <a href="#"><span class="icon"> + </span>Add contact</a>
            </nav>
          </div>
        </section>
    `
  }
}
customElements.define('side-menu', SideMenu);