import React from 'react';

function FIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 32C21.5 32 0 53.5 0 80V248 464c0 8.8 7.2 16 16 16s16-7.2 16-16V272H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V80c0-8.8 7.2-16 16-16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H48z"/></svg>
    );
}

export default FIcon;