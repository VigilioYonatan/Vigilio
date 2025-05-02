import { useEffect, useRef } from "react";

type InactivityOptions = {
    timeout?: number; // Tiempo para considerar inactivo (ms)
    onInactive: () => void; // Callback cuando se vuelve inactivo
    onActive?: () => void; // Callback cuando vuelve a estar activo (solo si estaba inactivo)
};

const useInactivity = (options: InactivityOptions) => {
    const {
        timeout = 180000, // 3 minutos por defecto
        onInactive,
        onActive,
    } = options;

    const isInactiveRef = useRef(false); // Usamos ref para estado actual
    const lastActivityRef = useRef(Date.now());
    const timerRef = useRef<NodeJS.Timeout>(null);

    // Eventos que resetearán la inactividad
    const activityEvents = [
        "mousemove",
        "scroll",
        "keydown",
        "click",
        "touchstart",
        "mousedown",
        "wheel",
        "input",
        "dragstart",
    ];

    const resetInactivity = () => {
        const wasInactive = isInactiveRef.current;
        lastActivityRef.current = Date.now();

        // Solo llamar a onActive si realmente estábamos inactivos
        if (wasInactive) {
            isInactiveRef.current = false;
            onActive?.(); // <-- Solo se ejecuta si estaba inactivo
        }

        // Reiniciar el temporizador
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            // Verificar que realmente haya pasado el tiempo completo
            if (Date.now() - lastActivityRef.current >= timeout) {
                isInactiveRef.current = true;
                onInactive();
            }
        }, timeout);
    };

    useEffect(() => {
        // Agregar listeners usando for...of
        for (const event of activityEvents) {
            window.addEventListener(event, resetInactivity, { passive: true });
        }

        // Iniciar el temporizador
        resetInactivity();

        // Limpieza
        return () => {
            for (const event of activityEvents) {
                window.removeEventListener(event, resetInactivity);
            }

            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [timeout, onInactive, onActive]);

    return {
        isInactive: isInactiveRef.current,
        lastActiveTime: lastActivityRef.current,
        resetActivity: resetInactivity,
    };
};

export default useInactivity;
