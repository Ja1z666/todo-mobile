import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { VerificationInput, CheckVerificationInput } from "./resolversTypes";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new Twilio(accountSid, authToken);

@Resolver()
export class UserResolver{
    @Query(() => String)
    message() {
        return "cool";
    }

    @Mutation(() => Number)
    async sendVerificationCode(@Arg('options', () => VerificationInput) options: VerificationInput){
        const verification = await client.verify.v2.services('VA0bf02f1f262bc4410c0193cfdfd98baa')
            .verifications
            .create({to: `+${options.number}`, channel: 'sms'});
        if(verification.status == 'pending') return 200;
        else return 500;
    }

    @Mutation(() => Number)
    async chekVerificationCode(@Arg('options', () => CheckVerificationInput) options: CheckVerificationInput){
        const verification = await client.verify.v2.services('VA0bf02f1f262bc4410c0193cfdfd98baa')
            .verificationChecks
            .create({to: `+${options.number}`, code: options.code});
        if(verification.status == 'approved') return 200;
        else if (verification.status == 'pending') return 400;
        else return 500;
    }
}