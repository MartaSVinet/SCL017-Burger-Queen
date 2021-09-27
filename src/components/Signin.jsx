import React from 'react';
import {
  Link
} from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div>
        <h1>Acceso</h1>
      </div>
      <div>
        <form>
          <input type="email" placeholder="Correo electrónico"/>
          <input type="password" placeholder="Contraseña"/>
          <input type="submit" value="Inicia sesión"/>
        </form>
        <p>¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link></p>
      </div>
    </div>
  );
}

export default Signin;
