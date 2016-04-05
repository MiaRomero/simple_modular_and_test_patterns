const expect = require('chai').expect;
const sayHello = require(__dirname + '/../lib/sayHello');

describe('sayHello', function(){
  it('should take use name parameter if no command line args', function() {
    process.argv[2] = null;
    expect(sayHello.greet('Jane')).to.eql('hello Jane');
  });
  it('should take a command line argument as a parameter', function() {
    process.argv[2] = 'John';
    expect(sayHello.greet()).to.eql('hello John');
  });
});
