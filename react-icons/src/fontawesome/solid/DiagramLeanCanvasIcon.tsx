import React from 'react';

function DiagramLeanCanvasIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M512 96V304h64V96H512zm-48 0H400v80h64V96zM352 96H288V304h64V96zM240 96H176v80h64V96zM128 96H64V304h64V96zM64 352v64H296V352H64zm280 64H576V352H344v64zM0 96C0 60.7 28.7 32 64 32H576c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM240 304V224H176v80h64zm224-80H400v80h64V224z"/></svg>
    );
}

export default DiagramLeanCanvasIcon;