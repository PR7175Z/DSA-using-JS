document.getElementById('stackform').addEventListener('submit', function(e){
    e.preventDefault();
    let sign = [];
    let postfix = [];
    const arr = document.querySelector('input[name="mathsexp"]').value.split('');
    for(let i = 0; i<arr.length;i++){
        // console.log(arr[i].charCodeAt(0))
        if(arr[i].charCodeAt(0)>=33 && arr[i].charCodeAt(0)<=47){
            sign.push(arr[i]);
        }else{
            postfix.push(arr[i]);
        }
        // console.log(arr[i]);
    }
    console.log(postfix)
    console.log(sign)
})