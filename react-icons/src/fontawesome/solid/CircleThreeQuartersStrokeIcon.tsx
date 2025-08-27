import React from 'react';

function CircleThreeQuartersStrokeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 64V224c0 17.7 14.3 32 32 32H448c0-106-86-192-192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    );
}

export default CircleThreeQuartersStrokeIcon;