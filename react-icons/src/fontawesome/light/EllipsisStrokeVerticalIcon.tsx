import React from 'react';

function EllipsisStrokeVerticalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M96 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 96A64 64 0 1 1 96 32a64 64 0 1 1 0 128zm32 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 32 256zm96 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 32 416z"/></svg>
    );
}

export default EllipsisStrokeVerticalIcon;