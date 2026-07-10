import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
	View as PdfView,
} from "@react-pdf/renderer";
import {
	TIPO_LABELS,
	TIPO_LABELS_PDF,
	type Requerimento,
	type RequerimentoItemEntry,
	type TipoRequerimento,
} from "@/Types/Requerimento";
import { DateFormat } from "@/Utils/dates";
import { TableProdutos } from "./TableProdutos";

const pdfTheme = {
	primary: "#ff781d",
	secondary: "#0B132B",
	text: "#363435",
	textSecondary: "#5f6c7b",
	border: "#d9dee8",
	softBackground: "#f7f8fb",
	white: "#ffffff",
};

const LOGOS = {
	cisru: "/images/logos/cisru.png",
	samu: "/images/logos/samu.png",
};

const pdfStyles = StyleSheet.create({
	page: {
		padding: 32,
		fontFamily: "Helvetica",
		fontSize: 9,
		color: pdfTheme.text,
	},
	header: {
		borderBottomWidth: 2,
		borderBottomColor: pdfTheme.primary,
		paddingBottom: 10,
		marginBottom: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logoBox: { width: 72, alignItems: "center" },
	logo: { width: 56, height: 56, objectFit: "contain" },
	headerCenter: { flex: 1, alignItems: "center", paddingHorizontal: 12 },
	title: {
		fontSize: 16,
		fontFamily: "Helvetica-Bold",
		color: pdfTheme.secondary,
		textAlign: "center",
	},
	subtitle: { fontSize: 9, color: pdfTheme.textSecondary, marginTop: 2 },
	number: {
		fontSize: 11,
		fontFamily: "Helvetica-Bold",
		color: pdfTheme.primary,
		marginTop: 5,
	},
	status: {
		fontSize: 9,
		fontFamily: "Helvetica-Bold",
		color: pdfTheme.secondary,
		marginTop: 3,
	},
	section: { marginBottom: 12 },
	sectionTitle: {
		fontSize: 8,
		fontFamily: "Helvetica-Bold",
		color: pdfTheme.secondary,
		textTransform: "uppercase",
		borderBottomWidth: 1,
		borderBottomColor: pdfTheme.border,
		paddingBottom: 3,
		marginBottom: 6,
	},
	sectionTitleInline: {
		fontSize: 8,
		fontFamily: "Helvetica-Bold",
		color: pdfTheme.secondary,
		textTransform: "uppercase",
	},
	row: { flexDirection: "row", marginBottom: 4 },
	label: { fontSize: 8, color: pdfTheme.textSecondary, width: 82 },
	value: { fontSize: 8, fontFamily: "Helvetica-Bold", flex: 1 },
	sectionTitleRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: pdfTheme.border,
		paddingBottom: 3,
		marginBottom: 6,
	},
	itemsSummary: {
		fontSize: 7,
		fontFamily: "Helvetica-Bold",
		color: pdfTheme.primary,
	},
	table: { marginTop: 4 },
	tableHeader: {
		flexDirection: "row",
		backgroundColor: pdfTheme.secondary,
		padding: "5 4",
	},
	tableRow: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: pdfTheme.border,
		padding: "4 4",
	},
	tableRowAlt: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: pdfTheme.border,
		backgroundColor: pdfTheme.softBackground,
		padding: "4 4",
	},
	th: { fontSize: 7, fontFamily: "Helvetica-Bold", color: pdfTheme.white },
	td: { fontSize: 7, color: pdfTheme.text },
	codeCol: { flex: 1, textAlign: "center" },
	itemCol: { flex: 3 },
	detailCol: { flex: 2 },
	qtyCol: { flex: 1, textAlign: "center" },
	occurrenceCol: { flex: 2 },
	obs: {
		borderWidth: 1,
		borderColor: pdfTheme.border,
		backgroundColor: pdfTheme.softBackground,
		padding: 6,
		fontSize: 8,
		minHeight: 32,
	},
	emptyText: {
		fontSize: 8,
		color: pdfTheme.textSecondary,
		fontStyle: "italic",
	},
	footer: {
		position: "absolute",
		left: 32,
		right: 32,
		bottom: 22,
		borderTopWidth: 1,
		borderTopColor: pdfTheme.border,
		paddingTop: 6,
		flexDirection: "row",
		justifyContent: "space-between",
		color: pdfTheme.textSecondary,
		fontSize: 7,
	},
});

function getItemName(item: RequerimentoItemEntry) {
	return item.Medicamento?.nome ?? item.Produto?.nome ?? "Item sem nome";
}

function getItemCode(item: RequerimentoItemEntry) {
	return item.Medicamento?.codigo ?? item.Produto?.codigo ?? "-";
}

function getItemCategory(item: RequerimentoItemEntry) {
	return item.Medicamento?.categoria ?? item.Produto?.categoria ?? "-";
}

function getOrdem(item: RequerimentoItemEntry) {
	return item.Produto?.ordem ?? "-";
}

export function RequerimentoPDFDocument({
	requerimento,
	tipo,
	printedBy,
}: {
	requerimento: Requerimento;
	tipo: TipoRequerimento;
	printedBy: string;
}) {
	const itens = requerimento.RequerimentoItems?.filter(
		(i) => !i.Produto?.fora_alx,
	);
	const itensForaAlmoxarifado = requerimento.RequerimentoItems?.filter(
		(i) => i.Produto?.fora_alx,
	);

	return (
		<Document
			title={`Requerimento ${TIPO_LABELS_PDF[tipo]} ${requerimento.numero}`}
		>
			<Page size="A4" style={pdfStyles.page} wrap>
				<PdfView style={pdfStyles.header}>
					<PdfView style={pdfStyles.logoBox}>
						<Image src={LOGOS.cisru} style={pdfStyles.logo} />
					</PdfView>
					<PdfView style={pdfStyles.headerCenter}>
						<Text style={pdfStyles.title}>
							Requerimento {TIPO_LABELS_PDF[tipo]}
						</Text>
						<Text style={pdfStyles.subtitle}>
							Emitido em {DateFormat(new Date())}
						</Text>
						<Text style={pdfStyles.number}>Nº: #{requerimento.numero}</Text>
						<Text style={pdfStyles.status}>Status: {requerimento.status}</Text>
					</PdfView>
					<PdfView style={pdfStyles.logoBox}>
						<Image src={LOGOS.samu} style={pdfStyles.logo} />
					</PdfView>
				</PdfView>

				<PdfView style={pdfStyles.section}>
					<Text style={pdfStyles.sectionTitle}>Dados do requerimento</Text>
					<PdfView style={pdfStyles.row}>
						<Text style={pdfStyles.label}>Tipo:</Text>
						<Text style={pdfStyles.value}>{TIPO_LABELS[tipo]}</Text>
						<Text style={pdfStyles.label}>Aberto por:</Text>
						<Text style={pdfStyles.value}>{requerimento.User.nome}</Text>
					</PdfView>
					<PdfView style={pdfStyles.row}>
						<Text style={pdfStyles.label}>Base:</Text>
						<Text style={pdfStyles.value}>{requerimento.base}</Text>
						<Text style={pdfStyles.label}>Setor:</Text>
						<Text style={pdfStyles.value}>{requerimento.setor}</Text>
					</PdfView>
					<PdfView style={pdfStyles.row}>
						<Text style={pdfStyles.label}>Cargo:</Text>
						<Text style={pdfStyles.value}>
							{requerimento.User.Cargo.nomeVisivel}
						</Text>
						{tipo === "Farmacia" && (
							<>
								<Text style={pdfStyles.label}>Ambulância:</Text>
								<Text style={pdfStyles.value}>
									{requerimento.Ambulancia?.nome
										? `${requerimento.Ambulancia?.tipo} - ${requerimento.Ambulancia?.nome}`
										: "-"}
								</Text>
							</>
						)}
					</PdfView>
					<PdfView style={pdfStyles.row}>
						<Text style={pdfStyles.label}>Criado em:</Text>
						<Text style={pdfStyles.value}>
							{DateFormat(requerimento.data_inicio)}
						</Text>
						<Text style={pdfStyles.label}>Finalizado em:</Text>
						<Text style={pdfStyles.value}>
							{requerimento.data_fim ? DateFormat(requerimento.data_fim) : "-"}
						</Text>
					</PdfView>
				</PdfView>

				<PdfView style={pdfStyles.section}>
					<PdfView style={pdfStyles.sectionTitleRow}>
						<Text style={pdfStyles.sectionTitleInline}>Itens</Text>
						<Text style={pdfStyles.itemsSummary}>
							{itens?.length || 0}{" "}
							{tipo === "Farmacia" ? "Medicamento(s)" : "Produto(s)"}
						</Text>
					</PdfView>
					{itens?.length === 0 ? (
						<Text style={pdfStyles.emptyText}>
							Nenhum {tipo === "Farmacia" ? "medicamento(s)" : "produto(s)"}.
						</Text>
					) : (
						<TableProdutos itens={itens as any} />
					)}
				</PdfView>

				{requerimento.tipo === "Almoxarifado" &&
					itensForaAlmoxarifado &&
					itensForaAlmoxarifado.length > 0 && (
						<PdfView style={pdfStyles.section}>
							<PdfView style={pdfStyles.sectionTitleRow}>
								<Text style={pdfStyles.sectionTitleInline}>
									Itens fora do almoxarifado
								</Text>
								<Text style={pdfStyles.itemsSummary}>
									{itensForaAlmoxarifado?.length || 0} Produto(s)
								</Text>
							</PdfView>
							{itensForaAlmoxarifado?.length === 0 ? (
								<Text style={pdfStyles.emptyText}>
									Nenhum produto fora do almoxarifado.
								</Text>
							) : (
								<TableProdutos itens={itensForaAlmoxarifado as any} />
							)}
						</PdfView>
					)}

				<PdfView style={pdfStyles.section}>
					<Text style={pdfStyles.sectionTitle}>Observação</Text>
					<Text style={pdfStyles.obs}>
						{requerimento.obs || "Sem observação."}
					</Text>
				</PdfView>

				<PdfView style={pdfStyles.footer} fixed>
					<Text>
						Requerimento Nº: #{requerimento.numero} - Impresso por {printedBy}
					</Text>
					<Text>Gerado em {DateFormat(new Date())}</Text>
					<Text
						render={({ pageNumber, totalPages }) =>
							`Folha ${pageNumber} de ${totalPages}`
						}
					/>
				</PdfView>
			</Page>
		</Document>
	);
}
