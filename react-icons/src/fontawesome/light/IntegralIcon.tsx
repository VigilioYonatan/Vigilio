import React from 'react';

function IntegralIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M216 32c-22.1 0-40 17.9-40 40V440c0 39.8-32.2 72-72 72s-72-32.2-72-72V416c0-8.8 7.2-16 16-16s16 7.2 16 16v24c0 22.1 17.9 40 40 40s40-17.9 40-40V72c0-39.8 32.2-72 72-72s72 32.2 72 72V96c0 8.8-7.2 16-16 16s-16-7.2-16-16V72c0-22.1-17.9-40-40-40z"/></svg>
    );
}

export default IntegralIcon;