import ModalWindowBase from './ModalWindowBase';

export default class ModalVideoWindow extends ModalWindowBase {
  constructor() {
    super();
    this.constants = {
      ...this.constants,
      MODAL_VIDEO_ID: 'modal-video',
      MODAL_CALLERS: [
        {
          callerSelector: '[data-video-src]',
          handlerFunction: this.callModalVideoHandler.bind(this),
        },
      ],
      MODAL_CALL_VIDEO_SELECTORS: '',
    }
    this.$modalVideo = document.getElementById(this.constants.MODAL_VIDEO_ID)
  }

  callModalVideoHandler(target) {
    const dataSrc = target.dataset.videoSrc
    this.$modalVideo.querySelector('iframe')
        .setAttribute('src', `${dataSrc}?autoplay=1`)
    this.openModal(this.constants.MODAL_VIDEO_ID)
  }

  closeModal(event) {
    this.$modal.querySelector(`#${this.constants.MODAL_VIDEO_ID}`)
        .querySelector('iframe')
        .setAttribute('src', '')
    super.closeModal(event)
  }
}
