var BinarySearchTree = function(value){
	var myTree = {};
	myTree.root = value;
	myTree.left = null;
	myTree.right = null;

	_.extend(myTree, BinarySearchTreeMethods);
	return myTree;
};

var BinarySearchTreeMethods = {
	insert: function(value) {
		if (value < this.root) {
			this.left = BinarySearchTree(value);
		}
		if (value > this.root) {
			this.right = BinarySearchTree(value);
		}
	},
	contains: function() {

	},
	depthFirstLog: function() {

	}
}


// NEW FUNCTION TIME!
// Node constructor with 3 properties
	// create new node obj	
		// value
		// left
		// right
	// return our obj!


/*
 * Complexity: What is the time complexity of the above functions?
 */