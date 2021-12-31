let email = document.querySelector('a');

email.addEventListener("click", () => {
    navigator.clipboard.writeText(email.textContent);
    alert('Copied!');
})