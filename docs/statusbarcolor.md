---
id: status-bar-color
title: StatusBarColor
slug: /status-bar-color
keywords: [change status bar color and icon darkness from viewmodel in jetpack compose]
description: change status bar color and icon darkness from viewmodel in jetpack compose
---

<img src="/img/status_bar_color.png" alt="status bar color" width="200px"></img>

Change status bar color easily from `viewModel`.

# Usage

```kotlin
statusBarColor.value = StatusBarColor(
    color = Color.Red,
    darkIcons = true
)
```