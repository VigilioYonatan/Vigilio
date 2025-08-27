import React from 'react';

function Circle4Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM223.6 129.2c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10H272v40c0 13.3 10.7 24 24 24s24-10.7 24-24V320h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v56H201.3l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4z"/></svg>
    );
}

export default Circle4Icon;