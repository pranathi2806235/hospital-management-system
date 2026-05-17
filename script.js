const form = document.getElementById("appointmentForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const date = document.getElementById("date").value;

    const department = document.getElementById("department").value;

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        department === ""
    ){

        message.style.color = "red";

        message.innerText = "Please fill all the fields.";

        return;
    }

    message.style.color = "green";

    message.innerText = "Appointment Booked Successfully!";

    form.reset();

});

function scrollToAppointment(){

    document.getElementById("appointment").scrollIntoView({
        behavior:"smooth"
    });

}