const headerElement = (
  <div>
    <h1>Curso de React : probando JSX & Babel CDN</h1>
  </div>
);

ReactDOM.render(headerElement, document.getElementById("container"));

//Las expresiones entre llaves retornan un valor matematica o llamados a funcion
const videoNumber = () => {
  return <span style={{ color: "red" }}>{2 + 7}</span>;
};
const expresionConValor = <h2>Calculadora {videoNumber()}</h2>;

//Observar que si agregamos estilo en linea, va entre llaves doble "{{}}".

ReactDOM.render(expresionConValor, document.getElementById("container"));
