import sqlite3

def newUserToDB(firstName, lastName):
    conn = sqlite3.connect('sample.db')

    conn.execute(f"INSERT INTO USER ( FirstName, LastName) VALUES ('{firstName}', '{lastName}')")
    conn.commit()

    curser = conn.execute("SELECT FirstName, LastName from USER")
    updatedDB = []
    for row in curser:
        data = [row[0], row[1]]
        updatedDB.append(data)
        print("ID = ", row[0])
        print("FirstName = ", row[1])

    conn.close()
    return updatedDB