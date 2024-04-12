module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: process.env.DATABASE_URL,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        debug: false
    },
});
