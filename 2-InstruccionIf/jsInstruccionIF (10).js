function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandon;
	

		numeroRandon = Math.floor((Math.random() * 10) + 1);
		
		if(numeroRandon == 10 || numeroRandon == 9)
		{
			alert("EXCELENTE"); 
		}
		else
		{
			if(numeroRandon >=4)
			{
				alert("APROBÓ");
			}
			else
			{
				alert("Vamos, la proxima se puede" );
			}
		}
		console.log(numeroRandon);
	

}//FIN DE LA FUNCIÓN