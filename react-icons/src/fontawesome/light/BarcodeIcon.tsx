import React from 'react';

function BarcodeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16s16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zm64 0c0-8.8 7.2-16 16-16s16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zm80-16c8.8 0 16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16s16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zm80-16c8.8 0 16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16s16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48zM496 32c8.8 0 16 7.2 16 16V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16z"/></svg>
    );
}

export default BarcodeIcon;