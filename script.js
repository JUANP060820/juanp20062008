var na=Math.floor(Math.random() * (50 - 1) + 1);
function comprobar(){
    var nu=document.getElementById("Cr7").value;
    if(na==nu){
        alert("lo lograste Guerrero Z");
    }else if(na>nu){
        alert("es mayor");
    }else{
        alert("es menor")
    }
}
