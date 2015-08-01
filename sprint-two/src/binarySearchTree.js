var BinarySearchTree = function(value){
  var obj = Object.create(sharedMethods);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

var sharedMethods = {

  insert : function(node){
    if(node > this.value){
      if(this.right === null){
        this.right = BinarySearchTree(node);
      } else {
        this.right.insert(node);
      }
    }



    else if(node < this.value){
      if(this.left === null){
        this.left = BinarySearchTree(node);
      } else {
        this.left.insert(node);
      }
    }

  },

  contains : function(target){
    if(this.value === target){
      return true;
    }
    else if(target<this.value){
      if(this.left ===null){
        return;
      }else{
        return this.left.contains(target);
      }
    }

    else if(target>this.value){
      if(this.right === null){
        return;
      }else{
        return this.right.contains(target);
      }
    }


    return false
  },

  depthFirstLog : function(cb){

    cb(this.value)

    if(this.left === null){
      return;
    }else{
      this.left.depthFirstLog(cb);
    }

    if(this.right === null){
      return;
    }else{
      this.right.depthFirstLog(cb);
    }

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
