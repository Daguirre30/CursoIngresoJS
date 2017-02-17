function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	while(respuesta == 'si')
	{
		contador = contador + 1;
		numero = prompt("Ingresa un numero");
		numero = parseInt(numero);
		if(numero > 1)
		{
			positivo = positivo + numero
		}
		else
		{
			negativo = negativo * numero;
		}

		respuesta=prompt("Desea continuar");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN