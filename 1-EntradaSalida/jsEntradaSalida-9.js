/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var numeroDividendo;
	var numeroDivisor;
	
	numeroDividendo = document.getElementById('numeroDividendo').value;
	numeroDivisor = document.getElementById('numeroDivisor').value;
	alert(parseInt(numeroDividendo) + parseInt(numeroDivisor) *1.10);
	
	
}
