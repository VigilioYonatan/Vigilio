import React from 'react';

function ColonIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M96 192A64 64 0 1 0 96 64a64 64 0 1 0 0 128zm0 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/></svg>
    );
}

export default ColonIcon;