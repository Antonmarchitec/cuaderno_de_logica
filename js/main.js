 ////FUNCIONES
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
         const recortarTexto = (cadena , longitud = undefined) =>{
             (!cadena)
             ?console.warn("NO INGRESASTE UNA CADENA DE TEXTO")
             :console.info(cadena.slice(0,longitud));
         }
         //recortarTexto("HOLA MUNDO", 2)


         /*5. PROGRAMAR UNA FUNCION QUE DADO UN STRING TE DEVUELVA UN ARRAY DE TEXTOS
         SEPARADOS POR CIERTO CARACTER PE. MI FINCION ("HOLA QUE TAL"," " ) DEVOLVERA ("HOLA", "QUE", "TAL")*/
         const cadenaArreglo = (cadena = "", separador = undefined) =>
         (!cadena)
         ? console.warn("No ingresaste una cadena de texto")
         :(separador === undefined)
         ?console.warn("No ingresaste el caracter separador")
         :console.info(cadena.split(separador));

         //cadenaArreglo("ene,feb,mar,abr,may,jun" , "") 
    


          /*6. PROGRAMAR UNA FUNCION QUE ME MUESTRE SI EL NUMERO ES PAR O IMPAR*/
          const numeroParImpar = (numero) =>{
              if (numero % 2 == 0){
                 return('Par')
              }else{
                 return('Impar')
              }
          }


          /*7. PROGRAMAR UNA FUNCION QUE MUESTRE LOS NUMEROS PARES DE UN NUMERO ENTERO PE.
          "NUM = 2544" QUE ME MUESTRE "244"*/
          const mostrarPares = (nume = 2544) =>{
             
          }

          /*8.PROGRAMAR UNA FUNCION QUE CUENTE EL NUMERO DE VUELTAS ASIGNADO**/
          const numeroVueltas = (num) =>{
            let vue = 1
            while( vue < num){
                vue ++ 
            }
            return vue
          }
           

          /*9. PROGRAMAR UNA FUNCION QUE NOS DEVUELVA SI UN NUMERO ES MULTIPLO DE TRES */
          const multiplosDeTres = (dato) =>{
              if(dato % 3 == 0){
                  return ("Es multiplo de 3")
              }else{
                  return ("No es multiplo de 3")
              }
          }
          

          /*10. PROGRAMAR UNA FUNCION QUE CUENTE CUANTOS DIGITOS CONTIENE UN NUMERO */
          const contarDigitos = (valor) =>{
            let contador = 0
            while(valor > 0){
                valor = valor / 10
                valor = parseInt(valor)
                contador = contador + 1
            }
            return (`Cantidad: ${contador} `)
          }

          /*11. PROGRAMAR UNA FUNCION QUE SUME LOS NUMEROS PARES DE UN NUMERO ENTERO*/
          
          const contarNumerosPares = (dato) =>{
              let contador = 0
              let aux = 0
              while( dato > contador){
                  res = dato % 10        //=> 8 
                  dato = dato / 10       //=> 2479.8 
                  dato = parseInt(dato)  //=> 2479

                  if(res % 2 == 1){
                      aux = aux + res
                  }
              }
              return (`La suma de los pares es: ${aux}`)
          }

          /*12. PROGRAMAR UNA FINCION QUE ME DEVUELVA NUMEROS REPETIDOS DE UN ENTERO**/
          const numeroRepetidos = (valor = 15525) =>{
              let contador = 0
              let extraido = 0
              let guardado = 0 
              for(let i = 0 ; valor < i; i++){
                  extraido = valor % 10      //=> 5
                  valor = valor / 10         //=> 1552.5
                  valor = parseInt(valor)    //=> 1552 
                  
                  if(extraido == guardado){
                       contador = contador + 1; 
                  }
                  
              }
             
          }
          
          

           
          
         






       let mostrarResult = document.querySelector("#mostrarResult")

       window.document.addEventListener("click", (e)=>{
           if(e.target.id === "boton1"){
                let num1 = parseFloat(document.querySelector("#dato1").value)
                let num2 = parseFloat(document.querySelector("#dato2").value)
                let num3 = parseFloat(document.querySelector("#dato3").value)
                mostrarResult.textContent = numeroMayor(num1, num2, num3)

           }else if(e.target.id === "boton2"){
                let num11 = parseFloat(document.querySelector("#dato1").value)
                let num12 = parseFloat(document.querySelector("#dato2").value)
                let num13 = parseFloat(document.querySelector("#dato3").value)
                mostrarResult.textContent = numeroMenor(num11, num12, num13)
           }else if(e.target.id === "boton3"){
                let caracter = document.querySelector("#caracter").value
                mostrarResult.textContent = contarCaracteres(caracter)
           }else if(e.target.id === "boton4"){
               let campo1 = parseFloat(document.querySelector("#dato1").value)
               mostrarResult.textContent = numeroParImpar(campo1)
           }else if(e.target.id === "boton5"){
                let numero = parseFloat(document.querySelector("#dato1").value)
                mostrarResult.textContent =  numeroVueltas(numero)
           }else if(e.target.id === "boton6"){
                let dato = parseInt(document.querySelector("#dato1").value)
                mostrarResult.textContent = multiplosDeTres(dato)
           }else if(e.target.id === "boton7"){
                let valor = parseInt(document.querySelector("#dato1").value)
                mostrarResult.textContent = contarDigitos(valor)
           }else if(e.target.id === "boton8"){
            let valor = parseInt(document.querySelector("#dato1").value)
            mostrarResult.textContent = contarNumerosPares(valor)
       }
       })
