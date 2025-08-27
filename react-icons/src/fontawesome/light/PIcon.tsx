import React from 'react';

function PIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 64H176c61.9 0 112 50.1 112 112s-50.1 112-112 112H32V80c0-8.8 7.2-16 16-16zM32 320H176c79.5 0 144-64.5 144-144s-64.5-144-144-144H48C21.5 32 0 53.5 0 80V304 464c0 8.8 7.2 16 16 16s16-7.2 16-16V320z"/></svg>
    );
}

export default PIcon;