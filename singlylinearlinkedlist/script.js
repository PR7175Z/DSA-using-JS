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
            while(i<index-1){
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

    removef(){
        if(this.head === null) return;

        this.head = this.head.next;
        return;
    }

    removel(){
        if(this.head === null) return;

        if(this.head.next === null){
            this.head = this.head.next;
            return;
        }

        let pthis = this.head;
        while(pthis.next.next !== null){
            pthis = pthis.next;
        }
        pthis.next = null;
        return;
    }

    removeindex(index){
        if(this.head === null) return;

        if(this.head.next === null){
            this.head = this.head.next;
            return;
        }

        let pthis = this.head;
        for(let i = 0; i<index-1; i++){
            pthis = pthis.next;
        }
        let temp = pthis.next.next;
        pthis.next = null;
        pthis.next = temp;
        return;
    }

    printList() {
        let current = this.head;
        let result = '';

        let p = 0;
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }

        return result+'null';
    }
}
let list = new LinkedList();

document.querySelector('select[name="listoperation"]').addEventListener('change', (e)=>{
    if(e.target.value == 'insertbi' || e.target.value == 'insertai' || e.target.value == 'removeiindex'){
        document.querySelector('input[name="indexval"]').style.display = 'block';
    } else{
        document.querySelector('input[name="indexval"]').style.display = 'none';
    }
})

document.getElementById('inputform').addEventListener('submit', (e)=>{
    e.preventDefault();
    document.querySelector('.result').innerHTML = '';
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
            list.insertbi(node, parseInt(indexval));
            break;
        case 'insertai':
            list.insertai(node, parseInt(indexval));
            break;
        case 'removef':
            list.removef();
            break;
        case 'removel':
            list.removel();
            break;
        case 'removeiindex':
            list.removeindex(parseInt(indexval));
            break;
    }

    let res = list.printList();
    
    let ressplit = res.split(' -> ');
    let p;
    ressplit.forEach((element)=>{
        p = document.createElement('p');
        p.innerHTML = element;
        document.querySelector('.result').appendChild(p);
    })
})

