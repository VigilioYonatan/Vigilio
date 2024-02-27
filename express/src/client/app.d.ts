declare global {
    namespace Express {
        interface Request {
            $web: WebClass;
        }
    }
}

export interface Web {
    success: boolean;
    web: WebClass;
}

export interface WebClass {
    id: number;
    url: string;
    token: string;
    message: null;
    date_release: string;
    enabled: boolean;
    technologies: TechnologyElement[];
    category_id: number;
    createdAt: string;
    updatedAt: string;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    ico: string;
    createdAt: string;
    updatedAt: string;
}

export interface TechnologyElement {
    technology_id: number;
    isPay: boolean;
    isStart: null | string;
    isEnd: null | string;
}

export interface TechnologyTechnology {
    id: number;
    name: string;
    subcategory: Subcategory;
}

export interface Subcategory {
    id: number;
    name: string;
    is_enabled: boolean;
    category_id: number;
    createdAt: string;
    updatedAt: string;
    category: Category;
}
