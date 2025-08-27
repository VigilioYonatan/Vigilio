import React from 'react';

function CropIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M416 118.6l91.3-91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L393.4 96 160 96v32l201.4 0L128 361.4V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H96V368c0 26.5 21.5 48 48 48H352V384H150.6L384 150.6 384 496c0 8.8 7.2 16 16 16s16-7.2 16-16V416h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H416l0-265.4z"/></svg>
    );
}

export default CropIcon;