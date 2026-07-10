import { EncryptStorage } from "encrypt-storage";
const KEY = import.meta.env.VITE_ENCRYPTION_KEY as string;

function encryptStorage() {
	return new EncryptStorage(KEY, {
		storageType: "localStorage",
	});
}

export default encryptStorage();
