import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  /*{ path: 'client', children:[
      { path: 'client-start', loadChildren: () => import('./modules/client-start/client-start.module').then(m => m.ClientStartModule) },
      { path: 'movie-catalog', loadChildren: () => import('./modules/movie-catalog/movie-catalog.module').then(m => m.MovieCatalogModule) },
    ] 
  },
  {
    path: 'admin', canActivate:[AdminGuard] , children:[
      { path: 'admin-start', loadChildren: () => import('./modules/admin-start/admin-start.module').then(m => m.AdminStartModule) },
      { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
      { path: 'clients', loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule) },
      { path: 'premieres', loadChildren: () => import('./modules/premieres/premieres.module').then(m => m.PremieresModule) },
      { path: 'roles', loadChildren: () => import('./modules/roles/roles.module').then(m => m.RolesModule) },
      { path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule) },
      { path: 'branch', loadChildren: () => import('./modules/branch/branch.module').then(m => m.BranchModule) },
      { path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
    ]
  },*/
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
