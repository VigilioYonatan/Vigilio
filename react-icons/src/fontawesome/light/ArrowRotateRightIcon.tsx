import React from 'react';

function ArrowRotateRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M464 192c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v92.6C408.8 75.5 337.5 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c79.9 0 150-41.8 189.7-104.8c6.6-10.4-1.4-23.2-13.7-23.2c-6 0-11.4 3.2-14.7 8.2C383.1 413 323.6 448 256 448C150 448 64 362 64 256S150 64 256 64c71.1 0 133.1 38.6 166.3 96H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H464z"/></svg>
    );
}

export default ArrowRotateRightIcon;