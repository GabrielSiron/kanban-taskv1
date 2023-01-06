import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const tags: Prisma.TagCreateInput[] = [
    {
        title: "Muito Importante",
        color: "#212121"
    },
    {
        title: "Importante",
        color: "#FAFAFA"
    }
]

async function main() {
  for (const u of tags) {
    
    const user = await prisma.tag.create({
      data: u,
    })

  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
