export type TipoNotificacao = 'Manifestacao' | 'Requerimento';

export interface Notificacao {
  uuid: string;
  mensagem: string;
  artefatoUUID: string;
  tipo: TipoNotificacao;
  evento: string;
  link: string | null;
  lida: boolean;
  removida: boolean;
  created_at: string;
}

export interface INotificacoesContext {
  notificacoes: Notificacao[] | undefined;
  totalNaoLidas: number;
  totalNaoRemovidas: number;
  loading: boolean;
  getNotificacoes: () => Promise<void>;
  marcarComoLida: (uuid: string) => Promise<void>;
  marcarTodasComoLidas: () => Promise<void>;
  removerAllMyUser: () => Promise<void>
  remover: (uuid: string) => Promise<void>;
}
