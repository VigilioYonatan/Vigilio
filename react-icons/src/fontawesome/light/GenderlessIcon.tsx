import React from 'react';

function GenderlessIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M192 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 320a176 176 0 1 0 0-352 176 176 0 1 0 0 352z"/></svg>
    );
}

export default GenderlessIcon;