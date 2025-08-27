import React from 'react';

function SquareUserIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M81.1 416H366.9c-7.8-54.3-54.4-96-110.9-96H192c-56.4 0-103.1 41.7-110.9 96zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM224 272a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
    );
}

export default SquareUserIcon;