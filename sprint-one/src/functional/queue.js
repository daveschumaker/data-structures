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
    //length--;
    start++;
    return storage[start];
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
queue.dequeue();	// DEQUEUED: 'a'   // Left with -> {2: "b"}
queue.enqueue('c');	// QUEUED: 'c' -> {2: "b", 3: "c"}
expect(queue.dequeue()).to.equal('b');  // DEQUEDED return: 'b'   // Left with -> {3: "c"}
*/

/*
queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
queue.enqueue('c');
expect(queue.dequeue()).to.equal('b');
*/
































/*


  var length = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    start++;
    return storage[start];
  };

  someInstance.size = function(){
    if (length-start <= 0) {
      return 0;
    }
    return length-start;
  };

  return someInstance;

*/