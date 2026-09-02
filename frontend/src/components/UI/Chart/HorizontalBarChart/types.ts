export interface EveHorizontalBarChartProps {

    labels: string[];

    data: number[];

    colors?: string[];

    unit?: string;

    height?: number;

    title?: string;

    showGrid?: boolean;

    showTooltip?: boolean;

    showDataLabels?: boolean;

    animate?: boolean;

    onBarClick?:(index:number)=>void;

}