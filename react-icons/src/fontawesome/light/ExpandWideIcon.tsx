import React from 'react';

function ExpandWideIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M144 64c8.8 0 16 7.2 16 16s-7.2 16-16 16H32V208c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16H144zM0 304c0-8.8 7.2-16 16-16s16 7.2 16 16V416H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V304zM496 64c8.8 0 16 7.2 16 16V208c0 8.8-7.2 16-16 16s-16-7.2-16-16V96H368c-8.8 0-16-7.2-16-16s7.2-16 16-16H496zM480 304c0-8.8 7.2-16 16-16s16 7.2 16 16V432c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16H480V304z"/></svg>
    );
}

export default ExpandWideIcon;