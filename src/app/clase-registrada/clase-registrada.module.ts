import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseRegistradaPageRoutingModule } from './clase-registrada-routing.module';

import { ClaseRegistradaPage } from './clase-registrada.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseRegistradaPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [ClaseRegistradaPage]
})
export class ClaseRegistradaPageModule {}
