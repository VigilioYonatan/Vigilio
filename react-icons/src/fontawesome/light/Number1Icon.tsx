import React from 'react';

function Number1Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M144 48c0-5.9-3.2-11.3-8.5-14.1s-11.5-2.5-16.4 .8l-96 64c-7.4 4.9-9.3 14.8-4.4 22.2s14.8 9.3 22.2 4.4L112 77.9V448l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H128 240c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0V48z"/></svg>
    );
}

export default Number1Icon;