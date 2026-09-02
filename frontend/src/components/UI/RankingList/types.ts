import type { ReactNode } from "react";

export interface EveRankingItem {

    /**
     * Identificador único.
     */
    id: string | number;

    /**
     * Título principal.
     */
    title: string;

    /**
     * Texto secundário.
     */
    subtitle?: string;

    /**
     * Valor principal.
     *
     * Ex:
     * 58%
     * R$ 8.520
     * 128 alunos
     */
    value: string;

    /**
     * Barra de progresso.
     */
    progress?: number;

    /**
     * Cor da barra.
     */
    progressColor?: string;

    /**
     * Avatar ou ícone.
     */
    avatar?: ReactNode;

    /**
     * Badge.
     *
     * Ex:
     * Crítico
     * Atenção
     * Ouro
     */
    badge?: ReactNode;

    /**
     * Botão ou ação.
     */
    action?: ReactNode;

}

export interface EveRankingListProps {

    /**
     * Título do componente.
     */
    title?: string;

    /**
     * Lista de registros.
     */
    items: EveRankingItem[];

    /**
     * Layout compacto.
     */
    compact?: boolean;

}