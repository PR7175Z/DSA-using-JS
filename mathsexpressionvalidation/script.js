function precedence(c){
    if (c == '^'){
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
    let sign = [];
    let postfix = [];
    const arr = document.querySelector('input[name="mathsexp"]').value.split('');
    for(let i = 0; i<arr.length;i++){
        // console.log(arr[i].charCodeAt(0))
        if(arr[i].charCodeAt(0)>=33 && arr[i].charCodeAt(0)<=47){
            if(arr[i] == ')'){
                // temp = i;
                s = sign.length;
                while(sign[s] != '('){
                    s--;
                    if(sign[s] == '(' ){
                        break;
                    }
                    postfix.push(sign[s]);
                    console.log(postfix)
                    // sign.pop(s);
                    // console.log(sign)
                }
                // i = temp;
                console.log(arr[i])
            }else{
                // s = sign.length;
                // if(precedence(arr[i]) >= precedence(sign[s])){
                //     postfix.push(arr[i]);
                // }else{
                //     postfix.push(sign[s])
                //     sign.pop();
                // }
                console.log('check');
            }
            sign.push(arr[i]);
        }else{
            postfix.push(arr[i]);
        }
        console.log(postfix)
        // console.log(arr[i]);
    }
    console.log( "postfix: " + postfix)
    console.log(sign)
})