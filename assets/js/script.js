function bookAppointment() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // You can send this information to the server for processing.
    // For simplicity, let's just display a confirmation message here.
    const confirmationMessage = `Appointment booked for ${name} on ${date} at ${time}.`;

    document.getElementById('confirmation').innerText = confirmationMessage;
}
