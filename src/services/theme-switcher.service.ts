import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import themes from 'src/themes.json';
import { IGenericType } from 'src/utils/generictype';
import { ITheme } from 'src/interfaces/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  public current: BehaviorSubject<IGenericType<ITheme>>
    = new BehaviorSubject( themes[0] );

  private definedThemes: IGenericType = {};

  constructor() {
    themes.forEach(( theme ) => {
      this.definedThemes[ theme.name ] = theme;
    });
  }

  public setTheme( theme: ITheme ) {
    // check if theme exists on the list
    if ( this.definedThemes[ theme.name ] != null ) {
      this.current.next( theme );
    }
  }

}
