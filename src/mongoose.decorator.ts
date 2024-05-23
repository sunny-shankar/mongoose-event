

export function AuditSchema(schema: any, options: any) {
    schema.pre('find', async function (next) {
        console.log(this)
        console.log('Query Details:', {
            db: this.model.databaseName,
            model: this.model.modelName,
            query: this.getQuery(),
            options: this.getOptions(),
            fields: this._fields,
            op: this.op,
            optionsPassedIn: this._mongooseOptions,
        });
        next();
    });


}
