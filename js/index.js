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
  