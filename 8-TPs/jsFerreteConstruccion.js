/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var base;
	var altura;
	
	base = (document.getElementById('').value;
	altura = (document.getElementById('').value;
	alert(parseInt(base) * 2) + (ParseInt(altura) *2) *3);
}
function Circulo () 
{
	
}
function Materiales () 
{
	var cemento;
	var cal;
	var totalCemento;
	var totalCal;
	var textoCemento = "necesitas "
	var textoCemento2 = " de cemento y"
	var textoCal = "de cal"
	
	
	cemento = document.getElementById('').value;
	cal = document.getElementById('').value;
	totalCemento = parseInt(cemento) * 2;
	totalCemento = parseInt(cal) * 3;
	alert(necesitas + ParseInt(totalCemento) + textoCemento2  + parseInt(totalCal) + textoCal;
	
	
}
