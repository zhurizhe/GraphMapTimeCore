export interface Edge {
    from: string;
    to: string;
    type: string;
    style?: {
        color?: string;
        width?: number;
        dashed?: boolean;
    };
}
