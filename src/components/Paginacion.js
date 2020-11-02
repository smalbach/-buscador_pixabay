import React from "react";

const Paginacion = ({ guardarPaginaActual, paginaactual, totalpaginas }) => {
  const paginaAnterior = (e) => {
    e.preventDefault();
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  const paginaSiguiente = (e) => {
    e.preventDefault();
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${paginaactual === 1 ? "disabled" : null} `}>
          <a className="page-link" href="#" onClick={paginaAnterior}>
            Anterior
          </a>
        </li>

        <li
          className={`page-item }  ${
            paginaactual === totalpaginas ? "disabled" : null
          }`}
        >
          <a className="page-link" href="#" onClick={paginaSiguiente}>
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacion;
