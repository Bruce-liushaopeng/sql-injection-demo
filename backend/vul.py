import sqlite3

def newUserToDB(firstName, lastName):
    conn = sqlite3.connect('sample.db')

    conn.execute(f"INSERT INTO USER ( FirstName, LastName) VALUES ('Bruce123', 'Liu111')")
    conn.commit()

    curser = conn.execute("SELECT FirstName, LastName from USER")

    for row in curser:
        print("ID = ", row[0])
        print("FirstName = ", row[1])

    conn.close()

if __name__ == "__main__":
    conn = sqlite3.connect('sample.db')

    conn.execute(f"INSERT INTO USER ( FirstName, LastName) VALUES ('Bruce111', 'Liu111')")
    conn.commit()

    curser = conn.execute("SELECT FirstName, LastName from USER")

    for row in curser:
        print("ID = ", row[0])
        print("FirstName = ", row[1])

    conn.close()