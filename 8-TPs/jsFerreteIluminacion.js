/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	//Primera parte del ejercicio
 	var cantidad = document.getElementById('Cantidad').value;;
 	var precioBruto = cantidad *35;
 	var precioDescuento = precioBruto;
	var marca = document.getElementById('Marca').value;

	

 	
 
 	if(cantidad >= 6)
 	{
 		precioDescuento = parseInt(precioBruto * 0.50);
 	}
 	else
 	{
 		if(cantidad == 5)
 		{
 			if(marca == "ArgentinaLuz")
 			{
 				precioDescuento = parseInt(precioBruto  *0.60);
 			}
 			else
 			{
 				precioDescuento = parseInt(precioBruto  *0.70);
 			}
		} else {
			if(cantidad == 4)
			{
				if ((marca == "ArgentinaLuz") || (marca == "FelipeLamparas"))
				{
					precioDescuento = parseInt(precioBruto  * 0.75);
				}
				else
				{
					precioDescuento = parseInt(precioBruto  *0.80);
				}
			} else {
				if(cantidad == 3)
				{
					if(marca == "ArgentinaLuz")
					{
						precioDescuento = parseInt(precioBruto  * 0.85);
					}
					if(marca == "FelipeLamparas")
					{
						precioDescuento = parseInt(precioBruto  * 0.90);
					}
					else
					{
						precioDescuento = parseInt(precioBruto  *0.95);
					}
				}
			}
		}			

 	}
 	var IIBB = 0;
	
 	if(precioDescuento > 120)
 	{
 		IIBB = parseInt(precioDescuento  *0.10);
		alert("Usted pago" + IIBB + "de Ingresos Brutos");
		precioDescuento = precioDescuento + IIBB;

 	}
 	document.getElementById('precioDescuento').value = precioDescuento

}
