import getIcon from "@/Store/Icons";
import { Icon, IconProps } from "@iconify/react/dist/iconify.js";

type Icon = {} & IconProps;

export default function Index({ icon, ...rest }: Icon) {
	return <Icon icon={getIcon(icon as string)} {...rest} />;
}

export function MyIcon({ icon, ...rest }: Icon) {
	return <Icon icon={icon} {...rest} />;
}
