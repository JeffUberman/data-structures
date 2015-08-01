var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var found = false;

  var nodeChecker = function(node){
    if(node.value === target){
      found = true;
    }
    if(node.children){
      for(var i = 0; i < node.children.length; i++){
        nodeChecker(node.children[i]);
      }
    }

     return found;

  };

   return nodeChecker(this);

};


/*
Complexity:
Tree -- O(1)
.addChild -- O(1)
.contains -- O(n^2)
*/







