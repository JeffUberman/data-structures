var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push : function(val){
    this.storage[this.counter] = val;
    this.counter ++;
  },
  pop : function(){
    if(this.counter < 1){
      return 0;
    }
    var temp = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter --;
    return temp;
  },
  size : function(){
    return this.counter;
  }
};


