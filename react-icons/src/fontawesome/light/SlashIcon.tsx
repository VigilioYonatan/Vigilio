import React from 'react';

function SlashIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M3.4 6.1C8.9-.8 19-2 25.9 3.4l608 480c6.9 5.5 8.1 15.5 2.6 22.5s-15.5 8.1-22.5 2.6L6.1 28.6C-.8 23.1-2 13 3.4 6.1z"/></svg>
    );
}

export default SlashIcon;