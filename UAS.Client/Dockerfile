FROM node:13.1.0-alpine
LABEL vendor="DMWD Group"

COPY package*.json /client/
WORKDIR /client/

# Install dependencies
RUN npm install

# Copy source files
COPY . /client/

# Build project to `build` folder
RUN mkdir /build/
RUN npm run build

# Copy built files and expose the volume 
RUN mv /client/dist/* /build/

VOLUME ["/build"]