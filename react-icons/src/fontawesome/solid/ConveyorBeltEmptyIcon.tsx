import React from 'react';

function ConveyorBeltEmptyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M96 320c-53 0-96 43-96 96s43 96 96 96H544c53 0 96-43 96-96s-43-96-96-96H96zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    );
}

export default ConveyorBeltEmptyIcon;