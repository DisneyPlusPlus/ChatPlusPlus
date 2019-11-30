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
  _id: UUID;
  username: String;
  password: String;
  friendsList: [
    user
    // pagination: 20
    // sorted by: most recent message
  ];
}
```

- conversation

```js
{
  _id: UUID;
  friendName: String;
  friend_id: UUID;
  messages: [
    message
    // pagination: 100
  ];
}
```

- message

```js
{
  _id: UUID;
  senderName: String;
  message: String;
  date: Date;
}
```

<!-- ^^^ <-------------------------11/23/2019


vvv <-------------------------11/23/2019 -->

Build out a database that contains the above tables. Didney

Build the main interface Chat application window with messages. Mr. Tumnus
