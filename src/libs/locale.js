/*
 * YukiHookAPI Project Builder - A Xposed Project Builder by YukiHookAPI.
 * Copyright (C) 2019-2022 HighCapable
 * https://github.com/fankes/YukiHookAPI-ProjectBuilder
 *
 * This software is non-free but opensource software: you can redistribute it
 * and/or modify it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * and eula along with this software.  If not, see
 * <https://www.gnu.org/licenses/>
 *
 * This file is Created by fankes on 2022/7/8.
 */

const locale = {
    /** Current using locale name */
    name: '',
    /** Default locale name */
    default: 'en',
    /** The locale String */
    i18n: {},
    /**
     * Init locale
     * @param name the locale name
     */
    initLocale: (name) => {
        const data = locale.languages[name];
        locale.name = data === undefined ? locale.default : name;
        locale.i18n = data ?? locale.languages[locale.default];
    },
    /**
     * Formatting special placeholder String
     * @param string Current String
     * @param objArrs Placeholder Strings
     * @return string
     */
    format: (string, ...objArrs) => {
        let finalString = string;
        if (objArrs === []) return string;
        objArrs.forEach((value, index) => {
            finalString = finalString.replace('{%' + (index + 1) + '}', value);
        });
        return finalString;
    },
    /** All supports languages */
    languageSupports: {
        "en": "English",
        "zh-CN": "简体中文",
        "ja": "日本語"
    },
    /** All languages configs */
    languages: {
        "en": {
            "language": "Language",
            "followSystem": "Follow System",
            "appName": "YukiHookAPI Project Builder",
            "windowTitle": "Create a new Xposed Module Project",
            "nothing": "nothing",
            "about": "About",
            "openSource": "Open Source",
            "checkUpdate": "Check for Updates...",
            "checkUpdateTip": "Checking for updates...",
            "checkUpdateFailTip": "Check for updates failed",
            "newVersionFound": "New Version Found",
            "upToDateTip": "Application is up-to-date",
            "updateLogs": "Update Logs",
            "updateNow": "Update Now",
            "file": "File",
            "help": "Help",
            "projectAddress": "Project Address",
            "helpDocumentation": "Help Documentation",
            "quit": "Quit",
            "project": "Project",
            "runBuild": "Run Build",
            "configTemplate": "Config Template",
            "savedTemplate": "Saved Template",
            "newTemplate": "New Template",
            "newTemplateByCurrentConfig": "New Template By Current Config",
            "enterTemplateNameTip": "Please enter the template name",
            "clearAllTemplate": "Clear All Template",
            "configTemplateSaved": "\"{%1}\" config template saved",
            "configTemplateLoaded": "\"{%1}\" config template loaded",
            "configTemplateCleared": "All config templates have been cleared",
            "resetCurrentConfig": "Reset Current Config",
            "selectProjectPath": "Please select a location to create the project",
            "selectProjectPathTip": "The project will be created in the directory of your choice in the format: directory of choice/project name",
            "selectThisDirectory": "Select this directory",
            "buildCompleteTip": "The project has been created and packaged for you, here is the build checklist.",
            "buildPathNoticeTip": "The project has been created to the following path, please check and use it with peace of mind!",
            "basicConfig": "Basic Config",
            "yukiHookApiConfig": "YukiHookAPI Config",
            "projectName": "Project Name",
            "projectNameTip": "Project Name (Please use English name)",
            "modulePackageName": "Module Package Name",
            "moduleName": "Module Name",
            "moduleDescription": "Module Description",
            "uiComponents": "UI Components",
            "gradlePaper": "Gradle Paper",
            "agpVersion": "Android Gradle Plugin Version",
            "kotlinVersion": "Kotlin Version",
            "yukiHookApiVersion": "YukiHookAPI Version",
            "createDefaultActivity": "Create default Activity (with active state)",
            "createBlankActivity": "Create a blank Activity",
            "withoutUiComponents": "No UI components required",
            "appMinApiVersion": "App Min API Version",
            "appTargetApiVersion": "App Target API Version",
            "xposedMinApiVersion": "Xposed Min API Version",
            "targetXposedPlatform": "Target Xposed Platform",
            "universal": "Universal",
            "nativeXposed": "Native Xposed",
            "declarationNewXSharePrefs": "Declaration New XShare Prefs (Xposed Min API ≥ 93 was optional)",
            "moduleScope": "Module Scope",
            "addApps": "Add apps",
            "entryClassName": "Entry class name (When blank use the default value)",
            "addResourcesHookSupport": "Add Resources Hook support",
            "debugTagName": "Debug TAG name (Default is YukiHookAPI)",
            "enableDebugMode": "Enable debug mode",
            "enablePrintLogcat": "Enable debug log output",
            "enableYukiHookModulePrefsCache": "Enable YukiHookModulePrefs key-value caching",
            "enableModuleResourcesCache": "Enable module Resources caching",
            "enableModuleStatus": "Enable module activation status listening",
            "enableYukiHookDataChannel": "Enable YukiHookDataChannel feature",
            "enableMemberCache": "Enable founded reflection class, method, variable caching",
            "selectScopeAppsOrEnterOnceTip": "Please select the app you need to add to the scope from the list",
            "customize": "Customize",
            "systemFramework": "System Framework",
            "systemUi": "System UI",
            "enterAppNameTip": "Please enter the app package name",
            "autoSearchingDependsTip": "Automatically searching for available project dependencies",
            "configProjectDepends": "Configure Project Dependencies",
            "oldDependsWarnTip": "It is recommended to always keep dependencies to the latest version, older versions may not continue to work.",
            "enterPkgNameOrSelectFromListTip": "Please enter the package name to add or select from the drop-down list",
            "invalidEnterPkgNameTip": "The package name to be added is invalid",
            "existEnterPkgNameTip": "The package name to be added already exists",
            "areYouSureRemoveItemTip": "Are you sure you want to remove \"{%1}\"?",
            "taskIsRunningTip": "There is currently a task in progress, please wait for it to complete",
            "enterProjectNameTip": "Please enter a project name",
            "projectNameRuleTip": "Project name can only be letters and numbers and underscore, and cannot start with a number",
            "enterModulePackageNameTip": "Please enter the module package name",
            "invalidModulePackageNameTip": "Invalid module package name",
            "enterModuleAppNameTip": "Please enter a module name",
            "enterModuleDescriptionTip": "Please enter a module description",
            "enterAppMinApiVersionTip": "Please enter the app Min API version",
            "lsposedSupportMinAppApiWarnTip": "The Min API version of the module app supported by LSPosed cannot be lower than 27 (Android 8.1)",
            "tooLowAppMinApiVersionWarnTip": "App Min API version must not be lower than 21 (Android 5.1)",
            "tooHighAppMinApiVersionWarnTip": "App Min API version is too high",
            "enterAppTargetApiVersionTip": "Please enter the app Target API version",
            "tooLowAppTargetApiVersionWarnTip": "The app Target API version cannot be lower than the app Min API version",
            "maybeInvalidAppTargetApiVersionTip": "App Target API version may be invalid",
            "enterXposedMinApiVersionTip": "Please enter the Xposed Min API version",
            "tooLowXposedMinApiVersionWarnTip": "Xposed Min API version cannot be lower than 82",
            "tooHighXposedMinApiVersionWarnTip": "Xposed Min API version cannot be higher than 93",
            "entryClassNameRuleTip": "Entry Class name can only be letters and numbers and underscore, and cannot start with a number",
            "moduleScopeRuleTip": "Please add apps in module scope",
            "findDependContentFail": "Failed to get content of {%1} dependencies",
            "waitingForBuildingTip": "Preparing to build and create project",
            "fileAlreadyExistsTip": "Directory path already exists, please select again.",
            "unpackingTemplateTip": "Unpacking project template: {%1} of {%2}",
            "packagingAndBuildingTip": "Packaging and building project: {%1} of {%2}",
            "buildDependProblemTip": "The dependent files required by the project are missing or damaged. Please check whether the installation files are complete.",
            "buildingFailureTip": "An error occurred during project creation, please check whether the project template file dependencies are complete or the path is correct.",
            "readOnlyFileSystemTip": "Read-Only File System, please changed the file path and retry.",
            "operationCancelledTip": "Operation cancelled",
            "buildComplete": "Build Complete",
            "openProject": "Open Project",
            "notice": "Notice",
            "pleaseWait": "Please Wait",
            "ok": "OK",
            "cancel": "Cancel",
            "close": "Close",
            "done": "Done",
            "later": "Later",
            "notConfigure": "Not configured",
            "notConfigureDefYes": "Not configured (Default Yes/Enabled)",
            "yesOfConfigure": "Yes/Enabled",
            "noOfConfigure": "No/Disabled",
            "version": "Version",
            "somethingWentWrongTip": "Something went wrong",
            "areYouSureRestoreChangeTip": "Are you sure you want to reset all current configs?",
            "areYouSureClearAllTemplateTip": "Are you sure you want to clear all config template?",
            "doYouWantLoadConfigTemplateTip": "Do you want to load \"{%1}\"? The current config will be overwritten by the template.",
            "ruleCheckFailTip": "Rules retrieval failed, please try again.",
            "networkErrorTip": "A network error occurred, please try again.",
            "aboutTip": "Helps you quickly create an Xposed project template using YukiHookAPI.",
            "noticeTip": "Project templates created with this tool are only available for the latest version of Android Studio and IntelliJ IDEA integrated development tools.",
            "mustRestartTakeEffectTip": "You must restart the application for this change to take effect, and restarting will lose any operations currently in progress."
        },
        "zh-CN": {
            "language": "语言",
            "followSystem": "跟随系统",
            "appName": "YukiHookAPI 构建工具",
            "windowTitle": "创建新的 Xposed 模块项目",
            "nothing": "无",
            "about": "关于",
            "openSource": "开源相关",
            "checkUpdate": "检查更新",
            "checkUpdateTip": "正在检查更新...",
            "checkUpdateFailTip": "检查更新失败",
            "newVersionFound": "发现新版本",
            "upToDateTip": "当前已是最新版本",
            "updateLogs": "更新日志",
            "updateNow": "立即更新",
            "file": "文件",
            "help": "帮助",
            "projectAddress": "项目地址",
            "helpDocumentation": "帮助文档",
            "quit": "退出",
            "project": "项目",
            "runBuild": "开始创建",
            "configTemplate": "配置模板",
            "savedTemplate": "已保存的模板",
            "newTemplate": "新建模板",
            "newTemplateByCurrentConfig": "使用当前配置新建模板",
            "enterTemplateNameTip": "请输入模板名称",
            "clearAllTemplate": "清空全部模板",
            "configTemplateSaved": "已保存 \"{%1}\" 配置模板",
            "configTemplateLoaded": "已加载 \"{%1}\" 配置模板",
            "configTemplateCleared": "已清空全部配置模板",
            "resetCurrentConfig": "重置当前配置",
            "selectProjectPath": "请选择要创建项目的位置",
            "selectProjectPathTip": "项目将会在你选择的目录内创建，格式为：选择的目录/项目名称",
            "selectThisDirectory": "选择此目录",
            "buildCompleteTip": "已为你完成项目的创建和打包，以下是生成清单。",
            "buildPathNoticeTip": "项目已创建到如下路径，请客官查收并安心食用！",
            "basicConfig": "基本配置",
            "yukiHookApiConfig": "YukiHookAPI 配置",
            "projectName": "项目名称",
            "projectNameTip": "项目名称 (请使用英文名称)",
            "modulePackageName": "模块包名",
            "moduleName": "模块名称",
            "moduleDescription": "模块描述",
            "uiComponents": "UI 组件",
            "gradlePaper": "Gradle 构建器",
            "agpVersion": "Android Gradle Plugin 版本",
            "kotlinVersion": "Kotlin 版本",
            "yukiHookApiVersion": "YukiHookAPI 版本",
            "createDefaultActivity": "创建默认 Activity (包含激活状态)",
            "createBlankActivity": "创建空白 Activity",
            "withoutUiComponents": "不需要 UI 组件",
            "appMinApiVersion": "应用最低 API 版本",
            "appTargetApiVersion": "应用目标 API 版本",
            "xposedMinApiVersion": "Xposed 最低 API 版本",
            "targetXposedPlatform": "目标 Xposed 平台",
            "universal": "通用",
            "nativeXposed": "原生 Xposed",
            "declarationNewXSharePrefs": "声明 New XShare Prefs (Xposed 最低 API ≥ 93 无需声明)",
            "moduleScope": "模块作用域",
            "addApps": "添加应用",
            "entryClassName": "入口类名 (不填使用默认值生成)",
            "addResourcesHookSupport": "添加 Resources Hook 支持",
            "debugTagName": "Debug TAG 名称 (不填默认为 YukiHookAPI)",
            "enableDebugMode": "启用 Debug 模式",
            "enablePrintLogcat": "启用调试日志输出功能",
            "enableYukiHookModulePrefsCache": "启用 YukiHookModulePrefs 键值缓存功能",
            "enableModuleResourcesCache": "启用模块 Resources 缓存功能",
            "enableModuleStatus": "启用模块激活状态监听功能",
            "enableYukiHookDataChannel": "启用 YukiHookDataChannel 功能",
            "enableMemberCache": "启用已查询的反射类、方法、变量缓存功能",
            "selectScopeAppsOrEnterOnceTip": "请从下面的列表中选择你需要添加到作用域中的应用",
            "customize": "自定义",
            "systemFramework": "系统框架",
            "systemUi": "系统界面 (系统 UI)",
            "enterAppNameTip": "请输入应用包名",
            "autoSearchingDependsTip": "正在自动搜索可用的项目依赖",
            "configProjectDepends": "配置项目依赖",
            "oldDependsWarnTip": "建议始终保持依赖为最新版本，较旧版本可能无法继续使用。",
            "enterPkgNameOrSelectFromListTip": "请输入要添加的应用包名或从下拉列表选择",
            "invalidEnterPkgNameTip": "要添加的应用包名无效",
            "existEnterPkgNameTip": "要添加的应用包名已存在",
            "areYouSureRemoveItemTip": "你确定要移除 \"{%1}\" 吗？",
            "taskIsRunningTip": "当前有任务正在进行，请等待其完成",
            "enterProjectNameTip": "请输入项目名称",
            "projectNameRuleTip": "项目名称只能是字母和数字以及下划线，且不能以数字开头",
            "enterModulePackageNameTip": "请输入模块包名",
            "invalidModulePackageNameTip": "模块包名无效",
            "enterModuleAppNameTip": "请输入模块名称",
            "enterModuleDescriptionTip": "请输入模块描述",
            "enterAppMinApiVersionTip": "请输入应用最低 API 版本",
            "lsposedSupportMinAppApiWarnTip": "LSPosed 支持的模块应用最低 API 版本不能低于 27 (Android 8.1)",
            "tooLowAppMinApiVersionWarnTip": "应用最低 API 版本不能低于 21 (Android 5.1)",
            "tooHighAppMinApiVersionWarnTip": "应用最低 API 版本过高",
            "enterAppTargetApiVersionTip": "请输入应用目标 API 版本",
            "tooLowAppTargetApiVersionWarnTip": "应用目标 API 版本不能低于应用最低 API 版本",
            "maybeInvalidAppTargetApiVersionTip": "应用目标 API 版本可能无效",
            "enterXposedMinApiVersionTip": "请输入 Xposed 最低 API 版本",
            "tooLowXposedMinApiVersionWarnTip": "Xposed 最低 API 版本不能低于 82",
            "tooHighXposedMinApiVersionWarnTip": "Xposed 最低 API 版本不能高于 93",
            "entryClassNameRuleTip": "入口类名只能是字母和数字以及下划线，且不能以数字开头",
            "moduleScopeRuleTip": "请添加模块作用域中的应用",
            "findDependContentFail": "获取 {%1} 依赖内容失败",
            "waitingForBuildingTip": "正在准备生成并创建项目",
            "fileAlreadyExistsTip": "目录路径已存在，请重新选择。",
            "unpackingTemplateTip": "正在解压缩项目模板：第 {%1} 个，共 {%2} 个",
            "packagingAndBuildingTip": "正在打包并生成项目：第 {%1} 步，共 {%2} 步",
            "buildDependProblemTip": "项目所需依赖文件已丢失或已被损坏，请检查安装文件是否完整且可用。",
            "buildingFailureTip": "创建项目过程发生错误，请检查项目模板文件依赖是否完整或路径是否正确。",
            "readOnlyFileSystemTip": "目标目录不可写，请更换目录并重新开始。",
            "operationCancelledTip": "已取消操作",
            "buildComplete": "创建成功",
            "openProject": "打开项目",
            "notice": "提示",
            "pleaseWait": "请稍后",
            "ok": "确定",
            "cancel": "取消",
            "close": "关闭",
            "done": "完成",
            "later": "稍后",
            "notConfigure": "未配置",
            "notConfigureDefYes": "未配置 (默认 是/Yes)",
            "yesOfConfigure": "是/Yes",
            "noOfConfigure": "否/No",
            "version": "版本",
            "somethingWentWrongTip": "发生了一点问题",
            "areYouSureRestoreChangeTip": "还原当前所做的全部更改吗？",
            "areYouSureClearAllTemplateTip": "清空全部已保存的配置模板吗？",
            "doYouWantLoadConfigTemplateTip": "要加载 \"{%1}\" 吗？当前配置会被模板覆盖。",
            "ruleCheckFailTip": "规则检索失败，请再试一次。",
            "networkErrorTip": "网络发生错误，请再试一次。",
            "aboutTip": "帮助你快速创建一个使用 YukiHookAPI 打造的 Xposed 项目模板。",
            "noticeTip": "使用本工具创建的项目模板仅适用于 Android Studio 以及 IntelliJ IDEA 集成化开发工具的最新版本。",
            "mustRestartTakeEffectTip": "你必须要重启应用程序才能使这项更改生效，重启会丢失当前正在进行的操作。"
        },
        "ja": {
            "language": "言語",
            "followSystem": "システムに従って",
            "appName": "YukiHookAPI 作成ツール",
            "windowTitle": "新しいXposedモジュールプロジェクトを作成する",
            "nothing": "ない",
            "about": "について",
            "openSource": "オープンソース関連",
            "checkUpdate": "アップデートを探す",
            "checkUpdateTip": "アップデートを探しています...",
            "checkUpdateFailTip": "アップデートを探すは失敗した",
            "newVersionFound": "新しいバージョンが見た",
            "upToDateTip": "アプリケーションは最新です",
            "updateLogs": "変更ログ",
            "updateNow": "すぐにアップデート",
            "file": "フェルオ",
            "help": "ヘルプ",
            "projectAddress": "プロジェクトアドレス",
            "helpDocumentation": "ヘルプドキュメント",
            "quit": "終了する",
            "project": "プロジェクト",
            "runBuild": "作成をスタートする",
            "configTemplate": "構成テンプレート",
            "savedTemplate": "保存されたテンプレート",
            "newTemplate": "テンプレートを追加",
            "newTemplateByCurrentConfig": "現在の構成で新しいテンプレートを追加",
            "enterTemplateNameTip": "テンプレート名を入力してください",
            "clearAllTemplate": "すべてのテンプレートをクリア",
            "configTemplateSaved": "「{%1}」構成テンプレートが保存されました",
            "configTemplateLoaded": "「{%1}」構成テンプレートがロードされました",
            "configTemplateCleared": "すべての構成テンプレートがクリアされました",
            "resetCurrentConfig": "現在の構成をリセット",
            "selectProjectPath": "プロジェクトを作成する場所を選択してください",
            "selectProjectPathTip": "プロジェクトは、選択したディレクトリに次の形式で作成されます：選択したディレクトリ/プロジェクト名",
            "selectThisDirectory": "このディレクトリを選択",
            "buildCompleteTip": "プロジェクトが作成され、パッケージ化されました。ビルドチェックリストは次のとおりです。",
            "buildPathNoticeTip": "プロジェクトは以下のパスで作成されていますので、安心してチェックしてご利用ください！",
            "basicConfig": "基本構成",
            "yukiHookApiConfig": "YukiHookAPI 構成",
            "projectName": "プロジェクト名",
            "projectNameTip": "プロジェクト名 (英語名を使用してください)",
            "modulePackageName": "モジュールパッケージ名",
            "moduleName": "モジュール名",
            "moduleDescription": "モジュールの説明",
            "uiComponents": "UI コンポーネント",
            "gradlePaper": "グラドルペーパー",
            "agpVersion": "Android Gradle プラグインバージョン",
            "kotlinVersion": "Kotlin バージョン",
            "yukiHookApiVersion": "YukiHookAPI バージョン",
            "createDefaultActivity": "デフォルトのActivityを作成（アクティブ状態）",
            "createBlankActivity": "空白のActivityを作成",
            "withoutUiComponents": "UIコンポーネントは必要ありません",
            "appMinApiVersion": "最小APIバージョンを適用",
            "appTargetApiVersion": "アプリターゲットAPIバージョン",
            "xposedMinApiVersion": "Xposedの最小APIバージョン",
            "targetXposedPlatform": "ターゲットXposedプラットフォーム",
            "universal": "ユニバーサル",
            "nativeXposed": "ネイティブXposed",
            "declarationNewXSharePrefs": "宣言新しいXShare設定（Xposed最小API≥93宣言は不要）",
            "moduleScope": "モジュールスコープ",
            "addApps": "アプリを追加",
            "entryClassName": "エントリクラス名（デフォルトを使用するには空）",
            "addResourcesHookSupport": "リソースフックのサポートを追加",
            "debugTagName": "デバッグタグ名（デフォルトはYukiHookAPI）",
            "enableDebugMode": "デバッグモードを有効にする",
            "enablePrintLogcat": "デバッグログ出力を有効にする",
            "enableYukiHookModulePrefsCache": "YukiHookModulePrefsのKey-Valueキャッシングを有効にする",
            "enableModuleResourcesCache": "モジュールリソースのキャッシュを有効にする",
            "enableModuleStatus": "モジュールのアクティブ化ステータスの監視を有効にする",
            "enableYukiHookDataChannel": "YukiHookDataChannel機能を有効にする",
            "enableMemberCache": "クエリされたリフレクションクラス、メソッド、変数キャッシングを有効にする",
            "selectScopeAppsOrEnterOnceTip": "以下のリストからスコープに追加するアプリを選択してください",
            "customize": "カスタマイズ",
            "systemFramework": "システムフレームワーク",
            "systemUi": "システムインターフェース",
            "enterAppNameTip": "アプリケーションパッケージ名を入力してください",
            "autoSearchingDependsTip": "利用可能なプロジェクトの依存関係を自動的に検索しています",
            "configProjectDepends": "プロジェクトの依存関係を構成",
            "oldDependsWarnTip": "常に最新バージョンへの依存関係を維持することをお勧めします。古いバージョンは引き続き機能しない可能性があります。",
            "enterPkgNameOrSelectFromListTip": "追加するパッケージ名を入力するか、ドロップダウンリストから選択してください",
            "invalidEnterPkgNameTip": "追加するパッケージ名が無効です",
            "existEnterPkgNameTip": "追加するパッケージ名は既に存在します",
            "areYouSureRemoveItemTip": "「{%1}」を削除してもよろしいですか",
            "taskIsRunningTip": "現在進行中のタスクがあります。完了するまでお待ちください",
            "enterProjectNameTip": "プロジェクト名を入力してください",
            "projectNameRuleTip": "アイテム名は文字と数字とアンダースコアのみで、数字で始めることはできません",
            "enterModulePackageNameTip": "モジュールパッケージ名を入力してください",
            "invalidModulePackageNameTip": "モジュールパッケージ名が無効です",
            "enterModuleAppNameTip": "モジュール名を入力してください",
            "enterModuleDescriptionTip": "モジュールの説明を入力してください",
            "enterAppMinApiVersionTip": "アプリの最小APIバージョンを入力してください",
            "lsposedSupportMinAppApiWarnTip": "LSPosedでサポートされているモジュールアプリケーションの最小APIバージョンは27より低くすることはできません（Android 8.1）",
            "tooLowAppMinApiVersionWarnTip": "アプリの最小APIバージョンは21以上である必要があります（Android 5.1）",
            "tooHighAppMinApiVersionWarnTip": "アプリの最小APIバージョンが高すぎます",
            "enterAppTargetApiVersionTip": "アプリケーションターゲットAPIバージョンを入力してください",
            "tooLowAppTargetApiVersionWarnTip": "アプリのターゲットAPIバージョンは、アプリの最小APIバージョンより低くすることはできません",
            "maybeInvalidAppTargetApiVersionTip": "アプリのターゲットAPIバージョンが無効である可能性があります",
            "enterXposedMinApiVersionTip": "Xposedの最小APIバージョンを入力してください",
            "tooLowXposedMinApiVersionWarnTip": "Xposedの最小APIバージョンは82より低くすることはできません",
            "tooHighXposedMinApiVersionWarnTip": "Xposedの最小APIバージョンは93を超えることはできません",
            "entryClassNameRuleTip": "エントリクラス名は、文字と数字、およびアンダースコアのみにすることができ、数字で始めることはできません",
            "moduleScopeRuleTip": "モジュールスコープにアプリを追加してください",
            "findDependContentFail": "{%1} 依存関係のコンテンツを取得できませんでした",
            "waitingForBuildingTip": "プロジェクトの構築と作成の準備",
            "fileAlreadyExistsTip": "ディレクトリパスはすでに存在します。もう一度選択してください。",
            "unpackingTemplateTip": "プロジェクトテンプレートの解凍：{%2} の {%1}",
            "packagingAndBuildingTip": "パッケージングおよび構築プロジェクト：{%2} の {%1}",
            "buildDependProblemTip": "プロジェクトに必要な依存ファイルが欠落しているか破損しています。インストールファイルが完全かどうかを確認してください。",
            "buildingFailureTip": "プロジェクトの作成中にエラーが発生しました。プロジェクトテンプレートファイルの依存関係が完全であるか、パスが正しいかどうかを確認してください。",
            "readOnlyFileSystemTip": "宛先ディレクトリは書き込み可能ではありません。ディレクトリを変更して最初からやり直してください。",
            "operationCancelledTip": "操作がキャンセルされました",
            "buildComplete": "作成完了",
            "openProject": "プロジェクトを開く",
            "notice": "ヒント",
            "pleaseWait": "お待ちください",
            "ok": "確認",
            "cancel": "キャンセル",
            "close": "消す",
            "done": "完了",
            "later": "後で",
            "notConfigure": "構成されていません",
            "notConfigureDefYes": "構成されていません (デフォルトは はい/Yes)",
            "yesOfConfigure": "はい/Yes",
            "noOfConfigure": "いいえ/No",
            "version": "バージョン",
            "somethingWentWrongTip": "何かがうまくいかなかった",
            "areYouSureRestoreChangeTip": "現在のすべての変更を元に戻しますか",
            "areYouSureClearAllTemplateTip": "保存されているすべての構成テンプレートをクリアしますか",
            "doYouWantLoadConfigTemplateTip": "「{%1}」をロードしますか？現在の構成はテンプレートによって上書きされます。",
            "ruleCheckFailTip": "ルールの取得に失敗しました。もう一度やり直してください。",
            "networkErrorTip": "ネットワークエラーが発生しました。もう一度やり直してください。",
            "aboutTip": "YukiHookAPIを使用してXposedプロジェクトテンプレートをすばやく作成するのに役立ちます。",
            "noticeTip": "このツールで作成されたプロジェクトテンプレートは、Android Studio および最新バージョンの IntelliJ IDEA 統合開発ツールでのみ使用できます。",
            "mustRestartTakeEffectTip": "この変更を有効にするには、アプリケーションをリスタートする必要があります。リスタートすると、現在進行中の操作がすべて失われます。"
        }
    }
};

module.exports = {locale};