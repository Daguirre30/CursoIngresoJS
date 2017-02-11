function Mostrar()
{
	//tomo la edad  
	var mesDelAño;
	mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
		alert(" Este mes no tiene más de 28 días." );
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert(" este mes tiene 31 días.");
		break;
		default:
		alert(" este mes tiene 30 días.");


	}


	
	



}//FIN DE LA FUNCIÓN