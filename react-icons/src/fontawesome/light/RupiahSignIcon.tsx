import React from 'react';

function RupiahSignIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 80C0 53.5 21.5 32 48 32h64c79.5 0 144 64.5 144 144c0 65.6-43.9 121-103.9 138.3l54.8 144c3.1 8.3-1 17.5-9.3 20.6s-17.5-1-20.6-9.3L119.9 319.8c-2.6 .1-5.3 .2-7.9 .2H32V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 80zM32 288h80c61.9 0 112-50.1 112-112s-50.1-112-112-112H48c-8.8 0-16 7.2-16 16V288zm288-80V352h80c44.2 0 80-35.8 80-80s-35.8-80-80-80H336c-8.8 0-16 7.2-16 16zm16-48h64c61.9 0 112 50.1 112 112s-50.1 112-112 112H320V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-26.5 21.5-48 48-48z"/></svg>
    );
}

export default RupiahSignIcon;