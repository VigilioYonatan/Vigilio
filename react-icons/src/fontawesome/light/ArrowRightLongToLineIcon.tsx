import React from 'react';

function ArrowRightLongToLineIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M640 80V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16zM507.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 272 16 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l441.4 0L340.7 123.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l144 144z"/></svg>
    );
}

export default ArrowRightLongToLineIcon;