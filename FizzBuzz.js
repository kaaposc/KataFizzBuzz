var FizzBuzz = function (count) {
	this.count = count;

	this.print = function () {
		
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
	});
});