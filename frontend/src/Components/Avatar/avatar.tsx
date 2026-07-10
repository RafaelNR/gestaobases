import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

//* IMAGE
import AvatarImagem from "/images/avatars/avatar.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "0px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

const SmallAvatar = styled(Avatar)({
	width: 35,
	height: 35,
	border: `1px solid white`,
	background: "white",
});

export default function BadgeAvatars({ avatar }: { avatar?: string }) {
	return (
		<Stack direction="row" spacing={2} sx={{ mr: 1 }}>
			<StyledBadge
				overlap="circular"
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				variant="dot"
			>
				<SmallAvatar
					alt="Avatar"
					src={
						avatar
							? `${import.meta.env.VITE_API_BACKEND_HTTPS_URL}${avatar}`
							: AvatarImagem
					}
				/>
			</StyledBadge>
		</Stack>
	);
}
