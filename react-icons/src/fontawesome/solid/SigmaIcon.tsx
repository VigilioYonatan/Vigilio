import React from 'react';

function SigmaIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M2.4 51.8C7.4 39.8 19.1 32 32 32H320c35.3 0 64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H109.3L246.6 233.4c12.5 12.5 12.5 32.8 0 45.3L109.3 416H320V384c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 35.3-28.7 64-64 64H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L178.7 256 9.4 86.6C.2 77.5-2.5 63.7 2.4 51.8z"/></svg>
    );
}

export default SigmaIcon;