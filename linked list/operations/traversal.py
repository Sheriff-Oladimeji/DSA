class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def traversalAndPrint(head):
        currentNode = head
        while currentNode:
            print(currentNode.data, end=" -> ")
            currentNode = currentNode.next
        print("null")

def findLowest(head):
    minValue = head.data
    currentNode = head.next
    while currentNode:
        if currentNode.data < minValue:
            minValue = currentNode.data
        currentNode = currentNode.next
    return minValue

node1 = Node(7)
node2 = Node(11)
node3 = Node(3)
node4 = Node(2)
node5 = Node(9)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


traversalAndPrint(node1)

print("The lowest value in the linked list is:", findLowest(node1))
