
import { Routes,RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';

const arr: Routes =[
  {path:'',component:HomepageComponent},
  {path:'Articles', component:MainComponent}

];

export const routerModule=RouterModule.forRoot(arr);
