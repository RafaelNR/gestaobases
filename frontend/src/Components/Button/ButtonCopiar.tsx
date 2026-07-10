import { IconButton, Tooltip } from "@mui/material";
import React, { useCallback, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
type CopyIconProps = {
	value: string;
};

export default function CopyIcon({ value }: CopyIconProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);

			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error("Erro ao copiar:", err);
		}
	}, [value]);

	return (
		<Tooltip arrow title="Click para copiar">
			<IconButton
				onClick={handleCopy}
				role="button"
				title={copied ? "Copiado!" : "Copiar"}
				style={{
					cursor: "pointer",
					display: "inline-flex",
					alignItems: "center",
					color: copied ? "#16a34a" : "#6b7280",
					padding: 0,
					marginLeft: 8,
				}}
			>
				<ContentCopyIcon fontSize="small" />
			</IconButton>
		</Tooltip>
	);
}
