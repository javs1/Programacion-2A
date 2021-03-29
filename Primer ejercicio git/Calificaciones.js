var cal = [0,0,0,0,0,0,0,0,0,0];
var promedio = 0;
var i = 0
  for (i=0;i<10;i++){
  cal[i]=prompt("Introduce la primera calificaciones")
  promedio+=(cal[i])
  }
  promedio/=10;//solo al final necesitas dividir entre 10
  document.write("El promedio es: "+promedio + "<br>")
  for (i=0;i<10;i++){
  	if(cal[i]>promedio){
    	document.write("Poscision "+i+ ": "+cal[i]+ " es mayor al promedio<br>")
    }
}
