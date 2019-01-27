import { ModuleWithProviders } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { Routes, RouterModule } from "@angular/router";
import { NewQuoteComponent } from './new-quote/new-quote.component';

const APP_ROUTES: Routes = [
    {path: '', component: QuotesComponent},
    {path: 'new-quote', component: NewQuoteComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);