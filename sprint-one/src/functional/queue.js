var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
  	length++;
  	storage[length] = value;
  };

  someInstance.dequeue = function(){
  	var result;
  	start++;

  	if (length-start <= 0) {
  		return 0;
  	}
    
    result = storage[start-1];
    // storage[start] = undefined;
    //delete storate[start];
    //storage[length] = undefined;
    //length--;
    return result;
  };

  someInstance.size = function(){

  	if (length-start <= 0) {
  		return 0;
  	}
  	return length-start;
  };

  return someInstance;
};

/*
queue.enqueue('a'); // Resulting object: {1: "a"}
queue.enqueue('b');	// {1: "a", 2: "b"}
queue.dequeue();	// DEQUEUED: 'a' -> {2: "b"}
queue.enqueue('c');	// QUEUED: 'c' -> {2: "b", 3: "c"}
expect(queue.dequeue()).to.equal('b');  // {2: "b"}
*/

/*
queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
queue.enqueue('c');
expect(queue.dequeue()).to.equal('b');
*/