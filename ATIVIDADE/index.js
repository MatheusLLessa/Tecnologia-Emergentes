var container = document.getElementById('root');
var titulo = document.createElement('h1');
titulo.innerHTML = 'Título inserido por JavaScript :O';
container.appendChild(titulo);

var container = document.getElementById('root');
function Titulo() {
return (
<h1>Título inserido por JSX :D</h1>
)
}
ReactDOM.render(<Titulo />, container); // Versão antiga do react
ReactDOM.createRoot(container).render(<Titulo />)

var container = document.getElementById('root');
function Titulo() {
return (
<React.Fragment>
<h1>Esse título foi feito em react através do JSX :p</h1>
<h1>Esta segunda tag foi feita dentro do JSX :P</h1>
</React.Fragment>
)
}
ReactDOM.createRoot(container).render(<Titulo />);

var container = document.getElementById("root");
function Titulo() {
return (
<React.Fragment>
<h1>Esse título foi feito em react através do JSX :p</h1>
<h1>Esta segunda tag foi feita dentro do JSX :P</h1>
</React.Fragment>
);
}
function Titulos() {
return (
<div>
<Titulo />
<Titulo />
<Titulo />
</div>
);
}
ReactDOM.createRoot(container).render(<Titulos />);

var container = document.getElementById("root");
function Titulo(props) {
return (
<React.Fragment>
<h1>{props.titulo}</h1>
<h2>{props.descricao}</h2>
</React.Fragment>
);
}
function Titulos() {
return (
<>
<Titulo titulo="Titulo legal" descricao="Descrição TOP" />
<Titulo titulo="Titulo legal legal" descricao="Descrição TOP TOP" />
<Titulo titulo="Titulo legal legal legal" descricao="Descrição TOP TOP
TOP" />
</>
);
}
ReactDOM.createRoot(container).render(<Titulos />);