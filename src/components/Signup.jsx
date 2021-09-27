import React from 'react';
import {
  Link
} from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div>
        <h1>Registro</h1>
      </div>
      <div>
        <form>
          <input type="email" placeholder="Correo electrónico"/>
          <input type="password" placeholder="Contraseña"/>
          <input type="password" placeholder="Confirmar contraseña"/>
          <input type="submit" value="Regístrate"/>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/signin">Inicia sesión</Link></p>
      </div>
    </div>
  );
}

export default Signup;
