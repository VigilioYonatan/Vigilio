import React from 'react';

function QIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 256c0 106 86 192 192 192c42.6 0 81.9-13.9 113.8-37.3L227.9 282.4c-5.8-6.7-5-16.8 1.7-22.6s16.8-5 22.6 1.7l109.7 128C395.4 355 416 307.9 416 256c0-106-86-192-192-192S32 150 32 256zM358.7 435c-37.5 28.2-84.1 45-134.7 45C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 61.7-24.9 117.5-65.2 158l61.4 71.6c5.8 6.7 5 16.8-1.7 22.6s-16.8 5-22.6-1.7L358.7 435z"/></svg>
    );
}

export default QIcon;