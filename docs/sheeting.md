---
id: sheeting
title: Sheeting
slug: /sheeting
keywords: [handle modal bottom sheets from viewmodel in jetpack compose]
description: handle modal bottom sheets from viewmodel in jetpack compose
---

<img src="/img/sheets.png" alt="sheets" width="100px"></img>

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

<img src="/img/sheet1_image.png" width="100%"></img>

# Create the Sheet Model(like viewModel)

```kotlin
class Sheet1Model(val callback: Callback): BottomSheetModel {
    interface Callback{
        fun scope(): CoroutineScope
        fun close()
        fun switch()
    }
    /////////////////
    private val _resolver = Resolver()
    private val _notifier = NotificationService{id,arg->
        when(id){
            "text1"->{
                text1.value = arg as? String?:return@NotificationService
            }
            "text2"->{
                text2.value = arg as? String?:return@NotificationService
            }
            "button"->{
                text.value = "${text1.value} and ${text2.value}"
            }
            "done"->{
                callback.close()
            }
            "switch"->{
                callback.switch()
            }
        }
    }
    /////////////////
    override val resolver = _resolver
    override val notifier = _notifier
    override val scope get() = callback.scope()

    @Composable
    override fun Content() {
        Sheet1()
    }

    override fun initialize() {

    }

    override fun clear() {
        text.value = ""
        text1.value = ""
        text2.value = ""
    }

    override fun onBack() {
        callback.close()
    }

    override fun onVisibilityChange(it: Boolean) {
        if(!it){
            clear()
        }
    }

    ////////////
    private val text = mutableStateOf("")
    private val text1 = mutableStateOf("")
    private val text2 = mutableStateOf("")
    ////////////
    init {
        _resolver.addAll(
            "text" to text,
            "text1" to text1,
            "text2" to text2
        )
    }
}
```

You can customize the sheetModel as per your need. You can add extra methods to callback. Callback is the way to communicate with host viewModel.

# Attach to viewModel

```kotlin
override val sheeting = Sheeting(
    sheetMap = mapOf(
        MySheets.Sheet1 to Sheet1Model(
            object: Sheet1Model.Callback{
                override fun scope(): CoroutineScope {
                    return viewModelScope
                }

                override fun close() {
                    mySheeting.hide()
                }

                override fun switch() {
                    mySheeting.change(MySheets.Sheet2)
                }
            }
        )
    ),
    onVisibilityChanged = {
        if(!it){
            mySheeting.change(Sheets.None)
        }
    }
)
```

# Manage the sheet

```kotlin
mySheeting.change(MySheets.Sheet1)
mySheeting.show()
```

# MySheets

```kotlin
class MySheets: Sheets() {
    object Sheet1: Sheets()
}
```

So, you can attach as many modal bottom sheets as you want. Write once use/plug anywhere.

# APIs
------------------------

## 1. Show

```kotlin
mySheeting.show()
```

## 2. Hide

```kotlin
mySheeting.hide()
```

## 3. Change

```kotlin
mySheeting.change(MySheets.Sheet1)
```

If you just want to change the sheet content then just call `change`, no need to call `show/hide`.

## 4. Back

```kotlin
mySheeting.onBack()
```

## 5. Clear

```kotlin
mySheeting.clear()
```
