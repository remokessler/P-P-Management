import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './appRoot/app.component';
import { NavigationComponent} from './navigation/navigation.component';

import {RouterModule, Routes} from '@angular/router';
import {DetailPages} from './detailPages/detailPages';
import {NonePlayerCharacterComponent} from './detailPages/nonePlayerCharacter/nonePlayerCharacter.component';
import {PlayerCharacterComponent} from './detailPages/playerCharacter/playerCharacter.component';

const appRoutes: Routes = [
	{ path: 'npc', component: NonePlayerCharacterComponent },
	{ path: 'npc/:id', component: NonePlayerCharacterComponent },
	{ path: 'pc', component: PlayerCharacterComponent },
	{ path: 'pc/:id', component: PlayerCharacterComponent },
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
