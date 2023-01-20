import sqlite3

def newUserToDB(firstName, lastName):
    conn = sqlite3.connect('sample.db')

    conn.execute(f"INSERT INTO USER ( FirstName, LastName) VALUES ('{firstName}', '{lastName}')")
    conn.commit()

    curser = conn.execute("SELECT FirstName, LastName from USER")

    for row in curser:
        print("ID = ", row[0])
        print("FirstName = ", row[1])

    conn.close()