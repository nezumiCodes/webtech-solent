let contact = document.getElementById('contact');

contact.addEventListener('submit', function formSubmit(event) {
    event.preventDefault(); // Prevents the default (automatic) form submission and lets us submit it manually

    alert('Your contact form has been submitted successfully!');

    window.location.href = "contact.html"; // Redirect to a page
});