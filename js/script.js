function Button(text) {
  this.text = text || 'Hello';
}
Button.prototype = {
  create: function() { // metoda tworząca przycisk
    var self = this;
    this.$element = $('<button>'); //trzyma element przycisk we właściwości
    this.$element.text(this.text); 
    this.$element.click(function() { //alert po kliknięciu w przycisk
      alert(self.text); //funkcja parametrem innej funcji - utrata kontekstu
    });
    $('body').append(this.$element); //lub: this.$element.appendTo($('body'));
  }
}

var btn1 = new Button('Hello! ');

btn1.create();






/* var person = {
  name: "Jan",
  sayHello: function() {
    console.log("Hello "  + this.name + "!");
    }
}
var hello = person.sayHello;

hello();

var person = {
  name: 'Jan',
  sayHello: function() {
    setTimeout(function() {
      console.log('Hello '  + this.name + '!');
        }, 1000);
    }
};
person.sayHello();
*/




