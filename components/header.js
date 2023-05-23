const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      position: relative;
    }

    img {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translate(0%, -50%);
    }

    nav {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #F9F9F9;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-size: 18px;
      font-weight: 700;
      margin: 0 25px;
      color: #414040;
      text-decoration: none;
      transition: color 200ms linear;
    }

    a:hover {
      color: #4ebdd9;
    }
  </style>

  <header>
    <img src="./images/logo.png" alt="logo" width="98" height="69" />

    <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about.html">Sobre</a></li>
        <li><a href="./contact.html">Pré-inscrição</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
