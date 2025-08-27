import React from 'react';

function MugIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 96V352c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V96H368 64zm352 0V256h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H416zm0 192v64c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32H368h16 80c61.9 0 112 50.1 112 112s-50.1 112-112 112H416z"/></svg>
    );
}

export default MugIcon;