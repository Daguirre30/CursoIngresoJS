/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioUno').value;
	precioTres = document.getElementById('PrecioUno').value;
	alert(parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres));
} 
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioUno').value;
	precioTres = document.getElementById('PrecioUno').value;

	alert(parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres) / 3);


}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioUno').value;
	precioTres = document.getElementById('PrecioUno').value;
	alert(parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres) * 1.21);
	
}