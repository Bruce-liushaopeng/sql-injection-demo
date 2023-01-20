import sqlite3

def newUserToDB(userName, password):
    conn = sqlite3.connect('sample.db')
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