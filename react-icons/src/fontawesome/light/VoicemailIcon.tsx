import React from 'react';

function VoicemailIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M144 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM288 240c0 45.2-20.9 85.6-53.5 112h171C372.9 325.6 352 285.2 352 240c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144zM496 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"/></svg>
    );
}

export default VoicemailIcon;