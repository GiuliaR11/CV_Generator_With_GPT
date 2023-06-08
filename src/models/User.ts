export interface UserDto {
  password: string
  email: string
}

export interface CreateUserDto extends UserDto {
  firstName: string
  lastName: string
}