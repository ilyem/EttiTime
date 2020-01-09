import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
        EventStackComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
