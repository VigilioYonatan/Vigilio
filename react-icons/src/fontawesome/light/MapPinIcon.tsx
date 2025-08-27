import React from 'react';

function MapPinIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM304 144c0 74.1-56 135.2-128 143.1V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V287.1c-72-8-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144zm-192 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48z"/></svg>
    );
}

export default MapPinIcon;