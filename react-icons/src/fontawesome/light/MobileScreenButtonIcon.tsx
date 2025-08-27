import React from 'react';

function MobileScreenButtonIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M288 32c17.7 0 32 14.3 32 32V320H64V64c0-17.7 14.3-32 32-32H288zm32 320v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352H320zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM216 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>
    );
}

export default MobileScreenButtonIcon;