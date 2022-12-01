const containerElement = document.getElementById('container');

//CREANDO Y RENDERIZANDO UN ELEMENTO CON JAVASCRIPT PUTO
// const headerElement = document.createElement('h1');
// headerElement.textContent = "Curso de React: 02 Javascript puro";
// containerElement.appendChild(headerElement);


//CREANDO Y RENDERIZANDO UN ELEMENTO DE REACT (CDN Link)
const headerElement = React.createElement('h1', {
    children: "Curso de React 02: React CDN Link"
});

ReactDOM.render(headerElement, containerElement);