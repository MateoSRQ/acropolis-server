import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Docentes extends BaseSchema {
  protected tableName = 'docente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo', 12).notNullable().unique()
      table.integer('persona_id').unsigned().references('id').inTable('persona').notNullable()
      table.date('fecha_ingreso').notNullable()
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
