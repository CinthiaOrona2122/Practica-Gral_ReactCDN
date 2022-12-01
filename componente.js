//Codigo de cada componente a mostrar en la interfaz de usuario.
//Ejemplos: Navbar, Forms, Inputs validation, Links, Footer, etc.

//Formato de un componente :
/*
1- tagName <CourseTitle />
2- props <CourseTitle nombre="React 02"/>
*/

//Un componente es una función, pero tambien puede ser una clase ...

/* Ejemplo de componente simple */

const VideoTitle = () => {
  return <h5>Video 04: Componentes</h5>;
};

/* Ejemplo de componente anidado*/
//Todo lo que va después de un return debe ser 1 solo componente.
//Para eso usamos <></> ó en su defecto <div></div>.(Ojo, no pueden llevar la propiedad key="")
//En el caso de usar React.Fragment es solo para identificar "partes" con un identificador, llamado key="".
//Se utiliza con listas de componentes.
const CourseTitle = () => {
  return (
    <React.Fragment key="1">
      <h1>Curso de React</h1>
      <VideoTitle />
    </React.Fragment>
  );
};

ReactDOM.render(<CourseTitle />, document.getElementById("container"));
