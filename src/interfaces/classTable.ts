export interface classTable {
    name: string;
    credits: number;
}
export interface iNumTable {
    year: number;
}
export interface indSemes {
    classes: Array<classTable>;
    setClasses: (classes: Array<classTable>) => void;
}
