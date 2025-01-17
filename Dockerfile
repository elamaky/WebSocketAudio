# Koristi zvanični Node.js image
FROM node:14

# Postavi radni direktorijum
WORKDIR /app

# Kopiraj package.json i package-lock.json (ako postoji)
COPY package*.json ./

# Instaliraj zavisnosti
RUN yarn install

# Kopiraj ostatak aplikacije
COPY . .

# Kompajliraj TypeScript kod
RUN yarn build

# Izloži portove 3000, 4000, 5000, 8080, 8081, 8000, 10000
EXPOSE 3000 4000 5000 8080 8081 8000 10000

# Pokreni aplikaciju
CMD ["yarn", "start"]
