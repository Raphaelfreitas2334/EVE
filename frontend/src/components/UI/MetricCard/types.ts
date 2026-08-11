import type { ReactNode } from "react";

export type EveMetricCardTrendColor =
    | "success"
    | "danger"
    | "warning"
    | "info";

export interface EveMetricCardTrend {

    value: ReactNode;

    description?: ReactNode;

    color?: EveMetricCardTrendColor;

}

export interface EveMetricCardProps {

    /**
     * Título principal.
     */
    title: ReactNode;

    /*
     * Valor principal.
     */
    value: ReactNode;

    /**
     * Ícone.
     */
    icon: ReactNode;

    /**
     * Cor ou gradiente.
     */
    iconBackground?: string;

    /**
     * Cor do ícone.
     */
    iconColor?: string;

    /**
     * Texto auxiliar.
     */
    description?: ReactNode;

    /**
     * Subtítulo.
     */
    subtitle?: ReactNode;

    /**
     * Tendência.
     */
    trend?: EveMetricCardTrend;

    /**
     * Badge.
     */
    badge?: ReactNode;

    /**
     * Rodapé.
     */
    footer?: ReactNode;

    /**
     * Clique.
     */
    onClick?: () => void;

}