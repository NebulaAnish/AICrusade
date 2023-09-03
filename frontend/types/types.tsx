export type Coordinates = [number, number];

export interface Transformer {
    latitude: number;
    longitude: number;
    installed_at: Date;
    fault?: number;
    img?: string;
    transformer_type: string;
    manufacture_type: string;
}
