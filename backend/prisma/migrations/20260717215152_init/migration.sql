-- CreateTable
CREATE TABLE `Config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `key_value`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `setores` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nomeVisivel` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `setores_nome_key`(`nome`),
    UNIQUE INDEX `setores_visivel_key`(`nomeVisivel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cargos` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nomeVisivel` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `cargos_nome_key`(`nome`),
    UNIQUE INDEX `cargos_visivel_key`(`nomeVisivel`),
    INDEX `cargos_setor_nome_visivel_index`(`setor`, `nomeVisivel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bases` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `tipo_ambulancias` ENUM('USA', 'USB', 'USA/USB') NOT NULL DEFAULT 'USB',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `bases_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` CHAR(36) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `telefone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `baseId` VARCHAR(191) NOT NULL,
    `setorId` VARCHAR(191) NOT NULL,
    `cargoId` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `username`(`username`),
    INDEX `username_password_index`(`username`, `password`),
    INDEX `usuarios_base_active_nome_index`(`baseId`, `active`, `nome`),
    INDEX `usuarios_setor_active_nome_index`(`setorId`, `active`, `nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_reset_tokens` (
    `id` CHAR(36) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `tokenHash` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `usedAt` DATETIME(3) NULL,

    UNIQUE INDEX `password_reset_tokens_tokenHash_key`(`tokenHash`),
    INDEX `password_reset_tokens_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refresh_tokens` (
    `id` CHAR(36) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `tokenHash` VARCHAR(191) NOT NULL,
    `family` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `revokedAt` DATETIME(3) NULL,
    `userAgent` VARCHAR(512) NULL,
    `ip` VARCHAR(45) NULL,

    UNIQUE INDEX `refresh_tokens_tokenHash_key`(`tokenHash`),
    INDEX `refresh_tokens_family_idx`(`family`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ambulancias` (
    `id` CHAR(36) NOT NULL,
    `tipo` ENUM('USA', 'USB') NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `baseId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ambulancias_tipo_nome_base_key`(`tipo`, `nome`, `baseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria_produtos` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `nome`(`nome`),
    INDEX `categoria_produtos_user_active_nome_index`(`userId`, `active`, `nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `codigo` INTEGER NOT NULL,
    `unidade` ENUM('Unidade', 'Pacote', 'Kit', 'Caixa') NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `usa` BOOLEAN NOT NULL DEFAULT false,
    `cme` BOOLEAN NOT NULL DEFAULT false,
    `fora_alx` BOOLEAN NOT NULL DEFAULT false,
    `ordem` INTEGER NULL,
    `userId` VARCHAR(191) NOT NULL,
    `descricao` TEXT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `produtos_categoria_active_nome_index`(`categoria`, `active`, `nome`),
    INDEX `produtos_user_active_nome_index`(`userId`, `active`, `nome`),
    UNIQUE INDEX `produtos_nome_codigo_key`(`nome`, `codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias_medicamento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `nome`(`nome`),
    INDEX `categorias_medicamento_user_active_nome_index`(`userId`, `active`, `nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicamentos` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `codigo` INTEGER NOT NULL,
    `especificacao` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `descricao` TEXT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `medicamentos_nome_codigo_key`(`nome`, `codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `requerimentos` (
    `id` CHAR(36) NOT NULL,
    `numero` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('CME', 'Farmácia', 'Almoxarifado', 'Administrativo') NOT NULL,
    `status` ENUM('Rascunho', 'Recebido', 'Análise', 'Separação', 'Finalizado', 'Cancelado') NOT NULL DEFAULT 'Recebido',
    `data_inicio` DATETIME(3) NOT NULL,
    `data_fim` DATETIME(3) NULL,
    `base` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `ambulanciaId` VARCHAR(191) NULL,
    `obs` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `numero`(`numero`),
    INDEX `requerimentos_tipo_base_status_created_index`(`tipo`, `base`, `status`, `created_at`),
    INDEX `requerimentos_tipo_base_numero_index`(`tipo`, `base`, `numero`),
    INDEX `requerimentos_user_created_index`(`userId`, `created_at`),
    INDEX `requerimentos_setor_index`(`setor`),
    INDEX `requerimentos_cargo_index`(`cargo`),
    INDEX `requerimentos_numero_index`(`numero`),
    INDEX `requerimentos_base_index`(`base`),
    INDEX `requerimentos_ambulancia_index`(`ambulanciaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `requerimento_status` (
    `id` CHAR(36) NOT NULL,
    `requerimentoId` VARCHAR(191) NOT NULL,
    `status` ENUM('Rascunho', 'Recebido', 'Análise', 'Separação', 'Finalizado', 'Cancelado') NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `requerimento_status_requerimento_created_index`(`requerimentoId`, `created_at`),
    INDEX `requerimento_status_user_created_index`(`userId`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `requerimento_itens` (
    `id` CHAR(36) NOT NULL,
    `requerimentoId` VARCHAR(191) NOT NULL,
    `produtoId` VARCHAR(191) NULL,
    `medicamentoId` VARCHAR(191) NULL,
    `quantidade` INTEGER NOT NULL,
    `ocorrencia` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `deleted_at` DATETIME(3) NULL,
    `deleted_by` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `requerimento_index`(`requerimentoId`),
    INDEX `produto_index`(`produtoId`),
    INDEX `medicamento_index`(`medicamentoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visitas_bases` (
    `id` CHAR(36) NOT NULL,
    `data` DATE NOT NULL,
    `base` VARCHAR(191) NULL,
    `outro_motivo` VARCHAR(191) NULL,
    `descricao` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `visitas_bases_base_data_index`(`base`, `data`),
    INDEX `visitas_bases_data_index`(`data`),
    INDEX `visitas_bases_user_data_index`(`userId`, `data`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `send_email` (
    `id` CHAR(36) NOT NULL,
    `status` ENUM('success', 'error', 'pendent') NOT NULL,
    `tipo` ENUM('Almoxarifado', 'CME', 'Farmacia', 'Status', 'Calendario') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `artefatoUUID` VARCHAR(191) NOT NULL,
    `message` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `send_email_email_idx`(`email`),
    INDEX `send_email_status_idx`(`status`),
    INDEX `send_email_tipo_idx`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `id` CHAR(36) NOT NULL,
    `tipo` ENUM('created', 'updated', 'deleted', 'status', 'active', 'disable', 'view') NOT NULL,
    `modulo` VARCHAR(191) NOT NULL,
    `artefato` VARCHAR(191) NULL,
    `ip` VARCHAR(191) NOT NULL,
    `mensagem` TINYTEXT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `logs_modulo_created_index`(`modulo`, `createdAt`),
    INDEX `logs_user_created_index`(`userId`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicos` (
    `id` CHAR(36) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `crm` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `nome`(`nome`),
    UNIQUE INDEX `crm`(`crm`),
    UNIQUE INDEX `telefone`(`telefone`),
    INDEX `medicos_user_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receituarios` (
    `id` CHAR(36) NOT NULL,
    `requerimentoId` VARCHAR(191) NULL,
    `status` ENUM('Aberto', 'Finalizado', 'Cancelado') NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `ocorrencia` INTEGER NOT NULL,
    `data_ocorrencia` DATETIME(3) NOT NULL,
    `medicoId` VARCHAR(191) NOT NULL,
    `baseId` VARCHAR(191) NOT NULL,
    `ambulanciaId` VARCHAR(191) NOT NULL,
    `obs` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `numero`(`numero`),
    INDEX `receituarios_base_status_numero_index`(`baseId`, `status`, `numero`),
    INDEX `receituarios_requerimento_index`(`requerimentoId`),
    INDEX `receituarios_medico_index`(`medicoId`),
    INDEX `receituarios_ambulancia_index`(`ambulanciaId`),
    INDEX `receituarios_user_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receituario_medicamentos` (
    `id` CHAR(36) NOT NULL,
    `receituarioId` VARCHAR(191) NOT NULL,
    `medicamentoId` VARCHAR(191) NOT NULL,
    `qnt` INTEGER NOT NULL,
    `unidade` ENUM('ampolas', 'ml') NOT NULL,
    `administracao` ENUM('EV', 'IM', 'SC', 'IN', 'IR', 'IO') NOT NULL,
    `diluente` ENUM('agua_destilada', 'nacl09') NULL,
    `qnt_diluente` INTEGER NULL,
    `qnt_tempo` INTEGER NULL,
    `userId` VARCHAR(191) NOT NULL,
    `obs` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `receituario_medicamentos_receituario_index`(`receituarioId`),
    INDEX `receituario_medicamentos_medicamento_index`(`medicamentoId`),
    INDEX `receituario_medicamentos_user_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificacoes` (
    `id` CHAR(36) NOT NULL,
    `mensagem` VARCHAR(254) NOT NULL,
    `artefatoUUID` VARCHAR(191) NOT NULL,
    `tipo` ENUM('Requerimento', 'CME', 'Farmácia', 'Almoxarifado', 'Administrativo', 'Status') NOT NULL,
    `evento` VARCHAR(50) NOT NULL,
    `link` VARCHAR(254) NULL,
    `lida` BOOLEAN NOT NULL DEFAULT false,
    `removida` BOOLEAN NOT NULL DEFAULT false,
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `notificacoes_user_removida_created_index`(`userId`, `removida`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estoques` (
    `id` CHAR(36) NOT NULL,
    `baseId` VARCHAR(191) NOT NULL,
    `produtoId` VARCHAR(191) NULL,
    `medicamentoId` VARCHAR(191) NULL,
    `quantidadeMinima` INTEGER NOT NULL DEFAULT 0,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `estoques_produtoId_idx`(`produtoId`),
    INDEX `estoques_medicamentoId_idx`(`medicamentoId`),
    INDEX `estoques_base_ativo_index`(`baseId`, `ativo`),
    UNIQUE INDEX `estoques_baseId_produtoId_key`(`baseId`, `produtoId`),
    UNIQUE INDEX `estoques_baseId_medicamentoId_key`(`baseId`, `medicamentoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estoque_lotes` (
    `id` CHAR(36) NOT NULL,
    `estoqueId` VARCHAR(191) NOT NULL,
    `chaveLote` VARCHAR(191) NOT NULL,
    `lote` VARCHAR(191) NULL,
    `validade` DATE NULL,
    `quantidade` INTEGER NOT NULL DEFAULT 0,
    `bloqueado` BOOLEAN NOT NULL DEFAULT false,
    `motivoBloqueio` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `estoque_lotes_validade_idx`(`validade`),
    INDEX `estoque_lotes_estoqueId_validade_idx`(`estoqueId`, `validade`),
    INDEX `estoque_lotes_estoqueId_bloqueado_validade_idx`(`estoqueId`, `bloqueado`, `validade`),
    INDEX `estoque_lotes_estoque_active_validade_index`(`estoqueId`, `active`, `validade`),
    UNIQUE INDEX `estoque_lotes_estoqueId_chaveLote_key`(`estoqueId`, `chaveLote`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estoque_movimentacoes` (
    `id` CHAR(36) NOT NULL,
    `loteId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `tipo` ENUM('Entrada', 'Saida', 'AjusteEntrada', 'AjusteSaida', 'Perda', 'Vencimento', 'TransferenciaEntrada', 'TransferenciaSaida', 'Devolucao', 'Desabilitado') NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `saldoAnterior` INTEGER NOT NULL,
    `saldoPosterior` INTEGER NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `estoque_movimentacoes_lote_created_index`(`loteId`, `created_at`),
    INDEX `estoque_movimentacoes_user_created_index`(`userId`, `created_at`),
    INDEX `estoque_movimentacoes_tipo_created_index`(`tipo`, `created_at`),
    INDEX `estoque_movimentacoes_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cargos` ADD CONSTRAINT `cargos_setor_fkey` FOREIGN KEY (`setor`) REFERENCES `setores`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Base_id_fkey` FOREIGN KEY (`baseId`) REFERENCES `bases`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Setor_id_fkey` FOREIGN KEY (`setorId`) REFERENCES `setores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `Cargo_id_fkey` FOREIGN KEY (`cargoId`) REFERENCES `cargos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `password_reset_tokens` ADD CONSTRAINT `password_reset_tokens_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refresh_tokens` ADD CONSTRAINT `refresh_tokens_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ambulancias` ADD CONSTRAINT `ambulancias_base_fkey` FOREIGN KEY (`baseId`) REFERENCES `bases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ambulancias` ADD CONSTRAINT `ambulancias_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categoria_produtos` ADD CONSTRAINT `user_categoria_produto_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `categoria_produtos_fkey` FOREIGN KEY (`categoria`) REFERENCES `categoria_produtos`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `user_produtos_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categorias_medicamento` ADD CONSTRAINT `categorias_medicamento_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medicamentos` ADD CONSTRAINT `user_medicamentos_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medicamentos` ADD CONSTRAINT `categoria_medicamento_fkey` FOREIGN KEY (`categoria`) REFERENCES `categorias_medicamento`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimentos` ADD CONSTRAINT `requerimentos_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimentos` ADD CONSTRAINT `requerimentos_setor_fkey` FOREIGN KEY (`setor`) REFERENCES `setores`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimentos` ADD CONSTRAINT `requerimentos_cargo_fkey` FOREIGN KEY (`cargo`) REFERENCES `cargos`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimentos` ADD CONSTRAINT `requerimentos_base_fkey` FOREIGN KEY (`base`) REFERENCES `bases`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimentos` ADD CONSTRAINT `requerimentos_ambulanciaId_fkey` FOREIGN KEY (`ambulanciaId`) REFERENCES `ambulancias`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_status` ADD CONSTRAINT `requerimento_status_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_status` ADD CONSTRAINT `requerimento_status_requerimento_fkey` FOREIGN KEY (`requerimentoId`) REFERENCES `requerimentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_itens` ADD CONSTRAINT `carrinho_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_itens` ADD CONSTRAINT `carrinho_produto_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_itens` ADD CONSTRAINT `carrinho_medicamento_fkey` FOREIGN KEY (`medicamentoId`) REFERENCES `medicamentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_itens` ADD CONSTRAINT `carrinho_deleted_by_fkey` FOREIGN KEY (`deleted_by`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `requerimento_itens` ADD CONSTRAINT `carrinho_requerimento_fkey` FOREIGN KEY (`requerimentoId`) REFERENCES `requerimentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `visitas_bases` ADD CONSTRAINT `visitas_bases_base_fkey` FOREIGN KEY (`base`) REFERENCES `bases`(`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `visitas_bases` ADD CONSTRAINT `visitas_bases_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medicos` ADD CONSTRAINT `medico_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituarios` ADD CONSTRAINT `receituario_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituarios` ADD CONSTRAINT `receituario_medico _fkey` FOREIGN KEY (`medicoId`) REFERENCES `medicos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituarios` ADD CONSTRAINT `receituario_requerimento_fkey` FOREIGN KEY (`requerimentoId`) REFERENCES `requerimentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituarios` ADD CONSTRAINT `receituario_base_fkey` FOREIGN KEY (`baseId`) REFERENCES `bases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituarios` ADD CONSTRAINT `receituario_ambulancia_fkey` FOREIGN KEY (`ambulanciaId`) REFERENCES `ambulancias`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituario_medicamentos` ADD CONSTRAINT `receituario_medicamentos_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituario_medicamentos` ADD CONSTRAINT `receituario_medicamento_receiturario_fkey` FOREIGN KEY (`receituarioId`) REFERENCES `receituarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receituario_medicamentos` ADD CONSTRAINT `receituario_medicamentos_fkey` FOREIGN KEY (`medicamentoId`) REFERENCES `medicamentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificacoes` ADD CONSTRAINT `notificacao_user_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoques` ADD CONSTRAINT `estoques_baseId_fkey` FOREIGN KEY (`baseId`) REFERENCES `bases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoques` ADD CONSTRAINT `estoques_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoques` ADD CONSTRAINT `estoques_medicamentoId_fkey` FOREIGN KEY (`medicamentoId`) REFERENCES `medicamentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoque_lotes` ADD CONSTRAINT `estoque_lotes_estoqueId_fkey` FOREIGN KEY (`estoqueId`) REFERENCES `estoques`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoque_movimentacoes` ADD CONSTRAINT `estoque_movimentacoes_loteId_fkey` FOREIGN KEY (`loteId`) REFERENCES `estoque_lotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estoque_movimentacoes` ADD CONSTRAINT `estoque_movimentacoes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
