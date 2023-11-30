# Next 14 (server action) Githread ( thread of github posts )

Designed by - ME with shadUI <br/>Live preview [here](https://githread-adam.vercel.app/)<br/>

![Imgur](https://i.imgur.com/T01cqBe.png)
// to run this projet in your local 

1) Step 1 : Clone the branch
2) Step 2 : Create .env file & add those infos,
DATABASE_URL= ''
GITHUB_ID= ""
GITHUB_SECRET=""
You can configure your Github id & secret on settings.

3) Step 3: this project is using postgresql you can create an account on Neon
https://neon.tech/

4) migrate the data base with this commande :
npx prisma migrate dev

5) to add data on your data base i implemented a seed to get fake data run this command:
npx prisma db seed

6) you can now install the dependencies with npm install then npm run dev
