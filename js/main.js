/* by default eyes are closed */
let checkbox = document.getElementById("hoothoot__checkbox");
checkbox.checked = false; 

let label = document.getElementById("hoothoot__label");
label.onclick = function(){
    if(checkbox.checked === false){
        document.getElementById("hoothoot__cry").play();
    }
}