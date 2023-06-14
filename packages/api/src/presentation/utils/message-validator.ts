export class MessageValidator {
  static empty(field: string) {
    return `${field} não pode estar vazio`
  }

  static number(field: string) {
    return `${field} deve ser um número`
  }

  static integer(field: string) {
    return `${field} deve ser um inteiro`
  }

  static array(field: string) {
    return `${field} deve ser um array`
  }

  static string(field: string) {
    return `${field} deve ser uma string`
  }

  static emptyArray(field: string) {
    return `${field} não pode ser um array vazio`
  }

  static maxLength(field: string, length: number) {
    return `${field} deve ter no máximo ${length} caracteres`
  }

  static different(field: string, valor: any) {
    return `${field} deve ser diferente de ${valor}`
  }

  static equals(field: string, valor: any[]) {
    return `${field} deve incluir [${valor}]`
  }

  static boolean(field: string) {
    return `${field} deve ser um boolean`
  }

  static equalsTo(field: string, length: number) {
    return `${field} deve ser igual a ${length}`
  }

  static email(field: string) {
    return `${field} deve ser um email válido`
  }

  static date(field: string) {
    return `${field} deve ser uma data`
  }
}
