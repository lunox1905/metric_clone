export type DataSeleted = {
    text: string;
    value?: string | number;
    image?: string;
    disabled?: boolean,
}[]


export type Tab = {
    id: number,
    title: string,
    analytic: boolean
}

export type DataPieChart = {
    name: string,
    y: number,
    drilldown: string
}