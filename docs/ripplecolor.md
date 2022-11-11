---
id: ripple-color
title: RippleColor
slug: /ripple-color
---

Often we have to change the color of ripple.

# Usage

```kotlin
RippleColor(Color(0xff1A79E5)) {
    IconButton(
        onClick = {
            // click action
        },
        modifier = Modifier.size(24.dp)
    ) {
        Icon(
            painter = painterResource(id = R.drawable.my_icon),
            contentDescription = "my_content_description",
            modifier = Modifier.size(20.dp),
            tint = Color.Red
        )
    }
}
```