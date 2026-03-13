import { question } from "@/data/question.js"

function shuffle(array){
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array
}

export async function GET(){

const random = shuffle([...question]).slice(0,5)

const shuffledQuestions = random.map(q => ({
...q,
options: shuffle([...q.options])
}))

return Response.json(shuffledQuestions)

}