import React from 'react';

function NoteMedicalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320H336c-26.5 0-48 21.5-48 48V480H64c-35.3 0-64-28.7-64-64V96zM402.7 352H448l-32 32-64 64-32 32V434.7 368c0-8.8 7.2-16 16-16h66.7zM192 144v48H144c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H256V144c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16z"/></svg>
    );
}

export default NoteMedicalIcon;