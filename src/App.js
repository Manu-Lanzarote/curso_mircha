import "./App.css";
import Fazt from "./components/ejemplo_data_un_objeto/Fazt";
import ArrayObjetos from "./components/ejemplo_array_de_objetos/ArrayObjetos";

function App() {
  const logo = true;
  const colores = ["verde", "azoure", "gris"];
  return (
    <>
      <p>{logo ? "Bienvenido" : "No logueado"}</p>
      <p>{2 + 1}</p>
      <ul>
        {colores.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <Fazt />
      <ArrayObjetos />
    </>
  );
}

export default App;
