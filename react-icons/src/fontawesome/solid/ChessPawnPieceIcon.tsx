import React from 'react';

function ChessPawnPieceIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h5.7L64 384H192l-13.7-96H184c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8zM4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48L4.8 473.6z"/></svg>
    );
}

export default ChessPawnPieceIcon;