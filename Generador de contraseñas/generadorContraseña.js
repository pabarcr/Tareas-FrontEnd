document.getElementById('generar-btn').addEventListener('click', function(){
    const charEspeciales='!#$%&?¡¿|/().-+*';
    const charEspecialesArray=charEspeciales.split('');
    const charNumerales='0123456789';
    const charNumeralesArray=charNumerales.split('');
    const letrasSinVocal='qwrtypsdfghjklñzxcvbnm';
    //minusculas
    const letrasSinVocalArray=letrasSinVocal.split('');
    //Mayusculas
    const letrasSinVocalArrayUpper=letrasSinVocal.toUpperCase().split('');
    console.log(letrasSinVocalArrayUpper);
    const tamanoinput=document.getElementById('tamaño');
    const tamañotext=parseInt(tamanoinput.value);
    let contraseña=[];
    let start=false;
    if (tamañotext<6 || !tamañotext){
        alert('La contraseña debe tener un minimo de 6')
    }else{
        while (start==false){
            for(i=0;i<tamañotext;i++){
                let seleccionCharRnd=Math.floor(Math.random()*4)
                if(seleccionCharRnd==0){
                    contraseña.push(charEspecialesArray[Math.floor(Math.random()*charEspecialesArray.length)])
                    
                }else if(seleccionCharRnd==1){
                    contraseña.push(charNumeralesArray[Math.floor(Math.random()*charNumeralesArray.length)]);
                    

                }else if(seleccionCharRnd==2){
                    contraseña.push(letrasSinVocalArray[Math.floor(Math.random()*letrasSinVocalArray.length)]);
                    

                }else if(seleccionCharRnd==3){
                    contraseña.push(letrasSinVocalArrayUpper[Math.floor(Math.random()*letrasSinVocalArrayUpper.length)]);
                    

                }
                

            }

            const contraFinal=contraseña.join("");
            if(charEspecialesArray.some(letra => contraFinal.includes(letra)) && charNumeralesArray.some(letra => contraFinal.includes(letra)) && letrasSinVocalArray.some(letra => contraFinal.includes(letra)) &&
            letrasSinVocalArrayUpper.some(letra => contraFinal.includes(letra))){
                document.getElementById('Contraseña').style.display='block';
                document.getElementById('Contraseña').innerText=`Contraseña: ${contraFinal}`;
                start=true
            }else{
                contraseña=[];

            };
        }
    }

});