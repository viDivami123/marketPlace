import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopOrderedItemsComponent } from './top-ordered-items/top-ordered-items.component';
import { TaskNeedAttentionComponent } from './task-need-attention/task-need-attention.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductOnSaleComponent } from './product-on-sale/product-on-sale.component';
import { RecentlyVisitedItemsComponent } from './recently-visited-items/recently-visited-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TopOrderedItemsComponent,
    TaskNeedAttentionComponent,
    ParentComponentComponent,
    MarketplaceComponent,
    ProductOnSaleComponent,
    RecentlyVisitedItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
