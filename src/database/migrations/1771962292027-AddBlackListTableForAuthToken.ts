import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBlackListTableForAuthToken1771962292027 implements MigrationInterface {
    name = 'AddBlackListTableForAuthToken1771962292027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blacklist" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expiredAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_04dc42a96bf0914cda31b579702" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blacklist"`);
    }

}
