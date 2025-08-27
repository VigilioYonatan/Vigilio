import React from 'react';

function EllipsisVerticalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-160a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM96 96A32 32 0 1 0 32 96a32 32 0 1 0 64 0z"/></svg>
    );
}

export default EllipsisVerticalIcon;