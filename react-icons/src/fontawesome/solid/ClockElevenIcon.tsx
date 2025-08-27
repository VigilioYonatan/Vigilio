import React from 'react';

function ClockElevenIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120v56.7l-20-30c-7.4-11-22.3-14-33.3-6.7s-14 22.3-6.7 33.3l64 96c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
    );
}

export default ClockElevenIcon;