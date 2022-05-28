import { RedisClientType } from '@redis/client';
import * as redis from 'redis';
export const RedisHandler = {
    client: null as  unknown as RedisClientType,
    async connect() {
        this.client = redis.createClient();
        this.client.on('error', (err: any) => console.log('Redis Client Error', err));
        await this.client.connect();    }
}