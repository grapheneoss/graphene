![plain](https://grapheneoss.github.io/graphene//assets/graphene.png)
<p align="center">

# Overview
Graphene is an lightweight open-source client area for pterodactyl panel 

# Sponsorships
| Compnay          | Links                        | Description        |
| ---------------- | ----------- | ------------------ |
| Zen              | https//disocrd.gg/yYccAedeJJ | Best free reliable hosting |

# Install Guide

Warning: You need Pterodactyl already set up on a domain for Graphene to work

1. Upload the file above onto a Pterodactyl NodeJS server [Download the egg from Parkervcp's GitHub Repository](https://github.com/parkervcp/eggs/blob/master/generic/nodejs/egg-node-js-generic.json)
2. Unarchive the file and set the server to use NodeJS 17
3. Configure webserver.json to use the server's port
4. Start the server and open the server's IP in your browser and configure the dashboard settings
5. Login to your DNS manager, point the domain you want your dashboard to be hosted on to your VPS IP address. (Example: dashboard.domain.com 192.168.0.1)
6. Run `apt install nginx && apt install certbot` on the vps
7. Run `ufw allow 80` and `ufw allow 443` on the vps
8. Run `certbot certonly -d <Your Heliactyl Domain>` then do 1 and put your email
9. Run `nano /etc/nginx/sites-enabled/heliactyl.conf`
10. Paste the configuration at the bottom of this and replace with the IP of the pterodactyl server including the port and with the domain you want your dashboard to be hosted on.
11. Run `systemctl restart nginx` and try open your domain.

# One Line Installer:
```
apt update -y && apt install npm nodejs -y && npm i n -g && n stab;e && PATH="$PATH" && git clone https://github.com/grapheneoss/Graphene.git && cd Graphene && npm i && node .
```

# Nginx Proxy Config
```Nginx
server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl http2;
location /afk/ws {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_pass "http://localhost:<port>/afk/ws";
}
    
    server_name <domain>;
ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
location / {
      proxy_pass http://localhost:<port>/;
      proxy_buffering off;
      proxy_set_header X-Real-IP $remote_addr;
  }
}
```

# License 
(c) Renvoo and Contributers. Licensed under MIT
