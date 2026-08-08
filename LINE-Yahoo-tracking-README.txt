感動さかき｜LINEヤフー広告 購入計測 設置手順
================================================

今回用意したファイル
--------------------
1. script.js
   既存の感動さかきLPで使っている script.js の差し替え版です。
   既存機能を残したまま、LINEヤフー広告の計測タグを追加しています。

2. thanks.html
   Stripe決済完了後に表示する購入完了ページです。
   LINEヤフー広告の「商品購入（purchase）」イベントを送信します。

設置方法
--------
【1】
Xserver上の感動さかきLPフォルダ
  /sakaki/
にある既存の script.js を、今回の script.js に差し替えてください。
念のため、既存script.jsはPCにバックアップしてください。

【2】
同じ /sakaki/ フォルダへ thanks.html をアップロードしてください。

公開後のURL：
https://hitisou-yuen.com/sakaki/thanks.html

【3】
Stripeの「感動さかき」決済リンクで、
決済完了後の動作を「リダイレクト」に変更し、
次のURLを設定してください。

https://hitisou-yuen.com/sakaki/thanks.html

【4】
LINEヤフー広告の管理画面で
「ツール → 計測タグ → イベント受信履歴」
を確認してください。

LPを一度開く：
page_view が受信されればグローバル計測は動作しています。

テスト購入後に thanks.html が表示される：
purchase が受信されれば購入計測も動作しています。

重要
----
・thanks.html は検索結果に出ないよう noindex,nofollow を設定済みです。
・購入完了ページのURLを通常のページやSNSからリンクしないでください。
・LINEヤフー広告のタグID：
  d61a92ed-025a-44c5-b0a2-9af25277044d
