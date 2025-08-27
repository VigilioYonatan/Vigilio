import React from 'react';

function CompressIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M160 48c0-8.8-7.2-16-16-16s-16 7.2-16 16V160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H144c8.8 0 16-7.2 16-16V48zM16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16H128V464c0 8.8 7.2 16 16 16s16-7.2 16-16V336c0-8.8-7.2-16-16-16H16zM320 48c0-8.8-7.2-16-16-16s-16 7.2-16 16V176c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H320V48zM304 320c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V352H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H304z"/></svg>
    );
}

export default CompressIcon;