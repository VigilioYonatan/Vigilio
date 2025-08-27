import React from 'react';

function Square0Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm160 96c53 0 96 43 96 96v64c0 53-43 96-96 96s-96-43-96-96V224c0-53 43-96 96-96zm-48 96v64c0 26.5 21.5 48 48 48s48-21.5 48-48V224c0-26.5-21.5-48-48-48s-48 21.5-48 48z"/></svg>
    );
}

export default Square0Icon;