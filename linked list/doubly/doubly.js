function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(13);
const node4 = new Node(2);

node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;

node4.prev = node3;

console.log("Moving forward ->")
let currentNode = node1;
while (currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
console.log("null");

console.log("Moving backward <-");
currentNode = node4
while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.prev
}
console.log('Null');