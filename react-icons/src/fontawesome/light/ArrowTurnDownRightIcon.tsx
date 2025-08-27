import React from 'react';

function ArrowTurnDownRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V224c0 44.2 35.8 80 80 80H457.4L356.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 272H80c-26.5 0-48-21.5-48-48V48z"/></svg>
    );
}

export default ArrowTurnDownRightIcon;