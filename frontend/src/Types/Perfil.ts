import { Permission } from "@/Guard";
import { AuthUser } from "./Auth";
import { PerfilSchemaInput } from "./Usuarios";

export type IUser = AuthUser;

export type IPerfil = {
	uuid: string;
	nome: string;
	cpf: string;
	email: string;
	whatsapp?: string;
	telefone?: string;
	password: string;
	email_validado: boolean;
	data_validado?: Date;
	m_bloqueio?: string;
};

export type IPerfilContext = {
	user: IUser;
	setUser: React.Dispatch<React.SetStateAction<IUser>>;
	updatePerfil: (values: PerfilSchemaInput) => Promise<IPerfil | undefined>;
	getPerfil: (email: string) => Promise<IPerfil | undefined>;
	setUserAuth: (newValues: Partial<IUser>) => void;
	hasPermission: (permission: Permission) => boolean;
	confirmToken: (token: string) => Promise<void>;
};
