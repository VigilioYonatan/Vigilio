import React from 'react';

function CircleHalfStrokeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M240 479.4V32.6C123.8 40.8 32 137.7 32 256s91.8 215.2 208 223.4zM480 256c0-118.3-91.8-215.2-208-223.4V479.4C388.2 471.2 480 374.3 480 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    );
}

export default CircleHalfStrokeIcon;