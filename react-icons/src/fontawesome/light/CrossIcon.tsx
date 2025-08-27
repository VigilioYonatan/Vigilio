import React from 'react';

function CrossIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 40c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v88h88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H256V472c0 22.1-17.9 40-40 40H168c-22.1 0-40-17.9-40-40V256H40c-22.1 0-40-17.9-40-40V168c0-22.1 17.9-40 40-40h88V40zm40-8c-4.4 0-8 3.6-8 8V144c0 8.8-7.2 16-16 16H40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8H144c8.8 0 16 7.2 16 16V472c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V240c0-8.8 7.2-16 16-16H344c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H240c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8H168z"/></svg>
    );
}

export default CrossIcon;