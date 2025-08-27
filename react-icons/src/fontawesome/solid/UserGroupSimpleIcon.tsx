import React from 'react';

function UserGroupSimpleIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M160 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208zm320 0a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM0 416c0-70.7 57.3-128 128-128h64c70.7 0 128 57.3 128 128v16c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V416zm448 64c-38.3 0-72.7-16.8-96.1-43.5c.1-1.5 .1-3 .1-4.5V416c0-34.9-11.2-67.1-30.1-93.4c5.8-20 24.2-34.6 46.1-34.6H592c26.5 0 48 21.5 48 48v16c0 70.7-57.3 128-128 128H448z"/></svg>
    );
}

export default UserGroupSimpleIcon;