import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrasena',
  imports: [FormsModule, CommonModule],
  templateUrl: './contrasena.html',
  styleUrl: './contrasena.css',
})
export class Contrasena {

  longitud: number = 12;
  incluirMayusculas: boolean = true;
  incluirMinusculas: boolean = true;
  incluirNumeros: boolean = true;
  incluirSimbolos: boolean = true;
  contrasenaGenerada: string = '';
  copiado: boolean = false;

  generarContrasena(): void {
    if (!this.incluirMayusculas && !this.incluirMinusculas && !this.incluirNumeros && !this.incluirSimbolos) {
      alert('Debes seleccionar al menos una opción');
      return;
    }

    let caracteres = '';
    
    if (this.incluirMayusculas) {
      caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.incluirMinusculas) {
      caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.incluirNumeros) {
      caracteres += '0123456789';
    }
    if (this.incluirSimbolos) {
      caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    this.contrasenaGenerada = '';
    for (let i = 0; i < this.longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      this.contrasenaGenerada += caracteres[indice];
    }
  }

  copiarAlPortapapeles(): void {
    if (this.contrasenaGenerada) {
      navigator.clipboard.writeText(this.contrasenaGenerada).then(() => {
        this.copiado = true;
        setTimeout(() => {
          this.copiado = false;
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar: ', err);
      });
    }
  }

}
