function createBox() {
    const el = document.createElement('div');
    el.classList.add('modal-box');
    return el;
}

function createOverlay() {
    const el = document.createElement('div');
    el.classList.add('modal-overlay');
    return el;
}

function removeElement(el) {
    if (el.parentElement) {
        el.parentElement.removeChild(el);
    }
}

export class Modal {
    constructor() {
        this.overlay = createOverlay();
        this.box = createBox();
        this.closable = false;
        this.overlay.addEventListener('click', () => {
            if (this.closable) this.hide();
        });
        this._mounted = false;
    }

    _mount() {
        document.body.appendChild(this.overlay);
        document.body.appendChild(this.box);
        this._mounted = true;
    }

    show(content) {
        if (!this._mounted) this._mount();
        this.update(content);
    }

    update(content) {
        this.box.innerHTML = content;
    }

    hide() {
        removeElement(this.box);
        removeElement(this.overlay);
        this.closable = false;
        this._mounted = false;
    }
}
