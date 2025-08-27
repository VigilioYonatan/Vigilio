import React from 'react';

function SealIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M289.9 18.4c-18.7-18.7-49.1-18.7-67.9 0L176.5 64H112c-26.5 0-48 21.5-48 48v64.5L18.4 222.1c-18.7 18.7-18.7 49.1 0 67.9L64 335.5V400c0 26.5 21.5 48 48 48h64.5l45.6 45.6c18.7 18.7 49.1 18.7 67.9 0L335.5 448H400c26.5 0 48-21.5 48-48V335.5l45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5V112c0-26.5-21.5-48-48-48H335.5L289.9 18.4z"/></svg>
    );
}

export default SealIcon;