var nom=prompt("¿Cual es tu nombre?")
alert("Bienvenido " +nom);

var pre1=prompt("¿En que departamento se encuentra el lago titicaca?\n A: Tacna\n B: Puno\n C: Cusco");
if(pre1=="B"){
    pre1 = 1;
    }else{
        pre1 = 0;
    }

    var pre2=prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\n A: Lima e Ica\n B: Arequipa y Tacna\n C: Piura y Tumbes")
    if(pre2=="C"){
        pre2=1;
    }else{
        pre2=0;
    }
    var pre3=prompt("Plato típico de la Selva peruana\n A: Tacacho con cecina\n B: Arroz con pollo\n C: Lomo saltado ")
    if(pre3=="A"){
        pre3=1;
    }else{
        pre3=0;
    }
    var total = pre1 + pre2 + pre3;

document.write("<h1>Preguntas</h1>");
document.write("<h2>resultados finales: </h2>");
document.write("obtuviste " + total + "  <br>");

if(total<=0){
    document.write("Vuelve a intentarlo…");
}else{
    document.write("Puedes hacerlo mejor…");
}
