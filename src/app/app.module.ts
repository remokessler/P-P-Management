import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './appRoot/app.component';
import { NavigationComponent} from './navigation/navigation.component';

import {RouterModule, Routes} from '@angular/router';
import {DetailPages} from './detailPages/detailPages';
import {NonePlayerCharacterPageComponent} from './detailPages/nonePlayerCharacterPage/nonePlayerCharacterPage.component';
import {PlayerCharacterPageComponent} from './detailPages/playerCharacterPage/playerCharacterPage.component';

const appRoutes: Routes = [
	{ path: 'npc', component: NonePlayerCharacterPageComponent },
	{ path: 'npc/:id', component: NonePlayerCharacterPageComponent },
	{ path: 'pc', component: PlayerCharacterPageComponent },
	{ path: 'pc/:id', component: PlayerCharacterPageComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		DetailPages
	],
	imports: [
		NgbModule.forRoot(),
		RouterModule.forRoot(
		appRoutes
	),
	BrowserModule
	],
	exports: [...DetailPages],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
