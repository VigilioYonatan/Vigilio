import React from 'react';

function CircleQuarterStrokeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 256l160 0c17.7 0 32-14.3 32-32l0-160c106 0 192 86 192 192s-86 192-192 192S64 362 64 256zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z"/></svg>
    );
}

export default CircleQuarterStrokeIcon;