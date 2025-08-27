import React from 'react';

function ArrowRotateLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 192c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v92.6C103.2 75.5 174.5 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-79.9 0-150-41.8-189.7-104.8C59.8 364.8 67.7 352 80 352c6 0 11.4 3.2 14.7 8.2C128.9 413 188.4 448 256 448c106 0 192-86 192-192s-86-192-192-192c-71.1 0-133.1 38.6-166.3 96H176c8.8 0 16 7.2 16 16s-7.2 16-16 16H48z"/></svg>
    );
}

export default ArrowRotateLeftIcon;