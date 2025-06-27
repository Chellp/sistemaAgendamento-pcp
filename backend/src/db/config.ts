import knex from 'knex'
import knexConfig from '../knexfile'

const db = knex(knexConfig.developmente);

db.raw('SELECT 1').then(() => {
    console.log('Conexão com banco de dados estabelecida com sucesso');
}).catch((error) => {
    console.error('Erro ao conectar no banco de dados', error.message);
    
});

export default db;