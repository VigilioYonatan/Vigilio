import React from 'react';

function CropSimpleIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H96V368c0 26.5 21.5 48 48 48H352V384H144c-8.8 0-16-7.2-16-16V16zM384 496c0 8.8 7.2 16 16 16s16-7.2 16-16V416h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H416l0-240c0-26.5-21.5-48-48-48L160 96v32l208 0c8.8 0 16 7.2 16 16l0 352z"/></svg>
    );
}

export default CropSimpleIcon;