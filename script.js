const materias = [
  {
    ciclo: 1,
    materias: [
      { codigo: "ADM101", nombre: "Fundamentos de Administración", uv: 4, electiva: false, prerequisitos: [] },
      { codigo: "MAT101", nombre: "Matemática I", uv: 4, electiva: false, prerequisitos: [] },
      { codigo: "SOC101", nombre: "Sociología", uv: 3, electiva: false, prerequisitos: [] },
      { codigo: "ELE101", nombre: "Electiva de Humanidades I", uv: 3, electiva: true, prerequisitos: [] }
    ]
  },
  {
    ciclo: 2,
    materias: [
      { codigo: "ADM102", nombre: "Teoría Organizacional", uv: 4, electiva: false, prerequisitos: ["ADM101"] },
      { codigo: "MAT102", nombre: "Matemática II", uv: 4, electiva: false, prerequisitos: ["MAT101"] },
      { codigo: "ECO101", nombre: "Microeconomía", uv: 4, electiva: false, prerequisitos: [] },
      { codigo: "ELE102", nombre: "Electiva de Humanidades II", uv: 3, electiva: true, prerequisitos: [] }
    ]
  }
  // Puedes seguir agregando más ciclos aquí...
];

const malla = document.getElementById("malla");
const estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias")) || {};

function tienePrerequisitosAprobados(prereqs) {
  if (!prereqs || prereqs.length === 0) return true;
  return prereqs.every((codigo) => estadoMaterias[codigo]);
}

function actualizarEstado() {
  document.querySelectorAll(".materia").forEach((mat) => {
    const prereqs = JSON.parse(mat.dataset.prerequisitos || "[]");
    const codigo = mat.dataset.codigo;
    const aprobada = estadoMaterias[codigo];

    if (!aprobada && !tienePrerequisitosAprobados(prereqs)) {
      mat.classList.add("bloqueada");
    } else {
      mat.classList.remove("bloqueada");
    }

    if (aprobada) {
      mat.classList.add("aprobada");
    } else {
      mat.classList.remove("aprobada");
    }
  });
}

materias.forEach((ciclo) => {
  const div = document.createElement("div");
  div.classList.add("ciclo");

  const titulo = document.createElement("h2");
  titulo.textContent = `Ciclo ${ciclo.ciclo}`;
  div.appendChild(titulo);

  ciclo.materias.forEach((m) => {
    const mat = document.createElement("div");
    mat.classList.add("materia");
    if (m.electiva) mat.classList.add("electiva");

    mat.dataset.codigo = m.codigo;
    mat.dataset.prerequisitos = JSON.stringify(m.prerequisitos || []);

    mat.innerHTML = `
      <div class="codigo">${m.codigo} <span class="uv">${m.uv} UV</span></div>
      <div class="nombre">${m.nombre}</div>
      <div class="tipo">${m.electiva ? "(Electiva)" : "(Obligatoria)"}</div>
    `;

    mat.addEventListener("click", () => {
      const aprobado = !estadoMaterias[m.codigo];
      estadoMaterias[m.codigo] = aprobado;
      localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
      actualizarEstado();
    });

    div.appendChild(mat);
  });

  malla.appendChild(div);
});

actualizarEstado();
