import React from 'react';

function Columns3Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 96V416H64V96H192zm64 0H384V416H256V96zm320 0V416H448V96H576z"/></svg>
    );
}

export default Columns3Icon;