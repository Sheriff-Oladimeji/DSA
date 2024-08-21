function Node(data){
    this.data = data
    this.next = null
}

const traversalAndLog = (head) => {
    let currentNode = head
    while (currentNode) {
        console.log(currentNode.data, "->")
        currentNode = currentNode.next
    }

    console.log(null)

}

const findLowest = (head) => {
    let minValue = head.data
    let currentNode = head.next
    while (currentNode) {
        if (currentNode.data < minValue) {
            minValue = currentNode.data
        }
        currentNode = currentNode.next

    }
    return minValue
}


const node1 = new Node(7);
const node2 = new Node(11);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

traversalAndLog(node1)

console.log("The lowest value in the linked list is:", findLowest(node1));