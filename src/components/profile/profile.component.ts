import { Component } from '@angular/core';

import { ComponentWrapper } from '../component.wrapper';
import { BreakpointService } from 'src/services/breakpoint.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends ComponentWrapper {

  constructor(
    private bps: BreakpointService,
  ) { super(); }

  protected override render(): void {
    import( 'src/react-components/profile-modern' ).then(({ ProfileModern }) => {
      this.root?.render( ProfileModern({
        breakpointService: this.bps,
      }) );
    });
  }

}
