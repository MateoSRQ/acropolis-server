import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CursoEquivalencias extends BaseSchema {
  protected tableName = 'curso_equivalencia'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('curso_id').unsigned().references('id').inTable('curso').notNullable()
      table.integer('equivalencia_id').unsigned().references('id').inTable('curso').notNullable()
      table.unique(['curso_id', 'equivalencia_id'])
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
