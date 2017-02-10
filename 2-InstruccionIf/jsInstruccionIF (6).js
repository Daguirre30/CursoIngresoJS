function Mostrar()
{
	//tomo la edad  
	var edad

	edad = document.getElementById('edad').value;

	// if(edad > 18)
	// {
	// 	alert("Esta persona es mayor de edad");
	// }

	// if(edad >=13 && edad <=17)
	// {
	// 	alert("esta persona es un adolescente");
	// }
	// if(edad <13)
	// {
	// 	alert("Esta persona es un niño");
	// }

	if(edad >= 18)
	{
		alert("Esta persona es mayor de edad");
	
	}
	if(edad < 13)
	{
		alert("Esta persona es un niño");
	}
	else
	{
		if(edad >=13 && edad <=17)
	
		alert("esta persona es un adolescente")
	}
		

	



}
//FIN DE LA FUNCIÓN