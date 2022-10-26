const express = require('express')
const app = express()
const port = 5000


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//   app.get('/', function(req, res, next) {
//     // Handle the get for this route
//   });

//   app.post('/', function(req, res, next) {
//    // Handle the post for this route
//   });


const dataRu = [
  {
    id: 6,
    section: 'CV',
    title: 'Позвольте представиться',
    innertext: '<div>Меня зовут Артём Александров</div>\n' +
      '<div>Программирование это моя страсть и хобби</div>\n' +
      '<div>Моё свежее <a href="https://hh.ru/applicant/resumes/view?resume=0f2fc040ff0b1eb19d0039ed1f524237727646" alt="HeadHunter" target="parent">резюме можно найти на hh.ru</a></div>' +
      '<img class="border" src="../screens/me.jpg" alt="me" />\n',
    tags: '["Programmer", "Engineer", "philanthropist"]'
  },

  {
    id: 1,
    section: 'Web',
    title: 'Приложение вопрос/ответ',
    innertext: '<div>Web-приложение построено на основе React и перерабатывает данные API.</div> \n' +
      '    <div>База данных Trivia API <a href="https://opentdb.com/api_config.php" target="top">https://opentdb.com/api_config.php</a> </div> \n' +
      '    <div>Fetch, async, useEffect, States и парочка колбэкхеллов</div> \n' +
      '    <a href="quizzical" target="top"><img class="window" src="../screens/quizzical.jpg" width="650"  alt="Quizzical" /></a>',
    tags: '["javascript", "React", "API", "CSS", "web"]'
  },
  {
    id: 2,
    section: 'GameDev',
    title: 'Игра для геймджема "One Button"',
    innertext: '<div>Геймджем выходного дня с темой – "одна кнопка, два цвета". Сделано за пару вечеров в Unity.</div>\n' +
      '<div>На каждом уровне генерируется два цвета и ими раскрашиваются элементы по границе экрана. Задача – перекрасить все элементы в один цвет. С каждым уровнем добавляется усложняющий элемент на поле</div>\n' +
      '     <a href="https://artemflomaster.itch.io/one-button-two-colours" target="parent"><img class="border" src="../screens/one-button.jpg" alt="One Button" /></a>',
    tags: '["Csharp", "Unity", "GameDev"]'
  },
  {
    id: 3,
    section: 'GameDev',
    title: 'Четыре столпа ООП',
    innertext: '<div>В игре можно увидеть четыре столпа Объектно Ориентированного Программирования в прямо смысле и в коде.</div>\n' +
      '<div>Шутливая игра-тренировка в рамках отработки приципов ООП на C#</div>\n' +
      '     <a href="https://play.unity.com/mg/other/webgl-builds-119289" target="parent"><img class="border" src="../screens/oop-game.jpg" alt="OOP pillars" /></a>',
    tags: '["Csharp", "Unity", "GameDev"]'
  },
  {
    id: 4,
    section: 'GameDev',
    title: 'Игра Pachinko',
    innertext: '<div>Автоматы с игрой Pachinko популярны в Японии. Эта игра является вариацией на тему Pachinko на движке Unity</div>\n' +
      '     <a href="https://play.unity.com/mg/other/pachinko-counter" target="parent"><img class="border" src="../screens/pachinko.jpg" alt="Pachinko" /></a>',
    tags: '["Csharp", "Unity", "GameDev"]'
  },
  {
    id: 5,
    section: 'EtCetera',
    title: 'Èlka',
    innertext: '<div>Новогодний проект на Arduino.</div>\n' +
      '<div>Использованы ультразвузовой дальномер, светодиоды и бипер от компьютера</div>\n' +
      '     <a href="https://vimeo.com/manage/videos/56931288" target="parent"><img class="border" src="../screens/elka.gif" alt="Èlka" /></a>',
    tags: '["Arduino", "Hardware"]'
  }

]

const dataEn = [
  {
    id: 6,
    section: 'CV',
    title: 'Let me introduce myself.',
    innertext: '<div>My name is Artem Alexandrov</div>\n' +
      '<div>I am passioned with programming and computer sciense.</div>\n' +
      '<div>Please find <a href="https://hh.ru/applicant/resumes/view?resume=0f2fc040ff0b1eb19d0039ed1f524237727646" alt="HeadHunter" target="parent">my recent CV at hh.ru</a></div>' +
      '<img class="border" src="../screens/me.jpg" alt="me" />\n',
    tags: '["Programmer", "Engineer", "philanthropist"]'
  },

  {
    id: 1,
    section: 'Web',
    title: 'Trivia API prototype',
    innertext: '<div>Web application build with React JS and prosesses data from simple API.</div> \n' +
      '    <div>The Trivia API Database <a href="https://opentdb.com/api_config.php" target="top">https://opentdb.com/api_config.php</a> </div> \n' +
      '    <div>Fetch, async, useEffect, States and a few callback hells</div> \n' +
      '    <a href="quizzical" target="top"><img class="window" src="../screens/quizzical.jpg" width="650"  alt="Quizzical" /></a>',
    tags: '["javascript", "React", "API", "CSS", "web"]'
  },
  {
    id: 2,
    section: 'GameDev',
    title: 'Game for the weekend game jam',
    innertext: '<div>The project for game jam called One Button. Made in two evenings in Unity engine.</div>\n' +
      '     <a href="https://artemflomaster.itch.io/one-button-two-colours" target="parent"><img class="border" src="../screens/one-button.jpg" alt="One Button" /></a>',
    tags: '["Csharp", "Unity", "GameDev"]'
  },
  {
    id: 3,
    section: 'GameDev',
    title: 'The Four Pillars of Object Oriented Programming',
    innertext: '<div>Game shows four pillars in the game as well is in the code</div>\n' +
      '     <a href="https://play.unity.com/mg/other/webgl-builds-119289" target="parent"><img class="border" src="../screens/oop-game.jpg" alt="OOP pillars" /></a>',
    tags: '["Csharp", "Unity", "GameDev"]'
  },
  {
    id: 4,
    section: 'GameDev',
    title: 'The Pachinko prototype',
    innertext: '<div>The Pachinko game prototype</div>\n' +
      '     <a href="https://play.unity.com/mg/other/pachinko-counter" target="parent"><img class="border" src="../screens/pachinko.jpg" alt="Pachinko" /></a>',
    tags: '["Csharp", "Unity", "GameDev"]'
  },
  {
    id: 5,
    section: 'EtCetera',
    title: 'Èlka',
    innertext: '<div>New Year hobby project based in Arduino</div>\n' +
      '     <a href="https://vimeo.com/manage/videos/56931288" target="parent"><img class="border" src="../screens/elka.gif" alt="Èlka" /></a>',
    tags: '["Arduino", "Hardware"]'
  }

]



app.get('/server/ru', (req, res) => {
  res.send(dataRu)
})

app.get('/server/en', (req, res) => {
  res.send(dataEn)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})