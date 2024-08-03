class listNode{
    constructor(data = 0){
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
let list = new LinkedList(node1);

document.getElementById('inputform').addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputnode = document.querySelector('input[name="listiteminput"]').value;
    const inputoption = document.querySelector('select[name="listoperation"]').value;
    console.log(inputoption);
    let node = new listNode(inputnode);
    node1.next = node;
    node1 = node;

    console.log(list);
})

