import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Personas extends BaseSchema {
  protected tableName = 'persona'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo', 12).notNullable().unique()
      table.string('nombres', 100).notNullable()
      table.string('apellido_paterno', 100).notNullable()
      table.string('apellido_materno', 100).notNullable()
      table.date('fecha_nacimiento').notNullable()
      table.string('sexo', 20).notNullable()
      table.string('email', 100)
      table.string('direccion', 200)
      table.string('telefono1', 20)
      table.string('telefono2', 20)
      table.unique(['nombres', 'apellido_paterno', 'apellido_materno', 'fecha_nacimiento'])
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
