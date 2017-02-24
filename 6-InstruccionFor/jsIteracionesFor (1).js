function Mostrar()
{
	var contador=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;

	var numeroRandon;


//el for inicia el contador, evalua el contador, genera el consolelog, incrementa 
//el contador, evalua nuevamente, ejecuta el consolelog y asi susesivamente
// ya que lo inicializa una unica vez
	// for(/*contador = 0*/; /*contador <5*/; /*contador ++*/)
	// {

	// 	console.log(contador);
	// 	contador++;

	// 	if(contador == 5)
	// 	{//la condicion puede ser cualquiera y con if, lo importante es el break para salir
	// 		break;
	// 	}
	// }

//ejercicio 2 de practica en clase

	for(;contador <10000; contador ++)
	{

		numeroRandon = Math.floor((Math.random() * 10) + 1);
		
		switch(numeroRandon)
		{
			case 1:
			contador1++;
			break;
			case 2:
			contador2++;
			break;
			case 3:
			contador3++;
			break;
			case 4:
			contador4++;
			break;
			case 5:
			contador5++;
			break;
			case 6:
			contador6++;
			break;
			case 7:
			if(contador7 >=  contador *0.07)
			{
				continue;
			}
			contador7++;
			break;
			case 8:
			contador8++;
			break;
			case 9:
			contador9++;
			break;
			case 10:
			contador10++;
			break;

		}
	}

	console.log("la cantidad de unos es "+ contador1 /contador*100 +" %");
	console.log("la cantidad de dos es" + " " +contador2 /contador*100 +" %");
	console.log("la cantidad de tres es" + " "+contador3 /contador*100 +" %");
	console.log("la cantidad de cuatros es" + " "+contador4 /contador*100 +" %");
	console.log("la cantidad de cincos es" +" "+ contador5 /contador*100 +" %");
	console.log("la cantidad de seis es" + " "+contador6 /contador*100 +" %");
	console.log("la cantidad de sietes es" +" "+ contador7 /contador*100 +" %");
	console.log("la cantidad de ochos es" +" "+ contador8 /contador*100 +" %");
	console.log("la cantidad de nueve es" + " "+contador9 /contador*100 +" %");
	console.log("la cantidad de diez es" + " "+contador10 /contador*100 +" %");
	console.log(contador);







}