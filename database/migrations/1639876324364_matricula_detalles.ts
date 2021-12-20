import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MatriculaDetalles extends BaseSchema {
  protected tableName = 'matricula_detalle'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('matricula_id').unsigned().references('id').inTable('matricula').notNullable()
      table.integer('curso_instancia_id').unsigned().references('id').inTable('curso_instancia').notNullable()
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
