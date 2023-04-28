export const ok = (data: unknown) => ({
  statusCode: 200,
  body: data,
})

export const notFound = (message: string) => ({
  statusCode: 404,
  body: {
    statusCode: 404,
    message,
  },
})

export const serverError = () => ({
  statusCode: 500,
  body: {
    statusCode: 500,
    message: 'Internal server error',
  },
})
