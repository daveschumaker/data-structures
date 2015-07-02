var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.start = 0;
  this.storage = {};
};

Queue.prototype = {
	enqueue: function(value) {
		this.length++;
		this.storage[this.length] = value;
	},
	dequeue: function() {
		this.start++;
		return this.storage[this.start];
	},
	size: function() {
		if (this.length - this.start <= 0) {
			return 0;
		}
		return this.length - this.start;
	}
};

Queue.prototype.constructor = Queue;