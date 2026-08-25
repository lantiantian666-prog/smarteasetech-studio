import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// ==========================================
// 独立博客页面数据与内容 (共 12 篇)
// ==========================================
const ARTICLES_CONTENT = [
  // ---------------------------------------------------------
  // 宠物分类 (Pet Care)
  // ---------------------------------------------------------
  {
    id: "how-much-to-feed-dog-cat",
    category: "pet",
    title: "How Much Should You Feed Your Dog or Cat? The Science Behind Daily Calorie Needs",
    subtitle: "Learn the veterinary formula used to calculate how much to feed a dog or cat each day, based on weight, life stage, and activity level — with real examples.",
    date: "August 2026",
    readTime: "7 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>If you&apos;ve ever stood in front of the pet food aisle wondering whether the feeding chart on the bag is actually right for your dog or cat, you&apos;re not alone. Those charts are generic — they assume an &quot;average&quot; pet of a given weight, and real pets are rarely average. A neutered, sedentary 10-year-old cat and an intact, highly active 2-year-old cat of the exact same weight can have calorie needs that differ by more than 50%.</p>
        <p>The good news is that veterinary nutrition already has a well-established formula for figuring this out precisely. It&apos;s not a secret — it&apos;s published, peer-reviewed math that any pet owner can use.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Step 1: Resting Energy Requirement (RER)</h3>
        <p>Every calculation starts with RER — the number of calories your pet&apos;s body burns just to stay alive at rest, with no activity at all.</p>
        <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-emerald-400 font-mono text-sm my-4">
          RER = 70 × (body weight in kg) ^ 0.75
        </div>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Step 2: Daily Energy Requirement (DER)</h3>
        <p>RER is just the baseline. Your pet also moves, digests food, regulates body temperature, and has additional metabolic demands. To get the real number, RER is multiplied by a factor that reflects life stage and activity:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Neutered adult, sedentary:</strong> ~1.4–1.6× (dog), ~1.0–1.2× (cat)</li>
          <li><strong>Intact adult, moderately active:</strong> ~1.6–1.8× (dog), ~1.2–1.4× (cat)</li>
          <li><strong>Highly active / working animal:</strong> ~2.0–3.0× (dog), ~1.4–1.6× (cat)</li>
          <li><strong>Growing puppy/kitten:</strong> ~2.0–2.5× (tapering as they approach adult weight)</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Step 3: Adjust for Body Condition, Not Just the Number on the Scale</h3>
        <p>Weight alone doesn&apos;t tell you whether a pet is at a healthy body condition. Two dogs at 20 kg can be very differently proportioned. If a pet is scored above the ideal range on the 9-point Body Condition Score (BCS), the calculation should be anchored to their <em>estimated ideal weight</em>, not their current weight.</p>

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">The Bottom Line</h3>
          <p>&quot;How much should I feed my dog/cat&quot; doesn&apos;t have a single universal answer, but it does have a precise, individualized one. Skipping the generic bag chart in favor of the actual formula is one of the simplest things you can do for a pet&apos;s health.</p>
        </div>
      </div>
    )
  },
  {
    id: "foods-toxic-to-dogs-and-cats",
    category: "pet",
    title: "25 Common Human Foods That Are Toxic to Dogs and Cats",
    subtitle: "A practical, veterinarian-reviewed-style guide to everyday foods that are dangerous for dogs and cats — from chocolate and grapes to xylitol — plus what to do in an emergency.",
    date: "August 2026",
    readTime: "8 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Most pet poisoning cases don&apos;t involve anything exotic — they involve food that was already sitting in the kitchen. Because dogs and cats metabolize certain compounds completely differently than humans do, foods that are perfectly fine for us can range from mildly upsetting to life-threatening for them.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Foods That Are Dangerous for Both Dogs and Cats</h3>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Chocolate:</strong> Contains theobromine and caffeine. Darker chocolate is more dangerous. Symptoms include vomiting, restlessness, and tremors.</li>
          <li><strong>Grapes and Raisins:</strong> Can cause acute kidney failure in dogs, even in small amounts. Cats are not considered safe either.</li>
          <li><strong>Onions, Garlic, Chives (Allium family):</strong> Damage red blood cells. Risk applies to raw, cooked, powdered, and dehydrated forms alike.</li>
          <li><strong>Xylitol:</strong> An artificial sweetener that triggers a dangerous insulin spike leading to hypoglycemia, and at higher doses, liver failure in dogs.</li>
          <li><strong>Alcohol & Caffeine:</strong> Affect the nervous system and can cause respiratory depression.</li>
          <li><strong>Macadamia Nuts:</strong> A dog-specific toxin causing weakness and tremors.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Foods That Are Risky Mainly Because of How They&apos;re Prepared</h3>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Cooked Bones:</strong> Cooking makes bones brittle and prone to splintering.</li>
          <li><strong>Fatty Table Scraps:</strong> A common trigger for pancreatitis.</li>
          <li><strong>Avocado:</strong> The pit is a choking hazard, and the skin contains persin.</li>
        </ul>

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">What To Do in an Emergency</h3>
          <p>Don&apos;t wait for symptoms to appear before acting. Note what was eaten, roughly how much, and when. Contact your veterinarian or an animal poison control hotline immediately rather than searching for home remedies.</p>
        </div>
      </div>
    )
  },
  {
    id: "body-condition-score-guide",
    category: "pet",
    title: "Is Your Dog or Cat Overweight? How to Read the 9-Point Body Condition Score",
    subtitle: "A step-by-step guide to the 9-point Body Condition Score (BCS) used to assess whether a dog or cat is underweight, ideal, or overweight.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>The bathroom scale tells you one number. It doesn&apos;t tell you whether that number represents a lean, muscular animal or one that&apos;s carrying excess fat. Two dogs of the exact same breed and weight can have completely different body compositions.</p>
        <p>Veterinary professionals use a <strong>Body Condition Score (BCS)</strong>, a standardized 9-point scale that combines a visual check and a hands-on feel to assess body fat directly.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">The Three Checks That Make Up a BCS Assessment</h3>
        
        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">1. The Rib Check</h4>
        <p>Run your flat hand gently along your pet&apos;s side. Ideally, you can feel each rib individually with slight pressure, but they aren&apos;t visibly sticking out.</p>

        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">2. The Waist Check (Viewed From Above)</h4>
        <p>Ideally, there&apos;s a visible &quot;waist&quot; — a noticeable narrowing behind the ribcage before the hips.</p>

        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">3. The Abdominal Tuck Check (Viewed From the Side)</h4>
        <p>Ideally, there&apos;s a clear upward tuck where the belly rises from the chest toward the hind legs.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why BCS Matters More Than the Number on the Scale</h3>
        <p>If a pet is overweight, the daily calorie target should be calculated from their <em>estimated ideal weight</em>, not their current weight. Using current weight just calculates enough food to maintain the excess.</p>

        <div className="border-t border-white/10 mt-10 pt-8">
          <p className="text-sm text-white/40 italic">This article is for general educational purposes and reflects a widely used body condition assessment standard.</p>
        </div>
      </div>
    )
  },
  {
    id: "puppy-kitten-growth-chart-by-breed",
    category: "pet",
    title: "Puppy and Kitten Growth Charts by Breed — Is My Pet Growing at a Healthy Rate?",
    subtitle: "Learn why puppy and kitten growth should be tracked against breed-specific percentile curves instead of generic weight charts.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>New puppy and kitten owners ask the same question constantly: &quot;Is my pet&apos;s weight normal for their age?&quot; A single generic growth chart can&apos;t tell you — because a healthy growth curve depends heavily on breed.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why &quot;Average&quot; Growth Charts Fall Short</h3>
        <p>The more useful approach is to track a puppy or kitten&apos;s weight against a <strong>breed-specific percentile curve</strong>. Instead of one line, you get a band: is this individual tracking along the 50th percentile for their breed, or falling behind?</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Large and Giant Breed Puppies Need Extra Care</h3>
        <p>Large and giant breed dogs are especially vulnerable to developmental orthopedic disease (DOD) linked to growing <em>too fast</em>. Overfeeding a large-breed puppy can actively work against healthy skeletal development. Their feeding recommendations should be <strong>capped rather than scaled linearly</strong> with weight.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What to Actually Track</h3>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Regular weigh-ins</strong> — every one to two weeks during the fastest growth period.</li>
          <li><strong>A breed-appropriate reference curve.</strong></li>
          <li><strong>Trend, not a single data point</strong> — one weigh-in tells you very little; the overall trajectory is what matters.</li>
        </ul>
      </div>
    )
  },
  {
    id: "safe-weight-loss-rate-dogs-cats",
    category: "pet",
    title: "Safe Weight Loss for Dogs and Cats — How Fast Is Too Fast?",
    subtitle: "How quickly should an overweight dog or cat safely lose weight? A guide to weight-loss rate guidelines.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Putting an overweight dog or cat on a diet sounds simple: feed less, wait for the weight to come off. In practice, <em>how fast</em> that weight comes off matters just as much as whether it comes off at all.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Weight-Loss Speed Is a Safety Issue</h3>
        <p>For dogs, weight loss that happens too fast usually means the diet is too aggressive to sustain. Guidelines generally recommend a target loss rate of roughly <strong>1–2% of body weight per week</strong> for dogs.</p>
        <p>For cats, the stakes are higher. A cat that loses weight too quickly is at real risk of developing <strong>feline hepatic lipidosis</strong> (&quot;fatty liver disease&quot;). This is why cat diets must be extremely conservative and closely monitored.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What a Safe Weight-Loss Plan Actually Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li>Calculate calories based on estimated ideal weight, not current weight.</li>
          <li>Set a gradual, capped weekly loss rate.</li>
          <li>Ensure regular re-weighing (typically every one to two weeks).</li>
          <li>Continuously monitor appetite and eating behavior, especially in cats.</li>
        </ul>
      </div>
    )
  },
  {
    id: "mixed-raw-diet-calorie-calculator",
    category: "pet",
    title: "How to Calculate Calories for Mixed, Raw, and Multi-Food Diets",
    subtitle: "Feeding your dog or cat a mix of kibble, wet food, and raw? Here's how to correctly split daily calories across multiple foods.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>A growing number of pet owners mix dry kibble with wet food, add a raw component, or rotate between a few different brands. It makes the math significantly more complicated than &quot;follow the feeding chart on the bag.&quot;</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">The Correct Approach: Total Calories First, Then Split</h3>
        <p>The right way to build a mixed-diet feeding plan works in the opposite direction from &quot;how much of each food should I scoop&quot;:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Calculate the pet&apos;s total daily calorie need first</strong>.</li>
          <li><strong>Decide what share of that total each food should provide</strong> (e.g., 70% from kibble and 30% from wet food).</li>
          <li><strong>Convert each food&apos;s calorie share into grams</strong>, using that specific food&apos;s own calorie-per-100g figure.</li>
          <li><strong>Add it all up and check it against the total.</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Raw Feeding Has an Extra Safety Consideration</h3>
        <p>If raw food is part of the mix, it is generally kept as its own separate meal, not physically mixed with cooked or dry food in the same bowl at the same time to minimize cross-contamination risk.</p>
      </div>
    )
  },

  // ---------------------------------------------------------
  // 祷告分类 (Prayer & Faith)
  // ---------------------------------------------------------
  {
    id: "how-to-start-a-prayer-journal",
    category: "prayer",
    title: "How to Start a Prayer Journal: A Simple Guide for Beginners",
    subtitle: "A practical, no-pressure guide to starting a prayer journal — what to write, how often, and why it deepens your prayer life.",
    date: "August 2026",
    readTime: "5 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>If you&apos;ve ever finished praying and immediately forgotten half of what you prayed for, you&apos;re not alone. Our minds are busy, our days are full, and prayer requests have a way of slipping through the cracks — especially when you&apos;re praying for more than just yourself.</p>
        <p>A prayer journal solves that problem. It&apos;s simply a written (or digital) record of who and what you&apos;re praying for, so you can pray with focus instead of trying to hold everything in your head.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What to Include in a Prayer Journal</h3>
        <ul className="list-disc pl-5 space-y-4 text-white/70">
          <li><strong>Who you&apos;re praying for.</strong> This can be yourself, family members, friends, your church, missionaries, or coworkers.</li>
          <li><strong>What you&apos;re praying about.</strong> Be specific. Instead of &quot;pray for Mom,&quot; write &quot;pray for Mom&apos;s upcoming surgery and for peace during recovery.&quot;</li>
          <li><strong>When it was answered.</strong> This is the part most people skip, and it&apos;s the part that matters most long-term.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Paper Journal vs. Digital Prayer Journal</h3>
        <p>Both approaches work, and the best one is whichever you&apos;ll actually stick with.</p>
        <p>A digital prayer journal makes it much easier to keep requests organized by person, search back through history, and set reminders so you don&apos;t forget to keep praying for something over time.</p>
      </div>
    )
  },
  {
    id: "bible-verses-for-anxiety",
    category: "prayer",
    title: "Bible Verses for Anxiety: 20 Scriptures to Calm a Worried Heart",
    subtitle: "Twenty comforting Bible verses for anxiety and worry, with context and guidance on how to pray through them when your mind won't settle.",
    date: "August 2026",
    readTime: "7 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Anxiety doesn&apos;t always announce itself politely. Sometimes it shows up as racing thoughts at 2 a.m., a tight chest before a hard conversation, or a low hum of worry that never fully goes away. Scripture has a long history of meeting people exactly where they are, worry and all.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Verses About God&apos;s Presence in Anxiety</h3>
        <ul className="list-none space-y-4 text-white/70">
          <li><strong>Philippians 4:6-7</strong> — &quot;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds.&quot;</li>
          <li><strong>Isaiah 41:10</strong> — &quot;So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.&quot;</li>
          <li><strong>Psalm 34:4</strong> — &quot;I sought the Lord, and he answered me; he delivered me from all my fears.&quot;</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">How to Actually Pray These Verses (Not Just Read Them)</h3>
        <p>Reading a verse and praying it are two different things. A simple way to turn Scripture into prayer is to personalize it — put your own name and situation into the words.</p>
        <p>For example, take Philippians 4:6-7 and pray it directly: &quot;Lord, I don&apos;t want to be anxious about [the specific thing]. I&apos;m bringing this to you right now, with thanks for what you&apos;ve already done. Guard my heart and my mind with your peace, even though I don&apos;t understand how everything will work out.&quot;</p>
      </div>
    )
  },
  {
    id: "prayer-for-someone-who-is-sick",
    category: "prayer",
    title: "How to Pray for Someone Who Is Sick: Scripture-Based Prayers That Help",
    subtitle: "Practical guidance and Bible-based prayers for when someone you love is sick, including what to say when you don't know what to say.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>There&apos;s a particular kind of helplessness that comes with watching someone you care about go through illness. You want to help, but there&apos;s often nothing tangible you can do. Prayer becomes one of the few things within your power, and yet in the moment, it can be surprisingly hard to know what to say.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Start With Honesty, Not Formality</h3>
        <p>You don&apos;t need polished language to pray for someone who is sick. God isn&apos;t waiting for the right words — he&apos;s waiting for you to bring the real ones. If it helps to have a starting structure, consider praying through these four areas:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Physical healing</strong> — for the illness itself, for doctors and treatment.</li>
          <li><strong>Peace and comfort</strong> — for the person to not be overwhelmed by fear or pain.</li>
          <li><strong>Strength for caregivers</strong> — for family members and friends who are supporting them.</li>
          <li><strong>God&apos;s presence</strong> — that they would feel God near them, regardless of the outcome.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Bible Verses to Pray for Physical Healing</h3>
        <p><strong>Jeremiah 17:14</strong> — &quot;Heal me, Lord, and I will be healed; save me and I will be saved, for you are the one I praise.&quot;</p>
        <p>You can pray this directly by name: &quot;Lord, I ask that you would heal [name] and restore them, just as you promise in your Word.&quot;</p>
      </div>
    )
  },
  {
    id: "how-to-organize-a-prayer-list",
    category: "prayer",
    title: "How to Organize a Prayer List So You Actually Use It",
    subtitle: "A step-by-step system for organizing a prayer list by person and category, so nothing important gets forgotten in the busyness of life.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Most people don&apos;t fail at keeping a prayer list because they don&apos;t care enough — they fail because the system is too complicated, too scattered, or too easy to lose track of.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Step 2: Be Specific With Each Request</h3>
        <p>&quot;Pray for my brother&quot; is a fine starting point, but it&apos;s hard to pray meaningfully or notice when it&apos;s answered. Compare it to: &quot;Pray for my brother&apos;s job interview on Thursday, and for confidence going into it.&quot;</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Step 3: Organize by Category, Not Just Alphabetically</h3>
        <p>A prayer list organized only alphabetically by name makes it hard to focus your prayer time. Instead, try organizing by type of need:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li><strong>Health</strong> — physical healing, medical decisions.</li>
          <li><strong>Relationships</strong> — marriages, family tension, friendships.</li>
          <li><strong>Guidance</strong> — decisions, career direction, discernment.</li>
          <li><strong>Provision</strong> — financial needs, employment, housing.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Step 5: Mark What&apos;s Answered</h3>
        <p>When a prayer is answered — fully, partially, or in an unexpected way — mark it. Don&apos;t delete it; archive it somewhere you can look back on. Over months and years, this becomes a record of faithfulness that&apos;s remarkably encouraging.</p>
      </div>
    )
  },
  {
    id: "how-to-track-answered-prayers",
    category: "prayer",
    title: "How to Track Answered Prayers (And Why It Might Change How You Pray)",
    subtitle: "Why keeping a record of answered prayers builds faith over time, and a simple system for tracking them without much effort.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Here&apos;s something that happens to almost everyone who prays regularly: you pray earnestly about something, weeks or months pass, the situation resolves — and you don&apos;t even remember that you&apos;d been praying about it.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why This Actually Matters</h3>
        <p><strong>It builds evidence, not just feelings.</strong> Faith isn&apos;t only a feeling — it&apos;s also built on remembered experience. When you can point to a specific list of 30, 50, or 100 answered prayers from your own life, trust in future prayers becomes less abstract and more grounded.</p>
        <p><strong>It reframes &quot;unanswered&quot; prayers.</strong> Looking back over a tracked list, many people notice that prayers they assumed went unanswered were actually answered differently than expected — not with a &quot;no,&quot; but with a different timeline.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">A Simple System for Tracking Answered Prayers</h3>
        <ul className="list-decimal pl-5 space-y-2 text-white/70">
          <li><strong>Record the original request with a date.</strong></li>
          <li><strong>Note any Scripture connected to it.</strong></li>
          <li><strong>When it&apos;s answered, record the date and what happened.</strong> Be specific: &quot;Jan 20: Dad got the job offer. Answered.&quot;</li>
          <li><strong>Don&apos;t delete answered prayers — archive them.</strong></li>
          <li><strong>Revisit the archive periodically.</strong></li>
        </ul>
      </div>
    )
  },
  {
    id: "is-it-safe-to-use-a-prayer-app",
    category: "prayer",
    title: "Is It Safe to Use a Prayer App? What to Check Before You Trust One With Your Prayers",
    subtitle: "A practical guide to prayer app privacy — what data gets collected, what 'encrypted' actually means, and questions worth asking before you download one.",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Think about what actually goes into a prayer list: the names of people you love, details about someone&apos;s illness, a private doubt about your faith. Prayer content is, almost by definition, some of the most personal information a person writes down anywhere.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Questions Worth Asking Before You Download</h3>
        <ul className="list-disc pl-5 space-y-4 text-white/70">
          <li><strong>Does it require an account?</strong> Requiring an email usually means your data is tied to an identity on a server somewhere.</li>
          <li><strong>Is your data stored locally or in the cloud?</strong> &quot;Local-first&quot; apps keep your information on your device by default.</li>
          <li><strong>Is sensitive content actually encrypted?</strong> True field-level encryption means names and prayer content would be unreadable without the encryption key.</li>
          <li><strong>Does it use ads or trackers?</strong> A completely ad-free app removes the incentive to share user behavior data with third parties.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Good Privacy Actually Looks Like in Practice</h3>
        <p>A prayer app that takes privacy seriously will typically work fully offline, encrypt sensitive fields on your device, have no ad network integrated, and give you a simple way to export your full data or delete it entirely.</p>
      </div>
    )
  }
];

// ==========================================
// 核心逻辑与渲染
// ==========================================
export function generateStaticParams() {
  return ARTICLES_CONTENT.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const article = ARTICLES_CONTENT.find((a) => a.id === resolvedParams.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: `${article.title} | SmartEaseTech Studio`, description: article.subtitle };
}

export default async function BlogPost({ params }: any) {
  const resolvedParams = await params;
  const article = ARTICLES_CONTENT.find((a) => a.id === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // ---------------------------------------------------------
  // 智能 CTA (Call to Action) 下载卡片判断逻辑
  // ---------------------------------------------------------
  const isPet = article.category === "pet";
  
  const ctaAppName = isPet ? "PawOptima Steward" : "Pray Verses";
  const ctaAppSlogan = isPet 
    ? "The complete, science-based feeding and health system for dogs and cats — 100% offline, no subscription." 
    : "The private, offline prayer journal that matches Scripture to what's actually on your heart. 100% free.";
  const ctaAppIcon = isPet ? "/pawoptima-icon.png" : "/prayverses-icon.png";
  const ctaAppLink = isPet ? "https://apps.apple.com/app/id6782809353" : "https://apps.apple.com/app/6788009023";
  const ctaColorTheme = isPet ? "emerald" : "amber";

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-zinc-950">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-12">
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex gap-4 text-xs text-white/40 mb-4">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-emerald-400 font-medium">
            {article.subtitle}
          </p>
        </div>
        
        {/* 正文渲染 */}
        <div className="prose prose-invert max-w-none mb-16">
          {article.content}
        </div>

        {/* --------------------------------------------------------- */}
        {/* 智能下载引导横幅 (Smart App CTA Banner) */}
        {/* --------------------------------------------------------- */}
        <div className={`mt-16 p-8 rounded-3xl border border-${ctaColorTheme}-500/30 bg-white/5 flex flex-col md:flex-row items-center gap-6 justify-between`}>
          <div className="flex items-center gap-6 text-left">
            <Image src={ctaAppIcon} alt={ctaAppName} width={80} height={80} className="rounded-2xl shadow-lg border border-white/10 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{ctaAppName}</h3>
              <p className="text-sm text-white/70 max-w-sm">{ctaAppSlogan}</p>
            </div>
          </div>
          <a 
            href={ctaAppLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`shrink-0 inline-flex items-center gap-3 bg-${ctaColorTheme}-600 hover:bg-${ctaColorTheme}-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300`}
          >
            <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.2 17.9 48.6-.1 90.4-82.5 102.6-119.3-39-19.9-50-46.7-50-81.2zM211 118.8c34.5-38.3 22-81.3 12-96.1-33 1.1-66.5 32.1-66.5 66.2 0 31.8 23.6 57 44.5 57 5.4 0 10.1-.6 10-27.1z"/>
            </svg>
            Download Now
          </a>
        </div>
      </article>

      <footer className="py-10 border-t border-white/10 text-center">
        <div className="mb-4 text-white/40 text-sm">&copy; {new Date().getFullYear()} SmartEaseTech Studio. All rights reserved.</div>
      </footer>
    </main>
  );
}