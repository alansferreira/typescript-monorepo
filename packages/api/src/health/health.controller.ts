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
import { HealthInfo } from './interfaces'

@Route('')
export class HealthController extends Controller {
  @SuccessResponse('200', 'Success') // Custom success response
  @Get('/health')
  public async getHealth(): Promise<HealthInfo> {
    return {
      name: 'teste',
      version: '0.0.1'
    }
  }
}
