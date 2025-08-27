import React from 'react';

function TableCellsLargeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M272 64V240H480V96c0-17.7-14.3-32-32-32H272zm-32 0H64C46.3 64 32 78.3 32 96V240H240V64zM32 272V416c0 17.7 14.3 32 32 32H240V272H32zM272 448H448c17.7 0 32-14.3 32-32V272H272V448zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"/></svg>
    );
}

export default TableCellsLargeIcon;