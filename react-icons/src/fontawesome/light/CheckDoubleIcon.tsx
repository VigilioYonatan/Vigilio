import React from 'react';

function CheckDoubleIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M331.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 201.4 91.3 132.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l160-160zm112 112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 425.4 27.3 292.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0l272-272z"/></svg>
    );
}

export default CheckDoubleIcon;