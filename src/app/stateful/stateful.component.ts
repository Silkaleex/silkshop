import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})
export class StatefulComponent implements OnInit, OnDestroy {
  @ViewChild(ConfirmComponent, { static: false })
  confirmChild!: ConfirmComponent;
  errorHttp!: boolean;
  ShopModel: Shop = new Shop();
  boughtItems!: Array<Product>;
  private shopSubscription!: Subscription;
  http: any;
  shopModel: any;
  constructor() {
    this.boughtItems = [];
    // this.ShopModel = { shopItems: [] };
  }

  ngOnInit(): void {
    // this.shopSubscription = this.http.get('../../assets/cursos.json').subscribe(
    //   (respuesta: Response) => {
    //     this.ShopModel.shopItems = respuesta;
    //   },
    //   (respuesta: Response) => {
    //     this.errorHttp = true;
    //   }
    // );
    this.onGlobalKeyboard();
  }
  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
    document.removeEventListener('keypress', this.onKeyboard);
  }
  clickItem(_curso: Product) {
    this.boughtItems.push(_curso);
  }
  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
    this.onConfirm();
    this.confirmChild.isDisabled = false;
  }
  finalPrice() {
    //   if (this.boughtItems) {
    //     return this.boughtItems.reduce(
    //       (prev: number, item: any) => prev + item.price,
    //       0
    //     );
    //   }
  }
  onConfirm() {
    alert('Has selecionado un nuevo curso');
  }
  onKeyboard(_event: any) {
    console.log(_event);
    if (_event.key == 'Enter') {
      this.onConfirm();
    }
  }
  onGlobalKeyboard() {
    document.addEventListener('keypress', (eventoGlobal) => {
      this.onKeyboard(eventoGlobal);
    });
  }
}
