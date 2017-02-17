function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;


	while(respuesta == "si")
	{
		contador = contador + 1;
		numero = prompt("ingresa un nùmero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta=prompt("quieres continuar?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN