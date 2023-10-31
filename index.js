class LinkedList {
  head = null;

  isEmpty() {
    return this.head == null;
  }

 append(value){
  if (this.isEmpty()){
    this.prepend(value);
  } else {
    this.tmp = this.head; 
    while(this.tmp.next != null) this.tmp = this.tmp.next;
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
    while( this.tmp.next != null) {
     this.tmp = this.tmp.next;
     this.count++; 
    }
    return this.count;
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