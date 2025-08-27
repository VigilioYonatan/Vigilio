import React from 'react';

function DialMedIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm16 232V161c63.1 7.9 112 61.7 112 127c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-65.3 48.9-119.1 112-127V288c0 8.8 7.2 16 16 16s16-7.2 16-16zM288 128a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
    );
}

export default DialMedIcon;