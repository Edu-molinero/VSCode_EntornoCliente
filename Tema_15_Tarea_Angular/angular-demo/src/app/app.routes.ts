import { Routes } from '@angular/router';
import { Tareas } from './tareas/tareas';
import { Contrasena } from './contrasena/contrasena';

export const routes: Routes = [
  { path: 'tareas', component: Tareas },
  { path: 'contrasena', component: Contrasena },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' }
];