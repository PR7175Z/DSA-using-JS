document.getElementById('queuesize').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input[name = "size"]');
    const field = document.getElementById('fields');
    field.innerHTML = '';
    for(let i = 0; i<parseInt(input.value); i++){
        field.appendChild(document.createElement('p'));
    }
    document.getElementById('queueform').style.display = "block";
    document.querySelector('.result').style.display = "block";
})

document.getElementById('queueform').addEventListener('submit', (e) =>{
    e.preventDefault();
    const result = document.querySelector('.result p');
    const operation = document.querySelectorAll('input[name="queueoperation"]');
    const queueinput = document.querySelector('input[name="queueinput"]').value;
    const fields = document.querySelectorAll('#fields p');
    for(let i=0; i<operation.length; i++){
        if(operation[i].checked){
            if(operation[i].value === 'push'){
                for(let i = 0; i<fields.length; i++){
                    if(fields[i].innerHTML == ''){
                        fields[i].innerHTML = queueinput;
                        break;
                    }
                }
            }else{
                for(let i = 0; i<fields.length; i++){
                    if(fields[i].innerHTML !== ''){
                        result.append( ' ' + fields[i].innerHTML);
                        fields[i].innerHTML = '';
                        break;
                    }
                }
            }
        }
    }

})