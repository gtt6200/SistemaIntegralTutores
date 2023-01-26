import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SidebarComponent } from "./componentes/sidebar/sidebar.component";


// Dentro de este arreglo se encontraran todas las rutas del proyecto en angular 
// Almenos de la carpeta para el dashboard
const appRoute: Routes = [
    //Aqui se declara la ruta en donde se encontrará el componente en la web
    {path: '', component:SidebarComponent} //este será el componente de inicio
]

export const appRoutingProviders : any[]=[]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);