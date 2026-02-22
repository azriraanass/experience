import { MigrationInterface, QueryRunner } from 'typeorm';

export class MakeDateColumnsNullable1771611740938 implements MigrationInterface 
{
  name = 'MakeDateColumnsNullable1771611740938';

  public async up(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "createAt" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "updatedAt" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "createAt" SET NOT NULL`,
    );
  }
}
