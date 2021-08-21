# Water My Plants v1.0.0

Backend for ptpt-watermyplants-2

# /

## Logs a User In

<p>Logs a User In</p>

    POST /api/login

### Parameters

| Name     | Type   | Description                 |
| -------- | ------ | --------------------------- |
| username | String | <p>Username of the User</p> |
| password | String | <p>Password of the User</p> |

## Registers a New User

<p>Registers a New User</p>

    POST /api/register

### Parameters

| Name         | Type    | Description                              |
| ------------ | ------- | ---------------------------------------- |
| username     | String  | <p>The New Users username \*Required</p> |
| password     | String  | <p>The New Users password \*Required</p> |
| phone_number | Integer | <p>The New Users phone number<p>         |

# Users

## Gets all users (redundant)

<p>Gets all users</p>

    GET /api/users/

## Gets user by ID

<p>Gets user by ID</p>

    GET /api/users/:id

## Deletes user

<p>Delete user by id</p>

    DELETE /api/users/:id