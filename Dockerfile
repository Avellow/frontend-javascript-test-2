FROM  node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000