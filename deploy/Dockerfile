FROM golang:alpine AS builder
WORKDIR /app
COPY main.go .
RUN go build -ldflags="-s -w" -o server main.go

FROM gcr.io/distroless/static-debian12
WORKDIR /root/
ENV STATIC_DIR=./storybook-static
COPY --from=builder /app/server .
COPY storybook-static ./storybook-static

EXPOSE 8080
CMD ["./server"]