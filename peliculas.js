function obtenerS(){
        var img=document.getElementById('miSlide');
        var valor=img.getAttribute('src');
        let indice=0;           
        for (let index = 0; index < localStorage.length; index++) {
                valorStorage=localStorage.getItem(localStorage.key(index));                
                if(valor==valorStorage){                        
                        indice=index;                                            
                }            
        }       
        indice++;
        longitud=localStorage.length;
        if(indice>(longitud-1)){                
                img.setAttribute('src',localStorage.getItem(localStorage.key(0)));
        }else{
                img.setAttribute('src',localStorage.getItem(localStorage.key(indice)));
        }       
}
function obtenerA(){
        var img=document.getElementById('miSlide');
        var valor=img.getAttribute('src');
        let indice=0;     
        for (let index = 0; index < localStorage.length; index++) {
                valorStorage=localStorage.getItem(localStorage.key(index));                
                if(valor==valorStorage){                        
                        indice=index;                        
                }               
        }       
        indice--;
        if(indice<0){                
                img.setAttribute('src',localStorage.getItem(localStorage.key(localStorage.length-1)));
        }else{
                img.setAttribute('src',localStorage.getItem(localStorage.key(indice)));
        }       
        
}
function cargarDatos(){
        var peliculas=["Malefica","It","Avatar","Raya","Valiente"]; 
        var srcImages=["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg",
        "images/image5.jpg"];
        index=0;
        if(localStorage.length>0){
                console.log("se cargaron los datos");         
        }else{        
                peliculas.forEach(element => {
                        localStorage.setItem(element,srcImages[index]);
                        index++; 
                });                                
        } 
}
function almacenarLocalStorage(){
        nombre=document.getElementById("nombrePelis").value;  
        pelis=document.getElementById("srcPelicula").value;     
       
        if(nombre=="" || pelis==""){
                alert("No dejar campos vacios")
        }else{
         localStorage.setItem(nombre,pelis); 
         alert("Imagen Registrada");
         document.getElementById("nombrePelis").value=""; 
         pelis=document.getElementById("srcPelicula").value="";           
        }               
}

cargarDatos();
