// Set up a doc ready
$(document).ready(function(){

	// Two new jquery methods
	// - submit
	$('.sign-up-form').submit(function(event){
		// console.log(event)
		// Stop the form from leaving the page!
		event.preventDefault();

		// Check the length of the name input field
		var fullNameVariable = $('.fullName').val();
		if(fullNameVariable.length < 3){
			console.log("Your name is too short")
			$('.full-name-error').show();
		}else{
			$('.full-name-error').hide();
		}

		// Make sure the password fields match.
		// Make sure the passwrod fiels are at least 6 characters
		// Make sure the password contains at least 1 number
		var password = $('.password').val();
		var password2 = $('.password2').val();
		var numberFound = false;
		for(let i = 0; i<password.length; i++){
			if(isNaN(Number(password[i]))){
				// this is a letter
			}else{
				// number found!
				numberFound = true;
			}
		}
		if(password !== password2){
			$('.password-error').html('Your passwords must match')
			$('.password-error').show();
		}else if(password.length < 6){
			$('.password-error').html('Your password must be at least 6 characterws.')
			$('.password-error').show();
		}else if(!numberFound){
			// JS couldnt find a number or it would be true!
			$('.password-error').html('Your password must contain a number!')
			$('.password-error').show();			
		}else{
			$('.password-error').hide();
		}

	})
	// - val



});