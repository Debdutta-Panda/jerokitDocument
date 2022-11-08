---
id: getting-started
title: Getting Started
slug: /getting-started
---
# Getting Started
----------------------

# Latest Version

[![](https://jitpack.io/v/Debdutta-Panda/JeroKit.svg)](https://jitpack.io/#Debdutta-Panda/JeroKit)

# Installation

Add it in your root build.gradle at the end of repositories:

```groovy
allprojects {
	repositories {
		...
		maven { url 'https://jitpack.io' }
	}
}
```

Add the dependency

```groovy
dependencies {
    implementation 'com.github.Debdutta-Panda:JeroKit:<latest_version>'
}
```

# Recommendation

- **Compose Version:** 1.3.0
- **Kotlin Version:** 1.7.20
- **Compose Compiler Version:** 1.3.2

## Sample `project.gradle`

```groovy
buildscript {
    ext {
        compose_ui_version = '1.3.0'
    }
}
plugins {
    id 'com.android.application' version '7.3.1' apply false
    id 'com.android.library' version '7.3.1' apply false
    id 'org.jetbrains.kotlin.android' version '1.7.20' apply false
    id 'org.jetbrains.kotlin.jvm' version '1.7.20' apply false
}
```

- **Compilse SDK version:** 33

## Sample `app.gradle`
```groovy
plugins {
    id 'com.android.application'
    id 'org.jetbrains.kotlin.android'
}

android {
    namespace 'com.debduttapanda.jerokitsample'
    compileSdk 33

    defaultConfig {
        applicationId "com.debduttapanda.jerokitsample"
        minSdk 21
        targetSdk 33
        versionCode 1
        versionName "1.0"

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary true
        }
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = '1.8'
    }
    buildFeatures {
        compose true
    }
    composeOptions {
        kotlinCompilerExtensionVersion '1.3.2'
    }
    packagingOptions {
        resources {
            excludes += '/META-INF/{AL2.0,LGPL2.1}'
        }
    }
}

dependencies {

    implementation 'androidx.core:core-ktx:1.9.0'
    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.5.1'
    implementation 'androidx.activity:activity-compose:1.6.1'
    implementation "androidx.compose.ui:ui:$compose_ui_version"
    implementation "androidx.compose.ui:ui-tooling-preview:$compose_ui_version"
    implementation 'androidx.compose.material:material:1.3.0'

    implementation 'com.github.Debdutta-Panda:JeroKit:<latest_version>'

    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.1.3'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'
    androidTestImplementation "androidx.compose.ui:ui-test-junit4:$compose_ui_version"
    debugImplementation "androidx.compose.ui:ui-tooling:$compose_ui_version"
    debugImplementation "androidx.compose.ui:ui-test-manifest:$compose_ui_version"
    implementation "com.google.accompanist:accompanist-navigation-animation:0.26.5-rc"
    implementation "com.google.accompanist:accompanist-permissions:0.26.4-beta"
}
```

# Prepare the `MainActivity`

```kotlin
class MainActivity : ComponentActivity() {
    @SuppressLint("UnusedMaterialScaffoldPaddingParameter")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        WindowCompat.setDecorFitsSystemWindows(window, false)

        setContent {
            JerokitTheme {
                CompositionLocalProvider(
                    localDesignWidth provides 360f,
                ) {
                    Surface(
                        modifier = Modifier
                            .systemBarsPadding()
                            .fillMaxSize(),
                        color = MaterialTheme.colors.background
                    ) {
                        JeroApp()
                    }
                }
            }
        }
    }
}
```

# `JeroApp()`

```kotlin
@OptIn(ExperimentalAnimationApi::class)
@Composable
fun JeroApp() {
    val navController = rememberAnimatedNavController()
    AnimatedNavHost(
        navController,
        startDestination = "main"
    ) {
        JeroScreen<MainViewModel>(
            navController = navController,
            route = "main",
        ) {
            MainScreen() // your regular composable
        }
        JeroScreen<PageAViewModel>(
            navController = navController,
            route = "pageA",
        ) {
            PageA() // your regular composable
        }
    }
}
```

# `MainViewModel`

```kotlin
class MainViewModel: WirelessViewModel, ViewModel() {
    override val softInputMode = mutableStateOf(SoftInputMode.adjustNothing)
    override val resolver: Resolver = Resolver()
    override val notifier: NotificationService = NotificationService{id,arg->
        
    }
    override val navigation: MutableState<UIScope?> = Navigation()
    override val permissionHandler: PermissionHandler = PermissionHandler()
    override val resultingActivityHandler: ResultingActivityHandler = ResultingActivityHandler()
}
```

# `PageAViewModel`

```kotlin
class PageAViewModel: WirelessViewModel, ViewModel() {
    override val softInputMode = mutableStateOf(SoftInputMode.adjustNothing)
    override val resolver: Resolver = Resolver()
    override val notifier: NotificationService = NotificationService{id,arg->
        
    }
    override val navigation: MutableState<UIScope?> = Navigation()
    override val permissionHandler: PermissionHandler = PermissionHandler()
    override val resultingActivityHandler: ResultingActivityHandler = ResultingActivityHandler()
}
```