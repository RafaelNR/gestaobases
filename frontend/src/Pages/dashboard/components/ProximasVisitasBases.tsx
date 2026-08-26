import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useProximasVisitas } from "@/Hooks/useDashBoard";
import useLocalStore from "@/Hooks/useLocalStore";
import type { ProximaVisitaBase } from "@/Types/VisitaBase";
import type { TipoRequerimento } from "@/Types/Requerimento";

type Layout = "destaque" | "timeline" | "grade";
type TipoFiltro = "todos" | TipoRequerimento | null;
type Prioridade = "vermelho" | "amarelo" | "verde";

const TIPOS_REQUERIMENTO: TipoRequerimento[] = [
  "CME",
  "Farmacia",
  "Almoxarifado",
];

const PERIODOS = [3, 7, 15, 30];
const STORAGE_KEY = "dashboard.proximasVisitasBases.dias";

function dataCivil(data: string | Date) {
  return dayjs(String(data).slice(0, 10));
}

const PRIORIDADE: Record<
  Prioridade,
  { label: string; color: "error" | "warning" | "success"; background: string }
> = {
  vermelho: {
    label: "Não enviado",
    color: "error",
    background: "rgba(211, 47, 47, 0.08)",
  },
  amarelo: {
    label: "Pendente",
    color: "warning",
    background: "rgba(237, 108, 2, 0.10)",
  },
  verde: {
    label: "Recebido",
    color: "success",
    background: "rgba(46, 125, 50, 0.10)",
  },
};

function getPrioridade(
  visita: ProximaVisitaBase,
  tipo: TipoRequerimento,
): Prioridade {
  if (tipo === "CME") return visita.prioridadeCME;
  if (tipo === "Farmacia") return visita.prioridadeFarmacia;
  return visita.prioridadeAlx;
}

function getRequerimentoId(visita: ProximaVisitaBase, tipo: TipoRequerimento) {
  if (tipo === "CME") return visita.reqCMEId;
  if (tipo === "Farmacia") return visita.reqFarmaciaId;
  return visita.reqAlxId;
}

function getTiposExibidos(tipo: TipoFiltro): TipoRequerimento[] {
  return tipo && tipo !== "todos" ? [tipo] : TIPOS_REQUERIMENTO;
}

function getPrioridadePrincipal(
  visita: ProximaVisitaBase,
  tipo: TipoFiltro,
): Prioridade {
  const prioridades = getTiposExibidos(tipo).map((item) =>
    getPrioridade(visita, item),
  );
  return prioridades.includes("vermelho")
    ? "vermelho"
    : prioridades.includes("amarelo")
      ? "amarelo"
      : "verde";
}

function StatusChip({
  visita,
  tipo,
}: {
  visita: ProximaVisitaBase;
  tipo: TipoFiltro;
}) {
  const tipos = getTiposExibidos(tipo);

  return (
    <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
      {tipos.map((tipoRequerimento) => {
        const prioridade = PRIORIDADE[getPrioridade(visita, tipoRequerimento)];
        return (
          <Chip
            key={tipoRequerimento}
            size="small"
            color={prioridade.color}
            label={`${tipoRequerimento}: ${prioridade.label}`}
            sx={{ fontWeight: 700 }}
          />
        );
      })}
    </Stack>
  );
}

function VisitaDetalhes({ visita }: { visita: ProximaVisitaBase }) {
  return (
    <Box>
      <Typography fontWeight={800}>{visita.base}</Typography>
      <Typography variant="body2" color="text.secondary">
        Descrição: {visita.descricao || " - "}
      </Typography>
    </Box>
  );
}

function VisitaInterativa({
  visita,
  onOpen,
  tipo,
  children,
}: {
  visita: ProximaVisitaBase;
  onOpen: (visita: ProximaVisitaBase) => void;
  tipo: TipoFiltro;
  children: ReactNode;
}) {
  const clicavel = getTiposExibidos(tipo).some(
    (tipoRequerimento) => getRequerimentoId(visita, tipoRequerimento) !== null,
  );

  return (
    <Box
      onClick={clicavel ? () => onOpen(visita) : undefined}
      onKeyDown={
        clicavel
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onOpen(visita);
              }
            }
          : undefined
      }
      role={clicavel ? "button" : undefined}
      tabIndex={clicavel ? 0 : undefined}
      sx={{
        cursor: clicavel ? "pointer" : "default",
        ...(clicavel && {
          "&:hover": { opacity: 0.86 },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            outlineOffset: 2,
          },
        }),
      }}
    >
      {children}
    </Box>
  );
}

function VisitaLinha({
  visita,
  onOpen,
  tipo,
}: {
  visita: ProximaVisitaBase;
  onOpen: (visita: ProximaVisitaBase) => void;
  tipo: TipoFiltro;
}) {
  const prioridade = PRIORIDADE[getPrioridadePrincipal(visita, tipo)];

  return (
    <VisitaInterativa visita={visita} onOpen={onOpen} tipo={tipo}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        alignItems={{ sm: "center" }}
        justifyContent="space-between"
        sx={{
          p: 1.25,
          borderRadius: 2,
          backgroundColor: prioridade.background,
        }}
      >
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: `${prioridade.color}.main`,
            }}
          />
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              {dataCivil(visita.data).format("DD/MM/YYYY")}
            </Typography>
            <VisitaDetalhes visita={visita} />
          </Box>
        </Stack>
        <StatusChip visita={visita} tipo={tipo} />
      </Stack>
    </VisitaInterativa>
  );
}

function DestaqueLayout({
  visitas,
  onOpen,
  tipo,
}: {
  visitas: ProximaVisitaBase[];
  onOpen: (visita: ProximaVisitaBase) => void;
  tipo: TipoFiltro;
}) {
  const [proxima, ...restantes] = visitas;
  const prioridade = PRIORIDADE[getPrioridadePrincipal(proxima, tipo)];

  return (
    <Stack spacing={1.5}>
      <VisitaInterativa visita={proxima} onOpen={onOpen} tipo={tipo}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2.5,
            background: `linear-gradient(135deg, ${prioridade.background}, rgba(255,255,255,0.75))`,
            border: "1px solid",
            borderColor: `${prioridade.color}.main`,
          }}
        >
          <Typography
            variant="overline"
            color="text.secondary"
            fontWeight={800}
          >
            Próxima visita
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
            mt={0.5}
          >
            <Box>
              <Typography variant="h6" fontWeight={900}>
                {proxima.base}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dataCivil(proxima.data).format("dddd, DD/MM/YYYY")}
                {proxima.descricao ? ` · ${proxima.descricao}` : ""}
              </Typography>
            </Box>
            <StatusChip visita={proxima} tipo={tipo} />
          </Stack>
        </Box>
      </VisitaInterativa>
      {restantes.map((visita) => (
        <VisitaLinha
          key={visita.id}
          visita={visita}
          onOpen={onOpen}
          tipo={tipo}
        />
      ))}
    </Stack>
  );
}

function TimelineLayout({
  visitas,
  onOpen,
  tipo,
}: {
  visitas: ProximaVisitaBase[];
  onOpen: (visita: ProximaVisitaBase) => void;
  tipo: TipoFiltro;
}) {
  const grupos = useMemo(() => {
    return visitas.reduce<Map<string, ProximaVisitaBase[]>>((mapa, visita) => {
      const chave = dataCivil(visita.data).format("YYYY-MM-DD");
      mapa.set(chave, [...(mapa.get(chave) ?? []), visita]);
      return mapa;
    }, new Map());
  }, [visitas]);

  return (
    <Stack spacing={1.5}>
      {Array.from(grupos.entries()).map(([data, visitasDoDia]) => (
        <Box key={data} sx={{ position: "relative", pl: 3 }}>
          <Box
            sx={{
              position: "absolute",
              left: 7,
              top: 4,
              bottom: 0,
              width: 2,
              backgroundColor: "divider",
            }}
          />
          <Typography variant="subtitle2" fontWeight={900} mb={0.75}>
            {dataCivil(data).format("DD/MM/YYYY")}
          </Typography>
          <Stack spacing={0.75}>
            {visitasDoDia.map((visita) => (
              <Box key={visita.id} sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    left: -29,
                    top: 15,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: `${PRIORIDADE[getPrioridadePrincipal(visita, tipo)].color}.main`,
                  }}
                />
                <VisitaLinha visita={visita} onOpen={onOpen} tipo={tipo} />
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

function GradeLayout({
  visitas,
  onOpen,
  tipo,
}: {
  visitas: ProximaVisitaBase[];
  onOpen: (visita: ProximaVisitaBase) => void;
  tipo: "todos" | TipoRequerimento | null;
}) {
  const grupos = useMemo(() => {
    return visitas.reduce<Map<string, ProximaVisitaBase[]>>((mapa, visita) => {
      const chave = dataCivil(visita.data).format("YYYY-MM-DD");
      mapa.set(chave, [...(mapa.get(chave) ?? []), visita]);
      return mapa;
    }, new Map());
  }, [visitas]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 1,
      }}
    >
      {Array.from(grupos.entries()).map(([data, visitasDoDia]) => (
        <Box
          key={data}
          sx={{ p: 1.5, borderRadius: 2, backgroundColor: "action.hover" }}
        >
          <Typography variant="subtitle2" fontWeight={900} mb={1}>
            {dataCivil(data).format("DD/MM/YYYY")}
          </Typography>
          <Stack spacing={0.75}>
            {visitasDoDia.map((visita) => {
              const prioridade =
                PRIORIDADE[getPrioridadePrincipal(visita, tipo)];
              return (
                <VisitaInterativa
                  key={visita.id}
                  visita={visita}
                  onOpen={onOpen}
                  tipo={tipo}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1.5,
                      backgroundColor: prioridade.background,
                      border: "1px solid",
                      borderColor: `${prioridade.color}.main`,
                    }}
                  >
                    <VisitaDetalhes visita={visita} />
                    <Box mt={0.75}>
                      <StatusChip visita={visita} tipo={tipo} />
                    </Box>
                  </Box>
                </VisitaInterativa>
              );
            })}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

export default function ProximasVisitasBases({
  tipo,
}: {
  tipo: "todos" | TipoRequerimento | null;
}) {
  const { getData, setData } = useLocalStore();
  const [dias, setDias] = useState(() => {
    const valorSalvo = Number(getData(STORAGE_KEY));

    return PERIODOS.includes(valorSalvo) ? valorSalvo : PERIODOS[0];
  });
  const [layout, setLayout] = useState<Layout>("grade");
  const { data = [], isLoading, isError } = useProximasVisitas(dias);
  const navigate = useNavigate();

  function abrirRequerimento(visita: ProximaVisitaBase) {
    const tipoRequerimento = getTiposExibidos(tipo).find(
      (item) => getRequerimentoId(visita, item) !== null,
    );
    if (!tipoRequerimento) return;

    const requerimentoId = getRequerimentoId(visita, tipoRequerimento);
    if (!requerimentoId) return;

    navigate(
      `/requerimentos/${tipoRequerimento.toLowerCase()}/view/${requerimentoId}`,
    );
  }

  useEffect(() => {
    setData(STORAGE_KEY, String(dias));
  }, [dias, setData]);

  return (
    <Card
      elevation={0}
      sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3 }}
    >
      <CardHeader
        avatar={<EventAvailableIcon color="primary" />}
        title="Próximas visitas às bases"
        subheader={`Próximos ${dias} dias, incluindo hoje`}
        action={
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="flex-end"
            useFlexGap
          >
            <ToggleButtonGroup
              aria-label="Período das próximas visitas"
              color="primary"
              exclusive
              onChange={(_, value: number | null) => value && setDias(value)}
              size="small"
              value={dias}
            >
              {PERIODOS.map((periodo) => (
                <ToggleButton key={periodo} value={periodo} sx={{ px: 1 }}>
                  {periodo}d
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <ToggleButtonGroup
              aria-label="Modo de visualização das visitas"
              color="primary"
              exclusive
              onChange={(_, value: Layout | null) => value && setLayout(value)}
              size="small"
              value={layout}
            >
              {/* <ToggleButton value="destaque" aria-label="Visualização em destaque">
								<DashboardCustomizeIcon fontSize="small" />
							</ToggleButton>
							<ToggleButton value="timeline" aria-label="Visualização em timeline">
								<ViewTimelineIcon fontSize="small" />
							</ToggleButton> */}
              <ToggleButton value="grade" aria-label="Visualização em grade">
                <CalendarMonthIcon fontSize="small" />
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        }
      />
      <Divider />
      <CardContent>
        {isLoading && (
          <Box display="flex" justifyContent="center" py={2}>
            <CircularProgress size={26} />
          </Box>
        )}
        {isError && (
          <Alert severity="error">
            Não foi possível carregar as próximas visitas.
          </Alert>
        )}
        {!isLoading && !isError && data.length === 0 && (
          <Alert severity="info">
            Nenhuma visita agendada para os próximos {dias} dias.
          </Alert>
        )}
        {!isLoading &&
          !isError &&
          data.length > 0 &&
          (layout === "destaque" ? (
            <DestaqueLayout
              visitas={data}
              onOpen={abrirRequerimento}
              tipo={tipo}
            />
          ) : layout === "timeline" ? (
            <TimelineLayout
              visitas={data}
              onOpen={abrirRequerimento}
              tipo={tipo}
            />
          ) : (
            <GradeLayout
              visitas={data}
              onOpen={abrirRequerimento}
              tipo={tipo}
            />
          ))}
      </CardContent>
    </Card>
  );
}
