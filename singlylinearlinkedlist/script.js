class listNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }
}

let node1 = new listNode(1)
let node2 = new listNode(2)
node1.next = node2

let list = new LinkedList(node1)
console.log(list);

document.getElementById('inputform').addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputnode = document.querySelector('input[name="listiteminput"]').value;
    // let node1 = new listNode(inputnode);

    console.log(inputnode);
})