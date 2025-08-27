import React from 'react';

function TugrikSignIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16H176V211.5l-115.9 29c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l108.1-27v63l-115.9 29c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l108.1-27V456c0 8.8 7.2 16 16 16s16-7.2 16-16V332.5l115.9-29c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6L208 299.5v-63l115.9-29c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6L208 203.5V64H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H192 16z"/></svg>
    );
}

export default TugrikSignIcon;