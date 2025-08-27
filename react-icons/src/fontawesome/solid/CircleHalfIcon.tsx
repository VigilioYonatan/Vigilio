import React from 'react';

function CircleHalfIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256S97.8 494.3 224.1 510c17.5 2.2 31.9-12.4 31.9-30V32z"/></svg>
    );
}

export default CircleHalfIcon;