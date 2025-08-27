import React from 'react';

function ObjectsAlignBottomIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M24 512l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24zM64 336c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48l0 288zm224 0c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48l0 160z"/></svg>
    );
}

export default ObjectsAlignBottomIcon;