FROM node:latest As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --omit=dev



# # Stage 2: Serve app with nginx server

FROM nginx:latest

COPY --from=builder /usr/src/app/dist/chrisblog-fe-angular/browser /usr/share/nginx/html

EXPOSE 80