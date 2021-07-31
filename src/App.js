import Fazt from "./components/ejemplo_data_un_objeto/Fazt";
import ArrayObjetos from "./components/ejemplo_array_de_objetos/ArrayObjetos";

import PruebaProps from "./components/props/PruebaProps";

import { NavLink, Switch, Route } from "react-router-dom";

import { OverleyZoom } from "./components/efecto_overley_zoom/OverlayZoom";

// import PruebaProps2 from "./components/props2/PruebaProps2";
// import data from "./components/props2/objeto.json";

// import GlassForm from "./components/login_glass_form/GlassForm";

import Cookies from "./components/cookies/Cookies";

function App() {
  const logo = true;
  const colores = ["verde", "azoure", "gris"];
  return (
    <>
      <nav>
        <NavLink exact to="/">
          HOME
        </NavLink>
        <br />
        <NavLink to="/fazt">FAZT</NavLink>
        <br />
        <NavLink to="/array">ARRAY</NavLink>
      </nav>
      <hr />
      <p>{logo ? "Bienvenido" : "No logueado"}</p>
      <p>{2 + 1}</p>
      <ul>
        {colores.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <Switch>
        <Route exact path="/">
          <PruebaProps />
        </Route>
        <Route exact path="/fazt">
          <Fazt />
        </Route>
        <Route exact path="/array">
          <ArrayObjetos />
        </Route>
      </Switch>
      {/* <PruebaProps2 titulo={data.titulo} contenido={data.contenido} /> */}
      <OverleyZoom />
      {/* <GlassForm /> */}
      <Cookies />
    </>
  );
}

export default App;
