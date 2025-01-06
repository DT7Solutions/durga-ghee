emailjs.init("zK7PxPCjSdKZ6YEfl");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        note: document.getElementById("note").value
    };

    emailjs.send("service_ovetcls", "template_92u18xp", templateParams)
        .then(function(response) {
            document.getElementById("success").style.display = "block";
            console.log('Success:', response);
        }, function(error) {
            document.getElementById("error").style.display = "block";
            console.log('Error:', error);
        });
});




