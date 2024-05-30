import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RegisterResponse{
	@Field(() => User, { nullable: true })
	user?:User;
	
}

@ObjectType()
export class LoginResponse{
	@Field(() => User)
	user: User;
	
}
