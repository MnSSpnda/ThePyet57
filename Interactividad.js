var dividir = function (n1,n2,n3){
	
  var txt1 = parseInt(document.getElementById("num1").value);

  var txt2 = parseInt(document.getElementById("num2").value);//guardamos las cajas de texto en variables //

  var txt3 = parseInt(document.getElementById("num3").value);

if (txt1 <= txt2 && txt1 <= txt3)// uso del if para llevar acabo la evaluacion de txt2 y txt3 //
	men = txt1;// en caso de cumplirse almacenarse en "men"//
	else if (txt2 < txt1 && txt2 <= txt3) 
     men = txt2;
 else //en caso de que no se aplique ninguna sentencia se guarda en esta variable//
 	men = txt3;
 
alert("El menor valor de los tres numeros ingresados es : "+ men);
  	 return men;  
  	 }


   var multiplicar = function (n1){
	
  var num1 = parseFloat(document.getElementById("numero1").value);

   r= num1 * 0.393701;//aqui se hace la operacion matematica para obtener el valor deseado//
  alert("Su numero ingresado son " + r + " en pulgadas");
 return r;
}


   var cmayard = function (n1){
	
  var num1 = parseFloat(document.getElementById("numero1").value);

 r =num1 * 1.09361;//se aplica una operacion para obtner el valor deseado//
 alert("Su numero ingresado son " + r + " en yardas");

  return r;
}



  	 