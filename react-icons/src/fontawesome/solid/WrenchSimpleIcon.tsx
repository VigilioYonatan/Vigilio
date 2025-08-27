import React from 'react';

function WrenchSimpleIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M132.7 164.7l48 48c6.2 6.2 16.4 6.2 22.6 0l48-48c3-3 4.7-7.1 4.7-11.3V17.5c0-11 10.9-18.7 20.8-13.8C340.3 35 384 100.4 384 176c0 71.1-38.6 133.1-96 166.3V464c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V342.3C38.6 309.1 0 247.1 0 176C0 100.4 43.7 35 107.2 3.7C117.1-1.2 128 6.5 128 17.5V153.4c0 4.2 1.7 8.3 4.7 11.3z"/></svg>
    );
}

export default WrenchSimpleIcon;