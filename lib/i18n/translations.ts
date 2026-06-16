export type Language = 'en' | 'ru'

export interface Translations {
  // Navigation
  nav: {
    aboutLumi: string
    features: string
    battles: string
    faq: string
    joinWaitlist: string
    visitSimplara: string
  }
  // Hero section
  hero: {
    title: string
    titleHighlight: string
    description: string
    meetButton: string
    seeActionButton: string
    aiPowered: string
    styleAssistant: string
    forEveryone: string
    menAndWomen: string
    worksWith: string
    yourWardrobe: string
  }
  // Who is LUMI section
  whoIsLumi: {
    subtitle: string
    title: string
    description: string
    joy: string
    joyDesc: string
    surprise: string
    surpriseDesc: string
    care: string
    careDesc: string
    excitement: string
    excitementDesc: string
    emotionalTitle: string
    emotionalDesc: string
  }
  // Why LUMI Exists section
  whyLumi: {
    subtitle: string
    title: string
    description: string
    morningTitle: string
    morningScenario: string
    simplerTitle: string
    simplerDesc: string
    warmerTitle: string
    warmerDesc: string
    betterTitle: string
    betterDesc: string
    progressTitle: string
    progressDesc: string
  }
  // Where LUMI Lives section
  whereLumi: {
    subtitle: string
    title: string
    description: string
    startingSpace: string
    startingTitle: string
    startingDesc: string
    basicRoom: string
    basicTitle: string
    basicDesc: string
    stylishRoom: string
    stylishTitle: string
    stylishDesc: string
    lumiHome: string
    lumiHomeTitle: string
    lumiHomeDesc: string
    footerText: string
  }
  // Improve LUMI's Life section
  improveLumi: {
    subtitle: string
    title: string
    description: string
    uploadClothes: string
    uploadReward: string
    createOutfits: string
    createReward: string
    saveLooks: string
    saveReward: string
    voteInBattles: string
    voteReward: string
    joinBattles: string
    joinReward: string
    earnLumens: string
    earnReward: string
    lumens: string
    spend: string
    earnTitle: string
    earnDesc: string
    upgradeTitle: string
    upgradeDesc: string
    progressTitle: string
    progressDesc: string
  }
  // Outfit Selection section
  outfitSelection: {
    subtitle: string
    title: string
    description: string
    today: string
    todayDesc: string
    meeting: string
    meetingDesc: string
    evening: string
    eveningDesc: string
    weekend: string
    weekendDesc: string
    casualShirt: string
    comfortableJeans: string
    sneakers: string
    blazer: string
    dressShirt: string
    smartShoes: string
    stylishTop: string
    darkJeans: string
    elegantShoes: string
    cozySweater: string
    relaxedPants: string
    comfortableBoots: string
    howLumiHelps: string
    feature1: string
    feature2: string
    feature3: string
    feature4: string
    feature5: string
    feature6: string
  }
  // Outfit Evaluation section
  outfitEvaluation: {
    subtitle: string
    title: string
    description: string
    colorHarmony: string
    colorDesc: string
    occasionRelevance: string
    occasionDesc: string
    seasonalFit: string
    seasonalDesc: string
    balance: string
    balanceDesc: string
    wardrobeUsage: string
    wardrobeDesc: string
    improvementTips: string
    improvementDesc: string
    strongPoint: string
    strongExample: string
    improvement: string
    improvementExample: string
    tryReplacing: string
    tryReplacingExample: string
    quote: string
    quoteDesc: string
  }
  // Fashion Battles section
  fashionBattles: {
    subtitle: string
    title: string
    description: string
    beforeBattle: string
    preparation: string
    preparationDesc: string
    duringBattle: string
    aiEvaluation: string
    aiEvaluationDesc: string
    afterBattle: string
    feedback: string
    feedbackDesc: string
    battleResultLayers: string
    userVoting: string
    userVotingDesc: string
    lumiAI: string
    lumiAIDesc: string
    lumenStake: string
    lumenStakeDesc: string
    forWinners: string
    winnersExample: string
    forParticipants: string
    participantsExample: string
  }
  // Not Pay-to-Win section
  notPayToWin: {
    subtitle: string
    title: string
    description: string
    votingMatters: string
    votingDesc: string
    lumiTransparent: string
    lumiTransparentDesc: string
    roomCosmetic: string
    roomCosmeticDesc: string
    styleAbove: string
    styleAboveDesc: string
    fairnessFormula: string
    yourStyle: string
    yourStyleDesc: string
    userVotes: string
    userVotesDesc: string
    aiAnalysis: string
    aiAnalysisDesc: string
    fairResult: string
    fairResultDesc: string
    footerText: string
  }
  // Media Character section
  mediaCharacter: {
    subtitle: string
    title: string
    description: string
    episodes: string
    episodesDesc: string
    reactions: string
    reactionsDesc: string
    tips: string
    tipsDesc: string
    behindScenes: string
    behindScenesDesc: string
    followTitle: string
    followDesc: string
    instagram: string
    tiktok: string
    followers: string
    episodesCount: string
    views: string
  }
  // Waitlist section
  waitlist: {
    subtitle: string
    title: string
    description: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    cityLabel: string
    cityPlaceholder: string
    interestLabel: string
    earlyAccess: string
    mvpTesting: string
    followContent: string
    allAbove: string
    submitButton: string
    privacyText: string
    successTitle: string
    successDesc: string
    anotherEntry: string
  }
  // FAQ section
  faq: {
    subtitle: string
    title: string
    description: string
    q1: string
    a1: string
    q2: string
    a2: string
    q3: string
    a3: string
    q4: string
    a4: string
    q5: string
    a5: string
    q6: string
    a6: string
    q7: string
    a7: string
    q8: string
    a8: string
    q9: string
    a9: string
    q10: string
    a10: string
  }
  // Footer section
  footer: {
    description: string
    quickLinks: string
    whoIsLumi: string
    features: string
    battles: string
    faq: string
    followLumi: string
    instagram: string
    tiktok: string
    getInTouch: string
    joinWaitlist: string
    emailUs: string
    copyright: string
    privacyPolicy: string
    termsOfService: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      aboutLumi: 'About LUMI',
      features: 'Features',
      battles: 'Battles',
      faq: 'FAQ',
      joinWaitlist: 'Join Waitlist',
      visitSimplara: 'Visit SIMPLARA',
    },
    hero: {
      title: 'This is ',
      titleHighlight: 'LUMI',
      description: ', builds outfits from your wardrobe, helps evaluate style, and supports you in fashion battles. LUMI is not just a mascot — he\'s your personal fashion companion.',
      meetButton: 'Meet LUMI',
      seeActionButton: 'See LUMI in Action',
      aiPowered: 'AI-Powered',
      styleAssistant: 'Style Assistant',
      forEveryone: 'For Everyone',
      menAndWomen: 'Men & Women',
      worksWith: 'Works With',
      yourWardrobe: 'Your Wardrobe',
    },
    whoIsLumi: {
      subtitle: 'Meet Your Companion',
      title: 'Who is LUMI?',
      description: 'LUMI is not a toy or decorative character. He is an AI cat assistant, the emotional interface of SIMPLARA, and a guide between you, your wardrobe, and the AI logic of the product.',
      joy: 'Joy',
      joyDesc: 'When you create a great outfit',
      surprise: 'Surprise',
      surpriseDesc: 'When you try new combinations',
      care: 'Care',
      careDesc: 'When giving style advice',
      excitement: 'Excitement',
      excitementDesc: 'When you win fashion battles',
      emotionalTitle: 'An Emotional AI Interface',
      emotionalDesc: 'LUMI makes fashion decisions feel warmer and more personal. He transforms complex AI recommendations into friendly guidance, turning your wardrobe management into an engaging, living experience.',
    },
    whyLumi: {
      subtitle: 'The Everyday Value',
      title: 'Why LUMI Exists',
      description: 'LUMI makes outfit selection simpler, warmer, and more habitual.',
      morningTitle: 'Morning Scenario',
      morningScenario: 'Wake up → Open SIMPLARA → See LUMI\'s suggestion → Get dressed with confidence → Start your day looking great',
      simplerTitle: 'Simpler Mornings',
      simplerDesc: 'Open the app, get an outfit suggestion, and start your day with confidence. No more standing in front of the closet wondering what to wear.',
      warmerTitle: 'Warmer Decisions',
      warmerDesc: 'LUMI makes style choices feel personal and supported, not algorithmic or cold. Fashion becomes a conversation, not a calculation.',
      betterTitle: 'Better Combinations',
      betterDesc: 'Discover new ways to wear what you already own. LUMI helps you see potential in forgotten pieces and creates fresh looks from familiar items.',
      progressTitle: 'Feeling of Progress',
      progressDesc: 'Watch your style evolve and LUMI\'s world grow. Every outfit you create, every battle you join contributes to a living fashion journey.',
    },
    whereLumi: {
      subtitle: 'LUMI\'s World',
      title: 'Where LUMI Lives',
      description: 'LUMI starts in a simple space and gradually develops a room or a home. His world reflects your activity and fashion progress.',
      startingSpace: 'Starting Space',
      startingTitle: 'Humble Beginnings',
      startingDesc: 'LUMI starts in a simple box or basic space. It\'s cozy but minimal.',
      basicRoom: 'Basic Room',
      basicTitle: 'First Home',
      basicDesc: 'As you upload clothes and create outfits, LUMI gets his first real room with essential furniture.',
      stylishRoom: 'Stylish Room',
      stylishTitle: 'Growing World',
      stylishDesc: 'Your fashion progress reflects in LUMI\'s space. Better décor, more personality, enhanced ambiance.',
      lumiHome: 'LUMI Home',
      lumiHomeTitle: 'Complete Haven',
      lumiHomeDesc: 'The ultimate space that showcases your fashion journey. A fully developed world that grows with your style.',
      footerText: 'LUMI\'s space is a living representation of your fashion journey. Every action you take in SIMPLARA contributes to building his world — making it richer, more personalized, and more meaningful.',
    },
    improveLumi: {
      subtitle: 'The Game Loop',
      title: 'How to Improve LUMI\'s Life',
      description: 'You don\'t upgrade an abstract profile — you improve the life of a character. The more actively you work with your style, the better LUMI\'s world becomes.',
      uploadClothes: 'Upload Clothes',
      uploadReward: 'LUMI learns your style and can create better outfit suggestions',
      createOutfits: 'Create Outfits',
      createReward: 'LUMI reacts to your creativity and helps refine your combinations',
      saveLooks: 'Save Looks',
      saveReward: 'Successful outfits improve recommendation quality',
      voteInBattles: 'Vote in Battles',
      voteReward: 'Participate socially and earn rewards to upgrade LUMI\'s space',
      joinBattles: 'Join Battles',
      joinReward: 'LUMI helps you prepare and analyzes results',
      earnLumens: 'Earn Lumens',
      earnReward: 'Buy room items, décor, customization, and special LUMI states',
      lumens: 'Lumens',
      spend: 'Spend',
      earnTitle: 'Earn Lumens',
      earnDesc: 'Complete actions to earn the in-app currency',
      upgradeTitle: 'Upgrade Space',
      upgradeDesc: 'Buy furniture, décor, and items for LUMI\'s room',
      progressTitle: 'See Progress',
      progressDesc: 'Watch LUMI\'s world evolve as your fashion journey grows',
    },
    outfitSelection: {
      subtitle: 'AI-Powered Selection',
      title: 'LUMI and Outfit Selection',
      description: 'LUMI suggests outfits from your real clothes and helps you look better without needing to buy new items.',
      today: 'Today',
      todayDesc: 'Perfect for current weather and your daily routine',
      meeting: 'Meeting',
      meetingDesc: 'Professional yet personal, matched to your style',
      evening: 'Evening',
      eveningDesc: 'Elevated combinations for special occasions',
      weekend: 'Weekend',
      weekendDesc: 'Relaxed but put-together looks',
      casualShirt: 'Casual shirt',
      comfortableJeans: 'Comfortable jeans',
      sneakers: 'Sneakers',
      blazer: 'Blazer',
      dressShirt: 'Dress shirt',
      smartShoes: 'Smart shoes',
      stylishTop: 'Stylish top',
      darkJeans: 'Dark jeans',
      elegantShoes: 'Elegant shoes',
      cozySweater: 'Cozy sweater',
      relaxedPants: 'Relaxed pants',
      comfortableBoots: 'Comfortable boots',
      howLumiHelps: 'How LUMI Helps You',
      feature1: 'Works with your real clothes, not abstract examples',
      feature2: 'Considers weather, occasion, mood, and style',
      feature3: 'Brings forgotten items back into rotation',
      feature4: 'Shows new combinations within existing wardrobe',
      feature5: 'Explains why an outfit works',
      feature6: 'Respects your personal style preferences',
    },
    outfitEvaluation: {
      subtitle: 'Private & Useful Feedback',
      title: 'Outfit Evaluation in the Room',
      description: 'Inside the room, LUMI evaluates the outfit composition, not the person. The feedback is soft, helpful, and designed to build your confidence.',
      colorHarmony: 'Color Harmony',
      colorDesc: 'How well colors and textures work together',
      occasionRelevance: 'Occasion Relevance',
      occasionDesc: 'Appropriateness for the event or task',
      seasonalFit: 'Seasonal Fit',
      seasonalDesc: 'Weather and season considerations',
      balance: 'Balance',
      balanceDesc: 'Proportion of top, bottom, shoes, accessories',
      wardrobeUsage: 'Wardrobe Usage',
      wardrobeDesc: 'How well you\'re using existing pieces',
      improvementTips: 'Improvement Tips',
      improvementDesc: 'Suggestions to strengthen the outfit',
      strongPoint: 'Strong Point of the Outfit',
      strongExample: '"The color palette is cohesive and sophisticated. The navy and cream combination creates a clean, professional look."',
      improvement: 'What Can Be Improved',
      improvementExample: '"Consider adding a statement accessory to elevate the look. A leather belt or watch would add visual interest."',
      tryReplacing: 'Try Replacing This',
      tryReplacingExample: '"The sneakers work, but brown leather shoes from your wardrobe would match the belt and create a more polished ensemble."',
      quote: '"LUMI does not set beauty standards. LUMI helps reveal your style."',
      quoteDesc: 'Evaluation is private, constructive, and focused on helping you use your wardrobe with more confidence. LUMI never judges your appearance — only outfit composition.',
    },
    fashionBattles: {
      subtitle: 'Competitive Fashion',
      title: 'LUMI in Fashion Battles',
      description: 'In battles, LUMI acts as your assistant, analyst, and explainable AI judge. He helps you compete fairly and learn from every match.',
      beforeBattle: 'Before Battle',
      preparation: 'Preparation',
      preparationDesc: 'LUMI helps you choose a stronger outfit and gives preliminary advice',
      duringBattle: 'During Battle',
      aiEvaluation: 'AI Evaluation',
      aiEvaluationDesc: 'LUMI\'s analysis becomes part of the result alongside user voting',
      afterBattle: 'After Battle',
      feedback: 'Feedback',
      feedbackDesc: 'Win or lose, LUMI explains what worked and what can be improved',
      battleResultLayers: 'Battle Result Layers',
      userVoting: 'User Voting',
      userVotingDesc: 'The main layer — real people decide which outfit they prefer',
      lumiAI: 'LUMI AI Evaluation',
      lumiAIDesc: 'Analytical layer that explains style strength and harmony',
      lumenStake: 'Lumen Stake',
      lumenStakeDesc: 'Optional game-risk layer that adds excitement',
      forWinners: 'For Winners',
      winnersExample: '"Your outfit won because of strong color harmony and great occasion fit. The community loved the confident styling choices!"',
      forParticipants: 'For Participants',
      participantsExample: '"Great effort! Your outfit had solid fundamentals. Next time, try adding a focal point accessory to make the look more memorable."',
    },
    notPayToWin: {
      subtitle: 'Fair Competition',
      title: 'Why This is Not Pay-to-Win',
      description: 'LUMI helps you improve your outfit and provides transparent feedback. He doesn\'t guarantee victories or replace the community\'s voice.',
      votingMatters: 'Voting Matters Most',
      votingDesc: 'Real users decide battle outcomes, not AI algorithms or paid advantages',
      lumiTransparent: 'LUMI is Transparent',
      lumiTransparentDesc: 'AI evaluation explains decisions and helps you learn, not manipulate results',
      roomCosmetic: 'Room Items are Cosmetic',
      roomCosmeticDesc: 'Paid upgrades improve LUMI\'s space but don\'t give unfair battle advantages',
      styleAbove: 'Style Above All',
      styleAboveDesc: 'Your outfit quality and creativity matter more than how much you spend',
      fairnessFormula: 'Fairness Formula',
      yourStyle: 'Your Style',
      yourStyleDesc: 'Real outfit quality',
      userVotes: 'User Votes',
      userVotesDesc: 'Community decision',
      aiAnalysis: 'AI Analysis',
      aiAnalysisDesc: 'Objective feedback',
      fairResult: 'Fair Result',
      fairResultDesc: 'Merit-based outcome',
      footerText: 'LUMI\'s role is to help you present your best self and understand what makes an outfit strong. Success comes from your fashion sense and creativity, not from purchases or upgrades.',
    },
    mediaCharacter: {
      subtitle: 'Beyond the App',
      title: 'LUMI as a Media Character',
      description: 'LUMI lives beyond SIMPLARA — in short episodes, memes, Reels, and relatable fashion content. Follow his journey and be part of the community.',
      episodes: 'Episodes',
      episodesDesc: 'Short stories about LUMI\'s adventures in fashion',
      reactions: 'Reactions',
      reactionsDesc: 'LUMI responds to trending fashion moments',
      tips: 'Tips',
      tipsDesc: 'Quick style advice in bite-sized formats',
      behindScenes: 'Behind Scenes',
      behindScenesDesc: 'How LUMI thinks about outfits and style',
      followTitle: 'Follow @itslumicat',
      followDesc: 'Join thousands of fashion enthusiasts following LUMI\'s daily adventures. Get style tips, laugh at relatable moments, and be first to know about SIMPLARA updates.',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      followers: 'Followers',
      episodesCount: 'Episodes',
      views: 'Views',
    },
    waitlist: {
      subtitle: 'Join Early',
      title: 'Get Early Access',
      description: 'Enter LUMI\'s world first. Test SIMPLARA, explore the room, try outfit selection, and participate in fashion battles before everyone else.',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email *',
      emailPlaceholder: 'your@email.com',
      cityLabel: 'City',
      cityPlaceholder: 'Your city',
      interestLabel: 'I\'m interested in *',
      earlyAccess: 'Early access to SIMPLARA',
      mvpTesting: 'Becoming an MVP tester',
      followContent: 'Following LUMI\'s content',
      allAbove: 'All of the above',
      submitButton: 'Enter LUMI\'s World',
      privacyText: 'By joining, you\'ll get exclusive updates, early access invitations, and be part of LUMI\'s journey from the start.',
      successTitle: 'Welcome to LUMI\'s World!',
      successDesc: 'You\'re on the list! We\'ll send you early access details soon. Follow @itslumicat to stay updated with LUMI\'s daily adventures.',
      anotherEntry: 'Submit Another Entry',
    },
    faq: {
      subtitle: 'Questions & Answers',
      title: 'Frequently Asked Questions',
      description: 'Everything you need to know about LUMI and SIMPLARA',
      q1: 'Who is LUMI?',
      a1: 'LUMI is an AI cat assistant who lives inside SIMPLARA. He is your personal fashion companion who helps you choose outfits, evaluates style, and supports you in fashion battles. LUMI is not just a mascot — he is an emotional AI interface that makes fashion decisions warmer and more personal.',
      q2: 'Where does LUMI live?',
      a2: 'LUMI lives in his own room inside the SIMPLARA app. He starts in a simple space and gradually develops a more elaborate home as you engage with your wardrobe. His world reflects your fashion progress and activity.',
      q3: 'Is LUMI only for women?',
      a3: 'No! LUMI helps both men and women look more stylish with the clothes they already own. The AI understands different styles, preferences, and fashion needs regardless of gender.',
      q4: 'Do I need to buy new clothes?',
      a4: 'Not at all. LUMI works with your existing wardrobe. The goal is to help you discover new combinations, use forgotten pieces, and feel more confident with what you already own. No pressure to purchase anything.',
      q5: 'How does LUMI\'s room improve?',
      a5: 'LUMI\'s space evolves based on your activity. When you upload clothes, create outfits, participate in battles, and earn Lumens, you unlock the ability to upgrade his room with better furniture, décor, and items. The more you engage with your style, the richer LUMI\'s world becomes.',
      q6: 'How does outfit evaluation work?',
      a6: 'LUMI evaluates outfit composition, not your appearance. He looks at color harmony, occasion relevance, seasonal appropriateness, balance, and wardrobe usage. The feedback is private, constructive, and designed to help you improve — never to judge or criticize.',
      q7: 'What are outfit battles?',
      a7: 'Fashion battles are friendly competitions where users compare outfits. LUMI helps you prepare by suggesting improvements, provides AI analysis during the battle, and explains results afterward. Battles are decided by community voting with LUMI\'s evaluation as a transparent analytical layer.',
      q8: 'Is this pay-to-win?',
      a8: 'No. Battle outcomes are determined by outfit quality and community votes, not by how much you spend. Room upgrades are cosmetic and don\'t provide unfair advantages. LUMI helps everyone improve their style through honest feedback and guidance.',
      q9: 'When can I try SIMPLARA and meet LUMI?',
      a9: 'We\'re currently in development and building the waitlist. Join early access to be among the first to enter LUMI\'s world, test features, and help shape the experience.',
      q10: 'How can I follow LUMI outside the app?',
      a10: 'Follow @itslumicat on Instagram and TikTok for daily fashion content, style tips, relatable moments, and behind-the-scenes looks at how LUMI thinks about fashion.',
    },
    footer: {
      description: 'Your AI fashion companion inside SIMPLARA',
      quickLinks: 'Quick Links',
      whoIsLumi: 'Who is LUMI',
      features: 'Features',
      battles: 'Battles',
      faq: 'FAQ',
      followLumi: 'Follow LUMI',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      getInTouch: 'Get in Touch',
      joinWaitlist: 'Join Waitlist',
      emailUs: 'Email Us',
      copyright: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  ru: {
    nav: {
      aboutLumi: 'О LUMI',
      features: 'Функции',
      battles: 'Баттлы',
      faq: 'FAQ',
      joinWaitlist: 'Присоединиться',
      visitSimplara: 'Открыть SIMPLARA',
    },
    hero: {
      title: 'Это ',
      titleHighlight: 'LUMI',
      description: ', составляет образы из вашего гардероба, помогает оценить стиль и поддерживает в модных баттлах. LUMI — это не просто маскот, а ваш персональный модный компаньон.',
      meetButton: 'Познакомиться с LUMI',
      seeActionButton: 'Увидеть LUMI в деле',
      aiPowered: 'На базе ИИ',
      styleAssistant: 'Стилистический ассистент',
      forEveryone: 'Для всех',
      menAndWomen: 'Мужчин и женщин',
      worksWith: 'Работает с',
      yourWardrobe: 'Вашим гардеробом',
    },
    whoIsLumi: {
      subtitle: 'Знакомьтесь',
      title: 'Кто такой LUMI?',
      description: 'LUMI — это не игрушка и не декоративный персонаж. Он — AI-кот-ассистент, эмоциональный интерфейс SIMPLARA и проводник между вами, вашим гардеробом и AI-логикой продукта.',
      joy: 'Радость',
      joyDesc: 'Когда вы создаёте отличный образ',
      surprise: 'Удивление',
      surpriseDesc: 'Когда вы пробуете новые сочетания',
      care: 'Забота',
      careDesc: 'Когда даёт советы по стилю',
      excitement: 'Восторг',
      excitementDesc: 'Когда вы выигрываете модные баттлы',
      emotionalTitle: 'Эмоциональный AI-интерфейс',
      emotionalDesc: 'LUMI делает модные решения более тёплыми и личными. Он превращает сложные AI-рекомендации в дружеские советы, превращая управление гардеробом в увлекательный живой опыт.',
    },
    whyLumi: {
      subtitle: 'Ежедневная ценность',
      title: 'Зачем нужен LUMI',
      description: 'LUMI делает выбор образа проще, теплее и привычнее.',
      morningTitle: 'Утренний сценарий',
      morningScenario: 'Проснулись → Открыли SIMPLARA → Увидели предложение LUMI → Оделись с уверенностью → Начали день отлично выглядя',
      simplerTitle: 'Проще по утрам',
      simplerDesc: 'Откройте приложение, получите предложение образа и начните день с уверенностью. Больше никакого стояния перед шкафом в раздумьях.',
      warmerTitle: 'Теплее решения',
      warmerDesc: 'LUMI делает выбор стиля личным и поддерживающим, а не алгоритмическим и холодным. Мода становится разговором, а не вычислением.',
      betterTitle: 'Лучше сочетания',
      betterDesc: 'Откройте новые способы носить то, что у вас уже есть. LUMI помогает увидеть потенциал в забытых вещах и создаёт свежие образы из знакомых предметов.',
      progressTitle: 'Ощущение прогресса',
      progressDesc: 'Наблюдайте, как развивается ваш стиль и растёт мир LUMI. Каждый созданный образ, каждый баттл вносят вклад в живое модное путешествие.',
    },
    whereLumi: {
      subtitle: 'Мир LUMI',
      title: 'Где живёт LUMI',
      description: 'LUMI начинает в простом пространстве и постепенно развивает комнату или дом. Его мир отражает вашу активность и модный прогресс.',
      startingSpace: 'Начальное пространство',
      startingTitle: 'Скромное начало',
      startingDesc: 'LUMI начинает в простой коробке или базовом пространстве. Уютно, но минималистично.',
      basicRoom: 'Базовая комната',
      basicTitle: 'Первый дом',
      basicDesc: 'По мере загрузки одежды и создания образов, LUMI получает свою первую настоящую комнату с основной мебелью.',
      stylishRoom: 'Стильная комната',
      stylishTitle: 'Растущий мир',
      stylishDesc: 'Ваш модный прогресс отражается в пространстве LUMI. Лучший декор, больше индивидуальности, улучшенная атмосфера.',
      lumiHome: 'Дом LUMI',
      lumiHomeTitle: 'Полноценное убежище',
      lumiHomeDesc: 'Идеальное пространство, демонстрирующее ваше модное путешествие. Полностью развитый мир, который растёт вместе с вашим стилем.',
      footerText: 'Пространство LUMI — это живое представление вашего модного путешествия. Каждое действие в SIMPLARA вносит вклад в строительство его мира — делая его богаче, персональнее и значимее.',
    },
    improveLumi: {
      subtitle: 'Игровой цикл',
      title: 'Как улучшить жизнь LUMI',
      description: 'Вы не прокачиваете абстрактный профиль — вы улучшаете жизнь персонажа. Чем активнее вы работаете со своим стилем, тем лучше становится мир LUMI.',
      uploadClothes: 'Загружайте одежду',
      uploadReward: 'LUMI изучает ваш стиль и может создавать лучшие предложения образов',
      createOutfits: 'Создавайте образы',
      createReward: 'LUMI реагирует на вашу креативность и помогает оттачивать комбинации',
      saveLooks: 'Сохраняйте луки',
      saveReward: 'Успешные образы улучшают качество рекомендаций',
      voteInBattles: 'Голосуйте в баттлах',
      voteReward: 'Участвуйте в социальной жизни и зарабатывайте награды для улучшения пространства LUMI',
      joinBattles: 'Участвуйте в баттлах',
      joinReward: 'LUMI помогает подготовиться и анализирует результаты',
      earnLumens: 'Зарабатывайте Lumens',
      earnReward: 'Покупайте предметы для комнаты, декор, кастомизацию и специальные состояния LUMI',
      lumens: 'Lumens',
      spend: 'Тратить',
      earnTitle: 'Зарабатывайте Lumens',
      earnDesc: 'Выполняйте действия, чтобы зарабатывать внутриигровую валюту',
      upgradeTitle: 'Улучшайте пространство',
      upgradeDesc: 'Покупайте мебель, декор и предметы для комнаты LUMI',
      progressTitle: 'Наблюдайте прогресс',
      progressDesc: 'Смотрите, как мир LUMI развивается по мере роста вашего модного путешествия',
    },
    outfitSelection: {
      subtitle: 'Подбор на базе ИИ',
      title: 'LUMI и подбор образов',
      description: 'LUMI предлагает образы из вашей настоящей одежды и помогает выглядеть лучше без необходимости покупать новые вещи.',
      today: 'Сегодня',
      todayDesc: 'Идеально для текущей погоды и вашей повседневной рутины',
      meeting: 'Встреча',
      meetingDesc: 'Профессионально, но лично, подходит вашему стилю',
      evening: 'Вечер',
      eveningDesc: 'Возвышенные комбинации для особых случаев',
      weekend: 'Выходные',
      weekendDesc: 'Расслабленные, но собранные образы',
      casualShirt: 'Повседневная рубашка',
      comfortableJeans: 'Удобные джинсы',
      sneakers: 'Кроссовки',
      blazer: 'Блейзер',
      dressShirt: 'Классическая рубашка',
      smartShoes: 'Классические туфли',
      stylishTop: 'Стильный топ',
      darkJeans: 'Тёмные джинсы',
      elegantShoes: 'Элегантные туфли',
      cozySweater: 'Уютный свитер',
      relaxedPants: 'Свободные брюки',
      comfortableBoots: 'Удобные ботинки',
      howLumiHelps: 'Как LUMI помогает вам',
      feature1: 'Работает с вашей настоящей одеждой, а не абстрактными примерами',
      feature2: 'Учитывает погоду, повод, настроение и стиль',
      feature3: 'Возвращает забытые вещи в оборот',
      feature4: 'Показывает новые комбинации в существующем гардеробе',
      feature5: 'Объясняет, почему образ работает',
      feature6: 'Уважает ваши личные стилевые предпочтения',
    },
    outfitEvaluation: {
      subtitle: 'Приватная и полезная обратная связь',
      title: 'Оценка образа в комнате',
      description: 'В комнате LUMI оценивает композицию образа, а не человека. Обратная связь мягкая, полезная и направлена на укрепление вашей уверенности.',
      colorHarmony: 'Цветовая гармония',
      colorDesc: 'Насколько хорошо сочетаются цвета и текстуры',
      occasionRelevance: 'Уместность',
      occasionDesc: 'Соответствие событию или задаче',
      seasonalFit: 'Сезонность',
      seasonalDesc: 'Учёт погоды и сезона',
      balance: 'Баланс',
      balanceDesc: 'Пропорции верха, низа, обуви, аксессуаров',
      wardrobeUsage: 'Использование гардероба',
      wardrobeDesc: 'Насколько хорошо вы используете имеющиеся вещи',
      improvementTips: 'Советы по улучшению',
      improvementDesc: 'Предложения по усилению образа',
      strongPoint: 'Сильная сторона образа',
      strongExample: '«Цветовая палитра цельная и изысканная. Сочетание тёмно-синего и кремового создаёт чистый, профессиональный образ.»',
      improvement: 'Что можно улучшить',
      improvementExample: '«Рассмотрите добавление яркого аксессуара для повышения уровня образа. Кожаный ремень или часы добавят визуальный интерес.»',
      tryReplacing: 'Попробуйте заменить это',
      tryReplacingExample: '«Кроссовки работают, но коричневые кожаные туфли из вашего гардероба подойдут к ремню и создадут более отполированный ансамбль.»',
      quote: '«LUMI не устанавливает стандарты красоты. LUMI помогает раскрыть ваш стиль.»',
      quoteDesc: 'Оценка приватная, конструктивная и нацелена на то, чтобы помочь вам использовать гардероб с большей уверенностью. LUMI никогда не судит вашу внешность — только композицию образа.',
    },
    fashionBattles: {
      subtitle: 'Соревновательная мода',
      title: 'LUMI в модных баттлах',
      description: 'В баттлах LUMI выступает как ваш ассистент, аналитик и объяснимый AI-судья. Он помогает вам соревноваться честно и учиться на каждом матче.',
      beforeBattle: 'Перед баттлом',
      preparation: 'Подготовка',
      preparationDesc: 'LUMI помогает выбрать более сильный образ и даёт предварительные советы',
      duringBattle: 'Во время баттла',
      aiEvaluation: 'AI-оценка',
      aiEvaluationDesc: 'Анализ LUMI становится частью результата наряду с голосованием пользователей',
      afterBattle: 'После баттла',
      feedback: 'Обратная связь',
      feedbackDesc: 'Победа или поражение, LUMI объясняет, что сработало и что можно улучшить',
      battleResultLayers: 'Слои результата баттла',
      userVoting: 'Голосование пользователей',
      userVotingDesc: 'Основной слой — настоящие люди решают, какой образ им нравится больше',
      lumiAI: 'AI-оценка LUMI',
      lumiAIDesc: 'Аналитический слой, который объясняет силу стиля и гармонию',
      lumenStake: 'Ставка Lumens',
      lumenStakeDesc: 'Опциональный игровой риск-слой, добавляющий азарта',
      forWinners: 'Для победителей',
      winnersExample: '«Ваш образ победил благодаря сильной цветовой гармонии и отличной уместности. Сообществу понравились уверенные стилевые решения!»',
      forParticipants: 'Для участников',
      participantsExample: '«Отличная попытка! У вашего образа были прочные основы. В следующий раз попробуйте добавить акцентный аксессуар, чтобы сделать образ более запоминающимся.»',
    },
    notPayToWin: {
      subtitle: 'Честная конкуренция',
      title: 'Почему это не pay-to-win',
      description: 'LUMI помогает улучшить ваш образ и даёт прозрачную обратную связь. Он не гарантирует побед и не заменяет голос сообщества.',
      votingMatters: 'Голосование важнее всего',
      votingDesc: 'Настоящие пользователи решают исходы баттлов, а не AI-алгоритмы или платные преимущества',
      lumiTransparent: 'LUMI прозрачен',
      lumiTransparentDesc: 'AI-оценка объясняет решения и помогает учиться, а не манипулирует результатами',
      roomCosmetic: 'Предметы для комнаты косметические',
      roomCosmeticDesc: 'Платные улучшения улучшают пространство LUMI, но не дают несправедливых преимуществ в баттлах',
      styleAbove: 'Стиль превыше всего',
      styleAboveDesc: 'Качество вашего образа и креативность важнее того, сколько вы тратите',
      fairnessFormula: 'Формула справедливости',
      yourStyle: 'Ваш стиль',
      yourStyleDesc: 'Реальное качество образа',
      userVotes: 'Голоса пользователей',
      userVotesDesc: 'Решение сообщества',
      aiAnalysis: 'AI-анализ',
      aiAnalysisDesc: 'Объективная обратная связь',
      fairResult: 'Честный результат',
      fairResultDesc: 'Заслуженный исход',
      footerText: 'Роль LUMI — помочь вам представить себя с лучшей стороны и понять, что делает образ сильным. Успех приходит от вашего модного чувства и креативности, а не от покупок или улучшений.',
    },
    mediaCharacter: {
      subtitle: 'За пределами приложения',
      title: 'LUMI как медиа-персонаж',
      description: 'LUMI живёт за пределами SIMPLARA — в коротких эпизодах, мемах, Reels и релевантном модном контенте. Следите за его путешествием и станьте частью сообщества.',
      episodes: 'Эпизоды',
      episodesDesc: 'Короткие истории о приключениях LUMI в моде',
      reactions: 'Реакции',
      reactionsDesc: 'LUMI реагирует на трендовые модные моменты',
      tips: 'Советы',
      tipsDesc: 'Быстрые советы по стилю в компактных форматах',
      behindScenes: 'За кулисами',
      behindScenesDesc: 'Как LUMI думает об образах и стиле',
      followTitle: 'Подписывайтесь на @itslumicat',
      followDesc: 'Присоединяйтесь к тысячам энтузиастов моды, следящих за ежедневными приключениями LUMI. Получайте советы по стилю, смейтесь над релевантными моментами и узнавайте первыми об обновлениях SIMPLARA.',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      followers: 'Подписчиков',
      episodesCount: 'Эпизодов',
      views: 'Просмотров',
    },
    waitlist: {
      subtitle: 'Присоединяйтесь первыми',
      title: 'Получите ранний доступ',
      description: 'Войдите в мир LUMI первыми. Тестируйте SIMPLARA, исследуйте комнату, пробуйте подбор образов и участвуйте в модных баттлах раньше всех.',
      nameLabel: 'Имя *',
      namePlaceholder: 'Ваше имя',
      emailLabel: 'Email *',
      emailPlaceholder: 'ваш@email.com',
      cityLabel: 'Город',
      cityPlaceholder: 'Ваш город',
      interestLabel: 'Мне интересно *',
      earlyAccess: 'Ранний доступ к SIMPLARA',
      mvpTesting: 'Стать MVP-тестером',
      followContent: 'Следить за контентом LUMI',
      allAbove: 'Всё вышеперечисленное',
      submitButton: 'Войти в мир LUMI',
      privacyText: 'Присоединившись, вы будете получать эксклюзивные обновления, приглашения на ранний доступ и станете частью путешествия LUMI с самого начала.',
      successTitle: 'Добро пожаловать в мир LUMI!',
      successDesc: 'Вы в списке! Мы скоро отправим вам детали раннего доступа. Подписывайтесь на @itslumicat, чтобы быть в курсе ежедневных приключений LUMI.',
      anotherEntry: 'Отправить ещё одну заявку',
    },
    faq: {
      subtitle: 'Вопросы и ответы',
      title: 'Частые вопросы',
      description: 'Всё, что нужно знать о LUMI и SIMPLARA',
      q1: 'Кто такой LUMI?',
      a1: 'LUMI — это AI-кот-ассистент, который живёт внутри SIMPLARA. Он ваш персональный модный компаньон, который помогает выбирать образы, оценивает стиль и поддерживает в модных баттлах. LUMI — это не просто маскот, а эмоциональный AI-интерфейс, делающий модные решения теплее и персональнее.',
      q2: 'Где живёт LUMI?',
      a2: 'LUMI живёт в своей комнате внутри приложения SIMPLARA. Он начинает в простом пространстве и постепенно развивает более проработанный дом по мере того, как вы взаимодействуете с гардеробом. Его мир отражает ваш модный прогресс и активность.',
      q3: 'LUMI только для женщин?',
      a3: 'Нет! LUMI помогает и мужчинам, и женщинам выглядеть стильнее с одеждой, которая у них уже есть. AI понимает разные стили, предпочтения и модные потребности независимо от пола.',
      q4: 'Нужно ли покупать новую одежду?',
      a4: 'Совсем нет. LUMI работает с вашим существующим гардеробом. Цель — помочь вам открывать новые комбинации, использовать забытые вещи и чувствовать себя увереннее с тем, что у вас уже есть. Никакого давления покупать что-либо.',
      q5: 'Как улучшается комната LUMI?',
      a5: 'Пространство LUMI развивается на основе вашей активности. Когда вы загружаете одежду, создаёте образы, участвуете в баттлах и зарабатываете Lumens, вы разблокируете возможность улучшать его комнату лучшей мебелью, декором и предметами. Чем больше вы занимаетесь своим стилем, тем богаче становится мир LUMI.',
      q6: 'Как работает оценка образа?',
      a6: 'LUMI оценивает композицию образа, а не вашу внешность. Он смотрит на цветовую гармонию, уместность поводу, сезонную подходимость, баланс и использование гардероба. Обратная связь приватная, конструктивная и направлена на то, чтобы помочь вам улучшиться — никогда не судить или критиковать.',
      q7: 'Что такое модные баттлы?',
      a7: 'Модные баттлы — это дружеские соревнования, где пользователи сравнивают образы. LUMI помогает подготовиться, предлагая улучшения, даёт AI-анализ во время баттла и объясняет результаты после. Баттлы решаются голосованием сообщества с оценкой LUMI как прозрачным аналитическим слоем.',
      q8: 'Это pay-to-win?',
      a8: 'Нет. Исходы баттлов определяются качеством образа и голосами сообщества, а не тем, сколько вы тратите. Улучшения комнаты косметические и не дают несправедливых преимуществ. LUMI помогает всем улучшить свой стиль через честную обратную связь и руководство.',
      q9: 'Когда я смогу попробовать SIMPLARA и встретить LUMI?',
      a9: 'Мы сейчас в разработке и формируем лист ожидания. Присоединяйтесь к раннему доступу, чтобы быть среди первых, кто войдёт в мир LUMI, протестирует функции и поможет сформировать опыт.',
      q10: 'Как я могу следить за LUMI вне приложения?',
      a10: 'Подписывайтесь на @itslumicat в Instagram и TikTok для ежедневного модного контента, советов по стилю, релевантных моментов и закулисных взглядов на то, как LUMI думает о моде.',
    },
    footer: {
      description: 'Ваш AI-модный компаньон внутри SIMPLARA',
      quickLinks: 'Быстрые ссылки',
      whoIsLumi: 'Кто такой LUMI',
      features: 'Функции',
      battles: 'Баттлы',
      faq: 'FAQ',
      followLumi: 'Следить за LUMI',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      getInTouch: 'Связаться',
      joinWaitlist: 'Присоединиться',
      emailUs: 'Написать нам',
      copyright: 'Все права защищены.',
      privacyPolicy: 'Политика конфиденциальности',
      termsOfService: 'Условия использования',
    },
  },
}
