function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var contador=0;
	var contadorDeCeros=0;
	var contadorNegativo=0;
	var contadorPositivo=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var acumuladorPares=0;
	var numero;
	var sumaNegativa;
	var promedioPositivo;
	var promedioNegativo;
	var contadorPares=0;
	



	while(respuesta!="no")
	{
		numero=prompt('Ingrese un nùmero');
		contador=contador +1;
		numero=parseInt(numero);
		

		if(numero >0)
		{
			contadorPositivo= contadorPositivo+1;
			acumuladorPositivos= acumuladorPositivos + numero;
		
		}
		
		else
		{
			if(numero % 2 == 0)
			{
				contadorPares = contadorPares+1;
				//acumuladorPares= acumuladorPares+ numero;
			}
			
		

			if(numero <0)
			{
				contadorNegativo = contadorNegativo+1;
				acumuladorNegativos = acumuladorNegativos + numero;
				
			}

			if(numero == 0)
			{
				contadorDeCeros=contadorDeCeros+1;
			}

		}

	respuesta=prompt('Ingrese si para continuar');

	
	}

	promedioNegativo = acumuladorNegativos/contadorNegativo;
	promedioPositivo = acumuladorPositivos/contadorPositivo;
	sumaNegativa = acumuladorNegativos + numero;
	sumaPositiva = acumuladorPositivos + numero;

	document.write()



}//FIN DE LA FUNCIÓN