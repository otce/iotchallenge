import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { TestientalsComponent } from './testientals/testientals.component';
import { ContactComponent } from './contact/contact.component';
import { ParticlesModule } from 'angular-particle';
import { NgImageAsParticlesModule } from 'ng-image-as-particles/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatFormFieldModule, MatSliderModule } from '@angular/material';
import { FormComponent } from './form/form.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AuthInterceptorService } from "../services/CommonServices/interceptor/auth-interceptor.service";
import { HttpMethodsService } from 'src/services/CommonServices/HTTPService/http-methods.service';
import { LStorageService } from 'src/services/CommonServices/localStorage/lstorage.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { MaterialFileInputModule } from 'ngx-material-file-input';



import {MatSelectModule} from '@angular/material/select'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatIconModule} from '@angular/material/icon'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    TeamComponent,
    TestientalsComponent,
    ContactComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ParticlesModule,
    NgImageAsParticlesModule,
    MatSliderModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    FormsModule,
    ReactiveFormsModule, 
    MatToolbarModule, 
    MatFormFieldModule,
    MaterialFileInputModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [LStorageService,AuthInterceptorService,HttpMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
