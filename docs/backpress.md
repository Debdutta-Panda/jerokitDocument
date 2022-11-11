---
id: back-press
title: BackPress
slug: /back-press
---

<img src="/img/back_press.png" width="200px"></img>

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