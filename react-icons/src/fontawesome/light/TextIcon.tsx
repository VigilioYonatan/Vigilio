import React from 'react';

function TextIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 64C0 46.3 14.3 32 32 32H416c17.7 0 32 14.3 32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64H240l0 384h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h64l0-384H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64z"/></svg>
    );
}

export default TextIcon;