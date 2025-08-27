import React from 'react';

function ArrowDownToBracketIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M374.6 214.6l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 242.7V32c0-17.7 14.3-32 32-32s32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM64 352v64c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V352c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96H96c-53 0-96-43-96-96V352c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
    );
}

export default ArrowDownToBracketIcon;