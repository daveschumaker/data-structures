var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	var found = false;
	if (this.value === target) {
		found = true;
	}
	for (var i=0; i<this.children.length; i++) {
		if (this.children[i].contains(target)) {
			found = true;
		}
	}
		// return false;
	// if (this.children[0].value === target) {
	// 	return true;
	// }
	// var found = false;
	// var targetFinder = function(node) {
	// 	if (this.value === target) {
	// 	    found = true;
	// 	}
	// 	for (var i=0; i<node.length; i++) {
	// 		targetFinder(this.children);
	// 	}
	// }
	// targetFinder(this.children);
	// return found;
	return found;

};


/*
 * Complexity: What is the time complexity of the above functions?
 

treeMethods.contains = function(target){
	var found = false;
	var targetFinder = function(node) {
		if (this.value === target) {
		    found = true;
		}
		for (var i=0; i<node.children.length; i++) {
			found = targetFinder(node);
		}
		return found;
	}
	targetFinder(this.children);
};




 */