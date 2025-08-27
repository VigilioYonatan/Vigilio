import React from 'react';

function CaretLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M34.2 261.6c-1.3-1.4-2.2-3.5-2.2-5.6s.8-4.2 2.2-5.6L147.7 130.2c1.3-1.4 3.2-2.2 5.2-2.2c3.9 0 7.1 3.2 7.1 7.1l0 241.7c0 3.9-3.2 7.1-7.1 7.1c-2 0-3.8-.8-5.2-2.2L34.2 261.6zm-23.3 22L124.4 403.7c7.4 7.8 17.7 12.3 28.4 12.3c21.6 0 39.1-17.5 39.1-39.1l0-241.7c0-21.6-17.5-39.1-39.1-39.1c-10.8 0-21.1 4.4-28.4 12.3L10.9 228.4C3.9 235.9 0 245.8 0 256s3.9 20.1 10.9 27.6z"/></svg>
    );
}

export default CaretLeftIcon;