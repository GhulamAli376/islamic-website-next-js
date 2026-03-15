"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { jsPDF } from "jspdf"
import Navbar from "../components/Navbar/page"

export default function QuizPage(){

const [questions,setQuestions] = useState([])
const [score,setScore] = useState(0)
const [current,setCurrent] = useState(0)
const [selected,setSelected] = useState(null)
const [showAnswer,setShowAnswer] = useState(false)

useEffect(()=>{
  
document.title = "Quiz | Read & Learn Islamic Knowledge"
fetch("/api/quiz?limit=20")
.then(res=>res.json())
.then(data=>setQuestions(data))
},[])

function selectOption(option){

if(showAnswer) return

setSelected(option)
setShowAnswer(true)

if(option === questions[current].answer){
setScore(prev=>prev+1)
}

}

function nextQuestion(){
setCurrent(prev=>prev+1)
setSelected(null)
setShowAnswer(false)
}

function celebrate(){
confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})
}

function generateCertificate(){

const doc = new jsPDF()

// background
doc.setFillColor(15,23,42)
doc.rect(0,0,210,297,"F")

// golden border
doc.setDrawColor(212,175,55)
doc.setLineWidth(4)
doc.rect(10,10,190,277)

doc.setLineWidth(1)
doc.rect(15,15,180,267)

// title
doc.setTextColor(212,175,55)
doc.setFont("helvetica","bold")
doc.setFontSize(34)
doc.text("Certificate of Achievement",105,60,{align:"center"})

// subtitle
doc.setFontSize(18)
doc.text("Islamic Knowledge Quiz",105,80,{align:"center"})

// line
doc.setDrawColor(212,175,55)
doc.line(60,90,150,90)

// awarded text
doc.setFontSize(16)
doc.setTextColor(255,255,255)
doc.text("Awarded for Outstanding Performance",105,110,{align:"center"})

// score
doc.setFontSize(24)
doc.setTextColor(212,175,55)
doc.text(`Score: ${score} / ${questions.length}`,105,140,{align:"center"})

// message
doc.setFontSize(14)
doc.setTextColor(255,255,255)
doc.text(
"May Allah increase your knowledge and guide you",
105,
170,
{align:"center"}
)

// date
doc.setFontSize(12)
doc.text(`Date: ${new Date().toLocaleDateString()}`,105,210,{align:"center"})

// signature
doc.line(40,240,80,240)
doc.line(130,240,170,240)

doc.text("Instructor",60,250,{align:"center"})
doc.text("Islamic Center",150,250,{align:"center"})

doc.save("Islamic-Quiz-Certificate.pdf")

}

if(questions.length === 0){
return(
<div className="flex items-center justify-center h-screen bg-black text-white text-xl">
Loading Quiz...
</div>
)
}

if(current >= questions.length){

const percent = (score / questions.length) * 100

if(percent >= 70){
celebrate()
}

return(

<div className="relative h-screen flex items-center justify-center text-white">

{/* background video */}

 <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/mosque.mp4" type="video/mp4" />
      </video>

<div className="absolute inset-0 bg-black/70"></div>

{/* result card */}

<div className="relative bg-white/10 backdrop-blur-xl border border-yellow-500 p-12 rounded-2xl text-center max-w-lg shadow-2xl">

<h1 className="text-5xl font-bold mb-6 text-yellow-400">
Quiz Completed
</h1>

<div className="text-6xl font-bold mb-6">
{score} / {questions.length}
</div>

<p className="text-xl mb-6">

{percent >= 90
? "🏆 Outstanding! Certificate Unlocked"
: percent >= 70
? "🎉 Great Knowledge"
: "📚 Keep Learning"}

</p>

{percent >= 90 && (

<button
onClick={generateCertificate}
className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-bold"
>

Download Certificate

</button>

)}

<button
onClick={()=>window.location.reload()}
className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg"
>

Restart Quiz

</button>

</div>

</div>

)
}

const q = questions[current]
const progress = ((current+1)/questions.length)*100

return(

<div className="relative min-h-screen flex items-center justify-center text-white">

{/* background video */}

<video
autoPlay
muted
loop
playsInline
preload="metadata"
className="absolute w-full h-full object-cover"
>
<source src="/mosquenew.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/70"></div>

{/* quiz card */}

<div className="relative  mt-24 bg-gradient-to-br from-black/70 to-gray-900/70 border border-yellow-500 shadow-2xl rounded-2xl max-w-xl w-full p-10">

{/* progress bar */}

<div className="w-full bg-gray-700 h-2 rounded mb-6">
<div
className="bg-yellow-500 h-2 rounded"
style={{width:`${progress}%`}}
></div>
</div>

<div className="flex justify-between mb-6 text-sm">

<span>
Question {current+1} / {questions.length}
</span>

<span>
Score: {score}
</span>

</div>

<h2 className="text-3xl font-bold mb-10 text-center">
{q.question}
</h2>

<div className="grid gap-4">

{q.options.map((opt,i)=>{

let style="bg-white/20 hover:bg-white/30"

if(showAnswer){

if(opt === q.answer){
style="bg-green-500"
}
else if(opt === selected){
style="bg-red-500"
}

}

return(

<button
key={i}
onClick={()=>selectOption(opt)}
className={`p-4 rounded-lg text-lg font-medium transition transform hover:scale-105 ${style}`}
>

{opt}

</button>

)

})}

</div>

{showAnswer && (

<button
onClick={nextQuestion}
className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg"
>

Next Question →

</button>

)}

</div>

</div>

)

}