class LinkedList {
  head = null;

  isEmpty() {
    return this.head === null;
  }

 append(value){
  if (this.isEmpty()){
    this.prepend(value);
  } else {
    this.tmp = this.head; 
    while(this.tmp.next !== null) this.tmp = this.tmp.next;
    this.tmp.next = new Node(value, null);
  }
 }

 prepend(value){
  this.head = new Node(value, this.head);
 }

 size(){
  if (this.isEmpty()) return '0 items';
  this.tmp = this.head;
  this.count = 1;
    while( this.tmp.next !== null) {
     this.tmp = this.tmp.next;
     this.count++; 
    }
    return this.count;
 }

 getHead(){
  if (this.isEmpty()){
    return Error('oops, empty list, cant get head')
  } else {
    return this.head.value;
  }
 }

 getTail(){
  if (this.isEmpty()){
    return Error('oops, empty list, cant get tail')
  } else {
    this.tmp = this.head;
    while( this.tmp.next !== null) this.tmp = this.tmp.next;
  }
  return this.tmp.value;
 }

  getAtIndex(index){
    if (this.isEmpty()){
      return 'list is empty';
    } else {
      this.tmp = this.head;
      for (let i = 0; i < index; i++) {
        if (this.tmp.next == null) return Error('no such index exists')
        this.tmp = this.tmp.next;
      }
    return this.tmp.value;
    }
  }

  pop(){
    if (this.isEmpty()) return Error('stop searching in an empty list');
    this.curr = this.head;
    this.prev = null;
    while( this.curr.next !== null){
      this.prev = this.curr;
      this.curr = this.curr.next;
    }
    return this.prev.next = null;
  }

  containsValue(value){
    if (this.isEmpty()) return Error('an empty list is not going to contain any value');
    this.tmp = this.head;
    while(this.tmp !== null){
      if (this.tmp.value === value) return true;
      this.tmp = this.tmp.next;
    }
    return Error('no such element exists');
  }

  find(value){
    if(this.isEmpty()) return Error('list is empty, you wont find a value here');
    this.tmp = this.head;
    this.count = 0;
    while(this.tmp !== null){
      if(this.tmp.value === value) return this.count;
      this.count ++; 
      this.tmp = this.tmp.next; 
    }
    return null;
  }
  stringify(){
    if(this.isEmpty()) return Error('list is empty');
    this.tmp = this.head;
    this.stringified = `( ${this.tmp.value} )`;
    while(this.tmp.next !== null){
      this.tmp = this.tmp.next;
      this.stringified = ` ${this.stringified} -> ( ${this.tmp.value} )`
    }
    return `${this.stringified} -> ( null )`
  }

  insertAt(value, index){
    if(this.isEmpty()) return Error('not possible because the list is empty');
    this.count = 0;
    if(index === 0) return this.prepend(value);
      this.curr = this.head;
      while(this.count !== index){
        this.prev = this.curr; 
        this.curr = this.curr.next;
        this.count ++; 
      }
      if (this.curr !== null){
        this.prev.next = new Node(value, this.curr);
      }
  }
}

class Node {
  value = null;
  next = null;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

let linkedlist = new LinkedList();
linkedlist.append('lala');
linkedlist.append('lama');
linkedlist.append('koekjes');
linkedlist.append('tralala');
console.log(linkedlist.size());
console.log(linkedlist.getHead());
console.log(linkedlist.getTail(), 'old tail before pop');
console.log(linkedlist.getAtIndex(2));
console.log(linkedlist.pop());
console.log(linkedlist.getTail(), 'new tail after pop');
console.log(linkedlist.containsValue('lal'));
console.log(linkedlist.find('koekjes'));
console.log(linkedlist.find('lal'));
console.log(linkedlist.stringify());
console.log(linkedlist.insertAt('haha',2));
console.log(linkedlist.stringify());
