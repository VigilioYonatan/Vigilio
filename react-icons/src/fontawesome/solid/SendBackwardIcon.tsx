import React from 'react';

function SendBackwardIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 0C28.7 0 0 28.7 0 64V288c0 35.3 28.7 64 64 64h64V224c0-53 43-96 96-96H352V64c0-35.3-28.7-64-64-64H64zM224 224H448V448H224V224zm-64 0V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64z"/></svg>
    );
}

export default SendBackwardIcon;