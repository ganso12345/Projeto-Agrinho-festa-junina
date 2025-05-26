function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let pessoas = [];

function setup() {
  createCanvas(800, 400);

  // Criar várias pessoas com posições e velocidades
  for (let i = 0; i < 10; i++) {
    pessoas.push({
      x: random(100, 700),
      y: random(270, 350),
      cor: color(random(255), random(255), random(255)),
      velocidade: random(0.5, 2)
    });
  }
}

function draw() {
  background(135, 206, 250); // Céuggggg

  desenharSol();
  desenharCampo();
  desenharCidade();
  desenharBandeirinhas();
  desenharFogueira();
  desenharPessoas();
}

function desenharSol() {
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 80, 60, 60);
}

function desenharCampo() {
  fill(34, 139, 34); // Verde
  rect(0, 250, width / 2, 150); // Metade esquerda: campo

  // Árvore
  fill(139, 69, 19);
  rect(80, 200, 20, 60);
  fill(34, 139, 34);
  ellipse(90, 180, 60, 60);
}

function desenharCidade() {
  fill(100);
  rect(500, 180, 50, 120); // prédio 1
  rect(560, 150, 40, 150); // prédio 2
  rect(620, 200, 60, 100); // prédio 3
  fill(180);
  rect(700, 220, 50, 80); // casa
}

function desenharBandeirinhas() {
  let cores = ["red", "yellow", "blue", "green", "orange"];
  for (let i = 0; i < width; i += 40) {
    fill(random(cores));
    triangle(i, 100, i + 20, 100, i + 10, 120);
  }
}

function desenharFogueira() {
  // Lenha
  fill(139, 69, 19);
  rect(380, 300, 10, 30);
  rect(390, 300, 10, 30);

  // Fogo
  fill(255, 69, 0);
  ellipse(390, 290, 20, 30);
  fill(255, 140, 0);
  ellipse(390, 285, 10, 20);
}

function desenharPessoas() {
  for (let p of pessoas) {
    // Corpo
    fill(p.cor);
    ellipse(p.x, p.y, 20); // cabeça
    rect(p.x - 5, p.y + 10, 10, 20); // corpo
    line(p.x - 5, p.y + 30, p.x - 10, p.y + 40); // perna esquerda
    line(p.x + 5, p.y + 30, p.x + 10, p.y + 40); // perna direita
    line(p.x - 5, p.y + 15, p.x - 15, p.y + 5); // braço esquerdo
    line(p.x + 5, p.y + 15, p.x + 15, p.y + 5); // braço direito

    // Movimento
    p.x += p.velocidade;

    // Voltar para o início quando sair da tela
    if (p.x > width) {
      p.x = -20;
    }
  }
}
