-- CreateTable
CREATE TABLE `Seats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Airplane` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureTime` INTEGER NOT NULL,
    `arrivalTime` INTEGER NOT NULL,
    `airport` VARCHAR(191) NOT NULL,
    `availableSeats` INTEGER NOT NULL,
    `ticketPrice` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeatsOnAirplane` (
    `seatsId` INTEGER NOT NULL,
    `airplaneId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`seatsId`, `airplaneId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SeatsOnAirplane` ADD CONSTRAINT `SeatsOnAirplane_seatsId_fkey` FOREIGN KEY (`seatsId`) REFERENCES `Seats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeatsOnAirplane` ADD CONSTRAINT `SeatsOnAirplane_airplaneId_fkey` FOREIGN KEY (`airplaneId`) REFERENCES `Airplane`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
