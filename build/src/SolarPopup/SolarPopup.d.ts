import { ModalBackground } from '../ModalBackground/ModalBackground';
import { IComponent } from "vanilla-typescript";
import './SolarPopup.pcss';
/**
 * A Popup that can take any content
 *
 * Features
 * Closes in response to [ESC] keypress, submit events.
 * Adds modal background that fades in with CSS3 transitions
 * Popup itself slides in with CSS3 transitions
 *
 * @constructor
 */
export declare class SolarPopup implements IComponent {
    destroyBoundWithThis: any;
    modalBackground: ModalBackground;
    private hostElement;
    private child;
    constructor(child: HTMLElement);
    /**
     * Shows
     * @param {Element} child we need to keep the reference to keep custom functionality in the child
     */
    show(): void;
    addListeners(): void;
    destroy(): void;
}
