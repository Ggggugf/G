class WebWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .widget {
          background: #6c63ff;
          color: white;
          padding: 10px;
          border-radius: 8px;
          text-align: center;
          font-size: 2em;
          width: 100px;
        }
      </style>
      <div class="widget">
        <p>2:36</p>
      </div>
    `;
  }

  connectedCallback() {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.shadowRoot.querySelector('p').textContent = `${hours}:${minutes}`;
  }
}

customElements.define('web-widget', WebWidget);