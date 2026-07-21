import React, { useCallback } from 'react';
import {
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import useNotificacoes from '@/Hooks/useNotificacoes';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

export default function NotificacoesBell() {
  const navigate = useNavigate();
  const { notificacoes, totalNaoLidas, totalNaoRemovidas, loading, marcarComoLida, marcarTodasComoLidas, remover, removerAllMyUser } =
    useNotificacoes();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClick = useCallback(
    async (id: string, link: string | null, lida: boolean) => {
      if (!lida) await marcarComoLida(id);
      if (link) {
        handleClose();
        navigate(link);
      }
    },
    [marcarComoLida, navigate, handleClose]
  );

  const handleRemover = useCallback(
    async (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      await remover(id);
    },
    [remover]
  );

  const open = Boolean(anchorEl);
  const lista = notificacoes ?? [];


  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{ color: 'text.appBar', mr: 0.5 }}
        aria-label="notificações"
      >
        <Badge
          badgeContent={totalNaoLidas}
          color="error"
          max={99}
          invisible={totalNaoLidas === 0}
        >
          {totalNaoLidas > 0 ? (
            <NotificationsIcon />
          ) : (
            <NotificationsNoneIcon />
          )}
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: { width: 360, maxHeight: 480, display: 'flex', flexDirection: 'column' },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Notificações
            {totalNaoLidas > 0 && (
              <Typography
                component="span"
                variant="caption"
                sx={{
                  ml: 1,
                  px: 0.8,
                  py: 0.2,
                  bgcolor: 'error.main',
                  color: 'white',
                  borderRadius: 10,
                }}
              >
                {totalNaoLidas}
              </Typography>
            )}
          </Typography>
          <Stack direction="row" spacing={1}>
            {totalNaoLidas > 0 && (
              <Tooltip title="Marcar todas como lidas">
                <IconButton
                  size="small"
                  onClick={() => void marcarTodasComoLidas()}
                  sx={{ fontSize: 11 }}
                  color="success"
                >
                  <DoneAllIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {totalNaoRemovidas > 0 && (
              <Tooltip title="Remover todas">

                <IconButton
                  size="small"
                  onClick={() => void removerAllMyUser()}
                  sx={{ fontSize: 11 }}
                  color="error"
                >
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Box>
        <Divider />

        {/* Lista */}
        <Box sx={{ overflowY: 'auto', flex: 1 }}>
          {loading && lista.length === 0 && (
            <Typography variant="body2" sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
              Carregando…
            </Typography>
          )}

          {!loading && lista.length === 0 && (
            <Typography variant="body2" sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
              Nenhuma notificação
            </Typography>
          )}

          <List disablePadding>
            {lista.map((n, index) => (
              <React.Fragment key={n.id}>
                {index > 0 && <Divider component="li" />}
                <ListItem
                  alignItems="flex-start"
                  onClick={() => handleClick(n.id, n.link, n.lida)}
                  sx={{
                    cursor: n.link ? 'pointer' : 'default',
                    bgcolor: n.lida ? 'transparent' : 'action.hover',
                    pr: 5,
                    '&:hover': { bgcolor: 'action.selected' },
                    transition: 'background 0.15s',
                  }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      size="small"
                      onClick={(e) => handleRemover(e, n.id)}
                      sx={{ color: 'text.disabled' }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        fontWeight={n.lida ? 'normal' : 'bold'}
                        sx={{ lineHeight: 1.4 }}
                      >
                        {n.mensagem}
                      </Typography>
                    }
                    secondary={
                      <Box sx={{ display: 'flex', gap: 1, mt: 0.3, alignItems: 'center' }}>
                        <Typography
                          component="span"
                          variant="caption"
                          sx={{
                            px: 0.8,
                            py: 0.1,
                            borderRadius: 1,
                            fontSize: 10,
                            bgcolor: n.tipo === 'Manifestacao' ? 'primary.light' : 'secondary.light',
                            color: 'white',
                          }}
                        >
                          {n.tipo === 'Manifestacao' ? 'Manifestação' : 'Requerimento'}
                        </Typography>
                        <Typography variant="caption" color="text.disabled">
                          {dayjs(n.created_at).fromNow()}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Popover>
    </>
  );
}
