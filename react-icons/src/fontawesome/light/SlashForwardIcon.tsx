import React from 'react';

function SlashForwardIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M312.2 2.3c7.6 4.5 10 14.4 5.5 22l-288 480c-4.5 7.6-14.4 10-22 5.5s-10-14.4-5.5-22l288-480c4.5-7.6 14.4-10 22-5.5z"/></svg>
    );
}

export default SlashForwardIcon;