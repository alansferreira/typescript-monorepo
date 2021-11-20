import { Singleton } from 'typescript-ioc'
export interface ISayOptions {
  prefix?: string
}

@Singleton
export class ServiceOne {
  say(name: string, opt?: ISayOptions) {
    return `${opt.prefix || 'Hello'} ${name}!`
  }
}
