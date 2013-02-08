var FizzBuzz = function () {
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

	this.print = function (count) {
		var result = [];
		for (var i = 1; i <= count; i++) {
			result.push(this.printAt(i));
		}
		return result;
	}

	this.printAt = function (index) {
		return this.checkFizzBuzz(index);
	}

	return this;
}

describe('FizzBuzz', function () {
	var fizzbuzz = new FizzBuzz();
	describe('print()', function () {
		it('should return [1] when count is 1', function () {
			fizzbuzz.print(1).should.eql([1]);
		});
		it('should return [1, 2, fizz] when count is 3', function () {
			fizzbuzz.print(3).should.eql([1, 2, 'fizz']);
		});
		it('should return [1, 2, fizz, 4, buzz] when count is 5', function () {
			fizzbuzz.print(5).should.eql([1, 2, 'fizz', 4, 'buzz']);
		});
		it('should return [1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz] when count is 15', function () {
			var expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];
			fizzbuzz.print(15).should.eql(expected);
		});
	});
	describe('printAt()', function () {
		it('should return 1 when asked for 1st element', function () {
			fizzbuzz.printAt(1).should.equal(1);
		});
		it('should return fizz when asked for 3rd element', function () {
			fizzbuzz.printAt(3).should.equal('fizz');
		});
		it('should return buzz when asked for 100th element', function () {
			fizzbuzz.printAt(100).should.equal('buzz');
		});
		it('should return fizzbuzz when asked for 12345th element', function () {
			fizzbuzz.printAt(12345).should.equal('fizzbuzz');
		});
	});
});
