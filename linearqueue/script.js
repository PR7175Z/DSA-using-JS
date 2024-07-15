document.getElementById('queuesize').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input[name = "size"]');
    const field = document.getElementById('fields');
    field.innerHTML = '';
    for(let i = 0; i<parseInt(input.value); i++){
        field.appendChild(document.createElement('p'));
    }
})

document.getElementById('queueform').addEventListener('submit', (e) =>{
    e.preventDefault();
    const queueinput = document.querySelector('input[name="queueinput"]')
    const fields = document.querySelectorAll('#fields p');
    fields.forEach(element => {
        console.log(element); 
    });

})