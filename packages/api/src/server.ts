import { app } from './app'
import * as packageJson from '../package.json'

const PORT_NUMBER = process.env.PORT_NUMBER || 3000

app.listen(PORT_NUMBER, () => {
  console.log(` 🚀 ${packageJson.name} listen on ${PORT_NUMBER}!`)
})
