import React from 'react';

function SquareDIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 96h72c70.7 0 128 57.3 128 128s-57.3 128-128 128H152c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm24 208h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H176V336z"/></svg>
    );
}

export default SquareDIcon;