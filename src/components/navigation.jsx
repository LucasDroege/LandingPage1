import React from "react";

export const Navigation = (props) => {
  return (
    <>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Soluciones Eléctricas 24hs
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Botones Flotantes de Contacto Urgente */}
      <div className="btn-flotantes-contenedor">
        {/* Botón de Llamada Directa */}
        <a href="tel:+5491166276594" className="btn-flotante llamar" title="Llamar Ahora">
          <i className="fa fa-phone"></i>
          <span>Llamar</span>
        </a>

        {/* Botón de WhatsApp */}
        <a 
          href="https://wa.me" 
          className="btn-flotante whatsapp" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Enviar WhatsApp"
        >
          <i className="fa fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

