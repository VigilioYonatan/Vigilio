import React from 'react';

function WindowFrameOpenIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M272 32H416c17.7 0 32 14.3 32 32V256H272V32zM480 288V256 64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64V256v32H64 448h32zM240 256H64V64c0-17.7 14.3-32 32-32H240V256zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16H48 464h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H480V320H448V480H64V320H32V480H16z"/></svg>
    );
}

export default WindowFrameOpenIcon;