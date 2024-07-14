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

document.getElementById('stackform').addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputexp = document.querySelector('input[name="mathsexp"]').value;
    const revinp = inputexp.split("").reverse().join('');
    let prefix = [];
    let stack = [];
    for(let i = 0; i<revinp.length; i++){
        if(revinp[i].charCodeAt(0)>=33 && revinp[i].charCodeAt(0)<=47){
            if(revinp.length > 0 && revinp[i] == ')'){
                stack.push(revinp[i]);
            }else if(revinp.length > 0 && revinp[i] != '('){
                console.log(revinp[i]);
            }
        }else{
            prefix.push(revinp[i]);
        }
    }
    console.log(prefix)
});