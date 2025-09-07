import client from 'prom-client'

const register = new client.Registry()

client.collectDefaultMetrics({register})

const connection = new client.Gauge({
    name:'active_chat_connection',
    help:'active_websocket_connection'
})

const message_throughput = new client.Counter({
    name:'total_chat_message',
    help:'total_message_sent'
})

const message_dropped = new client.Counter({
    name:'total_message_dropped',
    help:'messages_dropped'
})

register.registerMetric(connection)
register.registerMetric(message_throughput)
register.removeSingleMetric(message_dropped)

export {register, connection, message_throughput,message_dropped}