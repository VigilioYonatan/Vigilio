import React from 'react';

function ContainerStorageIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16H32V448H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H48 592h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H608V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H592 48 16zM64 448V64H576V448H64zM192 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z"/></svg>
    );
}

export default ContainerStorageIcon;