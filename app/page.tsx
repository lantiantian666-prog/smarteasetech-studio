"use client";


import { useState } from "react";
import Image from "next/image";


// ==========================================
// 三篇科普文章的数据结构（全量原文版，已移除 App 推广，已做防报错转义）
// ==========================================
const ARTICLES = [
  {
    id: "calories",
    title: "How Much Should I Feed My Dog or Cat?",
    subtitle: "A Science-Based Guide to Daily Calories",
    excerpt: "The answer is rarely as simple as reading the feeding chart on a bag of food. Two pets of the same weight may need very different amounts of food.",
    date: "July 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>One of the most common questions every pet owner asks is:</p>
        
        <p className="text-lg text-emerald-400 font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
          &quot;How much should I feed my dog or cat?&quot;
        </p>
        
        <p>The answer is rarely as simple as reading the feeding chart on a bag of food.</p>
        
        <p>Two pets of the same weight may need very different amounts of food depending on their age, activity level, body condition, whether they are neutered, and many other factors. Feeding too much can gradually lead to obesity, while feeding too little may prevent healthy growth or cause nutritional deficiencies.</p>
        
        <p>This guide explains how daily calorie needs are determined, what affects your pet&apos;s energy requirements, and how to calculate a more personalized feeding plan.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Feeding Charts Are Only a Starting Point</h3>
        <p>Most commercial pet foods include feeding recommendations on the package. These charts are designed for a wide range of animals and should be considered general estimates rather than exact recommendations.</p>
        <p>A feeding chart cannot know whether your pet:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Is highly active or mostly indoors</li>
          <li>Has recently been neutered or spayed</li>
          <li>Needs to lose or gain weight</li>
          <li>Is a growing puppy or kitten</li>
          <li>Is pregnant or nursing</li>
          <li>Has a naturally lean or stocky body type</li>
        </ul>
        <p>Because of these differences, two dogs weighing 20 kg (44 lb) may require noticeably different daily calorie intakes.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Determines Daily Calorie Needs?</h3>
        <p>Veterinarians and animal nutritionists typically estimate energy needs using several important factors.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Body Weight</h4>
        <p>Weight is the foundation of every feeding calculation. Larger animals require more calories overall, but calorie needs do not increase in a perfectly straight line as body weight increases. For this reason, professional feeding recommendations are based on metabolic energy requirements rather than simple weight multiplication.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Life Stage</h4>
        <p>Life stage has a major influence on nutrition. For example:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Puppies require extra calories to support healthy growth.</li>
          <li>Large-breed puppies need carefully controlled energy intake to support proper bone development.</li>
          <li>Kittens grow rapidly during their first year and require additional nutrition.</li>
          <li>Healthy adults generally require maintenance calories.</li>
          <li>Senior pets often become less active and may need fewer calories.</li>
        </ul>
        <p>Each stage has unique nutritional needs.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Activity Level</h4>
        <p>An active pet burns significantly more calories than one that spends most of the day resting indoors. Examples include working dogs, sporting dogs, hiking companions, and highly playful young pets. Less active pets usually require fewer calories to maintain a healthy weight.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Body Condition Score (BCS)</h4>
        <p>Body weight alone does not tell the whole story. Veterinarians commonly use the Body Condition Score (BCS) to evaluate whether a pet is underweight, ideal, or overweight.</p>
        <p>When assessing body condition, professionals consider:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Rib coverage</li>
          <li>Waist visibility</li>
          <li>Abdominal tuck</li>
          <li>Overall body fat distribution</li>
        </ul>
        <p>BCS often provides a better picture of healthy weight than the number on a scale alone.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Weight Goals</h4>
        <p>If your pet needs to lose or gain weight, calorie intake should be adjusted gradually. Healthy weight management focuses on slow, sustainable progress, preserving muscle mass, avoiding rapid changes, and regular monitoring. Crash dieting is not recommended for pets.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Dry Food, Wet Food, Raw Diets, and Homemade Meals</h4>
        <p>Different foods contain different calorie densities. For example, dry food generally contains more calories per gram. Wet food contains much more moisture and therefore fewer calories per gram. Raw diets vary depending on ingredients, and homemade recipes can vary considerably.</p>
        <p>This means one measuring cup of one food may provide very different calories than another. Whenever possible, feeding decisions should be based on calories rather than volume alone.</p>


        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Don&apos;t Forget Treats</h4>
        <p>Treats are often overlooked. Many owners carefully measure meals while forgetting snacks throughout the day. Training treats, dental chews, table scraps, and rewards all contribute to daily calorie intake.</p>
        <p>Many veterinary nutrition guidelines recommend keeping treats to approximately 10% or less of total daily calories, unless otherwise advised by your veterinarian.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Monitoring Weight Matters</h3>
        <p>Even the best feeding estimate should be adjusted over time. Regularly tracking your pet&apos;s weight helps answer important questions:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Is your pet gaining weight?</li>
          <li>Is weight remaining stable?</li>
          <li>Is weight loss occurring too quickly?</li>
          <li>Does the feeding plan need adjustment?</li>
        </ul>
        <p>Small changes made early are usually easier than correcting significant weight gain later.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Feeding Is More Than Just Calories</h3>
        <p>Good nutrition is only one part of responsible pet care. Many owners also keep records of water intake, meal history, body weight, stool quality, vaccinations, deworming, medications, and veterinary visits. Keeping everything organized makes long-term health management much easier.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">A Smarter Way to Calculate Daily Portions</h3>
        <p>Instead of relying solely on generalized feeding charts, many pet owners now prefer calculators that consider multiple factors together. A personalized calculator can estimate daily portions using information such as current weight, target weight, species, life stage, activity level, body condition, and food type. This produces a feeding recommendation that is more individualized than a one-size-fits-all chart.</p>


        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>There is no universal answer to the question, &quot;How much should I feed my dog or cat?&quot;</p>
          <p>Healthy feeding depends on multiple factors working together, including weight, age, activity level, body condition, and individual goals. Using a science-based approach—and monitoring your pet&apos;s progress over time—can help support lifelong health.</p>
          <p className="text-sm text-white/50 mt-6">Remember that every pet is unique. Feeding recommendations are intended as general guidance and should not replace professional veterinary advice, especially for pets with medical conditions or special dietary needs.</p>
        </div>
      </div>
    )
  },
  {
    id: "bcs",
    title: "Is My Dog or Cat Overweight?",
    subtitle: "A Complete Guide to Body Condition Score (BCS)",
    excerpt: "Maintaining a healthy body condition is about much more than appearance. It plays an important role in long-term health, mobility, and quality of life.",
    date: "July 2026",
    readTime: "7 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>One of the biggest health challenges facing modern pets is obesity.</p>
        <p>Many owners believe their dog or cat is at a healthy weight simply because they see them every day. In reality, gradual weight gain can be difficult to notice, and many overweight pets appear &quot;normal&quot; to their families.</p>
        <p>Maintaining a healthy body condition is about much more than appearance. It plays an important role in long-term health, mobility, and quality of life.</p>
        <p>This guide explains what Body Condition Score (BCS) is, how to assess your pet at home, and how healthy weight management can support a longer, happier life.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Body Weight Alone Doesn&apos;t Tell the Whole Story</h3>
        <p>Stepping on a scale tells you how much your pet weighs, but it doesn&apos;t tell you whether that weight is healthy. For example:</p>
        <ul className="list-disc pl-5 space-y-2 text-white/70">
          <li>Two Labrador Retrievers may both weigh 30 kg (66 lb), yet one may have an ideal body condition while the other carries excessive body fat.</li>
          <li>Two domestic cats may each weigh 5 kg (11 lb), but their body composition can be very different depending on age, build, and muscle mass.</li>
        </ul>
        <p>This is why veterinarians assess both body weight and Body Condition Score (BCS) together.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Is Body Condition Score (BCS)?</h3>
        <p>Body Condition Score is a practical method used by veterinarians to estimate the amount of body fat a pet carries. Instead of focusing only on the number shown on a scale, BCS evaluates how your pet looks and feels.</p>
        <p>When assessing body condition, professionals look at:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Whether the ribs can be easily felt</li>
          <li>The shape of the waist when viewed from above</li>
          <li>The abdominal tuck when viewed from the side</li>
          <li>Fat deposits around the chest, back, neck, and tail base</li>
          <li>Overall muscle and body shape</li>
        </ul>
        <p>Many veterinary clinics use either a 5-point or 9-point scoring system. Regardless of the scale, the goal is the same: maintaining a healthy balance between being too thin and carrying excess body fat.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Signs Your Pet May Be Overweight</h3>
        <p>While only a veterinarian can make a complete assessment, common signs of excess weight include:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Ribs are difficult to feel under a layer of fat</li>
          <li>Little or no visible waist from above</li>
          <li>A rounded abdomen without a noticeable abdominal tuck</li>
          <li>Fat deposits around the neck or tail base</li>
          <li>Reduced stamina during exercise</li>
          <li>Difficulty jumping, climbing stairs, or playing</li>
          <li>Heavy breathing after mild activity</li>
        </ul>
        <p>Weight gain often happens gradually, making regular checks especially important.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Obesity Matters</h3>
        <p>Excess body fat is associated with a higher risk of many health problems. These may include:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Joint stress and reduced mobility</li>
          <li>Arthritis progression</li>
          <li>Diabetes (especially in cats)</li>
          <li>Heart and respiratory strain</li>
          <li>Reduced exercise tolerance</li>
          <li>Lower quality of life</li>
          <li>Shorter lifespan</li>
        </ul>
        <p>Keeping pets at a healthy body condition can help reduce unnecessary strain on their bodies and support overall well-being.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Causes Weight Gain?</h3>
        <p>Weight gain is usually the result of several factors working together. Common contributors include:</p>
        <ul className="space-y-4 text-white/70">
          <li><strong className="text-emerald-400 font-medium">Overfeeding:</strong> Even small extra portions each day can lead to gradual weight gain over time.</li>
          <li><strong className="text-emerald-400 font-medium">Too Many Treats:</strong> Treats, table scraps, and snacks are often forgotten when estimating daily calorie intake.</li>
          <li><strong className="text-emerald-400 font-medium">Low Activity:</strong> Indoor lifestyles, aging, illness, or reduced exercise can significantly lower daily energy requirements.</li>
          <li><strong className="text-emerald-400 font-medium">Neutering or Spaying:</strong> After neutering or spaying, some pets may require fewer calories while maintaining the same appetite.</li>
          <li><strong className="text-emerald-400 font-medium">Aging:</strong> Older pets generally become less active and may need adjustments to their feeding plan.</li>
        </ul>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Helping Your Pet Lose Weight Safely</h3>
        <p>Healthy weight loss should always be gradual. Rapid calorie restriction can be harmful, particularly for cats, and should never be attempted without professional guidance.</p>
        <p>Safe weight management typically includes measuring food accurately, controlling treat portions, encouraging appropriate daily activity, monitoring body weight regularly, and reassessing progress every few weeks.</p>
        <p>Small, consistent improvements are more sustainable than dramatic changes.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Tracking Progress Over Time</h3>
        <p>Healthy weight management is a long-term process. Helpful records include current weight, target weight, Body Condition Score, daily food intake, activity level, and weekly weight changes.</p>
        <p>Tracking these measurements helps identify trends early and allows feeding plans to be adjusted when needed.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Every Pet Is Different</h3>
        <p>There is no single &quot;perfect weight&quot; that applies to every dog or cat. Healthy body condition depends on many factors, including breed, body frame, age, muscle mass, activity level, and health status.</p>
        <p>Comparing your pet with another animal of the same breed is not always helpful. Individual assessment is far more important.</p>


        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Building Healthy Habits</h3>
          <p>Maintaining a healthy body condition is not about achieving a perfect number on a scale. It is about developing consistent habits that support lifelong health:</p>
          <ul className="list-disc pl-5 space-y-1 text-white/70 mb-6">
            <li>Feed appropriate portions.</li>
            <li>Monitor weight regularly.</li>
            <li>Limit unnecessary treats.</li>
            <li>Encourage daily activity.</li>
            <li>Schedule routine veterinary checkups.</li>
            <li>Keep accurate health records.</li>
          </ul>
          <p>These simple habits can make a meaningful difference over the course of your pet&apos;s life.</p>


          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Final Thoughts</h3>
          <p>A healthy weight is one of the most important foundations of lifelong wellness for both dogs and cats.</p>
          <p>Body Condition Score provides valuable information that body weight alone cannot. By combining regular weight monitoring, appropriate feeding, and consistent activity, pet owners can better support their companion&apos;s long-term health.</p>
          <p className="text-sm text-white/50 mt-6">Remember that every pet is unique. If you are concerned about your pet&apos;s weight, body condition, or nutritional needs, consult your veterinarian for personalized advice. Everyday tracking tools can support your care routine, but they should complement—not replace—professional veterinary guidance.</p>
        </div>
      </div>
    )
  },
  {
    id: "checklist",
    title: "The Complete Pet Health Record Checklist",
    subtitle: "What Every Dog and Cat Owner Should Track",
    excerpt: "Over the years, every pet builds a health history. Keeping these records organized can make everyday care easier and help you quickly find important information.",
    date: "July 2026",
    readTime: "8 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Caring for a dog or cat involves much more than providing food and fresh water.</p>
        <p>Over the years, every pet builds a health history—from vaccinations and deworming to weight changes, medications, and routine checkups. Keeping these records organized can make everyday care easier and help you quickly find important information when you need it.</p>
        <p>Whether you&apos;ve just welcomed a new puppy or kitten or you&apos;ve shared life with your companion for many years, maintaining a complete health record is one of the best habits you can develop.</p>
        <p>This guide explains the essential information every pet owner should keep and why it matters.</p>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Keep a Pet Health Record?</h3>
        <p>Many owners rely on memory for routine care. That may work for a while, but as time passes it becomes easy to forget:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>When was the last vaccine?</li>
          <li>Which medication was prescribed?</li>
          <li>Has your pet been gaining weight?</li>
          <li>When is the next deworming due?</li>
          <li>How long has that allergy been present?</li>
        </ul>
        <p>A well-organized health record provides a clear timeline of your pet&apos;s life and helps ensure routine care isn&apos;t overlooked.</p>


        <div className="space-y-8 mt-10">
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">1. Basic Pet Information</h4>
            <p>Start with the essentials: Name, Species, Breed, Date of birth or estimated age, Sex, Spay or neuter status, Microchip number (if applicable), and Adoption date. Keeping this information together is especially useful during travel, boarding, or veterinary visits.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">2. Body Weight and Growth</h4>
            <p>Weight is one of the simplest indicators of overall health. Regular weight tracking helps you notice gradual changes that may otherwise go unnoticed. For puppies and kittens, growth records help monitor healthy development. For adult pets, weight trends can reveal gradual weight gain, unexpected weight loss, changes related to aging, or recovery after illness.</p>
            <p className="mt-2">A simple chart over time often tells a more complete story than a single measurement.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">3. Feeding History</h4>
            <p>Nutrition plays an important role in lifelong health. Helpful feeding records include: Daily food portions, Food type, Feeding schedule, Treat intake, Changes in diet, and Food allergies or sensitivities. These records can be valuable when discussing nutrition with your veterinarian.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">4. Water Intake</h4>
            <p>Water consumption is easy to overlook, but significant changes may be worth monitoring. A sudden increase or decrease in drinking habits can sometimes accompany changes in health. Recording water intake over time may help identify trends that deserve attention.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">5. Stool and Digestive Health</h4>
            <p>Your pet&apos;s stool can provide useful information about digestive health. Simple observations include Frequency, Consistency, Color, and Unusual changes. Keeping occasional notes may help identify recurring digestive issues or food-related sensitivities.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">6. Vaccination Records</h4>
            <p>Vaccinations are a routine part of preventive care. Keeping an accurate vaccination history helps you remember Vaccine type, Date administered, Booster schedule, and Upcoming due dates. Having these records readily available is often useful for boarding facilities, travel requirements, and veterinary appointments.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">7. Deworming and Parasite Prevention</h4>
            <p>Internal and external parasite prevention should also be recorded. Useful information includes Product used, Administration date, Next scheduled treatment, and Any observed side effects. Consistent records help avoid missed or duplicated treatments.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">8. Medications and Medical Conditions</h4>
            <p>If your pet receives medication, maintaining a complete history is helpful. Include Medication name, Dosage, Start and end dates, Reason for treatment, and Allergic reactions or side effects. This information can be valuable when discussing ongoing care with your veterinarian.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">9. Veterinary Visits</h4>
            <p>Routine veterinary visits create an important medical timeline. Recording appointments allows you to review Physical examinations, Diagnostic tests, Professional recommendations, and Follow-up appointments. Keeping everything together makes future visits more efficient.</p>
          </div>


          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">10. Daily Care Activities</h4>
            <p>Good health involves more than medical treatment. Many owners also keep track of Dental care, Bathing, Nail trimming, Grooming, Ear cleaning, and Exercise. Recording these activities helps establish a consistent care routine.</p>
          </div>
        </div>


        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Digital Records Make Life Easier</h3>
        <p>Paper records can easily become scattered across folders, notebooks, emails, and veterinary invoices. Digital records offer several advantages: Quick searching, Easy updates, Chronological timelines, Reminder notifications, Organized history, and Convenient access whenever needed. Having everything in one place can reduce stress and simplify long-term care.</p>


        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Building a Lifelong Health History</h3>
          <p>Every meal, weight check, vaccination, and routine appointment becomes part of your pet&apos;s story.</p>
          <p>While each record may seem small on its own, together they create a valuable health history that supports better day-to-day care and informed conversations with your veterinarian.</p>
          <p>Developing the habit of recording important events today can make caring for your pet simpler tomorrow.</p>


          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Final Thoughts</h3>
          <p>Keeping a complete pet health record isn&apos;t just about staying organized—it&apos;s about supporting your companion&apos;s lifelong well-being.</p>
          <p>By tracking feeding, weight, vaccinations, medications, routine care, and other important milestones, you&apos;ll always have essential information close at hand.</p>
          <p>Whether you use a notebook or a digital tool, consistent record-keeping can help you provide thoughtful, informed care throughout every stage of your pet&apos;s life.</p>
          <p className="text-sm text-white/50 mt-6">Please remember that health records are intended to support everyday care and organization. They do not replace professional veterinary diagnosis, treatment, or medical advice.</p>
        </div>
      </div>
    )
  }
];


export default function Home() {
  const [activeArticle, setActiveArticle] = useState<typeof ARTICLES[0] | null>(null);


  return (
    <main className="min-h-screen text-white relative overflow-hidden">


      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
      </div>


      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">


          <div className="font-semibold tracking-wide">
            SmartEaseTech Studio
          </div>


          <nav className="flex gap-6 text-sm text-white/60">
            <a href="#app" className="hover:text-white transition-colors">App</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>


        </div>
      </header>


      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-3xl">


          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            SmartEaseTech Studio
          </h1>


          <p className="mt-6 text-white/60 text-lg">
            A Boutique iOS Design & Development Studio
          </p>


          <p className="mt-4 text-white/40 text-sm tracking-wide">
            Privacy-first · Science-based · Long-term design
          </p>


        </div>
      </section>


      {/* APP SECTION */}
      <section id="app" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">


          <h2 className="text-2xl font-semibold">
            Our Featured App
          </h2>


          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5">


            <h3 className="text-3xl font-semibold">
              PawOptima Steward
            </h3>


            <p className="mt-3 text-white/60">
              Science-based Pet Feeding & Health System
            </p>


            <p className="mt-6 text-white/40 text-sm max-w-2xl">
              Calculates precise feeding needs and builds long-term pet health tracking.
            </p>


            {/* =========================
                IMAGES
            ========================= */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">


              {["/1.png", "/9.png", "/10.png"].map((img, index) => (
                <div key={img} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image
                    src={img}
                    width={300}
                    height={600}
                    className="w-full h-auto object-contain block"
                    alt={`PawOptima Steward Interface Screenshot ${index + 1}`}
                  />
                </div>
              ))}


            </div>


            {/* =========================
                APP STORE BUTTON
            ========================= */}
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.02] transition-transform"
              >
                 Download on the App Store
              </a>
            </div>


          </div>
        </div>
      </section>


      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6 border-t border-white/10 text-center">


        <h2 className="text-2xl font-semibold">
          Our Philosophy
        </h2>


        <p className="mt-6 max-w-2xl mx-auto text-white/60 leading-relaxed">
          At SmartEaseTech, we combine scientific research with elegant engineering. Our team is dedicated to building long-term, privacy-first solutions that empower users&apos; daily lives.
        </p>


        <p className="mt-8 text-white/40 text-sm font-medium tracking-widest uppercase">
          Smart · Ease · Simple · Elegant · Safe · Empower
        </p>


      </section>


      {/* INSIGHTS / LIBRARY SECTION */}
      <section id="insights" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl font-semibold">Insights & Guides</h2>
            <p className="mt-2 text-white/50 text-sm">Explore our scientific resources on pet nutrition, body evaluation, and systemic record-keeping.</p>
          </div>


          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <div 
                key={article.id}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.07] transition-all group cursor-pointer"
                onClick={() => setActiveArticle(article)}
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-white/40 mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 mb-4">{article.subtitle}</p>
                  <p className="text-sm text-white/40 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                
                <button 
                  className="mt-6 text-xs text-white/60 group-hover:text-white font-medium flex items-center gap-1 transition-colors self-start"
                >
                  Read Full Article &rarr;
                </button>
              </div>
            ))}
          </div>


        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">


        <h2 className="text-3xl font-semibold">
          Get in Touch
        </h2>


        <p className="mt-6">
          <a 
            href="mailto:SmartEaseTechStudio@hotmail.com" 
            className="text-white/60 hover:text-white transition-colors text-lg"
          >
            SmartEaseTechStudio@hotmail.com
          </a>
        </p>


      </section>


      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center">


        <div className="mb-4 text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Minghua Li. All rights reserved.
        </div>
        
        <div className="flex justify-center gap-6 text-white/40 text-sm">
          <a
            href="https://hazel-ray-a96.notion.site/Support-Privacy-389626d5f29a80e0bf7bdbee5cd89c31"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>


          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>


      </footer>


      {/* ==========================================
          IMMERSIVE READER MODAL (沉浸式阅读器弹窗)
      ========================================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all">
          <div 
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950/90 p-6 md:p-10 shadow-2xl relative scrollbar-thin scrollbar-thumb-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm"
              aria-label="Close reader"
            >
              ✕
            </button>


            {/* Article Header */}
            <div className="border-b border-white/10 pb-6 mb-8 mt-4 md:mt-0">
              <div className="flex gap-4 text-xs text-white/40 mb-2">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-white">
                {activeArticle.title}
              </h2>
              <p className="text-base text-emerald-400 mt-2 font-medium">
                {activeArticle.subtitle}
              </p>
            </div>


            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              {activeArticle.content}
            </div>


            {/* Modal Bottom Close Action */}
            <div className="mt-12 pt-6 border-t border-white/10 flex justify-end">
              <button 
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium transition-all"
              >
                Close Article
              </button>
            </div>


          </div>
        </div>
      )}


    </main>
  );
}