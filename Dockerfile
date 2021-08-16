FROM node:14

WORKDIR /project

COPY /project/package.json /project/

RUN npm install
RUN npm install react-scripts@3.3.1 -g

EXPOSE 3003

CMD ["npm", "start"]