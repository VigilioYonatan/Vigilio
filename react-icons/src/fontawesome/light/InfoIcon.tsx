import React from 'react';

function InfoIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64a32 32 0 1 1 64 0A32 32 0 1 1 64 64zM16 176c0-8.8 7.2-16 16-16H96c8.8 0 16 7.2 16 16V448h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H80V192H32c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default InfoIcon;