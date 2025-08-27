import React from 'react';

function EqualsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H32zm0 192c-8.8 0-16 7.2-16 16s7.2 16 16 16H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H32z"/></svg>
    );
}

export default EqualsIcon;