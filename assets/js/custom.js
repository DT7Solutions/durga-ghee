emailjs.init("2lhRDKR4dXDsIhtNx");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var note = document.getElementById("note").value;

    var phoneRegex = /^\d{10}$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    document.getElementById("error").innerHTML = "";

    if (!name || !email || !phone || !address || !note) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Please fill out all the fields.";
        return;
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Please enter a valid 10-digit phone number.";
        return;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Please enter a valid Gmail address (e.g., example@gmail.com).";
        return;
    }

    var templateParams = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        note: note
    };

    emailjs.send("service_lljz23r", "template_ougi80f", templateParams)
        .then(function(response) {
            document.getElementById("success").style.display = "block";
            document.getElementById("success").innerHTML = "Thank you for contacting us! We will get back to you soon.";
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "Error occurred while sending email. Please try again later.";
        });
});
