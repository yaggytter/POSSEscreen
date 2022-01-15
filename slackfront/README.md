# Slack integration

You can use a slack channel insted of webfront.

### Deploy firebase function

```
cd ./functions
firebase login
firebase use PROJECTNAME
firebase deploy --only functions
```

### Slack integration settings

- Create new Slack App.
- Setup "Event Subscriptions".
- Use the endpoint URL for firebase function.
- Add a bot events to use "message.channels"
- Install the App to your slack workspace.
