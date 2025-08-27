import React from 'react';

function DIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H160c106 0 192-86 192-192s-86-192-192-192H48zM0 80C0 53.5 21.5 32 48 32H160c123.7 0 224 100.3 224 224s-100.3 224-224 224H48c-26.5 0-48-21.5-48-48V80z"/></svg>
    );
}

export default DIcon;