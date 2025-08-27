import React from 'react';

function ComputerMouseIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M192 224H32V352c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128V224H192zm192-32v16 16V352c0 88.4-71.6 160-160 160H160C71.6 512 0 440.4 0 352V224 208 192 160C0 71.6 71.6 0 160 0h16 16 16 16c88.4 0 160 71.6 160 160v32zM208 32V192H352V160c0-70.7-57.3-128-128-128H208zm-32 0H160C89.3 32 32 89.3 32 160v32H176V32z"/></svg>
    );
}

export default ComputerMouseIcon;