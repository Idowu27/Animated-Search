var el = document.getElementById('inpt_search');
var other_el = document.getElementsByTagName('label');

el.addEventListener('focus', function (){

	other_el[0].classList.add('active');
});

el.addEventListener('blur', function(){
	var valuee = el.value;
	if(valuee.length == 0)
	var other_el = document.getElementsByTagName('label');
	other_el[0].classList.remove('active');
});
