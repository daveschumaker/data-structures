var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // 1. Get index (address) for our key (k)
  var i = getIndexBelowMaxForKey(k, this._limit);

  // 2. Once we have address, insert into our table at 'i' (address!)
  this._storage[i] = [k,v];
};

HashTable.prototype.retrieve = function(k){
  // 1. Get index (address) for our key (k)
  var i = getIndexBelowMaxForKey(k, this._limit);

  // 2. Return value associated with k.
  return this._storage[i][1];
};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 var myTable = new HashTable();
 myTable.insert('Eric','Fischer');

