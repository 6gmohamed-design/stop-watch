 function List_quiz(){
   const questions = [ 
     {question:"what is the capital of france?"
        ,options:["paris","london","berlin","madrid"],
        answer:"paris"},
     {question:"what is the capital of germany?"
        ,options:["paris","london","berlin","madrid"],
        answer:"berlin"},
     {question:"what is the capital of spain?"
        ,options:["paris","london","berlin","madrid"],
        answer:"madrid"},
     {question:"what is the capital of italy?"
        ,options:["paris","london","berlin","madrid"],
        answer:"rome"},
   ]; 
 return<> 
 {questions.map((question,index)=>{
   return <div key={index}>
     <h3 className="question">{question.question}</h3>
     {question.options.map((option,index)=>{
       return <button key={index} className="option">{option}</button>;
     })}
     <h4 className="answer">{question.answer}</h4> 
   </div>;
 })}
 </>;
 }
 export default List_quiz;