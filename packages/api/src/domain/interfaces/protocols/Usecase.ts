export interface Usecase<T = unknown, R = unknown> {
  execute(args: T): Promise<R>
}
