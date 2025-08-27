import React from 'react';

function ChevronsRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M75.3 459.3l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 52.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm192 0l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 244.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"/></svg>
    );
}

export default ChevronsRightIcon;