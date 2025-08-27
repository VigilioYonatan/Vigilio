import React from 'react';

function BorderInnerIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M224 480c-8.8 0-16-7.2-16-16l0-192L16 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0 0-192c0-8.8 7.2-16 16-16s16 7.2 16 16l0 192 192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0 0 192c0 8.8-7.2 16-16 16zM32 424a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM32 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM392 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM32 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM392 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM8 64a24 24 0 1 1 48 0A24 24 0 1 1 8 64zm288 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM104 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
    );
}

export default BorderInnerIcon;