import React from 'react';

function PlusMinusIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M176 208V352c0 8.8 7.2 16 16 16s16-7.2 16-16V208H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V32c0-8.8-7.2-16-16-16s-16 7.2-16 16V176H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H176zM16 464c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H32c-8.8 0-16 7.2-16 16z"/></svg>
    );
}

export default PlusMinusIcon;