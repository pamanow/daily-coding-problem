class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // helper method which creates a new node to
  // be inserted and calls insertNode
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data
  insertNode(node, newNode) {

    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) {
        node.left = newNode;
      } else {

        // if left is not null recurr until
        // null is found
        this.insertNode(node.left, newNode);
      }
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null recurr until
        // null is found
        this.insertNode(node.right, newNode);
      }
    }
  }

  printPaths(node = this.root, path = []) {
    if (node === null) {
      console.log('No root, good sir');
      return;
    }

    path.push(node.data);

    if (node.left === null && node.right === null) {
      console.log(path); // print array if no children
    } else {
      this.printPaths(node.left, path);
      this.printPaths(node.right, path);
    }

  }
}

const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(3);
BST.insert(5);
BST.insert(2);
// BST.insert(9);
// BST.insert(2);
BST.printPaths();

export default BinarySearchTree;
//
//   1
//  3 5
// 7 9  2