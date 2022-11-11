---
id: wireless-viewmodel
title: WirelessViewModel
slug: /wireless-viewmodel
---

<img src="/img/wireless_viewmodel.png" width="400px"></img>

# What we do normally

```kotlin
@Composable
fun MyPage(
    vm: MyViewModel = viewModel()// or hiltViewModel()
){
    Column(){
        Text(vm.value.value)
        Button(
            onClick = {
                vm.onClick()
            }
        ) {
            Text("Click Me")
        }
    }
}
```

```kotlin
class MyViewModel: ViewModel() {
    private val rand = Random(0)
    val value = mutableStateOf("")

    fun onClick(){
        value.value = "${rand.nextInt()}"
    }
}
```

# With dep UI

```kotlin
@Composable
fun MyPage(
    vm: MyViewModel = viewModel()
){
    Column(){
        Text(vm.value.value)
        Button(
            onClick = {
                vm.onClick()
            }
        ) {
            Text("Click Me")
        }
        DeepUI()
    }
}

@Composable
fun DeepUI(
    vm: MyViewModel = viewModel()
) {
    Column(){
        Text(vm.value1.value)
        Button(
            onClick = {
                vm.onClick1()
            }
        ) {
            Text("Click Me 1")
        }
    }
}
```

```kotlin
class MyViewModel: ViewModel() {
    private val rand = Random(0)
    val value = mutableStateOf("")
    val value1 = mutableStateOf("")

    fun onClick(){
        value.value = "${rand.nextInt()}"
    }
    fun onClick1(){
        value1.value = "${rand.nextInt()}"
    }
}
```

So, our **UI**s get coupled with viewModel. Its not a problem for the page itself but for the reusable components we have to use with other pages as well.

# What we can do with `WirelessViewModel`-way

```kotlin
@Composable
fun MyPage(
    value: String = stringState(key = DataIds.value).value,
    notifier: NotificationService = myNotifier()
){
    Column(){
        Text(value)
        Button(
            onClick = {
                notifier.notify("value_click")
            }
        ) {
            Text("Click Me")
        }
        DeepUI()
    }
}

@Composable
fun DeepUI(
    value: String = stringState(key = DataIds.value1).value,
    notifier: NotificationService = myNotifier()
) {
    Column(){
        Text(value)
        Button(
            onClick = {
                notifier.notify("value_click1")
            }
        ) {
            Text("Click Me 1")
        }
    }
}
```

```kotlin
class MyViewModel: WirelessViewModel, ViewModel() {
    private val value = mutableStateOf("")
    private val value1 = mutableStateOf("")
    /////
    private var rand = Random(0)
    override val softInput = mutableStateOf(SoftInput.adjustNothing)
    override val resolver: Resolver = Resolver()
    override val pownav: MutableState<UIScope?> = PowerNavigation()
    override val permitter: Permitter = Permitter()
    override val resultar: Resultar = Resultar()
    override val notifier: NotificationService = NotificationService{ id, arg->
        when(id) {
            "value_click"->{
                value.value = "${rand.nextInt()}"
            }
            "value_click"->{
                value1.value = "${rand.nextInt()}"                
            }
        }
    }
    init {
        resolver.addAll(
            DataIds.value to value,
            DataIds.value1 to value1,
        )
    }
}
```

Now the UI and viewModel got decoupled. Any page can be attached to any viewModel(the viewModel should fulfill the data requirement of the page)

It will help to test as well.

We can easlily mock the ViewModel.

# Resolving apis

```kotlin
// take float as state
@Composable
fun floatState(key: Any): State<Float>

//take double as state
@Composable
fun doubleState(key: Any): State<Double>

//take string as state
@Composable
fun stringState(key: Any): State<String>

// take boolean as state
@Composable
fun boolState(key: Any): State<Boolean>

//take boolean as state, safe version
@Composable
fun safeBoolState(key: Any): State<Boolean>?

// take int as state
@Composable
fun intState(key: Any): State<Int>

// take list as state, aka mutableStateListOf
@Composable
fun <T>listState(key: Any): SnapshotStateList<T>

// take list as state, safe version
@Composable
fun <T>safeListState(key: Any): SnapshotStateList<T>?

// take map as state, aka mutableStateMapOf
@Composable
fun <T, E>mapState(key: Any): SnapshotStateMap<T, E>

// take map as state, aka mutableStateMapOf, safe version
@Composable
fun <T, E>safeMapState(key: Any): SnapshotStateMap<T, E>?

// take anything
@Composable
fun <T>t(key: Any): T

// take anything as state
@Composable
fun <T>tState(key: Any): State<T>

// take anything as state, safe version
@Composable
fun <T>safeTState(key: Any): State<T>?
```