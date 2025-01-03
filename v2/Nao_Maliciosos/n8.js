document.getElementById('indi').style.display = 'none';

function mouseEnterHandlerred() {
    // Altera a cor de fundo quando hover
    this.style.backgroundColor = '#cc0000';
}

function mouseEnterHandlerblue() {
    // Altera a cor de fundo quando hover
    this.style.backgroundColor = '#0032d8';
}

function mouseLeaveHandlerred() {
    // Altera a cor de fundo quando hover
    this.style.backgroundColor = '#ff0000';
}

function mouseLeaveHandlerblue() {
    // Altera a cor de fundo quando hover
    this.style.backgroundColor = '#007BFF';
}

function toggleSenhaVisibility() {
    var senhaInput = document.getElementById("senha");
    var olhoIcon = document.querySelector(".olho");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        olhoIcon.classList.remove("fa-eye-slash");
        olhoIcon.classList.add("fa-eye");
    } else {
        senhaInput.type = "password";
        olhoIcon.classList.remove("fa-eye");
        olhoIcon.classList.add("fa-eye-slash");
    }
}

function logout() {
    localStorage.setItem('ra', '');
    localStorage.setItem('senha', '');
    window.location = 'https://cmtasks.alwaysdata.net/';
}
var ra = localStorage.getItem('ra');
var senha = localStorage.getItem('senha');
if (ra != '' && ra != null) {
    if (senha != '' && senha != null) {
        document.getElementById('logado').innerHTML = "Você Está Logado Como: " + ra;
        document.getElementById('logout').style.display = "block";
        document.getElementById('log').style.display = "block";
        document.getElementById('ra').value = ra;
        document.getElementById('senha').value = senha;
    } else {
        localStorage.setItem('ra', '');
        localStorage.setItem('senha', '');
    }
} else {
    localStorage.setItem('ra', '');
    localStorage.setItem('senha', '');
}

function verificarP() {
    window.location.href = "https://cmtasks.alwaysdata.net/verificarprovas";
}

function interfaceV2() {
    window.location.href = "https://cmtasks.alwaysdata.net/interfacev2";
}

function info() {
    window.location.href = "https://cmtasks.alwaysdata.net/info";
}
//if(localStorage.getItem('termosdeuso') != '1'){
//    window.location.href = "https://cmtasks.alwaysdata.net/termosdeuso"
//}
// Função para alternar entre "On" e "Off" e definir o valor correspondente
var button = document.getElementById('toggleButton');
button.value = '0';
var button = document.getElementById('toggleButton2');
button.value = '0';

function toggle() {
    var button = document.getElementById('toggleButton');
    if (button.innerHTML === 'Off') {
        button.innerHTML = 'On';
        button.value = '1'; // Define o valor como 1 quando está ligado (On)
    } else {
        button.innerHTML = 'Off';
        button.value = '0'; // Define o valor como 0 quando está desligado (Off)
    }
}

function toggle2() {

    var button = document.getElementById('toggleButton2');
    var button2 = document.getElementById('realize');
    if (button.innerHTML === 'Off') {
        button.innerHTML = 'On';

        // Seleciona o elemento de entrada pelo ID
        var inputElement = document.getElementById('indiceAcerto');

        // Adiciona o atributo required
        inputElement.required = true;
        document.getElementById('indi').style.display = 'block';
        button2.value = '⚠️🛑Realizar Provas🛑⚠️';
        button2.removeEventListener('mouseenter', mouseEnterHandlerblue);
        button2.addEventListener('mouseenter', mouseEnterHandlerred);
        button2.removeEventListener('mouseleave', mouseLeaveHandlerblue);
        button2.addEventListener('mouseleave', mouseLeaveHandlerred);
        button.style.backgroundColor = "#ff0000"
        button2.style.backgroundColor = "#ff0000"
        button.style.fontSize = "16px"
        button.value = '1'; // Define o valor como 1 quando está ligado (On)
        alert("A Porcentagem Recomendada é 80 Para Acertar 80% da Prova\nEx: (100) Acerta Tudo | (80) Acerta 80% | (50) Acerta Metade")
        inputElement.value = 80;
    } else {
        // Seleciona o elemento de entrada pelo ID
        var inputElement = document.getElementById('indiceAcerto');
        document.getElementById('indi').style.display = 'none';
        // Adiciona o atributo required
        inputElement.required = false;
        button2.value = 'Realizar Tarefas';
        button2.style.backgroundColor = "#007BFF"
        button2.removeEventListener('mouseenter', mouseEnterHandlerred);
        button2.addEventListener('mouseenter', mouseEnterHandlerblue);
        button2.removeEventListener('mouseleave', mouseLeaveHandlerred);
        button2.addEventListener('mouseleave', mouseLeaveHandlerblue);
        button.innerHTML = 'Off';
        button.style.backgroundColor = "#0400ff"
        button.style.fontSize = "16px"
        button.value = '0'; // Define o valor como 0 quando está desligado (Off)
        inputElement.value = null
    }
}

// Função para adicionar o valor do botão de alternância ao campo oculto antes do envio do formulário
function addToggleButtonValue() {
    var buttonValue = document.getElementById('toggleButton').value;
    document.getElementById('tfv').value = buttonValue;
}

function addToggleButtonValue2() {
    var buttonValue = document.getElementById('toggleButton2').value;
    document.getElementById('fp').value = buttonValue;
}
const elemento = document.querySelector('.info-container');
const elemento2 = document.querySelector('.login-container');

var leftValue = parseFloat(window.getComputedStyle(elemento).left);
const alturaTela = window.innerHeight;
const largTela = window.innerWidth;
const proporc = alturaTela / largTela
console.log(alturaTela)
console.log(largTela)
console.log(proporc)
if (alturaTela > 1100 && proporc > 1.5) { // Verifica se a propriedade left é menor ou igual a zero
    console.log(alturaTela)

    elemento.style.left = "50%";
    elemento.style.transform = "translateX(-50%)";
    elemento.style.top = "62%";
    elemento2.style.marginTop = "-50%"
    elemento2.style.marginLeft = "0%"


    //elemento.style.display = 'block';
    elemento.style.position = 'absolute';

    console.log("aqui")

}




const imgElement = document.querySelector('.login-container img');

document.addEventListener('animationend', () => {
    const container = document.querySelector('body');

    // Adicionar a classe para ocultar o pseudo-elemento
    container.classList.add('hidden');
    container.classList.add('hidd');



});



function showLoading() {
    ra = document.getElementById("ra")
    senha = document.getElementById("senha")
    if (ra.value != "" && senha.value != "") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("infoContainer").style.display = "none";
        document.getElementById("loadingContainer").style.display = "flex";
        setLoadingText("Carregando..."); // Define o texto inicial
        simulateLoading();
    }

}

function setLoadingText(text) {
    document.getElementById("loadingText").innerText = text;
}

function simulateLoading() {
    setTimeout(function() {
        setLoadingText("Executando (Você Pode Fechar Esta Página)...");

        setTimeout(function() {
            setLoadingText("Não Precisa Manter a Página Aberta...");

            setTimeout(function() {
                setLoadingText("As Tarefas Estão Sendo Feitas em Segundo Plano no Servidor...");
                simulateLoading()

            }, 8000);
        }, 8000);
    }, 2000);
}