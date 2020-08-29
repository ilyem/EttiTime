import { Injectable } from '@angular/core';
import { User } from '../models/user';
// import { Theme } from '../models/theme';

@Injectable()
export class SharedInfoService {
    private _user: User;
    get user(): User {
        return this._user;
    }
    set user(value: User) {
        this._user = value;
    }


    private _selectedCoachee: User;
    get coachee(): User {
        return this._selectedCoachee;
    }
    set coachee(value: User) {
        this._selectedCoachee = value;
    }


    // private _selectedTheme: Theme;
    // get theme(): Theme {
    //     return this._selectedTheme;
    // }
    // set theme(value: Theme) {
    //     this._selectedTheme = value;
    // }

    public clearSelections() {
        this._selectedCoachee = undefined;
    }
}