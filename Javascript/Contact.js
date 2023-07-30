//represents the form submission event
function submitForm(event) {
    event.preventDefault();                                    // prevent the page from reloading

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
//Display on the new webpage
    const formData = {                  //Holds the user input
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    localStorage.setItem('formData', JSON.stringify(formData));      //stores formData object in the browser's local storage 
    window.location.href = 'response.html';          //redirects the user to a new webpage
}
