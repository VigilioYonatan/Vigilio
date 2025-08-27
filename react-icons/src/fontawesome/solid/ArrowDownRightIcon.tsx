import React from 'react';

function ArrowDownRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M320 416c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 146.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 352 96 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0z"/></svg>
    );
}

export default ArrowDownRightIcon;