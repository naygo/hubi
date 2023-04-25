export const ok = (data: any) => ({
  statusCode: 200,
  body: data,
})

export const serverError = () => ({
  statusCode: 500,
  body: 'Internal server error',
})
