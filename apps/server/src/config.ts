import dotenvSafe from 'dotenv-safe'

dotenvSafe.config()

const ENV = process.env

const config = {
  PORT: ENV.PORT ?? 4000,
  MONGO_URI: (ENV.MONGO_URI as string) ?? '',
  JWT_KEY: (ENV.JWT_KEY as string) ?? '',
}

export { config }
