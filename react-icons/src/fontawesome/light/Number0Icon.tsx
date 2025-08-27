import React from 'react';

function Number0Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 64C89.3 64 32 121.3 32 192V320c0 70.7 57.3 128 128 128s128-57.3 128-128V192c0-70.7-57.3-128-128-128z"/></svg>
    );
}

export default Number0Icon;