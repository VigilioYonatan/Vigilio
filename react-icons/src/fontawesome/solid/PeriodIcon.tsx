import React from 'react';

function PeriodIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 416a64 64 0 1 1 128 0A64 64 0 1 1 32 416z"/></svg>
    );
}

export default PeriodIcon;