import React from 'react';

function TrashCanListIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M147.8 0c-12.1 0-23.2 6.8-28.6 17.7L112 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H304l-7.2-14.3C291.4 6.8 280.3 0 268.2 0H147.8zM384 128H32V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V128zM160 208V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16s16 7.2 16 16zm128 0V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16s16 7.2 16 16zm192-80c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H480zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H480zM448 416c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
    );
}

export default TrashCanListIcon;