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

document.getElementById('stackform').addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputexp = document.querySelector('input[name="mathsexp"]').value;
    const revinp = inputexp.split("").reverse().join('');
    let prefix = [];
    let stack = [];
    for(let i = 0; i<revinp.length; i++){
        if(revinp[i].charCodeAt(0)>=33 && revinp[i].charCodeAt(0)<=47){
            if(stack.length > 0 && revinp[i] == '(' ){
                while(stack[stack.length-1] != ')'){
                    // console.log(stack[stack.length-1])
                    prefix.push(stack[stack.length-1])
                    stack.pop();
                }
                stack.pop();
            }else if(stack.length > 0 && revinp[i] == ')'){
                stack.push(revinp[i]);
            }else if(stack.length > 0 && revinp[i] != '('){
                if(stack.length > 0 && (precedence(revinp[i])>= precedence(stack[stack.length - 1]))){
                    stack.push(revinp[i]);
                }else{
                    // console.log(revinp[i]);
                    prefix.push(stack[stack.length - 1]);
                    stack.pop();
                    stack.push(revinp[i])
                }
            }else{
                stack.push(revinp[i]);
            }
        }else{
            prefix.push(revinp[i]);
        }
        console.log(stack);
    }
    for(let j=stack.length-1; j>=0;j--){
        prefix.push(stack[j]);
    }
    console.log(prefix)
});