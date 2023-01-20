import sqlite3

conn = sqlite3.connect('sample.db')

conn.execute("INSERT INTO USER ( FirstName, LastName) VALUES ('Bruce2', 'Liu')")

conn.commit()

curser = conn.execute("SELECT FirstName, LastName from USER")

for row in curser:
    print("ID = ", row[0])
    print("FirstName = ", row[1])

conn.close()