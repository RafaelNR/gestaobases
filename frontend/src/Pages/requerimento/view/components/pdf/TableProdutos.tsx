import { StyleSheet, Text, View as PdfView } from "@react-pdf/renderer";
import {
	type Requerimento,
	type RequerimentoItemEntry,
} from "@/Types/Requerimento";

const pdfTheme = {
	primary: "#ff781d",
	secondary: "#0B132B",
	text: "#363435",
	textSecondary: "#5f6c7b",
	border: "#404040",
	softBackground: "rgba(11, 19, 43, 0.1)",
	white: "#ffffff",
};

const pdfStyles = StyleSheet.create({
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

export function TableProdutos({ itens }: { itens: RequerimentoItemEntry[] }) {
	return (
		<PdfView style={pdfStyles.table}>
			<PdfView style={pdfStyles.tableHeader} fixed>
				<Text style={[pdfStyles.th, pdfStyles.codeCol]}>Código</Text>
				<Text style={[pdfStyles.th, pdfStyles.itemCol]}>Item</Text>
				<Text style={[pdfStyles.th, pdfStyles.detailCol]}>Categoria</Text>
				<Text style={[pdfStyles.th, pdfStyles.qtyCol]}>Quantidade</Text>
				{/* <Text style={[pdfStyles.th, pdfStyles.qtyCol]}>ordem</Text> */}
			</PdfView>
			{itens.map((item, index) => {
				const rowStyle =
					index % 2 === 0 ? pdfStyles.tableRow : pdfStyles.tableRowAlt;

				return (
					<PdfView key={item.id} style={rowStyle} wrap={false}>
						<Text style={[pdfStyles.td, pdfStyles.codeCol]}>
							{getItemCode(item)}
						</Text>
						<Text style={[pdfStyles.td, pdfStyles.itemCol]}>
							{getItemName(item)}
						</Text>
						<Text style={[pdfStyles.td, pdfStyles.detailCol]}>
							{getItemCategory(item)}
						</Text>
						<Text style={[pdfStyles.td, pdfStyles.qtyCol]}>
							{item.quantidade}
						</Text>
						{/* <Text style={[pdfStyles.td, pdfStyles.qtyCol]}>
							{getOrdem(item)}
						</Text> */}
					</PdfView>
				);
			})}
		</PdfView>
	);
}
