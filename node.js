"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    getNext() {
        return this.next;
    }
    getData() {
        return this.data;
    }
    setNext(next) {
        this.next = next;
    }
    setData(data) {
        this.data = data;
    }
}
exports.default = Node;
