export type Coordinates = [number, number];

export interface Transformer {
    latitude: number;
    longitude: number;
    installed_at: string;
    fault?: number;
    img?: string;
    transformer_type: string;
    manufacture_type: string;
    location: string;
}
