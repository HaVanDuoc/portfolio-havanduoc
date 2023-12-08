import { Sequelize } from "sequelize"

import dotenv from "dotenv"

dotenv.config()

const config: {
    database: string
    username: string
    password: string
    host: string
    port: any
    dialect?: any
} = {
    database: process.env.DB_DATABASE || "*",
    username: process.env.DB_USERNAME || "*",
    password: process.env.DB_PASSWORD || "*",
    host: process.env.DB_HOST || "*",
    port: process.env.DB_PORT || "3306",
    dialect: process.env.DB_DIALECT || "mysql",
}

const sequelize = new Sequelize({
    username: config.username,
    database: config.database,
    password: config.password,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false,
    timezone: "+07:00",
})

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("[database]: Connected to database")
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
}

export default connectDB
