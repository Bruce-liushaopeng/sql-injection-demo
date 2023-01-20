import sqlite3

def newUserToDB(userName, password):
    conn = sqlite3.connect('sample.db')
    query = f"INSERT INTO USER ( userName, password) VALUES ('{userName}', '{password}')"
    print(userName)
    print(query)
    conn.execute(f"INSERT INTO USER ( userName, password) VALUES ('{userName}', '{password}')")
    conn.commit()
    conn.close()
    return "user ["+ userName +"] added auccess"

def getUserFromDB(userName):
    conn = sqlite3.connect('sample.db')
    print(userName)
    curser = conn.execute(f"SELECT userName, password from USER where userName = '{userName}'")
    userInfo = []
    for row in curser:
        data = [row[0], row[1]]
        userInfo.append(data)
        print("ID = ", row[0])
        print("userName = ", row[1])

    conn.close()
    return userInfo


if __name__ == '__main__':
    conn = sqlite3.connect('sample.db')
    userInput = f"123' or 'hello' = 'hello"
    curser = conn.execute(f"SELECT userName, password from USER where userName = '{userInput}'")
    updatedDB = []
    for row in curser:
        data = [row[0], row[1]]
        updatedDB.append(data)
        print("ID = ", row[0])
        print("userName = ", row[1])

    conn.close()