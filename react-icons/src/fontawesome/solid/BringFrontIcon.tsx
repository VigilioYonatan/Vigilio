import React from 'react';

function BringFrontIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64h64 32 32 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V192c0 35.3 28.7 64 64 64h64V192H64V64zM480 448H448 384c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H512v64h64V448H512 480zM224 96c-35.3 0-64 28.7-64 64V352c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H224z"/></svg>
    );
}

export default BringFrontIcon;