import '../styles/style.css';
export declare class PopupModal {
    private message;
    private overlay;
    private modal;
    private closeBtn;
    constructor(message: string);
    open(): void;
    close(): void;
}
