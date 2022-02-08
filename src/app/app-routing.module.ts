import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionAComponent } from './components/section-a/section-a.component';
import { SectionBComponent } from './components/section-b/section-b.component';
import { SectionCComponent } from './components/section-c/section-c.component';
import { SectionC1Component } from './components/section-c1/section-c1.component';
import { SectionC2Component } from './components/section-c2/section-c2.component';

const routes: Routes = [
  {
    path:'', component : HomeComponent, 
    data: {
      url: '/',
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'sec-b',component:SectionBComponent,
        data: {
          url: '/sec-b',
          breadcrumb: 'Sec-B'
        }
      },
      {
        path: 'sec-c',component:SectionCComponent,
        data: {
          url: '/sec-c',
          breadcrumb: 'Sec-C'
        },
        children:
        [
          {
            path: '', redirectTo: 'c1', pathMatch:'full'
          },
          {
            path: 'c1',component:SectionC1Component,
            data: {
              url: '/c1',
              breadcrumb: 'C1'
            },
          },
          {
            path: 'c2',component:SectionC2Component,
            data: {
              url: '/c2',
              breadcrumb: 'C2'
            },
          }
        ]
      }
    ]
  },
  {
    path: 'sec-a',component:SectionAComponent,
    data: {
      url: '/sec-a',
      breadcrumb: 'Sec-A'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
