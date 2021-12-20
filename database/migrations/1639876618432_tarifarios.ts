import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tarifarios extends BaseSchema {
  protected tableName = 'tarifario'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo', 12).notNullable().unique()
      table.integer('tarifario_concepto_id').unsigned().references('id').inTable('tarifario_concepto').notNullable()
      table.integer('programa_id').unsigned().references('id').inTable('programa').notNullable()
      table.float('monto', 2).notNullable()
      table.string('estado', 1).notNullable()
      table.unique(['tarifario_concepto_id', 'programa_id'])
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
