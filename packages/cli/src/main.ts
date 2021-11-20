import { Command } from 'commander'
import { version } from '../package.json'
import {
  ISayOptions,
  ServiceOne
} from '@project-name/lib-one/services/service-one'
import { Container } from 'typescript-ioc'

const serviceOne = Container.get<ServiceOne>(ServiceOne)

const program = new Command()

program
  .command('hello')
  .argument('[name]')
  .option('-p, --prefix <greet>', 'Hello')
  .action((name: string, options?: ISayOptions) => {
    console.log(options)
    console.log(serviceOne.say(name, options))
  })

program.version(version)
program.parse(process.argv)
