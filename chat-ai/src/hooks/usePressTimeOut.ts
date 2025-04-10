import { useState } from "preact/hooks";

/**
 *
 * @param timer
 * @returns
 * seconds 1,2
 */
function usePressTimeOut(time = 1.5) {
    const [touchTimer, setTouchTimer] = useState<NodeJS.Timeout | null>(null);

    function handleTouchStart(cb: () => void) {
        const timer = setTimeout(() => {
            cb();
        }, time * 1000);
        setTouchTimer(timer);
    }

    function handleTouchEnd() {
        clearTimeout(touchTimer as NodeJS.Timeout);
    }
    return { handleTouchStart, handleTouchEnd };
}

export default usePressTimeOut;
