import { createClient } from "redis";

const redis = createClient({
    redis_url: process.env.REDIS_AZURE_URL || "redis://redis:6379"
})

await redis.connect()

const subscriber = redis.duplicate()
await subscriber.connect()

subscriber.subscribe("chat_window_interface",function(message){
    console.log('Message received',message)
})

export default redis