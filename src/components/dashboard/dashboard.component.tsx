import {
  AfterViewInit, Component, ElementRef, OnChanges,
  OnInit, SimpleChanges, ViewChild, ViewEncapsulation,
} from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('quaso', { static: false })
  quaso?: ElementRef;

  constructor() {
    window.React = React;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  private render() {
    const root = createRoot(this.quaso?.nativeElement);
    root.render(<h1>Hello, world</h1>);
  }

}
