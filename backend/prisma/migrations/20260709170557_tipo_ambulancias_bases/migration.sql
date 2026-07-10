-- AlterTable
ALTER TABLE `bases` ADD COLUMN `tipo_ambulancias` ENUM('USA', 'USB', 'USA/USB') NOT NULL DEFAULT 'USB';
