const mario = document.querySelector('.mario'); //pega a class mario no css
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); //this will add the jump to the mario class in html, calling the css .jump

    setTimeout(() => {
        mario.classList.remove('jump'); //remove o jump do mario html
    }, 500) //vai executar uma funcao depois de certo tempo (o tempo do pulo)

}


//loop to verify the situation of the game -> need to reset it when it's over or it will keep running forever
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft; //propriedade letf do mario no css
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //propriedade bottom do mario css - nao tem pelo offset 
        console.log(marioPosition); //checa a posicao do jump -> retorna uma string sem o replace, o + converte para numero

    //console.log(pipePosition) //to check deslocamento esquerda

        //entro no if o jogo acabo
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 50) { //se ele tiver no parado no meio ta funcionando, precisa ajustar o tamanho do pulo e a velocidade do pipe
            pipe.style.animation = 'none'; //desliga anim pipe
            pipe.style.left = `${pipePosition}px`; //usa template literal pra usar o proprio valor da const como stop
        
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`; //stop animation in the correct place

            mario.src = './imgs/game-over.png'; //change img
            mario.style.width = '60px'; //change size
            mario.style.marginLeft = '70px'; //change margin limit

            clearInterval(loop); //stop the loop
        }


}, 10);

document.addEventListener('keydown', jump); //when anykey pressed execute function jump

