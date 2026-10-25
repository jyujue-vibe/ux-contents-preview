# Case Study 010 — Draft for review, not posted (paired EN/MY version)

Category: Case Studies · Company: Stripe
Glossary tags: Usability
Cover: to be generated at posting time

---

**[EN] Title: How Stripe Treats Developers as Users**
**[MY] ခေါင်းစဉ်: Stripe က Developer တွေကို User လိုပဲ သဘောထားတယ်**

⚡ Impacts: Developer Activation · Error Recovery · Time to Integrate
UI Components: Documentation · Code Samples · Test Mode · Dashboard

---

**[EN] Skills you'll build**
✓ How documentation can feel like using the product, not reading about it
✓ Why a safe place to break things makes people braver and faster
✓ How an error message can teach instead of blame

**[MY] Skills you'll build**
✓ Documentation က product အကြောင်း ဖတ်ရတာ မဟုတ်ဘဲ product ကို သုံးနေရသလို ဘယ်လို ခံစားရလဲ
✓ ချိုးဖျက်လို့ ရတဲ့ လုံခြုံတဲ့ နေရာ တစ်ခုက လူကို ဘာလို့ ပို ရဲရင့်ပြီး ပို မြန်စေလဲ
✓ Error message တစ်ခုက အပြစ်တင်တာ မဟုတ်ဘဲ ဘယ်လို သင်ပေးနိုင်လဲ

---

**[EN] Intro**

Stripe sells payment infrastructure to developers, and developers are users with a brutal filter: they judge a product by its documentation before they judge anything else. Stripe understood this early. Its docs became famous in the developer world not for looking pretty, but for a simple promise — read the left side, copy the code on the right, and the thing actually works. This is a case study in UX where the "interface" is an API, and the "user experience" is how fast a stranger can take a real payment without fear.

**[MY] Intro**

Stripe က developer တွေဆီကို payment infrastructure ရောင်းတယ်။ Developer တွေက ရက်စက်တဲ့ စစ်ထုတ်မှု ရှိတဲ့ user တွေပဲ။ သူတို့က product တစ်ခုကို တခြား ဘာထက်မဆို သူ့ documentation နဲ့ အရင် ဆုံးဖြတ်တယ်။ Stripe က ဒါကို စောစော နားလည်ခဲ့တယ်။ သူ့ docs က developer လောကမှာ နာမည် ကြီးတာ လှလို့ မဟုတ်ဘူး။ ကတိ ရိုးရိုးလေး တစ်ခုကြောင့်ပဲ။ ဘယ်ဘက်ကို ဖတ်ပါ။ ညာဘက်က code ကို ကူးပါ။ အဲဒီ အရာက တကယ် အလုပ်လုပ်တယ်။ ဒါက "interface" က API ဖြစ်နေပြီး "user experience" က သူစိမ်း တစ်ယောက်က ကြောက်စိတ် မရှိဘဲ တကယ့် payment တစ်ခုကို ဘယ်လောက် မြန်မြန် ယူနိုင်လဲ ဆိုတဲ့ case study တစ်ခုပဲ။

---

**[EN] 1. Docs that behave like the product**

Stripe's documentation became known for its three-panel layout: explanation, code, and the live result, side by side. The code is not a screenshot. It is selectable, copyable, and written for your language, with your own test keys already filled in when you are signed in.

**Principle Card — Documentation as Interface**
Rules applied: Recognition over Recall · Copy-Paste Design
Every step a developer must translate — from doc language to their language, from sample key to their key — is a place to make an error. Pre-translate everything, and the doc stops being homework and becomes the first successful run.

**[MY] 1. Product လို ပြုမူတဲ့ docs**

Stripe ရဲ့ documentation က panel သုံးခု ပုံစံနဲ့ နာမည် ကြီးလာတယ်။ ရှင်းပြချက်၊ code နဲ့ တိုက်ရိုက် ရလဒ်ကို ဘေးချင်း ထားတယ်။ Code က screenshot မဟုတ်ဘူး။ ရွေးလို့ ရတယ်။ ကူးလို့ ရတယ်။ မင်းရဲ့ ဘာသာစကားအတွက် ရေးထားတယ်။ မင်း sign in ဝင်ထားရင် မင်းရဲ့ test key တွေပါ အသင့် ဖြည့်ထားပြီးသား။

**Principle Card — Documentation as Interface**
Applied လုပ်တဲ့ rules: Recognition over Recall · Copy-Paste Design
Developer က ဘာသာပြန်ရတဲ့ အဆင့်တိုင်း — doc ဘာသာကနေ သူ့ ဘာသာစကားကို၊ sample key ကနေ သူ့ key ကို — က အမှား လုပ်နိုင်တဲ့ နေရာပဲ။ အကုန်လုံး ကြိုပြန်ထားလိုက်ရင် doc က အိမ်စာ မဟုတ်တော့ဘူး။ ပထမဆုံး အောင်မြင်တဲ့ run ဖြစ်သွားတယ်။

---

**[EN] 2. Fake money, real confidence**

Before touching a real card, developers work in test mode, with published test card numbers — the famous 4242 4242 4242 4242 approves, others trigger declines, expired cards, and fraud checks on demand. A toggle switches between test and live, and the two worlds never mix.

**Principle Card — A Safe Place to Break Things**
Rules applied: Safe Exploration · Error Prevention
People learn systems by pushing them until something fails. If failure costs real money, they push timidly and learn slowly. Make failure free and reversible, and experimentation becomes the tutorial.

**[MY] 2. ပိုက်ဆံ အတု၊ ယုံကြည်မှု အစစ်**

တကယ့် card ကို မထိခင်မှာ developer တွေက test mode မှာ အလုပ်လုပ်တယ်။ ထုတ်ပြန်ထားတဲ့ test card နံပါတ်တွေနဲ့။ နာမည်ကြီး 4242 4242 4242 4242 က approve ဖြစ်တယ်။ တခြားဟာတွေက decline၊ သက်တမ်းကုန် card နဲ့ fraud စစ်ဆေးမှုတွေကို လိုတဲ့ အခါ ဖြစ်အောင် လုပ်တယ်။ Toggle တစ်ခုက test နဲ့ live ကို ပြောင်းတယ်။ လောက နှစ်ခုက ဘယ်တော့မှ မရောဘူး။

**Principle Card — A Safe Place to Break Things**
Applied လုပ်တဲ့ rules: Safe Exploration · Error Prevention
လူက system တွေကို တစ်ခုခု ပျက်တဲ့ အထိ တွန်းကြည့်ပြီး သင်ယူတယ်။ ပျက်ရင် ပိုက်ဆံ အစစ် ကုန်မယ်ဆိုရင် သူတို့ ကြောက်ကြောက်နဲ့ တွန်းတယ်။ ဖြည်းဖြည်း သင်ရတယ်။ ပျက်တာကို free နဲ့ ပြန်ပြင်လို့ ရအောင် လုပ်လိုက်ရင် စမ်းသပ်တာကိုက tutorial ဖြစ်သွားတယ်။

---

**[EN] 3. Errors written for humans**

When something goes wrong in the Stripe API, the error comes back with a plain-language message, a specific code, and a link to the exact documentation for that failure. Developers quote Stripe errors as the industry standard because the message tells you what broke, why, and what to try next.

**Principle Card — Errors That Teach**
Rules applied: Error Recovery · Plain Language
An error is a user at their most stressed moment, reading the smallest text on the screen. Naming the cause and the next step turns a dead end into a detour — and cuts support tickets nobody counts as UX.

**[MY] 3. လူတွေအတွက် ရေးထားတဲ့ error တွေ**

Stripe API မှာ တစ်ခုခု မှားရင် error က ရိုးရိုး ဘာသာစကားနဲ့ message တစ်ခု၊ တိကျတဲ့ code တစ်ခု နဲ့ အဲဒီ ပျက်တာအတွက် documentation အတိအကျကို link တစ်ခုနဲ့ ပြန်လာတယ်။ Developer တွေက Stripe error တွေကို industry စံအဖြစ် ကိုးကားတယ်။ Message က ဘာပျက်လဲ၊ ဘာလို့လဲ၊ နောက် ဘာစမ်းရမလဲ ပြောလို့ပဲ။

**Principle Card — Errors That Teach**
Applied လုပ်တဲ့ rules: Error Recovery · Plain Language
Error ဆိုတာ user က အစိတ်အပိုင်း အများဆုံး ဖိစီးတဲ့ အချိန်မှာ screen ပေါ်က အသေးဆုံး စာကို ဖတ်နေရတာ။ အကြောင်းရင်းနဲ့ နောက်အဆင့်ကို နာမည် တပ်လိုက်ရင် လမ်းဆုံးက လမ်းလွှဲ ဖြစ်သွားတယ်။ ဘယ်သူမှ UX လို့ မရေတွက်တဲ့ support ticket တွေကိုပါ ဖြတ်ပစ်တယ်။

---

**[EN] 4. Working code before the paperwork ends**

Stripe lets developers grab API keys and run a real test integration almost immediately, long before the business verification that live payments require. The order matters: first the feeling of "it works", then the forms. Commitment follows a success the developer has already felt in their own hands.

**Principle Card — Success Before Signup**
Rules applied: Time to Value · Progressive Disclosure
Asking for trust before proof exhausts people. Letting them succeed first, then disclosing requirements step by step, means every form arrives after motivation already exists.

**[MY] 4. စာရွက်စာတမ်း မဆုံးခင် အလုပ်လုပ်တဲ့ code**

Stripe က developer တွေကို API key တွေ ယူပြီး စမ်းသပ် integration တစ်ခုကို ချက်ချင်းနီးပါး run လို့ရအောင် ပေးတယ်။ Live payment အတွက် လိုတဲ့ စီးပွားရေး အတည်ပြုမှုတွေ မတိုင်ခင် အများကြီး စောပြီးပဲ။ အစဉ်က အရေးကြီးတယ်။ အရင် "အလုပ်လုပ်တယ်" ဆိုတဲ့ ခံစားချက်၊ ပြီးမှ form တွေပဲ။ ကတိကဝတ်က developer ကိုယ်တိုင် လက်နဲ့ ခံစားပြီးသား အောင်မြင်မှုရဲ့ နောက်က လာတယ်။

**Principle Card — Success Before Signup**
Applied လုပ်တဲ့ rules: Time to Value · Progressive Disclosure
သက်သေ မတိုင်ခင် ယုံကြည်မှုကို တောင်းရင် လူ မောတယ်။ သူတို့ကို အရင် အောင်မြင်ခွင့် ပေးပြီး လိုအပ်ချက်တွေကို တစ်ဆင့်ပြီး တစ်ဆင့် ထုတ်ပြရင် form တိုင်းက စိတ်အားထက်သန်မှု ရှိပြီးမှ ရောက်လာတယ်။

---

**[EN] 5. A dashboard that speaks plainly**

For the non-developers on the team, the Stripe Dashboard names things the way a business talks: payments, customers, disputes, payouts. A search box can find a transaction by an email or an amount, because that is how a human remembers a payment, not by a 27-character ID.

**Principle Card — Speak the User's Language**
Rules applied: Information Architecture · Recognition over Recall
Systems store IDs; people store stories — "the lady who paid twice on Tuesday". Search and labels built on human memory make the same database feel twice as smart.

**[MY] 5. ရိုးရိုး ပြောတဲ့ dashboard**

Team ထဲက developer မဟုတ်တဲ့ လူတွေအတွက် Stripe Dashboard က အရာတွေကို စီးပွားရေး ပြောသလို နာမည် ပေးတယ်။ Payments, customers, disputes, payouts ပဲ။ Search box က transaction တစ်ခုကို email နဲ့ ဒါမှမဟုတ် ပမာဏနဲ့ ရှာလို့ရတယ်။ လူက payment တစ်ခုကို မှတ်တာ အဲဒီလိုပဲ။ စာလုံး ၂၇ လုံး ID နဲ့ မဟုတ်ဘူး။

**Principle Card — Speak the User's Language**
Applied လုပ်တဲ့ rules: Information Architecture · Recognition over Recall
System တွေက ID တွေကို သိမ်းတယ်။ လူက ဇာတ်လမ်းတွေကို သိမ်းတယ်။ "အင်္ဂါနေ့က နှစ်ခါ ပေးတဲ့ အမျိုးသမီး" ဆိုတာမျိုးပဲ။ လူ့ မှတ်ဉာဏ်ပေါ် ဆောက်ထားတဲ့ search နဲ့ label တွေက database အတူတူကိုပဲ နှစ်ဆ ပို စမတ် ခံစားရအောင် လုပ်တယ်။

---

**[EN] The honest summary**

Stripe's polish is not free. Its fees sit above the cheapest processors, and under the beautiful surface the hard parts of payments still exist — disputes, compliance checks, country-by-country limits. Developers are not buying magic. They are buying back hours: every confusing doc and cryptic error at a rival is a cost Stripe designed away and charges for. The lesson is that developer experience is not a niche. Any product whose users must build with it, configure it, or debug it is in the same business.

**[MY] အမှန်အတိုင်း အကျဉ်းချုပ်**

Stripe ရဲ့ အလှပြင်တာက free မဟုတ်ဘူး။ သူ့ fee တွေက အသက်သာဆုံး processor တွေထက် မြင့်တယ်။ လှတဲ့ မျက်နှာပြင် အောက်မှာ payment ရဲ့ ခက်တဲ့ အပိုင်းတွေက ရှိတုန်းပဲ။ Disputes, compliance စစ်ဆေးမှုတွေ၊ နိုင်ငံ အလိုက် limit တွေပဲ။ Developer တွေက မှော်ပညာ ဝယ်နေတာ မဟုတ်ဘူး။ နာရီတွေကို ပြန် ဝယ်နေတာ။ ပြိုင်ဘက်ဆီက ရှုပ်တဲ့ doc တိုင်းနဲ့ နားမလည်တဲ့ error တိုင်းက Stripe က design နဲ့ ဖယ်ပြီး အခ ယူတဲ့ ကုန်ကျမှုပဲ။ သင်ခန်းစာက developer experience က niche မဟုတ်ဘူး ဆိုတာပဲ။ User တွေက သူနဲ့ ဆောက်ရမယ့်၊ ပြင်ရမယ့်၊ debug လုပ်ရမယ့် product တိုင်းက အဲဒီ စီးပွားရေး အတူတူထဲမှာပဲ ရှိတယ်။

---

**[EN] Keep learning**
Cheatsheets to study next: Error Messages · Onboarding
Glossary terms to study next: Usability · Mental Model

**[MY] ဆက်လေ့လာဖို့**
Cheatsheets: Error Messages · Onboarding
Glossary: Usability · Mental Model

References:
- Stripe Documentation — https://docs.stripe.com/
- Wikipedia, "Stripe" — https://en.wikipedia.org/wiki/Stripe
