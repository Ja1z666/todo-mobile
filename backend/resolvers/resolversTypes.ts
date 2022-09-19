import { Field, InputType } from "type-graphql";

@InputType()
export class VerificationInput{
    @Field()
    number: string;
}

@InputType()
export class CheckVerificationInput{
    @Field()
    number: string;

    @Field()
    code: string;
}