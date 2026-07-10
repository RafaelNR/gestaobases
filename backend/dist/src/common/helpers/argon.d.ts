export declare function hashPassword(plain: string): Promise<string>;
export declare function verifyPassword(hash: string, plain: string): Promise<boolean>;
export declare function hashToken(token: string): Promise<string>;
export declare function verifyToken(hash: string, token: string): Promise<boolean>;
