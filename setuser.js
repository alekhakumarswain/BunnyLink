document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem("Rname", name);
            window.location.href = "index.html";
        } else {
            alert('Please enter your name.');
        }
    });
});
