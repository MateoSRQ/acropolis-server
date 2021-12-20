import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MatriculaCuentas extends BaseSchema {
  protected tableName = 'matricula_cuenta'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('matricula_id').unsigned().references('id').inTable('matricula').notNullable()
      table.integer('tarifario_id').unsigned().references('id').inTable('tarifario').notNullable()
      table.date('fecha_inicio')
      table.date('fecha_pago')
      table.string('documento_pago', 100).notNullable()
      table.float('monto', 2).notNullable()
      table.float('mora', 2).notNullable()
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
