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
        return nodeChecker(node.children[i]);
      }
    }

     return found;

  };

   return nodeChecker(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
----------
var tree1 = Tree(1)

{
  value : value;
  addChild : function(value){}
  chidren: []
}

tree1.addChild('H')
tree1.children[0].addChildren("I")

contains -->

//iterate over the array

  //object at index's value

  //does it's nested array have children
     //if yes recurse
*/







