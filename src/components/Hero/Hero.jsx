import "./Hero.css";

export const Hero = () => {
  return (
    <section>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/public/imgHeroCafe/cafe-colando.png"
              className="d-block w-100"
              alt="Imagen que muestra el proceso de colada del cafe saliendo del envudo y desprendiendo el delicioso aroma"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/public/imgHeroCafe/sirviendo-cafe.png"
              className="d-block w-100"
              alt="Camarero sosteniendo la taza de cafe y creando un diseño con la espuma"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/public/imgHeroCafe/cafe-en-mesa.png"
              className="d-block w-100"
              alt="Una taza de café en una mesa de fondo un entorno acogedor"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <nav className="nav navbar">
        <a className="nav-link" href="#">
          Hero Link 1
        </a>
        <a className="nav-link" href="#">
          Hero Link 2
        </a>
        <a className="nav-link" href="#">
          Hero Link 3
        </a>
      </nav>
    </section>
  );
};
