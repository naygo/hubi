import { HttpResponse } from './HttpResponse'

export interface Service<T = any> {
  execute(args: T): Promise<HttpResponse>
}
