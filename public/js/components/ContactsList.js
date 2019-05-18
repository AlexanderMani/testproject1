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
      @import '/css/global.css'; 
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
          grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
          color: #3d4060;
          padding: 20px;
          border-radius: 10px;
          transition: all .4s ease-in-out;
          cursor: pointer;
        }

        .contact:hover {
          -webkit-box-shadow: 10px 10px 5px 0px rgba(100,100,100,0.55);
          -moz-box-shadow: 10px 10px 5px 0px rgba(100,100,100,0.55);
          box-shadow: 10px 10px 5px 0px rgba(100,100,100,0.55);
        }

        .contact .user-img {
          background-image: url('https://randomuser.me/api/portraits/women/79.jpg');
          height: 40px;
          width: 40px;
          background-size: cover;
          background-position: center center;
          border-radius: 10px;

        }
        .contact .fullname {
          color: #3d4060;
          font-size: 1.4rem;
          font-weight: 700;
          text-transform: capitalize;
        }
        .number {
          color: #3d4060;
          font-weight: 500;
        }
        .text {
          display: block;
          text-align: center;
        }

        .sub {
          color: #c9cad5;
          font-weight: 300;
          font-size: .8rem;
          display: block;
          text-align: center;
          margin: 5px;
        }


        .fullname, .user-img, .category, .state, .number {
          font-size: 1.4rem;
          font-weight: 500;
        }

      </style>
      <section class="contacts">
          <h2>Contacts</h2>
          <div class="contact">
            <div class="user-img"></div>
            <div class="fullname">
              <span class="text"> Alexander Máni</span>
              <span class="sub">Full name</span>
            </div>
            <div class="number">
              <span class="text"> 5812345 </span>
              <span class="sub">Phone number</span>
            </div>
            <div class="state">
              <span class="text"> Montana </span>
              <span class="sub">State</span>
            </div>
            <div class="category">
              <span class="text">Family</span>
              <span class="sub">Category</span>
            </div>
          </div>
          <div class="contact">
            <div class="user-img"></div>
            <div class="fullname">
              <span class="text"> Alexander Máni</span>
              <span class="sub">Full name</span>
            </div>
            <div class="number">
              <span class="text"> 5812345 </span>
              <span class="sub">Phone number</span>
            </div>
            <div class="state">
              <span class="text"> Montana </span>
              <span class="sub">State</span>
            </div>
            <div class="category">
              <span class="text">Family</span>
              <span class="sub">Category</span>
            </div>
          </div>
        </section>
    `
  }
}

customElements.define('contacts-list', ContactsList);