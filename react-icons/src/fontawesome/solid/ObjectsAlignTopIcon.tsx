import React from 'react';

function ObjectsAlignTopIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M24 0H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24S10.7 0 24 0zM64 176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V176zm224 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48V336c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V176z"/></svg>
    );
}

export default ObjectsAlignTopIcon;