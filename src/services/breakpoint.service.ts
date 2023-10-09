import { Injectable } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  public current: BehaviorSubject<string> = new BehaviorSubject('small');

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe( _ => {
      switch ( true ) {
        case this.breakpointObserver.isMatched( Breakpoints.XSmall ):
          this.current.next( 'xsmall' );
          break;
        case this.breakpointObserver.isMatched( Breakpoints.Small ):
          this.current.next( 'small' );
          break;
        case this.breakpointObserver.isMatched( Breakpoints.Medium ):
          this.current.next( 'medium' );
          break;
        case this.breakpointObserver.isMatched( Breakpoints.Large ):
          this.current.next( 'large' );
          break;
        case this.breakpointObserver.isMatched( Breakpoints.XLarge ):
          this.current.next( 'xlarge' );
          break;
        default:
          this.current.next( 'small' );
      }
    });
  }
}
