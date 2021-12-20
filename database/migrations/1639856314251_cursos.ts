import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cursos extends BaseSchema {
  protected tableName = 'curso'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo', 12).notNullable().unique()
      table.string('nombre', 100).notNullable().unique()
      table.integer('ciclo', ).notNullable()
      table.integer('creditos_teoria', ).notNullable()
      table.integer('creditos_practica', ).notNullable()
      table.integer('plan_id').unsigned().references('id').inTable('plan').notNullable()
      table.string('estado', 1).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
