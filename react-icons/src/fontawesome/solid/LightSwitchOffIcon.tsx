import React from 'react';

function LightSwitchOffIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 512c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64zm96-96h64c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64V352c0 35.3 28.7 64 64 64zm32 32a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-416a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM160 384c-17.7 0-32-14.3-32-32V256H256v96c0 17.7-14.3 32-32 32H160z"/></svg>
    );
}

export default LightSwitchOffIcon;