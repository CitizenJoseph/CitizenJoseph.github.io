const donations = document.querySelectorAll('ul > li > a');

donations.forEach(donation => {
    donation.addEventListener("click", () => {
        navigator.clipboard.writeText(donation.textContent);
        alert('Copied!');
    });
});