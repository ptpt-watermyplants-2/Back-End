# Water My Plants v1.0.0

Backend for ptpt-watermyplants-2
Deployed link is https://damp-ravine-25485.herokuapp.com/

# /

## Logs a User In

<p>Logs a User In. Returns a token.</p>

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

# /api/users

## Gets all users (redundant)

<p>Gets all users</p>

    GET /api/users/

## Gets user by ID

<p>Gets user by ID</p>

    GET /api/users/:id

## Deletes user

<p>Delete user by id. Token is required for deletion.</p>

    DELETE /api/users/:id

## Updates user

<p>Updates user by id</p>

    PUT /api/users/:id

## Gets users plants

<p>Gets users plants by id</p>

    GET /api/users/:id/plants

# /plants

## Creates a plant

<p>Creates a plant</p>

    POST /api/plants

### Parameters

| Name          | Type    | Description                                       |
| ------------- | ------- | ------------------------------------------------- |
| nickname      | String  | <p>Special nickname of plant if wanted</p>        |
| species       | String  | <p>Plant species</p>                              |
| h2o_frequency | String  | <p>How often the plant requires watering</p>      |
| image         | String  | <p>Image link for the plant</p>                   |
| user_id       | Integer | <p>User ID associated to the plant \*REQUIRED</p> |

## Gets plant by id

<p>Gets specific plant</p>

    GET /api/plants/:id

## Update plant

<p>Updates a plant</p>

    PUT /api/plants/:id

## Get users plants

<p>Does the same thing as in users. Gets users plants by ID</p>

    GET /api/plants/:id/plants

## Delete plant by id

<p>Deletes specific plant</p>

    DELETE /api/plants/:id
