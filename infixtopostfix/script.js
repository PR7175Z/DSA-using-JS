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

const result = document.querySelector('.result p');

document.getElementById('stackform').addEventListener('submit', function(e){
    e.preventDefault();
    let stack = [];
    let postfix = [];
    const scanned = document.querySelector('input[name="mathsexp"]').value.split('');
    for(let i = 0; i<scanned.length;i++){
        if(scanned[i].charCodeAt(0)>=33 && scanned[i].charCodeAt(0)<=47){
            if(scanned[i] == ')'){
                while(stack.length > 0 && stack[stack.length-1] != '('){
                    postfix.push(stack.pop());
                }
                stack.pop();
            }else if(scanned[i] == '('){
                stack.push(scanned[i]);
            }else{
                while (stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence(scanned[i]) && stack[stack.length-1] != '(') {
                    postfix.push(stack.pop());
                }
                stack.push(scanned[i]);
            }
        }else{
            postfix.push(scanned[i]);
        }
    }
    result.innerHTML = "The postfix expression is: " + postfix.join("");
    console.log(postfix);
})