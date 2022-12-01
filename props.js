//El termino props deriva de atributos o propiedades y se asemejan a los del HTML.

//el props en este caso es un objeto.
//el componente recibe las propiedades text="", puestas en el renderizado.
//es decir, el esqueleto del componente y su renderizable se comunican por el props

const CourseTitle = (props) => {
  //...
};
<CourseTitle text="Curso de React" />;

/* Desestructurado del objeto props */

//  const {} = props;

const EjemploUno = (props) => {
  const { label, placeHolder } = props; //Extrayendo propiedades desde el objeto props.

  return (
    <>
      <label htmlFor="name">{props.label}</label>
      <input placeHolder={props.placeHolder} />
    </>
  );
};

/* Desestructurado del objeto props */
// const EjemploDos = ({ label, placeHolder }) => {}

const EjemploDos = ({ label, placeHolder }) => {
  //Mejor practica desestruct. en el argumento
  return (
    <>
      <label htmlFor="name">{label}</label>
      <input placeHolder={placeHolder} />
    </>
  );
};

/* Creamos el componente */
const CustomInput = ({ label, placeHolder }) => {
  return (
    <div className="mb-3">
      <label htmlFor="name">{label}</label>
      <input
        id="name"
        className="form-control"
        type="text"
        placeHolder={placeHolder}
      />
    </div>
  );
};

// const FormTitle = ({ text }) => {
//   return <h1>{text}</h1>;
// };

const FormTitle = ({ children }) => {
  //la propiedad children es reservada del objeto props, para los valores
  //que entren como hijos de nuestro componente.
  return <h1>{children}</h1>;
};

const CustomForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <form>
        {/* <FormTitle text="Formulario" /> */}
        <FormTitle>
          <span style={{fontWeight: "bolder", color: "red"}}>Formulario</span>
        </FormTitle>
        <CustomInput label="Nombre" placeHolder="Digite su nombre" />
        <CustomInput label="Edad" placeHolder="Digite su edad" />
        <CustomInput label="mail" placeHolder="Digite su mail" />
      </form>
    </div>
  );
};

ReactDOM.render(<CustomForm />, document.getElementById("container"));
