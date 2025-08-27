import React from 'react';

function ClockElevenThirtyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400V260.8l-61.3-92c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4l64 96c1.8 2.6 2.7 5.7 2.7 8.9V400c0 8.8-7.2 16-16 16s-16-7.2-16-16z"/></svg>
    );
}

export default ClockElevenThirtyIcon;