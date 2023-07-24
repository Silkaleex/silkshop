import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateUrl } from '../validators/url.validators';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent implements OnInit {
  formulario!: FormGroup;
  mipattern!: '[a-z]*';
  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      user: [
        '',
        [
          Validators.required,
          [Validators.minLength(3)],
          Validators.pattern(this.mipattern),
        ],
      ],
      password: ['', Validators.required],
      url: ['', [Validators.required, validateUrl]],
    });
  }
  onsubmit(_datosForm: { value: any }) {
    console.log(_datosForm.value);
  }
}
