import React from 'react';

function HIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M352 256l0 208c0 8.8 7.2 16 16 16s16-7.2 16-16l0-240V48c0-8.8-7.2-16-16-16s-16 7.2-16 16V224L32 224 32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-208 320 0z"/></svg>
    );
}

export default HIcon;