
function costo(transaccion, tarifa,impuesto){
    var transaccion=parseInt(prompt("¿Cuántas transacciones hiciste?"));
    var montototal=parseInt(prompt("¿Cuál es el monto total de tus transacciones?"));
    var tarifa=transaccion*3;
    var impuesto=tarifa*0.01;
    var total=montototal+tarifa+impuesto;
    alert("El costo total de tus transacciones más impuestos y tarifas es de: "+ total);
}
costo();



function nombres(){
    var y = new Date().getFullYear();
    var nombre1=prompt("Ingresa el primer nombre");
    var año1=parseInt(prompt("Ingresa tu año de nacimiento"));
    var edad1=(y - año1);
    var nombre2=prompt("Ingresa el segundo nombre");
    var año2=parseInt(prompt("Ingresa tu año de nacimiento"));
    var edad2=(y - año2);
    var nombre3=prompt("Ingresa el tercer nombre");
    var año3=parseInt(prompt("Ingresa tu año de nacimiento"));
    var edad3=(y - año3);
    console.log("Welcome " + nombre1 + "," + " your age is: " + edad1 + "." + " Welcome " + nombre2 + "," + " your age is: " + edad2 + "." + " Welcome " + nombre3 + "," + " your age is: " + edad3 + ".");
}
nombres();


function grade(){
    var grade=parseInt(prompt("Ingresa la nota: "));
    if(grade>=5&&grade<=8){
       alert(true);
    }else if(grade>8&&grade<11){
        alert(true);
      alert("Excellent");
    }else if(grade==11){
        alert("Perfect");
        alert(true);
      }
    else{
         alert(false); 
    }
}
grade();