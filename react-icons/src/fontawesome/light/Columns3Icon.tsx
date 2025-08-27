import React from 'react';

function Columns3Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M448 64V448H576c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H448zm-32 0H224V448H416V64zM192 448V64H64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H192zM0 96C0 60.7 28.7 32 64 32H576c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"/></svg>
    );
}

export default Columns3Icon;