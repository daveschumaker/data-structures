var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInsta = Object.create(queueMethods);
  queueInsta.length = 0;
  queueInsta.start = 0;
  queueInsta.storage = {};

  return queueInsta;
};

var queueMethods = {
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


