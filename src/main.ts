import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from './app/services/confirmation.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="container">
      <header class="text-center mb-4">
        <h1 class="cursive" style="font-size: 3rem; color: #d4a373;">Gabriel e Laura</h1>
        <p style="font-size: 1.2rem; color: #666;">Convidam para seu casamento</p>
      </header>

      <main class="text-center">
        <div class="mb-4">
          <h2 class="cursive" style="font-size: 2rem; color: #d4a373;">Save the Date</h2>
          <p style="font-size: 1.5rem; color: #333;">10 de Janeiro de 2026</p>
        </div>

        <div class="mb-4">
          <h3 style="color: #666;">Cerimônia</h3>
          <p>17:00 horas</p>
          <p>Igreja Nossa Senhora da Paz</p>
          <p>Rua das Flores, 123 - Centro</p>
        </div>

        <div class="confirmation-form mt-4" style="max-width: 500px; margin: 0 auto;">
          <h3 style="color: #666;">Confirme sua presença</h3>
          <form [formGroup]="confirmationForm" (ngSubmit)="onSubmit()" style="text-align: left;">
            <div class="form-group mb-4">
              <label for="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                formControlName="name"
                class="form-control"
                style="width: 100%; padding: 8px; margin-top: 4px; border: 1px solid #ddd; border-radius: 4px;"
              >
              <div *ngIf="confirmationForm.get('name')?.touched && confirmationForm.get('name')?.invalid" 
                   style="color: red; font-size: 0.8rem; margin-top: 4px;">
                Nome completo é obrigatório
              </div>
            </div>

            <div class="form-group mb-4">
              <label for="document">CPF</label>
              <input 
                type="text" 
                id="document" 
                formControlName="document"
                class="form-control"
                style="width: 100%; padding: 8px; margin-top: 4px; border: 1px solid #ddd; border-radius: 4px;"
              >
              <div *ngIf="confirmationForm.get('document')?.touched && confirmationForm.get('document')?.invalid" 
                   style="color: red; font-size: 0.8rem; margin-top: 4px;">
                CPF é obrigatório
              </div>
            </div>

            <div class="form-group mb-4">
              <label for="key">Chave</label>
              <input 
                type="text" 
                id="key" 
                formControlName="key"
                class="form-control"
                style="width: 100%; padding: 8px; margin-top: 4px; border: 1px solid #ddd; border-radius: 4px;"
              >
              <div *ngIf="confirmationForm.get('key')?.touched && confirmationForm.get('key')?.invalid" 
                   style="color: red; font-size: 0.8rem; margin-top: 4px;">
                Chave é obrigatória
              </div>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary" 
              [disabled]="confirmationForm.invalid || isSubmitting"
              style="width: 100%;">
              {{ isSubmitting ? 'Enviando...' : 'Confirmar Presença' }}
            </button>

            <div *ngIf="submitSuccess" style="color: green; margin-top: 10px; text-align: center;">
              Presença confirmada com sucesso!
            </div>

            <div *ngIf="submitError" style="color: red; margin-top: 10px; text-align: center;">
              Erro ao confirmar presença. Tente novamente.
            </div>
          </form>
        </div>

        <footer class="mt-4">
          <p style="color: #666;">Traje: Social Completo</p>
          <p class="cursive" style="font-size: 1.5rem; color: #d4a373;">Contamos com a sua presença!</p>
        </footer>
      </main>
    </div>
  `,
})
export class App {
  confirmationForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.confirmationForm = this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      key: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.confirmationForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      this.confirmationService.submitConfirmation(this.confirmationForm.value).subscribe({
        next: (response) => {
          this.submitSuccess = true;
          this.confirmationForm.reset();
        },
        error: (error) => {
          this.submitError = true;
          console.error('Erro ao enviar confirmação:', error);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    ConfirmationService
  ]
});
