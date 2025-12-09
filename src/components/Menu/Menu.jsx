import "./Menu.css";

export const Menu = () => {
  return (
    <section className="bg-menu-list mt-3 w-100 d-flex justify-content-center">
      <div className="card">
        <header className="card-header text-center">
          <h3> 🍽️ Menu 🍽️</h3>
        </header>
        <main className="card-body row gap-2 d-flex justify-content-center">
          <hr />
          <h4 className="text-center">Café</h4>
          <hr />
          <article className="card col-5 col-lg-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Café Expresso</h4>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src="/public/imgMenuCafe/cafe-expresso.webp"
                alt="Imagen de una taza blanca con un cafe expresso"
              />
            </div>
            <div className="card-footer">
              <p className="rw-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </article>
          <article className="card col-5 col-lg-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Café Expresso</h4>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src="/public/imgMenuCafe/cafe-american.webp"
                alt="Imagen de una taza blanca con un cafe expresso"
              />
            </div>
            <div className="card-footer">
              <p className="rw-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </article>
          <hr />
          <h4 className="text-center">Pán</h4>
          <hr />
          <article className="card col-5 col-lg-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Sandwich</h4>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src="/public/imgMenuPan/pan-sandwich.webp"
                alt="Imagen de una taza blanca con un cafe expresso"
              />
            </div>
            <div className="card-footer">
              <p className="rw-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </article>
          <article className="card col-5 col-lg-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Sandwich Pavo</h4>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src="/public/imgMenuPan/pan-sandwich-pavo.webp"
                alt="Imagen de una taza blanca con un cafe expresso"
              />
            </div>
            <div className="card-footer">
              <p className="rw-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};
