import React from 'react';

function BrightnessLowIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M224 80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm96 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM432 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM352 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0-256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/></svg>
    );
}

export default BrightnessLowIcon;