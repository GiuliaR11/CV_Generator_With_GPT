export interface LogInUserDto {
  password: string
  email: string
}

export interface CreateUserDto extends LogInUserDto {
  firstName: string
  lastName: string
}