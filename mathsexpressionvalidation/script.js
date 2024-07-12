function precedence(c){
    if(c == '(' || c == ')'){
        return 4;
    }else if (c == '^'){
        return 3;
    }else if (c == '/' || c == '*'){
        return 2;
    }else if (c == '+' || c == '-'){
        return 1;
    }else{
        return -1;
    }
}


document.getElementById('stackform').addEventListener('submit', function(e){
    e.preventDefault();
    let stack = [];
    let postfix = [];
    const scanned = document.querySelector('input[name="mathsexp"]').value.split('');
    for(let i = 0; i<scanned.length;i++){
        console.log("first" , stack);
        // console.log(i);
        if(scanned[i].charCodeAt(0)>=33 && scanned[i].charCodeAt(0)<=47){
            if(scanned[i] == ')'){
                while(stack.length > 0 && stack[stack.length-1] != '('){
                    postfix.push(stack.pop());
                }
                stack.pop();
                // i++;
            }else if(scanned[i] == '('){
                stack.push(scanned[i]);
            }else{
                console.log(i);
                while (stack.length > 0 && precedence(scanned[i]) >= precedence(stack[stack.length - 1])) {
                    postfix.push(stack.pop());
                }
                stack.push(scanned[i]);
            }
        //     if(scanned[i] == ')'){
        //         s = stack.length;
        //         while(stack[s] != '('){
        //             s--;
        //             if(stack[s] == '(' ){
        //                 break;
        //             }
        //             postfix.push(stack[s]);
        //             stack.pop(s);
        //         }
        //         i++;
        //     }
        //     else if(scanned[i] != '('){
        //         // s = stack.length;
        //         // if(precedence(scanned[i]) <= precedence(stack[s-1])){
        //         //     console.log(scanned[i], 'precedence is lower');
        //         //     postfix.push(stack[s-1]);
        //         //     stack.pop(s);
        //         // }else{
        //         //     console.log(scanned[i], 'precedence is higher');
        //         //     postfix.push(scanned[i]);
        //         // }
        //     }else{
        //         stack.push(scanned[i]);
        //     }
        }else{
            postfix.push(scanned[i]);
        }
    }
    console.log(stack);
    console.log(postfix);
})