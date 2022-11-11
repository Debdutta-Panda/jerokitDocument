---
id: permitter
title: Permitter
slug: /permitter
---

<img src="/img/permitter.png" width="100px"></img>

This is to manager permission. By this you can check/request multi/single permission directly from viewModel.

## Step 1: Add permission to manifest

```xml
<uses-permission android:name="android.permission.CAMERA"/>
```

## Step 2: Check permission

### API

```kotlin
suspend fun check(vararg permissions: String): MultiplePermissionsState?
```

### Usage

```kotlin
viewModelScope.launch(Dispatchers.Main) {
    val result = permitter.check(android.Manifest.permission.CAMERA)// MultiPermissionState?
    val granted = result?.allPermissionsGranted==true
}
```

## Step 3: Request permission

### API

```kotlin
suspend fun request(vararg permissions: String): Map<String, Boolean>?
```

### Usage

```kotlin
viewModelScope.launch(Dispatchers.Main) {
    val result = permitter.request(android.Manifest.permission.CAMERA)// Map<String, Boolean>
    val granted = result?.get(android.Manifest.permission.CAMERA)==true
}
```