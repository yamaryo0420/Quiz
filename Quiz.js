const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機はどれ？',
    answers: [
      'スーパーファミコン', 'プレイステーション', 'ニンテンドースイッチ', 'ニンテンドーDS',
    ],
    correct: 'ニンテンドーDS',
  },{
    question: 'ACミランに所属していた選手は？',
    answers: [
      '本田圭佑', '香川真司', '大迫勇也', '久保建英',
    ],
    correct: '本田圭佑',
  },{
    question: '日本初代内閣総理大臣は？',
    answers: [
      '黒田清隆', '大久保利通', '大隈重信', '伊藤博文',
    ],
    correct: '伊藤博文',
  },
]

let quizIndex = 0;
const quiz_Length = quiz.length;

let score = 0;

const $button = document.getElementsByTagName('button');
const button_Length = $button.length;
//クイズの問題文 選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < button_Length){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }
  else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quiz_Length){
    //問題があれば実行
    setupQuiz();
  }
  else{
    //問題がなければ実行
    window.alert(`終了！あなたの正解数は ${score} / ${quiz_Length} です！`);
  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < button_Length){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  }); 
  handlerIndex++;
}