import React from 'react';

function Number3Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16H288c6.6 0 12.5 4 14.9 10.2s.8 13.1-4 17.6L120.9 224H192c70.7 0 128 57.3 128 128s-57.3 128-128 128H89.4c-36.4 0-69.6-20.5-85.9-53.1l-1.9-3.8c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l1.9 3.8C43 434.3 65.2 448 89.4 448H192c53 0 96-43 96-96s-43-96-96-96H80c-6.6 0-12.5-4-14.9-10.2s-.8-13.1 4-17.6L247.1 64H16C7.2 64 0 56.8 0 48z"/></svg>
    );
}

export default Number3Icon;