// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { HeaderComponent } from './components/header/header.component';
import { EventComponent } from './components/event/event.component';
import { EventStackComponent } from './components/eventStack/event-stack.component';
import { FormComponent } from './components/form/form.component';
import { DateSelectionComponent } from './components/date-selection/date-selection.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InfoComponent } from './components/info/info.component';
import { PopupComponent } from './components/popup/popup.component';
import { TimeComponent } from './components/time/time.component';

// Pages
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectComponent } from './pages/subject/subject.component';

// Services
import { UsersService } from './services/users.service';
import { AuthGuardService } from './services/auth-guard.service'

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        TimetableComponent,
        HeaderComponent,
        ScheduleComponent,
        AdminComponent,
        EventComponent,
        EventStackComponent,
        LoginComponent,
        FormComponent,
        DateSelectionComponent,
        CalendarComponent,
        SubjectComponent,
        InfoComponent,
        PopupComponent,
        TimeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [UsersService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
