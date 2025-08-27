import React from 'react';

function ArrowUpLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 96c-17.7 0-32 14.3-32 32V352c0 17.7 14.3 32 32 32s32-14.3 32-32V205.3L297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 160H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"/></svg>
    );
}

export default ArrowUpLeftIcon;