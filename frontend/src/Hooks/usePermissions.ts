import { useMe } from "@/Hooks/useAuth";
import {
	hasPermission,
	hasAnyPermission,
	hasAllPermissions,
	type Permission,
} from "@/Guard";

export function usePermissions() {
	const { data: user } = useMe();

	return {
		can: (permission: Permission) => hasPermission(user, permission),
		canAny: (permissions: Permission[]) =>
			user ? hasAnyPermission(user, permissions) : false,
		canAll: (permissions: Permission[]) =>
			user ? hasAllPermissions(user, permissions) : false,
		user,
	};
}
