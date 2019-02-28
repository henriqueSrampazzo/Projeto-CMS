// function hello() {
//   console.log('Hello World');
// }
var People = (function () {
    function People() {
    }
    People.prototype.hello = function () {
        console.log('Hello, ' + this.name);
    };
    return People;
}());
var people = new People();
people.name = 'Nanderson';
people.hello();
//hello();
