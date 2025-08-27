import React from 'react';

function UnderlineIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H96V224c0 70.7 57.3 128 128 128s128-57.3 128-128V64H304c-8.8 0-16-7.2-16-16s7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V64H16C7.2 64 0 56.8 0 48zM0 464c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default UnderlineIcon;