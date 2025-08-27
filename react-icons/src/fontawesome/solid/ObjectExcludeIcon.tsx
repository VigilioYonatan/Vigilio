import React from 'react';

function ObjectExcludeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 64C0 28.7 28.7 0 64 0H288c35.3 0 64 28.7 64 64v96h96c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V352H64c-35.3 0-64-28.7-64-64V64zM320 192H192V320H320V192z"/></svg>
    );
}

export default ObjectExcludeIcon;