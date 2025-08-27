import React from 'react';

function BedEmptyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V256v96 96c0 17.7 14.3 32 32 32s32-14.3 32-32V416H352 576v32c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-53-43-96-96-96H64V64z"/></svg>
    );
}

export default BedEmptyIcon;