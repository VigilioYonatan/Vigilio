import React from 'react';

function ExclamationIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 48c0-8.8-7.2-16-16-16s-16 7.2-16 16V352c0 8.8 7.2 16 16 16s16-7.2 16-16V48zM32 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
    );
}

export default ExclamationIcon;