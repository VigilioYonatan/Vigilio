import React from 'react';

function NIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M10.5 33c6.3-2.3 13.4-.4 17.7 4.7L352 420.3V48c0-8.8 7.2-16 16-16s16 7.2 16 16V464c0 6.7-4.2 12.7-10.5 15s-13.4 .4-17.7-4.7L32 91.7V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-6.7 4.2-12.7 10.5-15z"/></svg>
    );
}

export default NIcon;