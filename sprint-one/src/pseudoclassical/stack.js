var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.counter] =  val;
  this.counter ++;
};
Stack.prototype.pop = function() {
  if(this.counter<1){
    return 0;
  }
  var temp = this.storage[this.counter - 1];
  delete this.storage[this.counter -1];
  this.counter --;
  return temp;
};
Stack.prototype.size = function() {
  return this.counter;
};
