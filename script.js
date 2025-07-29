const materias = [
  {
    ciclo: 1,
    materias: [
      { codigo: "FIG178", nombre: "Filosofía General", uv: 3, electiva: false },
      { codigo: "INE178", nombre: "Introducción a la Economía I", uv: 4, electiva: false },
      { codigo: "MAT178", nombre: "Matemática I", uv: 5, electiva: false },
      { codigo: "TAD178", nombre: "Teoría Administrativa I", uv: 3, electiva: false },
    ]
  },
  {
    ciclo: 2,
    materias: [
      { codigo: "INE278", nombre: "Introducción a la Economía II", uv: 4, electiva: false, prerequisitos: ["INE178"] },
      { codigo: "MAT278", nombre: "Matemática II", uv: 5, electiva: false, prerequisitos: ["MAT178"] },
      { codigo: "SOG178", nombre: "Sociología General", uv: 3, electiva: false, prerequisitos: ["FIG178"] },
      { codigo: "TAD278", nombre: "Teoría Administrativa II", uv: 3, electiva: false, prerequisitos: ["TAD178"] },
    ]
  },
  {
    ciclo: 3,
    materias: [
      { codigo: "COF178", nombre: "Contabilidad Financiera I", uv: 4, electiva: false, prerequisitos: ["TAD278"] },
      { codigo: "ING178", nombre: "Inglés I", uv: 2, electiva: false },
      { codigo: "MAT378", nombre: "Matemática III", uv: 5, electiva: false, prerequisitos: ["MAT278"] },
      { codigo: "MIC178", nombre: "Microeconomía I", uv: 4, electiva: false, prerequisitos: ["INE278", "MAT278"] },
      { codigo: "TDI178", nombre: "Técnicas de Investigación", uv: 3, electiva: false, prerequisitos: ["INE278", "SOG178"] },
    ]
  },
  {
    ciclo: 4,
    materias: [
      { codigo: "COF278", nombre: "Contabilidad Financiera II", uv: 4, electiva: false, prerequisitos: ["COF178"] },
      { codigo: "DME178", nombre: "Derecho Mercantil I", uv: 3, electiva: false, prerequisitos: ["COF178"] },
      { codigo: "ING278", nombre: "Inglés II", uv: 2, electiva: false, prerequisitos: ["ING178"] },
      { codigo: "MAC178", nombre: "Macroeconomía I", uv: 4, electiva: false, prerequisitos: ["MIC178", "TDI178"] },
      { codigo: "MAF178", nombre: "Matemática Financiera", uv: 5, electiva: false, prerequisitos: ["MAT378"] },
    ]
  },
  {
    ciclo: 5,
    materias: [
      { codigo: "COM178", nombre: "Computación I", uv: 2, electiva: false },
      { codigo: "CCO178", nombre: "Contabilidad de Costos I", uv: 4, electiva: false, prerequisitos: ["COF278"] },
      { codigo: "DME278", nombre: "Derecho Mercantil II", uv: 3, electiva: false, prerequisitos: ["DME178"] },
      { codigo: "EST178", nombre: "Estadística I", uv: 5, electiva: false, prerequisitos: ["MAF178"] },
      { codigo: "PSO178", nombre: "Psicología Organizacional", uv: 4, electiva: false, prerequisitos: ["DME178", "TDI178"] },
    ]
  },
  {
    ciclo: 6,
    materias: [
      { codigo: "COM278", nombre: "Computación II", uv: 2, electiva: false, prerequisitos: ["COM178", "ING178"] },
      { codigo: "CCO278", nombre: "Contabilidad de Costos II", uv: 4, electiva: false, prerequisitos: ["CCO178"] },
      { codigo: "DLA178", nombre: "Derecho Laboral", uv: 3, electiva: false, prerequisitos: ["DME278"] },
      { codigo: "EST278", nombre: "Estadística II", uv: 5, electiva: false, prerequisitos: ["EST178"] },
      { codigo: "SIO178", nombre: "Sistemas Organizacionales", uv: 3, electiva: false, prerequisitos: ["EST178", "PSO178"] },
    ]
  },
  {
    ciclo: 7,
    materias: [
      { codigo: "APE178", nombre: "Administración de Personal I", uv: 4, electiva: false, prerequisitos: ["DLA178", "SIO178"] },
      { codigo: "ASU178", nombre: "Administración Superior", uv: 3, electiva: false, prerequisitos: ["SIO178"] },
      { codigo: "CVA178", nombre: "Costeo Variable", uv: 4, electiva: false, prerequisitos: ["CCO278", "EST278"] },
      { codigo: "MER178", nombre: "Mercadotecnia I", uv: 4, electiva: false, prerequisitos: ["EST278", "MAC178"] },
    ]
  },
  {
    ciclo: 8,
    materias: [
      { codigo: "APR178", nombre: "Administración de la Producción I", uv: 4, electiva: false, prerequisitos: ["CVA178", "MER178"] },
      { codigo: "APE278", nombre: "Administración de Personal II", uv: 4, electiva: false, prerequisitos: ["APE178"] },
      { codigo: "EDP178", nombre: "Ética y Desarrollo Profesional", uv: 3, electiva: false, prerequisitos: ["APE178"] },
      { codigo: "MER278", nombre: "Mercadotecnia II", uv: 4, electiva: false, prerequisitos: ["MER178"] },
    ]
  },
  {
    ciclo: 9,
    materias: [
      { codigo: "APE378", nombre: "Administración de Personal III", uv: 4, electiva: true, prerequisitos: ["APE278"] },
      { codigo: "ADF178", nombre: "Administración Financiera I", uv: 4, electiva: false, prerequisitos: ["CVA178"] },
      { codigo: "APU178", nombre: "Administración Pública", uv: 4, electiva: false, prerequisitos: ["APE278"] },
      { codigo: "MIN178", nombre: "Mercadeo Internacional", uv: 4, electiva: true, prerequisitos: ["MER278"] },
      { codigo: "SCO178", nombre: "Sistemas Computacionales", uv: 4, electiva: false, prerequisitos: ["ASU178"] },
    ]
  },
  {
    ciclo: 10,
    materias: [
      { codigo: "APR278", nombre: "Administración de la Producción II", uv: 4, electiva: true, prerequisitos: ["APR178"] },
      { codigo: "ADF278", nombre: "Administración Financiera II", uv: 4, electiva: false, prerequisitos: ["ADF178"] },
      { codigo: "FEP178", nombre: "Formulación y Evaluación de Proyectos", uv: 5, electiva: false, prerequisitos: ["ADF178", "APR178"] },
      { codigo: "SFI178", nombre: "Seminario de Finanzas", uv: 4, electiva: true, prerequisitos: ["ADF178"] },
      { codigo: "TPR178", nombre: "Técnicas Presupuestarias", uv: 5, electiva: false, prerequisitos: ["ADF178"] },
    ]
  },
];

const malla = document.getElementById("malla");
const estadoMaterias = {};

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
      mat.classList.toggle("aprobada");
      const aprobado = mat.classList.contains("aprobada");
      estadoMaterias[m.codigo] = aprobado;
      actualizarEstado();
    });

    estadoMaterias[m.codigo] = false;
    div.appendChild(mat);
  });

  malla.appendChild(div);
});

actualizarEstado();
