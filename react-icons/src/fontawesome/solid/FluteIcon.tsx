import React from 'react';

function FluteIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 160H96V352H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48zM592 352H128V160H592c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
    );
}

export default FluteIcon;