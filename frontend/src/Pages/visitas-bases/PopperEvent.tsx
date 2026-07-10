import type { VisitaBase } from "@/Types/VisitaBase";

import {
	Box,
	Chip,
	Divider,
	Fade,
	Popper,
	Stack,
	Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { DateFormatUTC } from "@/Utils/dates";

type HoveredVisita = {
	anchorEl: HTMLElement;
	visita: VisitaBase;
	color: string;
};

function getVisitaTitle(visita: VisitaBase): string {
	return visita.base ?? visita.outro_motivo ?? "Visita";
}

export default function PopperEvent({
	hoveredVisita,
}: {
	hoveredVisita: HoveredVisita | null;
}) {
	return (
		<Popper
			open={Boolean(hoveredVisita)}
			anchorEl={hoveredVisita?.anchorEl}
			placement="top"
			transition
			sx={{ pointerEvents: "none", zIndex: (theme) => theme.zIndex.tooltip }}
		>
			{({ TransitionProps }) => (
				<Fade {...TransitionProps} timeout={140}>
					<Box
						sx={(theme) => ({
							width: { xs: "min(86vw, 320px)", sm: 340 },
							border: `1px solid ${alpha(
								hoveredVisita?.color ?? theme.palette.primary.main,
								theme.palette.mode === "dark" ? 0.38 : 0.24,
							)}`,
							borderRadius: 2,
							backgroundColor:
								theme.palette.mode === "dark"
									? alpha(theme.palette.background.paper, 0.96)
									: theme.palette.background.paper,
							boxShadow:
								theme.palette.mode === "dark"
									? `0 18px 44px ${alpha(theme.palette.common.black, 0.42)}`
									: `0 18px 44px ${alpha(theme.palette.common.black, 0.16)}`,
							color: theme.palette.text.primary,
							overflow: "hidden",
						})}
					>
						{hoveredVisita && (
							<>
								<Box
									sx={(theme) => ({
										backgroundColor: alpha(
											hoveredVisita.color,
											theme.palette.mode === "dark" ? 0.18 : 0.1,
										),
										borderBottom: `1px solid ${alpha(
											hoveredVisita.color,
											theme.palette.mode === "dark" ? 0.26 : 0.16,
										)}`,
										px: 1.75,
										py: 1.4,
									})}
								>
									<Stack spacing={1}>
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="space-between"
											gap={1}
										>
											<Typography
												variant="subtitle2"
												fontWeight={800}
												lineHeight={1.2}
												noWrap
											>
												{getVisitaTitle(hoveredVisita.visita)}
											</Typography>
											<Chip
												size="small"
												label={
													hoveredVisita.visita.base ? "Base" : "Outro motivo"
												}
												sx={(theme) => ({
													height: 24,
													color: theme.palette.getContrastText(
														hoveredVisita.color,
													),
													backgroundColor: hoveredVisita.color,
													fontSize: "0.72rem",
													fontWeight: 800,
												})}
											/>
										</Stack>
										<Typography variant="caption" color="text.secondary">
											{DateFormatUTC(hoveredVisita.visita.data, "DD/MM/YY")}
										</Typography>
									</Stack>
								</Box>
								<Stack spacing={1.25} sx={{ px: 1.75, py: 1.5 }}>
									<Box>
										<Typography
											variant="caption"
											color="text.secondary"
											fontWeight={700}
										>
											Observação
										</Typography>
										<Typography variant="body2" sx={{ mt: 0.25 }}>
											{hoveredVisita.visita.descricao?.trim() ||
												"Sem observações informadas."}
										</Typography>
									</Box>
									<Divider />
									<Stack
										direction={{ xs: "column", sm: "row" }}
										justifyContent="space-between"
										gap={1}
									>
										<Box>
											<Typography
												variant="caption"
												color="text.secondary"
												fontWeight={700}
											>
												Registrado por
											</Typography>
											<Typography variant="body2" fontWeight={700}>
												{hoveredVisita.visita.User.nome || "Não informado"}
											</Typography>
										</Box>
										<Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
											<Typography
												variant="caption"
												color="text.secondary"
												fontWeight={700}
											>
												Ação
											</Typography>
											<Typography variant="body2" fontWeight={700}>
												Clique para editar
											</Typography>
										</Box>
									</Stack>
								</Stack>
							</>
						)}
					</Box>
				</Fade>
			)}
		</Popper>
	);
}
