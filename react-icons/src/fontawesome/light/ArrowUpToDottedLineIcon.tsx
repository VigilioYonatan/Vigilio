import React from 'react';

function ArrowUpToDottedLineIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M363.3 292.7l-128-128c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 214.6V320 464c0 8.8 7.2 16 16 16s16-7.2 16-16V320 214.6L340.7 315.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM32 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm384 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM152 64a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM344 64a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>
    );
}

export default ArrowUpToDottedLineIcon;