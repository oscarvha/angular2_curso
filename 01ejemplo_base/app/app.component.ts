// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
	//El selector es donde se van a incluir el componente
    selector: 'mi-app',
    //Que va llevar el componente puede ser un archivos externo
    template: `<h1>{{titulo}}</h1>
    <ul>
    <li><strong>Titulo: </strong> {{pelicula}}</li>
    <li><strong>Director: </strong>{{director}}</li>
	<li><strong>Año: </strong>{{anyo}}</li>
    </ul>`
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {

public titulo:string ="Peliculas con angular 2";
public pelicula:string ="Batman vs Superman";
public director:string = "Zack Snider";
public anyo:number =2016;
}

 