// console.log($);

// 1. Wait until the DOM is fully loaded
$(document).ready(function(){
	// 2. Listen for clicks on button tags
	$('button').click(function(){
		// 3. Someone clicked on a button!. Run me.
		var whatToDo = $(this).attr('toDo');
		console.log(whatToDo);
		if(whatToDo == "hide"){
			$('#thing').hide();	
		}else if(whatToDo == "show"){
			$('#thing').show();
		}else if(whatToDo == "toggle"){
			$('#thing').toggle();
		}else if(whatToDo == "html"){
			var theThing = $('#thing')
			console.log(theThing.html());
			theThing.html('<table border="1"><tr><td>I\'m a table now!</td></tr></table>');
			console.log(theThing.html());			
		}else if(whatToDo == "prepend"){
			$('#thing').prepend('<table border="1"><tr><td>I have a friend to my right now!</td></tr></table>')
		}else if(whatToDo == "append"){
			$('#thing').prepend('<table border="1"><tr><td>I have a friend to my left now!</td></tr></table>')
		}else if(whatToDo == 'css'){
			$('#thing').css({
				'color': 'orange',
				'font-size': '70px',
				'background-color': 'blue'
			});
		}else if(whatToDo == 'addC'){
			$('#thing').addClass('text-uppercase');
		}else if(whatToDo == 'each'){
			$('button').each(function(){
				console.log($(this).html('Hurry up lunch!'))
			});
		}
	})
	// $('.thing') 
	// $('thing')
});
	
function toggle(){
	var thing = document.getElementById('thing');
	if(thing.style.display == "block"){
		thing.style.display = "none";		
	}else{
		thing.style.display = "block";
	}
}

// var jQuery2 = function(elementToTarget){
// 	// find out if there is a . or #
// 	// Use appropriate document.get...

// 	hide: function(idToTarget){
// 		document.getElementByID(idToTarget).style.display = "none";
// 	}
// }

// getElementsByTagName('button').className += " winner"
// getElementsByTagName('button').className = "btn btn-success"