import Image from "next/image";

import Game1 from "@/app/image/DogGame.png";
import game_dog1 from "@/app/image/dog01.png";
import game_dog2 from "@/app/image/dog02.png";
import game_dog3 from "@/app/image/dog03.png";
import game_dog4 from "@/app/image/dog04.png";
import game_dog5 from "@/app/image/dog05.png";

import Game2 from "@/app/image/3Dgame.png";
import game_3D1 from "@/app/image/3Dgame01.png";
import game_3D2 from "@/app/image/3Dgame02.png";
import game_3D3 from "@/app/image/3Dgame03.png";
import game_3D4 from "@/app/image/3Dgame04.png";

import Game3 from "@/app/image/game3.png";
import game_web1 from "@/app/image/game3_01.png";
import game_web2 from "@/app/image/game3_02.png";
import game_web3 from "@/app/image/game3_03.png";
import game_web4 from "@/app/image/game3_04.png";
import game_web5 from "@/app/image/game3_05.png";

export const projects = [
    {
      id: "dog-game",
      category: "game",
      name: "政大流浪狗躲避戰",
      cover: Game1,
  
      intro: `此遊戲是以「政大流浪狗問題」為發想，並融合其他政大生熟悉的要素，例如：山坡地的校園、時常被偷或遺忘的雨傘等，設計的動作類遊戲。
              遊戲玩法是控制政大生閃避迎面不斷襲來的流浪狗，直到平安抵達位於山上的宿舍。
              除了左右閃避外，亦可以撿拾路上隨機出現的雨傘作為抵禦道具，在開啟雨傘的時間內不會受到狗群的攻擊傷害。
              遊戲最後出現的事件「狗后召喚大量狗群」則是帶出政大流浪狗問題的根源「狗后」，由於這位校外人士疑似常常私自帶流浪狗進入政大校園餵養，導致學生遭咬傷事件頻傳，故加入這個遊戲階段作為最後關卡。`,
  
      type: "網頁跑酷類動作遊戲（p5.js 製作）",
  
      flow: [
        {
          img: game_dog1,
          text: "遊戲背景、目標與遊玩方式介紹",
        },
        {
          img: game_dog2,
          text: "遊戲開始，玩家有十點生命值。流浪狗不斷襲來，碰撞一次扣一點生命，玩家可左右閃避。",
        },
        {
          img: game_dog3,
          text: "路上出現雨傘道具可撿取，按空白鍵可啟動，提供 5 秒防護。",
        },
        {
          img: game_dog4,
          text: "秒數越少，狗越多。最後十秒進入「狗后召喚大量狗群」的高難度階段。",
        },
        {
          img: game_dog5,
          text: "90 秒結束時若生命值大於 0，玩家即成功抵達宿舍；反之則失敗。",
        },
      ],
  
      tech: [
        "碰撞偵測採縮小 Hitbox，以減少誤判，並依是否啟動雨傘改變 X 軸寬度（0.5 → 0.8）。",
        "敵人被雨傘擊中後會進入 isHit/hitByUmbrella 狀態，對應被擊飛動畫與圖片偏移。",
        "雨傘道具以固定速度從上方落下，玩家碰撞後 umbrellaCount++ 並記錄在物件中。",
        "keyPressed() 監聽空白鍵 → 啟動雨傘 activateUmbrella() 並播放音效。",
        "mousePressed() 依狀態解析：\nStart Page 1 → 換頁\nStart Page 2 → startCountdown()\nGame Over → resetGame()。",
      ],
  
      links: {
        demo: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
        github: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
        play: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
      }
    },

    {
      id: "3D-game",
      category: "game",
      name: "豪宅保衛戰",
      cover: Game2,
  
      intro: `此遊戲是以 unity 製作的 3D射擊遊戲，素材選用豪宅的場景，角色與怪物則是分別匯入可愛風格的 asset 塑造統一的風格和療愈的遊玩體驗。`,
  
      type: "3D射擊遊戲（以unity製作）",
  
      flow: [
        {
          img: game_3D1,
          text: "打倒怪物可獲得分數，越下層的怪物分數越高，且移動速度更快。遊戲目標是 60 秒內達到指定分數。被怪物撞到一次會扣一點生命值，若生命值歸零則遊戲失敗。",
        },
        {
          img: game_3D2,
          text: "怪物偵測到玩家後會主動往玩家方向前進",
        },
        {
          img: game_3D3,
          text: "按上下左右（或 W, S, A, D ）鍵移動，按空白鍵可跳躍，按 Z 鍵攻擊。",
        },
        {
          img: game_3D4,
          text: "達到指定分數後跳出成功的字樣。",
        }
      ],
  
      tech: [
        "角色 (MihateController)：\n1. 按下 'Q' 鍵會觸發 reset() 函式將角色位置重置並允許操作。\n2. 按下 'Z' 鍵會觸發 \"attack\" 動畫並在 0.3 秒後切換（發射魔法球）。\n3. 按下空白鍵 (\"space\") 會觸發跳躍動畫。\n4. 按下方向鍵或 WASD 鍵可控制角色移動方向，改變角色旋轉角度並切換為移動動畫。",
        "魔法球 (MagicBall)：\n1. 魔法球在角色按 Z 鍵攻擊時生成，並具有預設的生命週期 LifeTime (2.0f)，無論是否擊中目標，時間到後都會自動銷毀。\n2. 透過 OnTriggerEnter 偵測碰撞；碰撞時會切換為爆炸特效。\n3. 向被擊中的物體發送 \"Hit\" 訊息，並傳遞 damageValue (15)。\n4. 發動效果後魔法球自毀。",    
        "怪物 (MonsterScript)：\n1. 透過 PlayerSensor 偵測周圍的碰撞物體，並將偵測到的第一個物體設為 FollowTarget（玩家）。\n2. 若有 FollowTarget 且血量大於 0，怪物會轉向玩家並切換為跑步動畫。\n3. 透過 AttackSensor 判斷是否進入攻擊範圍；若在範圍內會啟動 \"Attack\" 動畫並停止移動。\n4. 收到 \"Hit\" 訊息後觸發被擊中動畫；當 CurrentHP 小於或等於 0 時，uiManager 會增加 10 分。",      
        "UI 管理器 (GameUIManager)：\n1. Start() 中取得 TextMeshProUGUI 組件。\n2. 初始化顯示文本為 ScorePrefix（例如 \"Score: 250/\"）+ 當前分數 (0)。\n3. 分數增加時更新 UI 文本。\n4. 若達到或超過 240 分，UI 切換為 \"Success\" 字樣。",
      ]
      ,
  
      links: {
        demo: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
        github: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
        play: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
      }
    },

    {
      id: "web-game",
      category: "game",
      name: "指定不退",
      cover: Game3,
  
      intro: `主要的遊戲方式希望藉由介紹暗黑模式的內容傳遞資訊之外，另一方面，使用者在閱讀的同時會被大量的廣告干擾。使用者需要在花俏的彈跳、固定式等廣告中努力閱讀全文，同時避免點擊到廣告以免不當訂閱，藉以模擬現今人們使用網路時時常被干擾的情境。
              玩家需要在複雜的畫面中分辨內文、廣告與訂閱，避免點擊到廣告或訂閱。最後試算出玩家成功關閉廣告的次數、不小心點到廣告的次數與無意中忘記取消訂閱所會花費的總年費，提醒玩家日後小心暗黑模式的網站並且清楚資訊後才點擊內容物。
            （此為小組作品，我負責的部分為利用 p5.js 製作彈窗廣告）`,
  
      type: "網頁遊戲（以Bootstrap + p5.js製作）",
  
      flow: [
        {
          img: game_web1,
          text: "閱讀遊戲說明頁。",
        },
        {
          img: game_web2,
          text: "小心關閉每個網頁上的廣告，廣告類型有左右邊的固定廣告和彈出廣告，彈出廣告會有假的X按鈕，誤導使用者誤擊。",
        },
        {
          img: game_web3,
          text: "不小心點到廣告就要被迫看完。",
        },
        {
          img: game_web4,
          text: "閱讀完成，滑到底部後，點擊「完成閱讀」結束遊戲。",
        },
        {
          img: game_web5,
          text: "跳出計分頁面：依據通關時長、成功「關閉廣告」次數按到「廣告」次數、「訂閱」總年費計分。",
        }
      ],
  
  
      links: {
        demo: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
        github: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
        play: "https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2",
      }
    }
  ];
  