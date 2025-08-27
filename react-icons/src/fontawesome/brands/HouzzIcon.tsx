import React from 'react';

function HouzzIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"/></svg>
    );
}

export default HouzzIcon;