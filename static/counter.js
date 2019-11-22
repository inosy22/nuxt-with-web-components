let globalCounter = 0

class Counter extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.innerHTML = `
        <div>
          <div>
            <div><span>Web Components counter: 「</span>
            <span id="counter"></span>
            <span>」</span>
          </div>
          <div>
            <button id="increment">increment</button>
          </div>
        </div>
        `
    shadowRoot.querySelector('#counter').innerHTML = globalCounter
    shadowRoot.querySelector('#increment').addEventListener('click', () => {
      globalCounter++
      shadowRoot.querySelector('#counter').innerHTML = globalCounter
    })
  }
}
customElements.define('inosy22-counter', Counter)
