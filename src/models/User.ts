export interface LogInUserDto {
  password: string
  email: string
}

export interface CreateUserDto extends LogInUserDto {
  id?: any
  firstName: string
  lastName: string
}