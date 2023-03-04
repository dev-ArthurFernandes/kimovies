import { MigrationInterface, QueryRunner } from "typeorm";

export class startDatabase1677888949970 implements MigrationInterface {
    name = 'startDatabase1677888949970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric`);
    }

}
