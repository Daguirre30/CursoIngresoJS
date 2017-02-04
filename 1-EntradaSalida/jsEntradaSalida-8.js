/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

//Esto lo hice solo y antes de la clase.
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var resultado;
	var resto = "El resto es ";

	numeroDividendo = document.getElementById('numeroDividendo').value;
	numeroDivisor = document.getElementById('numeroDivisor').value;
	resultado = (parseInt(numeroDividendo) % parseInt(numeroDivisor));
	alert(resto + resultado);
}

//ejercicio hecho en clase

/*

function SacarResto()
{
	var resultado = 2 % 10;
	alert(resultado);
	resultado = 10 % 2;
	alert(resultado);
}
*/