/*
  Warnings:

  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Setting` DROP FOREIGN KEY `Setting_userId_fkey`;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `status` ENUM('pending', 'accept', 'reject') NOT NULL DEFAULT 'pending';

-- DropTable
DROP TABLE `Setting`;

-- CreateTable
CREATE TABLE `sett` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fee` DECIMAL(10, 0) NOT NULL,
    `user_id` INTEGER NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `interest_rate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `duration_days` INTEGER NOT NULL,
    `rate` DECIMAL(5, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sett` ADD CONSTRAINT `sett_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
