import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {

  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  private proximoId: number = 1;

  ngOnInit(): void {
    this.cargarTareas();
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: this.proximoId++,
        texto: this.nuevaTarea.trim(),
        completada: false
      };
      this.tareas.push(tarea);
      this.nuevaTarea = '';
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.guardarTareas();
  }

  toggleCompletada(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }

  guardarTareas(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  cargarTareas(): void {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
      if (this.tareas.length > 0) {
        this.proximoId = Math.max(...this.tareas.map(t => t.id)) + 1;
      }
    }
  }

  get cantidadTareas(): number {
    return this.tareas.length;
  }

  get cantidadCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

}
