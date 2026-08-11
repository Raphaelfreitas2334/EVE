import type { ReactNode } from "react";

export interface EveProgressListItem {

    /**
     * Identificador único.
     */
    id: string | number;

    /**
     * Texto principal.
     */
    label: string;

    /**
     * Valor bruto.
     */
    value: number;

    /**
     * Valor formatado.
     *
     * Ex:
     * R$ 52.450
     * 96%
     * 324 alunos
     */
    displayValue?: string;

    /**
     * Percentual da barra.
     */
    percent: number;

    /**
     * Texto exibido abaixo do label.
     */
    description?: string;

    /**
     * Cor personalizada da barra.
     */
    color?: string;

    /**
     * Ícone opcional.
     */
    icon?: ReactNode;

}

export interface EveProgressListProps {

    /**
     * Título exibido acima da lista.
     */
    title?: string;

    /**
     * Lista de itens.
     */
    items: EveProgressListItem[];

    /**
     * Exibe o valor.
     */
    showValue?: boolean;

    /**
     * Exibe o percentual.
     */
    showPercentage?: boolean;

    /**
     * Exibe a barra de progresso.
     */
    showProgress?: boolean;

    /**
     * Layout compacto.
     */
    compact?: boolean;

}