
var refMessage = firebase.database().ref('message');

//Listen to the submit button
document.getElementById('contactForm').addEventListener('submit', submitForm);

// the submitForm
function submitForm(e){
	e.preventDefault();

	var name = getInputValue('name');
	var email = getInputValue('email');
	var subject = getInputValue('subject');
	var message = getInputValue('message');

	// save the message to firebase
	saveMessage(name,email, subject, message);

	document.querySelector('.successfulMes').style.display = 'block';

	// to hide the alert after 4 second
	setTimeout(function(){
		document.querySelector('.successfulMes').style.display = 'none';
	},4000);

	//set the input box

	document.getElementById('contactForm').reset();

}

// get the input form value
function getInputValue(id){
	return document.getElementById(id).value;

}


function saveMessage(name, email, subject, message){
	var currentRefMessage = refMessage.push();
	currentRefMessage.set({
		name: name,
		email: email,
		subject: subject,
		message: message
	});
}

