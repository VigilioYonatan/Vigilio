import React from 'react';

function JIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M304 32c8.8 0 16 7.2 16 16V320c0 88.4-71.6 160-160 160S0 408.4 0 320V272c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 70.7 57.3 128 128 128s128-57.3 128-128V48c0-8.8 7.2-16 16-16z"/></svg>
    );
}

export default JIcon;