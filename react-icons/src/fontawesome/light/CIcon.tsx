import React from 'react';

function CIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M356.9 120.3c-74.4-75-194.9-75-269.3 0s-74.4 196.5 0 271.4s194.9 75 269.3 0c6.2-6.3 16.3-6.3 22.5 0s6.2 16.4 0 22.7c-86.8 87.5-227.5 87.5-314.4 0s-86.8-229.4 0-316.9s227.5-87.5 314.4 0c6.2 6.3 6.2 16.4 0 22.7s-16.3 6.3-22.5 0z"/></svg>
    );
}

export default CIcon;