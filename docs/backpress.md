---
id: back-press
title: BackPress
slug: /back-press
keywords: [back press handling in android jetpack compose]
description: handle back press from viewmodel
---

<img src="/img/back_press.png" alt="back press" width="200px"></img>

Handle back press from viewModel.

# Usage

```kotlin
override val notifier: NotificationService = NotificationService{id,arg->
        when(id){
            "back_<route_name>"->{
                // do whatever you want
            }
        }
    }
```