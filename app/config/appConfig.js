import 'dotenv/config'

const connectionServer = {
    "host":process.env.HOST_SERVER,
    "port":process.env.PORT_SERVER
}

const secretApi = {
    'api_key':process.env.SECRET_API_KEY
}

export {connectionServer, secretApi};