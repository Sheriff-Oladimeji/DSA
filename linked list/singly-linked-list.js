function Node(data) {
  this.data = data;
  this.next = null;
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(13);
const node4 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let currentNode = node1;
while (currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
console.log("null");
