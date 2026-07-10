import {
	Document,
	Font,
	Page,
	PDFDownloadLink,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";
import { Download } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import type { Receituario } from "@/Types/Receituario";
import {
	ADMINISTRACAO_LABELS,
	DILUENTE_LABELS,
	UNIDADE_LABELS,
} from "@/Types/Receituario";

const styles = StyleSheet.create({
	page: {
		padding: 32,
		fontFamily: "Helvetica",
		fontSize: 9,
		color: "#1a1a1a",
	},
	header: {
		borderBottomWidth: 2,
		borderBottomColor: "#1565c0",
		paddingBottom: 8,
		marginBottom: 12,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	headerLeft: { flex: 1 },
	title: { fontSize: 16, fontFamily: "Helvetica-Bold", color: "#1565c0" },
	subtitle: { fontSize: 9, color: "#555", marginTop: 2 },
	numero: { fontSize: 11, fontFamily: "Helvetica-Bold", color: "#1565c0" },
	section: { marginBottom: 10 },
	sectionTitle: {
		fontSize: 8,
		fontFamily: "Helvetica-Bold",
		color: "#1565c0",
		textTransform: "uppercase",
		borderBottomWidth: 1,
		borderBottomColor: "#bbdefb",
		paddingBottom: 2,
		marginBottom: 5,
	},
	row: { flexDirection: "row", marginBottom: 3 },
	label: { fontSize: 8, color: "#666", width: 90 },
	value: { fontSize: 8, fontFamily: "Helvetica-Bold", flex: 1 },
	table: { marginTop: 4 },
	tableHeader: {
		flexDirection: "row",
		backgroundColor: "#1565c0",
		padding: "4 3",
	},
	tableRow: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#e3f2fd",
		padding: "3 3",
	},
	tableRowAlt: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#e3f2fd",
		padding: "3 3",
		backgroundColor: "#f5f5f5",
	},
	th: { fontSize: 7, fontFamily: "Helvetica-Bold", color: "#fff" },
	td: { fontSize: 7 },
	col1: { flex: 3 },
	col2: { flex: 1 },
	col3: { flex: 1 },
	col4: { flex: 1 },
	col5: { flex: 2 },
	col6: { flex: 1 },
	obs: { flex: 2 },
	statusBadge: {
		fontSize: 10,
		fontFamily: "Helvetica-Bold",
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 4,
	},
	footer: {
		marginTop: 24,
		borderTopWidth: 1,
		borderTopColor: "#ccc",
		paddingTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	signatureBox: {
		width: "45%",
		borderTopWidth: 1,
		borderTopColor: "#555",
		paddingTop: 4,
		alignItems: "center",
	},
	signatureLabel: { fontSize: 7, color: "#555" },
	emptyMsg: { fontSize: 8, color: "#999", fontStyle: "italic", marginTop: 4 },
});

function fmt(dateStr: string) {
	try {
		return new Date(dateStr).toLocaleDateString("pt-BR", { timeZone: "UTC" });
	} catch {
		return dateStr;
	}
}

const STATUS_COLOR: Record<string, string> = {
	Aberto: "#1565c0",
	Finalizado: "#2e7d32",
	Cancelado: "#c62828",
};

function ReceituarioPDFDoc({ receituario }: { receituario: Receituario }) {
	return (
		<Document title={`Receituário ${receituario.numero}`}>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<Text style={styles.title}>Receituário Médico</Text>
						<Text style={styles.subtitle}>SAMU / Almoxarifado/Farmácia</Text>
					</View>
					<View>
						<Text style={styles.numero}>{receituario.numero}</Text>
						<Text
							style={[
								styles.statusBadge,
								{ color: STATUS_COLOR[receituario.status] ?? "#000" },
							]}
						>
							{receituario.status}
						</Text>
					</View>
				</View>

				{/* Info geral */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Identificação</Text>
					<View style={styles.row}>
						<Text style={styles.label}>Data:</Text>
						<Text style={styles.value}>{fmt(receituario.data)}</Text>
						<Text style={styles.label}>Ocorrência nº:</Text>
						<Text style={styles.value}>{receituario.ocorrencia}</Text>
						<Text style={styles.label}>Data Ocorrência:</Text>
						<Text style={styles.value}>{fmt(receituario.data_ocorrencia)}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Base:</Text>
						<Text style={styles.value}>{receituario.Base?.nome ?? receituario.base}</Text>
						<Text style={styles.label}>Ambulância:</Text>
						<Text style={styles.value}>
							{receituario.Ambulancia?.nome ?? receituario.ambulancia}{" "}
							{receituario.Ambulancia?.tipo ? `(${receituario.Ambulancia.tipo})` : ""}
						</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Médico:</Text>
						<Text style={styles.value}>
							{receituario.Medico?.nome ?? receituario.medico}
							{receituario.Medico?.crm ? ` — CRM: ${receituario.Medico.crm}` : ""}
						</Text>
					</View>
					{receituario.obs && (
						<View style={styles.row}>
							<Text style={styles.label}>Observação:</Text>
							<Text style={styles.value}>{receituario.obs}</Text>
						</View>
					)}
				</View>

				{/* Medicamentos */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Medicamentos Prescritos</Text>
					{receituario.ReceituarioMedicamentos.length === 0 ? (
						<Text style={styles.emptyMsg}>Nenhum medicamento registrado.</Text>
					) : (
						<View style={styles.table}>
							<View style={styles.tableHeader}>
								<Text style={[styles.th, styles.col1]}>Medicamento</Text>
								<Text style={[styles.th, styles.col2]}>Qtd</Text>
								<Text style={[styles.th, styles.col3]}>Unidade</Text>
								<Text style={[styles.th, styles.col4]}>Via</Text>
								<Text style={[styles.th, styles.col5]}>Diluente</Text>
								<Text style={[styles.th, styles.col6]}>Tempo</Text>
								<Text style={[styles.th, styles.obs]}>Obs</Text>
							</View>
							{receituario.ReceituarioMedicamentos.map((m, i) => {
								const RowStyle = i % 2 === 0 ? styles.tableRow : styles.tableRowAlt;
								const diluenteText =
									m.diluente
										? `${DILUENTE_LABELS[m.diluente]} ${m.qnt_diluente ? `${m.qnt_diluente}mL` : ""}`
										: "—";
								return (
									<View key={m.id} style={RowStyle}>
										<Text style={[styles.td, styles.col1]}>
											{m.Medicamento?.nome ?? m.medicamento}
										</Text>
										<Text style={[styles.td, styles.col2]}>{m.qnt}</Text>
										<Text style={[styles.td, styles.col3]}>
											{UNIDADE_LABELS[m.unidade]}
										</Text>
										<Text style={[styles.td, styles.col4]}>
											{ADMINISTRACAO_LABELS[m.administracao]}
										</Text>
										<Text style={[styles.td, styles.col5]}>{diluenteText}</Text>
										<Text style={[styles.td, styles.col6]}>
											{m.qnt_tempo ? `${m.qnt_tempo} min` : "—"}
										</Text>
										<Text style={[styles.td, styles.obs]}>{m.obs ?? "—"}</Text>
									</View>
								);
							})}
						</View>
					)}
				</View>

				{/* Assinaturas */}
				<View style={styles.footer}>
					<View style={styles.signatureBox}>
						<Text style={styles.signatureLabel}>Assinatura do Médico</Text>
						<Text style={styles.signatureLabel}>
							{receituario.Medico?.nome ?? receituario.medico}
						</Text>
					</View>
					<View style={styles.signatureBox}>
						<Text style={styles.signatureLabel}>Responsável pela Dispensação</Text>
					</View>
				</View>

				{/* Rodapé */}
				<View style={{ marginTop: 16, alignItems: "center" }}>
					<Text style={{ fontSize: 7, color: "#999" }}>
						Emitido em {new Date().toLocaleString("pt-BR")} — {receituario.numero}
					</Text>
				</View>
			</Page>
		</Document>
	);
}

export function ReceituarioPDFButton({ receituario }: { receituario: Receituario }) {
	return (
		<PDFDownloadLink
			document={<ReceituarioPDFDoc receituario={receituario} />}
			fileName={`receituario-${receituario.numero}.pdf`}
			style={{ textDecoration: "none" }}
		>
			{({ loading }) => (
				<Button
					variant="contained"
					size="small"
					startIcon={loading ? <CircularProgress size={14} color="inherit" /> : <Download />}
					disabled={loading}
				>
					{loading ? "Gerando..." : "Baixar PDF"}
				</Button>
			)}
		</PDFDownloadLink>
	);
}
