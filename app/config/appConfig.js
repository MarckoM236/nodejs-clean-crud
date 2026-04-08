import 'dotenv/config'

const connectionServer = {
    "host":process.env.HOST_SERVER,
    "port":process.env.PORT_SERVER
}

export {connectionServer};