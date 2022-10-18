import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onsubmit(_datosForm: { value: any }) {
    console.log(_datosForm.value);
  }
}
