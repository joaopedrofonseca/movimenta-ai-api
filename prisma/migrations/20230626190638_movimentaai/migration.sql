-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,

    CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,

    CONSTRAINT "usuarios_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atividades" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "horario" TEXT NOT NULL,
    "integrantes" INTEGER NOT NULL,
    "criadopor" INTEGER NOT NULL,

    CONSTRAINT "atividades_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cadastros" (
    "id" SERIAL NOT NULL,
    "atividade_id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "cadastros_pk" PRIMARY KEY ("id","atividade_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_fk0" FOREIGN KEY ("criadopor") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cadastros" ADD CONSTRAINT "cadastros_fk0" FOREIGN KEY ("atividade_id") REFERENCES "atividades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cadastros" ADD CONSTRAINT "cadastros_fk1" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
