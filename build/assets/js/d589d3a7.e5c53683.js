"use strict";(self.webpackChunkjerokit=self.webpackChunkjerokit||[]).push([[162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={id:"getting-started",title:"Getting Started",slug:"/getting-started"},o="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"----------------------",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/jerokitDoc/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",slug:"/getting-started"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/jerokitDoc/"},next:{title:"Components",permalink:"/jerokitDoc/components"}},s={},p=[{value:"Sample <code>project.gradle</code>",id:"sample-projectgradle",level:2},{value:"Sample <code>app.gradle</code>",id:"sample-appgradle",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"latest-version"},"Latest Version"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jitpack.io/#Debdutta-Panda/JeroKit"},(0,i.kt)("img",{parentName:"a",src:"https://jitpack.io/v/Debdutta-Panda/JeroKit.svg",alt:null}))),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Add it in your root build.gradle at the end of repositories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"allprojects {\n    repositories {\n        ...\n        maven { url 'https://jitpack.io' }\n    }\n}\n")),(0,i.kt)("p",null,"Add the dependency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.github.Debdutta-Panda:JeroKit:<latest_version>'\n}\n")),(0,i.kt)("h1",{id:"recommendation"},"Recommendation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compose Version:")," 1.3.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kotlin Version:")," 1.7.20"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compose Compiler Version:")," 1.3.2")),(0,i.kt)("h2",{id:"sample-projectgradle"},"Sample ",(0,i.kt)("inlineCode",{parentName:"h2"},"project.gradle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"buildscript {\n    ext {\n        compose_ui_version = '1.3.0'\n    }\n}\nplugins {\n    id 'com.android.application' version '7.3.1' apply false\n    id 'com.android.library' version '7.3.1' apply false\n    id 'org.jetbrains.kotlin.android' version '1.7.20' apply false\n    id 'org.jetbrains.kotlin.jvm' version '1.7.20' apply false\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compilse SDK version:")," 33")),(0,i.kt)("h2",{id:"sample-appgradle"},"Sample ",(0,i.kt)("inlineCode",{parentName:"h2"},"app.gradle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n    id 'com.android.application'\n    id 'org.jetbrains.kotlin.android'\n}\n\nandroid {\n    namespace 'com.debduttapanda.jerokitsample'\n    compileSdk 33\n\n    defaultConfig {\n        applicationId \"com.debduttapanda.jerokitsample\"\n        minSdk 21\n        targetSdk 33\n        versionCode 1\n        versionName \"1.0\"\n\n        testInstrumentationRunner \"androidx.test.runner.AndroidJUnitRunner\"\n        vectorDrawables {\n            useSupportLibrary true\n        }\n    }\n\n    buildTypes {\n        release {\n            minifyEnabled false\n            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'\n        }\n    }\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n    kotlinOptions {\n        jvmTarget = '1.8'\n    }\n    buildFeatures {\n        compose true\n    }\n    composeOptions {\n        kotlinCompilerExtensionVersion '1.3.2'\n    }\n    packagingOptions {\n        resources {\n            excludes += '/META-INF/{AL2.0,LGPL2.1}'\n        }\n    }\n}\n\ndependencies {\n\n    implementation 'androidx.core:core-ktx:1.9.0'\n    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.5.1'\n    implementation 'androidx.activity:activity-compose:1.6.1'\n    implementation \"androidx.compose.ui:ui:$compose_ui_version\"\n    implementation \"androidx.compose.ui:ui-tooling-preview:$compose_ui_version\"\n    implementation 'androidx.compose.material:material:1.3.0'\n\n    implementation 'com.github.Debdutta-Panda:JeroKit:<latest_version>'\n\n    testImplementation 'junit:junit:4.13.2'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.3'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'\n    androidTestImplementation \"androidx.compose.ui:ui-test-junit4:$compose_ui_version\"\n    debugImplementation \"androidx.compose.ui:ui-tooling:$compose_ui_version\"\n    debugImplementation \"androidx.compose.ui:ui-test-manifest:$compose_ui_version\"\n    implementation \"com.google.accompanist:accompanist-navigation-animation:0.26.5-rc\"\n    implementation \"com.google.accompanist:accompanist-permissions:0.26.4-beta\"\n}\n")),(0,i.kt)("h1",{id:"prepare-the-mainactivity"},"Prepare the ",(0,i.kt)("inlineCode",{parentName:"h1"},"MainActivity")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MainActivity : ComponentActivity() {\n    @SuppressLint("UnusedMaterialScaffoldPaddingParameter")\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        WindowCompat.setDecorFitsSystemWindows(window, false)\n\n        setContent {\n            JerokitTheme {\n                CompositionLocalProvider(\n                    localDesignWidth provides 360f,\n                ) {\n                    Surface(\n                        modifier = Modifier\n                            .systemBarsPadding()\n                            .fillMaxSize(),\n                        color = MaterialTheme.colors.background\n                    ) {\n                        JeroApp()\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("h1",{id:"jeroapp"},(0,i.kt)("inlineCode",{parentName:"h1"},"JeroApp()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@OptIn(ExperimentalAnimationApi::class)\n@Composable\nfun JeroApp() {\n    val navController = rememberAnimatedNavController()\n    AnimatedNavHost(\n        navController,\n        startDestination = "main"\n    ) {\n        JeroScreen<MainViewModel>(\n            navController = navController,\n            route = "main",\n        ) {\n            MainScreen() // your regular composable\n        }\n        JeroScreen<PageAViewModel>(\n            navController = navController,\n            route = "pageA",\n        ) {\n            PageA() // your regular composable\n        }\n    }\n}\n')),(0,i.kt)("h1",{id:"mainviewmodel"},(0,i.kt)("inlineCode",{parentName:"h1"},"MainViewModel")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MainViewModel: WirelessViewModel, ViewModel() {\n    override val softInputMode = mutableStateOf(SoftInputMode.adjustNothing)\n    override val resolver: Resolver = Resolver()\n    override val notifier: NotificationService = NotificationService{id,arg->\n        \n    }\n    override val navigation: MutableState<UIScope?> = Navigation()\n    override val permissionHandler: PermissionHandler = PermissionHandler()\n    override val resultingActivityHandler: ResultingActivityHandler = ResultingActivityHandler()\n}\n")),(0,i.kt)("h1",{id:"pageaviewmodel"},(0,i.kt)("inlineCode",{parentName:"h1"},"PageAViewModel")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class PageAViewModel: WirelessViewModel, ViewModel() {\n    override val softInputMode = mutableStateOf(SoftInputMode.adjustNothing)\n    override val resolver: Resolver = Resolver()\n    override val notifier: NotificationService = NotificationService{id,arg->\n        \n    }\n    override val navigation: MutableState<UIScope?> = Navigation()\n    override val permissionHandler: PermissionHandler = PermissionHandler()\n    override val resultingActivityHandler: ResultingActivityHandler = ResultingActivityHandler()\n}\n")))}c.isMDXComponent=!0}}]);