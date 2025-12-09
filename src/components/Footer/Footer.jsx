import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="ft-container">
      <form className="ft-form-contact">
        <fieldset className="ft-fieldset">
          <legend className="ft-form-legent">Datos Personales</legend>
          <br />
          <label htmlFor="name">Nombre:</label>
          <input id="nombre" type="text" name="nombre" />
          <br />
          <label htmlFor="correo">Correo:</label>
          <input id="correo" type="email" name="correo" />
        </fieldset>
        <button className="btn btn-primary ft-form-btn">Contactar</button>
      </form>
      <small>Copyright© 2025 by Daniel Landa</small>
    </footer>
  );
};
