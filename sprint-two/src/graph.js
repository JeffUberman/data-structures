

var Graph = function(){
  this.storage = [];
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.value = node;
  newNode.edge = [];
  this.storage.push(newNode);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === node){
      this.storage.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === fromNode){
      for(var j = 0; j < this.storage[i].edge.length; j++){
        if(this.storage[i].edge[j] === toNode){
          return true;
        }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  _.each(this.storage, function(item){
    if(item.value===fromNode){
      item.edge.push(toNode);
    }
    if(item.value===toNode){
      item.edge.push(fromNode);
    }
  });
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  _.each(this.storage, function(item){
    if(item.value === fromNode){
      for(var i=0; i<item.edge.length; i++){
        if(item.edge[i]===toNode){
          item.edge.splice(i, 1);
        }
      }
    }

    if(item.value === toNode){
      for(var j=0; j<item.edge.length; j++){
        if(item.edge[j]===fromNode){
          item.edge.splice(j, 1);
        }
      }
    }
  });
}

Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.storage.length; i++){
    cb(this.storage[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 Graph -- O(1)
 .addNode -- O(1)
 .contains -- O(n)
 .removeNode -- O(n) potentially O(n^2) if splice contains for loop
 .hasEdge -- O(n)
 .addEdge -- O(n)
 .removeEdge -- O(n)
 .forEachNode -- O(n) potentially O(n^2) depending on CB

 */



