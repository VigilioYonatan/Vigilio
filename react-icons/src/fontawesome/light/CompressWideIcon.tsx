import React from 'react';

function CompressWideIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 80c0-8.8 7.2-16 16-16s16 7.2 16 16V208c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H128V80zm16 208c8.8 0 16 7.2 16 16V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V320H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H144zM352 80c0-8.8 7.2-16 16-16s16 7.2 16 16V192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80zM496 288c8.8 0 16 7.2 16 16s-7.2 16-16 16H384V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16H496z"/></svg>
    );
}

export default CompressWideIcon;