import { useState, useEffect } from 'react';
import * as React from 'react';
import { BreakpointService } from 'src/services/breakpoint.service';

export interface IProps {
    breakpointService: BreakpointService,
}

export const Dashboard = ( props: IProps ) => <Component { ...props }></Component>;

const Component: React.FunctionComponent<IProps> = ( props ) => {
    const [currentBp, setCurrentBp] = useState('');

    const { breakpointService } = props;

    useEffect(() => {
        const s = breakpointService.current.subscribe(( bp ) => {
            setCurrentBp( bp );
        });

        return () => {
            s.unsubscribe();
        };
    });

    return (
<>
    <h1>Hello World, { currentBp }</h1>
    {(() => {
        if ( currentBp === 'xsmall' ) {
            return <p>very small quasong 🥐🥐</p>
        } else {
            return <div>{ currentBp } croissant 🥐🥐🥐🥐🥐</div>
        }
    })()}
</>
    );
};

