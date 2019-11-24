# ChatPlusPlus

## Pages
  - Login Screen
  - Messenger page
  - User Settings (Soon™)
  - User Info (Soon™)

## What is a User

- user
```js
{
  _id: UUID
  username: String
  friendsList: [
    user
    // pagination: 20
    // sorted by: most recent message
  ]
}
```

- message
```js
{
  _id: UUID
  senderName: String
  message: String
  date: Date
}
```

- conversation
```js
{ 
  _id: UUID
  friendName: String
  friend_id: UUID
  messages: [
    message
    // pagination: 100
  ]
}
```

















  
