import { PrismaClient } from '@prisma/client'
import { Redis, RedisOptions } from 'ioredis'
import { PrismaClientOptions } from '@prisma/client/runtime/library'

export class DatabaseClient extends PrismaClient {
  public redis: Redis

  constructor(public options: ClientOptions) {
    super(options.prisma)

    // @ts-ignore
    this.redis = new Redis(options.redis ?? process.env.REDIS_URL ?? 'redis://cache:6379')

    this.$connect().then(() => {
      console.info('Connected to Prisma')
    })
  }

  public async disconnect() {
    console.warn('Disconnecting Database...')

    this.$disconnect().then(() => console.warn('Disconnected to Prisma'))
    this.redis.disconnect()

    return true
  }
}

export type ClientOptions = DatabaseOptions

export interface DatabaseOptions {
  redis?: RedisOptions
  prisma?: PrismaClientOptions
}

declare global {
  /* eslint-disable */
  var db: DatabaseClient | undefined
}
