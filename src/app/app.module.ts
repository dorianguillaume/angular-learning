import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumComponent } from './album/album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
  path: 'album',
  component: AlbumListComponent, 
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  },
  {
    path: '**',
    redirectTo: 'album'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AlbumComponent,
    TestComponent,
    AlbumListComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
