---
id: sheeting
title: Sheeting
slug: /sheeting
---

<img src="/img/sheets.png" width="100px"></img>

This is to manage modal bottom sheets. It offers pluggable modular sheet management directly in viewModel.

# Steps
-----------------

## Craft the UI

For example:

```kotlin
@Composable
fun Sheet1(
    text: String = stringState(key = "text").value,
    text1: String = stringState(key = "text1").value,
    text2: String = stringState(key = "text2").value,
    notifier: NotificationService = myNotifier()
){
    SheetColumn(
        modifier = Modifier
            .fillMaxWidth()
            .padding(24.dp)
        ,
        verticalArrangement = Arrangement.Center,
    ){
        Text("Sheet1")
        Text(text)
        TextField(
            value = text1,
            onValueChange = {
                notifier.notify("text1",it)
            }
        )
        TextField(
            value = text2,
            onValueChange = {
                notifier.notify("text2",it)
            }
        )
        Row(){
            Button(onClick = {
                notifier.notify("button")
            }) {
                Text("Join")
            }
            Button(onClick = {
                notifier.notify("done")
            }) {
                Text("Done")
            }
            Button(onClick = {
                notifier.notify("switch")
            }) {
                Text("Switch")
            }
        }
    }
}
```