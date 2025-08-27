import React from 'react';

function BracketCurlyRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M192 112c0-44.2-35.8-80-80-80H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c26.5 0 48 21.5 48 48v53.5c0 21.2 8.4 41.6 23.4 56.6L217.4 256l-33.9 33.9c-15 15-23.4 35.4-23.4 56.6V400c0 26.5-21.5 48-48 48H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c44.2 0 80-35.8 80-80V346.5c0-12.7 5.1-24.9 14.1-33.9l45.3-45.3c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-45.3-45.3c-9-9-14.1-21.2-14.1-33.9V112z"/></svg>
    );
}

export default BracketCurlyRightIcon;