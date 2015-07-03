var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //debugger;
    if (this.head === null) {
      this.head = Node(value);
    }
    this.tail = Node(value);
    //console.log(list); // Our debug code to display list in console
  };

  list.removeHead = function(){
    this.head = this.tail;
    return this.head.value;
    
  };

  list.contains = function(target){
    if (this.head.value === target || this.tail.value === target) {
      return true;
    }
    return false;
  };

  //console.log(list); // Our debug code to display list in console
  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
