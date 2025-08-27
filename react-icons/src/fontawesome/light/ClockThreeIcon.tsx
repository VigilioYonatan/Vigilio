import React from 'react';

function ClockThreeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112V256c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
    );
}

export default ClockThreeIcon;