import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Escuelas extends BaseSchema {
  protected tableName = 'escuela'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo', 12).notNullable().unique()
      table.string('nombre', 100).notNullable().unique()
      table.integer('facultad_id').unsigned().references('id').inTable('facultad').notNullable()
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