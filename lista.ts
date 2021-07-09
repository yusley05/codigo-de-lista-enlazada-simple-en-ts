import Node from "./node";

export default class LinkedList {
  private head: Node;

  
  constructor() {
    this.head = null;
  }


  public isEmpty(): boolean {
    return this.head === null;
  }

  
  public size(): number {
    if (this.isEmpty()) {
      return 0;
    } else {
      let i = 0;
      let aux = this.head;
      while (aux) {
        i++;
        aux = aux.getNext();
      }
      return i;
    }
  }

 
  public addFirst(data: any): void {
    if (data) {
      if (this.isEmpty()) {
        this.head = new Node(data);
      } else {
        const node = new Node(data);
        node.setNext(this.head);
        this.head = node;
      }
    } 
  }


  public addLast(data: any): void {
    if (data) {
      if (this.isEmpty()) {
        this.head = new Node(data);
      } else {
        let aux = this.head;
        while (aux.getNext()) {
          aux = aux.getNext();
        }
        aux.setNext(new Node(data));
      }
    
    }
  }


  public add(data: any, i: number): void {
    if (data && i) {
      if (this.isEmpty() || i === 0) {
        this.addFirst(data);
      } else if (i === this.size() - 1) {
        this.addLast(data);
      
      } else if (i < 0) {
        this.add(data, this.size() + i);
      } else {
        let j = 0;
        let aux = this.head;
        const node = new Node(data);
        while (i < j) {
          aux = aux.getNext();
          j++;
        }
        node.setNext(aux.getNext());
        aux.setNext(node);
      }
   
    }
  }


  public deleteFirst(): any {
    if (this.isEmpty()) {
      return null;
    } else {
      const temp = this.head;
      this.head = this.head.getNext();
      temp.setNext(null);
      return temp.getData();
    }
  }

 
  public deleteLast(): any {
    if (this.isEmpty()) {
      return null;
    } else {
      let aux = this.head;
      while (aux.getNext().getNext()) {
        aux = aux.getNext();
      }
      const temp = aux.getNext();
      aux.setNext(null);
      return temp.getData();
    }
  }

  
  public delete(i: number): any {
    if (i) {
      if (this.isEmpty() || i === 0) {
        return this.deleteFirst();
      } else if (i === this.size() - 1) {
        return this.deleteLast();
      } else if (i < 0) {
        return this.delete(this.size() + i);
      } else {
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

  public toArray(): any[] {
    let node = this.head;
    const array = new Array(this.size());
    for (let i = 0; i < array.length; i++) {
      array[i] = node.getData();
      node = node.getNext();
    }
    return array;
  }


  public forEach(cb: any): void {
    const list = this;
    const size = this.size();
    let node = this.head;
    for (let i = 0; i < size; i++) {
      cb(node.getData(), i, list);
      node = node.getNext();
    }
  }

}

const listaenlazada = new LinkedList();
listaenlazada.addFirst("pedro");
listaenlazada.addFirst("juan");
console.log(listaenlazada.size());
console.log(listaenlazada.deleteLast());
console.log(listaenlazada);
console.log(listaenlazada.isEmpty());