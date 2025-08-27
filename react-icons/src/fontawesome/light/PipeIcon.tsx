import React from 'react';

function PipeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 0c8.8 0 16 7.2 16 16V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V16C16 7.2 23.2 0 32 0z"/></svg>
    );
}

export default PipeIcon;