import "./Reviews.css";

export const Reviews = () => {
  return (
    <section className="w-100 d-flex justify-content-center">
      <div className="card">
        <header className="card-header text-center">
          <h3>⭐️ Reviews ⭐️</h3>
        </header>
        <main className="card-body row gap-2 d-flex justify-content-center">
          <article className="card col-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Diego</h4>
              <small className="fs-stars">⭐️⭐️⭐️/⭐️⭐️⭐️</small>
            </div>
            <div className="card-body">
              <p className="rw-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </article>
          <article className="card col-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Diego</h4>
              <small className="fs-stars">⭐️⭐️/⭐️⭐️⭐️</small>
            </div>
            <div className="card-body">
              <p className="rw-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </article>
          <article className="card col-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mv-0 me-1 fs-6">Diego</h4>
              <small className="fs-stars">⭐️/⭐️⭐️⭐️</small>
            </div>
            <div className="card-body">
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
