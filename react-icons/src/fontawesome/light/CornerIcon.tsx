import React from 'react';

function CornerIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 176c0-8.8 7.2-16 16-16H400c26.5 0 48 21.5 48 48V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8-7.2-16-16-16H16c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default CornerIcon;