package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	staticDir := os.Getenv("STATIC_DIR")

	fs := http.FileServer(http.Dir(staticDir))

	srv := http.NewServeMux()
	srv.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := staticDir + r.URL.Path
		if _, err := os.Stat(path); os.IsNotExist(err) {
			r.URL.Path = "/"
		}
		fs.ServeHTTP(w, r)
	})

	log.Println("Server starting on :8080, serving from", staticDir)
	if err := http.ListenAndServe(":8080", srv); err != nil {
		log.Fatal(err)
	}
}
