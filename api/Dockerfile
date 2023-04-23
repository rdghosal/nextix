FROM rust:1.67

WORKDIR /usr/src/nextix-api
COPY . .

RUN cargo install --path .

CMD ["nextix-api"]
