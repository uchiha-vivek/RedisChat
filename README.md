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

## Configuring Prometheus

Open the prometheus configuration file
```
sudo nano /etc/prometheus/prometheus.yml
```

Add the following configuration there by scrolling to the bottom:
```bash
scrape_configs:
  - job_name: "chat-backend"
    static_configs:
      - targets: ["localhost:5000"]
```

Save file CTRL + S and  Enter, CTRL + X.

Restart the Prometheus
```bash
sudo systemctl restart prometheus
```

Now check the targets

```bash
http://localhost:9090/classic/targets
```

How to visualize the metrics in Grafana:
Open ```http://localhost:3000```