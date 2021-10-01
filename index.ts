import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
  // Connect the client
  await prisma.$connect();

  // await prisma.user.create({
  //   data: {
  //     fullName: 'Max Marcon',
  //     email: 'ff@bar.com',
  //     screenName: 'mmarcon',
  //     boards: {
  //       create: {
  //         nickName: 'crazy cruiser',
  //         brand: 'Arbor'
  //       }
  //     }
  //   }
  // })

  // // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     boards: true
  //   }
  // })
  // console.dir(allUsers, { depth: null })

  const user = await prisma.user.findUnique({
    where: {
      screenName: 'mmarcon'
    }
  })
  console.log(user);
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
