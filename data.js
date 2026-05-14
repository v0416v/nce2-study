const lessonData = {
    1: {
        title: "A Private Conversation",
        words: [
            { word: "private", phonetic: "/ˈpraɪvət/", type: "adj.", trans: "私人的" },
            { word: "conversation", phonetic: "/ˌkɒnvəˈseɪʃən/", type: "n.", trans: "谈话" },
            { word: "theatre", phonetic: "/ˈθɪətə/", type: "n.", trans: "剧场，戏院" },
            { word: "seat", phonetic: "/siːt/", type: "n.", trans: "座位" },
            { word: "play", phonetic: "/pleɪ/", type: "n.", trans: "戏；v. 玩" },
            { word: "loudly", phonetic: "/ˈlaʊdli/", type: "adv.", trans: "大声地" },
            { word: "angry", phonetic: "/ˈæŋɡri/", type: "adj.", trans: "生气的" },
            { word: "angrily", phonetic: "/ˈæŋrɪli/", type: "adv.", trans: "生气地" },
            { word: "attention", phonetic: "/əˈtenʃən/", type: "n.", trans: "注意" },
            { word: "bear", phonetic: "/beə/", type: "v.", trans: "容忍" },
            { word: "business", phonetic: "/ˈbɪznɪs/", type: "n.", trans: "事，生意" },
            { word: "rudely", phonetic: "/ˈruːdli/", type: "adv.", trans: "无礼地" }
        ],
        sections: [{sentence: "I could not hear the actors. I turned round. I looked at the man and the woman angrily.", notes: ["<b>could not</b>: 过去式，表示当时听不见", "<b>turned round</b>: 转身", "<b>angrily</b>: 修饰动词 looked"]}]
    },
    2: {
        title: "Breakfast or lunch?",
        words: [
            { word: "until", phonetic: "/ənˈtɪl/", type: "prep./conj.", trans: "直到" },
            { word: "outside", phonetic: "/ˌaʊtˈsaɪd/", type: "adv.", trans: "外面；n. 外面" },
            { word: "ring", phonetic: "/rɪŋ/", type: "v.", trans: "(铃/电话)响" },
            { word: "aunt", phonetic: "/ɑːnt/", type: "n.", trans: "姑，姨，婶" },
            { word: "repeat", phonetic: "/rɪˈpiːt/", type: "v.", trans: "重复" }
        ],
        sections: [{sentence: "It was one o'clock, but I was still in bed.", notes: ["<b>still</b>: 仍然", "<b>in bed</b>: 卧床（注意不加 the）"]}]
    },
    3: {
        title: "Please send me a card",
        words: [
            { word: "send", phonetic: "/send/", type: "v.", trans: "寄，送" },
            { word: "postcard", phonetic: "/ˈpəʊstkɑːd/", type: "n.", trans: "明信片" },
            { word: "spoil", phonetic: "/spɔɪl/", type: "v.", trans: "使索然无味，损坏" },
            { word: "museum", phonetic: "/mjuːˈziːəm/", type: "n.", trans: "博物馆" },
            { word: "friendly", phonetic: "/ˈfrendli/", type: "adj.", trans: "友好的" },
            { word: "waiter", phonetic: "/ˈweɪtə/", type: "n.", trans: "服务员" },
            { word: "lend", phonetic: "/lend/", type: "v.", trans: "借给" },
            { word: "decision", phonetic: "/dɪˈsɪʒən/", type: "n.", trans: "决定" },
            { word: "whole", phonetic: "/həʊl/", type: "adj.", trans: "整个的" },
            { word: "single", phonetic: "/ˈsɪŋɡəl/", type: "adj.", trans: "唯一的，单一的" }
        ],
        sections: [{sentence: "Postcards always spoil my holidays.", notes: ["<b>spoil</b>: 损坏，这里指心情被破坏", "<b>always</b>: 频度副词，放在实义动词前"]}]
    },
    4: {
        title: "An Exciting Trip",
        words: [
            { word: "exciting", phonetic: "/ɪkˈsaɪtɪŋ/", type: "adj.", trans: "令人兴奋的" },
            { word: "receive", phonetic: "/rɪˈsiːv/", type: "v.", trans: "接受，收到" },
            { word: "firm", phonetic: "/fɜːm/", type: "n.", trans: "商行，公司" },
            { word: "different", phonetic: "/ˈdɪfərənt/", type: "adj.", trans: "不同的" },
            { word: "centre", phonetic: "/ˈsentər/", type: "n.", trans: "中心" },
            { word: "abroad", phonetic: "/əˈbrɔːd/", type: "adv.", trans: "在国外" }
        ],
        sections: [
            { sentence: "I have just received a letter from my brother, Tim.", notes: ["<b>语法点：同位语</b>。Tim 是 my brother 的同位语。", "<b>have just received</b>: 现在完成时"] },
            { sentence: "He is in Australia. He has been there for six months.", notes: ["<b>辨析</b>：has been in (在某地待了多久)。"] }
        ]
    },
    5: {
        title: "No Wrong Numbers",
        words: [
            { word: "pigeon", phonetic: "/ˈpɪdʒɪn/", type: "n.", trans: "鸽子" },
            { word: "message", phonetic: "/ˈmesɪdʒ/", type: "n.", trans: "信息" },
            { word: "cover", phonetic: "/ˈkʌvə/", type: "v.", trans: "越过(距离)" },
            { word: "distance", phonetic: "/ˈdɪstəns/", type: "n.", trans: "距离" },
            { word: "request", phonetic: "/rɪˈkwest/", type: "n.", trans: "要求，请求" },
            { word: "spare", phonetic: "/speə/", type: "adj.", trans: "多余的" },
            { word: "service", phonetic: "/ˈsɜːvɪs/", type: "n.", trans: "业务，服务" }
        ],
        sections: [{sentence: "In this way, he has begun his own private telephone service.", notes: ["<b>in this way</b>: 通过这种方式", "<b>own</b>: 自己的"]}]
    },
    6: {
        title: "Percy Buttons",
        words: [
            { word: "beggar", phonetic: "/ˈbeɡər/", type: "n.", trans: "乞丐" },
            { word: "food", phonetic: "/fuːd/", type: "n.", trans: "食物" },
            { word: "pocket", phonetic: "/ˈpɒkɪt/", type: "n.", trans: "衣服口袋" },
            { word: "call", phonetic: "/kɔːl/", type: "v.", trans: "拜访，光顾" }
        ],
        sections: [{sentence: "He has moved from one house to another, knocking at every door.", notes: ["<b>from...to...</b>: 从一个到另一个", "<b>knocking</b>: 伴随动作，敲门"]}]
    },
    7: {
        title: "Too Late",
        words: [
            { word: "detective", phonetic: "/dɪˈtektɪv/", type: "n.", trans: "侦探" },
            { word: "airport", phonetic: "/ˈeəpɔːt/", type: "n.", trans: "机场" },
            { word: "expect", phonetic: "/ɪkˈspekt/", type: "v.", trans: "期待，等待" },
            { word: "valuable", phonetic: "/ˈvæljuəbl/", type: "adj.", trans: "贵重的" },
            { word: "parcel", phonetic: "/ˈpɑːsəl/", type: "n.", trans: "包裹" },
            { word: "diamond", phonetic: "/ˈdaɪəmənd/", type: "n.", trans: "钻石" },
            { word: "steal", phonetic: "/stiːl/", type: "v.", trans: "偷" },
            { word: "main", phonetic: "/meɪn/", type: "adj.", trans: "主要的" },
            { word: "guard", phonetic: "/ɡɑːd/", type: "n.", trans: "警戒，守卫" },
            { word: "precious", phonetic: "/ˈpreʃəs/", type: "adj.", trans: "珍贵的" },
            { word: "stone", phonetic: "/stəʊn/", type: "n.", trans: "石子" },
            { word: "sand", phonetic: "/sænd/", type: "n.", trans: "沙子" }
        ],
        sections: [{sentence: "The detective was waiting at the airport.", notes: ["<b>was waiting</b>: 过去进行时，强调当时正在等"]}]
    },
    8: {
        title: "The Best and the Worst",
        words: [
            { word: "competition", phonetic: "/ˌkɒmpəˈtɪʃən/", type: "n.", trans: "比赛，竞赛" },
            { word: "neat", phonetic: "/niːt/", type: "adj.", trans: "整齐的，整洁的" },
            { word: "path", phonetic: "/pɑːθ/", type: "n.", trans: "小路，小径" },
            { word: "wooden", phonetic: "/ˈwʊdən/", type: "adj.", trans: "木制的" },
            { word: "pool", phonetic: "/puːl/", type: "n.", trans: "水池" }
        ],
        sections: [{sentence: "Joe's garden is larger than Bill's.", notes: ["<b>larger than</b>: 比较级", "<b>Bill's</b>: 指代 Bill's garden"]}]
    },
    9: {
        title: "A Cold Welcome",
        words: [
            { word: "welcome", phonetic: "/ˈwelkəm/", type: "n.", trans: "欢迎" },
            { word: "crowd", phonetic: "/kraʊd/", type: "n.", trans: "人群" },
            { word: "gather", phonetic: "/ˈɡæðə/", type: "v.", trans: "聚集" },
            { word: "hand", phonetic: "/hænd/", type: "n.", trans: "(钟表)指针" },
            { word: "shout", phonetic: "/ʃaʊt/", type: "v.", trans: "喊叫" },
            { word: "refuse", phonetic: "/rɪˈfjuːz/", type: "v.", trans: "拒绝" },
            { word: "laugh", phonetic: "/lɑːf/", type: "v.", trans: "笑" }
        ],
        sections: [{sentence: "On Wednesday night, we went to the Town Hall.", notes: ["<b>On Wednesday night</b>: 在具体的周三晚上，介词用 on"]}]
    },
    10: {
        title: "Not For Jazz",
        words: [
            { word: "musical", phonetic: "/ˈmjuːzɪkəl/", type: "adj.", trans: "音乐的" },
            { word: "instrument", phonetic: "/ˈɪnstrʊmənt/", type: "n.", trans: "乐器" },
            { word: "recent", phonetic: "/ˈriːsənt/", type: "adj.", trans: "最近的" },
            { word: "damage", phonetic: "/ˈdæmɪdʒ/", type: "v.", trans: "损坏" },
            { word: "key", phonetic: "/kiː/", type: "n.", trans: "琴键；钥匙" },
            { word: "string", phonetic: "/strɪŋ/", type: "n.", trans: "(乐器的)弦" },
            { word: "shock", phonetic: "/ʃɒk/", type: "v.", trans: "使震惊" },
            { word: "allow", phonetic: "/əˈlaʊ/", type: "v.", trans: "允许" },
            { word: "touch", phonetic: "/tʌtʃ/", type: "v.", trans: "触摸" }
        ],
        sections: [{sentence: "It was damaged by a visitor.", notes: ["<b>was damaged by</b>: 被动语态", "<b>visitor</b>: 访客"]}]
    },
    {
  "11": {
    "title": "One good turn deserves another",
    "words": [
      { "word": "turn", "phonetic": "/tɜːn/", "type": "n.", "trans": "行为，举止" },
      { "word": "deserve", "phonetic": "/dɪˈzɜːv/", "type": "v.", "trans": "应得到，值得" },
      { "word": "lawyer", "phonetic": "/ˈlɔːjə/", "type": "n.", "trans": "律师" },
      { "word": "bank", "phonetic": "/bæŋk/", "type": "n.", "trans": "银行" },
      { "word": "salary", "phonetic": "/ˈsæləri/", "type": "n.", "trans": "工资" },
      { "word": "immediately", "phonetic": "/ɪˈmiːdiətli/", "type": "adv.", "trans": "立刻" }
    ],
    "sections": [
      { "sentence": "One good turn deserves another.", "notes": ["<b>turn</b>: 此处为名词，指行为、举止", "<b>deserve</b>: 及物动词，后接名词或代词", "<b>谚语</b>: 礼尚往来，善有善报"] },
      { "sentence": "He worked as a lawyer and earned a good salary.", "notes": ["<b>worked as</b>: 担任...工作", "<b>a good salary</b>: 丰厚的薪水"] }
    ]
  },
  "12": {
    "title": "Goodbye and good luck",
    "words": [
      { "word": "luck", "phonetic": "/lʌk/", "type": "n.", "trans": "运气，幸运" },
      { "word": "captain", "phonetic": "/ˈkæptɪn/", "type": "n.", "trans": "船长" },
      { "word": "sail", "phonetic": "/seɪl/", "type": "v.", "trans": "航行" },
      { "word": "harbour", "phonetic": "/ˈhɑːbə/", "type": "n.", "trans": "港口" },
      { "word": "proud", "phonetic": "/praʊd/", "type": "adj.", "trans": "自豪的" },
      { "word": "important", "phonetic": "/ɪmˈpɔːtənt/", "type": "adj.", "trans": "重要的" }
    ],
    "sections": [
      { "sentence": "We'll meet him at the harbour early in the morning.", "notes": ["<b>will meet</b>: 一般将来时，表示计划要做的事", "<b>at the harbour</b>: 介词短语作地点状语", "<b>early in the morning</b>: 清晨"] },
      { "sentence": "He will be away for two months.", "notes": ["<b>will be away</b>: 一般将来时，离开", "<b>for two months</b>: 介词短语表示持续时间"] }
    ]
  },
  "13": {
    "title": "The Greenwood Boys",
    "words": [
      { "word": "group", "phonetic": "/ɡruːp/", "type": "n.", "trans": "小组，团体" },
      { "word": "pop singer", "phonetic": "/pɒp ˈsɪŋə/", "type": "n.", "trans": "流行歌手" },
      { "word": "club", "phonetic": "/klʌb/", "type": "n.", "trans": "俱乐部" },
      { "word": "performance", "phonetic": "/pəˈfɔːməns/", "type": "n.", "trans": "演出" },
      { "word": "occasion", "phonetic": "/əˈkeɪʒən/", "type": "n.", "trans": "场合" }
    ],
    "sections": [
      { "sentence": "They will be coming by train and most of the young people in the town will be meeting them at the station.", "notes": ["<b>will be coming</b>: 将来进行时，表示按计划将要发生的动作", "<b>most of the young people</b>: 大部分年轻人", "<b>meeting them at the station</b>: 去车站接他们"] }
    ]
  },
  "14": {
    "title": "Do you speak English?",
    "words": [
      { "word": "amusing", "phonetic": "/əˈmjuːzɪŋ/", "type": "adj.", "trans": "好笑的，有趣的" },
      { "word": "experience", "phonetic": "/ɪkˈspɪəriəns/", "type": "n.", "trans": "经历" },
      { "word": "wave", "phonetic": "/weɪv/", "type": "v.", "trans": "招手" },
      { "word": "lift", "phonetic": "/lɪft/", "type": "n.", "trans": "搭便车" },
      { "word": "reply", "phonetic": "/rɪˈplaɪ/", "type": "v.", "trans": "回答" },
      { "word": "language", "phonetic": "/ˈlæŋɡwɪdʒ/", "type": "n.", "trans": "语言" },
      { "word": "journey", "phonetic": "/ˈdʒɜːni/", "type": "n.", "trans": "旅行" }
    ],
    "sections": [
      { "sentence": "I had an amusing experience last year.", "notes": ["<b>had</b>: 一般过去时，表示过去发生的事", "<b>amusing experience</b>: 有趣的经历", "<b>last year</b>: 去年"] },
      { "sentence": "I gave him a lift, but he replied in French.", "notes": ["<b>gave him a lift</b>: 让他搭便车", "<b>replied in French</b>: 用法语回答，in+语言表示用某种语言"] }
    ]
  },
  "15": {
    "title": "Good news",
    "words": [
      { "word": "secretary", "phonetic": "/ˈsekrətri/", "type": "n.", "trans": "秘书" },
      { "word": "nervous", "phonetic": "/ˈnɜːvəs/", "type": "adj.", "trans": "精神紧张的" },
      { "word": "afford", "phonetic": "/əˈfɔːd/", "type": "v.", "trans": "负担得起" },
      { "word": "weak", "phonetic": "/wiːk/", "type": "adj.", "trans": "弱的" },
      { "word": "interrupt", "phonetic": "/ˌɪntəˈrʌpt/", "type": "v.", "trans": "插话，打断" }
    ],
    "sections": [
      { "sentence": "I felt very nervous, but I went into his office.", "notes": ["<b>felt</b>: 系动词，后接形容词作表语", "<b>nervous</b>: 紧张不安的", "<b>went into</b>: 进入"] },
      { "sentence": "He told me that the firm could not afford to pay such large salaries.", "notes": ["<b>told me that...</b>: that引导宾语从句", "<b>could not afford to do</b>: 负担不起做某事", "<b>such large salaries</b>: 如此高的薪水"] }
    ]
  },
  "16": {
    "title": "A polite request",
    "words": [
      { "word": "park", "phonetic": "/pɑːk/", "type": "v.", "trans": "停放(汽车)" },
      { "word": "traffic", "phonetic": "/ˈtræfɪk/", "type": "n.", "trans": "交通" },
      { "word": "ticket", "phonetic": "/ˈtɪkɪt/", "type": "n.", "trans": "交通违规罚款单" },
      { "word": "note", "phonetic": "/nəʊt/", "type": "n.", "trans": "便条" },
      { "word": "area", "phonetic": "/ˈeəriə/", "type": "n.", "trans": "地段" },
      { "word": "sign", "phonetic": "/saɪn/", "type": "n.", "trans": "指示牌" },
      { "word": "reminder", "phonetic": "/rɪˈmaɪndə/", "type": "n.", "trans": "提示" },
      { "word": "fail", "phonetic": "/feɪl/", "type": "v.", "trans": "无视，忘记" }
    ],
    "sections": [
      { "sentence": "If you park your car in the wrong place, a traffic policeman will soon find it.", "notes": ["<b>If you park...</b>: if引导的条件状语从句，主句用一般将来时", "<b>in the wrong place</b>: 在不该停的地方", "<b>will find</b>: 将来时"] },
      { "sentence": "You will enjoy your stay here if you pay attention to our street signs.", "notes": ["<b>enjoy your stay</b>: 在此停留愉快", "<b>if you pay attention to</b>: 如果你注意...", "<b>street signs</b>: 街道指示牌"] }
    ]
  },
  "17": {
    "title": "Always young",
    "words": [
      { "word": "appear", "phonetic": "/əˈpɪə/", "type": "v.", "trans": "登场，扮演" },
      { "word": "stage", "phonetic": "/steɪdʒ/", "type": "n.", "trans": "舞台" },
      { "word": "bright", "phonetic": "/braɪt/", "type": "adj.", "trans": "鲜艳的" },
      { "word": "stocking", "phonetic": "/ˈstɒkɪŋ/", "type": "n.", "trans": "(女式)长袜" },
      { "word": "sock", "phonetic": "/sɒk/", "type": "n.", "trans": "短袜" }
    ],
    "sections": [
      { "sentence": "My aunt Jennifer is an actress. She must be at least thirty-five years old.", "notes": ["<b>must be</b>: 情态动词表推测，一定是", "<b>at least</b>: 至少", "<b>thirty-five years old</b>: 35岁"] },
      { "sentence": "In spite of this, she often appears on the stage as a young girl.", "notes": ["<b>in spite of this</b>: 尽管如此", "<b>appears on the stage</b>: 登台表演", "<b>as a young girl</b>: 作为年轻女孩"] }
    ]
  },
  "18": {
    "title": "He often does this!",
    "words": [
      { "word": "pub", "phonetic": "/pʌb/", "type": "n.", "trans": "小酒店" },
      { "word": "landlord", "phonetic": "/ˈlændlɔːd/", "type": "n.", "trans": "店主" }
    ],
    "sections": [
      { "sentence": "I had left it on a chair beside the door.", "notes": ["<b>had left</b>: 过去完成时，表示过去的过去发生的动作", "<b>on a chair</b>: 在椅子上", "<b>beside the door</b>: 门旁边"] },
      { "sentence": "He often does this!", "notes": ["<b>does this</b>: 做这样的事", "<b>often</b>: 副词，表示频率"] }
    ]
  },
  "19": {
    "title": "Sold out",
    "words": [
      { "word": "hurry", "phonetic": "/ˈhʌri/", "type": "v.", "trans": "匆忙" },
      { "word": "ticket office", "phonetic": "/ˈtɪkɪt ˌɒfɪs/", "type": "n.", "trans": "售票处" },
      { "word": "pity", "phonetic": "/ˈpɪti/", "type": "n.", "trans": "令人遗憾的事" },
      { "word": "exclaim", "phonetic": "/ɪkˈskleɪm/", "type": "v.", "trans": "大声说" },
      { "word": "return", "phonetic": "/rɪˈtɜːn/", "type": "v.", "trans": "退回" },
      { "word": "sadly", "phonetic": "/ˈsædli/", "type": "adv.", "trans": "悲哀地，丧气地" }
    ],
    "sections": [
      { "sentence": "The play may begin at any moment.", "notes": ["<b>may begin</b>: 情态动词may表可能性", "<b>at any moment</b>: 随时"] },
      { "sentence": "I'm sorry, we've sold out.", "notes": ["<b>we've sold out</b>: 现在完成时，表示票已售完", "<b>sold out</b>: 售罄"] }
    ]
  },
  "20": {
    "title": "One man in a boat",
    "words": [
      { "word": "fishing", "phonetic": "/ˈfɪʃɪŋ/", "type": "n.", "trans": "钓鱼" },
      { "word": "boot", "phonetic": "/buːt/", "type": "n.", "trans": "靴子" },
      { "word": "waste", "phonetic": "/weɪst/", "type": "n.", "trans": "浪费" },
      { "word": "realize", "phonetic": "/ˈriːəlaɪz/", "type": "v.", "trans": "意识到" }
    ],
    "sections": [
      { "sentence": "Fishing is my favourite sport.", "notes": ["<b>Fishing</b>: 动名词作主语", "<b>is</b>: 系动词", "<b>my favourite sport</b>: 我最喜爱的运动"] },
      { "word": "waste", "phonetic": "/weɪst/", "type": "n.", "trans": "浪费" },
      { "word": "realize", "phonetic": "/ˈriːəlaɪz/", "type": "v.", "trans": "意识到" }
    ],
    "sections": [
      { "sentence": "Fishing is my favourite sport.", "notes": ["<b>Fishing</b>: 动名词作主语", "<b>is</b>: 系动词", "<b>my favourite sport</b>: 我最喜爱的运动"] },
      { "sentence": "I am not really interested in fishing. I am only interested in sitting in a boat and doing nothing at all!", "notes": ["<b>be interested in</b>: 对...感兴趣", "<b>sitting in a boat</b>: 坐在船里", "<b>doing nothing at all</b>: 什么也不做"] }
    ]
  },
  "21": {
    "title": "Mad or not?",
    "words": [
      { "word": "mad", "phonetic": "/mæd/", "type": "adj.", "trans": "发疯" },
      { "word": "reason", "phonetic": "/ˈriːzən/", "type": "n.", "trans": "原因" },
      { "word": "sum", "phonetic": "/sʌm/", "type": "n.", "trans": "金额" },
      { "word": "determined", "phonetic": "/dɪˈtɜːmɪnd/", "type": "adj.", "trans": "坚定的，下决心的" }
    ],
    "sections": [
      { "sentence": "Aeroplanes are slowly driving me mad.", "notes": ["<b>are driving me mad</b>: 现在进行时，正在使我发疯", "<b>drive sb. mad</b>: 使某人发疯", "<b>slowly</b>: 慢慢地"] },
      { "sentence": "I have been offered a large sum of money to go away, but I am determined to stay here.", "notes": ["<b>have been offered</b>: 现在完成时的被动语态", "<b>a large sum of money</b>: 一大笔钱", "<b>am determined to do</b>: 决心做某事"] }
    ]
  },
  "22": {
    "title": "A glass envelope",
    "words": [
      { "word": "dream", "phonetic": "/driːm/", "type": "v.", "trans": "做梦，梦想" },
      { "word": "age", "phonetic": "/eɪdʒ/", "type": "n.", "trans": "年龄" },
      { "word": "channel", "phonetic": "/ˈtʃænəl/", "type": "n.", "trans": "海峡" },
      { "word": "throw", "phonetic": "/θrəʊ/", "type": "v.", "trans": "扔，抛" }
    ],
    "sections": [
      { "sentence": "My daughter Jane never dreamed of receiving a letter from a girl of her own age in Holland.", "notes": ["<b>never dreamed of</b>: 从未梦想过", "<b>receiving a letter</b>: 收到信", "<b>of her own age</b>: 同龄的", "<b>in Holland</b>: 在荷兰"] },
      { "sentence": "She threw the bottle into the sea.", "notes": ["<b>threw</b>: throw的过去式", "<b>into the sea</b>: 扔进海里"] }
    ]
  },
  "23": {
    "title": "A new house",
    "words": [
      { "word": "complete", "phonetic": "/kəmˈpliːt/", "type": "v.", "trans": "完成" },
      { "word": "modern", "phonetic": "/ˈmɒdən/", "type": "adj.", "trans": "新式的，现代的" },
      { "word": "strange", "phonetic": "/streɪndʒ/", "type": "adj.", "trans": "奇怪的" },
      { "word": "district", "phonetic": "/ˈdɪstrɪkt/", "type": "n.", "trans": "地区" }
    ],
    "sections": [
      { "sentence": "I had a letter from my sister yesterday.", "notes": ["<b>had a letter from</b>: 收到...的来信", "<b>yesterday</b>: 昨天，一般过去时标志"] },
      { "sentence": "She said that she would come to see me.", "notes": ["<b>said that...</b>: that引导宾语从句", "<b>would come</b>: 过去将来时"] }
    ]
  },
  "24": {
    "title": "It could be worse",
    "words": [
      { "word": "manager", "phonetic": "/ˈmænɪdʒə/", "type": "n.", "trans": "经理" },
      { "word": "upset", "phonetic": "/ʌpˈset/", "type": "adj.", "trans": "不安" },
      { "word": "sympathetic", "phonetic": "/ˌsɪmpəˈθetɪk/", "type": "adj.", "trans": "表示同情的" },
      { "word": "complain", "phonetic": "/kəmˈpleɪn/", "type": "v.", "trans": "抱怨" },
      { "word": "wicked", "phonetic": "/ˈwɪkɪd/", "type": "adj.", "trans": "很坏的，邪恶的" },
      { "word": "contain", "phonetic": "/kənˈteɪn/", "type": "v.", "trans": "包含，内装" },
      { "word": "honesty", "phonetic": "/ˈɒnɪsti/", "type": "n.", "trans": "诚实" }
    ],
    "sections": [
      { "sentence": "I entered the hotel manager's office and sat down.", "notes": ["<b>entered</b>: 进入", "<b>the hotel manager's office</b>: 酒店经理的办公室", "<b>sat down</b>: 坐下"] },
      { "sentence": "I lost my wallet with a lot of money in it.", "notes": ["<b>lost</b>: 丢失", "<b>with a lot of money in it</b>: 里面有很多钱，with复合结构"] }
    ]
  },
  "25": {
    "title": "Do the English speak English?",
    "words": [
      { "word": "railway", "phonetic": "/ˈreɪlweɪ/", "type": "n.", "trans": "铁路" },
      { "word": "porter", "phonetic": "/ˈpɔːtə/", "type": "n.", "trans": "搬运工" },
      { "word": "several", "phonetic": "/ˈsevrəl/", "type": "adj.", "trans": "几个" },
      { "word": "foreigner", "phonetic": "/ˈfɒrənə/", "type": "n.", "trans": "外国人" },
      { "word": "wonder", "phonetic": "/ˈwʌndə/", "type": "v.", "trans": "感到奇怪" }
    ],
    "sections": [
      { "sentence": "I arrived in London at last.", "notes": ["<b>arrived in</b>: 到达（大地方）", "<b>at last</b>: 最后，终于"] },
      { "sentence": "I not only spoke English very carefully, but very clearly as well.", "notes": ["<b>not only...but...as well</b>: 不仅...而且...", "<b>spoke English</b>: 说英语", "<b>carefully</b>: 仔细地", "<b>clearly</b>: 清楚地"] }
    ]
  },
  "26": {
    "title": "The best art critics",
    "words": [
      { "word": "art", "phonetic": "/ɑːt/", "type": "n.", "trans": "艺术" },
      { "word": "critic", "phonetic": "/ˈkrɪtɪk/", "type": "n.", "trans": "评论家" },
      { "word": "paint", "phonetic": "/peɪnt/", "type": "v.", "trans": "画" },
      { "word": "pretend", "phonetic": "/prɪˈtend/", "type": "v.", "trans": "假装" },
      { "word": "pattern", "phonetic": "/ˈpætən/", "type": "n.", "trans": "图案" },
      { "word": "curtain", "phonetic": "/ˈkɜːtən/", "type": "n.", "trans": "窗帘，幕布" },
      { "word": "material", "phonetic": "/məˈtɪəriəl/", "type": "n.", "trans": "材料" },
      { "word": "appreciate", "phonetic": "/əˈpriːʃieɪt/", "type": "v.", "trans": "鉴赏" },
      { "word": "notice", "phonetic": "/ˈnəʊtɪs/", "type": "v.", "trans": "注意到" },
      { "word": "whether", "phonetic": "/ˈweðə/", "type": "conj.", "trans": "是否" },
      { "word": "hang", "phonetic": "/hæŋ/", "type": "v.", "trans": "悬挂" },
      { "word": "critically", "phonetic": "/ˈkrɪtɪkli/", "type": "adv.", "trans": "批评地" },
      { "word": "upside down", "phonetic": "/ˌʌpsaɪd ˈdaʊn/", "type": "adv.", "trans": "上下颠倒地" }
    ],
    "sections": [
      { "sentence": "I am an art student and I paint a lot of pictures.", "notes": ["<b>an art student</b>: 艺术系学生", "<b>paint a lot of pictures</b>: 画很多画"] },
      { "sentence": "They always tell you what a picture is about.", "notes": ["<b>tell you what a picture is about</b>: 告诉你一幅画是关于什么的", "<b>what</b>: 引导宾语从句"] }
    ]
  },
  "27": {
    "title": "A wet night",
    "words": [
      { "word": "field", "phonetic": "/fiːld/", "type": "n.", "trans": "田地，田野" },
      { "word": "comfortable", "phonetic": "/ˈkʌmftəbl/", "type": "adj.", "trans": "舒适的" },
      { "word": "put up", "phonetic": "/pʊt ʌp/", "type": "v.", "trans": "搭起，建造" },
      { "word": "tent", "phonetic": "/tent/", "type": "n.", "trans": "帐篷" },
      { "word": "leap", "phonetic": "/liːp/", "type": "v.", "trans": "跳跃，跳起" },
      { "word": "creep", "phonetic": "/kriːp/", "type": "v.", "trans": "爬行" },
      { "word": "sleeping bag", "phonetic": "/ˈsliːpɪŋ bæɡ/", "type": "n.", "trans": "睡袋" },
      { "word": "soundly", "phonetic": "/ˈsaʊndli/", "type": "adv.", "trans": "香甜地" }
    ],
    "sections": [
      { "sentence": "Late in the afternoon, the boys put up their tent in the middle of a field.", "notes": ["<b>late in the afternoon</b>: 傍晚", "<b>put up their tent</b>: 搭起帐篷", "<b>in the middle of a field</b>: 在田野中央"] },
      { "sentence": "They all slept soundly.", "notes": ["<b>slept soundly</b>: 睡得很香", "<b>soundly</b>: 副词，修饰slept"] }
    ]
  },
  "28": {
    "title": "No parking",
    "words": [
      { "word": "ancient", "phonetic": "/ˈeɪnʃənt/", "type": "adj.", "trans": "古代的，古老的" },
      { "word": "myth", "phonetic": "/mɪθ/", "type": "n.", "trans": "神话故事" },
      { "word": "trouble", "phonetic": "/ˈtrʌbəl/", "type": "n.", "trans": "麻烦" },
      { "word": "effect", "phonetic": "/ɪˈfekt/", "type": "n.", "trans": "效果，结果" },
      { "word": "Medusa", "phonetic": "/mɪˈdjuːzə/", "type": "n.", "trans": "美杜莎(希腊神话)" },
      { "word": "Gorgon", "phonetic": "/ˈɡɔːɡən/", "type": "n.", "trans": "蛇发女怪(三姐妹之一)" }
    ],
    "sections": [
      { "sentence": "It is one of the ugliest faces I have ever seen.", "notes": ["<b>one of the ugliest faces</b>: 最丑陋的面孔之一", "<b>I have ever seen</b>: 定语从句，修饰faces", "<b>现在完成时</b>: 表示有史以来"] },
      { "sentence": "None of them has been turned to stone.", "notes": ["<b>none of them</b>: 他们当中没有一个", "<b>has been turned to stone</b>: 现在完成时的被动语态，被变成石头"] }
    ]
  },
  "29": {
    "title": "Taxi!",
    "words": [
      { "word": "taxi", "phonetic": "/ˈtæksi/", "type": "n.", "trans": "出租汽车" },
      { "word": "land", "phonetic": "/lænd/", "type": "v.", "trans": "着陆" },
      { "word": "plough", "phonetic": "/plaʊ/", "type": "v.", "trans": "耕地" },
      { "word": "lonely", "phonetic": "/ˈləʊnli/", "type": "adj.", "trans": "偏僻的，人迹罕至的" },
      { "word": "roof", "phonetic": "/ruːf/", "type": "n.", "trans": "楼顶" },
      { "word": "block", "phonetic": "/blɒk/", "type": "n.", "trans": "一座大楼" },
      { "word": "flat", "phonetic": "/flæt/", "type": "n.", "trans": "公寓房" },
      { "word": "desert", "phonetic": "/dɪˈzɜːt/", "type": "v.", "trans": "废弃" }
    ],
    "sections": [
      { "sentence": "Captain Ben Fawcett has bought an unusual taxi and has begun a new service.", "notes": ["<b>has bought / has begun</b>: 现在完成时，表示已经完成", "<b>an unusual taxi</b>: 一辆不寻常的出租车", "<b>begun a new service</b>: 开始一项新服务"] },
      { "sentence": "The most surprising thing about it, however, is that it can land anywhere.", "notes": ["<b>the most surprising thing</b>: 最令人惊讶的事", "<b>is that...</b>: 表语从句", "<b>can land</b>: 能够降落"] }
    ]
  },
  "30": {
    "title": "Football or polo?",
    "words": [
      { "word": "polo", "phonetic": "/ˈpəʊləʊ/", "type": "n.", "trans": "水球" },
      { "word": "cut", "phonetic": "/kʌt/", "type": "v.", "trans": "穿过" },
      { "word": "row", "phonetic": "/rəʊ/", "type": "v.", "trans": "划(船)" },
      { "word": "kick", "phonetic": "/kɪk/", "type": "v.", "trans": "踢" },
      { "word": "towards", "phonetic": "/təˈwɔːdz/", "type": "prep.", "trans": "朝向" },
      { "word": "nearly", "phonetic": "/ˈnɪəli/", "type": "adv.", "trans": "几乎" },
      { "word": "sight", "phonetic": "/saɪt/", "type": "n.", "trans": "眼界，视域" }
    ],
    "sections": [
      { "sentence": "The river which flows through the town is a favourite place for children.", "notes": ["<b>which flows through the town</b>: 定语从句，修饰river", "<b>a favourite place</b>: 一个很喜欢的地方"] },
      { "sentence": "He cut across the field to the car park.", "notes": ["<b>cut across</b>: 抄近路穿过", "<b>to the car park</b>: 去停车场"] }
    ]
  }
}
};
