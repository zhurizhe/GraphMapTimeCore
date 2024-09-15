export interface Node {
    id: string;
    label: string;
    attributes: Record<string, any>;
    style?: {
        color?: string;
        size?: number;
        shape?: string;
    };
}
