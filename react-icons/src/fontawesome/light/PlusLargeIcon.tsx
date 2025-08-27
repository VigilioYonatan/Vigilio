import React from 'react';

function PlusLargeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 224L16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0 0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224 224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0 0-224z"/></svg>
    );
}

export default PlusLargeIcon;