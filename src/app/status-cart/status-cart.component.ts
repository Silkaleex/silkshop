import {
  Component,
  OnInit,
  Output,
  OnChanges,
  DoCheck,
  EventEmitter,
  SimpleChanges,
  Input,
} from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css'],
})
export class StatusCartComponent implements OnInit, DoCheck {
  @Input() price!: any;
  @Input()
  shopModel!: Array<Product>;
  @Output() add: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    console.log('Interacion con el Dom');
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }
  confirm() {
    this.add.emit();
  }
}
