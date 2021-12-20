import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Matriculas extends BaseSchema {
  protected tableName = 'matricula'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo', 12).notNullable().unique()
      table.integer('alumno_id').unsigned().references('id').inTable('alumno').notNullable()
      table.integer('periodo_id').unsigned().references('id').inTable('periodo').notNullable()
      table.date('fecha_inicio').notNullable()
      table.string('estado', 1).notNullable()
      table.unique(['alumno_id', 'periodo_id'])
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
