-- CreateTable
CREATE TABLE "_MediaToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MediaToUser_AB_unique" ON "_MediaToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MediaToUser_B_index" ON "_MediaToUser"("B");

-- AddForeignKey
ALTER TABLE "_MediaToUser" ADD FOREIGN KEY ("A") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MediaToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
