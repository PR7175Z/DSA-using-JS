document.getElementById('stackform').addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputexp = document.querySelector('input[name="mathsexp"]').value;
    
    for(let i = 0; i<inputexp.length; i++){
        console.log(inputexp[i]);
    }

});