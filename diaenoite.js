function carregar(){
         var msg = window.document.getElementById('msg') 
         var img = window.document.getElementById('imagens')
         var data = new Date()
         var hora = 8
         var minuto = data.getMinutes()
         msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

         if (hora >=6 && hora < 12){
          //Bom dia!
          img.src = 'imagens/solll.png'
          document.body.style.background = '#556B2F'
         }
         else if (hora >=12 && hora <=18){
          //Boa tarde!
          img.src = 'imagens/tardes.png'
          document.body.style.background = '#808000'
         }
         else if(hora>=18 && hora <=22){
          //Boa noite!
          img.src = 'imagens/noitee.png'
          document.body.style.background = '#031226'
        }
        else{
            //madrugada!
            img.src = 'imagens/hallowen-og3.webp'
            document.body.style.background = '#034286'
           }
}
