# Cheatsheets — 10 topics (draft for review, not posted)

[EN] Ten quick-reference sheets. Each one fits on a screen and answers one question: what are the rules here?
[MY] အမြန် ကြည့်လို့ ရတဲ့ စာရွက် ၁၀ ရွက်။ တစ်ရွက်ချင်းစီက မေးခွန်း တစ်ခုကိုပဲ ဖြေတယ်။ ဒီနေရာမှာ စည်းမျဉ်းတွေက ဘာတွေလဲ ဆိုတာပဲ။

---

## 1. Form Design Cheatsheet

**[EN] What it is**
Forms are where users give you their data, their money, or their trust. Most people do not fail forms because the questions are hard. They fail because the form makes them work, guess, or start over.

**[MY] ဘာလဲ**
Form ဆိုတာ user က သူ့ data ကို ပေးတဲ့ နေရာ။ ပိုက်ဆံ ပေးတဲ့ နေရာ။ မင်းကို ယုံတဲ့ နေရာပဲ။ လူတွေ form ဖြည့်ရင်း ရပ်သွားတာ မေးခွန်းခက်လို့ မဟုတ်ဘူး။ form က သူတို့ကို ပင်ပန်းအောင် လုပ်လို့ပဲ။

**[EN] The rules**
- Ask only what you truly need. Every extra field costs you completions.
- One column, top to bottom. Eyes move in one line, not a zigzag.
- Put the label above the field, close to it, and never use placeholder text as the label — it disappears when people type.
- Mark optional fields, not required ones. Required is the default expectation.
- Validate as they finish each field, and say what is wrong and how to fix it in plain words.
- Never clear the whole form after one error. Keep everything they typed.
- On mobile, match the keyboard to the field: number pad for phone numbers, email keyboard for emails.

**[MY] စည်းမျဉ်းတွေ**
- တကယ် လိုတာပဲ တောင်းပါ။ Field တစ်ခု ပိုတိုင်း ဖြည့်ပြီး ပြီးတဲ့လူ နည်းသွားတယ်။
- Column တစ်ခုတည်း အပေါ်ကနေ အောက် စီပါ။ မျက်လုံးက မျဉ်းတစ်ကြောင်းတည်း ရွေ့တယ်။
- Label ကို field ရဲ့ အပေါ်မှာ ကပ်ပြီး ထားပါ။ Placeholder ကို label အဖြစ် မသုံးပါနဲ့။ စာ ရိုက်လိုက်တာနဲ့ ပျောက်သွားတယ်။
- မဖြည့်လည်း ရတဲ့ field ကိုပဲ အမှတ် ပြပါ။ ဖြည့်ရမှာက ပုံမှန်ပဲ။
- Field တစ်ခု ပြီးတိုင်း တန်း စစ်ပေးပါ။ ဘာမှားလဲ၊ ဘယ်လို ပြင်ရမလဲ ရှင်းရှင်း ပြောပါ။
- Error တစ်ခု ဖြစ်တာနဲ့ form တစ်ခုလုံး မဖျက်ပစ်ပါနဲ့။ သူတို့ ရိုက်ထားတာ အကုန် ထားပေးပါ။
- Mobile မှာ field နဲ့ ကိုက်တဲ့ keyboard ပြပါ။ ဖုန်းနံပါတ်ဆို number pad၊ email ဆို email keyboard ပေါ့။

**[EN] As seen in**
- GOV.UK — famously asks one question per page on many services, so a form never feels like a wall.
- Stripe Checkout — very few fields, errors appear inline the moment you leave a field, and typed data is never wiped.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- GOV.UK — service အများစုမှာ တစ်မျက်နှာ မေးခွန်း တစ်ခုပဲ မေးတယ်။ Form က နံရံ တစ်ချပ်လို မခံစားရဘူး။
- Stripe Checkout — field နည်းနည်းပဲ ရှိတယ်။ Error က field က ထွက်တာနဲ့ တန်း ပြတယ်။ ရိုက်ထားတဲ့ စာတွေ ဘယ်တော့မှ မပျောက်ဘူး။

---

## 2. UX Laws Cheatsheet

**[EN] What it is**
A handful of psychology findings explain most of what works in interfaces. You do not need all of them at once. You need the right one at the moment you are deciding.

**[MY] ဘာလဲ**
Psychology က တွေ့ရှိချက် လက်တစ်ဆုပ်စာက interface တွေ အလုပ်ဖြစ်တာ အများစုကို ရှင်းပြပေးတယ်။ အကုန်လုံးကို တစ်ပြိုင်တည်း သုံးစရာ မလိုဘူး။ ဆုံးဖြတ်တဲ့ အချိန်မှာ မှန်တဲ့ တစ်ခုကို သုံးဖို့ပဲ လိုတယ်။

**[EN] The rules**
- Fitts's Law — big targets close to the thumb are fast; tiny far targets are slow. Make important buttons big and reachable.
- Hick's Law — more choices means slower decisions. Cut options or group them.
- Miller's Law — people hold about 7 items in short-term memory, give or take. Chunk long lists into groups.
- Jakob's Law — users spend most time on other products, so they expect yours to work the same way.
- Peak-End Rule — people remember the worst moment and the last moment, not the whole experience.
- Doherty Threshold — respond within about 400ms and users stay in flow; slower starts to feel like waiting.
- Von Restorff Effect — the one different item in a group gets noticed and remembered. Use it for the one action that matters.

**[MY] စည်းမျဉ်းတွေ**
- Fitts's Law — ကြီးပြီး လက်မနဲ့ နီးတဲ့ button က မြန်တယ်။ သေးပြီး ဝေးရင် နှေးတယ်။ အရေးကြီး button ကို ကြီးကြီး၊ လက်လှမ်းမီတဲ့ နေရာမှာ ထားပါ။
- Hick's Law — ရွေးစရာ များလေ ဆုံးဖြတ်ရ နှေးလေ။ ရွေးစရာကို လျှော့ပါ။ ဒါမှမဟုတ် အုပ်စု ခွဲပါ။
- Miller's Law — လူက ရေတို မှတ်ဉာဏ်မှာ ၇ ခု ဝန်းကျင်ပဲ ဆုပ်ထားနိုင်တယ်။ စာရင်း ရှည်ရင် အုပ်စုလေးတွေ ခွဲပေးပါ။
- Jakob's Law — user တွေက အချိန် အများစုကို တခြား product တွေမှာ ကုန်တယ်။ မင်းဟာလည်း အဲဒီလိုပဲ အလုပ်လုပ်မယ် မျှော်လင့်တယ်။
- Peak-End Rule — လူတွေက အဆိုးဆုံး အချိန်နဲ့ နောက်ဆုံး အချိန်ကိုပဲ မှတ်မိတယ်။ တစ်ခုလုံးကို မမှတ်မိဘူး။
- Doherty Threshold — 400ms အတွင်း တုံ့ပြန်ရင် user က flow မပျက်ဘူး။ အဲဒီထက် နှေးရင် စောင့်နေရတယ် ခံစားရတယ်။
- Von Restorff Effect — အုပ်စုထဲမှာ ကွဲထွက်နေတဲ့ တစ်ခုက သတိထားမိ ခံရတယ်။ မှတ်လည်း မှတ်မိတယ်။ အရေးကြီးဆုံး action တစ်ခုအတွက် သုံးပါ။

**[EN] As seen in**
- Google homepage — one search box and almost nothing else: Hick's Law doing the whole design.
- Spotify — the big green play button dwarfs every other control on the page: Fitts's Law in plain sight.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Google homepage — search box တစ်ခုပဲ ရှိတယ်။ တခြား ဘာမှ နီးပါး မရှိဘူး။ Hick's Law နဲ့ design တစ်ခုလုံး လုပ်ထားတာ။
- Spotify — အစိမ်းရောင် play button အကြီးကြီးက တခြား control တွေထက် အများကြီး ကြီးတယ်။ Fitts's Law ကို တန်း မြင်ရတယ်။

---

## 3. Onboarding Cheatsheet

**[EN] What it is**
Onboarding is everything between "I downloaded this" and "I get it, and it is worth it". That second moment is the Aha! Moment. Good onboarding gets people there fast, by letting them do the real thing, not by teaching a course first.

**[MY] ဘာလဲ**
Onboarding ဆိုတာ download လုပ်ပြီးတဲ့ အချိန်ကနေ နားလည်ပြီ၊ တန်တယ်လို့ ခံစားရတဲ့ အချိန် အထိ အပိုင်းပဲ။ အဲဒီ အချိန်ကို Aha! Moment လို့ ခေါ်တယ်။ Onboarding ကောင်းကောင်းက သင်တန်း အရင် မတက်ခိုင်းဘူး။ တကယ့် အလုပ်ကို တန်း လုပ်ခိုင်းပြီး မြန်မြန် ရောက်အောင် လုပ်တယ်။

**[EN] The rules**
- Lead with the value, not the features. Show the outcome people came for.
- Ask for sign-up as late as you can. Let people touch the product first.
- One idea per screen. A tour of 7 screens teaches nothing.
- Empty states are your best teacher: put the first action and an example right inside them.
- Show progress when setup has steps, and let people skip and come back.
- Never ask for permissions (notifications, location) before people know why they need them.
- End onboarding inside the product doing real work, not on a "you are all set" screen.

**[MY] စည်းမျဉ်းတွေ**
- Feature တွေ မပြခင် တန်ဖိုးကို အရင် ပြပါ။ လူတွေ လိုချင်တဲ့ ရလဒ်ကို ပြပါ။
- Sign-up ကို ရသလောက် နောက်ဆုံး ဆုတ်ထားပါ။ Product ကို အရင် ထိခွင့်ပေးပါ။
- တစ်မျက်နှာ အတွေး တစ်ခုပဲ။ Screen ၇ ခု လည်ပြတာက ဘာမှ မသင်ပေးဘူး။
- Empty state က အကောင်းဆုံး ဆရာပဲ။ ပထမဆုံး လုပ်ရမယ့် action နဲ့ နမူနာကို အဲဒီ ထဲမှာ ထည့်ထားပါ။
- အဆင့်တွေ ရှိရင် progress ပြပါ။ ကျော်သွားပြီး နောက်မှ ပြန်လာလို့လည်း ရပါစေ။
- Notification, location လို permission တွေကို ဘာလို့ လိုလဲ မသိခင် မတောင်းပါနဲ့။
- Onboarding ကို "အကုန် ပြီးပါပြီ" screen မှာ မဆုံးပါနဲ့။ Product ထဲမှာ တကယ့် အလုပ် လုပ်နေရင်းနဲ့ ဆုံးပါစေ။

**[EN] As seen in**
- Duolingo — you pick a language and answer real lesson questions before any sign-up wall appears.
- Canva — new users start from a template with their goal already visible, not from a blank canvas and a tutorial video.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Duolingo — sign-up မတောင်းခင် ဘာသာစကား ရွေးပြီး တကယ့် သင်ခန်းစာ မေးခွန်းတွေ တန်း ဖြေရတယ်။
- Canva — user အသစ်က canvas အလွတ်နဲ့ tutorial video ကနေ မစဘူး။ သူ့ ရည်မှန်းချက်နဲ့ ကိုက်တဲ့ template ကနေ စတယ်။

---

## 4. Empty States Cheatsheet

**[EN] What it is**
An empty state is any screen with nothing in it yet: no messages, no photos, no results. It is the first thing new users see in most features. A blank box wastes it. A good empty state explains, invites, and shows the first step.

**[MY] ဘာလဲ**
Empty state ဆိုတာ ဘာမှ မရှိသေးတဲ့ screen ပဲ။ Message မရှိ၊ photo မရှိ၊ result မရှိ ဆိုတာမျိုး။ Feature အများစုမှာ user အသစ်တွေ ပထမဆုံး မြင်ရတာ အဲဒါပဲ။ Box အလွတ် ထားတာက အလဟဿပဲ။ Empty state ကောင်းကောင်း က ရှင်းပြတယ်။ ဖိတ်ခေါ်တယ်။ ပထမ အဆင့်ကို ပြတယ်။

**[EN] The rules**
- Never show a bare blank area. Say what belongs here and why it is empty.
- Put one clear next action on the empty state itself — a button, not just text.
- Show what "full" looks like: a sample item or example content teaches faster than instructions.
- Match the tone to the moment. A playful line works for no photos; not for a failed payment list.
- A "no results" empty state is different: suggest broader terms or clear the filters in one tap.
- Design empty states for three cases: first use, user cleared everything, and errors or no results.

**[MY] စည်းမျဉ်းတွေ**
- နေရာ အလွတ် ကြီးပဲ မပြပါနဲ့။ ဒီမှာ ဘာရှိသင့်လဲ၊ ဘာလို့ လွတ်နေလဲ ပြောပါ။
- နောက် လုပ်ရမယ့် action ကို empty state ပေါ်မှာပဲ ရှင်းရှင်း ထားပါ။ စာပဲ မဟုတ်ဘူး။ Button ထားပါ။
- ပြည့်နေရင် ဘယ်လို မြင်ရမလဲ ပြပါ။ နမူနာ item တစ်ခုက ရှင်းပြတာထက် မြန်မြန် သင်ပေးတယ်။
- အသံကို အခြေအနေနဲ့ ကိုက်အောင် ထားပါ။ Photo မရှိတာမှာ ဟာသ လုပ်လို့ ရတယ်။ Payment မအောင်တဲ့ စာရင်းမှာတော့ မရဘူး။
- Result မရှိတဲ့ empty state က သပ်သပ် တစ်မျိုးပဲ။ စကားလုံး ပိုကျယ်တာ အကြံပေးပါ။ ဒါမှမဟုတ် filter တွေကို တစ်ချက် နှိပ်ရုံနဲ့ ရှင်းလို့ ရပါစေ။
- Empty state ကို အခြေအနေ သုံးခု အတွက် design လုပ်ပါ။ ပထမဆုံး သုံးတာ ရယ်၊ user က အကုန် ရှင်းပစ်လိုက်တာ ရယ်၊ error နဲ့ result မရှိတာ ရယ်။

**[EN] As seen in**
- Gmail — a fresh inbox's empty areas still guide you, and search with no matches suggests fixes instead of a dead end.
- Dropbox — empty folders show the upload action and what the folder is for, turning a blank space into a first step.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Gmail — inbox အသစ်ရဲ့ နေရာ အလွတ်တွေကလည်း လမ်းပြတယ်။ Search မှာ match မရှိရင် လမ်းပိတ် မပြဘူး။ ပြင်ဖို့ အကြံပေးတယ်။
- Dropbox — folder အလွတ်တွေမှာ upload လုပ်ဖို့ action နဲ့ folder ရဲ့ အသုံးကို ပြတယ်။ နေရာ အလွတ်က ပထမ အဆင့် ဖြစ်သွားတယ်။

---

## 5. Error Messages Cheatsheet

**[EN] What it is**
An error message is a tiny conversation at the user's worst moment. They did something, it failed, and now they are annoyed. The message has three jobs: say what happened, say why, and say what to do next. Most messages only do the first, in words nobody understands.

**[MY] ဘာလဲ**
Error message ဆိုတာ user အတွက် အဆိုးဆုံး အချိန်မှာ ပြောတဲ့ စကား သေးသေးလေးပဲ။ သူ တစ်ခုခု လုပ်တယ်။ မအောင်ဘူး။ အခု စိတ်တိုနေပြီ။ Message က အလုပ် သုံးခု လုပ်ရမယ်။ ဘာဖြစ်သွားလဲ ပြောရမယ်။ ဘာလို့ လဲ ပြောရမယ်။ နောက် ဘာဆက်လုပ်ရမလဲ ပြောရမယ်။ Message အများစုက ပထမ တစ်ခုပဲ လုပ်တယ်။ အဲဒါလည်း ဘယ်သူမှ နားမလည်တဲ့ စကားနဲ့။

**[EN] The rules**
- Write like a person, not a system. "That password is too short" beats "Error 402: invalid input".
- Put the message next to the problem, in the flow, not in a box at the top of the page.
- Say how to fix it, not just that it is wrong. Offer the fix as an action when you can.
- Never blame the user. "We could not save that" lands softer than "You failed to save".
- Keep what they typed. Re-typing is the punishment that makes people quit.
- Use colour plus words. Red alone fails colour-blind users and anyone in bright sunlight.
- Be specific about numbers: "8 characters or more", not "password is weak".

**[MY] စည်းမျဉ်းတွေ**
- System လို မရေးပါနဲ့။ လူလို ရေးပါ။ "Error 402: invalid input" ထက် "password က တိုလွန်းတယ်" က ပိုကောင်းတယ်။
- Message ကို ပြဿနာ ရှိတဲ့ နေရာ ဘေးမှာပဲ ထားပါ။ Page အပေါ်ဆုံးက box ထဲမှာ မဟုတ်ဘူး။
- မှားတယ် လို့ပဲ မပြောပါနဲ့။ ဘယ်လို ပြင်ရမလဲ ပြောပါ။ ရရင် ပြင်ဖို့ action ကိုပါ ထည့်ပေးပါ။
- User ကို အပြစ် မတင်ပါနဲ့။ "သိမ်းလို့ မရဘူး" က "မင်း သိမ်းတာ မအောင်ဘူး" ထက် ပို နူးညံ့တယ်။
- သူတို့ ရိုက်ထားတာ ထားပေးပါ။ ပြန် ရိုက်ခိုင်းတာက လူ ထွက်သွားအောင် လုပ်တဲ့ ပြစ်ဒဏ်ပဲ။
- အရောင် နဲ့ စာ နှစ်ခု စလုံး သုံးပါ။ အနီရောင် တစ်ခုတည်းက အရောင် မခွဲတတ်တဲ့ user တွေ အတွက် အဆင်မပြေဘူး။
- နံပါတ်နဲ့ တိတိကျကျ ပြောပါ။ "password အားနည်းတယ်" မဟုတ်ဘူး။ "အက္ခရာ ၈ လုံး နဲ့ အထက်" ပဲ။

**[EN] As seen in**
- Google sign-in — wrong password messages tell you the field, what was wrong, and offer the recovery link on the spot.
- Mailchimp — its famous error and empty-state copy explains the fix in friendly plain words, right where the mistake is.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Google sign-in — password မှားရင် ဘယ် field လဲ၊ ဘာမှားလဲ ပြောတယ်။ Recovery link ကိုလည်း အဲဒီ နေရာမှာပဲ ပေးတယ်။
- Mailchimp — သူတို့ရဲ့ error စာသားတွေက နာမည်ကြီးတယ်။ ပြင်နည်းကို နားလည်လွယ်တဲ့ စကားနဲ့ မှားတဲ့ နေရာမှာပဲ ရှင်းပြတယ်။

---

## 6. Buttons & CTA Cheatsheet

**[EN] What it is**
A call to action is the one button that carries the page's goal: buy, sign up, send, save. Every screen has a loudest action whether you choose it or not. This sheet is about choosing it on purpose.

**[MY] ဘာလဲ**
Call to action ဆိုတာ page ရဲ့ ရည်မှန်းချက်ကို သယ်တဲ့ button တစ်ခုပဲ။ ဝယ်ဖို့၊ sign up လုပ်ဖို့၊ ပို့ဖို့၊ သိမ်းဖို့ပေါ့။ Screen တိုင်းမှာ အကျယ်ဆုံး action တစ်ခု ရှိတယ်။ မင်း ရွေးလည်း ရှိတယ်။ မရွေးလည်း ရှိတယ်။ ဒီ စာရွက်က အဲဒါကို တမင် ရွေးဖို့ အကြောင်းပဲ။

**[EN] The rules**
- One primary button per screen. Two loud buttons means no loud button.
- Write what happens, not what it is. "Create my account" beats "Submit".
- Start the label with a verb when you can, and keep it short enough to read in a glance.
- The primary action should look different in colour AND weight, not colour alone.
- Place it where the eye finishes: after the content it acts on, within easy thumb reach on mobile.
- Destructive actions (delete, cancel plan) get quiet styling until the confirm step, then go red and explicit.
- A button must look like a button. If users have to guess what is tappable, the design failed, not the user.

**[MY] စည်းမျဉ်းတွေ**
- တစ်မျက်နှာ primary button တစ်ခု ပဲ ထားပါ။ ကျယ်တဲ့ button နှစ်ခုဆို တစ်ခုမှ မကျယ်တော့ဘူး။
- Button က ဘာလဲ မရေးပါနဲ့။ နှိပ်လိုက်ရင် ဘာဖြစ်မလဲ ရေးပါ။ "Submit" ထက် "Create my account" က ပိုကောင်းတယ်။
- စာသား ကို ကြိယာ နဲ့ စပါ။ ဖြတ်ဖတ်ရုံနဲ့ နားလည်အောင် တိုတို ထားပါ။
- Primary button က အရောင် ရော အလေးချိန် ရော ကွဲရမယ်။ အရောင် တစ်ခုတည်း မဟုတ်ဘူး။
- မျက်လုံး ရောက်တဲ့ နေရာမှာ ထားပါ။ သူ အလုပ်လုပ်မယ့် အကြောင်းအရာ ပြီးတဲ့ နောက်မှာ။ Mobile မှာဆို လက်မ လှမ်းမီတဲ့ နေရာပေါ့။
- ဖျက်တာ၊ plan cancel လုပ်တာ လို action တွေကို အစမှာ တိတ်တိတ် ထားပါ။ Confirm အဆင့်ရောက်မှ အနီရောင် နဲ့ ရှင်းရှင်း ပြပါ။
- Button က button လို မြင်ရရမယ်။ ဘာနှိပ်လို့ ရလဲ ခန့်မှန်းနေရရင် design ကျတာ။ User ကျတာ မဟုတ်ဘူး။

**[EN] As seen in**
- Spotify — one huge green action per screen (Play, or Start free trial) while everything else stays quiet.
- Amazon — the yellow Buy Now and orange Add to Cart are impossible to miss, and every other link on the page is deliberately plain.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Spotify — တစ်မျက်နှာ အစိမ်းရောင် action အကြီးကြီး တစ်ခုပဲ ရှိတယ်။ Play ဒါမှမဟုတ် trial စဖို့ပေါ့။ ကျန်တာ အကုန် တိတ်တိတ် နေတယ်။
- Amazon — အဝါရောင် Buy Now နဲ့ လိမ္မော်ရောင် Add to Cart က လွတ်လို့ မရအောင် ကြီးတယ်။ Page ပေါ်က တခြား link တွေကိုတော့ တမင် ရိုးရိုး ထားထားတယ်။

---

## 7. Search UX Cheatsheet

**[EN] What it is**
Search is where users tell you, in their own words, what they came for. It is also where products lose them quietly: no results, wrong results, no way forward. Good search forgives bad spelling, guesses intent, and always offers a next step.

**[MY] ဘာလဲ**
Search ဆိုတာ user က သူ့ စကားနဲ့ သူ ဘာလိုချင်လဲ ပြောတဲ့ နေရာပဲ။ Product တွေ user ကို တိတ်တိတ် ဆုံးရှုံးတဲ့ နေရာလည်း ဖြစ်တယ်။ Result မရှိတာ၊ result မှားတာ၊ ဆက်သွားစရာ လမ်း မရှိတာပေါ့။ Search ကောင်းကောင်း က စာလုံးပေါင်း မှားတာ ခွင့်လွှတ်တယ်။ ရည်ရွယ်ချက်ကို ခန့်မှန်းတယ်။ နောက် အဆင့် တစ်ခုကို အမြဲ ပေးတယ်။

**[EN] The rules**
- Put search where people expect it: top of the page or app, with a magnifying-glass icon they recognise.
- Show suggestions as they type — real products and popular searches, not just history.
- Forgive typos and close matches silently. Never punish spelling with an empty page.
- Zero results is a design failure, not a user failure: show closest matches and a way to clear or widen.
- On results, let people filter and sort, and remember their filters when they go back.
- Show recent searches on tap, before typing — it saves the thinking, not just the typing.
- Highlight the matched words in results so people can scan why each result is there.

**[MY] စည်းမျဉ်းတွေ**
- Search ကို လူတွေ မျှော်လင့်တဲ့ နေရာမှာ ထားပါ။ Page ဒါမှမဟုတ် app ရဲ့ အပေါ်ပိုင်းမှာ။ မှန်ဘီလူး icon ကိုလည်း လူတွေ သိတဲ့ ပုံစံ ထားပါ။
- စာ ရိုက်နေတုန်း suggestion ပြပါ။ တကယ့် product တွေ နဲ့ လူ ရှာများတာတွေ။ History ပဲ မဟုတ်ဘူး။
- စာလုံးပေါင်း မှားတာ၊ နီးစပ်တာ တွေကို တိတ်တိတ် ခွင့်လွှတ်ပါ။ Page အလွတ်နဲ့ ဘယ်တော့မှ အပြစ် မပေးပါနဲ့။
- Result လုံးဝ မရှိတာက user အပြစ် မဟုတ်ဘူး။ Design အပြစ်ပဲ။ အနီးစပ်ဆုံး ဟာတွေကို ပြပါ။ ရှင်းဖို့၊ ကျယ်ကျယ် ရှာဖို့ လမ်းလည်း ပေးပါ။
- Result ထဲမှာ filter နဲ့ sort လုပ်လို့ ရပါစေ။ User ပြန်လာရင် သူ့ filter တွေကို မှတ်ထားပေးပါ။
- Search ကို နှိပ်လိုက်တာနဲ့ မရိုက်ခင် recent search တွေ ပြပါ။ စာ ရိုက်ရတာ သက်သာတာ မဟုတ်ဘူး။ စဉ်စားရတာ သက်သာတာ။
- Result ထဲမှာ ကိုက်တဲ့ စကားလုံး တွေကို highlight ပြပါ။ ဘာလို့ ဒီ result ပေါ်လာလဲ ဖြတ်ဖတ်ရုံနဲ့ သိရအောင်။

**[EN] As seen in**
- Google — suggestions while you type, silent typo correction ("did you mean"), and related searches when results are thin.
- Airbnb — search forgives vague input: type a city, a vibe, or nothing at all with "I'm flexible" and it still finds a way forward.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Google — စာ ရိုက်နေတုန်း suggestion ပြတယ်။ စာလုံးပေါင်း မှားရင် "did you mean" နဲ့ တိတ်တိတ် ပြင်ပေးတယ်။ Result ပါးရင် ဆိုင်တဲ့ search တွေပါ ပြတယ်။
- Airbnb — search က မရေရာတဲ့ input ကို ခွင့်လွှတ်တယ်။ မြို့ ရိုက်ရိုက်၊ ခံစားချက် ရိုက်ရိုက်၊ "I'm flexible" နဲ့ ဘာမှ မရိုက်ဘဲ ထားထား၊ ဆက်သွားလို့ ရတဲ့ လမ်း ရှာပေးတယ်။

---

## 8. Mobile Navigation Cheatsheet

**[EN] What it is**
Navigation answers three questions at all times: where am I, where can I go, how do I get back. On mobile the screen is small, the thumb is the mouse, and people are usually walking, eating, or half-watching something else while they use it.

**[MY] ဘာလဲ**
Navigation က မေးခွန်း သုံးခုကို အမြဲ ဖြေတယ်။ ငါ ဘယ်မှာ ရောက်နေလဲ။ ဘယ်တွေ သွားလို့ ရလဲ။ ဘယ်လို ပြန်သွားရမလဲ ဆိုတာပဲ။ Mobile မှာ screen က သေးတယ်။ လက်မက mouse ပဲ။ လူတွေက လမ်းလျှောက်ရင်း၊ စားရင်း၊ တခြားဟာ တစ်ဝက် ကြည့်ရင်းနဲ့ သုံးနေတတ်တယ်။

**[EN] The rules**
- Bottom tab bar for the 3–5 main sections. Thumbs reach bottom; menus at the top cost effort.
- Never hide the main navigation behind a hamburger if the sections fit in a tab bar.
- A tab's icon needs a label. Icons alone force guessing, and guessed icons get forgotten.
- Highlight the current tab clearly — colour, weight, or fill — so "where am I" is answered for free.
- Back must always go back one step, in the app, predictably. Surprising the back button is unforgivable.
- Keep navigation identical across screens. Moving targets destroy the mental map.
- Anything used every session (home, search, cart, profile) gets a permanent spot, never a submenu.

**[MY] စည်းမျဉ်းတွေ**
- အဓိက section ၃ ခု ကနေ ၅ ခု အတွက် bottom tab bar သုံးပါ။ လက်မက အောက်ကို ရောက်တယ်။ အပေါ်က menu က ပင်ပန်းတယ်။
- Section တွေက tab bar ထဲ ဆန့်ရင် အဓိက navigation ကို hamburger နောက်မှာ ဘယ်တော့မှ မဝှက်ပါနဲ့။
- Tab icon မှာ စာသား label ပါရမယ်။ Icon ချည်းပဲဆို ခန့်မှန်းရတယ်။ ခန့်မှန်းတဲ့ icon ကို မေ့သွားတယ်။
- လက်ရှိ tab ကို ရှင်းရှင်း highlight ပြပါ။ အရောင်၊ အလေးချိန်၊ fill တစ်ခုခု နဲ့ပေါ့။ "ငါ ဘယ်မှာလဲ" ဆိုတဲ့ အဖြေ အလကား ရအောင်။
- Back က app ထဲမှာ တစ်ဆင့် အမြဲ ပြန်သွားရမယ်။ ခန့်မှန်းလို့ ရတဲ့ ပုံစံပဲ။ Back button ကို အံ့အား သင့်အောင် လုပ်တာက ခွင့်မလွှတ်နိုင်တဲ့ အပြစ်ပဲ။
- Navigation ကို screen တိုင်းမှာ အတူတူ ထားပါ။ နေရာ ရွေ့နေတဲ့ ဟာတွေက ခေါင်းထဲက မြေပုံကို ဖျက်တယ်။
- တစ်ခါ သုံးတိုင်း လိုတဲ့ ဟာတွေ (home, search, cart, profile) ကို အမြဲတမ်း နေရာ ပေးပါ။ Submenu ထဲ ဘယ်တော့မှ မထည့်ပါနဲ့။

**[EN] As seen in**
- Instagram — five tabs at the bottom with the same layout for a decade; users navigate without ever thinking about it.
- YouTube app — bottom tabs plus a persistent search icon at the top; the two things people do most are always one tap away.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Instagram — အောက်မှာ tab ၅ ခု ဆယ်နှစ်လောက် ပုံစံ အတူတူပဲ။ User တွေက ဘာမှ မစဉ်းစားဘဲ သွားလာနေတယ်။
- YouTube app — အောက်မှာ tab တွေရယ်၊ အပေါ်မှာ အမြဲရှိတဲ့ search icon ရယ်။ လူတွေ အများဆုံး လုပ်တဲ့ နှစ်ခုက အမြဲ တစ်ချက် နှိပ်စာပဲ။

---

## 9. Loading & Waiting Cheatsheet

**[EN] What it is**
Waiting is part of every product. The wait itself rarely kills the experience; the uncertainty does. People accept a known wait far better than a shorter unknown one, because a frozen screen whispers "it broke, and it is your fault for trusting it".

**[MY] ဘာလဲ**
စောင့်ရတာက product တိုင်းရဲ့ အပိုင်း တစ်ခုပဲ။ စောင့်ရတဲ့ အချိန် က experience ကို သတ်တာ ရှားတယ်။ မသေချာတာက သတ်တာ။ ရှည်ပေမဲ့ သိရတဲ့ စောင့်ချိန်ကို လူတွေက ပိုခံနိုင်တယ်။ တိုပေမဲ့ မသိရတဲ့ စောင့်ချိန်ထက်ပေါ့။ ရပ်နေတဲ့ screen က "ပျက်သွားပြီ၊ မင်း ယုံမိတာ မင်းအပြစ်" လို့ တိုးတိုး ပြောနေလို့ပဲ။

**[EN] The rules**
- Under about 400ms, show nothing. A spinner that flashes for an instant just adds noise.
- Beyond a second, show something moving: a spinner for short waits, a progress bar when you can measure.
- For content, use skeleton screens — grey shapes in the layout of what's coming feel faster than a spinner on a blank page.
- Give long waits a number or a stage ("step 2 of 3"), and write cancel or back options into every wait.
- Never let a wait end in a surprise failure with no explanation. The error after a long wait is the peak people remember.
- Fill unavoidable waits with value: tips, previews, or the next useful thing to read.
- Optimistic UI: show the like, the save, the message as done instantly and fix it quietly if the server says no.

**[MY] စည်းမျဉ်းတွေ**
- 400ms အောက်ဆို ဘာမှ မပြပါနဲ့။ တစ်ခန ပေါ်ပြီး ပျောက်တဲ့ spinner က ဆူညံသံပဲ ပိုတယ်။
- တစ်စက္ကန့် ကျော်ရင် ရွေ့နေတာတစ်ခု ပြပါ။ ခဏဆို spinner၊ တိုင်းလို့ ရရင် progress bar ပေါ့။
- Content အတွက် skeleton screen သုံးပါ။ လာမယ့် ပုံစံ အတိုင်း မီးခိုးရောင် ပုံသဏ္ဌာန်တွေက page အလွတ်ပေါ်က spinner ထက် ပို မြန်တယ် ခံစားရတယ်။
- ကြာတဲ့ စောင့်ချိန်မှာ နံပါတ် ဒါမှမဟုတ် အဆင့် ပြပါ။ "step 2 of 3" လိုမျိုး။ စောင့်ချိန်တိုင်းမှာ cancel ဒါမှမဟုတ် back ရွေးစရာ ထည့်ထားပါ။
- စောင့်ပြီးမှ ဘာရှင်းပြချက်မှ မရှိဘဲ ရုတ်တရက် fail သွားတာမျိုး ဘယ်တော့မှ မဖြစ်ပါစေနဲ့။ အကြာကြီး စောင့်ပြီးမှ လာတဲ့ error က လူတွေ မှတ်မိတဲ့ peak ပဲ။
- ရှောင်လို့ မရတဲ့ စောင့်ချိန်ကို အကျိုးရှိတာနဲ့ ဖြည့်ပါ။ Tip တွေ၊ preview တွေ၊ ဖတ်စရာ အသုံးဝင်တာတွေပေါ့။
- Optimistic UI သုံးပါ။ Like, save, message တွေကို တန်း ပြီးသလို ပြပါ။ Server က မရဘူး ဆိုမှ တိတ်တိတ် ပြန်ပြင်ပါ။

**[EN] As seen in**
- Facebook and LinkedIn — skeleton posts in the exact shape of the feed while content loads, so the page feels alive immediately.
- Google Chrome — the dinosaur game turns a dead connection wait into something people almost enjoy.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Facebook နဲ့ LinkedIn — content load နေတုန်း feed ပုံစံအတိုင်း skeleton post တွေ ပြတယ်။ Page က တန်း အသက်ဝင်တယ် ခံစားရတယ်။
- Google Chrome — dinosaur game က internet ပြတ်တဲ့ စောင့်ချိန်ကို လူတွေ နည်းပါး ပျော်သွားတဲ့ အရာအဖြစ် ပြောင်းပစ်တယ်။

---

## 10. Pricing Page Cheatsheet

**[EN] What it is**
A pricing page is where interest turns into a decision, and decisions are scary. People arrive with one question — "what do I get, and what does it really cost me" — and leave the moment the page makes them do maths, hunt for totals, or fear a trap.

**[MY] ဘာလဲ**
Pricing page ဆိုတာ စိတ်ဝင်စားမှုက ဆုံးဖြတ်ချက် ဖြစ်သွားတဲ့ နေရာပဲ။ ဆုံးဖြတ်ချက်က ကြောက်စရာ ကောင်းတယ်။ လူတွေ ရောက်လာတာ မေးခွန်း တစ်ခုနဲ့။ "ငါ ဘာရမလဲ၊ တကယ် ဘယ်လောက် ကုန်မှာလဲ" ဆိုတာပဲ။ Page က သူတို့ကို ဂဏန်း တွက်ခိုင်းတဲ့ အချိန်၊ စုစုပေါင်း လိုက်ရှာခိုင်းတဲ့ အချိန်၊ ထောင်ချောက် ကြောက်ရတဲ့ အချိန်မှာ သူတို့ ထွက်သွားတယ်။

**[EN] The rules**
- Show the real total early. Fees that appear at the last step are the top reason people abandon checkout.
- Make one plan the obvious default: highlight it, label it "most popular" only if it truly is.
- Compare plans by differences people care about, not by a 30-row feature matrix nobody reads.
- Monthly/yearly toggle must show the price change honestly — show the per-month price for both.
- Free trial terms in plain sight: when it ends, what it costs after, how to cancel.
- Answer the fear questions on the page: refunds, cancel anytime, what happens to my data.
- Keep the checkout that follows as short as the pricing page promised. A surprise long form after "simple pricing" breaks trust instantly.

**[MY] စည်းမျဉ်းတွေ**
- တကယ့် စုစုပေါင်းကို စောစော ပြပါ။ နောက်ဆုံး အဆင့်ရောက်မှ ပေါ်တဲ့ fee တွေက လူတွေ checkout ကို စွန့်သွားတဲ့ အကြီးဆုံး အကြောင်းပဲ။
- Plan တစ်ခုကို ရှင်းရှင်း default ဖြစ်အောင် လုပ်ပါ။ Highlight ပြပါ။ တကယ် လူ ရွေးအများဆုံး မဟုတ်ဘဲ "most popular" လို့ မတပ်ပါနဲ့။
- Plan တွေကို လူတွေ ဂရုစိုက်တဲ့ ကွာခြားချက်နဲ့ ယှဉ်ပြပါ။ ဘယ်သူမှ မဖတ်တဲ့ feature အတန်း ၃၀ စာရင်းနဲ့ မဟုတ်ဘူး။
- Monthly, yearly toggle က ဈေး အပြောင်းကို ရိုးရိုး ပြရမယ်။ နှစ်ခုလုံးမှာ တစ်လ ဘယ်လောက်လဲ ပြပါ။
- Free trial စည်းကမ်းကို ထင်ထင်ရှားရှား ပြပါ။ ဘယ်တော့ ကုန်မလဲ၊ ပြီးရင် ဘယ်လောက် လဲ၊ ဘယ်လို cancel လုပ်ရမလဲ။
- ကြောက်တဲ့ မေးခွန်းတွေကို page ပေါ်မှာပဲ ဖြေပါ။ Refund ရမလား၊ အချိန်မရွေး cancel ရမလား၊ ငါ့ data ဘာဖြစ်သွားမလဲ။
- နောက် လိုက်လာမယ့် checkout က pricing page က ဂတိပေးတဲ့ အတိုင်း တိုပါစေ။ "ရိုးရှင်းတဲ့ ဈေး" ရဲ့ နောက်မှာ form အရှည်ကြီး ရုတ်တရက် လာရင် trust က တန်း ပျက်တယ်။

**[EN] As seen in**
- Spotify Premium — plans sit side by side with the differences in a few lines, and the trial terms (when billing starts) sit right under the button.
- Notion — pricing compares plans with short plain-English rows and a clear per-person price, so the maths is already done for you.

**[MY] ဘယ်မှာ မြင်ရလဲ**
- Spotify Premium — plan တွေ ဘေးချင်းကပ် ရှိတယ်။ ကွာခြားချက်က စာကြောင်း နည်းနည်း ပဲ။ Trial စည်းကမ်း၊ ဘယ်တော့ ပိုက်ဆံ စဖြတ်မလဲ ဆိုတာက button အောက်မှာ တန်း ရှိတယ်။
- Notion — pricing က plan တွေကို နားလည်လွယ်တဲ့ အတန်း တိုတိုတွေနဲ့ ယှဉ်ပြတယ်။ တစ်ယောက် ဘယ်လောက်လဲ ရှင်းရှင်းပဲ။ ဂဏန်း တွက်ဖို့ မလိုတော့ဘူး။
