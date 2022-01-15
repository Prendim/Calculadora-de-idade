function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //var img = document.createElement('img') - cria a imagem
        //img.setAttribute('id','foto') - cria o elemento em "html" mas pelo JavaScript
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                //img.setAttribute('src', 'foto.png') - puxa a imagem do diretório
            } else if (idade < 21){
                //Jovem
            } else if (idade < 50){
                //Adulto
            } else {
                //Idoso
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
            } else if (idade < 21){
                //Jovem
            } else if (idade < 50){
                //Adulta
            } else {
                //Idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //res.appendChild(img) - lê e aplica a imagem conforme a idade
    }
}