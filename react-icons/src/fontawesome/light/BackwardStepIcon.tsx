import React from 'react';

function BackwardStepIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16V241.9v28.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V296.2L242.6 441.8c5 4 11.2 6.2 17.6 6.2c15.4 0 27.8-12.4 27.8-27.8V91.8C288 76.4 275.6 64 260.2 64c-6.4 0-12.6 2.2-17.6 6.2L64 215.8V80zm192 20.6V411.4L65.3 256 256 100.6z"/></svg>
    );
}

export default BackwardStepIcon;