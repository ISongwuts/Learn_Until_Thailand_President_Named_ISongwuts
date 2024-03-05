import type { Server } from "bun";

const port = process.env.PORT || 3000
const server:Server = Bun.serve({
    port,
    fetch(req){ return new Response(`Server is running on port ${port}`) }
})

console.log(`Listening on http://localhost:${port}`)