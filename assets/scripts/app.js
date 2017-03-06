var alertClose = document.getElementById('message-close');
var alertMessage = document.getElementById('message-alert');
var messageInput = document.getElementById('message-input');

// add event listener to the success alert close link
//hide it on click
alertClose.addEventListener('click', function() {
    alertMessage.style.display = 'none';
});

//on key up
var inputValidation = function () {
    var warning = document.getElementById('message-warning');
    var button = document.getElementById('message-button');
    var length = messageInput.value.length;
    var isWarning = length >= 1 && length <= 8;

		alertMessage.style.display = 'none';
    warning.style.visibility = isWarning ? 'visible' : 'hidden';
    button.disabled = length <= 8;
}

//show success message on submit
var successMessage = function () {
   messageInput.value = '';
   alertMessage.style.display = 'block';
}
