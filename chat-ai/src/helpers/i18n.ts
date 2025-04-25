// Traducciones simples para español e inglés
export const translations: Record<"es" | "en", Record<string, string>> = {
    es: {
        title: "Asistente Virtual",
        subtitle:
            "Rellene el formulario a continuación para una atención personalizada.",
        name: "Nombre",
        telephone: "Teléfono",
        email: "Correo electrónico",
        startChat: "Comenzar chat",
        addBot: "Añade gratis un chatbot IA a tu web.",
        sendMessage: "Enviar mensaje",
        loading: "Cargando..",
        errorName: "El nombre debe tener al menos 3 caracteres.",
        errorTelephone: "El teléfono debe tener exactamente 9 caracteres.",
        errorEmail: "Por favor, introduce un correo electrónico válido.",
        apikey: "API KEY es requerido.",
        baseurl: "BASE URL es requerido.",
        more: "Más información.",
    },
    en: {
        title: "Virtual Assistant",
        subtitle: "Fill out the form below for personalized attention.",
        name: "Name",
        telephone: "Phone",
        email: "Email",
        startChat: "Start chat",
        addBot: "Add a free chatbot AI to your website.",
        sendMessage: "Send message",
        loading: "Loading..",
        errorName: "The name must be at least 3 characters long.",
        errorTelephone: "The phone number must be exactly 9 characters long.",
        errorEmail: "Please enter a valid email address.",
        apikey: "API KEY is required.",
        baseurl: "BASE URL is required.",
        more: "Read more...",
    },
};

type TranslationKey = keyof typeof translations.en;

export function createT(lang: "es" | "en") {
    return function t(key: TranslationKey) {
        return translations[lang]?.[key] || key;
    };
}
