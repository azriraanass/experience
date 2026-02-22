import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePostsTable1771603946044 implements MigrationInterface 
{
  name = 'CreatePostsTable1771603946044';

  public async up(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "topic" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> 
{
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
