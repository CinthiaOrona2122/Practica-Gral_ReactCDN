//COMPONENTE FUNCIONAL
const FunctionalComponent = ({ children }) => {
  //Se crea el useState dentro del componente
  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    if (count > 0) setCount(count - 1);
  };

  //   React.useEffect(() => {
  //     console.log("Componente Func. Renderizando con Dep. vacia");
  //   }, []); //ejecutamos una sola vez

  React.useEffect(() => {
    console.log("Componente Func. Renderizando con Dependencia 'count' ");
  }, [count]); //ejecutamos al ejecutar la dependencia

  React.useEffect(() => {
    return () => {
      console.log("Desmontando el componente Funcional");
    };
  }, []);//ejecutamos  

  return (
    <>
      <h4>{children}</h4>
      <div>
        <h2>Contador: {count}</h2>
        <button onClick={handleAdd}>Sumar</button>
        <button onClick={handleRemove}>Restar</button>
      </div>
    </>
  );
};

//COMPONENTE DE CLASE

/* super(props) es el llamado a la clase padre React.Component */
class ClassComponente extends React.Component {
  constructor(props) {
    super(props);
    //Se crea el objeto 'estado' dentro del constructor de clase, y va a ser un atributo más de la propia clase.
    //Para ello utilizamos, "this.state = {}". Dentro va a tener todos los estados que yo quiero para este componente.
    this.state = {
      count: 0,
    };
  }

  handleAdd = () => {
    //Utilizo el metodo heredado y modifico el estado a travez del this.
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleRemove = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //Etapa de Montaje, Fase Render
    componentDidMount() {
      console.log(
        "Componente de clase, renderizando después de montar el componente"
      );
    }

  //Etapa de Actualizacion, Fase commit
  componentDidUpdate() {
    console.log(
      "Componente de clase, renderizando después de actualizar el componente"
    );
  }

  //Etapa de Desmontaje, Fase Re-Render
  componentWillUnmount() {
    console.log("Componente de clase, Desmontando el componente");
  }

  render() {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div>
          <h2>Contador: {this.state.count}</h2>
          <button onClick={this.handleAdd}>Sumar</button>
          <button onClick={this.handleRemove}>Restar</button>
        </div>
      </>
    );
  }
}

const App = () => {
  //Manejo la visibilidad de los componentes (funcional y de clase), desde el principal 'App' o contenedor.

  const [visibility, setVisibility] = React.useState(true);
  const handleToggle = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <h1>Componente funcional Vs. Componente de Clase</h1>
      <button onClick={handleToggle}>Toggle</button>
      <hr />
      {visibility ? (
        //Se coloca entre <>fragmento</> porque es boolean y debe ser una expresion
        <>
          <FunctionalComponent>Componente Funcional</FunctionalComponent>
          <ClassComponente>Componente de Clase</ClassComponente>
        </>
      ) : null}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));

//console.log("hola");

/*
En esta clase, se tratan temas, en el siguiente orden:

1- props
2- estado del componente ...useState(0)  ó this.state = {...} / this.setState({...})
3- ciclo de vida del componente useEffect ó comp..DidMount


*/
