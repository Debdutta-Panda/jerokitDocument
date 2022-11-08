---
id: power-navigation
title: PowerNavigation
slug: /power-navigation
---

<img src="/img/power_navigation_logo.png" width="100px"></img>

# Introduction
-----------------

In Jetpack Compose navigation is only possible from composable itself, but in reality `ViewModel` has to decide:
- where to go, 
- when to go, 
- how to go(arguments, etc.).

Also we can should not pass `NavHostController` like things in `ViewModel`.

`PowerNavigation` allows you to control 
- any type of navigation scenario
- direct from ViewModel 
- without breaking any best practices or recommendations.

# Usage
----------------

Inside your viewModel which already inherited from `WirelessViewModel` has the access of `pownav`.

```kotlin
pownav.scope { navHostController, lifecycleOwner, toaster ->
    navHostController.navigate("your_route")
}
```

Inside the `pownav.scope` you have the `navHostController` so you can call any **navigation api**.

That is it, **extremely simple** with **huge power** and **no bad practices**.

# Toaster
------------------

You may have already noticed that the `pownav.scope` block provide a `toaster` as well. With this you can show toast.

```kotlin
toaster?.toast("Hello") // short toast by default
toaster?.toast("Hello", Toast.LENGTH_LONG) // long toast
```