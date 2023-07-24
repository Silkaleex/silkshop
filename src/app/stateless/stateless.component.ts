import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Product } from '../interface/product';
@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatelessComponent implements OnInit {
  @Output()
  cursoMatriculado: EventEmitter<Product> = new EventEmitter();
  @Input()
  product!: Product;
  clickItem: any;
  curso: any;
  public matricula!: String;
  private disable!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.matricula = 'Matriculate';
  }
  matriculars() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursoMatriculado.emit(this.product);
  }
  isDisable() {
    console.log(this.product.title);
    return !!this.disable;
  }
  mensaje() {
    alert('¿No te descargaras la imagen, verdad?');
  }
}
