"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class LinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    size() {
        if (this.isEmpty()) {
            return 0;
        }
        else {
            let i = 0;
            let aux = this.head;
            while (aux) {
                i++;
                aux = aux.getNext();
            }
            return i;
        }
    }
    addFirst(data) {
        if (data) {
            if (this.isEmpty()) {
                this.head = new node_1.default(data);
            }
            else {
                const node = new node_1.default(data);
                node.setNext(this.head);
                this.head = node;
            }
        }
    }
    addLast(data) {
        if (data) {
            if (this.isEmpty()) {
                this.head = new node_1.default(data);
            }
            else {
                let aux = this.head;
                while (aux.getNext()) {
                    aux = aux.getNext();
                }
                aux.setNext(new node_1.default(data));
            }
        }
    }
    add(data, i) {
        if (data && i) {
            if (this.isEmpty() || i === 0) {
                this.addFirst(data);
            }
            else if (i === this.size() - 1) {
                this.addLast(data);
            }
            else if (i < 0) {
                this.add(data, this.size() + i);
            }
            else {
                let j = 0;
                let aux = this.head;
                const node = new node_1.default(data);
                while (i < j) {
                    aux = aux.getNext();
                    j++;
                }
                node.setNext(aux.getNext());
                aux.setNext(node);
            }
        }
    }
    deleteFirst() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const temp = this.head;
            this.head = this.head.getNext();
            temp.setNext(null);
            return temp.getData();
        }
    }
    deleteLast() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            let aux = this.head;
            while (aux.getNext().getNext()) {
                aux = aux.getNext();
            }
            const temp = aux.getNext();
            aux.setNext(null);
            return temp.getData();
        }
    }
    delete(i) {
        if (i) {
            if (this.isEmpty() || i === 0) {
                return this.deleteFirst();
            }
            else if (i === this.size() - 1) {
                return this.deleteLast();
            }
            else if (i < 0) {
                return this.delete(this.size() + i);
            }
            else {
                let j = 0;
                let aux = this.head;
                while (i < j) {
                    aux = aux.getNext();
                    j++;
                }
                const temp = aux.getNext();
                aux.setNext(aux.getNext().getNext());
                temp.setNext(null);
                return temp.getData();
            }
        }
    }
    toArray() {
        let node = this.head;
        const array = new Array(this.size());
        for (let i = 0; i < array.length; i++) {
            array[i] = node.getData();
            node = node.getNext();
        }
        return array;
    }
    forEach(cb) {
        const list = this;
        const size = this.size();
        let node = this.head;
        for (let i = 0; i < size; i++) {
            cb(node.getData(), i, list);
            node = node.getNext();
        }
    }
}
exports.default = LinkedList;
const listaenlazada = new LinkedList();
listaenlazada.addFirst("pedro");
listaenlazada.addFirst("juan");
console.log(listaenlazada.size());
console.log(listaenlazada.deleteLast());
console.log(listaenlazada);
console.log(listaenlazada.isEmpty());
