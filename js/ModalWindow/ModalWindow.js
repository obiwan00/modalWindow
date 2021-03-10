export default class ModalWindow {
  constructor(...components) {
    this.components = components
    this.init()
  }

  init() {
    if (document.getElementById('modal-window')) {
      this.components = this.components.map(Component => {
        return new Component()
      })
    } else {
      console.warn('There is no html of modal window')
    }
  }
}
