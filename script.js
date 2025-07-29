const materias = [
  {
    ciclo: 1,
    materias: [
      { codigo: "FIG178", uv: 3, nombre: "Filosofía General", electiva: false, prerequisitos: [] },
      { codigo: "INE178", uv: 4, nombre: "Introducción a la Economía I", electiva: false, prerequisitos: [] },
      { codigo: "MAT178", uv: 5, nombre: "Matemática I", electiva: false, prerequisitos: [] },
      { codigo: "TAD178", uv: 3, nombre: "Teoría Administrativa I", electiva: false, prerequisitos: [] }
    ]
  },
  {
    ciclo: 2,
    materias: [
      { codigo: "INE278", uv: 4, nombre: "Introducción a la Economía II", electiva: false, prerequisitos: ["INE178"] },
      { codigo: "MAT278", uv: 5, nombre: "Matemática II", electiva: false, prerequisitos: ["MAT178"] },
      { codigo: "SOG178", uv: 3, nombre: "Sociología General", electiva: false, prerequisitos: ["FIG178"] },
      { codigo: "TAD278", uv: 3, nombre: "Teoría Administrativa II", electiva: false, prerequisitos: ["TAD178"] }
    ]
  },
  {
    ciclo: 3,
    materias: [
      { codigo: "COF178", uv: 4, nombre: "Contabilidad Financiera I", electiva: false, prerequisitos: ["TAD278"] },
      { codigo: "ING178", uv: 2, nombre: "Inglés I", electiva: false, prerequisitos: [] },
      { codigo: "MAT378", uv: 5, nombre: "Matemática III", electiva: false, prerequisitos: ["MAT278"] },
      { codigo: "MIC178", uv: 4, nombre: "Microeconomía I", electiva: false, prerequisitos: ["INE278", "MAT278"] },
      { codigo: "TDI178", uv: 3, nombre: "Técnicas de Investigación", electiva: false, prerequisitos: ["INE278", "SOG178"] }
    ]
  },
  {
    ciclo: 4,
    materias: [
      { codigo: "COF278", uv: 4, nombre: "Contabilidad Financiera II", electiva: false, prerequisitos: ["COF178"] },
      { codigo: "DME178", uv: 3, nombre: "Derecho Mercantil I", electiva: false, prerequisitos: ["COF178"] },
      { codigo: "ING278", uv: 2, nombre: "Inglés II", electiva: false, prerequisitos: ["ING178"] },
      { codigo: "MAC178", uv: 4, nombre: "Macroeconomía I", electiva: false, prerequisitos: ["MIC178", "TDI178"] },
      { codigo: "MAF178", uv: 5, nombre: "Matemática Financiera", electiva: false, prerequisitos: ["MAT378"] }
    ]
  },
  {
    ciclo: 5,
    materias: [
      { codigo: "COM178", uv: 2, nombre: "Computación I", electiva: false, prerequisitos: [] },
      { codigo: "CCO178", uv: 4, nombre: "Contabilidad de Costos I", electiva: false, prerequisitos: ["COF278"] },
      { codigo: "DME278", uv: 3, nombre: "Derecho Mercantil II", electiva: false, prerequisitos: ["DME178"] },
      { codigo: "EST178", uv: 5, nombre: "Estadística I", electiva: false, prerequisitos: ["MAF178"] },
      { codigo: "PSO178", uv: 4, nombre: "Psicología Organizacional", electiva: false, prerequisitos: ["DME178", "TDI178"] }
    ]
  },
  {
    ciclo: 6,
    materias: [
      { codigo: "COM278", uv: 2, nombre: "Computación II", electiva: false, prerequisitos: ["COM178", "ING178"] },
      { codigo: "CCO278", uv: 4, nombre: "Contabilidad de Costos II", electiva: false, prerequisitos: ["CCO178"] },
      { codigo: "DLA178", uv: 3, nombre: "Derecho Laboral", electiva: false, prerequisitos: ["DME278"] },
      { codigo: "EST278", uv: 5, nombre: "Estadística II", electiva: false, prerequisitos: ["EST178"] },
      { codigo: "SIO178", uv: 3, nombre: "Sistemas Organizacionales", electiva: false, prerequisitos: ["EST178", "PSO178"] }
    ]
  },
  {
    ciclo: 7,
    materias: [
      { codigo: "APE178", uv: 4, nombre: "Administración de Personal I", electiva: false, prerequisitos: ["DLA178", "SIO178"] },
      { codigo: "ASU178", uv: 3, nombre: "Administración Superior", electiva: false, prerequisitos: ["SIO178"] },
      { codigo: "CVA178", uv: 4, nombre: "Costeo Variable", electiva: false, prerequisitos: ["CCO278", "EST278"] },
      { codigo: "MER178", uv: 4, nombre: "Mercadotecnia I", electiva: false, prerequisitos: ["EST278", "MAC178"] }
    ]
  },
  {
    ciclo: 8,
    materias: [
      { codigo: "APR178", uv: 4, nombre: "Administración de la Producción I", electiva: false, prerequisitos: ["CVA178", "MER178"] },
      { codigo: "APE278", uv: 4, nombre: "Administración de Personal II", electiva: false, prerequisitos: ["APE178"] },
      { codigo: "EDP178", uv: 3, nombre: "Ética y Desarrollo Profesional", electiva: false, prerequisitos: ["APE178"] },
      { codigo: "MER278", uv: 4, nombre: "Mercadotecnia II", electiva: false, prerequisitos: ["MER178"] }
    ]
  },
  {
    ciclo: 9,
    materias: [
      { codigo: "APE378", uv: 4, nombre: "Administración de Personal III", electiva: true, prerequisitos: ["APE278"] },
      { codigo: "ADF178", uv: 4, nombre: "Administración Financiera I", electiva: false, prerequisitos: ["CVA178"] },
      { codigo: "APU178", uv: 4, nombre: "Administración Pública", electiva: false, prerequisitos: ["APE278"] },
      { codigo: "MIN178", uv: 4, nombre: "Mercadeo Internacional", electiva: true, prerequisitos: ["MER278"] },
      { codigo: "SCO178", uv: 4, nombre: "Sistemas Computacionales", electiva: false, prerequisitos: ["ASU178"] }
    ]
  },
  {
    ciclo: 10,
    materias: [
      { codigo: "APR278", uv: 4, nombre: "Administración de la Producción II", electiva: true, prerequisitos: ["APR178"] },
      { codigo: "ADF278", uv: 4, nombre: "Administración Financiera II", electiva: false, prerequisitos: ["ADF178"] },
      { codigo: "FEP178", uv: 5, nombre: "Formulación y Evaluación de Proyectos", electiva: false, prerequisitos: ["ADF178", "APR178"] },
      { codigo: "SFI178", uv: 4, nombre: "Seminario de Finanzas", electiva: true, prerequisitos: ["ADF178"] },
      { codigo: "TPR178", uv: 5, nombre: "Técnicas Presupuestarias", electiva: false, prerequisitos: ["ADF178"] }
    ]
  }
];

// Referencia al contenedor
const malla = document.getElementById("malla");

// Objeto para guardar estados (aprobadas o no)
const estadoMaterias = {};

// Cargar estado guardado de localStorage (si existe)
const guardado = localStorage.getItem("estadoMaterias");
if (guardado) {
  Object.assign(estadoMaterias, JSON.parse(guardado));
}

// Función que verifica si están aprobados todos los prerequisitos
function tienePrerequisitosAprobados(prereqs) {
  if (!prereqs || prereqs.length === 0) return true;
  return prereqs.every(codigo => estadoMaterias[codigo]);
}

// Actualiza visualmente cada materia según su estado y prerequisitos
function actualizarEstado() {
  document.querySelectorAll(".materia").forEach(mat => {
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

// Crear la malla y agregar materias al DOM
materias.forEach(ciclo => {
  const div = document.createElement("div");
  div.classList.add("ciclo");

  const titulo = document.createElement("h2");
  titulo.textContent = `Ciclo ${ciclo.ciclo}`;
  div.appendChild(titulo);

  ciclo.materias.forEach(m => {
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
      const aprobado = mat.classList.contains("aprobada");

      if (aprobado) {
        // Si ya está aprobado, al hacer click se desaprueba
        estadoMaterias[m.codigo] = false;
      } else if (tienePrerequisitosAprobados(m.prerequisitos)) {
        // Solo aprueba si prerequisitos están aprobados
        estadoMaterias[m.codigo] = true;
      } else {
        // No permite aprobar si no tiene los prerequisitos
        return;
      }

      localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
      actualizarEstado();
    });

    div.appendChild(mat);
  });

  malla.appendChild(div);
});

// Actualiza la interfaz inicialmente según estado guardado
actualizarEstado();
