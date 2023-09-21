export class Node {
    constructor() {
        this.value = null;
        this.next = null;
        this.previous = null;
    }

    setNext(node) {
        if(node instanceof Node || node === null) {
            this.next = node;
        }
    }

    getNext() {
        return this.next;
    }

    setPrevious(node) {
        if(node instanceof Node || node === null) {
            this.previous = node;
        }
    }

    getPrevious() {
        return this.previous;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}
