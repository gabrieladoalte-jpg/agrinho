// ================================
// CONTADORES ANIMADOS (SEGURo)
// ================================

const contadores = document.querySelectorAll(".contador");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const el = entry.target;
            const alvo = parseInt(el.dataset.target);
            let atual = 0;

            const velocidade = Math.max(10, 2000 / alvo);

            const timer = setInterval(() => {
                atual++;
                el.textContent = atual;

                if (atual >= alvo) {
                    el.textContent = alvo;
                    clearInterval(timer);
                }
            }, velocidade);

            observer.unobserve(el);
        }
    });
}, {
    threshold: 0.5
});

contadores.forEach(el => observer.observe(el));


// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topo.style.display = "block";
    } else {
        topo.style.display = "none";
    }
});

topo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ================================
// FORMULÁRIO
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.querySelector("input[type='text']").value;

    if (nome.trim() === "") {
        alert("Por favor, preencha seu nome.");
        return;
    }

    alert("Mensagem enviada com sucesso! 🌱");

    form.reset();
});


// ================================
// MENU SUAVE (ROLAGEM)
// ================================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
