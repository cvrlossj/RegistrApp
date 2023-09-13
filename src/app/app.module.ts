import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {ZXingScannerModule} from '@zxing/ngx-scanner';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ZXingScannerModule
  ],
  declarations: [AppComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
