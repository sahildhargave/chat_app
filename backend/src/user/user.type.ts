import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{
	@Field({ nullable: true })
	id?: number;

	@Field()
	fullname: string 

	@Field()
	email?: string 

	@Field()
	avatarUrl?: string;

	@Field()
	password?: string;

	@Field()
	createdAt?: Date;

	@Field()
	updatedAt?: Date;

	
	
	
	
}
