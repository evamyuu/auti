const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      position: relative;
      padding: 20px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      background: linear-gradient(90deg, rgba(248,123,111,1) 0%, rgba(89,215,233,1) 34%, rgba(251,229,101,1) 95%);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    ul {
      padding: 0;
      margin: 0;
      display: flex;
    }

    ul li {
      color: #414040;
      list-style: none;
      display: inline;
    }

    p {
      color: #414040;
      font-size: 12px;
      font-weight: 400;
      margin: 16px 0 0;
    }

    a {
      margin: 0;
      color: inherit;
      text-decoration: none;
      transition: transform ease 300ms;
      display: flex;
    }

    a:hover {
      transform: translate(0, -3px);
    }

    .separator {
      margin: 0px 20px;
    }

    .page-link {
      font-size: 16px;
      font-weight: 500;
    }

    .social-row {
      position: absolute;
      right: 30px;
      font-size: 20px;
    }

    .social-row li a {
      margin: 0 15px;
    }
  </style>

  <footer>
    <div>
      <ul>
        <li class="page-link"><a href="./index.html">Home</a></li>
        <span class="separator">|</span>
        <li class="page-link"><a href="./about.html">Sobre</a></li>
        <span class="separator">|</span>
        <li class="page-link last-link"><a href="./contact.html">Pré-inscrição</a></li>
      </ul>
      <p>Todos os direitos reservados para a AUTI © 2023</p>
    </div>

    <ul class="social-row">
      <li><a href="https://twitter.com/projetoauti"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.instagram.com/projetoauti"><i class="fab fa-instagram"></i></a></li>
      <li><a href="https://www.facebook.com/projetoAUTI"><i class="fab fa-facebook"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
