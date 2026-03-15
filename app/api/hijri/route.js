export async function GET() {

const res = await fetch(
"https://api.aladhan.com/v1/hijriCalendar/1447/9?latitude=24.8607&longitude=67.0011&method=2"
)

const data = await res.json()

return Response.json(data)

}