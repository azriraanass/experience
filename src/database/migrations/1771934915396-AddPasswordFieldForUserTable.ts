import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordFieldForUserTable1771934915396 implements MigrationInterface {
    name = 'AddPasswordFieldForUserTable1771934915396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
