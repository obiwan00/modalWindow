import ModalWindowBase from './ModalWindowBase';

export default class ModalContentWindow extends ModalWindowBase {
  constructor() {
    super()
    this.constants = {
      ...this.constants,
      MODAL_CALLERS: [
        {
          callerSelector: '[href^="#"]',
          handlerFunction: this.callModalDueToAnchor.bind(this),
        },
        {
          callerSelector: '[data-modal-id]',
          handlerFunction: this.callModalDueToDataAttr.bind(this),
        }
      ],
    }
  }

  callModalDueToAnchor(target) {
    const id = target.hash.slice(1)
    this.openModal(id)
  }

  callModalDueToDataAttr(target) {
    const id = target.dataset.modalId
    this.openModal(id)
  }
}
