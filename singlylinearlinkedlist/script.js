class listNode{
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertbefore(node){
        if(this.head !== null){
            let n = this.head;
            this.head = node;
            this.head.next = n;
        }else{
            this.head = node;
        }
    }

    insertend(node){
        if(this.head !== null){
            let pthis = this.head;
            while(pthis.next != null){
                pthis = pthis.next;
            }
            pthis.next = node;
        }else{
            this.head = node;
        }
    }

    insertbi(node, index){
        if(this.head !== null){
            let pthis = this.head;
            let i =0;
            while(i<index){
                pthis = pthis.next;
                i++;
            }
            let temp = pthis.next;
            pthis.next = node;
            pthis.next.next = temp;
        }else{
            this.head = node;
        }
    }

    insertai(node, index){
        if(this.head !== null){
            let pthis = this.head;
            let i =0;
            while(i<=index){
                pthis = pthis.next;
                i++;
            }
            let temp = pthis.next;
            pthis.next = node;
            pthis.next.next = temp;
        }else{
            this.head = node;
        }
    }
}
let list = new LinkedList();

document.getElementById('inputform').addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputnode = document.querySelector('input[name="listiteminput"]').value;
    const inputoption = document.querySelector('select[name="listoperation"]').value;
    const indexval = document.querySelector('input[name="indexval"]').value;
    let node = new listNode(inputnode);
    switch (inputoption){
        case 'insertf':
            list.insertbefore(node);
            break;
        case 'insertl':
            list.insertend(node);
            break;
        case 'insertbi':
            list.insertbi(node, indexval);
            break;
        case 'insertai':
            list.insertai(node, indexval);
            break;
        case 'removef':
            console.log(inputnode)
            break;
        case 'removel':
            console.log(inputnode)
            break;
        case 'removeiindex':
            console.log(inputnode)
            break;
    }

    console.log(list);
})

