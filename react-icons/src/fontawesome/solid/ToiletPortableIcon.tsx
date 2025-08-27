import React from 'react';

function ToiletPortableIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 32V64H320V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32zM24 96H0v24V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-8H272v8c0 13.3 10.7 24 24 24s24-10.7 24-24V120 96H296 24zM256 240v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
    );
}

export default ToiletPortableIcon;