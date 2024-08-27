export interface ChartData {
    name:string,
    values: ItemData[]
}

export interface ItemData {
    date: Date,
    value: number
}
