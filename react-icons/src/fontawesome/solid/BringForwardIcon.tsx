import React from 'react';

function BringForwardIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M224 448H448V224H384V160h64c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V384h64v64zm64-96H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H288c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64z"/></svg>
    );
}

export default BringForwardIcon;