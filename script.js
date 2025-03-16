document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let carChoice = document.getElementById("carChoice").value.trim();
    let pickupLocation = document.getElementById("pickupLocation").value.trim();
    let dropoffLocation = document.getElementById("dropoffLocation").value.trim();
    let pickupDate = document.getElementById("pickupDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let needDriver = document.getElementById("needDriver").value;
    let message = document.getElementById("formMessage");

    if (!name || !email || !carChoice || !pickupLocation || !dropoffLocation || !pickupDate || !returnDate || !needDriver) {
        message.innerText = "All fields are required!";
        message.style.color = "red";
    } else {
        message.innerText = "Booking Successful! We will contact you soon.";
        message.style.color = "green";
        
        // Reset the form after successful submission
        document.getElementById("bookingForm").reset();
    }
});