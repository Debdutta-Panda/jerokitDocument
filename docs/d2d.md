---
id: d2d
title: D2D
slug: /d2d
keywords: [easy way to develop pixel perfect ui in jetpack compose]
description: easy way to develop pixel perfect ui in jetpack compose
---

# D2D: Design to Development

<img src="/img/d2d.png" alt="d2d" width="200px"></img>

Easy way to make pixel perfect UI as per design.

# Usage

Copy the canvas width from design(xd, figma, etc.)

Paste in `ScreenDimension.kt` like below

```kotlin
val localDesignWidth = compositionLocalOf { <canvas_size_the_numerical_value_in_float> }
```

Copy the UI component dimension(width, height, radius, padding, font-size etc.)

Use `dep` instead of dp and `sep` instead of sp

## Example

Let's say button width is **100px** in *figma*, then it's corresponding compose dimension will be ~~100dp~~ `100.dep`