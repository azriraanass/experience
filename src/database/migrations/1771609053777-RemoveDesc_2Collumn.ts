import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveDesc2Collumn1771609053777 implements MigrationInterface 
{
  name = 'RemoveDesc2Collumn1771609053777';

  public async up(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "description_2"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "description_2" character varying NOT NULL`,
    );
  }
}
