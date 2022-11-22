import { makeAutoObservable } from "mobx"

interface Modal {
    open: boolean,
    body: JSX.Element | null; 
}

export default class ModalStores{
    modal: Modal = {
        open: false,
        body: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    openModal = (contet: JSX.Element) => {
        this.modal.open = true;
        this.modal.body = contet;
    }

    closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}