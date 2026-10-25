# Case Study 013 — Draft for review, not posted (paired EN/MY version)

Category: Case Studies · Company: Uber
Glossary tags: Feedback
Cover: to be generated at posting time.

---

**[EN] Title: How Uber Made Waiting Feel Safe by Showing You the Car**
**[MY] ခေါင်းစဉ်: Uber က ကားကို ပြထားပြီး စောင့်ရတာကို စိတ်ချရ ခံစားရအောင် ဘယ်လို လုပ်ခဲ့လဲ**

⚡ Impacts: Trust · Waiting Experience · Safety
UI Components: Live Map · ETA · Driver Card · Trip Sharing

---

**[EN] Skills you'll build**
✓ Why watching something move toward you feels completely different from staring at a spinner
✓ How one honest number ("3 min away") can calm a person more than ten reassurance messages
✓ What a screen owes you at the moment you hand your safety to a stranger

**[MY] Skills you'll build**
✓ တစ်စုံတစ်ခု မင်းဆီ ရွေ့လာတာကို ကြည့်ရတာနဲ့ spinner ကိုပဲ ကြည့်နေရတာ ဘာလို့ လုံးဝ မတူသလို ခံစားရလဲ
✓ ရိုးသားတဲ့ နံပါတ် တစ်ခု (3 min ပဲ ကျန်တယ်) က စိတ်ချရတဲ့ message ဆယ်ခုထက် လူကို ဘာလို့ ပို စိတ်အေးစေလဲ
✓ သူစိမ်း တစ်ယောက်ကို ကိုယ့် ဘေးကင်းရေး အပ်လိုက်တဲ့ အချိန်မှာ screen က မင်းကို ဘာတွေ ပြန်ပေးသင့်လဲ

---

**[EN] Intro**

Before Uber, getting a taxi meant standing on a curb with your arm in the air, hoping. You did not know if a car was coming, when it would come, or what it would cost. Uber's deepest design move was not the button that orders the car. It was everything the screen shows you after you press it.

**[MY] Intro**

Uber မတိုင်ခင် taxi ရဖို့ ဆိုတာ လမ်းဘေးမှာ လက် မြှောက်ပြီး ရပ်စောင့်ရတယ်။ ကား လာမလား မသိဘူး။ ဘယ်တော့ ရောက်မလဲ မသိဘူး။ ဘယ်လောက် ကျမလဲလည်း မသိဘူး။ Uber ရဲ့ အနက်ရှိုင်းဆုံး design က ကား မှာတဲ့ button မဟုတ်ဘူး။ Button နှိပ်ပြီးတဲ့ နောက်မှာ screen က ပြတဲ့ အရာတွေ အကုန်လုံးပဲ။

---

**[EN] 1. The map answers the only question you have**

The second your driver accepts, the map takes over the screen. You see the car. You see it turn corners. You see it get closer. Above it sits one number: the minutes left. The product found the single anxious question in your head, "where is my car?", and it answers that question every second, without you asking again.

**Principle Card — Feedback and Visibility**
Rules applied: Feedback · Visibility of System Status
Waiting feels long when you know nothing. It feels short when you can see progress. A live answer turns dead waiting time into watched time, and watched time feels like the product is working for you right now.

**[MY] 1. မြေပုံက မင်း ရှိတဲ့ မေးခွန်း တစ်ခုတည်းကို ဖြေတယ်**

Driver က လက်ခံလိုက်တာနဲ့ မြေပုံက screen တစ်ခုလုံးကို ယူလိုက်တယ်။ ကားကို မြင်ရတယ်။ ကား လမ်းထောင့်မှာ ကွေ့တာကို မြင်ရတယ်။ မင်းဆီ နီးလာတာကို မြင်ရတယ်။ အပေါ်မှာ နံပါတ် တစ်ခု ရှိတယ်။ ကျန်တဲ့ မိနစ်။ Product က မင်း ခေါင်းထဲက စိတ်ပူတဲ့ မေးခွန်း တစ်ခုကို ရှာတွေ့တယ်။ ငါ့ကား ဘယ်မှာလဲ ဆိုတဲ့ မေးခွန်း။ မင်း ထပ်မေးစရာ မလိုဘဲ အဲဒီ မေးခွန်းကို စက္ကန့်တိုင်း ဖြေပေးတယ်။

**Principle Card — Feedback and Visibility**
Applied လုပ်တဲ့ rules: Feedback · Visibility of System Status
ဘာမှ မသိရရင် စောင့်ရတာ ကြာတယ် ခံစားရတယ်။ တိုးတက်မှုကို မြင်နေရရင် စောင့်ရတာ တိုတယ် ခံစားရတယ်။ အချိန်နဲ့ တပြေးညီ အဖြေက သေနေတဲ့ စောင့်ချိန်ကို ကြည့်လို့ရတဲ့ အချိန် ဖြစ်သွားစေတယ်။ အဲဒီလို ကြည့်ရတဲ့ အချိန်က product က အခုပဲ မင်းအတွက် အလုပ်လုပ်နေတယ် လို့ ခံစားရစေတယ်။

---

**[EN] 2. The price comes before the promise**

Uber shows the fare before you confirm the ride, in most cities as one fixed number. You decide with the price already known. There is no meter running in the background of your mind, and no surprise at the end of the trip. The deal is finished before the ride starts.

**Principle Card — Certainty Before Commitment**
Rules applied: Transparency · Loss Aversion
People fear an unknown loss more than a known one. A price you agreed to feels fair even when it is not cheap. A price revealed afterwards feels unfair even when it is low. Show the cost at the moment of choice, not at the moment of payment.

**[MY] 2. ဈေးက ကတိထက် အရင် လာတယ်**

Uber က ride ကို confirm မလုပ်ခင်မှာ ဈေးကို ပြတယ်။ မြို့ အများစုမှာ ပုံသေ နံပါတ် တစ်ခု အနေနဲ့ ပြတယ်။ ဈေးကို သိပြီးမှ မင်း ဆုံးဖြတ်တယ်။ ခေါင်းထဲမှာ meter တက်နေတဲ့ ခံစားချက် မရှိဘူး။ ခရီး အဆုံးမှာ အံ့အားသင့်စရာလည်း မရှိဘူး။ စာချုပ်က ride မစခင်မှာပဲ ပြီးနေပြီ။

**Principle Card — Certainty Before Commitment**
Applied လုပ်တဲ့ rules: Transparency · Loss Aversion
လူက သိပြီးသား ဆုံးရှုံးမှုထက် မသိရသေးတဲ့ ဆုံးရှုံးမှုကို ပို ကြောက်တယ်။ မင်း သဘောတူထားတဲ့ ဈေးက ဈေးမချိုရင်တောင် တရားမျှတယ် ခံစားရတယ်။ နောက်မှ ထုတ်ပြတဲ့ ဈေးက ဈေးချိုရင်တောင် မတရားဘူး ခံစားရတယ်။ ကုန်ကျစရိတ်ကို ငွေရှင်းတဲ့ အချိန်မှာ မဟုတ်ဘဲ ရွေးချယ်တဲ့ အချိန်မှာ ပြပါ။

---

**[EN] 3. A person, not just a car**

Under the map sits the driver card: a photo, a first name, the car model, the colour, and the plate number. You are not looking for "a black sedan". You are looking for one named person in one known car. That small card is what makes meeting a stranger on a street corner feel like an arranged meeting instead of a gamble.

**Principle Card — Trust Through Identity**
Rules applied: Social Proof · Recognition
Anonymous systems feel risky. Named people feel accountable. When both sides can identify each other, behaviour improves on both sides, and the rider's fear drops before the car even arrives.

**[MY] 3. ကား မဟုတ်ဘူး။ လူ တစ်ယောက်**

မြေပုံ အောက်မှာ driver card ရှိတယ်။ ဓာတ်ပုံ တစ်ပုံ။ နာမည် တစ်ခု။ ကား model။ ကား အရောင်။ ပြီးတော့ plate number။ မင်းက black sedan တစ်စီးကို ရှာနေတာ မဟုတ်ဘူး။ နာမည် သိတဲ့ လူ တစ်ယောက်နဲ့ သိပြီးသား ကား တစ်စီးကို ရှာနေတာ။ အဲဒီ card သေးသေးလေးကပဲ လမ်းထောင့်မှာ သူစိမ်း တစ်ယောက်နဲ့ တွေ့ရတာကို ကံစမ်းတာ မဟုတ်ဘဲ စီစဉ်ထားတဲ့ တွေ့ဆုံမှု ဖြစ်သွားစေတယ်။

**Principle Card — Trust Through Identity**
Applied လုပ်တဲ့ rules: Social Proof · Recognition
နာမည် မသိရတဲ့ system က risk ရှိတယ် ခံစားရတယ်။ နာမည် သိရတဲ့ လူက တာဝန်ယူမယ် ခံစားရတယ်။ နှစ်ဖက်လုံး တစ်ယောက်ကို တစ်ယောက် ခွဲခြား သိနိုင်ရင် နှစ်ဖက်လုံးရဲ့ အပြုအမူ ကောင်းလာတယ်။ ကား မရောက်ခင်မှာပဲ စီးမယ့်လူရဲ့ အကြောက် လျော့သွားတယ်။

---

**[EN] 4. Share the trip, not just the ride**

Inside the trip screen, one button sends your live journey to a person you trust: where you are, where the car is going, when you should arrive. Uber added this because the product understood something simple. The ride is not only the rider's experience. Someone who loves the rider is also waiting, and they were given a screen too.

**Principle Card — Safety You Can Hand to Someone Else**
Rules applied: Perceived Safety · User Control
A safety feature works when it is easy to share at the exact moment of worry. Live trip sharing turns one person's location into a watched-over journey, and the feeling of being watched over is itself part of the product.

**[MY] 4. ခရီးကို မျှလို့ရတယ်**

Trip screen ထဲမှာ button တစ်ခု ရှိတယ်။ မင်း ခရီးကို မင်း ယုံတဲ့ လူ တစ်ယောက်ဆီ ပို့လို့ရတယ်။ မင်း ဘယ်မှာ ရှိလဲ။ ကားက ဘယ်ကို သွားနေလဲ။ ဘယ်တော့ ရောက်မလဲ။ Uber က ဒါကို ဘာလို့ ထည့်လဲ ဆိုတာ ရှင်းတယ်။ Ride က စီးတဲ့ လူရဲ့ အတွေ့အကြုံ တစ်ခုတည်း မဟုတ်ဘူး။ စီးတဲ့ လူကို ချစ်တဲ့ တစ်ယောက်ကလည်း စောင့်နေတယ်။ အဲဒီလူအတွက်ပါ screen တစ်ခု ပေးထားတယ်။

**Principle Card — Safety You Can Hand to Someone Else**
Applied လုပ်တဲ့ rules: Perceived Safety · User Control
Safety feature က စိတ်ပူတဲ့ အချိန်မှာပဲ လွယ်လွယ် မျှလို့ရမှ အလုပ် လုပ်တယ်။ Live trip sharing က လူ တစ်ယောက်ရဲ့ တည်နေရာကို တစ်ယောက်ယောက် စောင့်ကြည့်နေတဲ့ ခရီး ဖြစ်သွားစေတယ်။ စောင့်ကြည့်ခံနေရတယ် ဆိုတဲ့ ခံစားချက်ကိုက product ရဲ့ အစိတ်အပိုင်း တစ်ခုပဲ။

---

**[EN] The honest summary**

The map, the ETA, the price and the driver card all solve waiting and fear. But Uber's pricing has a famous weak spot: surge. When demand spikes, the price multiplies, and the app says so openly with the new fare shown before you confirm. Showing it is more honest than hiding it. It still angers riders, and drivers face their own pressure from ratings and acceptance expectations on the other side of the same screen. The lesson is not that Uber is gentle. The lesson is that trust in a marketplace is designed out of small, repeated proofs: the car is real, the price is known, the person has a name, and the trip can be watched. Remove any one of them, and the old taxi anxiety comes straight back.

**[MY] အမှန်အတိုင်း အကျဉ်းချုပ်**

မြေပုံ၊ ETA၊ ဈေးနှုန်းနဲ့ driver card က စောင့်ရတာနဲ့ ကြောက်ရတာကို ဖြေရှင်းတယ်။ ဒါပေမဲ့ Uber ရဲ့ pricing မှာ နာမည် ဆိုးတဲ့ အားနည်း ချက်တစ်ခု ရှိတယ်။ Surge pricing။ လူ မှာတာ များလာရင် ဈေးက မြှောက်ကိန်း တက်သွားတယ်။ App က အဲဒါကို ပွင့်ပွင့်လင်းလင်း ပြတယ်။ Confirm မလုပ်ခင် ဈေး အသစ်ကို ပြတယ်။ ဝှက်ထားတာထက်တော့ ပို ရိုးသားတယ်။ ဒါပေမဲ့ စီးတဲ့ လူတွေ ဒေါသ ထွက်တုန်းပဲ။ Driver တွေလည်း screen ရဲ့ တစ်ဖက်မှာ rating နဲ့ acceptance ဖိအားကို ခံရတယ်။ သင်ခန်းစာက Uber က နူးညံ့တယ် ဆိုတာ မဟုတ်ဘူး။ Marketplace တစ်ခုရဲ့ trust က သေးသေးလေးတွေ ထပ်ခါထပ်ခါ သက်သေပြရင်း တည်ဆောက်ရတာ။ ကားက တကယ် ရှိတယ်။ ဈေးကို သိရတယ်။ လူကို နာမည် သိတယ်။ ခရီးကို ကြည့်လို့ ရတယ်။ အဲဒါတွေထဲက တစ်ခု ဖယ်လိုက်တာနဲ့ taxi အဟောင်းရဲ့ စိတ်ပူမှုက တန်း ပြန်လာမယ်။

---

**[EN] Keep learning**
Cheatsheets to study next: Cheatsheet: Loading & Waiting (why watched time feels shorter than empty time) · Cheatsheet: UX Laws
Glossary terms to study next: Feedback · Mental Model · Friction

**[MY] ဆက်လေ့လာဖို့**
Cheatsheets: Cheatsheet: Loading & Waiting (ကြည့်လို့ရတဲ့ အချိန်က အလွတ် စောင့်ရတဲ့ အချိန်ထက် ဘာလို့ တိုတယ် ခံစားရလဲ) · Cheatsheet: UX Laws
Glossary: Feedback · Mental Model · Friction

References:
- Uber — https://en.wikipedia.org/wiki/Uber
- Uber Newsroom — https://www.uber.com/newsroom/
