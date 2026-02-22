import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDesc2Collumn1771608127735 implements MigrationInterface 
{
  name = 'AddDesc2Collumn1771608127735';

  public async up(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "description_2" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "description_2"`);
  }
}
