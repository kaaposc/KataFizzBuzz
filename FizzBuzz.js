var FizzBuzz = function (count) {
	this.count = count;

	this.print = function () {
		var result = [];
		for (var i = 1; i <= this.count; i++) {
			if (i % 3 == 0) {
				result.push('fizz');
			} else if (i % 5 == 0) {
				result.push('buzz');
			} else {
				result.push(i);
			}
		}
		return result;
	}

	return this;
}

describe('FizzBuzz', function() {
	var fizzbuzz = false;
	describe('print()', function() {
		it('should return [1] when count is 1', function() {
			fizzbuzz = new FizzBuzz(1);
			fizzbuzz.print().should.eql([1]);
		});
		it('should return [1, 2, fizz] when count is 3', function() {
			fizzbuzz = new FizzBuzz(3);
			fizzbuzz.print().should.eql([1, 2, 'fizz']);
		});
		it('should return [1, 2, fizz, 4, buzz] when count is 5', function() {
			fizzbuzz = new FizzBuzz(5);
			fizzbuzz.print().should.eql([1, 2, 'fizz', 4, 'buzz']);
		});
		it('should return [1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz] when count is 15', function() {
			var expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
			fizzbuzz = new FizzBuzz(15);
			fizzbuzz.print().should.eql(expected);
		});
	});
});