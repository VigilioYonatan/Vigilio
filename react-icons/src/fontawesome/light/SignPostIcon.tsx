import React from 'react';

function SignPostIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16V64H417c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H272V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H240V16zM470.3 160L417 96 64 96V224H417l53.3-64z"/></svg>
    );
}

export default SignPostIcon;