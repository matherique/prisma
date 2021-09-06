import { CreateUserParams } from "../domain/usecases/create-user"
import { CreateUserRepository, UserModel } from "./ports/create-user-repository"

export class CreateUserUsecase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async create(data: CreateUserParams): Promise<UserModel> {
    const createdUser = await this.createUserRepository.save(data)

    if (!createdUser) {
      return null
    }

    return createdUser
  }
}
