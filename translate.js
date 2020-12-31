const months = [
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
translate_texts = {
    "a.js-selected-navigation-item:nth-child(2)": "プル・リクエスト",
    "a.js-selected-navigation-item:nth-child(3)": "Issue",
    "a.js-selected-navigation-item:nth-child(1)": "マーケット",
    "a.js-selected-navigation-item:nth-child(5)": "探索",
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
    ".avatar-upload-container > p:nth-child(2)": '画像は640×320px以上である必要があります（1280×640pxが最適です）。<br><a href="./settings/og-template" class="text-bold">テンプレートをダウンロード</a>',
    ".color-bg-primary": '<svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg> 編集',
    "label.dropdown-item": '画像をアップロード…',
    "#features": '機能',
    "form.js-repo-features-form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > label:nth-child(3)": 'Wiki',
    "div.Box-row:nth-child(4) > div:nth-child(1) > label:nth-child(3)": '編集をコラボレーターのみに制限する',
    "div.Box-row:nth-child(4) > div:nth-child(1) > p:nth-child(5)": 'パブリックリポジトリのWikiは全員が閲覧できます。',
    "div.Box-row:nth-child(5) > div:nth-child(1) > label:nth-child(3)": 'Issue',
    "div.Box-row:nth-child(5) > div:nth-child(1) > p:nth-child(5)": 'Issueで軽いタスクトラッキングをリポジトリに追加できます。ラベル、マイルストーンで追跡できたり、コミットメッセージで参照できたりします。',
    "div.Box-row:nth-child(5) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > strong:nth-child(1)": '独自のテンプレートを作成',
    "div.Box-row:nth-child(5) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)": 'テンプレートを作成することで、ノイズをカットし、プロジェクトを前進させるのに役立ちます。',
    "div.Box-row:nth-child(5) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)": 'テンプレートを作成',
    'span[data-content="Code"]': 'コード',
    'span[data-content="Issues"]': 'Issue',
    'span[data-content="Pull requests"]': 'プル・リクエスト',
    'span[data-content="Actions"]': 'GitHub Actions',
    'span[data-content="Security"]': 'セキリュティ',
    'span[data-content="Insights"]': '分析',
    'span[data-content="Projects"]': 'プロジェクト',
    'span[data-content="Wiki"]': 'Wiki',
    'span[data-content="Settings"]': '設定',
    '.BorderGrid-cell:nth-child(1) h2.mb-3.h4:nth-child(2)': '概要',
    '': '',
    '': '',
    '': '',
    '': '',
}
console.log("GitHub translater has loaded.")
console.log("-----------------------------")
console.log("Thank you for using this addon.")
for (let [key, value] of Object.entries(translate_texts)) {
    try {
        document.querySelectorAll(key)[0].innerHTML = value
    } catch { }
}
input_translate_texts = {
    "input.input-sm": "検索、またはジャンプ...",
    "#dashboard-repos-filter-left": "リポジトリを探す…",
    "#your-teams-filter-left": "チームを探す…"
}
for (let [key, value] of Object.entries(input_translate_texts)) {
    e = document.querySelectorAll(key)[0]
    e.setAttribute("placeholder", value)
    e.setAttribute("area-label", value)
}
pt=document.querySelector(".octicon-light-bulb")
if(pt){
    pt.parentElement.childNodes[3].data="  "
    pt.parentElement.childNodes[4].data="フィードはあなたが"
    pt.parentElement.childNodes[5].innerHTML="フォロー"
    pt.parentElement.childNodes[6].data="している人、あなたが"
    pt.parentElement.childNodes[7].innerHTML="ウォッチ"
    pt.parentElement.childNodes[8].data="しているリポジトリを表示します。"
    pt.parentElement.childNodes[11].childNodes[1].data="フィードを登録"
}
e = document.querySelector("#dashboard-repos-container > div:nth-child(1) > h2:nth-child(1)")
e.childNodes[0].data = "リポジトリ"
e.childNodes[1].innerHTML = "新規"
var temp_off = false
var count = 0
function translate_dashboard() {
    console.log("translating...")
    //.repo div.body div.d-flex.flex-items-baseline.border-bottom.color-border-secondary.py-3 div.d-flex.flex-column.width-full div.Box.p-3.mt-2 div p.f6.text-gray.mt-2.mb-0 span

    Array.from(document.getElementsByClassName("watch_started")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[2].data = "が"
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[4].data = "をスターしました。"
        } catch { }
    })
    Array.from(document.getElementsByClassName("push")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[2].data = "が"
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[4].data = "にプッシュしました。"
        } catch {
            try {
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[0].data = "が"
                e.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[2].data = "にプッシュしました。"
            } catch { }
        }
    })
    Array.from(document.getElementsByClassName("follow")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data = "があなたをフォローしました。"


        } catch { }

    })
    Array.from(document.getElementsByClassName("gollum")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[2].data = "が"
            e.childNodes[0].childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[4].data = "のWikiを作成しました。"
        } catch { }

    })
    Array.from(document.getElementsByClassName("repo")).forEach((e) => {
        try {
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[2].data = "がリポジトリ"
            e.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[4].data = "を作成しました。"
        } catch { }
    })
    Array.from(document.querySelectorAll(".Box.p-3.mt-2")).forEach(e => {
        try {
            
            de = Array.from(e.querySelectorAll("div p span")).slice(-1)[0]
            if(de.innerHTML.includes("<a")){
                return
            }
            ary = de.innerHTML.match(/Updated (.*) (\d*)/)
            de.innerHTML = months.indexOf(ary[1]) + "月" + ary[2] + "日に更新"
        } catch {
            try{
				sp=e.querySelector("span")
              	c=sp.innerHTML.match(/(\d+) commits? to/)
              	if(c){
                  	sp.innerHTML=""
                  	branch_after = document.createElement("span")
                    branch_after.appendChild(document.createTextNode(" への"+c[1]+"つのコミット"))
                                        e.insertBefore(branch_after, e.childNodes[3].nextSibling);
                    mc = e.querySelector("div li.f6.mt-2 a")
                    if(mc){
                        mc.innerHTML = "+" + mc.innerHTML.match(/(\d+) more commits? »/)[1] + "つのコミット »"
                    }


                }
            }catch{}
        }
    });

    Array.from(document.getElementsByTagName("relative-time")).forEach((e) => {

        try {
            e.innerHTML = e.innerHTML.replace(" hours ago", "時間前").replace(" days ago", "日前").replace("yesterday", "昨日")
            if (~e.innerHTML.includes('on ')) {
                ary = e.innerHTML.match(/on (\d*) (.*)/)
                e.innerHTML = months.indexOf(ary[2]) + "月" + ary[1] + "日"
            }
        } catch { }
        try {
            e.innerHTML = e.innerHTML.replace("-", "")
            if (e.parentElement.childNodes[0].data.includes("Updated")) {
                e.parentElement.childNodes[0].data = ""
                e.parentElement.childNodes[2].data = "に更新"
            }
        }
        catch { }

    })
    Array.from(document.querySelectorAll('[value="Star"]')).forEach((e) => { e.childNodes[2].textContent = "スター"; e.title = e.title.split(" ", 2)[1] + "をスター" })
    Array.from(document.querySelectorAll('[value="Unstar"]')).forEach((e) => { e.childNodes[2].textContent = "スター解除"; e.title = e.title.split(" ", 2)[1] + "のスターを解除" })
    // Array.from(document.querySelectorAll(".Box.p-3.mt-2")).forEach((e) => {
    //     try {
    //         e.innerHTML = e.innerHTML.replace(" hours ago", "時間前").replace(" days ago", "日前").replace("yesterday", "昨日")
    //         if (~e.innerHTML.indexOf('on ')) {
    //             ary = e.innerHTML.match(/on (\d*) (.*)/)
    //             e.innerHTML = months.indexOf(ary[2]) + "月" + ary[1] + "日"
    //         }
    //     } catch { }

    // })
    //
    temp_off = false


}


observer = new MutationObserver((obs) => {
    observer.disconnect()
    translate_dashboard()
    observer.observe(document, { childList: true, subtree: true })


});
translate_dashboard()
//relative-time
// console.log(document.querySelectorAll("div.col-12")[0].childNodes)
observer.observe(document, { childList: true, subtree: true })
