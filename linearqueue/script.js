document.getElementById('queueForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input[name = "queueinput"]');
    console.log(input.value);
})