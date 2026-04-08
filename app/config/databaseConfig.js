import 'dotenv/config'

const connectionMysql = {
    "host":process.env.HOST_DB,
    "user":process.env.USER_DB,
    "password":process.env.PASS_DB,
    "database":process.env.NAME_DB
}

export {connectionMysql};