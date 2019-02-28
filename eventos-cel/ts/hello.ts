// function hello() {
//   console.log('Hello World');
// }

class People {
  public name;

  hello() {
    console.log('Hello, ' + this.name);
  }

}

let people = new People();

people.name = 'Nanderson';

people.hello();

//hello();
