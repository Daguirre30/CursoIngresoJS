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
 	var cantidad;
 	var precioBruto = cantidad *35;
 	var precioDescuento;

 	

 	cantidad = document.getElementById('Cantidad').value;
 	precioDescuento = document.getElementById('precioDescuento').value);
 	if(cantidad >= 6)
 	{
 		parseInt(precioDescuento * 0.50);
 	}
 	else
 	{
 		if(cantidad == 5)
 		{
 			if(marca == "ArgentinaLuz")
 			{
 				parseInt(precioDescuento *0.60);
 			}
 			else
 			{
 				parseInt(precioDescuento *0.70);
 			}
 		if(cantidad == 4)
 		{
 			if(marca == "ArgentinaLuz" || "FelipeLamparas")
 			{
 				parseInt(precioDescuento * 0.75);
 			}
 			else
 			{
 				parseInt(precioDescuento *0.80);
 			}
 		if(cantidad == 3)
 		{
 			if(marca == "ArgentinaLuz")
 			{
 				parseInt(precioDescuento * 0.85);
 			}
 			if(marca == "FelipeLamparas")
 			{
 				parseInt(precioDescuento * 0.90);
 			}
 			else
 			{
 				parseInt(precioDescuento *0.95);
 			}
 		}

 		}

 		}

 	}
 	
 	if(precioDescuento > 120)
 	{
 		parseInt(precioDescuento *1.10);

 	}
 	document.getElementById('precioDescuento').value = precioDescuento

}
