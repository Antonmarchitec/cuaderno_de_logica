 //FUNCIONES
        //1. Indicar el mayor de 3 numeros ingresados por teclado
        const numeroMayor = (dato1, dato2, dato3) =>{
            if(dato1 > dato2){
                if(dato1 > dato3){
                    //console.log(`El numero mayor es: ${dato1}`)
                    return dato1
                }else if(dato3 > dato2){
                    //console.log(`El numero mayor es: ${dato3}`)
                    return dato3
                }else{
                    //console.log(`El numero mayor es: ${dato2}`)
                    return dato2
                }
            }else if(dato2 > dato3){
                //console.log(`El numero mayor es: ${dato2}`)
                return dato2
            }else{
                //console.log(`El numero mayor es: ${dato3}`)
                return dato3
            }
        }

        //2. Indicar el menor de 3 numeros ingresados por teclado
        const numeroMenor = (dato1, dato2, dato3)=>{
            if (dato1 < dato2){
                if(dato1 < dato3){
                    //console.log(`El numero menor es: ${dato1}`)
                    return dato1
                }else if(dato3 < dato2){
                    //console.log(`El numero menor es: ${dato3}`)
                    return dato3
                }else{
                    //console.log(`El numero menor es: ${dato2}`)
                    return dato2
                }
            }else if(dato2 < dato3){
                //console.log(`El numero menor es: ${dato2}`)
                return dato2
            }else{
                //console.log(`El numero menor es: ${dato3}`)
                return dato3
            }
        }    
        
       /*3. PROGRAMAR UNA FUNCION QUE CUENTE EL NUMERO DE CARACTERES DE UNA CADENA 
       DE TEXTO PE MI FUNCION "HOLA MUNDO" DEVOLVERA 10*/
         const contarCaracteres = (cadena)=>{
             //let cadena = "HOLA MUNDO"
             let numeroCaracteres = cadena.length
             return numeroCaracteres  
         } 

         /*4. PROGRAMAR UNA FUNCION QUE TE DEVUELVA EL TEXTO RECORTADO SEGUN EL NUMERO DE 
         CARACTERES INDICADOS PE. miFuncion("Hola Mundo", 4) devolvera "Hola"*/
         const recortarTexto = () =>{
             
         }
         
         recortarTexto()
    







       let mostrarResult = document.querySelector("#mostrarResult")

       window.document.addEventListener("click", (e)=>{
           if(e.target.id === "boton1"){
                let num1 = document.querySelector("#dato1").value
                let num2 = document.querySelector("#dato2").value
                let num3 = document.querySelector("#dato3").value
                mostrarResult.textContent = numeroMayor(num1, num2, num3)

           }else if(e.target.id === "boton2"){
                let num1 = document.querySelector("#dato1").value
                let num2 = document.querySelector("#dato2").value
                let num3 = document.querySelector("#dato3").value
                mostrarResult.textContent = numeroMenor(num1, num2, num3)
           }else if(e.target.id === "boton3"){
                let caracter = document.querySelector("#caracter").value
                mostrarResult.textContent = contarCaracteres(caracter)
           }
       })
