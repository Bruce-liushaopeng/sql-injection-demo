from vul import add_user_to_db, get_user_from_db


def add_user(username: str, password: str) -> str:
    """
    Adds a user to the system.
    Wrapper for database system function.

    :param username: Username of the new user
    :param password: Password of the new user
    :return: Success message
    """

    return add_user_to_db(username, password)


def get_user(username: str) -> list:
    """
    Retrieves a user from the system.
    Wrapper for database system function.

    :param username: The username of the user to get
    :return: Any user information retrieved
    """

    return get_user_from_db(username)
