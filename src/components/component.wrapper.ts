import { AfterViewInit, Directive, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { createRoot, Root } from 'react-dom/client';

@Directive()
export class ComponentWrapper implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    @ViewChild('quaso', { static: false })
    quaso?: ElementRef;

    protected root?: Root;

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this.root?.unmount();
    }

    ngOnChanges( _: SimpleChanges ): void {
        this.render();
    }

    ngAfterViewInit(): void {
        if ( this.quaso != null ) {
            this.root = createRoot( this.quaso?.nativeElement );
        }

        this.render();
    }

    protected render() { }
}