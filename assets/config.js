'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Sebastián Villegas",
	profesion: "Desarrollador Junior",
	correo: "sebasvil20@gmail.com",
	telefono: "+57 305 3190789",
	sitio: "https://sebasvil20.github.io/",
	perfil: "Técnico en desarrollo de software y actual estudiante tanto de Ingeniería Informática como de una tecnología en Análisis y desarrollo de sistemas de información. Me enfoco bastante al mundo del desarrollo web, donde cada vez voy aprendiendo mas. Todos mis avances los tienen disponibles en mi portafolio (Aun esta en proceso de desarrollo)",
	habilidades: {
		comunicativas:['Asertivo, ','Persuasivo, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo'],
		gestion: ['Liderazgo, ','Puntualidad, ' ,'Responsabilidad, ','Estrategias de Gestión, ','Análisis para toma de Decisiones'],
		tecnicas: ['Fullstack MERN, ', 'Javascript Vanilla, ', ' CSS, ', 'SASS, ', 'SQL, ', 'Python/dJango, ', 'Git.']
	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'Aprender, ', 'Video-Juegos']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	$('#sitio').html(persona.sitio);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}