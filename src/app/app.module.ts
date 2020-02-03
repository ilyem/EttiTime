// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EventComponent } from './components/event/event.component';
import { EventStackComponent } from './components/eventStack/event-stack.component';
import { LoginComponent } from './pages/login/login.component';
import {LoginFormComponent } from './components/login-form/login-form.component';
import { AuthenticationService } from './services/authentication.service';
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        TimetableComponent,
        HeaderComponent,
        FooterComponent,
        ScheduleComponent,
        AdminComponent,
        EventComponent,
        EventStackComponent,
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
