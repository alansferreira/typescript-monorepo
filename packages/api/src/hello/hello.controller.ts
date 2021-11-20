import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse
} from 'tsoa'
import { ServiceOne } from '@project-name/lib-one/services/service-one'
import { Inject } from 'typescript-ioc'

@Route('/hello')
export class HelloController extends Controller {
  @Inject
  private serviceOne: ServiceOne

  @SuccessResponse('200', 'Success') // Custom success response
  @Get('{name}')
  public async getHealth(@Query() name: string): Promise<string> {
    return this.serviceOne.say(name)
  }
}
