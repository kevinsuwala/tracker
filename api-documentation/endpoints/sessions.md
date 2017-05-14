# Sessions Endpoints

[GET sessions/:id](#get-sessionsid)

[POST sessions](#post-session)

[PUT sessions/:id](#put-sessionsid)

[DELETE sessions/:id](#delete-sessionsid)

## GET sessions/:id
Returns specified session.

***

### Example
    127.0.0.1:8000/api/sessions/1
**Returns**
``` json
  {
    "id": 1,
    "UserId": 1,
    "description": "studied stuff",
    "categories": [121,123],
    "startTime": "2017-02-12T23:03:34.199Z",
    "endTime": "2017-02-12T23:03:34.199Z",
    "createdAt": "2017-02-12T23:03:34.199Z",
    "updatedAt": "2017-02-12T23:03:34.199Z"
  }```

## POST sessions
Creates a new session

***

### Body Parameters
description: string

categories: array of ids

startTime: Date

endTime: Date

userId: integer

***

### Example
    127.0.0.1:8000/api/sessions
**Body**
``` json
{
    "description": "studying random topics",
    "startTime": "1",
    "categories": [121,123],
    "startTime": "2017-02-12T23:03:34.199Z",
    "endTime": "2017-02-12T23:03:34.199Z"
    "userId": 1
}

```

**Returns**
``` json
  {
    "id": 1,
    "UserId": 1,
    "description": "studied stuff",
    "categories": [121,123],
    "startTime": "2017-02-12T23:03:34.199Z",
    "endTime": "2017-02-12T23:03:34.199Z",
    "createdAt": "2017-02-12T23:03:34.199Z",
    "updatedAt": "2017-02-12T23:03:34.199Z"
  }
```

## PUT sessions/:id
Updates a session.

***

### Body Parameters
description: string (optional)

categories: array of ids (optional)

startTime: Date (optional)

endTime: Date (optional)

***

### Example
    127.0.0.1:8000/api/sessions/1
**Body**
``` json
{
    "name": "not the best studying period"
}
```

**Returns**
``` json
  {
    "id": 1,
    "UserId": 1,
    "description": "not the best studying period",
    "categories": [121,123],
    "startTime": "2017-02-12T23:03:34.199Z",
    "endTime": "2017-02-12T23:03:34.199Z",
    "createdAt": "2017-02-12T23:03:34.199Z",
    "updatedAt": "2017-02-12T23:03:34.199Z"
  }
```

## DELETE sessions/:id
Deletes a session

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/sessions/1
