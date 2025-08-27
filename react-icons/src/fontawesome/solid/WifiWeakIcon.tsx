import React from 'react';

function WifiWeakIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 416a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
    );
}

export default WifiWeakIcon;