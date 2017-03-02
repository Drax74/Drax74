var alertMessage = document.getElementById('message-alert');
var messageInput = document.getElementById('message-input');

alertMessage.addEventListener('click', function() {
    this.style.display = 'none';
});

var inputValidation = function () {
    var warning = document.getElementById('message-warning');
    var button = document.getElementById('message-button');
    var length = messageInput.value.length;
    var isWarning = length >= 1 && length <= 8;

		alertMessage.style.display = 'none';
    warning.style.visibility = isWarning ? 'visible' : 'hidden';
    button.disabled = length <= 8;
}

var successMessage = function () {
   messageInput.value = '';
   alertMessage.style.display = 'block';
}
