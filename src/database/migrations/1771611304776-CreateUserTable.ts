import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1771611304776 implements MigrationInterface 
{
    name = 'CreateUserTable1771611304776'

    public async up(queryRunner: QueryRunner): Promise<void> 
{
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
{
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
