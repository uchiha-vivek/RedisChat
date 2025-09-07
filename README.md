## Simple Chat Backend with Redis+Grafana+Prometheus


The project is real-time chat application built with the following tools:

1. Express.js
2. Redis - Publisher/Subscriber layer
3. Socket.io - for real time socket connection
4. Grafana - visualization of metrics
5. Prometheus - scraping data from api endpoints




### Setting up project locally


Clone the repository
```bash
git clone https://github.com/uchiha-vivek/RedisChat.git
```

Navigate to the folder RedisChat
```bash
cd RedisChat
```

Install the  packages
```bash
npm install
```

Run the server
```
npm run dev
```

Emit the message
```
npm run queue
```


