function dado(){
	var n = Math.floor((Math.random() * 6)+1)
	return n
}
  var sumas = [0,0,0,0,0,0,0,0,0,0,0,0];
  var val1 = 0;
  var val2 = 0;
  var suma = 0;            
  for(i=0;i<100;i++){
  	val1=dado();
  	val2=dado();
  	suma = val1+val2;
    sumas[suma-1]++
    document.write(suma+",")
  }
  
  document.write("<br>")
  for(var i=0;i<12;i++){
  	document.write("Resultado " +(i+1)+" = "+sumas[i]+" veces<br>")
  }