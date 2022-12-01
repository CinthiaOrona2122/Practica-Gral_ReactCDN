//El estado de un componente es un Hook que puede ser llamado, desde otro lugar.
//Es semenjante a las props. El cambio se pasa al componente renderizable.
//Tambien es un objeto. Cada variable (ej. count), puede usarse en diferentes partes para la interfaz.

//Lo diferente:
//No se pasan por argumentos, existe una constante que devuelve un array con 2 valores, la variable como tal y una funcion que la modifica.
//  const [count, setCount] = useState();

//A diferencia de las props, los valores si se pueden modificar, por el metodo set. 

//Pregunta:  Como podemos tener la cuenta de los productos agregados al carrito
//Respuesta: a travez del estado del componente

// const [, set] = useState(); //el estado lo vemos x el objeto state.

const ProductosCart = () => {

  const [count, setCount] = React.useState(0);

  const handleAddProd = () => {
    setCount(count + 1);
  };
  const handleRemoveProd = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h2>Cantidad de Productos: {count}</h2>
      <button onClick={handleAddProd}>Adicionar</button>
      <button onClick={handleRemoveProd}>Remover</button>
    </>
  );
};

ReactDOM.render(<ProductosCart />, document.getElementById("container"));

// Los eventos de los botones van entre {} y ejecutan una funcion.
// Además esas funciones se crean dentro del componente que las utiliza.
