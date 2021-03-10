export default class ModalWindowBase {
  constructor() {
    this.constants = {
      MODAL_ID: 'modal-window',
      MODAL_ACTIVE_CLASS: 'modal-window--active',
      MODAL_ITEM_CLASS: 'modal-window__item',
      MODAL_ITEM_ACTIVE_CLASS: 'modal-window__item--active',
      MODAL_CLOSE_SELECTORS: ['.modal-window__close-icon', '.modal-window__fader'],
      MODAL_CALLERS: [],
    }
    this.$modal = document.getElementById(this.constants.MODAL_ID)
    this.isModalOpened = false
    this.init()
  }

  init() {
    document.addEventListener('click', event => {
      if (this.shouldModalClose(event)) {
        this.closeModal(event)
      }
    })
    document.addEventListener('click', event => {
      this.constants.MODAL_CALLERS.forEach(caller => {
        const target = event.target.closest(caller.callerSelector)
        if (target) {
          event.preventDefault()
          caller.handlerFunction(target)
        }
      })
    })
  }

  shouldModalClose(event) {
    return this.constants.MODAL_CLOSE_SELECTORS.some(closeSelector => {
      return event.target.closest(closeSelector)
    });
  }

  openModal(currentModalId) {
    // console.log('open')
    this.$modal.classList.add(this.constants.MODAL_ACTIVE_CLASS)
    this.$modal.querySelector(`#${currentModalId}`)
        .classList
        .add(this.constants.MODAL_ITEM_ACTIVE_CLASS)
    this.isModalOpened = true
  }

  closeModal(event) {
    if (this.isModalOpened) {
      // console.log('close')
      this.$modal.classList.remove(this.constants.MODAL_ACTIVE_CLASS)
      const openedModal = this.$modal.querySelector(`.${this.constants.MODAL_ITEM_ACTIVE_CLASS}`)
      if (openedModal) {
        openedModal.classList
            .remove(this.constants.MODAL_ITEM_ACTIVE_CLASS)
      }
      this.isModalOpened = false
    }
  }
}
