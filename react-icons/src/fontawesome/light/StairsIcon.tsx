import React from 'react';

function StairsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M416 48c0-8.8 7.2-16 16-16H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H448V176c0 8.8-7.2 16-16 16H304V336c0 8.8-7.2 16-16 16H160V464c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H128V336c0-8.8 7.2-16 16-16H272V176c0-8.8 7.2-16 16-16H416V48z"/></svg>
    );
}

export default StairsIcon;