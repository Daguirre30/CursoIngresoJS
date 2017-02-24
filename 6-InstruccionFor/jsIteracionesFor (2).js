function Mostrar()
{
	var contador=0;
	var respuesta;
	var ContadorPersonasConMascotas;
	var ContadorPersonasSinMascotas;
	var TipoMascota;
	var TipotaGato;
	var edad;
	var edadMayor;



	for(;contador<10000;)
	{
		edad=prompt("Que edad tienes?")
		respuesta=prompt("Tienes mascota");
		while(respuesta != "si" && respuesta != "no")
		{
			respuesta=prompt("Error ingrese si o no");
		}

		
		if(respuesta == "si")
		{
			ContadorPersonasConMascotas++;
			TipoMascota=prompt("Perro o gato?");
			while(TipoMascota != "Perro" && TipoMascota != "gato");
			{
				TipoMascota=prompt("No tienes perro o gato?")
			}

		}
		else
		{
			ContadorPersonasSinMascotas++;
			if(contador==0)
			{
				edadMayor=edad;
			}
			else
			{
				if(edad > edadMayor)
				{
					edadMayor=edad;
				}
				
			}
		}

	contador++

/*Necesito saber el nombre del primer gato que sea de una mujer
mayor a 30 años y el gato no tenga mas de 5 años y menor a 15*/
		
	}












}