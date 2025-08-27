import React from 'react';

function GripLinesVerticalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 32c-8.8 0-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16L48 48c0-8.8-7.2-16-16-16zm128 0c-8.8 0-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16l0-416c0-8.8-7.2-16-16-16z"/></svg>
    );
}

export default GripLinesVerticalIcon;