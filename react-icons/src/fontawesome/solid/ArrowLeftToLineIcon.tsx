import React from 'react';

function ArrowLeftToLineIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 96C0 78.3 14.3 64 32 64s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96zM137.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L237.3 224 416 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-178.7 0 73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z"/></svg>
    );
}

export default ArrowLeftToLineIcon;