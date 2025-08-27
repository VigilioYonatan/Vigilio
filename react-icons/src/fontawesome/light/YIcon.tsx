import React from 'react';

function YIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M28.9 38.5c-5.2-7.1-15.2-8.7-22.4-3.4S-2.1 50.3 3.1 57.5L176 293.2V464c0 8.8 7.2 16 16 16s16-7.2 16-16V293.2L380.9 57.5c5.2-7.1 3.7-17.1-3.4-22.4s-17.1-3.7-22.4 3.4L192 260.9 28.9 38.5z"/></svg>
    );
}

export default YIcon;