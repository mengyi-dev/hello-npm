import '../styles/style.css';

export class PopupModal {
  private overlay: HTMLElement;
  private modal: HTMLElement;
  private closeBtn: HTMLElement;

  constructor(private message: string) {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('popup-overlay');

    this.modal = document.createElement('div');
    this.modal.classList.add('popup-modal');
    this.modal.innerHTML = `
      <div class="popup-content">
        <span class="popup-close">&times;</span>
        <p>${message}</p>
      </div>
    `;

    this.closeBtn = this.modal.querySelector('.popup-close')!;
    this.closeBtn.addEventListener('click', () => this.close());

    this.overlay.appendChild(this.modal);
    document.body.appendChild(this.overlay);
  }

  open(): void {
    this.overlay.style.display = 'block';
  }

  close(): void {
    this.overlay.style.display = 'none';
  }
}
