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
                while(sign[s-1] != '('){
                    s--;
                    postfix.push(sign[s]);
                    // console.log(sign[s]);
                }
                // i = temp;
                console.log(arr[i])
            }
            sign.push(arr[i]);
        }else{
            postfix.push(arr[i]);
        }
        // console.log(arr[i]);
    }
    console.log( "postfix: " + postfix)
    console.log(sign)
})