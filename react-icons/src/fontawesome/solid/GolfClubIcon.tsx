import React from 'react';

function GolfClubIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M508.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L264 392.5l0-.5L42.1 318C21.4 311.1 0 326.6 0 348.4V376H48c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v32H48c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v8c0 17.7 14.3 32 32 32H255.3c12 .3 23.6-6.3 29.3-17.7l224-448z"/></svg>
    );
}

export default GolfClubIcon;