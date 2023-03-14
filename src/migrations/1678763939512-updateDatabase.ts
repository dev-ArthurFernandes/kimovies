import { MigrationInterface, QueryRunner } from "typeorm";

export class updateDatabase1678763939512 implements MigrationInterface {
    name = 'updateDatabase1678763939512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "value" integer(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "value" numeric(12,2) NOT NULL`);
    }

}
