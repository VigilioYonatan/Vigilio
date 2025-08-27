import React from 'react';

function SwapArrowsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M100.7 20.7c6.2-6.2 16.4-6.2 22.6 0l88 88c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L128 70.6V360c0 48.6 39.4 88 88 88s88-39.4 88-88V152c0-66.3 53.7-120 120-120s120 53.7 120 120V441.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-88 88c-6.2 6.2-16.4 6.2-22.6 0l-88-88c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L512 441.4 512 152c0-48.6-39.4-88-88-88s-88 39.4-88 88V360c0 66.3-53.7 120-120 120s-120-53.7-120-120V70.6L35.3 131.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l88-88z"/></svg>
    );
}

export default SwapArrowsIcon;