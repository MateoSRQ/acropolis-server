import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CursoInstancias extends BaseSchema {
  protected tableName = 'curso_instancia'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo', 12).notNullable().unique()
      table.integer('curso_id').unsigned().references('id').inTable('curso').notNullable()
      table.integer('periodo_id').unsigned().references('id').inTable('periodo').notNullable()
      table.unique(['curso_id', 'periodo_id'])
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
