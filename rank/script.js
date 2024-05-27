const form = document.getElementById('formCalculoRank');
const resultadoRank = document.getElementById('resultadoRank');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);

    if (isNaN(vitorias) || isNaN(derrotas)) {
        resultadoRank.textContent = 'Erro: Digite apenas números.';
        return;
    }

    const winrate = vitorias / (vitorias + derrotas);
    const pontosRank = vitorias * winrate;

    let rank;
    if (winrate < 0.5) {
        pontosRank *= 1.15;
    }

    if (pontosRank < 25) {
        rank = 'Sem rank';
    } else if (pontosRank < 100) {
        rank = 'Bronze';
    } else if (pontosRank < 500) {
        rank = 'Prata';
    } else if (pontosRank < 1500) {
        rank = 'Ouro';
    } else if (pontosRank < 3000) {
        rank = 'Safira';
    } else {
        rank = 'Diamante';
    }

    resultadoRank.textContent = `O herói está no rank ${rank}`;
});

particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
