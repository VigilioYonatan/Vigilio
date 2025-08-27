import React from 'react';

function ObjectsAlignLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 16C0 7.2 7.2 0 16 0s16 7.2 16 16l0 480c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 16zM160 176c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L176 96c-8.8 0-16 7.2-16 16l0 64zm-32-64c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-64zm32 288c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16l0 64zm-32-64c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-64z"/></svg>
    );
}

export default ObjectsAlignLeftIcon;