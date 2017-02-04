/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno + numeroDos;
	alert("la suma es " + resultado);
	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno - numeroDos;
	alert("la resta es " + resultado);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno * numeroDos;
	alert("la multiplicaciòn es " + resultado);
}

function dividir()
{
	var numeroUno; 
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno / numeroDos;
	alert("la divisiòn es " + resultado);
}

