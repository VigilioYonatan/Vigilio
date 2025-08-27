import React from 'react';

function ArchwayIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16H48 464h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H480V448h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H464 424 368c-8.8 0-16-7.2-16-16V352c0-53-43-96-96-96s-96 43-96 96V464c0 8.8-7.2 16-16 16H88 48 16c-8.8 0-16-7.2-16-16s7.2-16 16-16H32V64H16C7.2 64 0 56.8 0 48zM64 64v64H448V64H64zm0 96V448H88h40V352c0-70.7 57.3-128 128-128s128 57.3 128 128v96h40 24V160H64z"/></svg>
    );
}

export default ArchwayIcon;