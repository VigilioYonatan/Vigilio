import React from 'react';

function TengeSignIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 64 0 56.8 0 48zM0 176c0-8.8 7.2-16 16-16H192 368c8.8 0 16 7.2 16 16s-7.2 16-16 16H208V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V192H16c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default TengeSignIcon;