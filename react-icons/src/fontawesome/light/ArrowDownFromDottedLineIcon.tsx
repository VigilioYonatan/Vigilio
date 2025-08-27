import React from 'react';

function ArrowDownFromDottedLineIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M235.3 475.3c-6.2 6.2-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L208 425.4V320 176c0-8.8 7.2-16 16-16s16 7.2 16 16V320 425.4L340.7 324.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-128 128zM32 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm384 0a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM104 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM224 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm72-24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
    );
}

export default ArrowDownFromDottedLineIcon;