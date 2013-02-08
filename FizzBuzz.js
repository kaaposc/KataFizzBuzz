var FizzBuzz = function (count) {
	this.count = count;

	this.checkFizzBuzz = function (index) {
		var item = '';
		if (index % 3 == 0) {
			item = 'fizz';
		}
		if (index % 5 == 0) {
			item += 'buzz';
		}
		if (item !== '') {
			return item;
		} else {
			return index;
		}
	}

	this.print = function () {
		var result = [];
		for (var i = 1; i <= this.count; i++) {
			result.push(this.checkFizzBuzz(i));
		}
		return result;
	}

	this.printAt = function (index) {
		return this.checkFizzBuzz(index);
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
	describe('printAt()', function() {
		it('should return 1 when asked for 1st element', function() {
			fizzbuzz = new FizzBuzz(1);
			fizzbuzz.printAt(1).should.equal(1);
		});
		it('should return fizz when asked for 3rd element', function() {
			fizzbuzz = new FizzBuzz(3);
			fizzbuzz.printAt(3).should.equal('fizz');
		});
		it('should return fizzbuzz when asked for 12345th element', function() {
			fizzbuzz = new FizzBuzz(12345);
			fizzbuzz.printAt(12345).should.equal('fizzbuzz');
		})
	});
});