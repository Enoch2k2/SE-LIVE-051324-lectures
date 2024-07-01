import sqlite3

CONN = sqlite3.connect("db/petshop.db")
CURSOR = CONN.cursor()