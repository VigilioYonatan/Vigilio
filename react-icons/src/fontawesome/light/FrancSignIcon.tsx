import React from 'react';

function FrancSignIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M104 32C81.9 32 64 49.9 64 72V208 320H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64V464c0 8.8 7.2 16 16 16s16-7.2 16-16V352H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V224H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V72c0-4.4 3.6-8 8-8H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H104z"/></svg>
    );
}

export default FrancSignIcon;