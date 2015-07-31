var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.secondToLast = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
      list.secondToLast = newNode;
    }else{
      list.tail = newNode;
      list.secondToLast.next = newNode;
    }
  };

  list.removeHead = function(){
    var prevHead;
    if(list.head === null){
      return;
    }else{
      prevHead = list.head.value;
      list.head = list.head.next;
      return prevHead;
    }
  };

  list.contains = function(target){
    var nodeFinder = function(node){
      if(node.value === target){
         return true;
      } else if(node.next === null){
        return false;
      }else{
        return nodeFinder(node.next);
      }
    };
      return nodeFinder(list.head);
  };
  /*
  Revisit w/ for loop if time permits
  */

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
   addToTail -- O(1)
   removeHead -- O(1)
   contains -- 0(n)
 */
