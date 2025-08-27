import React from 'react';

function ArrowDownUpAcrossLineIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M148.7 507.3c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L176 457.4V272H560c8.8 0 16-7.2 16-16s-7.2-16-16-16H432V54.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L400 54.6V240H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H144V457.4L75.3 388.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96zM144 192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16V192zM432 320H400V464c0 8.8 7.2 16 16 16s16-7.2 16-16V320z"/></svg>
    );
}

export default ArrowDownUpAcrossLineIcon;