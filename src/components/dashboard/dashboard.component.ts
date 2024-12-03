import { Component } from '@angular/core';

import { ComponentWrapper } from '../component.wrapper';
import { BreakpointService } from 'src/services/breakpoint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends ComponentWrapper {

  constructor(
    private bps: BreakpointService,
  ) { super(); }

  protected override render(): void {
    import( 'src/react-components/dashboard' ).then(({ Dashboard }) => {
      this.root?.render( Dashboard({
        breakpointService: this.bps,
      }) );
    });
  }

}
