//El useEffect es un hook (funcion) que permite tratar efectos secundarios basándose en las etapas del ciclo de vida del componente
//Estos efectos secundarios pueden ser: llamadas a una API, o de la manipulacion directa del DOM de la aplicación.

/* Sintaxis */
//se reciben hasta 2 parametros.
//useEffect(() => {}, []){};

const CustomTitle = ({ children }) => {
  //se renderiza cuando se "desmonta" el componente titulo
  React.useEffect(() => {
    return () => {
      console.log("Desmontando titulo");
    };
  });

  return <h3>{children}</h3>;
};

const LifeCycle = () => {
  const [visible, setVisible] = React.useState(true);
  const [visible2, setVisible2] = React.useState(true);

  //funcion que manipula la visibilidad del titulo
  const handleShowTitle = () => {
    setVisible(!visible);
  };

  //funcion que NO hace nada, solo está de ejemplo
  const handleShowTitle2 = () => {
    setVisible2(!visible2);
  };

  //se renderiza con cada cambio (Montaje y Actualizaciones)
  React.useEffect(() => {
    console.log("sin dependencias");
  });

  //se renderiza x unica vez (Montaje), es el mas util si llamamos API's
  React.useEffect(() => {
    console.log("con dependencia vacia");
  }, []);

  //se renderiza con cada cambio que sufre dicha dependencia
  React.useEffect(() => {
    console.log("con una dependencia");
  }, [visible]);

  //se renderiza con cambios en la dependencia useState = visible
  //pero no hace nada por la otra useState= visible2
  React.useEffect(() => {
    console.log("con una, de varias dependencia");
  }, [visible]);

  return (
    <>
      {visible ? <CustomTitle>Life Cycle - useEffect</CustomTitle> : null}
      <button onClick={handleShowTitle}>Show title</button>
      <button onClick={handleShowTitle2}>No hace nada</button>
    </>
  );
};
ReactDOM.render(<LifeCycle />, document.getElementById("container"));

/*
useEffect((primerParametro) => {  --Es otra función. Estos continen la logica del ciclo en el que nos encontramos
    
}, [segundoParametro]); --Es un array de dependencias. 
                        --Asociadas a alguna props recibida por el componente o al propio estado del componente.

                            
*/

/* Fases del ciclo de vida de React  */
//1°- Fase render   -> se muestra lado cliente
//2°- Fase commit   -> se manipula el componente, despues que se ha renderizado.

/* Para esas 2 fases, existen 3 Etapas */
//1°- Mounting   -> Montaje, es cuando se contruye y renderiza x 1° vez.
//2°- Updating   -> Actualizacion, ante cambios en las props o estado del propio componente, se renderiza.
//3°- Unmounting -> Desmontaje, se retira el componente del arbol del DOM de la aplicacion
