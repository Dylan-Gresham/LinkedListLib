import {Node} from './Node.js'

export class dLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    getSize() {
        return this.size;
    }

    setHead(node) {
        if(node instanceof Node) {
            this.head = node;
        }
    }

    setTail(node) {
        if(node instanceof Node) {
            this.tail = node;
        }
    }

    incrementSize() {
        this.size++;
    }

    decrementSize() {
        this.size--;
    }

    append(value) {
        const newNode = new Node();
        newNode.setValue(value);

        if(this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.incrementSize();
        } else if(this.size > 0) {
            this.tail.setNext(newNode);
            newNode.setPrevious(this.tail);
            this.tail = newNode;
            this.incrementSize();
        }
    }

    prepend(value) {
        const newNode = new Node();
        newNode.setValue(value);
        if(this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.incrementSize();
        } else if(this.size > 0) {
            newNode.setNext(this.head);
            this.head.setPrevious(newNode);
            this.head = newNode;
            this.incrementSize();
        }
    }

    insertAt(value, index) {
        if(index < 0 || index > this.size) {
            return;
        } else if(index === this.size) {
            this.append(value);

            return;
        } else if(index === 0) {
            this.prepend(value);

            return;
        } else {
            let prevNode = this.head;
            let currNode = this.head.getNext();
            for(let i = 0; i < index; i++) {
                prevNode = currNode;
                currNode = currNode.getNext();
            }

            const newNode = new Node();
            newNode.setValue(value);
            prevNode.setNext(newNode);
            newNode.setNext(currNode);
            newNode.setPrevious(prevNode);
            currNode.setPrevious(newNode);
            this.incrementSize();

            return;
        }
    }

    at(index) {
        if(index < 0 || index >= this.size) {
            return null;
        } else {
            let currNode = this.head;

            for(let i = 0; i < index; i++) {
                currNode = currNode.getNext();
            }

            return currNode;
        }
    }

    pop() {
        if(this.size === 0) {
            return null;
        } else if(this.size === 1) {
            const retNode = this.head;

            this.head = null;
            this.tail = null;
            this.decrementSize();

            return retNode;
        } else {
            const nodeBeforeTail = this.tail.getPrevious();
            const retNode = this.tail;
            retNode.setPrevious(null);

            this.tail = nodeBeforeTail;
            this.tail.setNext(null);
            this.decrementSize();

            return retNode;
        }
    }

    removeAt(index) {
        if(index < 0 || index >= this.size) {
            return;
        } else if(index === 0) {
            let oldHead = this.head;
            this.head = this.head.getNext();
            oldHead.setNext(null);
            this.head.setPrevious(null);
            this.decrementSize();

            return;
        } else if(index === this.size - 1) {
            this.pop();

            return;
        } else {
            let prevNode = this.head;
            let currNode = this.head.getNext();
            for(let i = 0; i < index; i++) {
                prevNode = currNode;
                currNode = currNode.getNext();
            }

            prevNode.setNext(currNode.getNext());
            currNode.setNext(null);
            currNode.setPrevious(null);
            prevNode.getNext().setPrevious(prevNode);
            this.decrementSize();

            return;
        }
    }

    contains(value) {
        let currNode = this.head;
        for(let i = 0; i < this.size; i++) {
            if(currNode.getValue() === value) {
                return true;
            } else {
                currNode = currNode.getNext();
            }
        }

        return false;
    }

    find(value) {
        let currNode = this.head;
        for(let i = 0; i < this.size; i++) {
            if(currNode.getValue() === value) {
                return i;
            } else {
                currNode = currNode.getNext();
            }
        }

        return null;
    }

    toString() {
        let retStr = ``;
        let currNode = this.head;
        retStr += `${currNode.getValue()} <-->`
        currNode = currNode.getNext();

        for(let i = 1; i < this.size - 1; i++) {
            retStr += `${currNode.getValue()} <-->`
            currNode = currNode.getNext();
        }
        return (retStr += `${currNode.getValue()}`);
    }
}
