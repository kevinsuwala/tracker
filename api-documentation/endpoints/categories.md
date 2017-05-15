# Categories Endpoints

[GET categories/:id](#get-categoriesid)

[POST categories](#post-categories)

[PUT categories/:id](#put-categoriesid)

[DELETE categories/:id](#delete-categoriesid)

## GET categories/:id
Returns specified category.

***

### Example
    127.0.0.1:8000/api/categories/1
**Returns**
``` json
  [ 
    {
      "colour": "green",
      "name": "CS350",
      "userId": 1
    }
  ]
```

## POST categories
Creates a new category

***

### Body Parameters
  colour: String

  name: String

  userId: String
***

### Example
    127.0.0.1:8000/api/categories
**Body**
``` json
{
  "colour": "green",
  "name": "CS350",
  "userId": 1
}

```

**Returns**
``` json
{
  "id": 1,
  "name": "CS350",
  "colour": "green",
  "UserId": 1,
  "updatedAt": "2017-05-15T04:45:05.942Z",
  "createdAt": "2017-05-15T04:45:05.942Z"
}
```

## PUT categories/:id
Updates a category.

***

### Body Parameters
  colour: String (optional)

  name: String (optional)

***

### Example
    127.0.0.1:8000/api/categories/1
**Body**
``` json
{
  "colour": "blue"
}
```

**Returns**
``` json
{
  "id": 1,
  "UserId": 1,
  "name": "CS350",
  "colour": "blue",
  "createdAt": "2017-05-15T04:45:05.942Z",
  "updatedAt": "2017-05-15T04:47:13.690Z"
}
```

## DELETE categories/:id
Deletes a category

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/categories/1

