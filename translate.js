console.debug("Defining consts...")
var months = [
    undefined,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"

]
var translate_texts = {
    'header.Header div:nth-child(3) nav a[href="/pulls"]': "プル・リクエスト",
    'header.Header div:nth-child(3) nav a[href="/issues"]': "Issue",
    'header.Header div:nth-child(3) nav div a[href="/marketplace"]': "マーケット",
    'header.Header div:nth-child(3) nav a[href="/explore"]': "探す",
    "#dashboard-user-teams > div:nth-child(1) > h2:nth-child(1)": "チーム",
    "#dashboard-repos-container > div:nth-child(1) > form:nth-child(4) > button:nth-child(2)": "さらに表示",
    'aside[aria-label="Explore"] h2.f5:nth-child(2)': "リポジトリを見つける",
    'aside[aria-label="Explore"] a.no-underline:nth-child(6)': "もっと見つける →",
    "div.Subhead:nth-child(1) > h2:nth-child(1)": "設定",
    "dl.form-group:nth-child(1) > dt:nth-child(1) > label:nth-child(1)": "リポジトリ名",
    "form.js-repo-features-form:nth-child(3) > div:nth-child(3) > label:nth-child(3)": "テンプレートリポジトリ",
    "form.js-repo-features-form:nth-child(3) > div:nth-child(3) > p:nth-child(5)": 'ユーザーはテンプレートリポジトリと同じ構造でリポジトリを作成できます。<a href="https://docs.github.com/articles/creating-a-repository-from-a-template/">もっと詳しく</a>',
    "dl.form-group:nth-child(3) > dt:nth-child(1) > label:nth-child(1)": "プレビュー画像",
    ".avatar-upload-container > p:nth-child(1)": "リポジトリのプレビュー画像をカスタマイズします。",
    // ".avatar-upload-container > p:nth-child(2)": '画像は640×320px以上である必要があります（1280×640pxが最適です）。<br><a href="./settings/og-template" class="text-bold">テンプレートをダウンロード</a>',
    // ".color-bg-primary": '<svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg> 編集',
    "label.dropdown-item": '画像をアップロード…',
    "#features": '機能',
    "form.js-repo-features-form div.Box-row:nth-child(3) label": 'Wiki',
    "form.js-repo-features-form div.Box-row:nth-child(4) label": 'Wikiの編集をコラボレーターのみに制限する',
    "form.js-repo-features-form div.Box-row:nth-child(4) p.note": 'パブリックリポジトリのWikiは全員が閲覧できます。',
    "form.js-repo-features-form div.Box-row:nth-child(5) label": 'Issue',
    "form.js-repo-features-form div.Box-row:nth-child(5) p.note": 'Issueで軽いタスクトラッキングをリポジトリに追加できます。ラベル、マイルストーンで追跡できたり、コミットメッセージで参照できたりします。',
    "form.js-repo-features-form div.Box-row:nth-child(5) .flash > div > div:nth-child(1) strong": '独自のテンプレートを作成',
    "form.js-repo-features-form div.Box-row:nth-child(5) .flash > div > div:nth-child(1) p": 'テンプレートを作成することで、ノイズをカットし、プロジェクトを前進させるのに役立ちます。',
    "form.js-repo-features-form div.Box-row:nth-child(5) .flash > div > div:nth-child(2) a": 'テンプレートを作成',
    "form.js-repo-features-form div.Box-row:nth-child(6) label": 'スポンサー',
    "form.js-repo-features-form div.Box-row:nth-child(6) p.note": 'スポンサーはコミュニティにどうやって支援をするかを教えることが出来ます。',
    "form.js-repo-features-form div.Box-row:nth-child(6) .flash > div > div:nth-child(1) strong": 'スポンサーボタン',
    "form.js-repo-features-form div.Box-row:nth-child(6) .flash > div > div:nth-child(1) p": 'GitHub、またはその他の支援できるものをリポジトリに表示します。',
    "form.js-repo-features-form div.Box-row:nth-child(6) .flash > div > div:nth-child(2) a": 'スポンサーボタンをセットアップ',
    'span[data-content="Code"]': 'コード',
    'span[data-content="Issues"]': 'Issue',
    'span[data-content="Pull requests"]': 'プル・リクエスト',
    'span[data-content="Actions"]': 'GitHub Actions',
    'span[data-content="Security"]': 'セキリュティ',
    'span[data-content="Insights"]': '分析',
    'span[data-content="Projects"]': 'プロジェクト',
    'span[data-content="Wiki"]': 'Wiki',
    'span[data-content="Settings"]': '設定',
    '.repository-content .gutter-condensed .flex-self-center a:nth-child(1) .text-gray-light': 'つのブランチ',
    '.repository-content .gutter-condensed .flex-self-center a:nth-child(2) .text-gray-light': 'つのタグ',
    '.repository-content .gutter-condensed .Box.mb-3 .Box-header .js-details-container div:nth-child(4) ul li a span span': 'つのコミット',
    'h2.f4:nth-child(4)': ["全てのアクティビティ", 'All activity'],
    '.mt-md-3': ["最近のアクティビティ", 'Recent activity'],
    'h2.h3-mktg': ["これらはあなたの興味をベースに表示されています...", "Here's what we found based on your interests..."],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(1) > div > h2': ["概要", 'About'],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(1) > div > .f4.mt-3.text-gray.text-italic': [
        "説明・ウェブサイト・トピックが提供されていません。",
        'No description, website, or topics provided.'
    ],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(2) > div > h2 > a': ["リリース", 'Releases'],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(2) > div > .text-small.color-text-secondary': ['リリースはありません。', "No releases published"],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(2) > div > .text-small > a': ['最初のリリースを作成', "Create a new release"],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(3) > div > h2 > a!0': ["パッケージ", 'Packages'],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(3) > div > .text-small.color-text-secondary!0': ['パッケージはありません。', "No packages published"],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(3) > div > .text-small > a': ['最初のパッケージを公開', "Publish your first package"],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(4) > div > h2 > a!0': ['コントリビューター', "Contributors"],
    '.BorderGrid.BorderGrid--spacious > div.BorderGrid-row:nth-child(5) > div > h2': ["言語", 'Languages'],
    '#js-issues-toolbar .table-list-filters div div .btn-link !2': ["$1 個のオープン", /(\d+) Open/],
    '#js-issues-toolbar .table-list-filters div div .btn-link!2': ["$1 個のクローズ", /(\d+) Closed/],
    '#filters-select-menu summary!0': ['フィルタ', "Filters"],
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-header h3": ['Issueをフィルタ', "Filter Issues"],
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-list a:nth-child(1)": "オープンのIssueとプル・リクエスト",
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-list a:nth-child(2)": "あなたのIssue",
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-list a:nth-child(3)": "あなたのプル・リクエスト",
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-list a:nth-child(4)": "あなたに任せられた全て",
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-list a:nth-child(5)": "あなたがメンションされた全て",
    "#filters-select-menu details-menu .SelectMenu-modal .SelectMenu-list a:nth-child(6) strong": "検索構文を見る",
    '.issues-reset-query!2': '現在のクエリ・フィルタ・ソートをクリア',
    '.subnav-links[aria-label="Issue"] a:nth-child(1)!2': [' ラベル ', "Labels"],
    '.subnav-links[aria-label="Issue"] a:nth-child(2)!2': [' マイルストーン ', "Milestones"],
    '[data-hotkey="c"] > span': ['新しいIssue', "New issue"],
    '.pagehead-actions > li:nth-child(1) details summary > span:nth-child(1) > span !2': [" ウォッチ", 'Watch'],
    '.pagehead-actions > li:nth-child(1) details summary > span:nth-child(1) > span!2': [" ウォッチ解除", 'Unwatch'],
    '.pagehead-actions > li:nth-child(1) details > details-menu > div > header > h3': '通知設定',
    '.pagehead-actions > li:nth-child(1) details > details-menu > div form > button:nth-child(3) > div > .f5': '参加中のものとメンションのみ',
    '.pagehead-actions > li:nth-child(1) details > details-menu > div form > button:nth-child(3) > div > .text-small': '参加しているもの（Issueなど）の通知と@メンションのみが通知されます。',
    '.pagehead-actions > li:nth-child(1) details > details-menu > div form > button:nth-child(4) > div > .f5': '全て',
    '.pagehead-actions > li:nth-child(1) details > details-menu > div form > button:nth-child(4) > div > .text-small': '全てのアクティビティが通知されます。',
    '.pagehead-actions > li:nth-child(1) details > details-menu > div form > button:nth-child(5) > div > .f5': 'なし',
    '.pagehead-actions > li:nth-child(1) details > details-menu > div form > button:nth-child(5) > div > .text-small': '通知されません。',
    '.pagehead-actions > li:nth-child(1) details-menu > div > div > button > div > div:nth-child(1) > .text-bold': 'カスタム',
    '.pagehead-actions > li:nth-child(1) details-menu > div > div > button > div > div:nth-child(2)': '参加中のものとメンションに加えて受け取りたい通知を選択します。',
    '.pagehead-actions > li:nth-child(1) details-dialog form > header:nth-child(4) h1': 'カスタム',
    '.pagehead-actions > li:nth-child(1) details-dialog form > fieldset > legend > div': '参加中のものとメンションに加えて受け取りたい通知を選択します。',
    '.pagehead-actions > li:nth-child(1) details-dialog form > fieldset > div:nth-child(2) > label!2': 'Issue',
    '.pagehead-actions > li:nth-child(1) details-dialog form > fieldset > div:nth-child(3) > label!2': 'プル・リクエスト',
    '.pagehead-actions > li:nth-child(1) details-dialog form > fieldset > div:nth-child(4) > label!2': 'リリース',
    '.pagehead-actions > li:nth-child(1) details-dialog form > fieldset > div:nth-child(5) > label!2': 'ディスカッション',
    '.pagehead-actions > li:nth-child(1) details-dialog form > fieldset > div:nth-child(5) > span@aria-label': 'このリポジトリではディスカッションが有効になっていません。',
    '.pagehead-actions > li:nth-child(1) details-dialog form > div > button:nth-child(1)': '変更',
    '.pagehead-actions > li:nth-child(1) details-dialog form > div > button:nth-child(2)': 'キャンセル',
    '.news > div.f6!4': ['このフィードは', 'The feed shows you events from people you'],
    '.news > div.f6 > a:nth-child(3)': ['フォロー', 'follow'],
    '.news > div.f6!6': ['中のユーザー、', 'and repositories you'],
    '.news > div.f6 > a:nth-child(4)': ['ウォッチ', 'watch'],
    '.news > div.f6!8': ['しているリポジトリのアクティビティを表示します。', '.'],
    '.news > div.f6 > a:nth-child(6)!1': ['ニュースフィードを購読', 'Subscribe to your news feed'],
    'aside #repos-container h2!0': 'リポジトリ',
    'aside #repos-container h2 a!2': ' 新規',
    '.Popover-message > div > div > span!0': ['', 'Forked from'],
    '.Popover-message > div > div > span!2': ['からのフォーク', ''],
    'form.unstarred button span': ['スター', "Star"],
    'form.unstarred button@title': ["$1 をスター", /Star (.+)/],
    'form.starred button span': ['スター解除', "Unstar"],
    'form.starred button@title': ["$1 をスター解除", /Unstar (.+)/],
    '.avatar-upload-container .flash!2': 'プレビュー画像をアップロードすることは出来ますが、',
    '.avatar-upload-container .flash!4': 'はプライベートのため表示されることはありません。',
    '.avatar-upload-container p:nth-child(2)': 'プレビュー画像をアップロードしてプレビューをカスタマイズしましょう。',
    '.avatar-upload-container p:nth-child(3)!0': '画像は640×320px以上である必要があります（1280×640pxが最適です）。',
    '.avatar-upload-container p:nth-child(3) > a': 'テンプレートをダウンロード',
    '.avatar-upload summary div:nth-child(2)!2': '編集',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


const input_translate_texts = {
    "input.input-sm": "検索、またはジャンプ...",
    "#dashboard-repos-filter-left": "リポジトリを探す…",
    "#your-teams-filter-left": "チームを探す…"
}
console.debug("Making functions...")

function translate_other() {
    for (let [key, value] of Object.entries(translate_texts)) {
        try {
            if (key.includes("@")) {
                olds = document.querySelectorAll(key.split("@")[0])
                attr = key.split("@")[1]
                olds.forEach((old) => {
                    try {
                        if (typeof(value) == "object") {
                            if (typeof(value[1]) == "object") {

                                cond = old.getAttribute(attr).match(value[1])
                            } else {
                                cond = old.getAttribute(attr) == value[1].trim()
                            }
                            if (cond) {
                                if (typeof(value[1]) == "object") {
                                    old.setAttribute(attr, old.getAttribute(attr).replace(value[1], value[0]))
                                } else {
                                    old.setAttribute(attr, value)
                                }
                                console.debug(`${old.getAttribute(attr)}(${key}) has translated to ${value[0]}`)
                            } else {
                                console.debug(`${old.getAttribute(attr)}(${key}) isn't ${value[1]}, skipped(It was going to translate to ${value[0]})`)
                            }
                        } else {
                            old.setAttribute(attr, value)
                            console.debug(`${old.getAttribute(attr)}(${key}) has translated to ${value}`)
                        }
                    } catch {}
                })
            } else if (key.includes("!")) {
                olds = document.querySelectorAll(key.split("!")[0])

                olds.forEach((told) => {
                    try {
                        old = told.childNodes[key.split("!")[1]]
                        if (old.nodeType != 3) {
                            console.debug(`${old.data.trim()}(${key}) isn't text node, skipped`)
                            return
                        }
                        if (typeof(value) == "object") {

                            if (typeof(value[1]) == "object") {
                                cond = old.data.trim().match(value[1])

                            } else {
                                cond = old.data.trim() == value[1].trim()
                            }
                            if (cond) {
                                if (typeof(value[1]) == "object") {
                                    old.data = old.data.replace(value[1], value[0])

                                } else {
                                    old.data = value[0]
                                }
                                console.debug(`${old.data.trim()}(${key}) has translated to ${value[0]}`)
                            } else {
                                console.debug(`${old.data.trim()}(${key}) isn't ${value[1]}, skipped(It was going to translate to ${value[0]})`)
                            }
                        } else {
                            old.data = value
                            console.debug(`${old.data.trim()}(${key}) has translated to ${value}`)
                        }
                    } catch {}
                })
            } else {
                olds = Array.from(document.querySelectorAll(key))

                olds.forEach((old) => {
                    try {
                        if (typeof(value) == "object") {
                            if (typeof(value[1]) == "object") {
                                cond = old.innerHTML.trim().match(value[1])
                            } else {
                                cond = old.innerHTML.trim() == value[1].trim()
                            }
                            if (cond) {
                                if (typeof(value[1]) == "object") {
                                    old.innerHTML = old.innerHTML.replace(value[1], value[0])
                                } else {
                                    old.innerHTML = value[0]
                                }
                                console.debug(`${old.innerHTML.trim()}(${key}) has translated to ${value[0]}`)
                            } else {
                                console.debug(`${old.innerHTML}(${key}) isn't ${value[1]}, skipped(It was going to translate to ${value[0]})`)
                            }
                        } else {
                            old.innerHTML = value
                            console.debug(`${old.innerHTML}(${key}) has translated to ${value}`)
                        }
                    } catch {}



                })
            }
        } catch {}
    }
}

function translate_placeholder() {
    for (let [key, value] of Object.entries(input_translate_texts)) {
        try {
            e = document.querySelector(key)
            e.setAttribute("placeholder", value)
            e.setAttribute("area-label", value)
        } catch {}
    }
}



var temp_off = false
var count = 0
console.debug("Making dashboard translation...")

function translate_dashboard() {
    console.debug("Translating dashboard...")
        //.repo div.body div.d-flex.flex-items-baseline.border-bottom.color-border-secondary.py-3 div.d-flex.flex-column.width-full div.Box.p-3.mt-2 div p.f6.text-gray.mt-2.mb-0 span

    Array.from(document.getElementsByClassName("watch_started")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[2].data = "が"
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[4].data = "をスターしました。"
        } catch {
            try {
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[0].data = "は "
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[0].data = e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[0].data.replace("repositories", "つのリポジトリをスターしました。")
            } catch {}
        }
    })
    Array.from(document.getElementsByClassName("push")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[2].data = "が"
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[4].data = "にプッシュしました。"
        } catch {
            try {
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[0].data = "が"
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[2].data = "にプッシュしました。"
            } catch {}
        }
    })
    Array.from(document.getElementsByClassName("follow")).forEach((e) => {
        try {
            // console.log(e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data.trim())
            if (e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data.trim() == "started following") {
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data = "が"
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[4].data = "をフォローしました。"
            } else if (e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data.trim().includes("you")) {
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data = "があなたをフォローしました。"
            }
        } catch {}

    })
    Array.from(document.getElementsByClassName("fork")).forEach((e) => {
        try {
            if (e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[2].data.includes("forked")) {
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[2].data = " は "
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[4].data = " を "
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[6].data = " へフォークしました。"
                tmp = e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].innerHTML
                tmp2 = e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[5].innerHTML
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].innerHTML = tmp2
                e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[5].innerHTML = tmp
            }
        } catch {}
    })
    Array.from(document.getElementsByClassName("gollum")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[2].data = "が"
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[4].data = "のWikiを作成しました。"
        } catch {}

    })
    Array.from(document.getElementsByClassName("repo")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data = "がリポジトリ"
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[4].data = "を作成しました。"
        } catch {
            try {
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[0].data = "が"
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[0].data =
                    e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[0].data.replace("repositories", "つのリポジトリを作成しました。")
            } catch {}
        }
    })
    Array.from(document.querySelectorAll(".Box.p-3.mt-2")).forEach(e => {
        try {

            de = Array.from(e.querySelectorAll("div p span")).slice(-1)[0]
            if (de.innerHTML.includes("<a")) {
                return
            }
            ary = de.innerHTML.match(/Updated (.*) (\d*)/)
            de.innerHTML = months.indexOf(ary[1]) + "月" + ary[2] + "日に更新"
        } catch {
            try {
                sp = e.querySelector("span")
                c = sp.innerHTML.match(/(\d+) commits? to/)
                if (c) {
                    sp.innerHTML = ""
                    branch_after = document.createElement("span")
                    branch_after.appendChild(document.createTextNode(" への" + c[1] + "つのコミット"))
                    e.insertBefore(branch_after, e.childNodes[3].nextSibling);
                    mc = e.querySelector("div li.f6.mt-2 a")
                    if (mc) {
                        mc.innerHTML = "+" + mc.innerHTML.match(/(\d+) more commits? »/)[1] + "つのコミット »"
                    }


                }
            } catch {}
        }
    });

    Array.from(document.getElementsByTagName("relative-time")).concat(Array.from(document.getElementsByTagName("time-ago"))).forEach((e) => {

        try {
            e.innerHTML = e.innerHTML.replace(/ minutes? ago/, " 分前").replace(/ hours? ago/, " 時間前").replace(/ days? ago/, " 日前").replace("yesterday", " 昨日").replace(/ months? ago/, " ヶ月前").replace(/ years? ago/, " 年前").replace("last month", "先月")
            if (~e.innerHTML.includes('on ')) {
                ary = e.innerHTML.match(/on (\d*) (.*)/)
                e.innerHTML = months.indexOf(ary[2]) + " 月 " + ary[1] + " 日"
            }
        } catch {}
        try {
            e.innerHTML = e.innerHTML.replace("-", "")
            if (e.parentElement.childNodes[0].data.includes("Updated")) {
                e.parentElement.childNodes[0].data = ""
                e.parentElement.childNodes[2].data = "に更新"
            }
        } catch {}

    })
    Array.from(document.querySelectorAll('[value="Star"]')).forEach((e) => {
        e.childNodes[2].textContent = "スター";
        e.title = e.title.split(" ", 2)[1] + "をスター"
    })
    Array.from(document.querySelectorAll('[value="Unstar"]')).forEach((e) => {
        e.childNodes[2].textContent = "スター解除";
        e.title = e.title.split(" ", 2)[1] + "のスターを解除"
    })
    Array.from(document.querySelectorAll('[value="Follow"]')).forEach((e) => {
        e.value = "フォロー";
        e.title = e.title.split(" ", 2)[1] + "をフォロー"
    })
    Array.from(document.querySelectorAll('[value="Unfollow"]')).forEach((e) => {
        e.value = "フォロー解除";
        e.title = e.title.split(" ", 2)[1] + "のフォローを解除"
    })
    temp_off = false


}


observer = new MutationObserver((obs) => {
    observer.disconnect()
    console.debug("Some change detected, translating...")
    try {
        translate_dashboard()
        translate_other()
    } catch {}
    observer.observe(document, { childList: true, subtree: true })


});
console.debug("Init: Translating dashboard...")
try {
    translate_dashboard()
} catch {}
console.debug("Init: Translating placeholders...")
try {
    translate_placeholder()
} catch {}
console.debug("Init: Translating others...")
try {
    translate_other()
} catch {}
console.debug("Starting observer...")

observer.observe(document, { childList: true, subtree: true })

console.info('%cThank you for using github-translator!', 'font-size:2rem;border-bottom: 1px solid black')
console.info("If you found a wrong translation, issue or PR here: https://github.com/sevenc-nanashi/github-translator")