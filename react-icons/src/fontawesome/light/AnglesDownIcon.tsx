import React from 'react';

function AnglesDownIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M235.3 459.3c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 425.4 372.7 276.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-160 160zm160-352l-160 160c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 233.4 372.7 84.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
    );
}

export default AnglesDownIcon;