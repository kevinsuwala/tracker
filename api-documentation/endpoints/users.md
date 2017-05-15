# Users Endpoints

[GET users/:id](#get-usersid)

[POST users](#post-users)

[PUT users/:id](#put-usersid)

[DELETE users/:id](#delete-usersid)

## GET users/:id
Returns specified user.

***

### Example
    127.0.0.1:8000/api/users/2
**Returns**
``` json
  {
    "id": 2,
    "username": "kevinsuwala",
    "firstName": "Kevin",
    "lastName": "suwala",
    "createdAt": "2017-05-14T21:55:03.320Z",
    "updatedAt": "2017-05-14T21:55:03.320Z"
  }```

## POST users
Creates a new user

***

### Body Parameters
  username: String

  firstName: String

  lastName: String

***

### Example
    127.0.0.1:8000/api/users
**Body**
``` json
{
  "username": "kevinsuwala",
  "firstName": "Kevin",
  "lastName": "suwala"
}
```

**Returns**
``` json
{
  "id": 2,
  "username": "kevinsuwala",
  "firstName": "Kevin",
  "lastName": "suwala",
  "updatedAt": "2017-05-15T04:41:22.806Z",
  "createdAt": "2017-05-15T04:41:22.806Z"
}
```

## PUT users/:id
Updates a user.

***

### Body Parameters
  username: String (optional)

  firstName: String (optional)

  lastName: String (optional)
***

### Example
    127.0.0.1:8000/api/users/2
**Body**
``` json
{
  "lastName": "Suwala"
}
```

**Returns**
``` json
{
  "id": 2,
  "username": "kevinsuwala",
  "firstName": "Kevin",
  "lastName": "Suwala",
  "createdAt": "2017-05-15T04:41:22.806Z",
  "updatedAt": "2017-05-15T04:43:45.917Z"
}
```

## DELETE users/:id
Deletes a user

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/users/1

