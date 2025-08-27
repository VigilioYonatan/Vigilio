import React from 'react';

function Tally1Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 32c8.8 0 16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16z"/></svg>
    );
}

export default Tally1Icon;