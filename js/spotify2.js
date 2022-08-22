/*Grupo 7 de The Dev Girl
Mariana de Jesús Tapia Sisalema
Jenniffer Antepara
Osmelis Herrera
Emily Ortega*/

alert("Bienvevidos al reproductor THE DEV GIRLS");

var siguienteCancion = 0;
function Cancion(id, nombre, duracion, genero) {
    this.id = id;
    this.nombre = nombre;
    this.duracion = duracion;
    this.genero = genero;
}

var cancion1 = new Cancion(1, 'Amiga mía', 400, 'Romantica');
var cancion2 = new Cancion(2, 'Besos usados', 450, 'Romantica');
var cancion3 = new Cancion(3, 'Lo noto', 500, 'Romantica');
var cancion4 = new Cancion(4, 'In the end', 600, 'Rock');
var cancion5 = new Cancion(5, 'Celos', 200, 'Salsa');
var cancion6 = new Cancion(6, 'Mariposa traicionera', 490, 'Pop');
var cancion7 = new Cancion(7, 'Como la Flor', 100, 'Romantica');
var cancion8 = new Cancion(8, 'Despacito', 320, 'Salsa');
var cancion9 = new Cancion(9, 'No me doy por vencido', 520, 'Rock');
var cancion10 = new Cancion(10, 'Carnaval', 550, 'Romantica');
var cancion11 = new Cancion(11, 'De sol a sol', 150, 'Romantica');
var cancion12 = new Cancion(12, 'Amor mio', 230, 'Romantica');
var cancion13 = new Cancion(13, 'Somos novios', 650, 'Rock');
var cancion14 = new Cancion(14, 'Te amo', 330, 'Rock');
var playList = [cancion1, cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10, cancion11, cancion12, cancion13, cancion14];

function seleccionarCancion(id) {
    var cancion = playList[id];
    return cancion;
};

function desplegar(){
    
   console.log(playList);
   
}
    function play(){
        console.log (seleccionarCancion(siguienteCancion));
        
    }

    function siguiente(){
        siguienteCancion = siguienteCancion + 1;

        if(playList.length == siguienteCancion){
            siguienteCancion = 0;
        }

        console.log (seleccionarCancion(siguienteCancion));
    }

    function atras(){
        siguienteCancion = siguienteCancion - 1;

        if(siguienteCancion < 0){
            siguienteCancion = 0;
        }

        console.log (seleccionarCancion(siguienteCancion));
    }

    function stop(){
        console.log (seleccionarCancion(siguienteCancion));
        console.log("Detener musica");
    }

    function ordenar(){

        const boton_ordenar = [
            { nombre: 'Amiga mía', duracion: '400', genero: 'Romantica'},
            { nombre: 'Besos usados', duracion: '450', genero: 'Romantica'},
            { nombre: 'Lo noto', duracion: '500', genero: 'Romantica'},
            { nombre: 'In the end', duracion: '600', genero: 'Rock'},
            { nombre: 'Celos', duracion: '200', genero: 'Salsa'},
            { nombre: 'Mariposa traicionera', duracion:'490', genero: 'Pop'},
            { nombre: 'Como la Flor', duracion: '100', genero: 'Romantica'},
            { nombre: 'Despacito', duracion: '320', genero: 'Salsa'},
            { nombre: 'No me doy por vencido', duracion:'520', genero: 'Rock'},
            { nombre: 'Carnaval', duracion:'550', genero: 'Romantica'},
            { nombre: 'De sol a sol', duracion: '150', genero: 'Romantica'},
            { nombre: 'Amor mio', duracion: '230', genero: 'Romantica'},
            { nombre: 'Somos novios', duracion: '650', genero: 'Rock'},
            { nombre: 'Te amo', duracion: '330', genero: 'Rock'},
        ]
    
            const arreglar = boton_ordenar.sort((d1, d2) => {
                return d1.duracion - d2.duracion 
       })

            console.log(arreglar)
    
    }
