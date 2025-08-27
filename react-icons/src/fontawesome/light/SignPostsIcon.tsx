import React from 'react';

function SignPostsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 64c-8.8 0-16 7.2-16 16V368c0 8.8 7.2 16 16 16H528c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H512 480 96 64 48zM512 32h16c26.5 0 48 21.5 48 48V368c0 26.5-21.5 48-48 48H512l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80H96l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80H48c-26.5 0-48-21.5-48-48V80C0 53.5 21.5 32 48 32H64l0-16C64 7.2 71.2 0 80 0s16 7.2 16 16l0 16H480l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16z"/></svg>
    );
}

export default SignPostsIcon;