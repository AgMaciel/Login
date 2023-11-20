document.getElementById("btn_Registrar").addEventListener("click", function() {
    // Adiciona uma classe para aplicar o efeito
    this.classList.add("highlight");
    
    // Remove a classe após um curto atraso (1 segundo no exemplo)
    setTimeout(() => {
      this.classList.remove("highlight");
    }, 1000); // 1000 milissegundos (1 segundo)
  });
  
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 5000); // Troca os slides automaticamente a cada 5 segundos
  showSlide(currentIndex);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelectorAll('input[name=name]').value;
    const cpf = document.querySelectorAll('input[name=cpf]').value;
    const data_nascimento = document.querySelectorAll('input[name=data_nascimento]').value;
    const email = document.querySelectorAll('input[name=email]').value;
    const endereco = document.querySelectorAll('input[name=endereco]').value;
    const telefone = document.querySelectorAll('input[name=telefone]').value;
 

    fetch('https://api.sheetmonkey.io/form/oD9MZ2pWf7VQ4NAAmWgJQ', {
        method: 'get',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
    },
    body: JSON.stringify({ name, cpf, data_nascimento, email, endereco, telefone}),
    });
}
  Document.querySelector(".btn_Registrar").addEventListener("submit", handleSubmit());

  function buscarDados() {
    var nomeAluno = document.getElementById('nome').value;
    var serieAluno = document.getElementById('serie').value;

    // Substitua 'SUA_CHAVE_DE_API' pela chave de API do Google Sheets
    var apiKey = 'SUA_CHAVE_DE_API';
    var url = 'https://docs.google.com/spreadsheets/d/1Op3JTcwIWxBrloyJX5VGfM0agErftkUgcmf_IVXC67w/edit#gid=0';
    url += 'key=' + apiKey;

    // Adicione os parâmetros da consulta
    url += '&valueInputOption=RAW';
    url += '&dateTimeRenderOption=FORMATTED_STRING';
    url += '&majorDimension=ROWS';
    url += '&dimension=ROWS';

    // Realize a solicitação à API usando Fetch ou XMLHttpRequest
    fetch(url)
      .then(response => response.json())
      .then(data => exibirResultado(data))
      .catch(error => console.error('Erro:', error));
  }

  function exibirResultado(data) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  }