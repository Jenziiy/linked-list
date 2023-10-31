class Person{
person = 'hi';

  isEmpty() {
    return this.person == null;
  }
}
console.log( new Person().isEmpty());