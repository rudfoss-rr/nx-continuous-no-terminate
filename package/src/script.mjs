console.log("Started")

await new Promise((res) => {
  console.log("waiting...")
  setTimeout(res, 15000)
})

process.on("SIGINT", () => {
  console.log("Exited from signal")
  process.exit(0)
})

console.log("Exited as normal")