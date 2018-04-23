import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
    {
        path: 'boards',
        loadChildren: 'app/boards/boards.module#BoardsModule'
    },
    {
        path: '**',
        component: WelcomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )

    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {}