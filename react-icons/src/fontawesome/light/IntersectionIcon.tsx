import React from 'react';

function IntersectionIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 480c8.8 0 16-7.2 16-16V224c0-88.4 71.6-160 160-160s160 71.6 160 160V464c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-106-86-192-192-192S0 118 0 224V464c0 8.8 7.2 16 16 16z"/></svg>
    );
}

export default IntersectionIcon;