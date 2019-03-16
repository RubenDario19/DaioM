var option = prompt("SOLO NUMEROS MAYORES A 20");
var memory = [];

    let multiplos_2 = document.getElementById("multiplos_2");
    let multiplos_3 = document.getElementById("multiplos_3");
    let multiplos_4 = document.getElementById("multiplos_4");
    let multiplos_5 = document.getElementById("multiplos_5");
    let multiplos_6 = document.getElementById("multiplos_6");
    let multiplos_7 = document.getElementById("multiplos_7");
    let multiplos_8 = document.getElementById("multiplos_8");
    let multiplos_9 = document.getElementById("multiplos_9");
    let primos = document.getElementById("primos");
    let clear = document.getElementById("clear");
    
    

function entrada(){
    if(option==null || option=="") {
        }else if(option < 20){
            alert("SOLO SE PERMITEN NUMEROS MAYORES A 20");
        }else if(option >= 20){      
        
            for (let a = 1; a <= option; a++) {
                const botton = document.createElement('button');
                botton.type = 'button';
                botton.id = 'boton'+a;
                botton.value = ""+a;
                botton.innerText = a;
                botton.style.height = "45px";
                botton.style.width = "45px";
                botton.style.background = "#fff";
                botton.style.borderRadius = "50%";
                document.getElementById("izq").appendChild(botton);

            }} }

    entrada();

    multiplos_2.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 2 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#ff2400";
                memory.push(a);
            }}}   

    multiplos_3.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 3 == 0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#3299cc";
                memory.push(a);
            }}}

    multiplos_4.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 4 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#99cc32";
                memory.push(a);
            }}} 

    multiplos_5.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 5 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#00cc99";
                memory.push(a);
            }}}

    multiplos_6.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 6 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#ffff66";
                memory.push(a);
            }}}

    multiplos_7.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 7 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#9999cc";
                memory.push(a);
            }}}

     multiplos_8.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 8 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#cccc66";
                memory.push(a);
            }}}

    multiplos_9.onclick = function() {
        for (let a = 1; a <= option; a++){
     if(a % 9 ==0 && memory.includes(a)==false){
     document.getElementById("boton"+a).style.background= "#43A047";
                memory.push(a);
            }}}

    primos.onclick = function() {
        var count=0;
        for(let k=2; k<=option; k++){
            for (let r = 2; r<=option; r++) {
               if (k%r==0) {
                   count++;
            }}
        if(count==1){
            count=0;
         document.getElementById("boton"+k).style.background = "#ee74ca";
         memory.push(k);

        }else if(count>1){
     count=0;
        }}}
    clear.onclick = function() {
    for(let a=2; a<= option; a++){
        document.getElementById("boton"+a).style.background= "#fff";
         memory=[];
        }}
