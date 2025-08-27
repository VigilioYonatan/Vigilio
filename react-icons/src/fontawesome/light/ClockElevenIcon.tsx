import React from 'react';

function ClockElevenIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112v91.2l-34.7-52c-4.9-7.4-14.8-9.3-22.2-4.4s-9.3 14.8-4.4 22.2l64 96c3.9 5.9 11.2 8.5 17.9 6.4s11.4-8.3 11.4-15.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
    );
}

export default ClockElevenIcon;