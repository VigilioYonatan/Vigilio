import React from 'react';

function DiamondHalfIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M227.7 11.7C235.5 3.9 245.8 0 256 0V32 480v32c-10.2 0-20.5-3.9-28.3-11.7l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zM224 451.3V60.7L34.3 250.3c-3.1 3.1-3.1 8.2 0 11.3L224 451.3z"/></svg>
    );
}

export default DiamondHalfIcon;