# KanBan Task

This project ...

# Run Node API

## Run migrations for prisma

```
$ npx prisma migrate dev --name name
```

## Run API
```
$ npm run dev
```

## Access Database
```
$ npx prisma studio
```

## Log Mode

if you need, create a instance of PrismaClient() as:

```
const prisma = new PrismaClient({ log: ['query', 'info'] })
``` 