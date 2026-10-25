# Case Study 012 — Draft for review, not posted (paired EN/MY version)

Category: Case Studies · Company: Grab
Glossary tags: Friction · Information Architecture
Cover: to be generated at posting time

---

**[EN] Title: How Grab Designed for Streets Without Addresses**
**[MY] ခေါင်းစဉ်: Grab က လိပ်စာ မရှိတဲ့ လမ်းတွေအတွက် ဘယ်လို Design လုပ်ခဲ့လဲ**

⚡ Impacts: Trust · Completion Rate · Repeat Orders
UI Components: Map Pin · Live Tracking · Payments · Reorder

---

**[EN] Skills you'll build**
✓ How a design changes when it respects how a place actually works, not how a map wishes it worked
✓ Why the payment method people already trust beats the one your system prefers
✓ How watching something move toward you can replace a dozen reassurance messages

**[MY] Skills you'll build**
✓ မြေပုံက ဖြစ်စေချင်တဲ့ ပုံစံကို မဟုတ်ဘဲ နေရာ တစ်ခုက တကယ် အလုပ်လုပ်တဲ့ ပုံစံကို လေးစားရင် design ဘယ်လို ပြောင်းသွားလဲ
✓ မင်း system က ကြိုက်တဲ့ နည်းထက် လူတွေ ယုံပြီးသား ပေးချေမှုက ဘာလို့ နိုင်လဲ
✓ တစ်စုံတစ်ခု မင်းဆီ ရွေ့လာတာကို ကြည့်ရတာက စိတ်ချရတဲ့ message တစ်ဒါဇင်ကို ဘယ်လို အစားထိုးနိုင်လဲ

---

**[EN] Intro**

Grab started in Malaysia in 2012 as a taxi-booking app and grew into Southeast Asia's everyday super app: rides, food, parcels, payments, one icon on the home screen. Its design problems are the region's problems. Addresses can be informal or incomplete. Cash is still king in many markets. Trust between strangers is earned slowly. Grab's UX is a long series of answers to local reality, and that is exactly why it teaches so much.

**[MY] Intro**

Grab က 2012 မှာ Malaysia မှာ taxi ခေါ်တဲ့ app အဖြစ် စခဲ့တယ်။ အခု အရှေ့တောင် အာရှရဲ့ နေ့စဉ် super app ဖြစ်လာတယ်။ အငှား၊ အစားအစာ၊ ပါဆယ်၊ ပေးချေမှု အားလုံး home screen ပေါ်က icon တစ်ခုပဲ။ သူ့ design ပြဿနာတွေက ဒေသရဲ့ ပြဿနာတွေပဲ။ လိပ်စာတွေက ပုံစံ မကျတာ၊ မပြည့်စုံတာ ဖြစ်နိုင်တယ်။ ဈေးကွက် အများစုမှာ cash က ဘုရင်ပဲ ရှိတုန်း။ သူစိမ်း အချင်းချင်း trust က ဖြည်းဖြည်း ရတယ်။ Grab ရဲ့ UX က ဒေသ အမှန်တရားအတွက် အဖြေ အရှည်ကြီးပဲ။ အဲဒါကြောင့်ပဲ သူက ဒီလောက် သင်ပေးနိုင်တာ။

---

**[EN] 1. One app, one mental model**

Instead of separate apps for rides, food and money, Grab puts them behind one home screen, one account, one wallet. A user who learns to book a ride has already learned most of ordering dinner. The consistency is the feature: every new service inherits an old habit.

**Principle Card — The Super App Bet**
Rules applied: Information Architecture · Mental Model
Each separate app charges a new user a full learning cost. A shared home, account and payment method means every service after the first one starts at a discount — the user pays the learning price once.

**[MY] 1. App တစ်ခု၊ mental model တစ်ခု**

အငှား၊ အစားအစာနဲ့ ပိုက်ဆံအတွက် app သပ်သပ် စီ အစား Grab က သူတို့ကို home screen တစ်ခု၊ account တစ်ခု၊ wallet တစ်ခု နောက်မှာ ထားတယ်။ အငှား မှာတတ်တဲ့ user က ညစာ မှာတာရဲ့ အများစုကို သင်ပြီးသားပဲ။ တစ်သမတ်တည်းက feature ပဲ။ Service အသစ်တိုင်းက အကျင့် အဟောင်းကို ဆက်ခံတယ်။

**Principle Card — The Super App Bet**
Applied လုပ်တဲ့ rules: Information Architecture · Mental Model
App သပ်သပ် တစ်ခုစီက user အသစ်ကို သင်ယူမှု ကုန်ကျမှု အပြည့် ကောက်တယ်။ Home, account နဲ့ ပေးချေမှု နည်းလမ်း မျှထားရင် ပထမ တစ်ခုနောက်က service တိုင်းက လျှော့ဈေးနဲ့ စတယ်။ User က သင်ယူမှု ဈေးကို တစ်ခါပဲ ပေးရတယ်။

---

**[EN] 2. Drop the pin, skip the address**

In much of Southeast Asia, "the blue gate after the temple, opposite the noodle shop" is a real address, and a text field cannot hold it. Grab leans on the map: drag a pin to where you are, then add a note for the driver. The input matches the way people actually give directions.

**Principle Card — Design for the Real Address**
Rules applied: Input Quality · Local Context
A form that demands data in a shape the world does not have produces errors, calls and abandoned bookings. Letting people point at the place instead of describing it removes the translation step entirely.

**[MY] 2. Pin ကို ချပါ၊ လိပ်စာကို ကျော်ပါ**

အရှေ့တောင် အာရှ အများစုမှာ "ဘုရားကျောင်း နောက်က အပြာ ဂိတ်၊ ခေါက်ဆွဲဆိုင် မျက်နှာချင်းဆိုင်" က တကယ့် လိပ်စာပဲ။ စာသား field တစ်ခုက အဲဒါကို မဆန့်ဘူး။ Grab က မြေပုံကို အားကိုးတယ်။ Pin ကို မင်း ရှိတဲ့ နေရာကို ရွှေ့ချပါ။ ပြီးရင် driver အတွက် မှတ်ချက် ထည့်ပါ။ Input က လူတွေ တကယ် လမ်းညွှန်တဲ့ နည်းနဲ့ ကိုက်တယ်။

**Principle Card — Design for the Real Address**
Applied လုပ်တဲ့ rules: Input Quality · Local Context
ကမ္ဘာမှာ မရှိတဲ့ ပုံစံနဲ့ data တောင်းတဲ့ form က အမှားတွေ၊ ဖုန်းခေါ်တာတွေနဲ့ ပစ်ထားတဲ့ booking တွေ ထုတ်တယ်။ လူကို နေရာကို စာနဲ့ ရေးခိုင်းတာ အစား ညွှန်ပြခွင့် ပေးလိုက်ရင် ဘာသာပြန် အဆင့်ကို လုံးဝ ဖယ်ပစ်တယ်။

---

**[EN] 3. Cash is not a legacy feature**

In markets where many people have no card and little trust in digital money, Grab lets you pay the driver in cash, and food can be ordered cash-on-delivery. The wallet is offered, never forced. The product bent to the payment habit instead of lecturing it.

**Principle Card — Meet the Money Where It Is**
Rules applied: Inclusive Design · Local Fit
Every payment requirement is a locked door for someone. Accepting the method people already trust — even the inconvenient, physical one — converts users that a prettier, card-only product would simply never meet.

**[MY] 3. Cash က အကြွင်း feature မဟုတ်ဘူး**

လူ အများစုမှာ card မရှိဘဲ digital ပိုက်ဆံကို ယုံကြည်မှု နည်းတဲ့ ဈေးကွက်တွေမှာ Grab က driver ကို cash နဲ့ ပေးလို့ရတယ်။ အစားအစာကို ရောက်မှ cash ပေးပြီး မှာလို့ရတယ်။ Wallet ကို ပေးတယ်။ ဘယ်တော့မှ အတင်း မလုပ်ဘူး။ Product က ပေးချေမှု အကျင့်ကို ဆုံးမတာ မဟုတ်ဘဲ သူ့ဆီ ကွေးသွားတယ်။

**Principle Card — Meet the Money Where It Is**
Applied လုပ်တဲ့ rules: Inclusive Design · Local Fit
ပေးချေမှု လိုအပ်ချက်တိုင်းက တစ်ယောက်ယောက် အတွက် သော့ခတ်ထားတဲ့ တံခါးပဲ။ လူတွေ ယုံပြီးသား နည်းလမ်းကို လက်ခံရင် — အဆင်မပြေ၊ ရုပ်ပိုင်းဆိုင်ရာ နည်းကိုတောင် — ပိုလှတဲ့ card သီးသန့် product က ဘယ်တော့မှ မတွေ့မယ့် user တွေကို ပြောင်းလဲ ရတယ်။

---

**[EN] 4. Watch the driver come to you**

Once booked, the screen shows the car moving on the map, the driver's photo, name and plate number, and a button to share your trip. For a region where getting into a stranger's car was the scary part, the design answers the fear with continuous, checkable facts.

**Principle Card — Trust Through Visibility**
Rules applied: Feedback · Trust Design
Reassurance text says "you are safe". A moving car, a face and a plate number prove it, second by second. Live visibility turns trust from a promise into something the user can verify themselves.

**[MY] 4. Driver မင်းဆီ လာတာကို ကြည့်ပါ**

မှာ ပြီးရင် screen က မြေပုံပေါ်မှာ ကား ရွေ့နေတာကို ပြတယ်။ Driver ရဲ့ ဓာတ်ပုံ၊ နာမည်နဲ့ plate နံပါတ်ပါတယ်။ မင်း ခရီးကို မျှဖို့ button တစ်ခုပါတယ်။ သူစိမ်း ကားထဲ ဝင်ရတာက ကြောက်စရာ အပိုင်း ဖြစ်တဲ့ ဒေသအတွက် design က အကြောက်ကို စစ်လို့ရတဲ့ အချက်အလက်တွေ အဆက်မပြတ်နဲ့ ဖြေတယ်။

**Principle Card — Trust Through Visibility**
Applied လုပ်တဲ့ rules: Feedback · Trust Design
စိတ်ချရတဲ့ စာသားက "မင်း လုံခြုံတယ်" ပြောတယ်။ ရွေ့နေတဲ့ ကား၊ မျက်နှာနဲ့ plate နံပါတ်က စက္ကန့်တိုင်း သက်သေ ပြတယ်။ တိုက်ရိုက် မြင်သာမှုက trust ကို ကတိ ကနေ user ကိုယ်တိုင် စစ်လို့ရတဲ့ အရာ အဖြစ် ပြောင်းတယ်။

---

**[EN] 5. Dinner again, in one tap**

GrabFood keeps your history close: favourite shops and an order-again path that rebuilds last night's exact meal in a tap or two. After a long day, the most valuable menu is the one you already chose from once.

**Principle Card — Order Again**
Rules applied: Recognition over Recall · Friction Removal
Remembering a great order is work the app can do better than the brain. Resurfacing the past choice at the moment of hunger converts memory into a feature and a repeat order into seconds.

**[MY] 5. ညစာ ထပ်ယူ၊ တစ်ချက် တည်းနဲ့**

GrabFood က မင်း မှတ်တမ်းကို အနီးမှာ ထားတယ်။ အကြိုက်ဆုံး ဆိုင်တွေနဲ့ မနေ့ညက မှာခဲ့တဲ့ အစားအစာ အတိအကျကို တစ်ချက် နှစ်ချက်နဲ့ ပြန် ဆောက်ပေးတဲ့ order-again လမ်းကြောင်းပဲ။ ရှည်တဲ့ နေ့ တစ်နေ့ အပြီးမှာ အဖိုးအတန်ဆုံး menu က မင်း တစ်ခါ ရွေးပြီးသား menu ပဲ။

**Principle Card — Order Again**
Applied လုပ်တဲ့ rules: Recognition over Recall · Friction Removal
ကောင်းတဲ့ order တစ်ခုကို မှတ်ရတာက ဦးနှောက်ထက် app က ပို ကောင်းအောင် လုပ်နိုင်တဲ့ အလုပ်ပဲ။ ဗိုက်ဆာတဲ့ အချိန်မှာ အရင် ရွေးတာကို ပြန် ထုတ်ပြရင် မှတ်ဉာဏ်ကို feature အဖြစ် ပြောင်းတယ်။ ထပ် မှာတာကို စက္ကန့်တွေ အဖြစ် ပြောင်းတယ်။

---

**[EN] The honest summary**

One app for everything has a price. Grab's home screen carries the weight of every service it absorbed, promos and tiers make pricing feel noisy to many users, and surge pricing still angers people in the rain. The local lessons travel, though: pin instead of address, cash alongside wallet, a face and a plate number next to the map. Grab did not win Southeast Asia by importing a design. It won by listening to how the region already moved, ate and paid — then removing friction from that, not from an imaginary cleaner version of it.

**[MY] အမှန်အတိုင်း အကျဉ်းချုပ်**

အရာရာ အတွက် app တစ်ခုမှာ ဈေး ရှိတယ်။ Grab ရဲ့ home screen က သူ စုပ်ယူတဲ့ service တိုင်းရဲ့ အလေးချိန်ကို ထမ်းထားတယ်။ Promo တွေနဲ့ tier တွေက user အများစုအတွက် ဈေးကို ဆူညံတယ် ခံစားစေတယ်။ Surge pricing က မိုးထဲမှာ လူတွေကို ဒေါသ ဖြစ်စေတုန်းပဲ။ ဒါပေမဲ့ ဒေသ သင်ခန်းစာတွေက ခရီး သွားတယ်။ လိပ်စာ အစား pin၊ wallet နဲ့ ဘေးချင်း cash၊ မြေပုံ ဘေးမှာ မျက်နှာနဲ့ plate နံပါတ် ပဲ။ Grab က အရှေ့တောင် အာရှကို design တစ်ခု တင်သွင်းပြီး နိုင်တာ မဟုတ်ဘူး။ ဒေသက ရွေ့နေ၊ စားနေ၊ ပေးနေပြီးသား ပုံစံကို နားထောင်ပြီး နိုင်တာ။ ပြီးရင် အဲဒီကနေ friction ကို ဖယ်တယ်။ ပို သန့်တဲ့ စိတ်ကူးယဉ် version ကနေ မဟုတ်ဘူး။

---

**[EN] Keep learning**
Cheatsheets to study next: Mobile Navigation · Form Design
Glossary terms to study next: Friction · Information Architecture · Feedback

**[MY] ဆက်လေ့လာဖို့**
Cheatsheets: Mobile Navigation · Form Design
Glossary: Friction · Information Architecture · Feedback

References:
- Grab — https://www.grab.com/
- Wikipedia, "Grab (company)" — https://en.wikipedia.org/wiki/Grab_(company)
