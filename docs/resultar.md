---
id: resultar
title: Resultar
slug: /resultar
---

<img src="/img/resultar.png" width="100px"></img>

This is to handle `activity-for-result` handling.

# Step 1: Ensure permission if required

# Step 2: Request the activity

Example: Take picture preview from camera

```kotlin
viewModelScope.launch(Dispatchers.Main) {
    val result = resultar.takePicturePreview()
}
```

There can be lots of use-case. Only 2 of them are implemented in this library. You have to implement as you requirement.

# Sample Implementation(takePicturePreview)

```kotlin
suspend fun Resultar.takePicturePreview(
    maxTry: Int = 10,
    millis: Long = 200
): Bitmap?{
    return request(
        ActivityResultContracts.TakePicturePreview(), // put your contract
        maxTry,
        millis
    ){
        it.launch() // call the launch, signature may differ as per contract
    }
}
```