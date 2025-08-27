import React from 'react';

function ToggleLargeOnIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M416 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256zm0 288H160C71.6 416 0 344.4 0 256S71.6 96 160 96H416c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-96-32c-38.9-29.2-64-75.7-64-128s25.1-98.8 64-128H160C89.3 128 32 185.3 32 256s57.3 128 128 128H320z"/></svg>
    );
}

export default ToggleLargeOnIcon;