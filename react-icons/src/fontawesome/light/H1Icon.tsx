import React from 'react';

function H1Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M496 80c0-5.7-3-10.9-7.9-13.8s-10.9-2.9-15.9-.2l-72 40c-7.7 4.3-10.5 14-6.2 21.8s14 10.5 21.8 6.2L464 107.2V416H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h80 80c8.8 0 16-7.2 16-16s-7.2-16-16-16H496V80zM32 80c0-8.8-7.2-16-16-16S0 71.2 0 80V256 432c0 8.8 7.2 16 16 16s16-7.2 16-16V272H288V432c0 8.8 7.2 16 16 16s16-7.2 16-16V256 80c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32V80z"/></svg>
    );
}

export default H1Icon;