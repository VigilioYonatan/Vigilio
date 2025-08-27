import React from 'react';

function CircleJIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-360V288c0 53-43 96-96 96s-96-43-96-96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 26.5 21.5 48 48 48s48-21.5 48-48V152c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
    );
}

export default CircleJIcon;