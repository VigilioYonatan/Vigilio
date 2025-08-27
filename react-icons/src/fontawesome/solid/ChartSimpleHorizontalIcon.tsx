import React from 'react';

function ChartSimpleHorizontalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M400 320c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48L48 192c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l352 0zM208 480c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48L48 352c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l160 0zM384 112l0-32c0-26.5-21.5-48-48-48L48 32C21.5 32 0 53.5 0 80l0 32c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48z"/></svg>
    );
}

export default ChartSimpleHorizontalIcon;