import React from 'react';

function Number00Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M144 32C64.5 32 0 96.5 0 176V336c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144zM32 176C32 114.1 82.1 64 144 64s112 50.1 112 112V336c0 61.9-50.1 112-112 112S32 397.9 32 336V176zM496 32c-79.5 0-144 64.5-144 144V336c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144zM384 176c0-61.9 50.1-112 112-112s112 50.1 112 112V336c0 61.9-50.1 112-112 112s-112-50.1-112-112V176z"/></svg>
    );
}

export default Number00Icon;