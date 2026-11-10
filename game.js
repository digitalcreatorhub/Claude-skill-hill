// Игра «Собери промпт». В каждом раунде для каждой части первый вариант — правильный (порядок перемешивается в приложении).
window.GAME_RU = [
 {id:"g1",sc:"Вы владелец кофейни и хотите пост для Instagram о новом сезонном напитке.",slots:[
  ["Ты опытный SMM-специалист для небольших кафе.","Ты кто-нибудь.","Ты лучший в мире."],
  ["Кофейня в центре Риги, гости — студенты и офисные работники, новый напиток — тыквенный латте.","У нас кафе.","Сделай как обычно."],
  ["Напиши пост о новом напитке, который захочется попробовать.","Напиши что-нибудь.","Сделай пост, как сам знаешь."],
  ["До 80 слов, 3 хэштега, призыв зайти сегодня.","Красиво.","Сколько хочешь текста."]]},
 {id:"g2",sc:"Нужно вежливо напомнить клиенту о неоплаченном счёте.",slots:[
  ["Ты бухгалтер, который ценит отношения с клиентами.","Ты строгий коллектор.","Ты робот."],
  ["Клиент постоянный, счёт на 450 € просрочен на 10 дней, раньше платил вовремя.","Клиент не платит.","Ну ты понял."],
  ["Напиши напоминание об оплате с предложением помощи, если есть трудности.","Напиши, чтобы заплатил.","Пригрози судом."],
  ["Письмо до 100 слов, тон тёплый и деловой, номер счёта в первой строке.","Как-нибудь.","Длинно и подробно."]]},
 {id:"g3",sc:"Вы готовитесь к собеседованию и хотите потренироваться.",slots:[
  ["Ты строгий, но справедливый руководитель отдела продаж.","Ты мой друг.","Ты HR-бот."],
  ["Я претендую на должность менеджера по продажам, опыт 3 года в рознице.","Я ищу работу.","Есть собеседование."],
  ["Проведи со мной собеседование: задавай по одному вопросу и жди ответа.","Расскажи про собеседования.","Задай 50 вопросов сразу."],
  ["После 6 вопросов дай разбор: 3 сильных стороны и 3 ошибки.","В конце скажи «молодец».","Без разбора."]]},
 {id:"g4",sc:"Нужно разобраться в договоре аренды перед подписанием.",slots:[
  ["Ты внимательный помощник, который объясняет документы простым языком.","Ты мой адвокат в суде.","Ты оптимист."],
  ["Я снимаю квартиру впервые, договор на 12 месяцев, загружаю его файлом.","Вот бумажка.","Посмотри что-то."],
  ["Найди все платежи, штрафы, условия расторжения и необычные пункты.","Скажи, нормальный ли договор.","Перескажи всё."],
  ["Таблица с номерами пунктов, затем 3 вопроса, которые стоит задать арендодателю.","Как удобно.","Одним словом: да или нет."]]},
 {id:"g5",sc:"Вы хотите план тренировок для занятого человека.",slots:[
  ["Ты тренер, который работает с занятыми взрослыми.","Ты чемпион мира.","Ты мой фитнес-браслет."],
  ["Мне 35 лет, могу заниматься дома 3 раза в неделю по 30 минут, есть гантели.","Хочу в форму.","Я спортсмен, наверное."],
  ["Составь план на 4 недели с постепенным ростом нагрузки.","Дай упражнения.","Сделай меня сильным."],
  ["Таблица по неделям и дням, у каждого упражнения — подходы и повторы.","Подробно-подробно.","Без структуры."]]},
 {id:"g6",sc:"Нужно описание товара для интернет-магазина.",slots:[
  ["Ты копирайтер интернет-магазинов, пишешь продающе и честно.","Ты поэт.","Ты продавец на рынке."],
  ["Товар — керамическая кружка ручной работы, 350 мл, можно в посудомойку, покупатели — любители подарков.","Кружка.","Хорошая вещь."],
  ["Напиши описание, которое отвечает на главные вопросы покупателя.","Опиши товар.","Похвали товар."],
  ["Заголовок, 3 преимущества списком, абзац до 60 слов, без превосходных степеней.","Как получится.","Очень длинно."]]},
 {id:"g7",sc:"Вы хотите понять тему, которую раньше не изучали.",slots:[
  ["Ты терпеливый репетитор для взрослых новичков.","Ты профессор, который не упрощает.","Ты энциклопедия."],
  ["Я никогда не изучал экономику, хочу понять, что такое инфляция и почему растут цены.","Объясни экономику.","Я всё знаю, но забыл."],
  ["Объясни по частям и после каждой задай мне вопрос на понимание.","Расскажи всё сразу.","Дай ссылку."],
  ["Каждая часть до 100 слов, один пример из жизни, без формул.","Как в учебнике.","С формулами и графиками."]]},
 {id:"g8",sc:"Нужен ответ на негативный отзыв в Google.",slots:[
  ["Ты менеджер по работе с клиентами в детейлинг-студии.","Ты обиженный владелец.","Ты адвокат."],
  ["Клиент недоволен сроками: машину отдали на день позже обещанного, качество не критикует.","Плохой отзыв.","Клиент дурак."],
  ["Напиши публичный ответ: признай задержку, извинись, предложи решение.","Оправдайся.","Удали отзыв."],
  ["До 70 слов, без шаблонных фраз, с предложением связаться напрямую.","Длинное письмо.","Одной строкой «извините»."]]}
];
window.GAME_EN = [
 {id:"g1",sc:"You own a café and want an Instagram post about a new seasonal drink.",slots:[
  ["You're an experienced social media specialist for small cafés.","You're someone.","You're the best in the world."],
  ["A café in central Riga; guests are students and office workers; the new drink is a pumpkin latte.","We have a café.","Do the usual."],
  ["Write a post about the new drink that makes people want to try it.","Write something.","Make a post however you like."],
  ["Under 80 words, 3 hashtags, a call to drop in today.","Make it nice.","As much text as you want."]]},
 {id:"g2",sc:"You need to politely remind a client about an unpaid invoice.",slots:[
  ["You're an accountant who values client relationships.","You're a tough debt collector.","You're a robot."],
  ["A regular client; a €450 invoice is 10 days overdue; they've always paid on time before.","The client isn't paying.","You know what I mean."],
  ["Write a payment reminder that offers help if they're having difficulties.","Write so they pay.","Threaten court."],
  ["Under 100 words, warm and professional tone, invoice number in the first line.","Somehow.","Long and detailed."]]},
 {id:"g3",sc:"You're preparing for a job interview and want to practise.",slots:[
  ["You're a strict but fair head of sales.","You're my friend.","You're an HR bot."],
  ["I'm applying for a sales manager role with 3 years of retail experience.","I'm looking for a job.","There's an interview."],
  ["Interview me: ask one question at a time and wait for my answer.","Tell me about interviews.","Ask 50 questions at once."],
  ["After 6 questions, review me: 3 strengths and 3 mistakes.","Say “well done” at the end.","No review."]]},
 {id:"g4",sc:"You need to understand a rental agreement before signing.",slots:[
  ["You're a careful assistant who explains documents in plain language.","You're my lawyer in court.","You're an optimist."],
  ["I'm renting for the first time; the lease is 12 months; I'm uploading it as a file.","Here's a paper.","Look at something."],
  ["Find all payments, penalties, termination terms and unusual clauses.","Tell me if the contract is fine.","Retell all of it."],
  ["A table with clause numbers, then 3 questions to ask the landlord.","However is convenient.","One word: yes or no."]]},
 {id:"g5",sc:"You want a workout plan for a busy person.",slots:[
  ["You're a coach who works with busy adults.","You're a world champion.","You're my fitness tracker."],
  ["I'm 35, can train at home 3 times a week for 30 minutes, and have dumbbells.","I want to get fit.","I'm an athlete, probably."],
  ["Make a 4-week plan with a gradual increase in load.","Give me exercises.","Make me strong."],
  ["A table by week and day; each exercise with sets and reps.","Very, very detailed.","No structure."]]},
 {id:"g6",sc:"You need a product description for an online shop.",slots:[
  ["You're an e-commerce copywriter who writes persuasively and honestly.","You're a poet.","You're a market trader."],
  ["The product is a handmade ceramic mug, 350 ml, dishwasher-safe; buyers are gift shoppers.","A mug.","A good thing."],
  ["Write a description that answers the buyer's main questions.","Describe the product.","Praise the product."],
  ["A headline, 3 benefits as a list, a paragraph under 60 words, no superlatives.","However it turns out.","Very long."]]},
 {id:"g7",sc:"You want to understand a topic you've never studied.",slots:[
  ["You're a patient tutor for adult beginners.","You're a professor who doesn't simplify.","You're an encyclopedia."],
  ["I've never studied economics and want to understand inflation and why prices rise.","Explain economics.","I know everything but forgot."],
  ["Explain in parts and ask me a comprehension question after each.","Tell me everything at once.","Give me a link."],
  ["Each part under 100 words, one real-life example, no formulas.","Like a textbook.","With formulas and charts."]]},
 {id:"g8",sc:"You need a reply to a negative Google review.",slots:[
  ["You're a customer relations manager at a car detailing studio.","You're an offended owner.","You're a lawyer."],
  ["The customer is unhappy about timing: the car was returned a day late; they don't criticise the quality.","A bad review.","The customer is an idiot."],
  ["Write a public reply: acknowledge the delay, apologise, offer a solution.","Make excuses.","Delete the review."],
  ["Under 70 words, no stock phrases, with an offer to get in touch directly.","A long letter.","One line: “sorry”."]]}
];
