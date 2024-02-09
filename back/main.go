package main
import (
	"database/sql"
	"fmt"
	"net/http"
		_ "github.com/go-sql-driver/mysql"
	"github.com/gin-gonic/gin"
)

const datasource = "goteam:root@tcp(localhost:3306)/golang"

func main(
) {
	// database connection
	db, err := sql.Open("mysql", dataSourceName)
	if err != nil {
		fmt.Println("Error opening database:", err)
		return
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		fmt.Println("Error connecting to database:", err)
		return
	}
	fmt.Println("Connected to database!")

}