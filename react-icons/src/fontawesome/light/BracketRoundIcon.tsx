import React from 'react';

function BracketRoundIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M158.1 40.4c4.2 7.8 1.3 17.5-6.4 21.7C111.5 83.8 32 153.4 32 256s79.5 172.2 119.6 193.9c7.8 4.2 10.7 13.9 6.4 21.7s-13.9 10.7-21.7 6.4C91.2 453.6 0 375.3 0 256S91.2 58.4 136.4 33.9c7.8-4.2 17.5-1.3 21.7 6.4z"/></svg>
    );
}

export default BracketRoundIcon;