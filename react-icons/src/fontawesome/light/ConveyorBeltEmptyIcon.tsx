import React from 'react';

function ConveyorBeltEmptyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M96 352c-35.3 0-64 28.7-64 64s28.7 64 64 64H544c35.3 0 64-28.7 64-64s-28.7-64-64-64H96zM0 416c0-53 43-96 96-96H544c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96zm128-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm168 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
    );
}

export default ConveyorBeltEmptyIcon;